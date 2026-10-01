// Speech bubbles over crew heads (typewriter text, babble voice).
import * as THREE from 'three';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { clamp, damp } from '../core/util.js';

export class Bubbles {
  constructor(root, world, crew) {
    this.world = world;
    this.crew = crew;
    this.el = document.createElement('div');
    this.el.className = 'bubbles';
    root.appendChild(this.el);
    this.map = new Map();
    bus.on('critter:say', (c, text, opts) => this.say(c, text, opts));
    bus.on('critter:removed', (c) => {
      this.map.get(c)?.el.remove();
      this.map.delete(c);
    });
  }

  say(c, text, opts = {}) {
    let b = this.map.get(c);
    if (!b) {
      const el = document.createElement('div');
      el.className = 'bubble';
      this.el.appendChild(el);
      b = { el, text: '', shown: 0, until: 0 };
      this.map.set(c, b);
    }
    b.text = text;
    b.shown = 0;
    b.until = performance.now() / 1000 + (opts.hold ?? Math.max(2.2, text.length * 0.075 + 1.6));
    b.el.style.setProperty('--tint', c.color);
    b.el.classList.toggle('status', !!opts.status);
    if (this.crew.visibleCritter(c) && !opts.silent) sound.babble(text, c.voice);
  }

  hide(c) {
    const b = this.map.get(c);
    if (b) b.until = 0;
  }

  update(dt) {
    const cam = this.world.engine.camera;
    const w = this.world.engine.width;
    const h = this.world.engine.height;
    const now = performance.now() / 1000;
    const placed = [];
    for (const [c, b] of this.map) {
      const visible = this.crew.visibleCritter(c) && now < b.until;
      if (!visible) {
        b.el.classList.remove('show');
        continue;
      }
      if (b.shown < b.text.length) {
        b.shown = Math.min(b.text.length, b.shown + dt * 32);
        b.el.textContent = b.text.slice(0, Math.ceil(b.shown));
      }
      const p = c.headPos(new THREE.Vector3(), c.bulb?.visible ? 0.55 : 0.32).project(cam);
      if (p.z > 1) {
        b.el.classList.remove('show');
        continue;
      }
      const bw = b.el.offsetWidth || 120;
      const bh = b.el.offsetHeight || 36;
      const x = clamp((p.x * 0.5 + 0.5) * w, bw / 2 + 8, w - bw / 2 - 8);
      const y = clamp((-p.y * 0.5 + 0.5) * h, bh + 8, h);
      placed.push({ b, x, y, w: bw, h: bh, depth: p.z });
    }
    placed.sort((a, c) => a.depth - c.depth);
    for (let i = 0; i < placed.length; i++) {
      const a = placed[i];
      a.ty = a.y;
      for (let pass = 0; pass < 4; pass++) {
        let moved = false;
        for (let j = 0; j < i; j++) {
          const o = placed[j];
          if (Math.abs(a.x - o.x) < (a.w + o.w) / 2 + 4 && Math.abs(a.ty - o.ty) < (a.h + o.h) / 2 + 4) {
            a.ty = o.ty - (o.h + a.h) / 2 - 6;
            moved = true;
          }
        }
        if (!moved) break;
      }
      a.b.y = a.b.y === undefined ? a.ty : damp(a.b.y, a.ty, 14, dt);
      a.b.el.style.transform = `translate(${a.x}px, ${a.b.y}px) translate(-50%, -100%)`;
      a.b.el.classList.add('show');
    }
  }
}
