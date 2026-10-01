// Things that come and go at the gate: the mail bird, the little balloon
// that brings new crew, the big balloon (moored = specialist budget left
// today), and rare visitors who only come while you're away.
import * as THREE from 'three';
import { mat, uniqueMat } from '../gfx/materials.js';
import { rbox, cyl, sphere, torus, mesh, capsule, smoothLathe } from '../gfx/geo.js';
import { GATE } from '../island/layout.js';
import { sound } from '../core/audio.js';
import { bus } from '../core/events.js';
import { clamp, damp, easeInOut, easeOutBack, rand, TAU } from '../core/util.js';

// ------------------------------------------------------------------ the mail bird
function birdMesh() {
  const g = new THREE.Group();
  const body = mat('#f2b880', { roughness: 0.6 });
  const belly = mat('#fff1dc', { roughness: 0.7 });
  const wingM = mat('#e09a62', { roughness: 0.6 });
  g.add(mesh(sphere(0.16, 16, 12), body, { pos: [0, 0.18, 0], scale: [1, 0.95, 1.1] }));
  g.add(mesh(sphere(0.11, 12, 10), belly, { pos: [0, 0.14, 0.08], scale: [1, 0.9, 0.7] }));
  g.add(mesh(sphere(0.1, 14, 10), body, { pos: [0, 0.34, 0.06] }));
  g.add(mesh(cyl(0.001, 0.03, 0.07, 8), mat('#f3c24a'), { pos: [0, 0.33, 0.18], rot: [Math.PI / 2, 0, 0] }));
  for (const s of [-1, 1]) g.add(mesh(sphere(0.016, 8, 6), mat('#2a1a15'), { pos: [s * 0.045, 0.37, 0.14] }));
  // little postbag
  g.add(mesh(rbox(0.1, 0.08, 0.05, 0.02), mat('#b07a52'), { pos: [0.12, 0.12, 0], rot: [0, 0, 0.2] }));
  const wings = [];
  for (const s of [-1, 1]) {
    const p = new THREE.Group();
    p.position.set(s * 0.13, 0.22, -0.01);
    p.add(mesh(sphere(0.09, 10, 8), wingM, { pos: [s * 0.05, 0, -0.02], scale: [0.5, 0.9, 1.3] }));
    g.add(p);
    wings.push({ p, s });
  }
  g.add(mesh(rbox(0.1, 0.02, 0.12, 0.01), wingM, { pos: [0, 0.16, -0.17], rot: [0.4, 0, 0] }));
  for (const s of [-1, 1]) g.add(mesh(cyl(0.008, 0.008, 0.06, 4), mat('#d8913a'), { pos: [s * 0.05, 0.03, 0.02] }));
  g.userData.wings = wings;
  return g;
}

export class Bird {
  constructor(world) {
    this.world = world;
    this.g = birdMesh();
    this.g.visible = false;
    this.g.userData.interactive = { kind: 'bird' };
    world.levels[0].add(this.g);
    this.state = 'away';
    this.t = 0;
    this.carry = null;
  }

  perch() {
    const p = this.world.furnish.obj('gate', 'perch');
    if (!p) return null;
    const top = p.userData.top;
    return p.localToWorld(new THREE.Vector3(top.x, top.y, top.z));
  }

  /** Sit on the perch (it landed while you were away). */
  land(instant = false) {
    const at = this.perch();
    if (!at) return;
    this.g.visible = true;
    if (instant) {
      this.g.position.copy(at);
      this.state = 'perched';
      return;
    }
    this._fly(at.clone().add(new THREE.Vector3(-8, 6, 6)), at, 'perched');
  }

