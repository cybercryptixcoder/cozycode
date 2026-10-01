// A sproutling's little mind: a few needs that slowly drift, a personality
// that biases what it likes doing, and a task runner that turns a choice
// ("nap in the big bed") into steps (walk, hop on, sleep, wake, hop off).
import * as THREE from 'three';
import { clamp, rand, chance, pick, pickWeighted, lerp } from '../core/util.js';
import { line } from './lines.js';

const NEED_TAGS = {
  energy: ['rest'],
  fun: ['fun', 'music', 'ideas'],
  social: ['social'],
  purpose: ['work', 'build', 'tasks', 'mail', 'ideas', 'care'],
  calm: ['calm', 'rest', 'learn'],
};

export class Brain {
  constructor(critter, society, opts = {}) {
    this.c = critter;
    this.society = society;
    this.world = society.world;
    const t = critter.traits;
    this.needs = {
      energy: rand(0.55, 0.95),
      fun: rand(0.4, 0.9),
      social: rand(0.4, 0.9),
      purpose: rand(0.3, 0.8),
      calm: rand(0.5, 0.9),
    };
    // what this critter likes (tag weights)
    this.likes = opts.likes || {};
    this.decay = {
      energy: 0.006 + t.sleepiness * 0.006,
      fun: 0.008 + t.energy * 0.006,
      social: 0.004 + t.sociability * 0.01,
      purpose: 0.007,
      calm: 0.004,
    };
    this.tasks = [];
    this.task = null;
    this.station = null;
    this.doing = 'looking around';
    this.idleT = rand(0.5, 2.5);
    this.lastGreet = new Map();
    this.paused = 0;
    this.attending = 0;
    this.history = [];
  }

  get room() {
    return this.world.rooms[this.c.roomId];
  }

