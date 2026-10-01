// Role gear: little things a crew member wears so you can tell at a glance
// what they do. Attached to the body pivot so it squashes and stretches
// along with the critter.
//
//   ideas       glowing sprout
//   builder     goggles + a wrench on the hip
//   researcher  round glasses + a book under the arm
//   postmaster  a satchel
//   chores      an apron
//   generalist  a neckerchief
//   specialist  a long scarf (and they're taller, older, deeper-coloured)
import * as THREE from 'three';
import { bodyRadiusAt } from './parts.js';

const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: o.roughness ?? 0.6, metalness: o.metalness ?? 0, emissive: o.emissive ?? '#000000', emissiveIntensity: o.emissiveIntensity ?? 1, side: o.side ?? THREE.FrontSide });

function m(geo, mat, pos, rot) {
  const x = new THREE.Mesh(geo, mat);
  if (pos) x.position.set(...pos);
  if (rot) x.rotation.set(...rot);
  x.castShadow = true;
  return x;
}

/** A band hugging the body surface between two heights, over an angular range. */
function band(y0, y1, a0, a1, out = 0.012, seg = 24) {
  const pts = [];
  const steps = 6;
  for (let i = 0; i <= steps; i++) {
    const y = y0 + ((y1 - y0) * i) / steps;
    pts.push(new THREE.Vector2(bodyRadiusAt(y) + out, y));
  }
  return new THREE.LatheGeometry(pts, seg, a0, a1 - a0);
}

