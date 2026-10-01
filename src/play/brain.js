// A crew member's little mind. No need bars: everything shows up as body
// language. Energy follows the real clock, purpose is "having something to
// show", social is visiting friends, and personality biases every choice.
//
// The task runner turns a choice ("nap in a bunk") into steps (walk across
// floors, climb the stairs, hop on, sleep, wake, hop off).
import * as THREE from 'three';
import { clamp, rand, chance, pick, pickWeighted, damp } from '../core/util.js';
import { line } from './lines.js';

const NEED_TAGS = {
  fun: ['fun', 'ideas'],
  social: ['social'],
  calm: ['calm', 'rest'],
  care: ['care', 'chores'],
};

/** Hours (local) when this critter wants to be in bed. */
export function bedtime(traits, month = new Date().getMonth()) {
  const winter = month >= 10 || month <= 1;
  const start = 22 + (0.5 - traits.sleepiness) * 1.6 - (winter ? 0.6 : 0);
  const end = 6.8 + traits.sleepiness * 1.4 + (winter ? 0.4 : 0);
  return { start, end };
}

export function hourNow(world) {
  return world.clockHour();
}

export function isBedtime(traits, h) {
  const { start, end } = bedtime(traits);
  return h >= start || h < end;
}

export class Brain {
  constructor(critter, crew, member) {
    this.c = critter;
    this.crew = crew;
    this.world = crew.world;
    this.m = member;
    const t = critter.traits;
    this.needs = { fun: rand(0.4, 0.9), social: rand(0.4, 0.9), calm: rand(0.5, 0.9), care: rand(0.4, 0.9) };
    this.rest = rand(0.6, 0.95);
    this.decay = {
      fun: 0.006 + t.energy * 0.005,
      social: 0.003 + t.sociability * 0.008,
      calm: 0.003,
      care: 0.004,
    };
    this.likes = member.likes || {};
    this.tasks = [];
    this.task = null;
    this.station = null;
    this.doing = 'looking around';
    this.idleT = rand(0.5, 2.5);
    this.lastGreet = new Map();
    this.paused = 0;
    this.attending = 0;
    this.history = [];
    this.workT = 0; // time spent on the current job stint
    this.climbing = false;
  }

  get level() {
    return this.c.level;
  }
  get nav() {
    return this.world.navs[this.c.level];
  }

  // ------------------------------------------------------------ task runner
  run(tasks, label) {
    this.cancel();
    this.tasks = tasks.filter(Boolean);
    const c = this.c;
    if (c.seat > 0.01 && this.tasks[0]?.type !== 'hop') {
      const p = this.nav.nearestFree(c.position.x + Math.sin(c.heading) * 0.6, c.position.z + Math.cos(c.heading) * 0.6);
      this.tasks.unshift({ type: 'hop', to: p, seat: 0 });
    }
    if (label) this.doing = label;
  }

  push(...tasks) {
    this.tasks.push(...tasks.filter(Boolean));
  }

  cancel() {
    const c = this.c;
    if (this.task?.cleanup) this.task.cleanup();
    for (const t of this.tasks) t.cleanup?.();
    this.tasks = [];
    this.task = null;
    this.releaseStation();
    c.stopWalking();
    if (this.loopAction) {
      c.stop(this.loopAction, 0.25);
      this.loopAction = null;
    }
    if (this.climbing) this._finishClimbEarly();
  }

  releaseStation() {
    const s = this.station;
    if (!s) return;
    if (s.reservedBy === this.c.id) s.reservedBy = null;
    s.onEnd?.(this.c);
    this.station = null;
  }

  /** The player grabbed us (or something else needs us right now). */
  interrupt() {
    this.cancel();
    const c = this.c;
    if (c.seat > 0.01) {
      c.seat = 0;
      const p = this.nav.nearestFree(c.position.x, c.position.z);
      c.position.x = p.x;
      c.position.z = p.z;
    }
    c.stopSlot('main', 0.15);
    c.drop(true);
  }