  // ------------------------------------------------------------ task runner
  run(tasks, label) {
    this.cancel();
    this.tasks = tasks.filter(Boolean);
    const c = this.c;
    if (c.seat > 0.01 && this.tasks[0]?.type !== 'hop') {
      // still perched on something: hop down before doing anything else
      const p = this.room.nav.nearestFree(c.position.x + Math.sin(c.heading) * 0.6, c.position.z + Math.cos(c.heading) * 0.6);
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
  }

  releaseStation() {
    const s = this.station;
    if (!s) return;
    if (s.reservedBy === this.c.id) s.reservedBy = null;
    s.onEnd?.(this.c);
    this.station = null;
  }

  /** Interrupt whatever is going on (user picked us up, etc). */
  interrupt() {
    this.cancel();
    const c = this.c;
    if (c.seat > 0.01) {
      c.seat = 0;
      const r = this.room;
      const p = r.nav.nearestFree(c.position.x, c.position.z);
      c.position.x = p.x;
      c.position.z = p.z;
    }
    c.stopSlot('main', 0.15);
    c.drop(true);
  }

  _startTask(t) {
    const c = this.c;
    t.started = true;
    t.elapsed = 0;
    switch (t.type) {
      case 'walk': {
        const r = this.room;
        const to = t.to;
        const path = r.nav.findPath({ x: c.position.x, z: c.position.z }, to);
        if (!path) {
          t.done = true;
          t.failed = true;
          return;
        }
        if (t.direct) {
          path.length = 0;
          path.push(to);
        }
        c.walkPath(path, {
          speed: t.speed ?? 1,
          gait: t.gait,
          face: t.face ?? null,
          onArrive: () => (t.done = true),
        });
        break;
      }
      case 'goto': {
        // straight line (used to step through doors)
        c.walkPath([t.to], { speed: t.speed ?? 0.8, onArrive: () => (t.done = true), face: t.face ?? null });
        break;
      }
      case 'face':
        c.setHeading(t.yaw);
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
        c.hold(this.world.makeItem(t.item, c), t.mode || 'front');
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
        if (t.elapsed >= t.t) t.done = true;
        if (t.look) c.lookAt(t.look, 0.5);
        break;
      case 'face':
        if (t.elapsed > (t.t ?? 0.35)) t.done = true;
        break;
      case 'say':
        if (c.talkTime <= 0 && t.elapsed > 0.3) t.done = true;
        break;
      case 'act':
        if (t.loop) {
          t.every?.(c, t.elapsed, dt, this);
          if (t.elapsed > 0.6 && !c.isPlaying(t.name)) {
            // someone else (a poke, the player) ended it early
            this.loopAction = null;
            t.done = true;
            break;
          }
          if (t.elapsed >= t.t || t.until?.(c, this)) {
            c.stop(t.name, 0.3);
            this.loopAction = null;
            t.done = true;
          }
        } else if (t.elapsed > 12) t.done = true; // safety
        break;
      case 'walk':
      case 'goto':
        if (t.elapsed > 25) {
          // stuck somewhere: give up gracefully
          c.stopWalking();
          t.done = true;
          t.failed = true;
        }
        break;
    }
  }

  // ------------------------------------------------------------ main update
  update(dt) {
    const c = this.c;
    const w = this.world;
    const night = w.daylight.isNight;
    // needs drift
    const n = this.needs;
    for (const k in n) n[k] = clamp(n[k] - this.decay[k] * dt * (k === 'energy' && night ? 2.4 : 1));
    if (this.station) {
      for (const tag of this.station.tags) {
        for (const k in NEED_TAGS) if (NEED_TAGS[k].includes(tag)) n[k] = clamp(n[k] + dt * (k === 'energy' ? 0.03 : 0.04));
      }
    }
    if (c.mainAction?.name === 'sleep') n.energy = clamp(n.energy + dt * 0.035);
    this._updateMood();

    if (c.held || c.falling) return;
    if (this.paused > 0) {
      this.paused -= dt;
      return;
    }
    if (this.attending > 0) {
      this.attending -= dt;
      const cam = w.engine.camera.position;
      c.lookAt(cam, 0.4);
      if (!c.mainAction && !c.walking) c.faceToward(cam);
      return;
    }

    // run tasks
    if (this.task) {
      const task = this.task;
      if (!task.started) this._startTask(task);
      // a task callback may have replaced the whole plan
      if (this.task !== task) return;
      if (!task.done) this._updateTask(task, dt);
      if (this.task !== task) return;
      if (task.done) {
        if (task.failed && task.abortOnFail !== false && (task.type === 'walk' || task.type === 'goto')) {
          // couldn't get there: drop the rest of the plan
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

    // nothing planned: hang out a moment, then decide
    if (c.mainAction || c.walking) return;
    this.doing = 'hanging out';
    this.idleT -= dt;
    if (this.idleT > 0) return;
    this.idleT = rand(0.6, 2.2);
    this.decide();
  }

  _updateMood() {
    const c = this.c;
    if (c.moodHold > 0) return;
    const n = this.needs;
    let mood = 'happy';
    const a = c.mainAction?.name;
    if (a === 'type' || a === 'tinker' || a === 'stamp' || a === 'write') mood = 'focused';
    else if (n.energy < 0.22) mood = 'sleepy';
    else if (n.fun > 0.75 && n.social > 0.6) mood = 'happy';
    else if (n.social < 0.2) mood = 'curious';
    else if (n.calm > 0.8) mood = 'content';
    if (c.mood !== mood) c.mood = mood;
  }

  // ------------------------------------------------------------ choosing
  decide() {
    const c = this.c;
    const world = this.world;
    const room = this.room;
    const night = world.daylight.isNight;
    const n = this.needs;
    const options = [];

    // stations in this room
    for (const s of room.stations) {
      if (s.reservedBy && s.reservedBy !== c.id) continue;
      if (s.activity === 'door') continue;
      if (s.activity === 'dance' && !(world.sound.musicOn && world.sound.ctx)) continue;
      let score = 0.15;
      for (const tag of s.tags) {
        for (const k in NEED_TAGS) if (NEED_TAGS[k].includes(tag)) score += (1 - n[k]) * 1.2;
        score += (this.likes[tag] || 0) * 0.6;
      }
      if (s.activity === 'sleep') score += night ? 2.5 : n.energy < 0.3 ? 1.2 : -0.6;
      if (night && s.tags.includes('work')) score -= 0.6;
      if (s.activity === 'dance') score += performance.now() < this.society.partyUntil ? 1.6 + c.traits.energy : -0.4 + c.traits.energy * 0.5;
      if (s.activity === 'pin' && this.society.pendingNotes.length) score += 3;
      if (s.activity === 'write' && s.id === 'todo' && this.society.pendingTodos.length) score += 3;
      if (s.activity === 'post' && this.society.pendingLetters.length) score += 3;
      if (s.activity === 'tea') score += this.society.teaParty(room) * 0.3 - 0.45;
      const d = Math.hypot(s.pos.x - c.position.x, s.pos.z - c.position.z);
      score -= d * 0.04;
      if (this.history.includes(s.id)) score -= 0.7; // variety
      if (this.history.includes(s.activity)) score -= 0.45;
      score *= rand(0.7, 1.3);
      options.push([{ kind: 'station', s }, Math.max(0.01, score)]);
    }
    // wander / mingle / travel
    options.push([{ kind: 'wander' }, 0.5 + c.traits.curiosity * 0.6 + (night ? -0.3 : 0)]);
    const friends = this.society.inRoom(c.roomId).filter((o) => o !== c && !o.held && o.brain && !o.brain.station && !o.brain.chatting);
    if (friends.length && !night) options.push([{ kind: 'chat', with: pick(friends) }, (1 - n.social) * 2 + c.traits.sociability * 0.6]);
    if (friends.length && !night && c.traits.energy > 0.55) options.push([{ kind: 'play', with: pick(friends) }, c.traits.energy * 0.5 + (1 - n.fun) * 0.6]);
    const door = room.stations.find((s) => s.activity === 'door');
    if (door && !door.reservedBy) {
      let travel = 0.18 + c.traits.curiosity * 0.25;
      const there = this.society.inRoom(door.door.to).length;
      const here = this.society.inRoom(c.roomId).length;
      if (here > there + 2) travel += 0.4;
      if (c.roomId === 'post' && night) travel += 1.5; // beds are in the nook
      if (this.society.pendingLetters.length && c.roomId === 'nook') travel += 1.5;
      options.push([{ kind: 'travel', s: door }, travel]);
    }
    const choice = pickWeighted(options);
    if (!choice) return;
    if (choice.kind === 'station') this.doStation(choice.s);
    else if (choice.kind === 'wander') this.wander();
    else if (choice.kind === 'chat') this.society.startChat(c, choice.with);
    else if (choice.kind === 'play') this.society.startPlay(c, choice.with);
    else if (choice.kind === 'travel') this.travel(choice.s);
  }

  remember(id, activity) {
    this.history.push(id);
    if (activity) this.history.push(activity);
    while (this.history.length > 6) this.history.shift();
  }

  wander() {
    const c = this.c;
    const room = this.room;
    const p = room.randomFreePoint(Math.random, chance(0.6) ? c.position : null, 3);
    const tasks = [{ type: 'walk', to: p, gait: chance(0.2) && c.traits.energy > 0.6 ? 'hop' : undefined }];
    if (chance(0.6)) tasks.push({ type: 'act', name: pick(['lookAround', 'tilt', 'hum', 'wiggle', 'scratch', 'tapFoot', 'stretch']) });
    if (chance(0.3)) tasks.push({ type: 'wait', t: rand(1, 3) });
    this.run(tasks, 'wandering around');
  }

  /** Build the plan for doing something at a station. */
  doStation(s, opts = {}) {
    const c = this.c;
    const world = this.world;
    this.remember(s.id, s.activity);
    const T = [];
    const seated = (s.seat || 0) > 0.05;
    // where we stand before hopping on, and where we hop off to
    let approach = s.approach;
    if (!approach && seated) {
      const room = this.room;
      approach = room.nav.nearestFree(s.pos.x + Math.sin(s.face) * 0.62, s.pos.z + Math.cos(s.face) * 0.62);
    }
    approach = approach || s.pos;
    T.push({ type: 'reserve', station: s });
    T.push({ type: 'walk', to: approach, face: seated ? null : s.face });
    if (seated) T.push({ type: 'hop', to: s.pos, seat: s.seat });
    T.push({ type: 'face', yaw: s.face, t: 0.3 });
    const dur = opts.duration;
    const night = world.daylight.isNight;
    const soc = this.society;
    let claim = null; // something from a shared queue we promised to deliver
    switch (s.activity) {
      case 'sleep': {
        T.push({ type: 'call', fn: () => chance(0.4) && c.say(line('sleepy')) });
        T.push({ type: 'act', name: 'sit', t: 0.6 });
        T.push({ type: 'act', name: 'sleep', t: dur ?? (night ? rand(60, 140) : rand(20, 45)), until: () => !world.daylight.isNight && this.needs.energy > 0.97 && Math.random() < 0.01 });
        T.push({ type: 'act', name: 'wake' });
        break;
      }
      case 'read':
        if (s.seat) T.push({ type: 'act', name: 'sit', t: 0.4 });
        T.push({ type: 'act', name: 'read', t: dur ?? rand(12, 26) });
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
        T.push({ type: 'call', fn: () => soc.wigglePlantNear(c) });
        T.push({ type: 'act', name: 'admire' });
        break;
      case 'pin': {
        const note = soc.pendingNotes.shift();
        if (note) {
          claim = { list: soc.pendingNotes, item: note };
          T.splice(1, 0, { type: 'hold', item: 'note', mode: 'overhead' });
          T.push({ type: 'drop' });
          T.push({ type: 'act', name: 'reach' });
          T.push({ type: 'call', fn: () => ((claim.done = true), soc.pinNote(note, c)) });
          T.push({ type: 'act', name: 'admire' });
          T.push({ type: 'call', fn: () => c.say(line('noted')) });
        } else {
          T.push({ type: 'act', name: 'write', t: dur ?? rand(4, 7) });
          T.push({ type: 'act', name: 'think' });
        }
        break;
      }
      case 'write': {
        const todo = s.id === 'todo' ? soc.pendingTodos.shift() : null;
        if (todo) claim = { list: soc.pendingTodos, item: todo };
        T.push({ type: 'act', name: 'write', t: dur ?? (todo ? 2.5 : rand(5, 9)) });
        if (todo) {
          T.push({ type: 'call', fn: () => ((claim.done = true), soc.writeTodo(todo, c)) });
          T.push({ type: 'act', name: 'admire' });
        }
        break;
      }
      case 'think':
        T.push({ type: 'act', name: 'sit', t: 0.4 });
        T.push({ type: 'act', name: 'think' });
        T.push({ type: 'act', name: 'sit', t: rand(2, 5) });
        if (chance(0.6)) T.push({ type: 'act', name: 'think' });
        T.push({ type: 'call', fn: () => chance(0.5) && soc.haveIdea(c) });
        break;
      case 'paint':
        T.push({ type: 'act', name: 'write', t: dur ?? rand(8, 14), every: (cc, e, d) => soc.paintStroke(this.room, d) });
        T.push({ type: 'act', name: 'admire' });
        break;
      case 'tea':
        T.push({ type: 'act', name: 'sit', t: dur ?? rand(14, 26), every: (cc, e, d) => soc.teaTalk(cc, d) });
        break;
      case 'dance':
        T.push({ type: 'act', name: 'dance', t: dur ?? rand(14, 30), until: () => !world.sound.musicOn });
        break;
      case 'tinker':
        T.push({ type: 'act', name: 'tinker', t: dur ?? rand(8, 15), every: (cc, e, d) => chance(d * 0.08) && cc.say(line('work')) });
        if (chance(0.3)) T.push({ type: 'act', name: 'cheer' });
        break;
      case 'type':
        T.push({ type: 'act', name: 'sit', t: 0.3 });
        T.push({ type: 'act', name: 'type', t: dur ?? rand(10, 22) });
        break;
      case 'stamp':
        T.push({ type: 'act', name: 'stamp', t: dur ?? rand(6, 11) });
        break;
      case 'reach':
        T.splice(1, 0, { type: 'hold', item: 'letter', mode: 'front' });
        T.push({ type: 'drop' });
        T.push({ type: 'act', name: 'reach' });
        T.push({ type: 'act', name: 'admire' });
        break;
      case 'post': {
        const letter = soc.pendingLetters.shift();
        if (letter) claim = { list: soc.pendingLetters, item: letter };
        T.splice(1, 0, { type: 'hold', item: 'letter', mode: 'overhead' });
        T.push({ type: 'drop' });
        T.push({ type: 'act', name: 'reach' });
        T.push({ type: 'call', fn: () => (claim && (claim.done = true), soc.postLetter(letter, c)) });
        T.push({ type: 'act', name: 'cheer' });
        break;
      }
      case 'admire':
        T.push({ type: 'act', name: 'admire' });
        T.push({ type: 'act', name: 'gaze', t: rand(4, 8) });
        break;
      case 'sit':
        T.push({ type: 'act', name: 'sit', t: dur ?? rand(8, 16) });
        break;
      default:
        T.push({ type: 'wait', t: 3 });
    }
    T.push({ type: 'release' });
    if (seated) T.push({ type: 'hop', to: approach, seat: 0 });
    if (claim) {
      // if we get interrupted before delivering, put it back in the queue
      const requeue = () => {
        if (claim.done || claim.requeued) return;
        claim.requeued = true;
        claim.list.unshift(claim.item);
      };
      for (const t of T) t.cleanup = requeue;
    }
    this.run(T, s.label);
  }

  travel(doorStation) {
    const c = this.c;
    this.remember('door');
    const door = doorStation.door;
    const wall = door.wall;
    const T = [
      { type: 'reserve', station: doorStation },
      { type: 'walk', to: doorStation.pos, face: doorStation.face },
      { type: 'call', fn: () => chance(0.5) && c.say(line('travel')) },
      { type: 'call', fn: () => (door.target = 1) },
      { type: 'wait', t: 0.45 },
      { type: 'release' },
      { type: 'goto', to: wall.toWorld(door.opening.x, 0, -0.55), speed: 0.9, abortOnFail: false },
      { type: 'call', fn: () => this.society.moveToRoom(c, door.to) },
    ];
    this.run(T, 'heading out the door');
  }

  /** Arrive in a room through its door. */
  arrive(room) {
    const c = this.c;
    const door = room.doors[0];
    const st = room.stations.find((s) => s.activity === 'door');
    const outside = door.wall.toWorld(door.opening.x, 0, -0.5);
    c.position.set(outside.x, 0, outside.z);
    c.setHeading(Math.atan2(st.pos.x - outside.x, st.pos.z - outside.z), true);
    door.target = 1;
    const inside = room.nav.nearestFree(st.pos.x + (st.pos.x - outside.x) * 0.6, st.pos.z + (st.pos.z - outside.z) * 0.6);
    this.run(
      [
        { type: 'goto', to: inside, speed: 0.9 },
        { type: 'call', fn: () => (door.target = 0) },
        { type: 'act', name: chance(0.5) ? 'lookAround' : 'wave' },
      ],
      'just arrived'
    );
  }
}

export { NEED_TAGS, lerp, THREE };
