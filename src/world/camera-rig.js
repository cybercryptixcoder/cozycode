// The camera always looks into one corner of the room from outside the
// opposite corner. Turn with buttons, arrow keys or by dragging; it snaps to
// the nearest corner with a soft overshoot. Scroll / pinch zooms toward the
// cursor; double-clicking a critter follows it.
import * as THREE from 'three';
import { Spring, clamp, damp, TAU } from '../core/util.js';

const _ray = new THREE.Raycaster();
const _plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const _v = new THREE.Vector3();

export class CameraRig {
  constructor(engine, opts = {}) {
    this.engine = engine;
    this.camera = engine.camera;
    this.dom = engine.renderer.domElement;
    this.interaction = opts.interaction || null;
    this.corner = 0;
    this.az = new Spring(Math.PI / 4, 1.6, 0.78);
    this.elevation = 0.6;
    this.zoom = new Spring(1, 2.2, 1);
    this.target = new THREE.Vector3(0, 1.0, 0);
    this.focus = new THREE.Vector3(0, 1.0, 0);
    this.room = null;
    this.fitDist = 18;
    this.followCritter = null;
    this.onCornerChange = null;
    this.enabled = true;
    this._drag = null;
    this._pinch = null;
    this.idleSway = true;
    this._time = 0;
    this._bind();
  }

  setRoom(room, corner = null) {
    this.room = room;
    if (corner !== null) {
      this.corner = corner;
      const a = this.cornerAngle(corner);
      this.az.snap(a);
    }
    this.focus.set(0, 0.9, 0);
    this.target.copy(this.focus);
    this.zoom.snap(1);
    this.fit();
  }

  cornerAngle(k) {
    return Math.PI / 4 + k * (Math.PI / 2);
  }

