// A room is a cuboid diorama. The camera always looks into one corner; the
// two walls between you and that corner sink down to a little stub (dollhouse
// cutaway) so you can see inside, and rise again when you turn the room.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Spring, clamp, easeOutBack, smoothstep } from '../core/util.js';
import { wallTexture, planksTexture, tilesTexture } from '../gfx/textures.js';
import { mat, texMat, COLORS } from '../gfx/materials.js';
import { rbox } from '../gfx/geo.js';
import { NavGrid } from './nav.js';

export const STUB = 0.34; // height of the wall left when cut away
const T = 0.24; // wall thickness

const SIDES = {
  north: { normal: new THREE.Vector3(0, 0, 1), rotY: 0 },
  south: { normal: new THREE.Vector3(0, 0, -1), rotY: Math.PI },
  west: { normal: new THREE.Vector3(1, 0, 0), rotY: Math.PI / 2 },
  east: { normal: new THREE.Vector3(-1, 0, 0), rotY: -Math.PI / 2 },
};

export class Wall {
  constructor(room, side, style) {
    this.room = room;
    this.side = side;
    const { w, d, h } = room;
    const s = SIDES[side];
    this.inward = s.normal.clone();
    this.outward = s.normal.clone().negate();
    this.length = side === 'north' || side === 'south' ? w + 2 * T : d;
    this.innerLength = side === 'north' || side === 'south' ? w : d;
    this.height = h;
    this.group = new THREE.Group();
    this.group.name = `wall:${side}`;
    this.group.rotation.y = s.rotY;
    if (side === 'north') this.group.position.set(0, 0, -d / 2);
    if (side === 'south') this.group.position.set(0, 0, d / 2);
    if (side === 'west') this.group.position.set(-w / 2, 0, 0);
    if (side === 'east') this.group.position.set(w / 2, 0, 0);
    room.group.add(this.group);

    this.openings = room.spec.openings.filter((o) => o.wall === side);
    const tex = wallTexture({ ...room.spec.wallStyle, ...(style || {}), height: h });
    const front = texMat(tex, { roughness: 0.9 });
    const cap = mat(room.spec.wallCap || '#fff3e3', { roughness: 0.85 });
    this.materials = [front, cap];

    // stub (always visible)
    this.stub = new THREE.Mesh(this._extrude(0, STUB), this.materials);
    this.stub.receiveShadow = true;
    this.stub.castShadow = true;
    this.group.add(this.stub);

    // upper part (scales down to nothing when cut)
    this.upperPivot = new THREE.Group();
    this.upperPivot.position.y = STUB;
    this.group.add(this.upperPivot);
    const ug = this._extrude(STUB, h);
    ug.translate(0, -STUB, 0);
    this.upper = new THREE.Mesh(ug, this.materials);
    this.upper.receiveShadow = true;
    this.upper.castShadow = false; // shadows come from the proxy below
    this.upperPivot.add(this.upper);

    // a trim cap along the top edge
    const trim = new THREE.Mesh(rbox(this.length + 0.02, 0.08, T + 0.06, 0.03), mat(room.spec.trim || '#e9b98c', { roughness: 0.7 }));
    trim.position.set(0, h - STUB - 0.02, -T / 2);
    trim.castShadow = false;
    this.upperPivot.add(trim);

    // invisible full wall that keeps casting shadows (so sunbeams through the
    // windows stay put even when the wall is cut away for the camera)
    const proxyMat = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
    this.proxy = new THREE.Mesh(this._extrude(0, h), proxyMat);
    this.proxy.castShadow = true;
    this.proxy.receiveShadow = false;
    this.proxy.userData.noAO = true;
    this.proxy.renderOrder = -1;
    this.group.add(this.proxy);

    this.decor = new THREE.Group();
    this.decor.name = 'decor';
    this.group.add(this.decor);
    this.items = [];
    this.followers = [];

    this.cut = new Spring(0, 2.2, 0.85);
    this.decorVis = 1;
    this.hidden = false;
  }

