// Emote particles: hearts, sparkles, Zzz, notes, dust puffs, confetti...
import * as THREE from 'three';
import { iconCanvas } from './icons.js';
import { rand, clamp, easeOutBack, pick, TAU } from '../core/util.js';

const textures = new Map();
function tex(name) {
  if (!textures.has(name)) {
    const t = new THREE.CanvasTexture(iconCanvas(name));
    t.colorSpace = THREE.SRGBColorSpace;
    textures.set(name, t);
  }
  return textures.get(name);
}

const CONFETTI = ['#ff8fa8', '#ffd36b', '#8fd6b4', '#94c4f5', '#c3a6f2', '#ffb27a'];
const NOTE_TINTS = ['#ffffff', '#ffd8e4', '#d8f2ff', '#e9ffd6', '#fff1c9'];

export class FX {
  constructor(parent) {
    this.group = new THREE.Group();
    this.group.name = 'fx';
    this.group.userData.noAO = true;
    parent.add(this.group);
    this.pool = [];
    this.live = [];
    this.enabled = true;
  }

  setParent(parent) {
    parent.add(this.group);
  }

  _get(name) {
    let s = this.pool.pop();
    if (!s) {
      const m = new THREE.SpriteMaterial({ transparent: true, depthWrite: false, depthTest: true });
      s = new THREE.Sprite(m);
      s.userData.noAO = true;
      s.renderOrder = 10;
    }
    s.material.map = tex(name);
    s.material.color.set('#ffffff');
    s.material.opacity = 1;
    s.material.rotation = 0;
    s.material.blending = THREE.NormalBlending;
    s.material.needsUpdate = true;
    s.visible = true;
    this.group.add(s);
    return s;
  }

  spawnOne(name, pos, o = {}) {
    const s = this._get(o.icon || name);
    const p = {
      s,
      age: 0,
      life: o.life ?? 1.2,
      pos: pos.clone(),
      vel: o.vel ? o.vel.clone() : new THREE.Vector3(),
      grav: o.grav ?? 0,
      drag: o.drag ?? 0,
      size: o.size ?? 0.3,
      grow: o.grow ?? 0,
      spin: o.spin ?? 0,
      wobble: o.wobble ?? 0,
      wobbleF: o.wobbleF ?? 3,
      pop: o.pop ?? true,
      fadeIn: o.fadeIn ?? 0.08,
      fadeOut: o.fadeOut ?? 0.35,
      floor: o.floor ?? null,
      follow: o.follow || null,
      orbit: o.orbit || null,
      phase: rand(0, TAU),
      aspect: o.aspect ?? 1,
      flutter: o.flutter ?? 0,
      alpha: o.alpha ?? 1,
    };
    if (o.color) s.material.color.set(o.color);
    if (o.additive) s.material.blending = THREE.AdditiveBlending;
    s.material.rotation = o.rotation ?? 0;
    s.position.copy(p.pos);
    s.scale.set(0.001, 0.001, 1);
    this.live.push(p);
    return p;
  }

