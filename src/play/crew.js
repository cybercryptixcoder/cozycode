// The crew: spawns crew members from saved state, runs their minds, and
// handles everything that involves more than one of them (chats, tag,
// bumps, tea) plus the shared places (the pitch rug, beds, job stations).
import * as THREE from 'three';
import { Critter, PALETTE } from '../critters/critter.js';
import { addGear, updateGear, SPECIALIST } from '../critters/gear.js';
import { addSilhouette, setSilhouetteStrength } from '../island/xray.js';
import { Brain, isBedtime } from './brain.js';
import { line } from './lines.js';
import { makeItem } from '../world/items.js';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { rand, chance, pick, clamp, uid } from '../core/util.js';
import { mat, uniqueMat } from '../gfx/materials.js';
import { sphere, cyl, mesh } from '../gfx/geo.js';
import { clock } from './clock.js';

export const ROLES = {
  ideas: { title: 'ideas', accessory: 'sprout', likes: { ideas: 1, fun: 0.6, social: 0.4 } },
  generalist: { title: 'generalist', accessory: 'antenna', likes: { build: 0.6, chores: 0.6, care: 0.5 } },
  builder: { title: 'builder', accessory: 'antenna', likes: { build: 1, fun: 0.5 } },
  researcher: { title: 'researcher', accessory: 'leaf', likes: { research: 1, calm: 0.7 } },
  postmaster: { title: 'postmaster', accessory: 'flower', likes: { mail: 1, social: 0.5 } },
  chores: { title: 'chores', accessory: 'flower', likes: { chores: 1, care: 0.9 } },
  specialist: { title: 'specialist', accessory: 'leaf', likes: { build: 0.8, calm: 0.6 } },
};

/** The two who are there from the very first launch. */
export const STARTING_CREW = [
  {
    name: 'Mochi',
    role: 'ideas',
    color: '#ffb18f',
    seed: 7,
    traits: { energy: 0.62, curiosity: 0.9, sociability: 0.8, sleepiness: 0.3, clumsiness: 0.45, chattiness: 0.8 },
    faceShape: { eyeDX: 0.156, eyeSize: 1.04, eyeY: 0.56 },
    pos: { level: 0, x: 2.0, z: 2.6 },
  },
  {
    name: 'Pip',
    role: 'generalist',
    color: '#93dcbc',
    seed: 21,
    traits: { energy: 0.85, curiosity: 0.6, sociability: 0.6, sleepiness: 0.15, clumsiness: 0.8, chattiness: 0.55 },
    pos: { level: 0, x: 3.4, z: 3.9 },
  },
];

export const NAMES = ['Sprig', 'Dumpling', 'Waffle', 'Clover', 'Miso', 'Peaches', 'Juniper', 'Noodle', 'Fig', 'Momo', 'Bean', 'Puddle', 'Toast', 'Bun', 'Kiwi', 'Maple'];

function releaseSocialWait(c) {
  const b = c.brain;
  if (b.task?.type === 'wait' && b.task.t === 999) b.task.done = true;
  b.tasks = b.tasks.filter((t) => !(t.type === 'wait' && t.t === 999));
}

/** The lightbulb: the only "waiting" indicator in the game. */
function makeLightbulb() {
  const g = new THREE.Group();
  const glass = uniqueMat('#fff2b0', { emissive: '#ffd84a', emissiveIntensity: 1.4, roughness: 0.25 });
  g.add(mesh(sphere(0.12, 16, 12), glass, { cast: false }));
  g.add(mesh(cyl(0.055, 0.06, 0.08, 12), mat('#c8ccd0', { metalness: 0.5, roughness: 0.35 }), { pos: [0, -0.13, 0], cast: false }));
  g.add(mesh(cyl(0.035, 0.035, 0.03, 10), mat('#9aa0a6', { metalness: 0.5 }), { pos: [0, -0.18, 0], cast: false }));
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ color: '#ffe680', transparent: true, opacity: 0.35, depthWrite: false }));
  halo.scale.setScalar(0.55);
  g.add(halo);
  g.userData = { glass, halo, k: 0 };
  g.visible = false;
  return g;
}

