// Scenery: makes the island show the state. Notes on the board, work in
// progress on the bench and desk, finished things on pedestals and shelves,
// books, the chalkboard, attic boxes, the mail flag, the letter wall,
// keepsakes, facts in your room, the map, the roster and the ledger.
//
// Nothing here is a number or a bar: progress is how finished it looks.
import * as THREE from 'three';
import * as A from './artifact.js';
import { noteCard, pedestal, labelPlate, ideaBox, paperBall, telescope, radio } from '../island/props.js';
import { drawMotif } from './art.js';
import { mat, uniqueMat } from '../gfx/materials.js';
import { rbox, cyl, sphere, torus, mesh } from '../gfx/geo.js';
import { slotWorld } from '../island/furnish.js';
import { CHUNKS, ROOMS } from '../island/layout.js';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { clamp, easeOutBack, mulberry32, TAU } from '../core/util.js';
import { clock } from './clock.js';

const NOTE_COLORS = ['#ffe08a', '#ffc6d9', '#bfe6ff', '#c9f0bd', '#ffd6a8', '#e5d4ff'];

export function progressOf(t, now = clock.now()) {
  if (t.status === 'done' || t.status === 'placed') return 1;
  if (t.status !== 'wip' || !t.workStart) return t.progress || 0;
  const k = clamp((now - t.workStart) / Math.max(1, t.workEnd - t.workStart));
  const p0 = t.progressAt0 ?? t.progress ?? 0;
  return p0 + (1 - p0) * k;
}

export class Scenery {
  constructor(game) {
    this.game = game;
    this.world = game.world;
    this.store = game.store;
    this.notes = new Map(); // thread id -> mesh on the board
    this.wips = new Map(); // thread id -> {obj, bucket}
    this.placed = new Map(); // thread id -> obj (pedestal / shelf / book)
    this.boxes = new Map();
    this.keeps = new Map();
    this.factObjs = new Map();
    this.anims = [];
    this.glows = new Map(); // object -> {id, t}
    this._t = 0;
    bus.on('thread:kept', (t, bumped) => this.onKept(t, bumped));
    bus.on('thread:placed', (t) => this.onPlaced(t));
  }

  get s() {
    return this.store.data;
  }
  obj(room, name) {
    return this.world.furnish.obj(room, name);
  }

  // ------------------------------------------------------------ per frame (cheap) / periodic (sync)
  update(dt) {
    this._t += dt;
    for (const a of this.anims) a.t += dt;
    this.anims = this.anims.filter((a) => a.fn(a.t, dt) !== false);
    this._updateGlows(dt);
    this._smoke(dt);
    if (this._t > 1.0) {
      this._t = 0;
      this.sync();
    }
  }

  anim(fn) {
    this.anims.push({ t: 0, fn });
  }

  sync() {
    if (!this.world.furnish) return;
    this._board();
    this._bench();
    this._desk();
    this._placedThings();
    this._chalk();
    this._attic();
    this._mail();
    this._keepsakes();
    this._facts();
    this._capabilities();
    this._bin();
  }

  // ------------------------------------------------------------ the idea board
  _board() {
    const board = this.obj('commons', 'board');
    if (!board) return;
    const u = board.userData;
    if (u.cloth) u.cloth.visible = !this.s.unlocks.board && !this._clothGone;
    const kept = this.s.threads.filter((t) => t.status === 'kept').sort((a, b) => a.keptAt - b.keptAt);
    const ids = new Set(kept.map((t) => t.id));
    for (const [id, m] of this.notes) {
      if (!ids.has(id)) {
        u.notes.remove(m);
        this.notes.delete(id);
      }
    }
    kept.forEach((t, i) => {
      let m = this.notes.get(t.id);
      if (!m) {
        m = noteCard(shortLine(t), t.rare ? '#fff1b8' : NOTE_COLORS[hashi(t.id) % NOTE_COLORS.length], (g, r) => drawMotif(g, t.motif, r * 0.9, t.hue));
        m.rotation.z = ((hashi(t.id) % 100) / 100 - 0.5) * 0.22;
        m.userData.interactive = { kind: 'note', thread: t.id };
        m.userData.thread = t.id;
        u.notes.add(m);
        this.notes.set(t.id, m);
        if (this._fresh) this.popIn(m);
        this.markNew(m, t.id);
      }
      const slot = u.slots[i] || u.slots[u.slots.length - 1];
      m.position.set(slot.x, slot.y, 0.01);
    });
    this._fresh = true;
  }