  /** High-level spawn by effect type. */
  spawn(type, pos, opts = {}) {
    if (!this.enabled || !pos) return;
    const n = opts.count ?? 1;
    switch (type) {
      case 'heart':
        for (let i = 0; i < n; i++)
          this.spawnOne('heart', pos.clone().add(new THREE.Vector3(rand(-0.15, 0.15), 0, rand(-0.1, 0.1))), {
            vel: new THREE.Vector3(rand(-0.1, 0.1), rand(0.45, 0.65), 0),
            life: rand(1.3, 1.7),
            size: opts.small ? 0.17 : rand(0.22, 0.28),
            wobble: 0.12,
            drag: 0.6,
          });
        break;
      case 'sparkle':
        for (let i = 0; i < n; i++) {
          const a = rand(0, TAU);
          this.spawnOne('sparkle', pos.clone().add(new THREE.Vector3(Math.cos(a) * 0.2, rand(-0.1, 0.15), Math.sin(a) * 0.2)), {
            vel: new THREE.Vector3(Math.cos(a) * 0.6, rand(0.4, 0.9), Math.sin(a) * 0.6),
            drag: 3,
            life: rand(0.6, 0.9),
            size: rand(0.13, 0.22),
            spin: rand(-4, 4),
          });
        }
        break;
      case 'stars': {
        const c = opts.critter;
        for (let i = 0; i < 3; i++)
          this.spawnOne('star', pos, {
            life: opts.duration ?? 2.5,
            size: 0.16,
            follow: c,
            orbit: { r: 0.32, speed: 5, phase: (i / 3) * TAU, y: 0.0 },
            pop: true,
            fadeOut: 0.4,
          });
        break;
      }
      case 'zzz':
        this.spawnOne('zzz', pos.clone().add(new THREE.Vector3(0.15, 0, 0)), {
          vel: new THREE.Vector3(0.12, 0.32, 0.02),
          life: 2.2,
          size: 0.16,
          grow: 0.16,
          wobble: 0.12,
          wobbleF: 2,
          fadeOut: 0.8,
        });
        break;
      case 'note':
        this.spawnOne('note', pos.clone().add(new THREE.Vector3(rand(-0.2, 0.2), 0, 0)), {
          vel: new THREE.Vector3(rand(-0.15, 0.15), rand(0.4, 0.55), 0),
          life: 1.6,
          size: rand(0.18, 0.24),
          wobble: 0.18,
          color: pick(NOTE_TINTS),
          rotation: rand(-0.3, 0.3),
        });
        break;
      case 'dust':
        for (let i = 0; i < n; i++) {
          const a = rand(0, TAU);
          const sp = rand(0.3, 0.7);
          this.spawnOne('dust', pos.clone().add(new THREE.Vector3(Math.cos(a) * 0.15, 0.05, Math.sin(a) * 0.15)), {
            vel: new THREE.Vector3(Math.cos(a) * sp, rand(0.05, 0.25), Math.sin(a) * sp),
            drag: 4,
            life: rand(0.45, 0.7),
            size: (opts.size ?? 0.22) * rand(0.8, 1.2),
            grow: 0.35,
            pop: false,
            fadeIn: 0.02,
          });
        }
        break;
      case 'puff': {
        const d = opts.dir || new THREE.Vector3(0, 0, 1);
        for (let i = 0; i < n; i++)
          this.spawnOne('puff', pos, {
            vel: d.clone().multiplyScalar(rand(1.2, 2)).add(new THREE.Vector3(rand(-0.4, 0.4), rand(-0.1, 0.4), rand(-0.4, 0.4))),
            drag: 4,
            life: rand(0.5, 0.8),
            size: rand(0.15, 0.25),
            grow: 0.4,
            pop: false,
          });
        break;
      }
      case 'pop':
        this.spawnOne('ring', pos, { life: 0.35, size: 0.2, grow: 1.6, pop: false, fadeIn: 0.01, fadeOut: 0.25 });
        break;
      case 'question':
      case 'exclaim':
      case 'anger':
        this.spawnOne(type, pos.clone().add(new THREE.Vector3(type === 'anger' ? 0.25 : 0.12, 0.05, 0)), {
          vel: new THREE.Vector3(0, 0.12, 0),
          drag: 1,
          life: 1.3,
          size: type === 'anger' ? 0.22 : 0.28,
          wobble: type === 'anger' ? 0 : 0.03,
          pulse: true,
        });
        break;
      case 'sweat':
        this.spawnOne('sweat', pos.clone().add(new THREE.Vector3(0.3, -0.1, 0)), {
          vel: new THREE.Vector3(0.05, -0.12, 0),
          life: 1.3,
          size: 0.17,
          rotation: -0.4,
        });
        break;
      case 'bulb':
        this.spawnOne('bulb', pos.clone().add(new THREE.Vector3(0, 0.1, 0)), {
          vel: new THREE.Vector3(0, 0.08, 0),
          life: 1.8,
          size: 0.4,
          fadeOut: 0.4,
        });
        for (let i = 0; i < 4; i++) this.spawn('sparkle', pos.clone().add(new THREE.Vector3(0, 0.2, 0)), { count: 1 });
        break;
      case 'dots':
        this.spawnOne('dots', pos.clone().add(new THREE.Vector3(0.25, 0.08, 0)), {
          vel: new THREE.Vector3(0, 0.04, 0),
          life: 2.3,
          size: 0.34,
        });
        break;
      case 'spark':
        for (let i = 0; i < n; i++) {
          const a = rand(0, TAU);
          this.spawnOne('spark', pos, {
            vel: new THREE.Vector3(Math.cos(a) * rand(0.5, 1.4), rand(0.8, 1.8), Math.sin(a) * rand(0.5, 1.4)),
            grav: 6,
            life: rand(0.3, 0.55),
            size: rand(0.06, 0.11),
            pop: false,
            additive: true,
          });
        }
        break;
      case 'drop':
        this.spawnOne('drop', pos.clone().add(new THREE.Vector3(rand(-0.03, 0.03), 0, rand(-0.03, 0.03))), {
          vel: new THREE.Vector3(rand(-0.1, 0.1), rand(-0.1, 0.2), rand(-0.1, 0.1)),
          grav: 7,
          life: 0.7,
          size: 0.07,
          pop: false,
          floor: opts.floor ?? 0.05,
        });
        break;
      case 'confetti':
        for (let i = 0; i < n; i++) {
          const a = rand(0, TAU);
          const sp = rand(0.6, 1.8);
          this.spawnOne('confetti', pos, {
            vel: new THREE.Vector3(Math.cos(a) * sp, rand(1.6, 3.2), Math.sin(a) * sp),
            grav: 4.5,
            drag: 1.4,
            life: rand(1.4, 2.2),
            size: rand(0.06, 0.09),
            spin: rand(-9, 9),
            color: pick(CONFETTI),
            pop: false,
            flutter: 1,
            floor: 0.02,
          });
        }
        break;
      case 'steam':
        this.spawnOne('puff', pos.clone().add(new THREE.Vector3(rand(-0.03, 0.03), 0, rand(-0.03, 0.03))), {
          vel: new THREE.Vector3(rand(-0.04, 0.04), rand(0.22, 0.3), rand(-0.04, 0.04)),
          life: rand(1.6, 2.2),
          size: 0.07,
          grow: 0.12,
          pop: false,
          wobble: 0.05,
          wobbleF: 1.5,
          fadeIn: 0.4,
          fadeOut: 1.0,
          alpha: 0.45,
        });
        break;
      case 'letter':
        this.spawnOne('letter', pos, { vel: new THREE.Vector3(0, 0.3, 0), life: 1.5, size: 0.3 });
        break;
      default:
        this.spawnOne('sparkle', pos, { life: 0.8, size: 0.2 });
    }
  }