export function addGear(critter, role) {
  const c = critter;
  if (c._gear) {
    c.bodyPivot.remove(c._gear);
    c._gear = null;
  }
  const g = new THREE.Group();
  g.name = `gear:${role}`;
  const mats = [];
  const keep = (mt) => (mats.push(mt), mt);
  const metal = keep(std('#b9c0c6', { roughness: 0.35, metalness: 0.6 }));

  if (role === 'ideas') {
    // make the sprout glow softly
    for (const mt of c.accessoryMaterials || []) {
      mt.emissive = new THREE.Color('#b6f07a');
      mt.emissiveIntensity = 0.55;
    }
    c._glowSprout = true;
  } else if (role === 'builder') {
    const strap = keep(std('#5b4a42', { roughness: 0.8 }));
    g.add(m(band(0.78, 0.84, 0, Math.PI * 2, 0.008), strap));
    const lens = keep(std('#9fd6e8', { roughness: 0.1, metalness: 0.2, emissive: '#3a6f80', emissiveIntensity: 0.25 }));
    const rim = keep(std('#d08a4c', { roughness: 0.45, metalness: 0.3 }));
    for (const s of [-1, 1]) {
      const x = s * 0.13;
      const y = 0.82;
      const z = Math.sqrt(Math.max(0, bodyRadiusAt(y) ** 2 - x * x)) + 0.03;
      const cup = new THREE.Group();
      cup.position.set(x, y, z - 0.02);
      cup.lookAt(x * 3, y + 0.25, z * 3);
      cup.add(m(new THREE.CylinderGeometry(0.075, 0.08, 0.06, 18), rim, [0, 0, 0], [Math.PI / 2, 0, 0]));
      cup.add(m(new THREE.CircleGeometry(0.062, 18), lens, [0, 0, 0.032]));
      g.add(cup);
    }
    // wrench on the hip
    const w = new THREE.Group();
    w.position.set(0.47, 0.22, 0.12);
    w.rotation.set(0, 0.5, -0.25);
    w.add(m(new THREE.BoxGeometry(0.035, 0.24, 0.02), metal, [0, 0, 0]));
    w.add(m(new THREE.TorusGeometry(0.035, 0.014, 6, 12, Math.PI * 1.4), metal, [0, 0.14, 0], [0, 0, -0.6]));
    g.add(w);
  } else if (role === 'researcher') {
    const frame = keep(std('#6c5a4e', { roughness: 0.4, metalness: 0.2 }));
    const glass = keep(new THREE.MeshStandardMaterial({ color: '#eef8ff', roughness: 0.05, transparent: true, opacity: 0.18 }));
    for (const s of [-1, 1]) {
      const x = s * 0.158;
      const y = 0.565;
      const z = Math.sqrt(Math.max(0, bodyRadiusAt(y) ** 2 - x * x)) + 0.035;
      const ring = new THREE.Group();
      ring.position.set(x, y, z);
      ring.rotation.y = Math.atan2(x, z) * 0.9;
      ring.add(m(new THREE.TorusGeometry(0.082, 0.011, 6, 22), frame));
      const lensM = new THREE.Mesh(new THREE.CircleGeometry(0.075, 18), glass);
      lensM.position.z = 0.004;
      ring.add(lensM);
      g.add(ring);
    }
    g.add(m(new THREE.CylinderGeometry(0.008, 0.008, 0.09, 5), frame, [0, 0.57, bodyRadiusAt(0.57) + 0.035], [0, 0, Math.PI / 2]));
    // a book tucked under the arm
    const book = new THREE.Group();
    book.position.set(-0.5, 0.3, 0.02);
    book.rotation.set(0.1, 0, 0.15);
    book.add(m(new THREE.BoxGeometry(0.06, 0.26, 0.2), keep(std('#7f9cc9', { roughness: 0.6 }))));
    book.add(m(new THREE.BoxGeometry(0.05, 0.24, 0.21), keep(std('#fff6e4', { roughness: 0.9 })), [0.008, 0, 0]));
    g.add(book);
    c._gearBook = book;
  } else if (role === 'postmaster') {
    const leather = keep(std('#b07a52', { roughness: 0.7 }));
    // diagonal strap
    const strap = new THREE.Mesh(band(0.5, 0.56, 0, Math.PI * 2, 0.01, 28), leather);
    strap.rotation.z = 0.55;
    strap.position.y = 0.06;
    g.add(strap);
    const bag = new THREE.Group();
    bag.position.set(0.42, 0.2, 0.22);
    bag.rotation.y = 0.9;
    bag.add(m(new THREE.BoxGeometry(0.26, 0.2, 0.09), leather));
    bag.add(m(new THREE.BoxGeometry(0.27, 0.1, 0.095), keep(std('#94603f', { roughness: 0.7 })), [0, 0.06, 0.003]));
    bag.add(m(new THREE.BoxGeometry(0.04, 0.04, 0.02), keep(std('#e3c27a', { metalness: 0.5, roughness: 0.3 })), [0, 0.02, 0.05]));
    // an envelope peeking out
    bag.add(m(new THREE.BoxGeometry(0.16, 0.1, 0.01), keep(std('#fff3e0', { roughness: 0.9 })), [-0.03, 0.12, 0.01], [0, 0, 0.15]));
    g.add(bag);
  } else if (role === 'chores') {
    const cloth = keep(std('#f3eee4', { roughness: 0.95, side: THREE.DoubleSide }));
    const apron = new THREE.Mesh(band(0.06, 0.46, -0.85, 0.85, 0.014, 20), cloth);
    g.add(apron);
    const tie = keep(std('#e9a7a0', { roughness: 0.9 }));
    g.add(m(band(0.42, 0.47, 0, Math.PI * 2, 0.016), tie));
    const pocket = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.1), keep(std('#e9a7a0', { roughness: 0.9, side: THREE.DoubleSide })));
    pocket.position.set(0.06, 0.2, bodyRadiusAt(0.2) + 0.03);
    g.add(pocket);
  } else if (role === 'generalist') {
    const cloth = keep(std('#e88f73', { roughness: 0.9, side: THREE.DoubleSide }));
    g.add(m(band(0.17, 0.25, 0, Math.PI * 2, 0.015), cloth));
    // the triangle tip at the front
    const tri = new THREE.Shape();
    tri.moveTo(-0.13, 0);
    tri.lineTo(0.13, 0);
    tri.lineTo(0, -0.15);
    tri.closePath();
    const t = new THREE.Mesh(new THREE.ShapeGeometry(tri), cloth);
    t.position.set(0, 0.24, bodyRadiusAt(0.2) + 0.025);
    t.rotation.x = -0.12;
    g.add(t);
    // two dots
    const dot = keep(std('#fff3e6'));
    for (const [x, y] of [
      [-0.04, 0.19],
      [0.04, 0.17],
    ])
      g.add(m(new THREE.SphereGeometry(0.012, 6, 5), dot, [x, y, bodyRadiusAt(0.2) + 0.035]));
  } else if (role === 'specialist') {
    const wool = keep(std('#c75f52', { roughness: 0.95 }));
    const stripe = keep(std('#efe0c8', { roughness: 0.95 }));
    g.add(m(band(0.2, 0.31, 0, Math.PI * 2, 0.03), wool));
    g.add(m(band(0.24, 0.27, 0, Math.PI * 2, 0.034), stripe));
    const tail = new THREE.Group();
    tail.position.set(0.2, 0.22, bodyRadiusAt(0.25) + 0.02);
    tail.rotation.z = 0.12;
    tail.add(m(new THREE.BoxGeometry(0.12, 0.34, 0.04), wool, [0, -0.15, 0]));
    for (let i = 0; i < 2; i++) tail.add(m(new THREE.BoxGeometry(0.122, 0.03, 0.042), stripe, [0, -0.1 - i * 0.12, 0]));
    g.add(tail);
    c._scarfTail = tail;
  }
  c.bodyPivot.add(g);
  c._gear = g;
  c._gearMats = mats;
  c.role = role;
  return g;
}

/** Specialist look: taller, a little older (heavier lids), deeper palette. */
export const SPECIALIST = {
  color: '#7f8fb0',
  size: 1.22,
  accessory: 'leaf',
  traits: { energy: 0.35, curiosity: 0.55, sociability: 0.45, sleepiness: 0.4, clumsiness: 0.08, chattiness: 0.3 },
  faceShape: { eyeDX: 0.15, eyeSize: 0.86, eyeY: 0.55 },
  voice: 0.72,
};

/** Per-frame touches (scarf tail swings, sprout glow breathes). */
export function updateGear(c, t) {
  if (c._glowSprout) {
    const k = 0.45 + Math.sin(t * 1.8 + c.seed) * 0.15;
    for (const mt of c.accessoryMaterials || []) mt.emissiveIntensity = k;
  }
  if (c._scarfTail) c._scarfTail.rotation.x = Math.sin(t * 2.1) * 0.08 + c.leanX.x * 0.9;
}
