// The work source. Today it's a simulation; later the agent layer plugs in
// here and emits the same events:
//
//   pitch      { thread: {kind, line, motif, hue, features[], area, quality, heavy} , by? }
//   work       { thread, state: 'started' | 'progress', progress }
//   finished   { thread, verified, receipts }
//   decision   { thread, question, options[2..3] }
//   rareFind   { thread: {...pitch fields, rare: true} }
//   failure    { thread, reason }
//   outgoing   { thread?, draft: {to, subject, body} }
//   incoming   { replyTo, from, body, timeSensitive }
//   todo       { text }
//   capability { cap }
//
// Everything is computed from timestamps. The queue of future events lives
// in the save, so closing the app doesn't stop anything: on return the
// game replays whatever came due, in order, at the time it happened.
import { Content, CAPABILITIES } from './content.js';
import { mulberry32 } from '../core/util.js';

export const MIN = 60 * 1000;
export const HOUR = 60 * MIN;
export const DAY = 24 * HOUR;

/** Tunable starting values (the decisions are fixed; the numbers aren't). */
export const TUNING = {
  firstPitchAfter: 35 * 1000,
  secondPitchAfter: 5 * MIN,
  pitchEveryDay: 85 * MIN, // mean gap, per ideas crew member, daytime
  pitchEveryNight: 4 * HOUR,
  buildMinutes: [25, 100],
  researchMinutes: [20, 80],
  todoMinutes: [4, 20],
  heavyFactor: 2.0,
  specialistFactor: 0.45,
  failBuild: 1 / 8,
  failResearch: 1 / 12,
  verifiedBuild: 0.72,
  verifiedResearch: 0.85,
  decisionChance: 0.3,
  outgoingAfterBuild: 0.35,
  replyChance: 0.75,
  timeSensitive: 0.1,
  rareEveryDays: [2, 3],
  researchFromDay: 1.5,
  todoFromDay: 3.5,
  todoEvery: [3 * HOUR, 9 * HOUR],
  capabilityEveryDays: [4, 7],
};

const isDaytime = (t) => {
  const h = new Date(t).getHours();
  return h >= 7 && h < 22;
};

/** Add `minutes` of work time starting at t (night hours count a third). */
export function addWorkTime(t, minutes) {
  let left = minutes * MIN;
  let now = t;
  const step = 10 * MIN;
  while (left > 0) {
    const rate = isDaytime(now) ? 1 : 0.33;
    const used = Math.min(step, left / rate);
    left -= used * rate;
    now += used;
  }
  return now;
}

export class SimulatedSource {
  constructor(state) {
    this.state = state;
    const s = (state.sim ||= {});
    s.queue ||= [];
    s.n ||= 0;
    s.used ||= { builds: [], research: [], todos: [] };
    this.content = new Content((state.seed ^ (s.n * 2654435761)) >>> 0);
    this.rng = mulberry32((state.seed + 99) >>> 0);
    if (!s.nextPitchAt) {
      s.nextPitchAt = state.createdAt + TUNING.firstPitchAfter;
      s.pitchesMade = 0;
    }
    s.nextRareAt ||= state.createdAt + this._days(TUNING.rareEveryDays);
    s.nextTodoAt ||= state.createdAt + TUNING.todoFromDay * DAY;
    s.nextCapAt ||= state.createdAt + this._days(TUNING.capabilityEveryDays);
  }

  get s() {
    return this.state.sim;
  }

  _r() {
    return this.rng();
  }
  _range([a, b]) {
    return a + this._r() * (b - a);
  }
  _days(r) {
    return this._range(r) * DAY;
  }
  _id(p = 't') {
    this.s.n++;
    return `${p}${this.s.n.toString(36)}${Math.floor(this._r() * 1296).toString(36)}`;
  }

  schedule(ev) {
    ev.id ||= this._id('e');
    const q = this.s.queue;
    let i = q.length;
    while (i > 0 && q[i - 1].at > ev.at) i--;
    q.splice(i, 0, ev);
    return ev;
  }

  unschedule(pred) {
    this.s.queue = this.s.queue.filter((e) => !pred(e));
  }

  // ------------------------------------------------------------ generated over time
  _ideasCount() {
    return Math.max(1, this.state.crew.filter((m) => m.role === 'ideas' && !m.away).length);
  }