  /** Wall slab between heights y0..y1 with holes for openings. */
  _extrude(y0, y1) {
    const L = this.length;
    const shape = new THREE.Shape();
    shape.moveTo(-L / 2, y0);
    shape.lineTo(L / 2, y0);
    shape.lineTo(L / 2, y1);
    shape.lineTo(-L / 2, y1);
    shape.lineTo(-L / 2, y0);
    const notches = [];
    for (const o of this.openings) {
      const bottom = o.type === 'door' ? 0 : o.y;
      const top = o.type === 'door' ? o.h : o.y + o.h;
      if (top <= y0 || bottom >= y1) continue;
      const b = Math.max(bottom, y0 + (o.type === 'door' && bottom <= y0 ? -1 : 0.0001));
      const t = Math.min(top, y1 - 0.0001);
      const hole = openingPath(o, b, t, y0, y1);
      if (hole.notch) notches.push(hole);
      else shape.holes.push(hole.path);
    }
    let geo;
    if (notches.length) {
      // doors that touch the bottom edge: build the outline with a notch instead
      const s2 = new THREE.Shape();
      const sorted = notches.sort((a, b) => a.x0 - b.x0);
      s2.moveTo(-L / 2, y0);
      for (const n of sorted) {
        s2.lineTo(n.x0, y0);
        n.draw(s2);
        s2.lineTo(n.x1, y0);
      }
      s2.lineTo(L / 2, y0);
      s2.lineTo(L / 2, y1);
      s2.lineTo(-L / 2, y1);
      s2.lineTo(-L / 2, y0);
      s2.holes = shape.holes;
      geo = new THREE.ExtrudeGeometry(s2, { depth: T, bevelEnabled: false, curveSegments: 24 });
    } else {
      geo = new THREE.ExtrudeGeometry(shape, { depth: T, bevelEnabled: false, curveSegments: 24 });
    }
    geo.translate(0, 0, -T);
    return geo;
  }

  /** Attach decoration to the wall at wall-local (x along wall, y up). */
  add(obj, x, y, z = 0, opts = {}) {
    const holder = new THREE.Group();
    holder.position.set(x, y, z);
    holder.add(obj);
    holder.userData.order = opts.order ?? y;
    this.decor.add(holder);
    this.items.push(holder);
    if (opts.footprint) this.room.blockWall(this, x, opts.footprint);
    return holder;
  }

  /** World position for a wall-local point. */
  toWorld(x, y, z = 0) {
    return this.group.localToWorld(new THREE.Vector3(x, y, z));
  }

  update(dt, camDir, force = null) {
    const d = this.outward.x * camDir.x + this.outward.z * camDir.z;
    const want = force !== null ? force : d > 0.18 ? 1 : 0;
    this.cut.target = want;
    this.cut.update(dt);
    const c = clamp(this.cut.x, 0, 1.08);
    const sy = Math.max(0.0005, 1 - c);
    this.upperPivot.scale.y = sy;
    this.upperPivot.visible = sy > 0.002;
    // decor pops away just before the wall sinks, and back after it rises
    const vis = want ? 0 : 1;
    const speed = want ? 7 : 3.2;
    this.decorVis += clamp(vis - this.decorVis, -speed * dt, speed * dt);
    const n = this.items.length;
    for (let i = 0; i < n; i++) {
      const it = this.items[i];
      const stagger = (it.userData.order / this.height) * 0.35;
      const k = want ? clamp((this.decorVis - stagger * 0.5) / (1 - 0.35 * 0.5)) : clamp((this.decorVis - (0.35 - stagger)) / 0.65);
      const s = want ? smoothstep(0, 1, k) : easeOutBack(k);
      it.scale.setScalar(Math.max(0.0001, s));
      it.visible = s > 0.01;
    }
    for (const f of this.followers) {
      const k = want ? clamp((this.decorVis - 0.2) / 0.8) : clamp((this.decorVis - 0.35) / 0.65);
      const s = want ? smoothstep(0, 1, k) : easeOutBack(k);
      const b = f.userData.baseScale;
      f.scale.set(b.x * Math.max(0.0001, s), b.y * Math.max(0.0001, s), b.z * Math.max(0.0001, s));
      f.visible = s > 0.01;
    }
    this.hidden = c > 0.5;
  }
}