  // ------------------------------------------------------------ routing
  /** Steps to get to {level, x, z} from wherever we are (walks + climbs). */
  route(to, opts = {}) {
    const steps = [];
    let level = this.c.level;
    if (level !== to.level) {
      const chain = this.crew.portalChain(level, to.level);
      if (!chain) return null;
      for (const hop of chain) {
        const from = hop.up ? hop.portal.a : hop.portal.b;
        steps.push({ type: 'walk', to: { x: from.x, z: from.z }, speed: opts.speed });
        steps.push({ type: 'climb', portal: hop.portal, up: hop.up });
        level = hop.up ? hop.portal.b.level : hop.portal.a.level;
      }
    }
    steps.push({ type: 'walk', to: { x: to.x, z: to.z }, face: opts.face ?? null, speed: opts.speed, gait: opts.gait });
    return steps;
  }

  _startTask(t) {
    const c = this.c;
    t.started = true;
    t.elapsed = 0;
    switch (t.type) {
      case 'walk': {
        const nav = this.nav;
        if (!nav) {
          t.done = t.failed = true;
          return;
        }
        const path = nav.findPath({ x: c.position.x, z: c.position.z }, t.to);
        if (!path) {
          t.done = t.failed = true;
          return;
        }
        c.walkPath(path, { speed: t.speed ?? 1, gait: t.gait, face: t.face ?? null, onArrive: () => (t.done = true) });
        break;
      }
      case 'goto':
        c.walkPath([t.to], { speed: t.speed ?? 0.8, onArrive: () => (t.done = true), face: t.face ?? null });
        break;
      case 'climb':
        this._startClimb(t);
        break;
      case 'face':
        c.setHeading(t.yaw);
        break;
      case 'faceCam':
        c.faceToward(this.world.engine.camera.position);
        break;
      case 'act': {
        const a = c.play(t.name, { ...(t.opts || {}), onDone: () => (t.done = true) });
        if (!a) t.done = true;
        else if (!a.dur) {
          this.loopAction = t.name;
          t.loop = true;
        }
        break;
      }
      case 'hop':
        c.play('hopTo', { to: t.to, seat: t.seat ?? 0, onDone: () => (t.done = true) });
        break;
      case 'say':
        c.say(t.text);
        break;
      case 'call':
        t.fn?.(c, this);
        t.done = true;
        break;
      case 'hold':
        c.hold(typeof t.item === 'function' ? t.item() : this.crew.makeItem(t.item), t.mode || 'front');
        t.done = true;
        break;
      case 'drop':
        c.drop(true);
        t.done = true;
        break;
      case 'reserve':
        this.station = t.station;
        t.station.reservedBy = c.id;
        t.station.onStart?.(c);
        t.done = true;
        break;
      case 'release':
        this.releaseStation();
        t.done = true;
        break;
      default:
        t.done = true;
    }
  }

  _updateTask(t, dt) {
    const c = this.c;
    t.elapsed += dt;
    switch (t.type) {
      case 'wait':
        if (t.elapsed >= t.t || t.until?.(c, this)) t.done = true;
        if (t.look) c.lookAt(t.look, 0.5);
        t.every?.(c, t.elapsed, dt, this);
        break;
      case 'face':
      case 'faceCam':
        if (t.elapsed > (t.t ?? 0.35)) t.done = true;
        break;
      case 'say':
        if (c.talkTime <= 0 && t.elapsed > 0.3) t.done = true;
        break;
      case 'climb':
        this._updateClimb(t, dt);
        break;
      case 'act':
        if (t.loop) {
          t.every?.(c, t.elapsed, dt, this);
          if (t.elapsed > 0.6 && !c.isPlaying(t.name)) {
            this.loopAction = null;
            t.done = true;
            break;
          }
          if (t.elapsed >= t.t || t.until?.(c, this)) {
            c.stop(t.name, 0.3);
            this.loopAction = null;
            t.done = true;
          }
        } else if (t.elapsed > 12) t.done = true;
        break;
      case 'walk':
      case 'goto':
        if (t.elapsed > 40) {
          c.stopWalking();
          t.done = t.failed = true;
        }
        break;
    }
  }

  // ------------------------------------------------------------ climbing
  _startClimb(t) {
    const c = this.c;
    const pts = t.up ? t.portal.path : [...t.portal.path].reverse();
    // going down: the last point is the bottom (floor) point; the first is the top landing
    t.pts = pts;
    t.i = 0;
    t.toLevel = t.up ? t.portal.b.level : t.portal.a.level;
    t.y = c.position.y;
    this.climbing = true;
    this._climb = t;
    c.stopWalking();
  }

