// Pointer interaction with critters and props:
//  - hover: critter glows softly and follows the cursor with its eyes
//  - click: boop! (escalates: giggle -> dizzy -> grumpy)
//  - rub back and forth over a critter: petting
//  - press + drag: pick it up (feet dangle and kick), release to drop
//  - click props tagged userData.interactive
import * as THREE from 'three';
import { clamp, damp } from '../core/util.js';

const _ray = new THREE.Raycaster();
const _ndc = new THREE.Vector2();
const _plane = new THREE.Plane();
const _hit = new THREE.Vector3();

export class Interaction {
  constructor({ dom, camera, getCritters, getProps = () => [], clampPos = null, onClickCritter, onClickProp, onClickEmpty, onHover, onDrop, sound }) {
    this.dom = dom;
    this.camera = camera;
    this.getCritters = getCritters;
    this.getProps = getProps;
    this.clampPos = clampPos;
    this.onClickCritter = onClickCritter;
    this.onClickProp = onClickProp;
    this.onClickEmpty = onClickEmpty;
    this.onHover = onHover;
    this.onDrop = onDrop;
    this.sound = sound;
    this.enabled = true;

    this.pointer = { x: 0, y: 0, down: false, inside: false };
    this.hoverCritter = null;
    this.hoverProp = null;
    this.press = null;
    this.drag = null;
    this.captured = false; // true while a press started on a critter/prop
    this.cursorWorld = new THREE.Vector3();
    this.pet = { critter: null, travel: 0, lastX: 0, lastY: 0, idle: 0, dirChanges: 0, lastDx: 0, active: false };

    dom.addEventListener('pointermove', (e) => this._move(e));
    dom.addEventListener('pointerdown', (e) => this._down(e));
    window.addEventListener('pointerup', (e) => this._up(e));
    dom.addEventListener('pointerleave', () => {
      this.pointer.inside = false;
      this._setHover(null, null);
    });
    dom.addEventListener('pointerenter', () => (this.pointer.inside = true));
  }

  _ndcFrom(e) {
    const r = this.dom.getBoundingClientRect();
    this.pointer.x = e.clientX - r.left;
    this.pointer.y = e.clientY - r.top;
    _ndc.set((this.pointer.x / r.width) * 2 - 1, -(this.pointer.y / r.height) * 2 + 1);
    _ray.setFromCamera(_ndc, this.camera);
  }

  pick() {
    // critters first (they are small and precious)
    const critters = this.getCritters().filter((c) => c.root.visible);
    const meshes = [];
    for (const c of critters) {
      meshes.push(c.body);
      for (const f of c.feet) meshes.push(f);
    }
    const hits = _ray.intersectObjects(meshes, false);
    let critter = hits.length ? hits[0].object.userData.critter : null;
    // generous fallback: distance from ray to the critter's center
    if (!critter) {
      let best = 0.42;
      for (const c of critters) {
        const center = c.root.position.clone();
        center.y += 0.5 * c.size + c.mover.position.y;
        const d = _ray.ray.distanceToPoint(center);
        if (d < best * c.size) {
          best = d;
          critter = c;
        }
      }
    }
    let prop = null;
    let propHit = null;
    const props = this.getProps();
    if (props.length) {
      const ph = _ray.intersectObjects(props, true);
      for (const h of ph) {
        let o = h.object;
        while (o && !o.userData.interactive) o = o.parent;
        if (o && o.visible !== false) {
          prop = o;
          propHit = h;
          break;
        }
      }
    }
    if (critter && prop && propHit) {
      // prefer whichever is closer to the camera
      const cd = critter.root.position.distanceTo(this.camera.position);
      if (propHit.distance < cd - 1.2) critter = null;
      else prop = null;
    }
    return { critter, prop };
  }

  _setHover(critter, prop) {
    if (critter !== this.hoverCritter) {
      if (this.hoverCritter) this.hoverCritter.hoverTarget = 0;
      this.hoverCritter = critter;
      if (critter) critter.hoverTarget = 1;
    }
    if (prop !== this.hoverProp) {
      this.hoverProp?.userData.onHover?.(false);
      this.hoverProp = prop;
      prop?.userData.onHover?.(true);
    }
    this.dom.style.cursor = this.drag ? 'grabbing' : critter ? 'grab' : prop ? 'pointer' : '';
    this.onHover?.(critter, prop, this.pointer);
  }