function openingPath(o, b, t, y0, y1) {
  const x0 = o.x - o.w / 2;
  const x1 = o.x + o.w / 2;
  const touchesBottom = b <= y0;
  const shapeKind = o.shape || (o.type === 'door' ? 'arch' : 'rect');
  const archR = o.w / 2;
  if (touchesBottom) {
    const top = Math.min(t, y1);
    const arched = shapeKind === 'arch' && t === o.h && t - archR >= y0;
    return {
      notch: true,
      x0,
      x1,
      draw(s) {
        if (arched) {
          s.lineTo(x0, t - archR);
          s.absarc(o.x, t - archR, archR, Math.PI, 0, true);
        } else {
          s.lineTo(x0, top);
          s.lineTo(x1, top);
        }
        s.lineTo(x1, y0);
      },
    };
  }
  const p = new THREE.Path();
  if (shapeKind === 'round') {
    const r = Math.min(o.w, o.h) / 2;
    const cy = o.y + o.h / 2;
    p.absarc(o.x, cy, r, 0, Math.PI * 2, false);
    return { path: p };
  }
  if (shapeKind === 'arch' && t === o.y + o.h) {
    p.moveTo(x0, b);
    p.lineTo(x1, b);
    p.lineTo(x1, t - archR);
    p.absarc(o.x, t - archR, archR, 0, Math.PI, false);
    p.lineTo(x0, b);
    return { path: p };
  }
  p.moveTo(x0, b);
  p.lineTo(x1, b);
  p.lineTo(x1, t);
  p.lineTo(x0, t);
  p.lineTo(x0, b);
  return { path: p };
}

export class Room {
  constructor(spec) {
    this.spec = spec;
    this.id = spec.id;
    this.name = spec.name;
    this.w = spec.w;
    this.d = spec.d;
    this.h = spec.h;
    this.group = new THREE.Group();
    this.group.name = `room:${spec.id}`;
    this.props = new THREE.Group();
    this.props.name = 'props';
    this.group.add(this.props);
    this.interactive = [];
    this.stations = [];
    this.updaters = [];
    this.lights = [];
    this.glows = [];
    this.windows = [];
    this.doors = [];
    this.footprints = [];
    this.statics = [];

    this._buildFloor();
    this.walls = {};
    for (const side of Object.keys(SIDES)) this.walls[side] = new Wall(this, side, spec.walls?.[side]);
    this.nav = new NavGrid(this.w, this.d, 0.2, 0.42);
  }

  _buildFloor() {
    const { w, d, spec } = this;
    const f = spec.floor || {};
    const tex = f.type === 'tiles' ? tilesTexture(f) : planksTexture(f);
    const geo = new THREE.PlaneGeometry(w, d);
    geo.rotateX(-Math.PI / 2);
    // world-space UVs so the planks have a real size
    const uv = geo.attributes.uv;
    const pos = geo.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, pos.getX(i), pos.getZ(i));
    const floor = new THREE.Mesh(geo, texMat(tex, { roughness: f.roughness ?? 0.62 }));
    floor.receiveShadow = true;
    floor.name = 'floor';
    this.group.add(floor);
    this.floor = floor;