  _updateClimb(t, dt) {
    const c = this.c;
    const target = t.pts[t.i];
    if (!target) {
      this._endClimb(t);
      return;
    }
    const dx = target.x - c.position.x;
    const dz = target.z - c.position.z;
    const dh = Math.hypot(dx, dz);
    const dy = target.y - t.y;
    if (dh > 0.06) {
      // walk this segment, lifting y in proportion to horizontal progress
      if (!c.walking) {
        t.segStart = { h: dh, y: t.y };
        c.walkPath([{ x: target.x, z: target.z }], { speed: 0.8, gait: 'walk' });
      }
      const s = t.segStart || { h: dh, y: t.y };
      const k = clamp(1 - dh / Math.max(0.001, s.h));
      t.y = s.y + (target.y - s.y) * k;
    } else if (Math.abs(dy) > 0.02) {
      // ladder rung by rung
      c.stopWalking();
      c.setHeading(Math.PI);
      const step = Math.sign(dy) * Math.min(Math.abs(dy), dt * 1.15);
      t.y += step;
      t.rung = (t.rung || 0) + Math.abs(step);
      if (t.rung > 0.32) {
        t.rung = 0;
        c.sq.impulse(0.9);
        this.crew.sfx('step', c, { soft: true });
      }
    } else {
      t.y = target.y;
      t.segStart = null;
      c.stopWalking();
      t.i++;
      // past the middle: we belong to the new level now
      if (t.i >= Math.ceil(t.pts.length / 2)) this.crew.setLevel(c, t.toLevel);
    }
    c.position.y = t.y;
  }

  _endClimb(t) {
    this.climbing = false;
    this._climb = null;
    this.crew.setLevel(this.c, t.toLevel);
    t.done = true;
  }

  _finishClimbEarly() {
    // interrupted mid-climb: snap to whichever end is nearer
    const t = this._climb;
    this.climbing = false;
    this._climb = null;
    if (!t) return;
    const c = this.c;
    const end = t.i >= t.pts.length / 2 ? t.pts[t.pts.length - 1] : t.pts[0];
    const lvl = t.i >= t.pts.length / 2 ? t.toLevel : t.up ? t.portal.a.level : t.portal.b.level;
    c.position.set(end.x, end.y, end.z);
    this.crew.setLevel(c, lvl);
  }

  // ------------------------------------------------------------ main update
  update(dt) {
    const c = this.c;
    const night = this.crew.isNightFor(c);
    const n = this.needs;
    for (const k in n) n[k] = clamp(n[k] - this.decay[k] * dt);
    if (this.station) {
      for (const tag of this.station.tags) for (const k in NEED_TAGS) if (NEED_TAGS[k].includes(tag)) n[k] = clamp(n[k] + dt * 0.04);
    }
    const sleeping = c.mainAction?.name === 'sleep';
    this.rest = clamp(this.rest + dt * (sleeping ? 0.02 : -0.0016 * (0.6 + c.traits.sleepiness)));
    this._updateMood(night);

    // stand on the floor we're on (house floors vs grass vs porch)
    if (!this.climbing && !c.held) {
      const gy = this.world.groundY(c.level, c.position.x, c.position.z);
      c.position.y = damp(c.position.y, gy, 14, dt);
    }

    if (c.held || c.falling) return;
    if (this.paused > 0) {
      this.paused -= dt;
      return;
    }
    if (this.attending > 0) {
      this.attending -= dt;
      const cam = this.world.engine.camera.position;
      c.lookAt(cam, 0.4);
      if (!c.mainAction && !c.walking) c.faceToward(cam);
      return;
    }

    if (this.task) {
      const task = this.task;
      if (!task.started) this._startTask(task);
      if (this.task !== task) return;
      if (!task.done) this._updateTask(task, dt);
      if (this.task !== task) return;
      if (task.done) {
        if (task.failed && task.abortOnFail !== false && (task.type === 'walk' || task.type === 'goto')) {
          for (const t of this.tasks) t.cleanup?.();
          this.tasks = [];
          this.releaseStation();
        }
        this.task = null;
      }
      return;
    }
    if (this.tasks.length) {
      this.task = this.tasks.shift();
      return;
    }

    if (c.mainAction || c.walking) return;
    this.doing = this.m.present ? 'waiting to show you something' : 'hanging out';
    this.idleT -= dt;
    if (this.idleT > 0) return;
    this.idleT = rand(0.6, 2.2);
    this.decide();
  }