export class Crew {
  constructor(world, store) {
    this.world = world;
    this.store = store;
    this.critters = [];
    this.chats = [];
    this.games = [];
    this._greetT = 0;
    this.focusLevelHint = 0;
    this.ctx = {
      fx: (type, pos, opts) => this._fx(type, pos, opts),
      sfx: (name, opts) => this._sfx(name, opts),
      camera: world.engine.camera,
      beat: () => sound.beat(),
      musicOn: () => sound.musicOn && !!sound.ctx,
      makeItem: (kind) => makeItem(kind),
      onSay: (c, text, opts) => bus.emit('critter:say', c, text, opts),
    };
    this.hooks = {}; // set by the director: describeJob(member), onWorkTick(member, dt), onReachedRug(member)
  }

  // ------------------------------------------------------------ fx / sound only where you can see
  visibleCritter(c) {
    return c.root.visible !== false && this.world.levels[c.level]?.visible !== false;
  }
  _fx(type, pos, opts) {
    const c = opts?.critter;
    if (c && !this.visibleCritter(c)) return;
    this.world.fx.spawn(type, pos, opts);
  }
  _sfx(name, opts = {}) {
    const c = opts.critter;
    if (c && !this.visibleCritter(c)) return;
    // quieter the further from the camera's focus
    sound.play(name, opts);
  }
  sfx(name, c, opts = {}) {
    this._sfx(name, { ...opts, critter: c });
  }
  fx(type, c, opts = {}) {
    this._fx(type, c.headPos(new THREE.Vector3(), 0.1), { ...opts, critter: c });
  }

  makeItem(kind) {
    return makeItem(kind);
  }

  // ------------------------------------------------------------ roster
  get members() {
    return this.store.data.crew;
  }

  member(id) {
    return this.members.find((m) => m.id === id) || null;
  }

  critter(id) {
    return this.critters.find((c) => c.id === id) || null;
  }

  find(q) {
    if (!q) return null;
    const s = String(q).toLowerCase();
    return this.critters.find((c) => c.id === q || c.name.toLowerCase() === s) || null;
  }

  /** Make the starting crew if this is a brand new island. */
  ensureStartingCrew() {
    if (this.members.length) return;
    const now = clock.now();
    for (const d of STARTING_CREW) this.members.push({ id: uid('crew'), joinedAt: now, ...d });
    this.pickNightOwl();
  }

  newMember(role, opts = {}) {
    const used = new Set(this.members.map((m) => m.name));
    const usedColors = new Set(this.members.map((m) => m.color));
    const name = opts.name || NAMES.find((n) => !used.has(n)) || `Sprout ${this.members.length + 1}`;
    const color = opts.color || (PALETTE.find((p) => !usedColors.has(p.color)) || pick(PALETTE)).color;
    const m = {
      id: uid('crew'),
      name,
      role,
      color,
      seed: Math.floor(Math.random() * 1e6),
      joinedAt: clock.now(),
      traits: opts.traits,
      pos: opts.pos || { level: 0, x: -1, z: 8.5 },
      ...opts.extra,
    };
    if (role === 'specialist') Object.assign(m, { color: SPECIALIST.color, size: SPECIALIST.size, traits: SPECIALIST.traits, faceShape: SPECIALIST.faceShape, voice: SPECIALIST.voice, specialist: true });
    return m;
  }

  /** The member least likely to sleep keeps working at night with a lamp. */
  pickNightOwl() {
    const list = this.members.filter((m) => !m.specialist);
    for (const m of list) m.nightOwl = false;
    const owl = list.slice().sort((a, b) => (a.traits?.sleepiness ?? 0.5) - (b.traits?.sleepiness ?? 0.5))[0];
    if (owl) owl.nightOwl = true;
  }

  loadAll() {
    for (const m of this.members) if (!m.away) this.spawn(m);
  }