  onKept(t, bumped) {
    if (bumped) {
      // the old note floats up to the attic
      const m = this.notes.get(bumped.id);
      if (m) {
        const start = m.position.clone();
        this.anim((k) => {
          const u = Math.min(1, k / 1.1);
          m.position.set(start.x, start.y + u * 1.4, 0.01 + u * 0.3);
          m.scale.setScalar(Math.max(0.01, 1 - u));
          return u < 1;
        });
      }
    }
    sound.play('pin');
    this._board();
  }

  // ------------------------------------------------------------ bench & desk
  _bench() {
    const bench = this.obj('workshop', 'bench');
    if (!bench) return;
    const u = bench.userData;
    u.covers.forEach((c, i) => (c.visible = i >= this.s.benchSlots));
    const list = this.s.threads.filter((t) => t.kind === 'build' && (t.status === 'wip' || t.status === 'waiting' || t.status === 'failed') && t.slot !== null && t.slot !== undefined);
    this._syncWips(list, bench, u.slots, 'bench');
  }

  _desk() {
    const desk = this.obj('study', 'desk');
    if (!desk) return;
    const list = this.s.threads.filter((t) => t.kind === 'research' && (t.status === 'wip' || t.status === 'waiting') && t.slot !== null && t.slot !== undefined);
    this._syncWips(list, desk, desk.userData.slots, 'desk');
  }

  _syncWips(list, host, slots, where) {
    const now = clock.now();
    const ids = new Set(list.map((t) => t.id));
    for (const [id, w] of this.wips) {
      if (w.where !== where) continue;
      if (!ids.has(id)) {
        host.remove(w.obj);
        disposeTree(w.obj);
        this.wips.delete(id);
      }
    }
    for (const t of list) {
      const p = progressOf(t, now);
      const bucket = t.status === 'failed' ? 'failed' : Math.min(4, Math.floor(p * 5));
      let w = this.wips.get(t.id);
      if (w && w.bucket === bucket) continue;
      if (w) {
        host.remove(w.obj);
        disposeTree(w.obj);
      }
      const obj = t.status === 'failed' ? A.failed(t) : A.wip(t, p);
      const slot = slots[t.slot] || slots[0];
      obj.position.set(slot.x, slot.y, slot.z ?? 0);
      obj.userData.interactive = { kind: 'wip', thread: t.id };
      host.add(obj);
      this.wips.set(t.id, { obj, bucket, where });
    }
  }

  // ------------------------------------------------------------ finished things
  _placedThings() {
    const placed = this.s.threads.filter((t) => t.status === 'placed' && (t.kind === 'build' || t.kind === 'research'));
    const builds = placed.filter((t) => t.kind === 'build');
    const verified = builds.filter((t) => t.verified);
    const unverified = builds.filter((t) => !t.verified);
    const ws = this.world.furnish.kit('workshop');
    if (ws) {
      const spots = ws.objects.pedestalSpots || [];
      // verified builds get pedestals (newest four), the rest go on the shelf
      const onPedestal = verified.slice(-spots.length);
      const onShelf = [...verified.slice(0, Math.max(0, verified.length - spots.length)), ...unverified];
      onPedestal.forEach((t, i) => this._ensurePedestal(t, spots[i], ws));
      const shelf = ws.objects.shelf;
      onShelf.slice(-shelf.userData.slots.length).forEach((t, i) => this._ensureOn(t, shelf, shelf.userData.slots[i], () => {
        const g = A.gadget(t);
        g.scale.setScalar(0.8);
        return g;
      }));
      // anything no longer displayed
      const shown = new Set([...onPedestal, ...onShelf.slice(-shelf.userData.slots.length)].map((t) => t.id));
      for (const [id, o] of this.placed) {
        if (o.userData.kind === 'book') continue;
        if (!shown.has(id)) {
          o.parent?.remove(o);
          this.placed.delete(id);
        }
      }
      // pedestal footprints are only active when they hold something
      for (const f of ws.footprints) if (f.optional) f.active = [...this.placed.values()].some((o) => o.userData.pedestal && Math.hypot(o.position.x - f.x, o.position.z - f.z) < 0.1);
    }
    const books = this.obj('study', 'books');
    if (books) {
      const res = placed.filter((t) => t.kind === 'research');
      res.slice(-books.userData.slots.length).forEach((t, i) => this._ensureOn(t, books, books.userData.slots[i], () => A.researchBook(t)));
    }
  }