  /** Swoop by the mailbox and take a letter away. */
  pickUp(fromPos, onDone) {
    const sky = fromPos.clone().add(new THREE.Vector3(10, 7, -6));
    this.g.visible = true;
    this.carry = mesh(rbox(0.22, 0.15, 0.02, 0.01), mat('#fdf3e2'), { pos: [0, 0.02, 0.05] });
    this._fly(sky.clone().add(new THREE.Vector3(-14, 0, 8)), fromPos.clone().add(new THREE.Vector3(0, 1.1, 0)), 'swoop', () => {
      this.g.add(this.carry);
      sound.play('coo');
      this._fly(this.g.position.clone(), sky, 'away', () => {
        this.g.remove(this.carry);
        this.g.visible = false;
        onDone?.();
      });
    });
    sound.play('whoosh');
  }

  leave() {
    if (this.state !== 'perched') return;
    const from = this.g.position.clone();
    this._fly(from, from.clone().add(new THREE.Vector3(9, 6, -7)), 'away', () => (this.g.visible = false));
  }

  _fly(a, b, end, done) {
    this.state = 'flying';
    this.from = a;
    this.to = b;
    this.t = 0;
    this.dur = Math.max(1.2, a.distanceTo(b) / 7);
    this.endState = end;
    this.done = done;
    this.g.position.copy(a);
  }

  update(dt, t) {
    const g = this.g;
    if (!g.visible) return;
    const wings = g.userData.wings;
    if (this.state === 'flying') {
      this.t += dt / this.dur;
      const k = clamp(this.t);
      const e = easeInOut(k);
      g.position.lerpVectors(this.from, this.to, e);
      g.position.y += Math.sin(k * Math.PI) * 1.2;
      const dir = this.to.clone().sub(this.from);
      g.rotation.y = Math.atan2(dir.x, dir.z);
      for (const w of wings) w.p.rotation.z = w.s * (0.3 + Math.sin(t * 28) * 0.9);
      if (k >= 1) {
        this.state = this.endState;
        const d = this.done;
        this.done = null;
        if (this.state === 'perched') sound.play('coo');
        d?.();
      }
    } else if (this.state === 'perched') {
      for (const w of wings) w.p.rotation.z = w.s * 0.1;
      g.position.y = (this.perch()?.y ?? g.position.y) + Math.abs(Math.sin(t * 1.3)) * 0.01;
      g.rotation.y = Math.sin(t * 0.4) * 0.6 + 0.8;
      // preen now and then
      if (Math.sin(t * 0.7) > 0.97) g.rotation.z = Math.sin(t * 12) * 0.1;
      else g.rotation.z = 0;
    }
  }
}

// ------------------------------------------------------------------ balloons
function balloonMesh(big = false, color = '#e9a0a0') {
  const g = new THREE.Group();
  const s = big ? 1.6 : 1;
  const env = new THREE.Group();
  const stripes = big ? ['#c27b6a', '#e9d3a8'] : [color, '#fff1e2'];
  for (let i = 0; i < 8; i++) {
    const seg = mesh(new THREE.SphereGeometry(0.8 * s, 12, 14, (i / 8) * TAU, TAU / 8), mat(stripes[i % 2], { roughness: 0.7, side: THREE.DoubleSide }), { cast: true });
    seg.scale.set(1, 1.15, 1);
    env.add(seg);
  }
  env.position.y = 2.2 * s;
  g.add(env);
  const rope = mat('#8a6c50');
  for (const [x, z] of [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ]) {
    const a = new THREE.Vector3(x * 0.22 * s, 0.42 * s, z * 0.22 * s);
    const b = new THREE.Vector3(x * 0.45 * s, 1.5 * s, z * 0.45 * s);
    const r = mesh(cyl(0.008, 0.008, a.distanceTo(b), 4), rope, { cast: false });
    r.position.copy(a).add(b).multiplyScalar(0.5);
    r.lookAt(b);
    r.rotateX(Math.PI / 2);
    g.add(r);
  }
  g.add(mesh(rbox(0.55 * s, 0.4 * s, 0.55 * s, 0.05), mat('#c9a072', { roughness: 0.95 }), { pos: [0, 0.22 * s, 0] }));
  g.add(mesh(torus(0.29 * s, 0.03, 6, 16), mat('#a98058'), { pos: [0, 0.42 * s, 0], rot: [Math.PI / 2, 0, 0] }));
  g.userData.env = env;
  g.userData.scale = s;
  return g;
}