  spawn(m) {
    const role = ROLES[m.role] || ROLES.generalist;
    const c = new Critter({
      id: m.id,
      name: m.name,
      color: m.color,
      accessory: m.accessory || role.accessory,
      seed: m.seed,
      traits: m.traits,
      faceShape: m.faceShape,
      size: m.size,
      voice: m.voice,
      ctx: this.ctx,
    });
    if (!m.traits) m.traits = { ...c.traits };
    m.likes = { ...role.likes, ...(m.likes || {}) };
    addGear(c, m.role);
    addSilhouette(c);
    c.member = m;
    c.brain = new Brain(c, this, m);
    c.bulb = makeLightbulb();
    c.root.add(c.bulb);
    const p = m.pos || { level: 0, x: 2.5, z: 3 };
    const level = this.world.navs[p.level] ? p.level : 0;
    const nav = this.world.navs[level];
    const fp = nav.nearestFree(p.x, p.z);
    c.level = level;
    c.position.set(fp.x, this.world.groundY(level, fp.x, fp.z), fp.z);
    c.setHeading(p.h ?? rand(-1, 1), true);
    this.world.levels[level].add(c.root);
    this.critters.push(c);
    bus.emit('critter:spawned', c);
    return c;
  }

  remove(c) {
    c.brain.cancel();
    c.root.parent?.remove(c.root);
    c.dispose();
    this.critters = this.critters.filter((x) => x !== c);
    bus.emit('critter:removed', c);
  }

  setLevel(c, level) {
    if (c.level === level) return;
    c.level = level;
    this.world.levels[level].add(c.root);
  }

  /** Remember where everyone is (never reshuffle on return). */
  savePositions() {
    for (const c of this.critters) {
      if (!c.member) continue;
      c.member.pos = { level: c.level, x: +c.position.x.toFixed(2), z: +c.position.z.toFixed(2), h: +c.heading.toFixed(2) };
    }
  }

  // ------------------------------------------------------------ places
  stations() {
    return this.world.furnish.stations;
  }

  station(id) {
    return this.stations().find((s) => s.id === id) || null;
  }

  /** levels reachable from `level` through portals */
  levelsReachable(level) {
    const out = new Set([level]);
    let grew = true;
    const ps = this.world.portals();
    while (grew) {
      grew = false;
      for (const p of ps) {
        if (out.has(p.a.level) && !out.has(p.b.level)) out.add(p.b.level), (grew = true);
        if (out.has(p.b.level) && !out.has(p.a.level)) out.add(p.a.level), (grew = true);
      }
    }
    return [...out].filter((l) => this.world.navs[l]);
  }

  /** Breadth-first through portals: [{portal, up}] */
  portalChain(from, to) {
    if (from === to) return [];
    const ps = this.world.portals();
    const prev = new Map([[from, null]]);
    const q = [from];
    while (q.length) {
      const l = q.shift();
      for (const p of ps) {
        let next = null;
        let up = true;
        if (p.a.level === l) next = p.b.level;
        else if (p.b.level === l) (next = p.a.level), (up = false);
        if (next === null || prev.has(next)) continue;
        prev.set(next, { level: l, portal: p, up });
        if (next === to) {
          const chain = [];
          for (let k = to; prev.get(k); k = prev.get(k).level) chain.unshift({ portal: prev.get(k).portal, up: prev.get(k).up });
          return chain;
        }
        q.push(next);
      }
    }
    return null;
  }

  reachable(c, s) {
    if (!this.world.navs[s.level]) return false;
    return s.level === c.level || !!this.portalChain(c.level, s.level);
  }

  /** The rug's three spots (world x/z), with who's standing on each. */
  rugSpots() {
    const rug = this.world.furnish.obj('commons', 'rug');
    if (!rug) return [];
    if (!this._rugSpots) {
      rug.updateWorldMatrix(true, false);
      this._rugSpots = rug.userData.spots.map((s, i) => {
        const v = new THREE.Vector3(s.x, 0, s.z).applyMatrix4(rug.matrixWorld);
        return { i, x: v.x, z: v.z, reservedBy: null };
      });
    }
    // free spots whose owner is no longer presenting
    for (const s of this._rugSpots) {
      const o = s.reservedBy && this.critter(s.reservedBy);
      if (!o || !o.member.present) s.reservedBy = null;
    }
    return this._rugSpots;
  }