  _nextPitchGap(at) {
    const base = isDaytime(at) ? TUNING.pitchEveryDay : TUNING.pitchEveryNight;
    // the rug holds three: with that many waiting, the crew mostly holds off
    const waiting = this.state.threads.filter((t) => t.status === 'pitched').length;
    const mean = (base / this._ideasCount()) * (waiting >= 3 ? 4 : waiting >= 2 ? 1.8 : 1);
    // exponential-ish, but never silly-short
    return Math.max(8 * MIN, -Math.log(1 - this._r() * 0.95) * mean);
  }

  _makePitch(at) {
    const s = this.s;
    const day = (at - this.state.createdAt) / DAY;
    const researchOk = day >= TUNING.researchFromDay && !!this.state.unlocks.gate;
    let p;
    if (researchOk && this._r() < 0.3) {
      p = this.content.researchPitch(new Set(s.used.research));
      s.used.research.push(p.key);
    } else {
      p = this.content.buildPitch(new Set(s.used.builds));
      s.used.builds.push(p.key);
      // the very first pitch is always a decent one
      if (s.pitchesMade === 0) {
        p.quality = 'good';
        p.line = p.key;
        p.features = p.features.length >= 2 ? p.features : p.features.concat([{ id: 'f9', line: 'small enough to finish this week', state: 'new' }]);
      }
    }
    s.pitchesMade = (s.pitchesMade || 0) + 1;
    return { type: 'pitch', at, thread: { id: this._id('t'), ...p, title: this.content.titleFor(p) } };
  }

  /** The earliest event that's due by `now`, or null. */
  next(now) {
    const s = this.s;
    const head = s.queue[0];
    const gen = [
      ['pitch', s.nextPitchAt],
      ['rare', s.nextRareAt],
      ['todo', this.state.unlocks.board ? s.nextTodoAt : Infinity],
      ['cap', this.state.unlocks.workshop ? s.nextCapAt : Infinity],
    ].sort((a, b) => a[1] - b[1])[0];
    const headAt = head ? head.at : Infinity;
    if (Math.min(headAt, gen[1]) > now) return null;
    if (headAt <= gen[1]) return s.queue.shift();
    const at = gen[1];
    switch (gen[0]) {
      case 'pitch': {
        const ev = this._makePitch(at);
        s.nextPitchAt = s.pitchesMade === 1 ? at + TUNING.secondPitchAfter : at + this._nextPitchGap(at);
        return ev;
      }
      case 'rare': {
        s.nextRareAt = at + this._days(TUNING.rareEveryDays);
        const f = this.content.rareFind();
        const p = this.content.buildPitch(new Set(s.used.builds));
        return { type: 'rareFind', at, thread: { id: this._id('t'), ...p, line: f.line, motif: f.motif, hue: f.hue, quality: 'delight', rare: true, title: f.line.replace(/^a /, 'the ') } };
      }
      case 'todo': {
        s.nextTodoAt = at + this._range(TUNING.todoEvery);
        const text = this.content.todo(new Set(s.used.todos.slice(-8)));
        s.used.todos.push(text);
        return { type: 'todo', at, text, id: this._id('t') };
      }
      case 'cap': {
        s.nextCapAt = at + this._days(TUNING.capabilityEveryDays);
        const have = new Set(this.state.capabilities.map((c) => c.id));
        const cap = CAPABILITIES.find((c) => !have.has(c.id));
        if (!cap) {
          s.nextCapAt = Infinity;
          return this.next(now);
        }
        return { type: 'capability', at, cap };
      }
    }
    return null;
  }