export class Balloon {
  constructor(world, big) {
    this.world = world;
    this.big = big;
    this.g = balloonMesh(big);
    this.g.visible = false;
    world.levels[0].add(this.g);
    this.state = 'away';
    this.t = 0;
  }

  anchor() {
    const s = this.world.structure;
    if (s?.chunks.includes('gate')) return this.big ? new THREE.Vector3(GATE.mooring.x + 0.2, 0, GATE.mooring.z - 0.1) : new THREE.Vector3(-2.0, 0, 11.75);
    return new THREE.Vector3(5.6, 0, 8.2);
  }

  /** Float down from the sky; `onLand` when the basket touches. */
  arrive(onLand, instant = false) {
    const at = this.anchor();
    this.g.visible = true;
    if (instant) {
      this.g.position.copy(at);
      this.to = at;
      this.state = 'moored';
      onLand?.();
      return;
    }
    this.from = at.clone().add(new THREE.Vector3(-6, 14, 8));
    this.to = at;
    this.t = 0;
    this.dur = 6;
    this.state = 'landing';
    this.onLand = onLand;
    sound.play('whoosh');
  }

  depart(onGone) {
    if (!this.g.visible) return onGone?.();
    this.from = this.g.position.clone();
    this.to = this.from.clone().add(new THREE.Vector3(7, 16, -9));
    this.t = 0;
    this.dur = 7;
    this.state = 'leaving';
    this.onGone = onGone;
    sound.play('whoosh');
  }

  moor(instant = true) {
    if (this.state === 'moored' || this.state === 'landing') return;
    this.arrive(null, instant);
  }

  update(dt, t) {
    const g = this.g;
    if (!g.visible) return;
    g.userData.env.rotation.y += dt * 0.05;
    if (this.state === 'landing' || this.state === 'leaving') {
      this.t += dt / this.dur;
      const k = clamp(this.t);
      const e = this.state === 'landing' ? 1 - Math.pow(1 - k, 3) : k * k;
      g.position.lerpVectors(this.from, this.to, e);
      g.position.x += Math.sin(k * 5) * 0.3 * (1 - k);
      if (k >= 1) {
        if (this.state === 'landing') {
          this.state = 'moored';
          sound.play('land');
          this.world.fx.spawn('dust', g.position.clone().add(new THREE.Vector3(0, 0.05, 0)), { count: 6, size: 0.35 });
          const cb = this.onLand;
          this.onLand = null;
          cb?.();
        } else {
          this.state = 'away';
          g.visible = false;
          const cb = this.onGone;
          this.onGone = null;
          cb?.();
        }
      }
    } else if (this.state === 'moored') {
      g.position.y = this.to ? this.to.y + Math.sin(t * 0.9) * 0.04 : g.position.y;
      g.rotation.z = Math.sin(t * 0.7) * 0.02;
    }
  }
}