  rugSpotFor(c) {
    const spots = this.rugSpots();
    const mine = spots.find((s) => s.reservedBy === c.id);
    if (mine) return mine;
    return spots.find((s) => !s.reservedBy) || null;
  }

  onRugNow(c) {
    const s = this.rugSpots().find((x) => x.reservedBy === c.id);
    return !!s && Math.hypot(c.position.x - s.x, c.position.z - s.z) < 0.4 && c.level === 0;
  }

  onReachedRug(c) {
    this.hooks.onReachedRug?.(c.member, c);
  }

  /** Where to sleep tonight. */
  bedFor(c) {
    const st = this.stations();
    const free = (s) => !s.reservedBy || s.reservedBy === c.id;
    const bunks = st.filter((s) => s.bunk && free(s));
    if (bunks.length) {
      // remember a favourite bunk
      const fav = c.member.bunk && bunks.find((s) => s.id === c.member.bunk);
      const pickB = fav || bunks[Math.floor((c.seed % 97) / 97 * bunks.length)] || bunks[0];
      c.member.bunk = pickB.id;
      return pickB;
    }
    return st.find((s) => s.activity === 'sleep' && !s.bunk && free(s)) || null;
  }

  /** The station for a member's current job. */
  jobStation(c) {
    const job = c.member.job;
    if (!job) return null;
    const st = this.stations();
    const free = (s) => !s.reservedBy || s.reservedBy === c.id;
    switch (job.kind) {
      case 'build':
        return st.find((s) => s.id === `bench-${job.slot ?? 0}` && free(s)) || null;
      case 'research':
        return st.find((s) => s.id === `desk-${job.slot ?? 0}` && free(s)) || null;
      case 'chores':
        return st.find((s) => s.id === 'chalk' && free(s)) || st.find((s) => s.id === 'board-think' && free(s)) || null;
      case 'mail':
        return st.find((s) => s.id === 'mailbox' && free(s)) || null;
      case 'ideas':
        return st.find((s) => (s.id === 'board' || s.id === 'board-think') && free(s)) || st.find((s) => s.id === 'couch-b' && free(s)) || null;
      default:
        return null;
    }
  }

  onWorkTick(c, s, dt) {
    this.hooks.onWorkTick?.(c.member, dt, c);
  }

  isNightFor(c) {
    return isBedtime(c.traits, this.world.clockHour());
  }

  describeStation(c, s) {
    return s.label;
  }

  /** One plain-language line about what a crew member is doing. */
  statusLine(c) {
    const m = c.member;
    const b = c.brain;
    if (c.mainAction?.name === 'sleep') return m.nightOwl ? 'catching a quick nap.' : 'fast asleep. it’s late!';
    if (m.present) return this.hooks.describePresent?.(m) || 'has something to show you.';
    if (b.station?.job && m.job) return this.hooks.describeJob?.(m) || b.doing;
    if (b.chatting) return b.doing;
    if (m.job && !b.station?.job) return `${this.hooks.describeJob?.(m) || 'working'} (taking a little break)`;
    return b.doing;
  }

  // ------------------------------------------------------------ user poking
  onPicked(c) {
    c.brain.interrupt();
    this.leaveSocial(c);
    if (chance(0.5)) setTimeout(() => c.held && c.say(line('held')), 300);
  }

  onDropped(c) {
    // dropped onto a bed? tuck in for a nap
    const bed = this.stations().find((s) => s.activity === 'sleep' && s.level === c.level && !s.reservedBy && Math.hypot(s.pos.x - c.position.x, s.pos.z - c.position.z) < 0.7);
    if (bed) {
      c.brain.paused = 0.8;
      setTimeout(() => c.brain.doStation(bed, { duration: rand(20, 40) }), 700);
      return;
    }
    const nav = this.world.navs[c.level];
    const p = nav.nearestFree(c.position.x, c.position.z);
    c.position.x = p.x;
    c.position.z = p.z;
    c.brain.paused = 1.6;
    if (chance(0.35)) setTimeout(() => c.say(line('dropped')), 900);
  }