  _updateMood(night) {
    const c = this.c;
    if (c.moodHold > 0) return;
    const n = this.needs;
    let mood = 'happy';
    const a = c.mainAction?.name;
    if (a === 'type' || a === 'tinker' || a === 'stamp' || a === 'write') mood = 'focused';
    else if (this.rest < 0.22 || (night && !this.m.nightOwl)) mood = 'sleepy';
    else if (n.fun > 0.75 && n.social > 0.6) mood = 'happy';
    else if (n.social < 0.2) mood = 'curious';
    else if (n.calm > 0.8) mood = 'content';
    if (c.mood !== mood) c.mood = mood;
  }

  // ------------------------------------------------------------ choosing
  decide() {
    const c = this.c;
    const crew = this.crew;
    const night = crew.isNightFor(c);
    const owl = this.m.nightOwl;

    // 1. something to show you: the rug, or a lightbulb at our station
    if (this.m.present && !night) {
      const spot = crew.rugSpotFor(c);
      if (spot) return this.goPresent(spot);
    }
    // 2. bedtime (the night owl keeps working)
    if (night && !(owl && this.m.job)) {
      const bed = crew.bedFor(c);
      if (bed) return this.doStation(bed, { duration: rand(80, 160) });
      return this.floorNap();
    }
    // 3. a job (work in stints, with breaks)
    if (this.m.job && !this.m.present) {
      const st = crew.jobStation(c);
      const wantBreak = this.workT > rand(60, 140) && chance(0.6);
      if (st && !wantBreak) return this.doStation(st, { duration: rand(30, 70), job: true });
      if (wantBreak) this.workT = 0;
    }
    // 4. free time: stations, wander, friends
    const options = [];
    for (const s of crew.stations()) {
      if (s.reservedBy && s.reservedBy !== c.id) continue;
      if (s.job || s.activity === 'sleep') {
        if (s.activity === 'sleep' && this.rest < 0.25) options.push([{ kind: 'station', s }, 1.6]);
        continue;
      }
      if (!crew.reachable(c, s)) continue;
      let score = 0.15;
      for (const tag of s.tags) {
        for (const k in NEED_TAGS) if (NEED_TAGS[k].includes(tag)) score += (1 - this.needs[k]) * 1.1;
        score += (this.likes[tag] || 0) * 0.7;
      }
      if (night) score *= 0.4;
      if (s.activity === 'tea') score += crew.teaParty(s) * 0.4 - 0.4;
      const d = Math.hypot(s.pos.x - c.position.x, s.pos.z - c.position.z);
      score -= d * 0.035 + (s.level !== c.level ? 0.6 : 0);
      if (this.history.includes(s.id)) score -= 0.7;
      if (this.history.includes(s.activity)) score -= 0.4;
      score *= rand(0.7, 1.3);
      options.push([{ kind: 'station', s }, Math.max(0.01, score)]);
    }
    options.push([{ kind: 'wander' }, 0.45 + c.traits.curiosity * 0.6]);
    const friends = crew.critters.filter((o) => o !== c && o.level === c.level && !o.held && o.brain && !o.brain.station && !o.brain.chatting && !o.brain.climbing);
    if (friends.length && !night) options.push([{ kind: 'chat', with: pick(friends) }, (1 - this.needs.social) * 2 + c.traits.sociability * 0.6]);
    if (friends.length && !night && c.traits.energy > 0.55) options.push([{ kind: 'play', with: pick(friends) }, c.traits.energy * 0.45 + (1 - this.needs.fun) * 0.5]);
    // look at someone's work in progress
    const workers = crew.critters.filter((o) => o !== c && o.brain?.station?.job && !o.held);
    if (workers.length && !night) options.push([{ kind: 'visit', who: pick(workers) }, 0.35 + c.traits.sociability * 0.6 + (1 - this.needs.social) * 0.6]);
    if (this.rest < 0.3) options.push([{ kind: 'nap' }, 1.2]);
    const choice = pickWeighted(options);
    if (!choice) return;
    if (choice.kind === 'station') this.doStation(choice.s);
    else if (choice.kind === 'wander') this.wander();
    else if (choice.kind === 'chat') crew.startChat(c, choice.with);
    else if (choice.kind === 'play') crew.startPlay(c, choice.with);
    else if (choice.kind === 'visit') this.visit(choice.who);
    else if (choice.kind === 'nap') this.floorNap();
  }