// ------------------------------------------------------------------ visitors
function visitorMesh(type) {
  const g = new THREE.Group();
  const m = (c, o) => mat(c, { roughness: 0.6, ...o });
  const eyes = (y, z, dx = 0.06, r = 0.022) => {
    for (const s of [-1, 1]) g.add(mesh(sphere(r, 8, 6), m('#2a1a15'), { pos: [s * dx, y, z] }));
  };
  switch (type) {
    case 'fox':
      g.add(mesh(sphere(0.22, 14, 12), m('#e08a4a'), { pos: [0, 0.24, 0], scale: [1, 0.85, 1.3] }));
      g.add(mesh(sphere(0.16, 14, 12), m('#e08a4a'), { pos: [0, 0.42, 0.22] }));
      g.add(mesh(sphere(0.08, 10, 8), m('#fff2e2'), { pos: [0, 0.38, 0.35], scale: [1, 0.7, 1] }));
      for (const s of [-1, 1]) g.add(mesh(cyl(0.001, 0.06, 0.12, 6), m('#e08a4a'), { pos: [s * 0.08, 0.6, 0.2] }));
      g.add(mesh(capsule(0.08, 0.3, 6, 10), m('#e08a4a'), { pos: [0, 0.3, -0.35], rot: [1.1, 0, 0] }));
      g.add(mesh(sphere(0.07, 10, 8), m('#fff2e2'), { pos: [0, 0.42, -0.5] }));
      eyes(0.46, 0.36, 0.06);
      break;
    case 'owl':
      g.add(mesh(sphere(0.24, 16, 12), m('#a58b6b'), { pos: [0, 0.3, 0], scale: [1, 1.2, 0.95] }));
      for (const s of [-1, 1]) g.add(mesh(sphere(0.08, 12, 10), m('#f6ead2'), { pos: [s * 0.09, 0.42, 0.18] }));
      eyes(0.42, 0.25, 0.09, 0.03);
      g.add(mesh(cyl(0.001, 0.03, 0.06, 6), m('#e3a24a'), { pos: [0, 0.35, 0.24], rot: [Math.PI, 0, 0] }));
      break;
    case 'snail':
      g.add(mesh(capsule(0.07, 0.35, 6, 10), m('#cfd6a8'), { pos: [0, 0.07, 0.05], rot: [Math.PI / 2, 0, 0] }));
      g.add(mesh(torus(0.13, 0.08, 10, 20), m('#d99a6c'), { pos: [0, 0.22, -0.05], rot: [0, Math.PI / 2, 0] }));
      for (const s of [-1, 1]) g.add(mesh(cyl(0.008, 0.008, 0.14, 4), m('#cfd6a8'), { pos: [s * 0.04, 0.18, 0.25], rot: [0.3, 0, s * 0.2] }));
      eyes(0.25, 0.27, 0.06, 0.018);
      break;
    case 'moth':
      g.add(mesh(capsule(0.06, 0.18, 6, 10), m('#e8e0f4'), { pos: [0, 0.35, 0] }));
      for (const s of [-1, 1]) g.add(mesh(sphere(0.18, 12, 10), uniqueMat('#cdd6ff', { emissive: '#9fb2ff', emissiveIntensity: 0.4, roughness: 0.6 }), { pos: [s * 0.18, 0.4, -0.02], scale: [1, 0.8, 0.15] }));
      eyes(0.46, 0.05, 0.03);
      break;
    case 'frog':
      g.add(mesh(sphere(0.2, 14, 12), m('#8fc9a8'), { pos: [0, 0.18, 0], scale: [1.2, 0.8, 1] }));
      for (const s of [-1, 1]) g.add(mesh(sphere(0.07, 10, 8), m('#8fc9a8'), { pos: [s * 0.1, 0.32, 0.08] }));
      eyes(0.35, 0.14, 0.1, 0.03);
      g.add(mesh(cyl(0.06, 0.05, 0.07, 12), m('#fff6ea'), { pos: [0.22, 0.1, 0.1] }));
      break;
    case 'bee':
      g.add(mesh(sphere(0.15, 14, 12), m('#f2c14e'), { pos: [0, 0.45, 0], scale: [1, 0.9, 1.2] }));
      g.add(mesh(torus(0.13, 0.03, 6, 18), m('#3a2a24'), { pos: [0, 0.45, -0.03], scale: [1, 0.9, 1] }));
      for (const s of [-1, 1]) g.add(mesh(sphere(0.1, 10, 8), uniqueMat('#ffffff', { transparent: true, opacity: 0.6 }), { pos: [s * 0.1, 0.58, -0.05], scale: [0.8, 0.3, 1] }));
      eyes(0.48, 0.16, 0.05);
      break;
    default:
      g.add(mesh(sphere(0.18, 14, 12), m('#d8dde8'), { pos: [0, 0.16, 0], scale: [1.3, 0.7, 1] }));
      for (const s of [-1, 1]) g.add(mesh(sphere(0.06, 10, 8), m('#c86a5a'), { pos: [s * 0.25, 0.2, 0.08] }));
      eyes(0.28, 0.12, 0.06);
  }
  return g;
}