  update(dt) {
    const live = this.live;
    for (let i = live.length - 1; i >= 0; i--) {
      const p = live[i];
      p.age += dt;
      const s = p.s;
      if (p.age >= p.life) {
        s.visible = false;
        this.group.remove(s);
        this.pool.push(s);
        live.splice(i, 1);
        continue;
      }
      const t = p.age;
      if (p.orbit && p.follow) {
        const head = p.follow.headPos(new THREE.Vector3(), 0.0);
        const a = p.orbit.phase + t * p.orbit.speed;
        p.pos.set(head.x + Math.cos(a) * p.orbit.r, head.y + p.orbit.y + Math.sin(a * 2) * 0.03, head.z + Math.sin(a) * p.orbit.r);
      } else {
        p.vel.y -= p.grav * dt;
        if (p.drag) p.vel.multiplyScalar(Math.exp(-p.drag * dt));
        p.pos.addScaledVector(p.vel, dt);
        if (p.floor !== null && p.pos.y < p.floor) {
          p.pos.y = p.floor;
          p.vel.set(0, 0, 0);
          p.grav = 0;
        }
      }
      let x = p.pos.x;
      if (p.wobble) x += Math.sin(t * p.wobbleF * TAU * 0.5 + p.phase) * p.wobble;
      s.position.set(x, p.pos.y, p.pos.z);
      let k = p.pop ? easeOutBack(clamp(t / 0.25)) : 1;
      const size = (p.size + p.grow * t) * k;
      let sx = size;
      if (p.flutter) sx *= Math.abs(Math.cos(t * 9 + p.phase)) * 0.8 + 0.2;
      s.scale.set(sx, size * p.aspect, 1);
      if (p.spin) s.material.rotation += p.spin * dt;
      const fin = clamp(t / p.fadeIn);
      const fout = clamp((p.life - t) / p.fadeOut);
      s.material.opacity = fin * fout * p.alpha;
    }
  }

  clear() {
    for (const p of this.live) {
      p.s.visible = false;
      this.group.remove(p.s);
      this.pool.push(p.s);
    }
    this.live.length = 0;
  }
}
