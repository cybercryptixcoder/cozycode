// Geometry helpers: everything soft and rounded.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const cache = new Map();
const cached = (key, make) => {
  if (!cache.has(key)) {
    const g = make();
    g.userData.shared = true;
    cache.set(key, g);
  }
  return cache.get(key);
};

export function rbox(w, h, d, r = 0.04, seg = 3) {
  r = Math.min(r, w / 2 - 1e-4, h / 2 - 1e-4, d / 2 - 1e-4);
  return cached(`rbox:${w}:${h}:${d}:${r}:${seg}`, () => new RoundedBoxGeometry(w, h, d, seg, Math.max(1e-4, r)));
}

export function box(w, h, d) {
  return cached(`box:${w}:${h}:${d}`, () => new THREE.BoxGeometry(w, h, d));
}

export function cyl(rt, rb, h, seg = 24, open = false) {
  return cached(`cyl:${rt}:${rb}:${h}:${seg}:${open}`, () => new THREE.CylinderGeometry(rt, rb, h, seg, 1, open));
}

/** Cylinder with rounded (bevelled) top & bottom edges — pots, stools, pedestals. */
export function rcyl(r, h, bevel = 0.05, seg = 32) {
  return cached(`rcyl:${r}:${h}:${bevel}:${seg}`, () => {
    const b = Math.min(bevel, r * 0.5, h * 0.5);
    const pts = [new THREE.Vector2(0, -h / 2)];
    const steps = 6;
    for (let i = 0; i <= steps; i++) {
      const a = -Math.PI / 2 + (i / steps) * (Math.PI / 2);
      pts.push(new THREE.Vector2(r - b + Math.cos(a) * b, -h / 2 + b + Math.sin(a) * b));
    }
    for (let i = 0; i <= steps; i++) {
      const a = (i / steps) * (Math.PI / 2);
      pts.push(new THREE.Vector2(r - b + Math.cos(a) * b, h / 2 - b + Math.sin(a) * b));
    }
    pts.push(new THREE.Vector2(0, h / 2));
    return new THREE.LatheGeometry(pts, seg);
  });
}

export function sphere(r, ws = 24, hs = 16) {
  return cached(`sphere:${r}:${ws}:${hs}`, () => new THREE.SphereGeometry(r, ws, hs));
}

export function torus(r, tube, rs = 12, ts = 32, arc = Math.PI * 2) {
  return cached(`torus:${r}:${tube}:${rs}:${ts}:${arc}`, () => new THREE.TorusGeometry(r, tube, rs, ts, arc));
}

export function capsule(r, len, cs = 6, rs = 14) {
  return cached(`capsule:${r}:${len}:${cs}:${rs}`, () => new THREE.CapsuleGeometry(r, len, cs, rs));
}

export function plane(w, h) {
  return cached(`plane:${w}:${h}`, () => new THREE.PlaneGeometry(w, h));
}

export function circle(r, seg = 40) {
  return cached(`circle:${r}:${seg}`, () => new THREE.CircleGeometry(r, seg));
}

/** Puffy cushion: a rounded box with its top/bottom inflated. */
export function cushion(w, h, d, puff = 0.5) {
  return cached(`cushion:${w}:${h}:${d}:${puff}`, () => {
    const g = new RoundedBoxGeometry(w, h, d, 5, Math.min(w, h, d) * 0.45);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i) / (w / 2);
      const z = p.getZ(i) / (d / 2);
      const y = p.getY(i);
      const k = (1 - Math.min(1, x * x)) * (1 - Math.min(1, z * z));
      p.setY(i, y + Math.sign(y) * k * h * puff * 0.5);
    }
    g.computeVertexNormals();
    return g;
  });
}

/** Lathe from a list of [r, y] pairs. */
export function lathe(points, seg = 32, key = null) {
  const make = () =>
    new THREE.LatheGeometry(
      points.map(([r, y]) => new THREE.Vector2(r, y)),
      seg
    );
  return key ? cached(`lathe:${key}`, make) : make();
}

/** Smooth lathe through control points (Catmull-Rom). */
export function smoothLathe(points, seg = 32, samples = 40, key = null) {
  const make = () => {
    const curve = new THREE.SplineCurve(points.map(([r, y]) => new THREE.Vector2(r, y)));
    const pts = curve.getSpacedPoints(samples).map((p) => new THREE.Vector2(Math.max(0, p.x), p.y));
    return new THREE.LatheGeometry(pts, seg);
  };
  return key ? cached(`slathe:${key}`, make) : make();
}

export function mesh(geo, material, o = {}) {
  const m = new THREE.Mesh(geo, material);
  if (o.pos) m.position.set(...o.pos);
  if (o.rot) m.rotation.set(...o.rot);
  if (o.scale !== undefined) {
    if (Array.isArray(o.scale)) m.scale.set(...o.scale);
    else m.scale.setScalar(o.scale);
  }
  m.castShadow = o.cast ?? true;
  m.receiveShadow = o.receive ?? true;
  if (o.name) m.name = o.name;
  return m;
}

export function group(o = {}, ...children) {
  const g = new THREE.Group();
  if (o.pos) g.position.set(...o.pos);
  if (o.rot) g.rotation.set(...o.rot);
  if (o.scale !== undefined) {
    if (Array.isArray(o.scale)) g.scale.set(...o.scale);
    else g.scale.setScalar(o.scale);
  }
  if (o.name) g.name = o.name;
  for (const c of children) if (c) g.add(c);
  return g;
}