  _ensureOn(t, host, slot, make) {
    let o = this.placed.get(t.id);
    if (o && o.parent === host) {
      o.position.set(slot.x, slot.y, slot.z ?? 0);
      return o;
    }
    if (o) o.parent?.remove(o);
    o = make();
    o.position.set(slot.x, slot.y, slot.z ?? 0);
    o.userData.interactive = { kind: 'artifact', thread: t.id };
    o.userData.thread = t.id;
    host.add(o);
    this.placed.set(t.id, o);
    this.markNew(o, t.id);
    return o;
  }

  _ensurePedestal(t, spot, ws) {
    let o = this.placed.get(t.id);
    if (o && o.userData.pedestal) {
      const pl = this.s.placements?.[`artifact:${t.id}`];
      if (!this.game.arrange?.moving) o.position.set(pl ? pl.x : spot.x, 0, pl ? pl.z : spot.z);
      return;
    }
    if (o) o.parent?.remove(o);
    o = new THREE.Group();
    const ped = pedestal();
    o.add(ped);
    const thing = A.gadget(t);
    thing.position.y = ped.userData.top;
    o.add(thing);
    const plate = labelPlate(t.title.replace(/^the /, ''));
    ped.userData.label.add(plate);
    const pl = this.s.placements?.[`artifact:${t.id}`];
    o.position.set(pl ? pl.x : spot.x, 0, pl ? pl.z : spot.z);
    o.rotation.y = Math.atan2(3 - spot.x, -2.5 - spot.z) + Math.PI * 0.0;
    o.userData.interactive = { kind: 'artifact', thread: t.id };
    o.userData.movable = { artifact: true, thread: t.id, name: t.title.replace(/^the /, '') };
    o.userData.thread = t.id;
    o.userData.pedestal = true;
    o.userData.thing = thing;
    ws.group.add(o);
    this.placed.set(t.id, o);
    this.markNew(o, t.id);
  }

