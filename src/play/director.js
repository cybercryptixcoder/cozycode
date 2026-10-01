// The director: applies work-source events to the island's state, assigns
// crew to work slots, decides who presents what, runs unlocks, grows the
// crew, and records news for the homecoming.
//
// All state changes go through here, so the same code path runs whether
// the app was open (live) or closed (catch-up on return).
import { SimulatedSource, MIN, HOUR, DAY, TUNING } from './source.js';
import { VISITORS } from './content.js';
import { bus } from '../core/events.js';
import { uid } from '../core/util.js';
import { clock } from './clock.js';

export const CAP = { rug: 3, board: 6, bench: 3, desk: 2, chalk: 7, crew: 8 };

const UNLOCK_ORDER = ['board', 'workshop', 'gate', 'study', 'kitchen', 'upstairs', 'garden', 'shed'];

const dayKey = (t) => {
  const d = new Date(t);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

export class Director {
  constructor(game) {
    this.game = game;
    this.store = game.store;
    this.source = new SimulatedSource(this.store.data);
    this.live = false;
    this.listeners = [];
  }

  get s() {
    return this.store.data;
  }

  // ------------------------------------------------------------ threads
  thread(id) {
    return this.s.threads.find((t) => t.id === id) || null;
  }

  threads(pred = () => true) {
    return this.s.threads.filter(pred);
  }

  log(t, at, text) {
    (t.log ||= []).push({ at, text });
    if (t.log.length > 40) t.log.splice(0, t.log.length - 40);
  }

  member(id) {
    return this.s.crew.find((m) => m.id === id) || null;
  }

  members(pred = () => true) {
    return this.s.crew.filter((m) => !m.away && pred(m));
  }

  news(item) {
    this.s.news ||= [];
    this.s.news.push({ id: uid('n'), seen: false, ...item });
    bus.emit('news', item);
  }

  ticker(text, at = clock.now()) {
    const tk = this.s.ticker;
    tk.last = [{ at, text }, ...(tk.last || [])].slice(0, 30);
    bus.emit('ticker', text);
  }

  taste(kind, data = {}) {
    const t = this.s.taste;
    t.push({ at: clock.now(), kind, ...data });
    if (t.length > 2000) t.splice(0, t.length - 2000);
  }

  // ------------------------------------------------------------ time
  /** Replay everything that came due up to `now`. */
  advance(now = clock.now(), { live = true } = {}) {
    this.live = live;
    let n = 0;
    for (;;) {
      const ev = this.source.next(now);
      if (!ev) break;
      this.apply(ev);
      this.fill(ev.at);
      this._periodic(ev.at);
      if (++n > 2000) break; // safety for very long absences
    }
    this._periodic(now);
    this.fill(now);
    this.s.lastSim = now;
    this.live = true;
    return n;
  }

  _periodic(at) {
    const s = this.s;
    const day = (at - s.createdAt) / DAY;
    // time-based unlocks: about a week in, then later
    if (day >= 6.5 && s.unlocks.study && s.unlocks.kitchen && !s.unlocks.upstairs) this.unlock('upstairs', at);
    if (day >= 12 && s.unlocks.upstairs && !s.unlocks.garden) this.unlock('garden', at);
    if (day >= 20 && s.unlocks.garden && !s.unlocks.shed && this.threads((t) => t.heavy && (t.status === 'done' || t.status === 'wip')).length) this.unlock('shed', at);
    // specialist budget resets each local day
    const dk = dayKey(at);
    if (s.specialist.day !== dk) {
      s.specialist.day = dk;
      s.specialist.used = 0;
    }
    this._growth(at);
    this._mailRounds(at);
  }

  // ------------------------------------------------------------ events
  apply(ev) {
    const at = ev.at;
    switch (ev.type) {
      case 'pitch':
      case 'rareFind':
        return this._pitch(ev, at);
      case 'work': {
        const t = this.thread(ev.thread);
        if (!t || t.status !== 'wip') return;
        this.log(t, at, ev.state === 'started' ? 'work started' : 'still going');
        return;
      }
      case 'decision': {
        const t = this.thread(ev.thread);
        if (!t || t.status !== 'wip') return;
        t.progress = ev.progressAt ?? 0.5;
        t.status = 'waiting';
        t.decision = { question: ev.question, options: ev.options, at };
        this.log(t, at, `needs a decision: ${ev.question}`);
        this.present(t.owner, { kind: 'decision', thread: t.id, at });
        this.news({ at, kind: 'decision', thread: t.id });
        this.ticker(`${this.nameOf(t.owner)} has a question about ${t.title}`, at);
        return;
      }
      case 'finished':
        return this._finished(ev, at);
      case 'failure': {
        const t = this.thread(ev.thread);
        if (!t || t.status !== 'wip') return;
        t.status = 'failed';
        t.failure = { reason: ev.reason, at };
        t.progress = 1;
        this.log(t, at, `didn’t work out: ${ev.reason}`);
        this._freeSlot(t);
        this.present(t.owner, { kind: 'failure', thread: t.id, at });
        this.news({ at, kind: 'failure', thread: t.id });
        this.ticker(`${t.title} didn’t quite work. ${this.nameOf(t.owner)} will tell you.`, at);
        return;
      }
      case 'outgoing':
        return this._outgoing(ev, at);
      case 'incoming':
        return this._incoming(ev, at);
      case 'todo':
        return this._todo(ev.text, at, ev.id);
      case 'capability': {
        if (this.s.capabilities.some((c) => c.id === ev.cap.id)) return;
        this.s.capabilities.push({ ...ev.cap, at });
        this.news({ at, kind: 'capability', cap: ev.cap.id });
        this.ticker(`a new tool turned up: ${ev.cap.name}. ${ev.cap.line}.`, at);
        bus.emit('capability', ev.cap);
        return;
      }
      case 'arrival':
        return this._arrival(ev, at);
      case 'specialistLeave':
        return this._specialistLeave(ev, at);
      case 'visitorLeave':
        return;
    }
  }

  nameOf(id) {
    return this.member(id)?.name || 'someone';
  }

  _pitch(ev, at) {
    const s = this.s;
    const t = { ...ev.thread, status: 'pitched', createdAt: at, log: [], progress: 0 };
    s.threads.push(t);
    // mostly the ideas folk; sometimes someone else had a thought too
    let by = ev.by && this.member(ev.by) ? ev.by : null;
    if (!by) {
      const ideas = this.members((m) => m.role === 'ideas');
      const others = this.members((m) => m.role !== 'ideas' && m.role !== 'specialist');
      const r = Math.random();
      const pool = r < 0.25 && others.length ? others : ideas.length ? ideas : others;
      // spread pitches across whoever's least busy presenting
      by = pool.sort((a, b) => (a.presentQueue?.length || 0) - (b.presentQueue?.length || 0))[0]?.id || s.crew[0]?.id;
    }
    t.by = by;
    this.log(t, at, ev.type === 'rareFind' ? 'found something rare' : 'pitched');
    this.present(by, { kind: 'pitch', thread: t.id, at });
    this.news({ at, kind: ev.type === 'rareFind' ? 'rare' : 'pitch', thread: t.id });
    if (ev.type === 'rareFind') this.ticker(`${this.nameOf(by)} found something glowing`, at);
    else this.ticker(`${this.nameOf(by)} has an idea`, at);
    s.story.pitchesSeen = (s.story.pitchesSeen || 0) + 1;
  }

  _finished(ev, at) {
    const s = this.s;
    const t = this.thread(ev.thread);
    if (!t || t.status !== 'wip') return;
    t.progress = 1;
    t.doneAt = at;
    t.verified = !!ev.verified;
    t.receipts = ev.receipts;
    this.log(t, at, t.verified ? 'finished and checked' : 'finished (not fully checked)');
    this._freeSlot(t);
    s.metrics.finished++;
    if (t.kind === 'todo') {
      t.status = 'ticked';
      bus.emit('todo:ticked', t);
      this.ticker(`ticked off: ${t.line}`, at);
      return;
    }
    t.status = 'done';
    this.present(t.owner, { kind: 'finished', thread: t.id, at });
    this.news({ at, kind: 'finished', thread: t.id });
    this.ticker(`${t.title} is done${t.verified ? '' : ' (mostly)'}`, at);
    if (t.kind === 'build') {
      s.finishedBuilds++;
      // the bench grows after every few finished builds
      const want = s.finishedBuilds >= 7 ? 3 : s.finishedBuilds >= 3 ? 2 : 1;
      if (want > s.benchSlots) {
        s.benchSlots = want;
        this.news({ at, kind: 'bench' });
        this.ticker('the bench got a new spot', at);
        bus.emit('bench:grew', want);
      }
      // someone outside might like to see it (the very first one: always)
      const firstOut = !s.unlocks.gate && !this.threads((x) => x.kind === 'letter').length;
      this.source.maybeOutgoing(t, at, firstOut);
    }
    if (t.specialist) this.source.schedule({ type: 'specialistLeave', at: at + 3 * MIN, member: t.owner });
  }

  _outgoing(ev, at) {
    const s = this.s;
    const t = {
      id: uid('t'),
      kind: 'letter',
      status: 'draft',
      createdAt: at,
      about: ev.thread,
      title: ev.draft.subject,
      line: `a letter to ${ev.draft.to}`,
      draft: ev.draft,
      log: [],
      motif: 'envelope',
      hue: 30,
    };
    s.threads.push(t);
    this.log(t, at, `drafted a letter to ${ev.draft.to}`);
    if (!s.unlocks.gate) this.unlock('gate', at);
    const pm = this.members((m) => m.role === 'postmaster')[0] || this.members((m) => m.role === 'generalist')[0] || this.members()[0];
    t.owner = pm?.id;
    this.present(t.owner, { kind: 'letter', thread: t.id, at });
    this.news({ at, kind: 'letter', thread: t.id });
    this.ticker(`a letter to ${ev.draft.to} is ready to send`, at);
  }

  _incoming(ev, at) {
    const s = this.s;
    const mail = { id: uid('m'), at, from: ev.from, body: ev.body, replyTo: ev.replyTo, timeSensitive: !!ev.timeSensitive, read: false };
    const letter = ev.replyTo && this.thread(ev.replyTo);
    if (letter) {
      letter.status = 'replied';
      this.log(letter, at, `${ev.from} wrote back`);
    }
    if (ev.timeSensitive) {
      // can't wait for a round
      this._deliver([mail], at);
    } else {
      s.mail.waiting = (s.mail.waiting || []).concat(mail);
    }
  }

  /** The bird does two rounds a day and only lands while the app is closed. */
  _mailRounds(at) {
    const s = this.s;
    const m = s.mail;
    if (!s.unlocks.gate) return;
    const rounds = [8, 18];
    // find rounds between lastRound and at
    let t = m.lastRound || at;
    const d = new Date(t);
    const due = [];
    for (let k = 0; k < 6 && due.length < 4; k++) {
      const day = new Date(d.getFullYear(), d.getMonth(), d.getDate() + k);
      for (const h of rounds) {
        const r = new Date(day.getFullYear(), day.getMonth(), day.getDate(), h).getTime();
        if (r > t && r <= at) due.push(r);
      }
    }
    for (const r of due) {
      m.lastRound = r;
      const open = this.live && this.game.visible;
      if (open) {
        m.roundWhileOpen = true; // land next time the app closes
        continue;
      }
      this._roundAt(r);
    }
  }

  _roundAt(r) {
    const m = this.s.mail;
    m.roundWhileOpen = false;
    const ready = (m.waiting || []).filter((x) => x.at <= r);
    m.waiting = (m.waiting || []).filter((x) => x.at > r);
    if (ready.length) this._deliver(ready, r);
  }

  /** Called when the app goes into the background: a held round can land. */
  onHidden(now) {
    if (this.s.mail.roundWhileOpen) this._roundAt(now);
  }

  _deliver(list, at) {
    const m = this.s.mail;
    m.inbox.push(...list);
    m.flag = true;
    m.birdHome = true;
    m.birdAt = at;
    this.news({ at, kind: 'mail', count: list.length });
    this.ticker(list.length > 1 ? `${list.length} letters came by bird` : `a letter came from ${list[0].from}`, at);
    bus.emit('mail:arrived', list);
  }

  _todo(text, at, id) {
    const s = this.s;
    const t = { id: id || uid('t'), kind: 'todo', status: 'todo', line: text, title: text, createdAt: at, log: [], progress: 0 };
    if (!s.unlocks.kitchen) this.unlock('kitchen', at);
    const open = this.threads((x) => x.kind === 'todo' && (x.status === 'todo' || x.status === 'wip'));
    if (open.length >= CAP.chalk) return; // the board is full; it'll come up again
    s.threads.push(t);
    this.log(t, at, 'written on the chalkboard');
    this.ticker(`new on the chalkboard: ${text}`, at);
    bus.emit('todo:added', t);
  }

  // ------------------------------------------------------------ work slots
  _freeSlot(t) {
    const m = this.member(t.owner);
    if (m && m.job && m.job.thread === t.id) m.job = null;
    t.slot = null;
  }

  /** Bench / desk / chalkboard slots in use. */
  slotsUsed(kind) {
    return this.threads((t) => t.kind === kind && (t.status === 'wip' || t.status === 'waiting') && t.slot !== null && t.slot !== undefined).map((t) => t.slot);
  }

  slotsFor(kind) {
    if (kind === 'build') return this.s.unlocks.workshop ? this.s.benchSlots : 0;
    if (kind === 'research') return this.s.unlocks.study ? CAP.desk : 0;
    if (kind === 'todo') return this.s.unlocks.kitchen ? 1 : 0;
    return 0;
  }

  freeWorker(kind, thread) {
    const pref = {
      build: ['builder', 'generalist'],
      research: ['researcher', 'generalist'],
      todo: ['chores', 'generalist'],
    }[kind];
    const idle = this.members((m) => !m.job && !m.specialist);
    for (const role of pref) {
      const m = idle.find((x) => x.role === role);
      if (m) return m;
    }
    void thread;
    return null;
  }

  /** Put waiting work into free slots with free crew. */
  fill(at) {
    const s = this.s;
    let waitingForCrew = 0;
    const queued = this.threads((t) => t.status === 'queued' || (t.kind === 'todo' && t.status === 'todo')).sort((a, b) => (a.queuedAt || a.createdAt) - (b.queuedAt || b.createdAt));
    for (const t of queued) {
      const kind = t.kind;
      const total = this.slotsFor(kind);
      const used = this.slotsUsed(kind);
      if (used.length >= total) continue;
      let worker = null;
      let specialist = false;
      // heavy lifting: the specialist comes if there's budget today
      if (t.heavy && kind === 'build') {
        const sp = this.members((m) => m.specialist && !m.job)[0];
        if (sp) {
          worker = sp;
          specialist = true;
        } else if (s.specialist.used < s.settings.specialistBudget && !s.specialist.coming) {
          s.specialist.coming = t.id;
          s.specialist.used++;
          this.source.schedule({ type: 'arrival', at: at + 4 * MIN, role: 'specialist', for: t.id });
          continue;
        } else if (s.specialist.coming === t.id) continue;
      }
      worker ||= this.freeWorker(kind, t);
      if (!worker) {
        waitingForCrew++;
        continue;
      }
      let slot = 0;
      while (used.includes(slot)) slot++;
      t.status = 'wip';
      t.owner = worker.id;
      t.slot = slot;
      t.specialist = specialist;
      worker.job = { kind, thread: t.id, slot };
      s.metrics.started++;
      this.log(t, at, `${worker.name} started on it`);
      this.source.startWork(t, at, { specialist });
      if (this.live) bus.emit('work:started', t, worker);
    }
    // ideas folk always have their own slot: thinking
    for (const m of this.members((x) => x.role === 'ideas')) if (!m.job) m.job = { kind: 'ideas' };
    // the postmaster's job is to carry drafts to the gate
    for (const m of this.members((x) => x.role === 'postmaster' || x.role === 'generalist')) {
      if (m.job && m.job.kind !== 'mail') continue;
      const draft = this.threads((t) => t.kind === 'letter' && t.status === 'draft' && t.owner === m.id)[0];
      if (draft && s.unlocks.gate) m.job = { kind: 'mail', thread: draft.id };
      else if (m.job?.kind === 'mail') m.job = null;
    }
    this._pressure = waitingForCrew;
  }

  // ------------------------------------------------------------ growing the crew
  _growth(at) {
    const s = this.s;
    const g = (s.sim.growth ||= { since: null, last: at });
    const waiting = this._pressure || 0;
    if (waiting > 0) {
      g.since ??= at;
    } else g.since = null;
    const crew = this.members((m) => !m.specialist).length + (s.sim.arriving ? 1 : 0);
    // consistently more work waiting than hands for a few hours: someone new arrives
    if (g.since !== null && at - g.since > 3 * HOUR && crew < CAP.crew && !s.sim.arriving) {
      const kinds = {};
      for (const t of this.threads((x) => x.status === 'queued' || (x.kind === 'todo' && x.status === 'todo'))) kinds[t.kind] = (kinds[t.kind] || 0) + 1;
      const top = Object.entries(kinds).sort((a, b) => b[1] - a[1])[0]?.[0] || 'build';
      const role = { build: 'builder', research: 'researcher', todo: 'chores' }[top] || 'builder';
      s.sim.arriving = role;
      g.since = null;
      this.source.schedule({ type: 'arrival', at: at + 20 * MIN, role });
    }
    // a postmaster turns up once letters become a regular thing
    const letters = this.threads((t) => t.kind === 'letter').length;
    if (letters >= 3 && !this.members((m) => m.role === 'postmaster').length && !s.sim.arriving && crew < CAP.crew) {
      s.sim.arriving = 'postmaster';
      this.source.schedule({ type: 'arrival', at: at + 30 * MIN, role: 'postmaster' });
    }
  }

  _arrival(ev, at) {
    const s = this.s;
    const crew = this.game.crew;
    if (ev.role === 'specialist') {
      const m = crew.newMember('specialist', { name: s.specialist.name || 'Old Bramble', pos: { level: 0, x: -4.0, z: 10.4 } });
      s.specialist.name = m.name;
      m.temporary = true;
      s.crew.push(m);
      s.specialist.coming = null;
      s.specialist.here = m.id;
      this.news({ at, kind: 'specialist', member: m.id });
      this.ticker(`${m.name} came by big balloon to help with the heavy lifting`, at);
      bus.emit('crew:arrived', m, { balloon: 'big', live: this.live });
      return;
    }
    s.sim.arriving = null;
    if (this.members((m) => !m.specialist).length >= CAP.crew) return;
    const m = crew.newMember(ev.role, { name: '', pos: { level: 0, x: -3.9, z: 10.6 } });
    m.name = '';
    m.unnamed = true;
    s.crew.push(m);
    crew.pickNightOwl();
    this.news({ at, kind: 'arrival', member: m.id });
    this.ticker(`someone new arrived by balloon. they need a name!`, at);
    bus.emit('crew:arrived', m, { balloon: 'small', live: this.live });
  }

  _specialistLeave(ev, at) {
    const s = this.s;
    const m = this.member(ev.member);
    if (!m) return;
    if (m.job) return this.source.schedule({ type: 'specialistLeave', at: at + 10 * MIN, member: m.id });
    m.away = true;
    s.crew = s.crew.filter((x) => x.id !== m.id);
    s.specialist.here = null;
    this.ticker(`${m.name} floated off again`, at);
    bus.emit('crew:left', m, { live: this.live });
  }

  /** Big balloon moored = there's specialist budget left today. */
  specialistAvailable() {
    const s = this.s;
    return s.specialist.used < s.settings.specialistBudget && !s.specialist.here && !s.specialist.coming;
  }

  // ------------------------------------------------------------ visitors (only while closed)
  rollVisitor(from, to) {
    const s = this.s;
    if (!s.unlocks.gate || s.visitors.some((v) => !v.gone)) return;
    const dur = to - from;
    if (dur < 30 * MIN) return;
    const p = 1 - Math.exp(-dur / (3 * DAY));
    if (Math.random() > p) return;
    const fresh = VISITORS.filter((v) => !s.metVisitors.includes(v.type));
    const v = (fresh.length ? fresh : VISITORS)[Math.floor(Math.random() * (fresh.length || VISITORS.length))];
    const at = from + Math.random() * dur;
    s.visitors.push({ id: uid('v'), type: v.type, name: v.name, memento: v.memento, arrivedAt: at, seen: false, gone: false });
    this.news({ at, kind: 'visitor', type: v.type });
    this.ticker(`${v.name} visited while you were out`, at);
  }

  receiveMemento(visitorId) {
    const s = this.s;
    const v = s.visitors.find((x) => x.id === visitorId);
    if (!v || v.gone) return null;
    v.gone = true;
    v.seen = true;
    if (!s.metVisitors.includes(v.type)) s.metVisitors.push(v.type);
    if (!s.keepsakes.some((k) => k.id === v.memento.id)) s.keepsakes.push({ ...v.memento, from: v.name, at: clock.now() });
    this.taste('memento', { type: v.type });
    bus.emit('keepsake:added', v.memento);
    return v.memento;
  }

  // ------------------------------------------------------------ presenting
  /** Queue something for a crew member to show the player. */
  present(memberId, item) {
    const m = this.member(memberId) || this.members()[0];
    if (!m) return;
    m.presentQueue ||= [];
    if (m.presentQueue.some((x) => x.thread === item.thread && x.kind === item.kind)) return;
    m.presentQueue.push({ id: uid('p'), ...item });
    if (!m.present) m.present = m.presentQueue[0];
    bus.emit('present:changed', m);
  }

  /** The current item is dealt with: on to the member's next one. */
  resolvePresent(m, threadId) {
    if (!m) return;
    m.presentQueue = (m.presentQueue || []).filter((x) => x.thread !== threadId);
    m.present = m.presentQueue[0] || null;
    bus.emit('present:changed', m);
  }

  presenterOf(threadId) {
    return this.s.crew.find((m) => m.present?.thread === threadId) || this.s.crew.find((m) => m.presentQueue?.some((x) => x.thread === threadId)) || null;
  }

  /** Everything waiting on the player (for the homecoming and "all caught up"). */
  waiting() {
    const out = [];
    for (const m of this.members()) for (const p of m.presentQueue || []) out.push({ ...p, member: m.id });
    return out.sort((a, b) => a.at - b.at);
  }

  // ------------------------------------------------------------ the player decides
  _closePitch(t, status) {
    t.status = status;
    this.resolvePresent(this.presenterOf(t.id) || this.member(t.by), t.id);
  }

  keep(id, { silent = false } = {}) {
    const s = this.s;
    const t = this.thread(id);
    if (!t) return null;
    const firstKeep = !s.unlocks.board;
    if (firstKeep) this.unlock('board', clock.now());
    // board full: the oldest note goes up to the attic
    let bumped = null;
    const pinned = this.threads((x) => x.status === 'kept').sort((a, b) => a.keptAt - b.keptAt);
    if (pinned.length >= CAP.board) {
      bumped = pinned[0];
      bumped.status = 'attic';
      bumped.atticAt = clock.now();
      this.log(bumped, clock.now(), 'moved up to the attic to make room');
    }
    t.keptAt = clock.now();
    this.log(t, t.keptAt, 'kept');
    this._closePitch(t, 'kept');
    if (!silent) this.taste('keep', { thread: id, quality: t.quality, area: t.area, nudges: t.nudges });
    bus.emit('thread:kept', t, bumped);
    return { thread: t, bumped };
  }

  toss(id) {
    const t = this.thread(id);
    if (!t) return;
    this.log(t, clock.now(), 'tossed');
    t.tossedAt = clock.now();
    this._closePitch(t, 'tossed');
    this.taste('toss', { thread: id, quality: t.quality, area: t.area, nudges: t.nudges });
    bus.emit('thread:tossed', t);
  }

  feature(id, fid, state) {
    const t = this.thread(id);
    const f = t?.features?.find((x) => x.id === fid);
    if (!f) return;
    f.state = state;
    this.taste(state === 'kept' ? 'featureKeep' : 'featureToss', { thread: id, feature: f.line });
  }

  nudge(id, dir) {
    const t = this.thread(id);
    if (!t) return null;
    this.source.nudge(t, dir);
    this.log(t, clock.now(), `nudged ${dir}`);
    this.taste('nudge', { thread: id, dir });
    bus.emit('thread:nudged', t, dir);
    return t;
  }

  /** "build it": greenlight a pitch or a pinned note. */
  greenlight(id) {
    const s = this.s;
    const t = this.thread(id);
    if (!t) return null;
    const now = clock.now();
    if (t.status === 'pitched') this.resolvePresent(this.presenterOf(t.id) || this.member(t.by), t.id);
    if (t.kind === 'research' && !s.unlocks.study) this.unlock('study', now);
    if (t.kind !== 'research' && !s.unlocks.workshop) this.unlock('workshop', now);
    t.kind = t.kind === 'research' ? 'research' : 'build';
    t.status = 'queued';
    t.queuedAt = now;
    t.greenlitAt = now;
    this.log(t, now, 'greenlit');
    this.taste('greenlight', { thread: id, quality: t.quality, area: t.area });
    bus.emit('thread:greenlit', t);
    this.fill(now);
    return t;
  }

  /** Pairwise: the player prefers one of two pitches about the same thing. */
  pick(winnerId, loserId) {
    this.taste('pairwise', { winner: winnerId, loser: loserId });
    this.keep(winnerId, { silent: true });
    const l = this.thread(loserId);
    if (l) {
      this.log(l, clock.now(), 'the other one was picked');
      this._closePitch(l, 'tossed');
      bus.emit('thread:tossed', l);
    }
  }

  answer(id, option) {
    const t = this.thread(id);
    if (!t || t.status !== 'waiting') return;
    const now = clock.now();
    t.answers = (t.answers || []).concat({ q: t.decision.question, a: option });
    this.log(t, now, `you chose: ${option}`);
    t.decision = null;
    t.status = 'wip';
    this.resolvePresent(this.member(t.owner), t.id);
    this.taste('decision', { thread: id, option });
    this.source.startWork(t, now);
    bus.emit('thread:answered', t, option);
  }

  /** Bench full: shelve a build (it goes up to the attic in a box). */
  shelve(id) {
    const t = this.thread(id);
    if (!t) return;
    const now = clock.now();
    this.source.stopWork(t);
    if (t.status === 'wip' && t.workStart) t.progress = Math.min(0.95, Math.max(t.progress || 0, (now - t.workStart) / Math.max(1, t.workEnd - t.workStart)));
    this._freeSlot(t);
    this.resolvePresent(this.member(t.owner), t.id);
    t.status = 'attic';
    t.atticAt = now;
    this.log(t, now, 'shelved in the attic for later');
    this.taste('shelve', { thread: id });
    bus.emit('thread:shelved', t);
    this.fill(now);
  }

  /** Bring something down from the attic (back to the board, or straight to the bench). */
  unattic(id, { build = false } = {}) {
    const t = this.thread(id);
    if (!t || t.status !== 'attic') return;
    const now = clock.now();
    this.log(t, now, 'brought down from the attic');
    if (build || (t.progress || 0) > 0) return this.greenlight(id);
    t.status = 'pitched';
    this.keep(id, { silent: true });
  }

  retry(id) {
    const t = this.thread(id);
    if (!t) return;
    const now = clock.now();
    t.retried = true;
    t.progress = 0;
    t.failure = null;
    t.status = 'queued';
    t.queuedAt = now;
    this.resolvePresent(this.member(t.owner), t.id);
    this.log(t, now, 'trying again');
    this.taste('retry', { thread: id });
    bus.emit('thread:retry', t);
    this.fill(now);
  }

  letGo(id) {
    const t = this.thread(id);
    if (!t) return;
    t.status = 'letgo';
    this.resolvePresent(this.member(t.owner), t.id);
    this.log(t, clock.now(), 'let go, gently');
    this.taste('letgo', { thread: id });
    bus.emit('thread:letgo', t);
  }

  /** A finished thing has been shown: it goes where it lives. */
  accept(id) {
    const t = this.thread(id);
    if (!t) return;
    t.status = 'placed';
    t.placedAt = clock.now();
    this.resolvePresent(this.member(t.owner), t.id);
    this.taste('accept', { thread: id, verified: t.verified });
    bus.emit('thread:placed', t);
  }

  /** The stamp thunked: the letter leaves the island. */
  send(id) {
    const t = this.thread(id);
    if (!t) return;
    const now = clock.now();
    t.status = 'sent';
    t.sentAt = now;
    this.log(t, now, `sent to ${t.draft.to}`);
    this.resolvePresent(this.member(t.owner), t.id);
    const m = this.member(t.owner);
    if (m?.job?.thread === t.id) m.job = null;
    this.source.sent(t, now);
    this.taste('send', { thread: id });
    bus.emit('letter:sent', t);
  }

  readMail(mailId) {
    const m = this.s.mail;
    const x = m.inbox.find((i) => i.id === mailId);
    if (!x) return;
    x.read = true;
    m.inbox = m.inbox.filter((i) => i.id !== mailId);
    m.wall.push(x);
    if (m.wall.length > 10) m.wall.shift();
    if (!m.inbox.length) m.flag = false;
    this.taste('readMail', {});
    bus.emit('mail:read', x);
  }

  /** Whispered to a crew member. */
  whisper(memberId, text) {
    const s = this.s;
    const m = this.member(memberId);
    if (!m || !text.trim()) return null;
    const now = clock.now();
    const t = text.trim();
    this.taste('whisper', { member: memberId, role: m.role, length: t.length });
    // things about you become solid objects in your room
    const fact = /^(i\s|i'm|im\s|my\s|i am|i like|i love|i hate|i prefer)/i.test(t);
    if (fact) {
      s.facts.push({ id: uid('f'), text: t, kind: 'stated', state: 'solid', at: now });
      bus.emit('fact:added', s.facts[s.facts.length - 1]);
      return 'fact';
    }
    if (m.role === 'chores' || /^(todo|remember|don't forget|dont forget)/i.test(t)) {
      if (!s.unlocks.kitchen) this.unlock('kitchen', now);
      this._todo(t.replace(/^todo:?\s*/i, ''), now);
      return 'todo';
    }
    if (m.role === 'postmaster' || /^(write|send|tell|letter)/i.test(t)) {
      this.source.schedule({ type: 'outgoing', at: now + 30 * 1000, thread: null, draft: { to: (t.match(/to ([a-z ]+)/i) || [0, 'a friend'])[1].trim(), subject: 'a note from the island', body: t } });
      return 'letter';
    }
    this.source.whisper(t, m.id, now);
    return 'idea';
  }

  // ------------------------------------------------------------ unlocks
  unlock(name, at = clock.now()) {
    const s = this.s;
    if (s.unlocks[name]) return;
    s.unlocks[name] = at;
    s.pendingUnlocks ||= [];
    if (!s.pendingUnlocks.includes(name)) s.pendingUnlocks.push(name);
    this.news({ at, kind: 'unlock', name });
    bus.emit('unlock', name);
  }

  nextUnlock() {
    return UNLOCK_ORDER.find((u) => !this.s.unlocks[u]) || null;
  }
}

export { TUNING };