  // ------------------------------------------------------------ update
  update(dt) {
    const t = performance.now() / 1000;
    for (const c of this.critters) {
      c.brain.update(dt);
      c.update(dt);
      updateGear(c, t);
      this._updateBulb(c, dt, t);
      // trips happen (to the clumsy) while walking
      if (c.walking && !c.held && !c.brain.climbing && c.speed > 0.6 && Math.random() < dt * 0.006 * c.traits.clumsiness) {
        c.play('trip');
        setTimeout(() => chance(0.6) && c.say(line('tripped')), 2600);
      }
      // silhouettes only matter when you can't see them anyway
      setSilhouetteStrength(c, this.world.levels[c.level]?.visible === false ? 0 : 1);
    }
    this._separate(dt);
    this._greetings(dt);
    this._updateChats(dt);
    this._updateGames(dt);
    this._nightOwlLamp(dt);
  }

  _updateBulb(c, dt, t) {
    const b = c.bulb;
    const want = c.member.present && !this.onRugNow(c) && c.mainAction?.name !== 'sleep' && !c.held ? 1 : 0;
    b.userData.k = clamp(b.userData.k + (want ? dt * 3 : -dt * 4));
    const k = b.userData.k;
    b.visible = k > 0.01;
    if (!b.visible) return;
    const s = k < 1 ? 1.15 * Math.sin(k * Math.PI * 0.5) : 1 + Math.sin(t * 2.4) * 0.04;
    b.scale.setScalar(Math.max(0.001, s) / c.size);
    b.position.set(0, (1.55 + Math.sin(t * 1.9 + c.seed) * 0.05 + c.mover.position.y) / 1, 0);
    b.userData.glass.emissiveIntensity = 1.2 + Math.sin(t * 3) * 0.3;
    b.userData.halo.material.opacity = 0.25 + Math.sin(t * 3) * 0.08;
  }

  _nightOwlLamp() {
    // the study desk lamp glows while someone works there at night
    const lamp = this.world.furnish.obj('study', 'owlLamp');
    if (!lamp) return;
    const night = this.world.daylight.state ? this.world.daylight.state.lamps > 0.4 : false;
    const busy = this.critters.some((c) => c.brain.station?.id?.startsWith('desk-'));
    const want = night && busy ? 1 : 0;
    const u = lamp.userData;
    u.on += (want - u.on) * 0.05;
    u.light.intensity = u.on * 2.2;
    u.light.visible = u.on > 0.02;
    u.shade.material.emissiveIntensity = u.on * 0.9;
    u.bulb.material.emissiveIntensity = u.on * 4;
  }

  _separate(dt) {
    const list = this.critters;
    for (let i = 0; i < list.length; i++)
      for (let j = i + 1; j < list.length; j++) {
        const a = list[i];
        const b = list[j];
        if (a.held || b.held || a.level !== b.level || a.brain.climbing || b.brain.climbing) continue;
        const dx = b.position.x - a.position.x;
        const dz = b.position.z - a.position.z;
        const d = Math.hypot(dx, dz);
        const min = 0.46 * (a.size + b.size);
        if (d > 0.0001 && d < min) {
          const push = (min - d) * Math.min(1, dt * 8);
          const aFixed = a.seat > 0.01 || a.busy;
          const bFixed = b.seat > 0.01 || b.busy;
          const ka = aFixed ? 0 : bFixed ? 1 : 0.5;
          const kb = bFixed ? 0 : aFixed ? 1 : 0.5;
          a.position.x -= (dx / d) * push * ka;
          a.position.z -= (dz / d) * push * ka;
          b.position.x += (dx / d) * push * kb;
          b.position.z += (dz / d) * push * kb;
          if (a.walking && b.walking && d < min * 0.75 && !a._bonkCool && !b._bonkCool && chance(0.35)) {
            a._bonkCool = b._bonkCool = true;
            setTimeout(() => (a._bonkCool = b._bonkCool = false), 20000);
            a.play('bonk', { from: b.position });
            b.play('bonk', { from: a.position });
            this._fx('sparkle', a.position.clone().lerp(b.position, 0.5).setY(a.position.y + 0.9), { critter: a, count: 3 });
            setTimeout(() => a.say(line('bump')), 500);
          }
        }
      }
  }