  /** A finished thing has found its home: verified builds get the biggest celebration. */
  onPlaced(t) {
    this._placedThings();
    const o = this.placed.get(t.id);
    if (!o) return;
    if (o.userData.pedestal) {
      // the pedestal rises out of the floor, the object settles on top, confetti
      const ped = o.children[0];
      const thing = o.userData.thing;
      ped.scale.set(1, 0.01, 1);
      thing.visible = false;
      const top = ped.userData.top;
      this.anim((k) => {
        const a = clamp(k / 1.2);
        ped.scale.set(1, Math.max(0.01, easeOutBack(a, 1.3)), 1);
        if (k > 1.0) {
          thing.visible = true;
          const b = clamp((k - 1.0) / 0.6);
          thing.position.y = top + (1 - easeOutBack(b, 1.6)) * 0.9;
          thing.rotation.y = (1 - b) * TAU;
        }
        if (k > 1.6 && !o.userData.cheered) {
          o.userData.cheered = true;
          const p = o.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 1.2, 0));
          this.world.fx.spawn('confetti', p, { count: 40 });
          this.world.fx.spawn('stars', p, { count: 8 });
          sound.play('yay');
          setTimeout(() => sound.play('chime'), 180);
          this.game.haptic('done');
          bus.emit('celebrate', t, o);
        }
        return k < 2.4;
      });
    } else {
      this.popIn(o);
      const p = o.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.4, 0));
      this.world.fx.spawn('sparkle', p, { count: 8 });
      sound.play('chime');
    }
  }

  // ------------------------------------------------------------ chalkboard
  _chalk() {
    const cb = this.obj('kitchen', 'chalkboard');
    if (!cb) return;
    const todos = this.s.threads.filter((t) => t.kind === 'todo' && (t.status === 'todo' || t.status === 'wip' || (t.status === 'ticked' && clock.now() - (t.doneAt || 0) < 16 * 3600 * 1000))).slice(-7);
    const key = todos.map((t) => t.id + t.status).join();
    if (key === this._chalkKey) return;
    this._chalkKey = key;
    cb.userData.draw(todos.map((t) => ({ text: t.line, done: t.status === 'ticked' })));
  }

  // ------------------------------------------------------------ attic
  _attic() {
    // before there's an attic, shelved ideas wait in boxes on the stairs
    const kit = this.world.furnish.kit('attic') || this._stairStore();
    if (!kit) return;
    const spots0 = kit.objects.boxSpots;
    // the most recent ones are on top; older boxes are further back (not drawn)
    const list = this.s.threads
      .filter((t) => t.status === 'attic')
      .sort((a, b) => a.atticAt - b.atticAt)
      .slice(-spots0.length * 2);
    const ids = new Set(list.map((t) => t.id));
    for (const [id, b] of this.boxes) {
      if (!ids.has(id)) {
        b.parent?.remove(b);
        this.boxes.delete(id);
      }
    }
    const spots = kit.objects.boxSpots;
    list.forEach((t, i) => {
      let b = this.boxes.get(t.id);
      const spot = spots[i % spots.length];
      const stack = Math.floor(i / spots.length);
      if (!b) {
        b = ideaBox(`#${A.hueCol(t.hue ?? 30, 0.6, 0.62).getHexString()}`, hashi(t.id));
        b.userData.interactive = { kind: 'atticBox', thread: t.id };
        b.userData.thread = t.id;
        kit.group.add(b);
        this.boxes.set(t.id, b);
      }
      if (b.parent !== kit.group) kit.group.add(b);
      b.position.set(spot.x, (spot.y || 0) + stack * 0.42, spot.z);
      b.scale.setScalar(kit.stairs ? 0.8 : 1);
    });
  }

  _stairStore() {
    const commons = this.world.furnish.kit('commons');
    if (!commons) return null;
    if (!commons.objects.stairSpots) {
      // on the steps, one box per step, going up
      const spots = [];
      for (let i = 0; i < 9; i++) spots.push({ x: 5.38 + (i % 2 ? 0.12 : -0.12), z: 4.55 - i * 0.445, y: (i + 1) * 0.3 });
      commons.objects.stairSpots = spots;
    }
    return { group: commons.group, objects: { boxSpots: commons.objects.stairSpots }, stairs: true };
  }

  // ------------------------------------------------------------ mail
  _mail() {
    const mb = this.obj('gate', 'mailbox');
    if (!mb) return;
    const m = this.s.mail;
    const flag = mb.userData.flag;
    const up = m.flag || this._sendingFlag;
    const target = up ? -Math.PI / 2 : 0;
    flag.rotation.z += (target - flag.rotation.z) * 0.3;
    mb.userData.interactive = { kind: 'mailbox' };
    // letters pinned on the letter wall: replies + sent letters
    const lw = this.obj('gate', 'letterWall');
    if (lw) {
      const items = [...m.wall.map((x) => ({ id: x.id, color: '#fff6e6', motif: 'envelope', hue: 30 })), ...this.s.threads.filter((t) => t.kind === 'letter' && (t.status === 'sent' || t.status === 'replied')).map((t) => ({ id: t.id, color: '#f3e7f5', motif: 'envelope', hue: 300 }))].slice(-lw.userData.slots.length);
      const key = items.map((x) => x.id).join();
      if (key !== this._lwKey) {
        this._lwKey = key;
        (lw.userData.pinned ||= (() => {
          const g = new THREE.Group();
          lw.add(g);
          return g;
        })()).clear();
        items.forEach((x, i) => {
          const s = lw.userData.slots[i];
          const card = mesh(rbox(0.3, 0.21, 0.015, 0.006), mat(x.color, { roughness: 0.9 }), { pos: [s.x, s.y, s.z + 0.01], rot: [0, 0, ((hashi(x.id) % 10) - 5) * 0.03] });
          card.add(mesh(sphere(0.025, 8, 6), mat('#d9776a'), { pos: [0, 0.07, 0.01], scale: [1, 1, 0.4] }));
          lw.userData.pinned.add(card);
        });
      }
      lw.userData.interactive = { kind: 'letterWall' };
    }
  }

  // ------------------------------------------------------------ keepsakes & facts
  _keepsakes() {
    const shelf = this.obj('commons', 'keepsakes');
    if (!shelf) return;
    const list = this.s.keepsakes.slice(0, shelf.userData.slots.length);
    list.forEach((k, i) => {
      if (this.keeps.has(k.id)) return;
      const slot = shelf.userData.slots[i];
      const o = memento(k);
      o.position.set(slot.x, slot.y, slot.z);
      o.userData.interactive = { kind: 'keepsake', id: k.id };
      shelf.add(o);
      if (slot.ring) slot.ring.visible = false;
      this.keeps.set(k.id, o);
      this.markNew(o, `k:${k.id}`);
    });
  }

  _facts() {
    const kit = this.world.furnish.kit('yours');
    if (!kit) return;
    const shelf = kit.objects.factShelf;
    const table = kit.objects.facts;
    const spots = [...(table ? table.userData.slots.map((s) => ({ host: table, s })) : []), ...(shelf ? shelf.userData.slots.map((s) => ({ host: shelf, s })) : [])];
    const list = this.s.facts.filter((f) => f.state !== 'tossed').slice(-spots.length);
    const ids = new Set(list.map((f) => f.id));
    for (const [id, o] of this.factObjs) {
      if (!ids.has(id)) {
        o.parent?.remove(o);
        this.factObjs.delete(id);
      }
    }
    list.forEach((f, i) => {
      let o = this.factObjs.get(f.id);
      const solid = f.kind === 'stated' || f.state === 'kept';
      if (o && o.userData.solid !== solid) {
        o.parent?.remove(o);
        o = null;
      }
      if (!o) {
        o = factObject(f, solid);
        o.userData.solid = solid;
        o.userData.interactive = { kind: 'fact', id: f.id };
        this.factObjs.set(f.id, o);
      }
      const { host, s } = spots[i];
      if (o.parent !== host) host.add(o);
      o.position.set(s.x, s.y, s.z ?? 0);
    });
  }

  // ------------------------------------------------------------ capabilities as tools
  _capabilities() {
    const caps = this.s.capabilities.map((c) => c.id);
    const key = caps.join();
    if (key === this._capKey) return;
    this._capKey = key;
    const peg = this.obj('workshop', 'pegboard');
    if (peg) {
      const tools = caps.filter((c) => ['saw', 'drill', 'calipers'].includes(c));
      peg.userData.toolObjs?.forEach((o) => peg.remove(o));
      peg.userData.toolObjs = tools.map((id, i) => {
        const s = peg.userData.slots[1 + i];
        const o = toolObject(id);
        o.position.set(s.x, s.y, s.z);
        peg.add(o);
        return o;
      });
    }
    const study = this.world.furnish.kit('study');
    if (study && caps.includes('telescope') && !study.objects.telescope) {
      const t = telescope();
      const sp = study.objects.telescopeSpot;
      t.position.set(sp.x, 0, sp.z);
      t.rotation.y = -Math.PI * 0.75;
      study.group.add(t);
      study.objects.telescope = t;
    }
    const kitchen = this.world.furnish.kit('kitchen');
    if (kitchen && caps.includes('radio') && !kitchen.objects.radio) {
      const r = radio();
      const sp = kitchen.objects.radioSpot;
      r.position.set(sp.x, sp.y, sp.z);
      sp.obj.add(r);
      kitchen.objects.radio = r;
    }
  }

  // ------------------------------------------------------------ the toss bin fills up a little
  _bin() {
    const bin = this.obj('commons', 'bin');
    if (!bin) return;
    const tossed = this.s.threads.filter((t) => t.status === 'tossed' && clock.now() - (t.tossedAt || t.createdAt) < 2 * 86400000).length;
    const n = Math.min(6, tossed);
    const inside = bin.userData.inside;
    while (inside.children.length < n) {
      const b = paperBall();
      const i = inside.children.length;
      b.position.set(Math.cos(i * 2.1) * 0.1, i * 0.04, Math.sin(i * 2.1) * 0.1);
      inside.add(b);
    }
    while (inside.children.length > n) inside.remove(inside.children[inside.children.length - 1]);
  }

  // ------------------------------------------------------------ smoke on failed builds
  _smoke(dt) {
    this._smokeT = (this._smokeT || 0) - dt;
    if (this._smokeT > 0) return;
    this._smokeT = 0.5;
    for (const w of this.wips.values()) {
      if (!w.obj.userData.smoke || !w.obj.parent?.visible) continue;
      const p = w.obj.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.45, 0));
      this.world.fx.spawn('puff', p, { count: 1 });
    }
  }

  // ------------------------------------------------------------ "new" glow
  markNew(o, id) {
    if (!this._fresh && !this.s.seen) return;
    if (this.s.seen[id]) return;
    this.glows.set(o, { id, t: 0, onScreen: 0 });
    o.traverse((m) => {
      if (m.isMesh && m.material && !Array.isArray(m.material) && m.material.emissive) {
        m.material = m.material.clone();
        m.userData.glowMat = true;
      }
    });
  }

  seen(id) {
    this.s.seen[id] = clock.now();
    for (const [o, g] of this.glows) if (g.id === id) this._unglow(o);
  }

  _unglow(o) {
    this.glows.delete(o);
    o.traverse((m) => {
      if (m.userData.glowMat) m.material.emissiveIntensity = 0;
    });
  }

  _updateGlows(dt) {
    if (!this.glows.size) return;
    const cam = this.world.engine.camera;
    const frustum = (this._fr ||= new THREE.Frustum());
    frustum.setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse));
    const t = performance.now() / 1000;
    for (const [o, g] of this.glows) {
      let visible = true;
      for (let p = o; p; p = p.parent) if (p.visible === false) visible = false;
      const pos = o.getWorldPosition(new THREE.Vector3());
      if (visible && frustum.containsPoint(pos)) g.onScreen += dt;
      const k = 0.35 + Math.sin(t * 3) * 0.2;
      o.traverse((m) => {
        if (m.userData.glowMat) {
          m.material.emissive.set('#ffe7a0');
          m.material.emissiveIntensity = k;
        }
      });
      // about two seconds on screen (and the player isn't busy elsewhere) counts as seen
      if (g.onScreen > 2.2 && !this.game.busy) {
        this.s.seen[g.id] = clock.now();
        this._unglow(o);
      }
    }
  }

  wiggle(o) {
    const base = o.scale.clone();
    sound.play('pop');
    this.anim((k) => {
      const a = Math.min(1, k / 0.5);
      const s = Math.sin(a * Math.PI * 3) * (1 - a) * 0.12;
      o.scale.set(base.x * (1 + s), base.y * (1 - s), base.z * (1 + s));
      return a < 1;
    });
  }

  popIn(o) {
    const base = o.scale.clone();
    o.scale.setScalar(0.01);
    this.anim((k) => {
      const a = clamp(k / 0.45);
      o.scale.copy(base).multiplyScalar(Math.max(0.01, easeOutBack(a, 2)));
      return a < 1;
    });
  }

  // ------------------------------------------------------------ paper things: map, roster, ledger
  drawMap() {
    const m = this.obj('commons', 'map');
    if (!m) return;
    const { canvas: c, tex } = m.userData;
    const g = c.getContext('2d');
    const W = c.width;
    const H = c.height;
    g.fillStyle = '#f4ead8';
    g.fillRect(0, 0, W, H);
    // world -> map: x -9..15, z -14..14
    const X = (x) => ((x + 9) / 24) * (W - 30) + 15;
    const Z = (z) => ((z + 14) / 28) * (H - 30) + 15;
    const built = new Set(this.world.structure.chunks);
    for (const [id, ch] of Object.entries(CHUNKS)) {
      g.save();
      g.beginPath();
      g.ellipse(X(ch.cx), Z(ch.cz), (ch.hx / 24) * (W - 30), (ch.hz / 28) * (H - 30), 0, 0, TAU);
      if (built.has(id)) {
        g.fillStyle = '#cfe0b4';
        g.fill();
        g.strokeStyle = '#7a6250';
        g.lineWidth = 2.5;
        g.stroke();
      } else {
        g.setLineDash([5, 6]);
        g.strokeStyle = 'rgba(122,98,80,0.45)';
        g.lineWidth = 2;
        g.stroke();
        g.fillStyle = 'rgba(122,98,80,0.35)';
        g.font = `22px 'Patrick Hand', cursive`;
        g.textAlign = 'center';
        g.fillText('?', X(ch.cx), Z(ch.cz) + 7);
      }
      g.restore();
    }
    // rooms
    for (const r of this.world.house.rooms) {
      if (r.level !== 0) continue;
      g.fillStyle = r.sealed ? 'rgba(150,120,100,0.25)' : '#efd9bf';
      g.strokeStyle = '#7a6250';
      g.lineWidth = 2;
      g.fillRect(X(r.x0), Z(r.z0), X(r.x1) - X(r.x0), Z(r.z1) - Z(r.z0));
      g.strokeRect(X(r.x0), Z(r.z0), X(r.x1) - X(r.x0), Z(r.z1) - Z(r.z0));
    }
    g.fillStyle = '#7a6250';
    g.font = `20px 'Patrick Hand', cursive`;
    g.textAlign = 'left';
    g.fillText('our island', 14, H - 12);
    // compass
    g.fillText('n', W - 26, 26);
    tex.needsUpdate = true;
  }

  drawRoster() {
    const r = this.obj('commons', 'roster');
    if (!r) return;
    const { canvas: c, tex } = r.userData;
    const g = c.getContext('2d');
    const W = c.width;
    const H = c.height;
    g.fillStyle = '#f4ead8';
    g.fillRect(0, 0, W, H);
    const crew = this.s.crew.filter((m) => !m.specialist);
    const slots = 8;
    const cols = 4;
    for (let i = 0; i < slots; i++) {
      const x = 30 + (i % cols) * ((W - 60) / (cols - 1));
      const y = 70 + Math.floor(i / cols) * 120;
      const m = crew[i];
      if (!m) {
        g.setLineDash([4, 5]);
        g.strokeStyle = 'rgba(122,98,80,0.4)';
        g.lineWidth = 2;
        g.beginPath();
        g.ellipse(x, y, 26, 30, 0, 0, TAU);
        g.stroke();
        g.setLineDash([]);
        continue;
      }
      g.fillStyle = m.color;
      g.beginPath();
      g.ellipse(x, y, 26, 30, 0, 0, TAU);
      g.fill();
      g.fillStyle = '#3a2a24';
      g.beginPath();
      g.arc(x - 8, y - 4, 3.5, 0, TAU);
      g.arc(x + 8, y - 4, 3.5, 0, TAU);
      g.fill();
      g.fillStyle = '#5a4036';
      g.font = `20px 'Patrick Hand', cursive`;
      g.textAlign = 'center';
      g.fillText((m.name || '?').toLowerCase(), x, y + 50);
    }
    tex.needsUpdate = true;
  }

  drawLedger() {
    const kit = this.world.furnish.kit('underside');
    const l = kit?.objects.ledger;
    if (!l) return;
    const { canvas: c, tex } = l.userData;
    const g = c.getContext('2d');
    g.fillStyle = '#f2e6cf';
    g.fillRect(0, 0, c.width, c.height);
    g.strokeStyle = '#c9b18f';
    g.beginPath();
    g.moveTo(c.width / 2, 0);
    g.lineTo(c.width / 2, c.height);
    g.stroke();
    g.fillStyle = '#4e3a30';
    g.font = `17px 'Patrick Hand', cursive`;
    const list = this.s.threads.slice(-26).reverse();
    list.forEach((t, i) => {
      const col = i < 13 ? 0 : 1;
      const y = 26 + (i % 13) * 24;
      g.fillText(`${(t.title || t.line).slice(0, 22)} — ${t.status}`, 14 + col * (c.width / 2), y);
    });
    tex.needsUpdate = true;
  }
}