    // diorama base: a soft layered "cake" under the room
    const lip = T + 0.22;
    const top = new THREE.Mesh(rbox(w + lip * 2, 0.36, d + lip * 2, 0.12, 4), mat(spec.base?.[0] || '#fff1e2', { roughness: 0.85 }));
    top.position.y = -0.18 - 0.002;
    top.receiveShadow = true;
    top.castShadow = false;
    this.group.add(top);
    const mid = new THREE.Mesh(rbox(w + lip * 2 - 0.16, 0.34, d + lip * 2 - 0.16, 0.12, 4), mat(spec.base?.[1] || '#f6b9a2', { roughness: 0.8 }));
    mid.position.y = -0.52;
    mid.castShadow = false;
    this.group.add(mid);
    const bottom = new THREE.Mesh(rbox(w + lip * 2 - 0.5, 0.22, d + lip * 2 - 0.5, 0.1, 4), mat(spec.base?.[2] || '#e99a86', { roughness: 0.8 }));
    bottom.position.y = -0.78;
    bottom.castShadow = false;
    this.group.add(bottom);
  }

  /** Place a prop on the floor. footprint: {w,d} rect or {r} circle (in prop local space). */
  place(obj, { x = 0, z = 0, rot = 0, y = 0, footprint = null, interactive = null, isStatic = true, hideWith = null } = {}) {
    obj.position.set(x, y, z);
    obj.rotation.y = rot;
    this.props.add(obj);
    if (footprint) this.block(x, z, rot, footprint);
    if (interactive) this.makeInteractive(obj, interactive);
    if (hideWith) {
      // tall things against a wall pop away with it (dollhouse cutaway)
      this.walls[hideWith].followers.push(obj);
      obj.userData.baseScale = obj.scale.clone();
    } else if (isStatic && !interactive) this.statics.push(obj);
    return obj;
  }

  block(x, z, rot, fp) {
    this.footprints.push({ x, z, rot, ...fp });
  }

  /** A wall item that also blocks the floor in front of it (shelves, benches). */
  blockWall(wall, x, fp) {
    const p = wall.toWorld(x, 0, (fp.depth || 0.5) / 2);
    const rot = wall.group.rotation.y;
    this.block(p.x, p.z, rot, { w: fp.w, d: fp.depth || 0.5 });
  }

  makeInteractive(obj, info) {
    obj.userData.interactive = true;
    obj.userData.label = info.label;
    obj.userData.hint = info.hint;
    obj.userData.onClick = info.onClick;
    obj.userData.onHover = info.onHover;
    obj.userData.room = this;
    this.interactive.push(obj);
    return obj;
  }

  station(def) {
    const s = {
      room: this.id,
      occupant: null,
      reservedBy: null,
      seat: 0,
      capacity: 1,
      tags: [],
      ...def,
    };
    this.stations.push(s);
    return s;
  }

  onUpdate(fn) {
    this.updaters.push(fn);
  }

  /** Called after all props are placed. */
  finalize() {
    this.nav.build(this.footprints, this.spec.navOpen || []);
    this._bakeStatics();
  }

  /** Merge static, non-interactive props per material to save draw calls. */
  _bakeStatics() {
    this.group.updateMatrixWorld(true);
    const inv = new THREE.Matrix4().copy(this.group.matrixWorld).invert();
    const buckets = new Map();
    const removals = [];
    for (const root of this.statics) {
      root.traverse((o) => {
        if (!o.isMesh || o.userData.keep || Array.isArray(o.material)) return;
        if (o.material.transparent) return;
        const key = o.material.uuid + (o.castShadow ? 'c' : '') + (o.receiveShadow ? 'r' : '');
        let b = buckets.get(key);
        if (!b) buckets.set(key, (b = { material: o.material, cast: o.castShadow, receive: o.receiveShadow, geos: [] }));
        let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
        for (const name of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(name)) g.deleteAttribute(name);
        if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
        if (!g.attributes.normal) g.computeVertexNormals();
        g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
        b.geos.push(g);
        removals.push(o);
      });
    }
    for (const o of removals) o.parent?.remove(o);
    const baked = new THREE.Group();
    baked.name = 'baked';
    for (const b of buckets.values()) {
      if (!b.geos.length) continue;
      const geo = mergeGeometries(b.geos, false);
      for (const g of b.geos) g.dispose();
      if (!geo) continue;
      const m = new THREE.Mesh(geo, b.material);
      m.castShadow = b.cast;
      m.receiveShadow = b.receive;
      baked.add(m);
    }
    this.group.add(baked);
    this.baked = baked;
  }

  update(dt, camera, time) {
    const cd = new THREE.Vector3(camera.position.x - this.group.position.x, 0, camera.position.z - this.group.position.z).normalize();
    for (const side in this.walls) this.walls[side].update(dt, cd);
    for (const fn of this.updaters) fn(dt, time);
  }

  /** Which corner is the camera looking at (the far one)? */
  cornerFor(camera) {
    const x = camera.position.x - this.group.position.x;
    const z = camera.position.z - this.group.position.z;
    const ns = z > 0 ? 'n' : 's';
    const ew = x > 0 ? 'w' : 'e';
    return ns + ew;
  }

  randomFreePoint(rng = Math.random, near = null, radius = 3) {
    return this.nav.randomFree(rng, near, radius);
  }

  setVisible(v) {
    this.group.visible = v;
  }
}