  remember(id, activity) {
    this.history.push(id);
    if (activity) this.history.push(activity);
    while (this.history.length > 6) this.history.shift();
  }

  wander() {
    const c = this.c;
    const nav = this.nav;
    if (!nav) return;
    // mostly stay near; sometimes wander to another floor's room
    let to;
    if (chance(0.18)) {
      const lv = pick(this.crew.levelsReachable(c.level));
      const n = this.world.navs[lv];
      if (n) {
        const p = n.randomFree();
        to = { level: lv, ...p };
      }
    }
    if (!to) to = { level: c.level, ...nav.randomFree(Math.random, chance(0.65) ? c.position : null, 3.5) };
    const steps = this.route(to, { gait: chance(0.2) && c.traits.energy > 0.6 ? 'hop' : undefined });
    if (!steps) return;
    if (chance(0.6)) steps.push({ type: 'act', name: pick(['lookAround', 'tilt', 'hum', 'wiggle', 'scratch', 'tapFoot', 'stretch']) });
    if (chance(0.3)) steps.push({ type: 'wait', t: rand(1, 3) });
    this.run(steps, pick(['wandering around', 'pottering about', 'having a little walk']));
  }

  floorNap() {
    const c = this.c;
    const T = [{ type: 'act', name: 'yawn' }, { type: 'act', name: 'sit', t: 0.5 }, { type: 'act', name: 'sleep', t: rand(30, 70), until: () => !this.crew.isNightFor(c) && this.rest > 0.95 }, { type: 'act', name: 'wake' }];
    this.run(T, 'having a little nap');
  }

  visit(who) {
    const c = this.c;
    const s = who.brain.station;
    if (!s) return;
    const a = Math.atan2(c.position.x - s.pos.x, c.position.z - s.pos.z);
    const spot = { level: s.level, x: s.pos.x + Math.sin(a) * 0.9, z: s.pos.z + Math.cos(a) * 0.9 };
    const steps = this.route(spot);
    if (!steps) return;
    steps.push(
      { type: 'call', fn: () => c.faceToward(who.position) },
      { type: 'wait', t: 0.5, look: who },
      { type: 'act', name: pick(['admire', 'tilt', 'nod']) },
      { type: 'call', fn: () => chance(0.6) && c.say(line('visitWork')) },
      { type: 'wait', t: rand(2, 4), look: who },
      { type: 'call', fn: () => chance(0.5) && who.play(pick(['nod', 'giggle', 'wave'])) },
      { type: 'call', fn: () => (this.needs.social = clamp(this.needs.social + 0.3)) }
    );
    this.run(steps, `peeking at ${who.name}'s work`);
  }

  /** Walk to the pitch rug and wait there, facing you. */
  goPresent(spot) {
    const c = this.c;
    const steps = this.route({ level: 0, x: spot.x, z: spot.z });
    if (!steps) return;
    spot.reservedBy = c.id;
    const T = [
      ...steps,
      { type: 'faceCam' },
      { type: 'call', fn: () => this.crew.onReachedRug(c) },
      {
        type: 'wait',
        t: rand(14, 26),
        until: () => !this.m.present,
        every: (cc, e, d) => {
          if (Math.random() < d * 0.25) cc.faceToward(this.world.engine.camera.position);
          if (Math.random() < d * 0.06) cc.play(pick(['tapFoot', 'wiggle', 'tilt', 'hum', 'lookAround']));
        },
      },
    ];
    for (const t of T) t.cleanup = () => {};
    this.run(T, 'waiting on the rug to show you something');
  }