  // ------------------------------------------------------------ the game tells the source things
  /** Work begins on a thread (it has a slot and a crew member). */
  startWork(thread, at, { specialist = false } = {}) {
    const T = TUNING;
    let minutes;
    if (thread.kind === 'research') minutes = this._range(T.researchMinutes);
    else if (thread.kind === 'todo') minutes = this._range(T.todoMinutes);
    else minutes = this._range(T.buildMinutes);
    if (thread.heavy) minutes *= specialist ? T.heavyFactor * T.specialistFactor : T.heavyFactor;
    if (thread.quality === 'weak') minutes *= 0.8;
    // nudged simpler/smaller = quicker
    if (thread.size === 'small') minutes *= 0.7;
    if (thread.size === 'big') minutes *= 1.5;
    // work already done (resumed from the attic, or after a decision)
    const remaining = minutes * (1 - (thread.progress || 0));
    const end = addWorkTime(at, remaining);
    thread.workStart = at;
    thread.workEnd = end;
    this.schedule({ type: 'work', at, thread: thread.id, state: 'started' });
    // a decision part-way through (builds only, once)
    if (thread.kind === 'build' && !thread.asked && this._r() < T.decisionChance && (thread.progress || 0) < 0.4) {
      const k = 0.4 + this._r() * 0.2;
      thread.asked = true;
      this.schedule({ type: 'decision', at: at + (end - at) * k, thread: thread.id, progressAt: k, ...this.content.decision(thread) });
      return;
    }
    // the end: finished or failed
    const fail = thread.kind === 'research' ? T.failResearch : thread.kind === 'build' ? T.failBuild : 0;
    if (!thread.retried && this._r() < fail) {
      this.schedule({ type: 'failure', at: end, thread: thread.id, reason: this.content.failureReason(thread.kind) });
    } else {
      const ver = thread.kind === 'research' ? T.verifiedResearch : T.verifiedBuild;
      const verified = thread.kind === 'todo' ? true : this._r() < ver || thread.quality === 'delight';
      this.schedule({ type: 'finished', at: end, thread: thread.id, verified, receipts: thread.kind === 'todo' ? null : this.content.receipts(thread) });
    }
  }

  /** Stop scheduled work (shelved / bumped). */
  stopWork(thread) {
    this.unschedule((e) => e.thread === thread.id && (e.type === 'finished' || e.type === 'failure' || e.type === 'decision'));
  }

  /** After a finished build: maybe someone outside should see it. */
  maybeOutgoing(thread, at, force = false) {
    if (!force && this._r() > TUNING.outgoingAfterBuild) return;
    this.schedule({ type: 'outgoing', at: at + (2 + this._r() * 8) * MIN, thread: thread?.id || null, draft: this.content.letterFor(thread) });
  }

  /** A letter left the island; a reply may come back on a later mail round. */
  sent(letter, at) {
    if (this._r() > TUNING.replyChance) return;
    const ts = this._r() < TUNING.timeSensitive;
    const delay = ts ? (40 + this._r() * 80) * MIN : (3 + this._r() * 20) * HOUR;
    const r = this.content.reply(letter);
    this.schedule({ type: 'incoming', at: at + delay, replyTo: letter.id, from: r.from, body: r.body, timeSensitive: ts });
  }

  /** The player nudged a pitch: the crew rethinks it. */
  nudge(thread, dir) {
    const t = thread;
    const r = () => this._r();
    if (dir === 'simpler') {
      t.line = t.line.replace(/….*$/, '').replace(/, and .*$/, '');
      t.features = t.features.slice(0, 1);
      t.size = 'small';
      if (t.quality === 'weak' && r() < 0.5) t.quality = 'ordinary';
    } else if (dir === 'smaller') {
      t.line = `a tiny version: ${t.line.replace(/^(a|an) /, '')}`;
      t.size = 'small';
      t.heavy = false;
    } else if (dir === 'bigger') {
      t.line = `a whole ${t.line.replace(/^(a|an) (little |tiny )?/, '')}`;
      t.size = 'big';
      t.heavy = true;
      t.features = t.features.concat([{ id: `f${t.features.length}`, line: pickFrom(['works with friends', 'a settings page', 'it remembers everything', 'a little print version'], r), state: 'new' }]);
    } else if (dir === 'weirder') {
      t.line = `${t.line.replace(/….*$/, '')} ${pickFrom(['…but it’s a hat', '…for ghosts', '…that only speaks in rhymes', '…that runs on moonlight', '…shaped like a frog'], r)}`;
      const q = r();
      t.quality = q < 0.4 ? 'weak' : q < 0.8 ? 'ordinary' : q < 0.95 ? 'good' : 'delight';
    }
    t.title = this.content.titleFor(t);
    t.nudges = (t.nudges || []).concat(dir);
    return t;
  }

  /** A whispered request turns into a pitch from that crew member, soon. */
  whisper(text, by, at) {
    const p = this.content.buildPitch(new Set());
    const line = text.length > 70 ? `${text.slice(0, 68)}…` : text;
    this.schedule({
      type: 'pitch',
      at: at + (40 + this._r() * 80) * 1000,
      by,
      thread: { id: this._id('t'), ...p, line: `about what you said: ${line}`, key: text, quality: 'ordinary', features: p.features.slice(0, 1), title: `the ${line.split(' ').slice(0, 3).join(' ')}`, whispered: true },
    });
  }
}

function pickFrom(a, r) {
  return a[Math.floor(r() * a.length)];
}