// ------------------------------------------------------------------ helpers
function shortLine(t) {
  const s = t.title || t.line;
  return s.length > 34 ? `${s.slice(0, 32)}…` : s;
}

function hashi(id = '') {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

function disposeTree(o) {
  o.traverse((m) => {
    if (m.isMesh) {
      if (m.material?.map && m.material.map.isCanvasTexture) m.material.map.dispose();
    }
  });
}

/** A memento from a visitor: saturated, small, special. */
function memento(k) {
  const g = new THREE.Group();
  const c = k.color || '#e3b48f';
  switch (k.motif) {
    case 'leaf':
      g.add(mesh(sphere(0.07, 12, 10), mat(c, { roughness: 0.4 }), { pos: [0, 0.07, 0], scale: [1, 1.2, 1] }));
      g.add(mesh(cyl(0.075, 0.06, 0.04, 12), mat('#8a5a36'), { pos: [0, 0.14, 0] }));
      break;
    case 'kite':
      g.add(mesh(rbox(0.04, 0.22, 0.01, 0.005), mat(c), { pos: [0, 0.11, 0], rot: [0, 0, 0.3] }));
      break;
    case 'shell':
      g.add(mesh(torus(0.05, 0.03, 8, 16), mat(c, { roughness: 0.4 }), { pos: [0, 0.05, 0], rot: [0.4, 0, 0] }));
      break;
    case 'star':
      g.add(mesh(sphere(0.07, 14, 10), uniqueMat(c, { emissive: c, emissiveIntensity: 0.6, roughness: 0.2 }), { pos: [0, 0.07, 0] }));
      break;
    case 'cup':
      g.add(mesh(cyl(0.06, 0.05, 0.09, 14), mat(c, { roughness: 0.4 }), { pos: [0, 0.045, 0] }));
      break;
    case 'cloud':
      g.add(mesh(sphere(0.07, 12, 10), mat(c, { roughness: 0.9 }), { pos: [0, 0.06, 0], scale: [1.2, 0.8, 1] }));
      break;
    default:
      g.add(mesh(sphere(0.07, 12, 10), mat(c), { pos: [0, 0.07, 0] }));
  }
  return g;
}

/** Stated facts are solid little objects; inferred ones are ghostly outlines. */
function factObject(f, solid) {
  const g = new THREE.Group();
  const rng = mulberry32(hashi(f.id));
  const kinds = [
    () => mesh(rbox(0.16, 0.2, 0.05, 0.01), m('#c98a7a'), { pos: [0, 0.1, 0] }),
    () => mesh(sphere(0.09, 14, 10), m('#9fc7d8'), { pos: [0, 0.09, 0] }),
    () => mesh(cyl(0.06, 0.05, 0.12, 14), m('#d9b46a'), { pos: [0, 0.06, 0] }),
    () => mesh(torus(0.06, 0.025, 8, 18), m('#b59ad8'), { pos: [0, 0.08, 0] }),
  ];
  function m(c) {
    return solid ? mat(c, { roughness: 0.5 }) : uniqueMat('#dfe8ff', { transparent: true, opacity: 0.35, emissive: '#b8c8ff', emissiveIntensity: 0.4 });
  }
  g.add(kinds[Math.floor(rng() * kinds.length)]());
  return g;
}

function toolObject(id) {
  const g = new THREE.Group();
  const metal = mat('#b9c2cc', { roughness: 0.35, metalness: 0.6 });
  if (id === 'saw') {
    g.add(mesh(rbox(0.06, 0.12, 0.03, 0.01), mat('#c98a5a'), { pos: [0, -0.04, 0] }));
    g.add(mesh(rbox(0.05, 0.3, 0.008, 0.002), metal, { pos: [0, -0.24, 0] }));
  } else if (id === 'drill') {
    g.add(mesh(rbox(0.16, 0.08, 0.06, 0.02), mat('#e3a24a'), { pos: [0, -0.06, 0] }));
    g.add(mesh(cyl(0.008, 0.008, 0.12, 5), metal, { pos: [0.12, -0.06, 0], rot: [0, 0, Math.PI / 2] }));
  } else {
    g.add(mesh(rbox(0.03, 0.26, 0.01, 0.004), metal, { pos: [0, -0.14, 0] }));
    g.add(mesh(rbox(0.1, 0.03, 0.012, 0.004), metal, { pos: [0.03, -0.03, 0] }));
  }
  return g;
}

export { ROOMS, slotWorld };