  /** Build the plan for doing something at a station. */
  doStation(s, opts = {}) {
    const c = this.c;
    const crew = this.crew;
    this.remember(s.id, s.activity);
    const seated = (s.seat || 0) > 0.05;
    let approach = s.approach;
    if (!approach && seated) approach = { x: s.pos.x + Math.sin(s.face) * 0.62, z: s.pos.z + Math.cos(s.face) * 0.62 };
    approach = approach || s.pos;
    const steps = this.route({ level: s.level, x: approach.x, z: approach.z }, { face: seated ? null : s.face });
    if (!steps) return;
    const T = [{ type: 'reserve', station: s }, ...steps];
    if (seated) T.push({ type: 'hop', to: s.pos, seat: s.seat });
    T.push({ type: 'face', yaw: s.face, t: 0.3 });
    const dur = opts.duration;
    const job = opts.job;
    const work = (name, every) => ({
      type: 'act',
      name,
      t: dur ?? rand(10, 20),
      every: (cc, e, d, b) => {
        if (job) {
          b.workT += d;
          crew.onWorkTick(cc, s, d);
        }
        every?.(cc, e, d, b);
      },
      until: () => (job ? !this.m.job || !!this.m.present || (crew.isNightFor(c) && !this.m.nightOwl) : false),
    });
    switch (s.activity) {
      case 'sleep':
        T.push({ type: 'call', fn: () => chance(0.35) && c.say(line('sleepy')) });
        T.push({ type: 'act', name: 'sit', t: 0.6 });
        T.push({ type: 'act', name: 'sleep', t: dur ?? rand(25, 45), until: () => !crew.isNightFor(c) && this.rest > 0.95 && Math.random() < 0.02 });
        T.push({ type: 'act', name: 'wake' });
        break;
      case 'read':
        if (s.seat) T.push({ type: 'act', name: 'sit', t: 0.4 });
        T.push({ type: 'act', name: 'read', t: dur ?? rand(12, 24) });
        break;
      case 'browse':
        T.push({ type: 'act', name: 'reach' });
        T.push({ type: 'act', name: 'read', t: dur ?? rand(6, 12) });
        break;
      case 'gaze':
        T.push({ type: 'act', name: 'gaze', t: dur ?? rand(7, 14) });
        break;
      case 'water':
        T.push({ type: 'act', name: 'water', t: dur ?? rand(3.5, 5) });
        T.push({ type: 'call', fn: () => crew.wigglePlantNear(c) });
        T.push({ type: 'act', name: 'admire' });
        break;
      case 'pin':
      case 'ponder':
        T.push({ type: 'act', name: 'think' });
        T.push({ type: 'act', name: 'write', t: dur ?? rand(4, 8) });
        if (chance(0.5)) T.push({ type: 'act', name: 'tilt' });
        break;
      case 'build':
        T.push(work('tinker', (cc, e, d) => chance(d * 0.04) && cc.say(line('build'))));
        if (chance(0.25)) T.push({ type: 'act', name: 'admire' });
        break;
      case 'research':
        T.push(work('write', (cc, e, d) => chance(d * 0.03) && cc.say(line('research'))));
        if (chance(0.4)) T.push({ type: 'act', name: 'think' });
        break;
      case 'chalk':
        T.push(work('write'));
        T.push({ type: 'act', name: 'admire' });
        break;
      case 'post':
        T.push(work('stamp'));
        break;
      case 'admire':
        T.push({ type: 'act', name: 'admire' });
        T.push({ type: 'act', name: 'gaze', t: rand(4, 8) });
        break;
      case 'tinker':
      case 'cook':
        T.push({ type: 'act', name: 'tinker', t: dur ?? rand(6, 12) });
        if (s.activity === 'cook') T.push({ type: 'call', fn: () => crew.fx('steam', c) });
        break;
      case 'tea':
        T.push({ type: 'act', name: 'sit', t: dur ?? rand(14, 26), every: (cc, e, d) => crew.teaTalk(cc, d) });
        break;
      case 'tidy':
      case 'rummage':
        T.push({ type: 'act', name: 'reach' });
        T.push({ type: 'act', name: s.activity === 'tidy' ? 'admire' : 'think' });
        break;
      case 'sit':
        T.push({ type: 'act', name: 'sit', t: dur ?? rand(8, 16) });
        break;
      default:
        T.push({ type: 'wait', t: 3 });
    }
    T.push({ type: 'release' });
    if (seated) T.push({ type: 'hop', to: approach, seat: 0 });
    this.run(T, opts.label || crew.describeStation(c, s));
  }

  /** Called right after the player taps us: one plain line about what we're doing. */
  statusLine() {
    return this.crew.statusLine(this.c);
  }
}

export { NEED_TAGS, THREE };