  _greetings(dt) {
    this._greetT -= dt;
    if (this._greetT > 0) return;
    this._greetT = 0.5;
    const now = performance.now() / 1000;
    for (const a of this.critters) {
      if (a.held || a.busy) continue;
      for (const b of this.critters) {
        if (a === b || a.level !== b.level) continue;
        const d = a.position.distanceTo(b.position);
        if (d > 1.8 || d < 0.6) continue;
        const last = a.brain.lastGreet.get(b.id) || -999;
        if (now - last < 120) continue;
        a.brain.lastGreet.set(b.id, now);
        b.brain.lastGreet.set(a.id, now);
        if (chance(0.45)) {
          a.lookAt(b, 2);
          b.lookAt(a, 2);
          a.play('wave', { target: b, sound: false });
          if (chance(0.35)) a.say(line('greet'));
        }
      }
    }
  }

  // ------------------------------------------------------------ chatting
  startChat(a, b) {
    if (b.brain.chatting || a.brain.chatting || a.level !== b.level) return;
    const nav = this.world.navs[a.level];
    const mid = { x: (a.position.x + b.position.x) / 2, z: (a.position.z + b.position.z) / 2 };
    const dir = new THREE.Vector2(b.position.x - a.position.x, b.position.z - a.position.z);
    if (dir.lengthSq() < 0.01) dir.set(1, 0);
    dir.normalize();
    const pa = nav.nearestFree(mid.x - dir.x * 0.5, mid.z - dir.y * 0.5);
    const pb = nav.nearestFree(mid.x + dir.x * 0.5, mid.z + dir.y * 0.5);
    const chat = { a, b, t: 0, turns: Math.floor(rand(3, 6)), speaker: 0, next: 0.6, ended: false, ready: 0 };
    a.brain.chatting = chat;
    b.brain.chatting = chat;
    const onArrive = () => chat.ready++;
    a.brain.run([{ type: 'walk', to: pa }, { type: 'call', fn: onArrive }, { type: 'wait', t: 999 }], `having a chat with ${b.name}`);
    b.brain.run([{ type: 'walk', to: pb }, { type: 'call', fn: onArrive }, { type: 'wait', t: 999 }], `having a chat with ${a.name}`);
    this.chats.push(chat);
  }

  leaveSocial(c) {
    for (const ch of this.chats) if (ch.a === c || ch.b === c) this._endChat(ch);
    for (const g of this.games) if (g.a === c || g.b === c) g.ended = true;
  }

  _endChat(ch, ending = null) {
    if (ch.ended) return;
    ch.ended = true;
    for (const c of [ch.a, ch.b]) {
      c.brain.chatting = null;
      c.stop('talk');
      releaseSocialWait(c);
    }
    if (ending) {
      ch.a.play(ending, { partner: ch.b });
      ch.b.play(ending, { partner: ch.a });
    }
    ch.a.brain.needs.social = clamp(ch.a.brain.needs.social + 0.4);
    ch.b.brain.needs.social = clamp(ch.b.brain.needs.social + 0.4);
  }

  _updateChats(dt) {
    for (const ch of this.chats) {
      if (ch.ended) continue;
      ch.t += dt;
      const { a, b } = ch;
      if (ch.t > 30 || a.held || b.held || a.level !== b.level) {
        this._endChat(ch);
        continue;
      }
      if (ch.ready < 2) continue;
      if (!ch.started) {
        ch.started = true;
        a.faceToward(b.position);
        b.faceToward(a.position);
        a.play('talk');
        b.play('talk');
      }
      a.lookAt(b, 1);
      b.lookAt(a, 1);
      ch.next -= dt;
      if (ch.next > 0) continue;
      const speaker = ch.speaker % 2 === 0 ? a : b;
      const listener = speaker === a ? b : a;
      if (ch.speaker >= ch.turns * 2) {
        this._endChat(ch, pick(['hug', 'giggle', 'nod', 'hop', 'wave']));
        continue;
      }
      const text = ch.speaker % 2 ? line('reply') : line('chat');
      speaker.say(text);
      if (chance(0.3)) listener.play(pick(['nod', 'giggle', 'tilt']));
      ch.speaker++;
      ch.next = Math.max(1.4, text.length * 0.07 + 0.7);
    }
    this.chats = this.chats.filter((c) => !c.ended);
  }

