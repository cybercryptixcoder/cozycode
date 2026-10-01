// God's-eye dollhouse camera. Horizontal rotation snaps to four corner
// angles; tilt runs continuously from high overhead to below the island.
import * as THREE from 'three';
import { Spring, clamp, damp } from '../core/util.js';

export const EL_MAX = 1.32; // ~76 degrees, nearly overhead
export const EL_MIN = -0.9; // looking up from under the island
export const EL_DEFAULT = 0.6;

export class IslandCamera {
  constructor(camera) {
    this.camera = camera;
    this.k = 0; // corner index (0 = default, frames the commons)
    this.az = new Spring(Math.PI / 4, 1.5, 0.8);
    this.el = new Spring(EL_DEFAULT, 1.8, 0.9);
    this.zoom = new Spring(1, 2.2, 1);
    this.bounds = { cx: 3, cz: 0.5, radius: 10, top: 6, depth: 8 };
    this.target = new THREE.Vector3(3, 1.2, 0.5);
    this.goal = new THREE.Vector3(3, 1.2, 0.5);
    this.focusRect = null;
    this.followCritter = null;
    this.fitDist = 30;
    this.time = 0;
    this.onCorner = null;
    this._lastCorner = 0;
  }

  setBounds(b) {
    this.bounds = { ...this.bounds, ...b };
    this.fit();
  }

  cornerAngle(k) {
    return Math.PI / 4 + k * (Math.PI / 2);
  }

  /** Rotate by whole corners (dir = +1 / -1). */
  rotate(dir) {
    this.k = (((this.k + dir) % 4) + 4) % 4;
    this.az.target += dir * (Math.PI / 2);
  }

  goToCorner(k, instant = false) {
    const cur = this.az.target;
    const base = this.cornerAngle(k);
    // nearest equivalent angle to the current one
    const n = Math.round((cur - base) / (Math.PI * 2));
    this.az.target = base + n * Math.PI * 2;
    this.k = k;
    if (instant) this.az.snap(this.az.target);
  }

  /** Free rotation while dragging; snap() on release. */
  dragAz(delta) {
    this.az.target += delta;
    this.az.x += delta;
  }

  snap() {
    const k = Math.round((this.az.target - Math.PI / 4) / (Math.PI / 2));
    this.az.target = Math.PI / 4 + k * (Math.PI / 2);
    this.k = ((k % 4) + 4) % 4;
  }

  tiltBy(d) {
    this.el.target = clamp(this.el.target + d, EL_MIN, EL_MAX);
  }

  setTilt(v) {
    this.el.target = clamp(v, EL_MIN, EL_MAX);
  }

  zoomBy(f) {
    this.zoom.target = clamp(this.zoom.target * f, 0.32, 1.35);
  }

  focusOn(rect, y) {
    this.focusRect = rect;
    this.followCritter = null;
    this.goal.set((rect.x0 + rect.x1) / 2, y + 1.1, (rect.z0 + rect.z1) / 2);
    this.zoom.target = 0.52;
  }

  clearFocus() {
    this.focusRect = null;
    this.followCritter = null;
    this.zoom.target = 1;
  }

  follow(c) {
    this.followCritter = c;
    this.focusRect = null;
    this.zoom.target = 0.42;
  }

  get below() {
    return this.camera.position.y < 0.2;
  }

  fit() {
    const cam = this.camera;
    const vfov = (cam.fov * Math.PI) / 180;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * cam.aspect);
    const R = this.bounds.radius;
    const el = Math.abs(this.el.x ?? EL_DEFAULT);
    const portrait = cam.aspect < 0.9;
    // horizontal: the island's width; vertical: its depth on screen plus the house height
    const distH = (R * (portrait ? 0.86 : 1.02)) / Math.tan(hfov / 2);
    const vert = R * Math.sin(el) + this.bounds.top * Math.cos(el) * 0.6 + 1.2;
    const distV = vert / Math.tan(vfov / 2);
    this.fitDist = Math.max(distH, distV, 12);
  }

  update(dt) {
    this.time += dt;
    this.az.update(dt);
    this.el.update(dt);
    this.zoom.update(dt);
    this.fit();
    const b = this.bounds;
    if (this.followCritter) {
      const p = this.followCritter.root.position;
      this.goal.set(p.x, p.y + 0.8, p.z);
    } else if (!this.focusRect) {
      // overview: frame the island; below it, frame the underside
      const below = this.el.x < 0;
      this.goal.set(b.cx, below ? -b.depth * 0.35 : 1.3 + b.top * 0.12, b.cz);
    }
    const r = this.followCritter ? 9 : 4;
    this.target.x = damp(this.target.x, this.goal.x, r, dt);
    this.target.y = damp(this.target.y, this.goal.y, r, dt);
    this.target.z = damp(this.target.z, this.goal.z, r, dt);
    const az = this.az.x + Math.sin(this.time * 0.1) * 0.008;
    const el = this.el.x;
    const dist = this.fitDist * this.zoom.x;
    const cam = this.camera;
    cam.position.set(
      this.target.x + Math.sin(az) * Math.cos(el) * dist,
      this.target.y + Math.sin(el) * dist,
      this.target.z + Math.cos(az) * Math.cos(el) * dist
    );
    cam.lookAt(this.target);
    const k = ((Math.round((this.az.x - Math.PI / 4) / (Math.PI / 2)) % 4) + 4) % 4;
    if (k !== this._lastCorner) {
      this._lastCorner = k;
      this.onCorner?.(k);
    }
  }

  /** Corner key of the room that's open toward the camera ('se' at angle 0). */
  get viewCorner() {
    return ['se', 'ne', 'nw', 'sw'][this._lastCorner];
  }
}

export { damp };
