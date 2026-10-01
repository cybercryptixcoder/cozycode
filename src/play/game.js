// The game: ties the island world, the crew, the work source, the UI and
// the player's hands together.
import * as THREE from 'three';
import { IslandWorld } from '../island/world.js';
import { IslandInput } from '../island/input.js';
import { Store } from './state.js';
import { Crew } from './crew.js';
import { Bubbles } from '../ui2/bubbles.js';
import { line } from './lines.js';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { clamp, chance, pick } from '../core/util.js';

const _plane = new THREE.Plane();
const _hit = new THREE.Vector3();

export class Game {
  constructor(container, opts = {}) {
    this.container = container;
    this.opts = opts;
    this.store = opts.store || new Store();
    this.world = new IslandWorld(container, { quality: this.store.data.settings.quality });
    this.crew = new Crew(this.world, this.store);
    this.ui = document.createElement('div');
    this.ui.className = 'ui';
    container.appendChild(this.ui);
    this.bubbles = new Bubbles(this.ui, this.world, this.crew);
    this.hooks = [];
  }

  start() {
    const data = this.store.data;
    if (this.opts.unlocks) Object.assign(data.unlocks, this.opts.unlocks);
    this.world.applyStructure(data.unlocks);
    this.crew.ensureStartingCrew();
    this.crew.loadAll();
    this._wireInput();
    this.world.engine.add((dt, time) => this.update(dt, time));
    this.world.engine.start();
    window.addEventListener('pagehide', () => this.save());
    document.addEventListener('visibilitychange', () => document.hidden && this.save());
    this._saveT = 0;
  }

  save() {
    this.crew.savePositions();
    this.store.data.lastSeen = Date.now();
    this.store.save();
  }

  update(dt, time) {
    this.world.update(dt, time);
    this.input.update(dt);
    this.crew.update(dt);
    this.bubbles.update(dt);
    for (const h of this.hooks) h(dt, time);
    this._saveT += dt;
    if (this._saveT > 20) {
      this._saveT = 0;
      this.save();
    }
  }

  // ------------------------------------------------------------ input
  roomAt(ray) {
    const h = this.world.house;
    const rooms = h.rooms.filter((r) => !r.sealed && this.world.levels[r.level]?.visible !== false).sort((a, b) => b.level - a.level);
    for (const r of rooms) {
      _plane.set(new THREE.Vector3(0, 1, 0), -r.base);
      if (!ray.ray.intersectPlane(_plane, _hit)) continue;
      if (_hit.x > r.x0 && _hit.x < r.x1 && _hit.z > r.z0 && _hit.z < r.z1) return r;
    }
    return null;
  }

  focusRoom(r) {
    const w = this.world;
    if (!r) {
      w.focus = null;
      w.rig.clearFocus();
      return;
    }
    if (w.focus === r.id) {
      w.focus = null;
      w.rig.clearFocus();
      return;
    }
    w.focus = r.id;
    w.rig.focusOn(r, r.base);
    this.taste?.('room', { room: r.id });
  }

  _wireInput() {
    const w = this.world;
    this.input = new IslandInput({
      dom: w.engine.renderer.domElement,
      camera: w.engine.camera,
      rig: w.rig,
      hooks: {
        critters: () => this.crew.critters.filter((c) => this.crew.visibleCritter(c)),
        props: () => this.props || [],
        roomAt: (ray) => this.roomAt(ray),
        sound,
        haptic: (k) => this.haptic(k),
        onTapCritter: (c) => this.tapCritter(c),
        onDoubleTapCritter: (c) => {
          w.rig.follow(c);
          w.focus = null;
        },
        onLongPressCritter: (c) => bus.emit('whisper:open', c),
        onTapProp: (p) => bus.emit('prop:tap', p),
        onLongPressProp: (p) => bus.emit('prop:long', p),
        onTapRoom: (r) => this.focusRoom(r),
        onTapEmpty: () => this.focusRoom(null),
        onPickUp: (c) => {
          this.crew.onPicked(c);
          this.haptic('tick');
        },
        onDrop: (c) => this.crew.onDropped(c),
        onPet: (c) => {
          c.brain.interrupt();
          this.crew.leaveSocial(c);
          if (chance(0.5)) setTimeout(() => c.say(line('petted')), 500);
        },
        clampDrag: (x, z, c) => {
          const nav = w.navs[c.level];
          if (!nav) return [x, z];
          return [clamp(x, nav.x0 + 0.3, nav.x0 + nav.w - 0.3), clamp(z, nav.z0 + 0.3, nav.z0 + nav.d - 0.3)];
        },
        onMoveStart: (p) => bus.emit('move:start', p),
        onMoveDrag: (p, ray) => bus.emit('move:drag', p, ray),
        onMoveEnd: (p) => bus.emit('move:end', p),
      },
    });
  }

  tapCritter(c) {
    c.brain.attending = 2.2;
    c.lookAt(this.world.engine.camera.position, 2);
    const text = this.crew.statusLine(c);
    c.say(text, { status: true });
    bus.emit('critter:tapped', c);
  }

  haptic(kind) {
    if (!this.store.data.settings.haptics || !navigator.vibrate) return;
    const p = { tick: 8, thump: [18], done: [12, 40, 12, 40, 30] }[kind] || 8;
    try {
      navigator.vibrate(p);
    } catch (e) {
      /* ignore */
    }
  }
}

export { pick };