  // ------------------------------------------------------------ play (tag!)
  startPlay(a, b) {
    if (a.brain.chatting || b.brain.chatting || a.level !== b.level) return;
    const g = { a, b, t: 0, ended: false, legs: 0 };
    a.brain.run([{ type: 'wait', t: 999 }], `playing tag with ${b.name}`);
    b.brain.run([{ type: 'wait', t: 999 }], `playing tag with ${a.name}`);
    a.brain.chatting = b.brain.chatting = g;
    b.play('surprised');
    a.say(pick(["tag! you're it!", 'catch me!', 'bet you can’t catch me']));
    g.it = b;
    g.runner = a;
    this.games.push(g);
  }

  _updateGames(dt) {
    for (const g of this.games) {
      if (g.ended) continue;
      g.t += dt;
      const { it, runner } = g;
      const nav = this.world.navs[it.level];
      if (g.t > 24 || it.held || runner.held || it.level !== runner.level || !nav) g.ended = true;
      if (g.ended) {
        for (const c of [g.a, g.b]) {
          c.brain.chatting = null;
          c.stopWalking();
          releaseSocialWait(c);
          c.brain.needs.fun = clamp(c.brain.needs.fun + 0.5);
        }
        g.a.play('giggle');
        g.b.play('giggle');
        continue;
      }
      if (!runner.walking && !runner.busy) {
        const p = nav.randomFree(Math.random, runner.position, 3);
        const path = nav.findPath(runner.position, p);
        if (path) runner.walkPath(path, { gait: 'run', speed: 0.85 });
      }
      g.repath = (g.repath || 0) - dt;
      if (g.repath <= 0 && !it.busy) {
        g.repath = 0.4;
        const path = nav.findPath(it.position, runner.position);
        if (path) it.walkPath(path, { gait: 'run', speed: 0.95 });
      }
      if (it.position.distanceTo(runner.position) < 0.85 && !runner.busy) {
        g.legs++;
        runner.play('surprised');
        it.play('hop');
        it.say(pick(['tag!', 'gotcha!', 'hehe!']));
        it.stopWalking();
        g.it = runner;
        g.runner = it;
        if (g.legs > 3) g.ended = true;
      }
    }
    this.games = this.games.filter((g) => !g.ended);
  }

  // ------------------------------------------------------------ shared things
  teaParty(s) {
    return this.stations().filter((x) => x.activity === 'tea' && x.reservedBy).length;
  }

  teaTalk(c, dt) {
    const others = this.critters.filter((o) => o !== c && o.brain.station?.activity === 'tea');
    if (!others.length) return;
    const o = others[0];
    c.lookAt(o, 0.5);
    if (Math.random() < dt * 0.12) {
      c.say(chance(0.5) ? line('chat') : line('reply'));
      if (chance(0.5)) setTimeout(() => o.play(pick(['nod', 'giggle'])), 900);
    }
    c.brain.needs.social = clamp(c.brain.needs.social + dt * 0.03);
  }

  wigglePlantNear(c) {
    let best = null;
    let bd = 2.5;
    for (const k of this.world.furnish.kits.values())
      for (const p of k.plants) {
        const d = p.getWorldPosition(new THREE.Vector3()).distanceTo(c.position);
        if (d < bd) {
          bd = d;
          best = p;
        }
      }
    if (best) {
      best.userData.wiggle = 1;
      this._fx('sparkle', best.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.8, 0)), { critter: c, count: 4 });
      this.sfx('plant', c);
    }
  }
}