export class Visitor {
  constructor(world, v) {
    this.world = world;
    this.v = v;
    this.g = visitorMesh(v.type);
    this.g.userData.interactive = { kind: 'visitor', id: v.id };
    const base = new THREE.Vector3(GATE.entry.x - 0.4 + rand(-0.3, 0.3), 0, GATE.entry.z + 1.6 + rand(-0.2, 0.3));
    this.g.position.copy(base);
    this.g.rotation.y = rand(-0.6, 0.6) + 0.4;
    this.base = base;
    this.t = rand(0, 10);
    world.levels[0].add(this.g);
    this.leaving = 0;
  }

  update(dt, t) {
    this.t += dt;
    const g = this.g;
    if (this.leaving) {
      this.leaving += dt;
      g.position.y += dt * 1.5;
      g.position.x += dt * 1.2;
      g.scale.setScalar(Math.max(0.01, 1 - this.leaving / 2.5));
      if (this.leaving > 2.5) {
        g.parent?.remove(g);
        return false;
      }
      return true;
    }
    const fly = this.v.type === 'moth' || this.v.type === 'bee';
    g.position.y = this.base.y + (fly ? 0.35 + Math.sin(this.t * 2.2) * 0.08 : Math.abs(Math.sin(this.t * 1.6)) * 0.015);
    g.rotation.y += Math.sin(this.t * 0.5) * dt * 0.3;
    return true;
  }

  leave() {
    this.leaving = 0.001;
    this.world.fx.spawn('sparkle', this.g.position.clone().add(new THREE.Vector3(0, 0.4, 0)), { count: 6 });
  }
}

// ------------------------------------------------------------------ manager
export class Arrivals {
  constructor(game) {
    this.game = game;
    this.world = game.world;
    this.bird = null;
    this.big = null;
    this.small = null;
    this.visitors = new Map();
  }

  get s() {
    return this.game.store.data;
  }

  ensure() {
    if (!this.bird) this.bird = new Bird(this.world);
    if (!this.big) this.big = new Balloon(this.world, true);
    if (!this.small) this.small = new Balloon(this.world, false);
  }

  /** Bring visuals in line with the state, without fanfare (on load / return). */
  sync() {
    this.ensure();
    const s = this.s;
    const gate = this.world.structure.chunks.includes('gate');
    // the bird sits on its perch while there's unread mail it brought
    if (gate && s.mail.flag && s.mail.birdHome && this.bird.state === 'away') this.bird.land(true);
    if ((!s.mail.flag || !gate) && this.bird.state === 'perched') this.bird.leave();
    // the big balloon is moored while there's specialist budget left today
    const avail = this.game.director.specialistAvailable();
    if (gate && avail && this.big.state === 'away') this.big.moor(!this._synced || !this.game.visible);
    this._synced = true;
    if ((!avail || !gate) && this.big.state === 'moored' && !s.specialist.here) this.big.depart();
    // visitors waiting near the gate
    for (const v of s.visitors) {
      if (v.gone || this.visitors.has(v.id) || !gate) continue;
      this.visitors.set(v.id, new Visitor(this.world, v));
    }
  }

  visitorLeaves(id) {
    const v = this.visitors.get(id);
    if (v) v.leave();
  }

  update(dt, t) {
    this.bird?.update(dt, t);
    this.big?.update(dt, t);
    this.small?.update(dt, t);
    for (const [id, v] of this.visitors) if (v.update(dt, t) === false) this.visitors.delete(id);
  }

  props() {
    const out = [];
    if (this.bird?.g.visible) out.push(this.bird.g);
    for (const v of this.visitors.values()) out.push(v.g);
    return out;
  }
}

export { damp, easeOutBack, bus };