  fit() {
    if (!this.room) return;
    const { w, d, h } = this.room;
    const cam = this.camera;
    const vfov = (cam.fov * Math.PI) / 180;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * cam.aspect);
    // horizontal extent seen from a corner is roughly the room diagonal
    // on tall phone screens let the sides crop a little; pinch to see more
    const diag = (Math.hypot(w, d) + 1.2) * (cam.aspect < 1 ? 0.74 : 1);
    const distH = diag / 2 / Math.tan(hfov / 2);
    const vertExtent = Math.sin(this.elevation) * Math.hypot(w, d) * 0.62 + h * Math.cos(this.elevation) + 1.4;
    const distV = vertExtent / 2 / Math.tan(vfov / 2);
    this.fitDist = Math.max(distH, distV) * 1.02;
  }

  rotate(dir) {
    this.followCritter = null;
    this.corner = (((this.corner + dir) % 4) + 4) % 4;
    // keep the spring continuous (no unwinding the long way round)
    const base = this.az.target + dir * (Math.PI / 2);
    this.az.target = base;
    this.onRotate?.(dir);
  }

  /** Snap to the nearest corner after a free drag. */
  snap() {
    const a = this.az.x;
    const k = Math.round((a - Math.PI / 4) / (Math.PI / 2));
    this.az.target = Math.PI / 4 + k * (Math.PI / 2);
    this.corner = ((k % 4) + 4) % 4;
  }

  follow(critter) {
    this.followCritter = critter;
    this.zoom.target = 0.5;
  }

  unfollow() {
    this.followCritter = null;
    this.zoom.target = 1;
  }

  _bind() {
    const dom = this.dom;
    dom.addEventListener('pointerdown', (e) => {
      if (!this.enabled) return;
      if (this.interaction?.captured) return;
      if (e.pointerType === 'touch' && this._touches?.size >= 1) return;
      this._drag = { x: e.clientX, y: e.clientY, az: this.az.x, moved: false, id: e.pointerId };
    });
    window.addEventListener('pointermove', (e) => {
      const d = this._drag;
      if (!d || e.pointerId !== d.id || this._pinch) return;
      // the press landed on a critter or a prop: that's not a camera drag
      if (this.interaction?.captured || this.interaction?.drag) {
        this._drag = null;
        return;
      }
      const dx = e.clientX - d.x;
      if (Math.abs(dx) > 6) d.moved = true;
      if (d.moved) {
        this.followCritter = null;
        const w = this.dom.clientWidth || 1000;
        this.az.target = d.az - (dx / w) * Math.PI * 1.1;
        this.az.x = this.az.x + (this.az.target - this.az.x) * 0.5;
      }
    });
    window.addEventListener('pointerup', (e) => {
      const d = this._drag;
      if (!d || e.pointerId !== d.id) return;
      this._drag = null;
      if (d.moved) {
        const before = this.corner;
        this.snap();
        if (this.corner !== before) this.onRotate?.(0);
      }
    });
    dom.addEventListener(
      'wheel',
      (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        const z = clamp(this.zoom.target * (1 + Math.sign(e.deltaY) * 0.1), 0.42, 1.12);
        this._zoomToward(e.clientX, e.clientY, z);
      },
      { passive: false }
    );
    // pinch zoom
    this._touches = new Map();
    dom.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'touch') return;
      this._touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (this._touches.size === 2) {
        const [a, b] = [...this._touches.values()];
        this._pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), z: this.zoom.target };
        this._drag = null;
      }
    });
    window.addEventListener('pointermove', (e) => {
      if (!this._touches.has(e.pointerId)) return;
      this._touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (this._pinch && this._touches.size === 2) {
        const [a, b] = [...this._touches.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const z = clamp((this._pinch.z * this._pinch.d) / Math.max(20, d), 0.42, 1.12);
        this._zoomToward((a.x + b.x) / 2, (a.y + b.y) / 2, z);
      }
    });
    const end = (e) => {
      this._touches.delete(e.pointerId);
      if (this._touches.size < 2) this._pinch = null;
    };
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
  }

  _zoomToward(cx, cy, z) {
    const prev = this.zoom.target;
    this.zoom.target = z;
    if (!this.room) return;
    // drift the focus toward the floor point under the cursor when zooming in
    const r = this.dom.getBoundingClientRect();
    const ndc = new THREE.Vector2(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    _ray.setFromCamera(ndc, this.camera);
    if (_ray.ray.intersectPlane(_plane, _v)) {
      const k = z < prev ? 0.35 : -0.25;
      const toward = z < prev ? _v : new THREE.Vector3(0, 0, 0);
      this.focus.x += (toward.x - this.focus.x) * Math.abs(k);
      this.focus.z += (toward.z - this.focus.z) * Math.abs(k);
      if (z >= 0.98) this.focus.set(0, 0.9, 0);
      const mx = this.room.w / 2 - 1;
      const mz = this.room.d / 2 - 1;
      this.focus.x = clamp(this.focus.x, -mx, mx);
      this.focus.z = clamp(this.focus.z, -mz, mz);
    }
  }

  update(dt) {
    this._time += dt;
    this.az.update(dt);
    this.zoom.update(dt);
    if (this.followCritter) {
      const p = this.followCritter.root.position;
      this.focus.set(p.x, 0.7, p.z);
    } else if (this.zoom.target >= 0.98) {
      this.focus.x = damp(this.focus.x, 0, 2, dt);
      this.focus.z = damp(this.focus.z, 0, 2, dt);
    }
    this.target.x = damp(this.target.x, this.focus.x, 4, dt);
    this.target.y = damp(this.target.y, this.focus.y, 4, dt);
    this.target.z = damp(this.target.z, this.focus.z, 4, dt);

    const sway = this.idleSway ? Math.sin(this._time * 0.12) * 0.012 : 0;
    const az = this.az.x + sway;
    const el = this.elevation + (1 - this.zoom.x) * 0.08;
    const dist = this.fitDist * this.zoom.x;
    const cam = this.camera;
    cam.position.set(
      this.target.x + Math.sin(az) * Math.cos(el) * dist,
      this.target.y + Math.sin(el) * dist,
      this.target.z + Math.cos(az) * Math.cos(el) * dist
    );
    cam.lookAt(this.target);

    // which corner is in view (for the HUD)
    const k = ((Math.round((this.az.x - Math.PI / 4) / (Math.PI / 2)) % 4) + 4) % 4;
    if (k !== this._shownCorner) {
      this._shownCorner = k;
      this.onCornerChange?.(k);
    }
  }

  /** Corner key ('nw' etc.) for the far corner in view. */
  cornerKey() {
    const a = this.az.x;
    const x = Math.sin(a);
    const z = Math.cos(a);
    return (z > 0 ? 'n' : 's') + (x > 0 ? 'w' : 'e');
  }
}

export { TAU };
