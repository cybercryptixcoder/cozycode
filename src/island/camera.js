// God's-eye dollhouse camera. Horizontal rotation snaps to four corner
// angles; tilt runs continuously from high overhead to below the island.
import * as THREE from 'three';
import { Spring, clamp, damp } from '../core/util.js';

export const EL_MAX = 1.32; // ~76 degrees, nearly overhead
export const EL_MIN = -0.9; // looking up from under the island
export const EL_DEFAULT = 0.6;

const _f = new THREE.Vector3();
const _r = new THREE.Vector3();
const _u = new THREE.Vector3();

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
    if (b.points) this.points = b.points;
    this.fit();
  }

  /**
   * Frame a set of world points for the current angle: the projected
   * bounding box fills the screen (width-limited in portrait), and the
   * overview target sits at its centre.
   */
  _fitPoints(az, el) {
    const pts = this.focusRect && this.focusPoints ? this.focusPoints : this.points;
    if (!pts || !pts.length) return null;
    const cam = this.camera;
    const ce = Math.cos(el);
    const fwd = _f.set(-Math.sin(az) * ce, -Math.sin(el), -Math.cos(az) * ce);
    const right = _r.set(Math.cos(az), 0, -Math.sin(az));
    const up = _u.crossVectors(right, fwd).normalize();
    let u0 = Infinity;
    let u1 = -Infinity;
    let v0 = Infinity;
    let v1 = -Infinity;
    let w0 = Infinity;
    let w1 = -Infinity;
    for (const p of pts) {
      const u = p.dot(right);
      const v = p.dot(up);
      const w = p.dot(fwd);
      if (u < u0) u0 = u;
      if (u > u1) u1 = u;
      if (v < v0) v0 = v;
      if (v > v1) v1 = v;
      if (w < w0) w0 = w;
      if (w > w1) w1 = w;
    }
    const vfov = (cam.fov * Math.PI) / 180;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * cam.aspect);
    const portrait = cam.aspect < 0.9;
    const halfW = ((u1 - u0) / 2) * (portrait ? 1.0 : 1.06);
    const halfH = ((v1 - v0) / 2) * 1.08 + (portrait ? 0 : 0.4);
    // leave a little room for the label at the top and the ticker at the bottom
    const dist = Math.max(halfW / Math.tan(hfov / 2), halfH / Math.tan(vfov / 2) / (portrait ? 0.82 : 0.86)) + (w1 - w0) * 0.5;
    const center = new THREE.Vector3()
      .addScaledVector(right, (u0 + u1) / 2)
      .addScaledVector(up, (v0 + v1) / 2 - (portrait ? halfH * 0.04 : 0))
      .addScaledVector(fwd, (w0 + w1) / 2);
    return { dist, center };
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

  focusOn(rect, y, h = 2.6) {
    this.focusRect = rect;
    this.followCritter = null;
    this.goal.set((rect.x0 + rect.x1) / 2, y + 1.1, (rect.z0 + rect.z1) / 2);
    // frame the room itself (floor corners + a bit of wall height)
    const pad = 0.4;
    this.focusPoints = [];
    for (const [x, z] of [
      [rect.x0 - pad, rect.z0 - pad],
      [rect.x1 + pad, rect.z0 - pad],
      [rect.x0 - pad, rect.z1 + pad],
      [rect.x1 + pad, rect.z1 + pad],
    ]) {
      this.focusPoints.push(new THREE.Vector3(x, y, z), new THREE.Vector3(x, y + h, z));
    }
    this.zoom.target = 1;
  }

  clearFocus() {
    this.focusRect = null;
    this.focusPoints = null;
    this.followCritter = null;
    this.zoom.target = 1;
  }

  follow(c) {
    this.followCritter = c;
    this.focusRect = null;
    this.zoom.target = 0.42;
  }

  /** Close-up on someone showing you a card: they sit in the top part of the screen. */
  present(c) {
    this._saved = this._saved || { focusRect: this.focusRect, follow: this.followCritter, zoom: this.zoom.target, goal: this.goal.clone() };
    this.presenting = c;
  }

  endPresent() {
    if (!this.presenting) return;
    this.presenting = null;
    const s = this._saved;
    this._saved = null;
    if (s) {
      this.focusRect = s.focusRect;
      this.followCritter = s.follow;
      if (s.focusRect) this.goal.copy(s.goal);
    }
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
    const f = this._fitPoints(this.az.x, this.el.x ?? EL_DEFAULT);
    if (f) {
      this.fitDist = Math.max(this.focusRect ? 6 : 10, f.dist);
      this.fitCenter = f.center;
    }
  }

  update(dt) {
    this.time += dt;
    this.az.update(dt);
    this.el.update(dt);
    this.zoom.update(dt);
    this.fit();
    const b = this.bounds;
    if (this.presenting) {
      const p = this.presenting.root.getWorldPosition(_r);
      // drop the look-at point below them so they sit above the card
      const dist = this.camera.aspect < 0.9 ? 13 : 10;
      const shift = dist * Math.tan((this.camera.fov * Math.PI) / 360) * (this.camera.aspect < 0.9 ? 0.5 : 0.3);
      this.goal.set(p.x, p.y + 0.7 - shift * Math.cos(this.el.x), p.z);
      const ce = Math.sin(this.el.x);
      this.goal.x += Math.sin(this.az.x) * shift * ce;
      this.goal.z += Math.cos(this.az.x) * shift * ce;
    } else if (this.followCritter) {
      const p = this.followCritter.root.position;
      this.goal.set(p.x, p.y + 0.8, p.z);
    } else if (this.focusRect) {
      if (this.fitCenter) this.goal.copy(this.fitCenter);
    } else {
      // overview: frame the island; below it, frame the underside
      if (this.fitCenter) this.goal.copy(this.fitCenter);
      else {
        const below = this.el.x < 0;
        this.goal.set(b.cx, below ? -b.depth * 0.35 : 1.3 + b.top * 0.12, b.cz);
      }
    }
    const r = this.followCritter ? 9 : 4;
    this.target.x = damp(this.target.x, this.goal.x, r, dt);
    this.target.y = damp(this.target.y, this.goal.y, r, dt);
    this.target.z = damp(this.target.z, this.goal.z, r, dt);
    const az = this.az.x + Math.sin(this.time * 0.1) * 0.008;
    const el = this.el.x;
    this._pd = damp(this._pd ?? 0, this.presenting ? 1 : 0, 4, dt);
    const close = this.camera.aspect < 0.9 ? 13 : 10;
    const dist = this.fitDist * this.zoom.x * (1 - this._pd) + close * this._pd;
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