  _move(e) {
    if (!this.enabled) return;
    this._ndcFrom(e);
    this.pointer.inside = true;
    if (this.drag) return; // drag handled in update
    if (this.press && !this.drag) {
      const dx = this.pointer.x - this.press.x;
      const dy = this.pointer.y - this.press.y;
      if (this.press.critter && Math.hypot(dx, dy) > 7) this._startDrag(this.press.critter);
      return;
    }
    const { critter, prop } = this.pick();
    this._setHover(critter, critter ? null : prop);

    // petting: rubbing back and forth over a critter
    const pet = this.pet;
    if (critter) {
      if (pet.critter !== critter) {
        this._endPet();
        pet.critter = critter;
        pet.travel = 0;
        pet.dirChanges = 0;
        pet.lastX = this.pointer.x;
        pet.lastY = this.pointer.y;
      }
      const dx = this.pointer.x - pet.lastX;
      const dy = this.pointer.y - pet.lastY;
      pet.travel += Math.hypot(dx, dy);
      if (Math.abs(dx) > 2 && Math.sign(dx) !== Math.sign(pet.lastDx || dx)) pet.dirChanges++;
      if (Math.abs(dx) > 2) pet.lastDx = dx;
      pet.lastX = this.pointer.x;
      pet.lastY = this.pointer.y;
      pet.idle = 0;
      if (!pet.active && pet.travel > 140 && pet.dirChanges >= 2 && !critter.held && !critter.busyWith?.('sleep')) {
        pet.active = true;
        critter.play('pet');
        critter.petting = true;
        this.onPet?.(critter);
      }
      // lean toward the cursor (screen space)
      const sp = critter.root.position.clone();
      sp.y += 0.55 * critter.size;
      sp.project(this.camera);
      const r = this.dom.getBoundingClientRect();
      const cx = (sp.x * 0.5 + 0.5) * r.width;
      const cy = (-sp.y * 0.5 + 0.5) * r.height;
      critter.petLean = { x: clamp((cx - this.pointer.x) / 60, -1, 1), y: clamp((this.pointer.y - cy) / 80, -1, 1) };
    } else {
      this._endPet();
    }
  }

  _endPet() {
    const pet = this.pet;
    if (pet.critter && pet.active) {
      pet.critter.stop('pet');
      pet.critter.petting = false;
      pet.critter.setMood('content', 6);
    }
    pet.critter = null;
    pet.active = false;
    pet.travel = 0;
    pet.dirChanges = 0;
  }

  _down(e) {
    if (!this.enabled) return;
    this.sound?.unlock();
    this._ndcFrom(e);
    const { critter, prop } = this.pick();
    this.captured = !!(critter || prop);
    this.press = { x: this.pointer.x, y: this.pointer.y, critter, prop, t: performance.now() };
    if (critter) {
      try {
        this.dom.setPointerCapture(e.pointerId);
      } catch (err) {
        /* ignore */
      }
    }
  }

  _up(e) {
    if (!this.press) return;
    const press = this.press;
    this.press = null;
    if (this.drag) {
      this._endDrag();
    } else if (press.critter) {
      this._endPet();
      press.critter.poke();
      this.onClickCritter?.(press.critter);
    } else if (press.prop) {
      press.prop.userData.onClick?.(press.prop);
      this.onClickProp?.(press.prop);
    } else {
      const moved = Math.hypot(this.pointer.x - press.x, this.pointer.y - press.y);
      if (moved < 6) this.onClickEmpty?.(press);
    }
    setTimeout(() => (this.captured = false), 0);
  }

  _startDrag(c) {
    this._endPet();
    this.drag = { critter: c, prev: c.root.position.clone(), height: 0.85 };
    c.stopWalking();
    c.held = true;
    c.falling = false;
    c.vy = 0;
    c.heldHeight = this.drag.height;
    c.stopSlot('main', 0.1);
    c.play('held');
    c.drop?.(true);
    this.dom.style.cursor = 'grabbing';
    this.onDragStart?.(c);
  }

  _endDrag() {
    const c = this.drag.critter;
    this.drag = null;
    c.held = false;
    c.falling = true;
    c.vy = 0.5;
    c.stop('held', 0.15);
    this.dom.style.cursor = '';
    this.onDrop?.(c);
  }

  /** Call once per frame. */
  update(dt) {
    if (this.drag) {
      const c = this.drag.critter;
      const grabY = this.drag.height + 1.0 * c.size;
      _plane.set(new THREE.Vector3(0, 1, 0), -grabY);
      if (_ray.ray.intersectPlane(_plane, _hit)) {
        let x = _hit.x;
        let z = _hit.z;
        if (this.clampPos) [x, z] = this.clampPos(x, z, c);
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
        // slowly turn to face the camera while dangling
        const cam = this.camera.position;
        c.setHeading(Math.atan2(cam.x - pos.x, cam.z - pos.z));
      }
    }
    // eyes follow the cursor when hovering near
    if (this.hoverCritter && !this.drag && this.pointer.inside) {
      _plane.set(new THREE.Vector3(0, 0, 1).applyQuaternion(this.camera.quaternion), 0);
      const c = this.hoverCritter;
      const p = c.root.position.clone();
      p.y += 0.6;
      _plane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1).applyQuaternion(this.camera.quaternion), p);
      if (_ray.ray.intersectPlane(_plane, _hit)) {
        // pull the look point toward the camera so they look "at you"
        const toward = this.camera.position.clone().sub(_hit).normalize().multiplyScalar(1.5);
        c.lookAt(_hit.clone().add(toward), 0.6);
      }
    }
    if (this.pet.active) {
      this.pet.idle += dt;
      if (this.pet.idle > 0.7) this._endPet();
    }
  }
}
