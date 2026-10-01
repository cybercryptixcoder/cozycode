// Touch-first input for the island.
//
//   background: horizontal swipe rotates (snaps to corners), vertical drag
//               tilts (all the way under the island), pinch / wheel zooms,
//               tap a room to focus it, tap empty sky to step back out
//   characters: tap shows what they're doing, double-tap follows, long-press
//               whispers, press-and-drag picks them up (feet dangle), rubbing
//               back and forth pets them
//   objects:    tap to use / inspect, long-press to move
import * as THREE from 'three';
import { clamp, damp } from '../core/util.js';

const _ray = new THREE.Raycaster();
const _ndc = new THREE.Vector2();
const _plane = new THREE.Plane();
const _hit = new THREE.Vector3();

const LONG_PRESS = 480;
const DOUBLE_TAP = 320;

export class IslandInput {
  constructor({ dom, camera, rig, hooks }) {
    this.dom = dom;
    this.camera = camera;
    this.rig = rig;
    this.h = hooks; // { critters(), props(), roomAt(ray), onTapCritter, onDoubleTapCritter, onLongPressCritter, onTapProp, onLongPressProp, onTapRoom, onTapEmpty, onPickUp, onDrop, onPet, clampDrag, sound }
    this.pointers = new Map();
    this.g = null; // active gesture
    this.drag = null; // critter being carried
    this.moving = null; // furniture being moved
    this.hover = { critter: null, x: 0, y: 0, inside: false };
    this.pet = { critter: null, travel: 0, dirs: 0, lastDx: 0, lastX: 0, active: false, idle: 0 };
    this.lastTap = { t: 0, critter: null };
    this.enabled = true;

    dom.addEventListener('pointerdown', (e) => this._down(e));
    window.addEventListener('pointermove', (e) => this._move(e));
    window.addEventListener('pointerup', (e) => this._up(e));
    window.addEventListener('pointercancel', (e) => this._up(e, true));
    dom.addEventListener('pointerleave', () => {
      this.hover.inside = false;
      this._setHover(null);
    });
    dom.addEventListener(
      'wheel',
      (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        this.rig.zoomBy(1 + Math.sign(e.deltaY) * 0.09);
      },
      { passive: false }
    );
    dom.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  _ndcFrom(x, y) {
    const r = this.dom.getBoundingClientRect();
    _ndc.set(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
    _ray.setFromCamera(_ndc, this.camera);
    return { x: x - r.left, y: y - r.top };
  }

  get ray() {
    return _ray;
  }

  pickCritter() {
    const critters = this.h.critters().filter((c) => c.root.visible !== false);
    const meshes = [];
    for (const c of critters) {
      meshes.push(c.body);
      for (const f of c.feet) meshes.push(f);
    }
    const hits = _ray.intersectObjects(meshes, false);
    if (hits.length) return { critter: hits[0].object.userData.critter, dist: hits[0].distance };
    let best = null;
    let bd = Infinity;
    for (const c of critters) {
      const center = c.root.position.clone();
      center.y += 0.5 * c.size + c.mover.position.y;
      const d = _ray.ray.distanceToPoint(center);
      if (d < 0.55 * c.size && d < bd) {
        bd = d;
        best = c;
      }
    }
    return best ? { critter: best, dist: best.root.position.distanceTo(this.camera.position) } : null;
  }

  pickProp() {
    const props = this.h.props();
    if (!props.length) return null;
    const hits = _ray.intersectObjects(props, true);
    for (const h of hits) {
      let o = h.object;
      let visible = true;
      for (let p = o; p; p = p.parent) if (p.visible === false) visible = false;
      if (!visible) continue;
      while (o && !o.userData.interactive) o = o.parent;
      if (o) return { prop: o, dist: h.distance };
    }
    return null;
  }

  pick() {
    const c = this.pickCritter();
    const p = this.pickProp();
    if (c && p && p.dist < c.dist - 1.0) return { prop: p.prop };
    if (c) return { critter: c.critter };
    if (p) return { prop: p.prop };
    return {};
  }

  // --------------------------------------------------------------- pointers
  _down(e) {
    if (!this.enabled) return;
    this.h.sound?.unlock();
    const pt = this._ndcFrom(e.clientX, e.clientY);
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pointers.size === 2) {
      // second finger: pinch
      this._cancelLong();
      if (this.drag) this._endDrag();
      const [a, b] = [...this.pointers.values()];
      this.g = { type: 'pinch', d0: Math.hypot(a.x - b.x, a.y - b.y), z0: this.rig.zoom.target };
      return;
    }
    if (this.pointers.size > 2) return;
    const hit = this.pick();
    this.g = {
      type: 'press',
      id: e.pointerId,
      x0: e.clientX,
      y0: e.clientY,
      px: pt.x,
      py: pt.y,
      lastX: e.clientX,
      lastY: e.clientY,
      t0: performance.now(),
      critter: hit.critter || null,
      prop: hit.prop || null,
      touch: e.pointerType === 'touch',
      moved: false,
      dirs: 0,
      lastDx: 0,
    };
    if (hit.critter || hit.prop) {
      try {
        this.dom.setPointerCapture(e.pointerId);
      } catch (err) {
        /* ignore */
      }
    }
    this._longTimer = setTimeout(() => this._longPress(), LONG_PRESS);
  }

  _cancelLong() {
    clearTimeout(this._longTimer);
    this._longTimer = null;
  }

  _longPress() {
    const g = this.g;
    if (!g || g.type !== 'press' || g.moved) return;
    g.type = 'long';
    if (g.critter) {
      this.h.haptic?.('tick');
      this.h.onLongPressCritter?.(g.critter, { x: g.px, y: g.py });
    } else if (g.prop && g.prop.userData.movable) {
      this.h.haptic?.('tick');
      this.moving = { prop: g.prop };
      this.h.onMoveStart?.(g.prop);
    } else if (g.prop) {
      this.h.onLongPressProp?.(g.prop);
    }
  }

  _move(e) {
    if (!this.enabled) return;
    const pt = this._ndcFrom(e.clientX, e.clientY);
    if (this.pointers.has(e.pointerId)) this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = this.g;
    if (g && g.type === 'pinch' && this.pointers.size === 2) {
      const [a, b] = [...this.pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      this.rig.zoom.target = clamp((g.z0 * g.d0) / Math.max(30, d), 0.32, 1.35);
      return;
    }
    if (!g || g.id !== e.pointerId) {
      // plain hover (mouse)
      if (e.pointerType === 'mouse' && !this.drag) this._hoverMove(pt);
      return;
    }
    const dx = e.clientX - g.x0;
    const dy = e.clientY - g.y0;
    const ddx = e.clientX - g.lastX;
    g.lastX = e.clientX;
    g.lastY = e.clientY;

    if (this.moving) {
      this.h.onMoveDrag?.(this.moving.prop, _ray);
      return;
    }
    if (g.type === 'drag-critter') return; // handled in update()
    if (g.type === 'press' && g.critter) {
      // rubbing back and forth on a critter = petting; pulling away = pick up
      if (Math.abs(ddx) > 2 && Math.sign(ddx) !== Math.sign(g.lastDx || ddx)) g.dirs++;
      if (Math.abs(ddx) > 2) g.lastDx = ddx;
      if (g.dirs >= 2 && Math.abs(dy) < 40) {
        g.moved = true;
        this._cancelLong();
        this._petRub(g.critter, pt);
        return;
      }
      if (Math.hypot(dx, dy) > (g.touch ? 14 : 8) && g.dirs < 2) {
        g.moved = true;
        this._cancelLong();
        g.type = 'drag-critter';
        this._startDrag(g.critter);
      }
      return;
    }
    if (g.type === 'press' && Math.hypot(dx, dy) > 8) {
      g.moved = true;
      this._cancelLong();
      g.type = Math.abs(dx) > Math.abs(dy) ? 'rotate' : 'tilt';
      g.az0 = this.rig.az.target;
      g.el0 = this.rig.el.target;
    }
    const w = this.dom.clientWidth || 800;
    const h = this.dom.clientHeight || 600;
    if (g.type === 'rotate') {
      const target = g.az0 - (dx / w) * Math.PI * 1.2;
      this.rig.dragAz(target - this.rig.az.target);
    } else if (g.type === 'tilt') {
      this.rig.setTilt(g.el0 + (dy / h) * 2.6);
    }
  }

  _up(e, cancel = false) {
    this.pointers.delete(e.pointerId);
    const g = this.g;
    if (!g) return;
    if (g.type === 'pinch') {
      if (this.pointers.size === 0) this.g = null;
      return;
    }
    if (g.id !== e.pointerId) return;
    this._cancelLong();
    this.g = null;
    if (this.moving) {
      this.h.onMoveEnd?.(this.moving.prop);
      this.moving = null;
      return;
    }
    if (g.type === 'drag-critter') {
      this._endDrag();
      return;
    }
    if (this.pet.active) {
      this._endPet();
      return;
    }
    if (g.type === 'rotate') {
      const before = this.rig.k;
      this.rig.snap();
      if (this.rig.k !== before) this.h.onRotated?.();
      return;
    }
    if (g.type === 'tilt' || g.type === 'long' || cancel) return;
    // a tap
    const now = performance.now();
    if (g.critter) {
      if (this.lastTap.critter === g.critter && now - this.lastTap.t < DOUBLE_TAP) {
        this.lastTap = { t: 0, critter: null };
        clearTimeout(this._tapTimer);
        this.h.onDoubleTapCritter?.(g.critter);
        return;
      }
      this.lastTap = { t: now, critter: g.critter };
      const c = g.critter;
      // wait a moment to see if this becomes a double-tap
      clearTimeout(this._tapTimer);
      c.poke();
      this._tapTimer = setTimeout(() => this.h.onTapCritter?.(c, { x: g.px, y: g.py }), DOUBLE_TAP * 0.6);
      return;
    }
    if (g.prop) {
      this.h.onTapProp?.(g.prop, { x: g.px, y: g.py });
      return;
    }
    const room = this.h.roomAt?.(_ray);
    if (room) this.h.onTapRoom?.(room);
    else this.h.onTapEmpty?.();
  }

  // --------------------------------------------------------------- hover & pet (mouse)
  _hoverMove(pt) {
    this.hover.inside = true;
    this.hover.x = pt.x;
    this.hover.y = pt.y;
    const { critter, prop } = this.pick();
    this._setHover(critter || null, prop || null);
    if (critter) this._petRub(critter, pt);
    else this._endPet();
  }

  _setHover(c, prop = null) {
    if (c !== this.hover.critter) {
      if (this.hover.critter) this.hover.critter.hoverTarget = 0;
      this.hover.critter = c;
      if (c) c.hoverTarget = 1;
    }
    this.dom.style.cursor = this.drag ? 'grabbing' : c ? 'grab' : prop ? 'pointer' : '';
    this.h.onHover?.(c, prop);
  }

  _petRub(c, pt) {
    const pet = this.pet;
    if (pet.critter !== c) {
      this._endPet();
      pet.critter = c;
      pet.travel = 0;
      pet.dirs = 0;
      pet.lastX = pt.x;
    }
    const dx = pt.x - pet.lastX;
    pet.travel += Math.abs(dx);
    if (Math.abs(dx) > 2 && Math.sign(dx) !== Math.sign(pet.lastDx || dx)) pet.dirs++;
    if (Math.abs(dx) > 2) pet.lastDx = dx;
    pet.lastX = pt.x;
    pet.idle = 0;
    if (!pet.active && pet.travel > 120 && pet.dirs >= 2 && !c.held) {
      pet.active = true;
      c.play('pet');
      c.petting = true;
      this.h.onPet?.(c);
    }
    const sp = c.root.position.clone();
    sp.y += 0.55 * c.size;
    sp.project(this.camera);
    const r = this.dom.getBoundingClientRect();
    const cx = (sp.x * 0.5 + 0.5) * r.width;
    const cy = (-sp.y * 0.5 + 0.5) * r.height;
    c.petLean = { x: clamp((cx - pt.x) / 60, -1, 1), y: clamp((pt.y - cy) / 80, -1, 1) };
  }

  _endPet() {
    const pet = this.pet;
    if (pet.critter && pet.active) {
      pet.critter.stop('pet');
      pet.critter.petting = false;
      pet.critter.setMood('content', 6);
      this.h.onPetEnd?.(pet.critter);
    }
    pet.critter = null;
    pet.active = false;
    pet.travel = 0;
    pet.dirs = 0;
  }

  // --------------------------------------------------------------- carrying critters
  _startDrag(c) {
    this._endPet();
    this.h.onPickUp?.(c);
    this.drag = { critter: c, height: 0.85, floorY: c.root.position.y };
    c.stopWalking();
    c.held = true;
    c.falling = false;
    c.vy = 0;
    c.heldHeight = this.drag.height;
    c.stopSlot('main', 0.1);
    c.play('held');
    c.drop?.(true);
    this.dom.style.cursor = 'grabbing';
  }

  _endDrag() {
    const c = this.drag.critter;
    this.drag = null;
    c.held = false;
    c.falling = true;
    c.vy = 0.5;
    c.stop('held', 0.15);
    this.dom.style.cursor = '';
    this.h.onDrop?.(c);
  }

  update(dt) {
    if (this.drag) {
      const c = this.drag.critter;
      const grabY = this.drag.floorY + this.drag.height + c.size;
      _plane.set(new THREE.Vector3(0, 1, 0), -grabY);
      if (_ray.ray.intersectPlane(_plane, _hit)) {
        let x = _hit.x;
        let z = _hit.z;
        if (this.h.clampDrag) [x, z] = this.h.clampDrag(x, z, c);
        const pos = c.root.position;
        const nx = damp(pos.x, x, 18, dt);
        const nz = damp(pos.z, z, 18, dt);
        const vx = (nx - pos.x) / Math.max(dt, 1e-4);
        const vz = (nz - pos.z) / Math.max(dt, 1e-4);
        pos.x = nx;
        pos.z = nz;
        const s = Math.sin(c.heading);
        const co = Math.cos(c.heading);
        c.heldVel.x = damp(c.heldVel.x, vx * co - vz * s, 8, dt);
        c.heldVel.y = damp(c.heldVel.y, vx * s + vz * co, 8, dt);
        const cam = this.camera.position;
        c.setHeading(Math.atan2(cam.x - pos.x, cam.z - pos.z));
      }
    }
    if (this.hover.critter && !this.drag && this.hover.inside) {
      const c = this.hover.critter;
      const p = c.root.position.clone();
      p.y += 0.6;
      _plane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1).applyQuaternion(this.camera.quaternion), p);
      if (_ray.ray.intersectPlane(_plane, _hit)) {
        const toward = this.camera.position.clone().sub(_hit).normalize().multiplyScalar(1.5);
        c.lookAt(_hit.clone().add(toward), 0.6);
      }
    }
    if (this.pet.active) {
      this.pet.idle += dt;
      if (this.pet.idle > 0.7 && !(this.g && this.g.critter === this.pet.critter)) this._endPet();
    }
  }
}
