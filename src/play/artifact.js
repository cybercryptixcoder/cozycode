// 3D objects for work: finished builds (little gadgets, one per motif),
// work in progress (scaffolding + loose parts), failures (a smoking
// contraption or a crumpled page), research (paper stacks, books), and the
// cards crew hold up when they present.
import * as THREE from 'three';
import { mat, uniqueMat, texMat } from '../gfx/materials.js';
import { rbox, cyl, sphere, torus, mesh, capsule, smoothLathe } from '../gfx/geo.js';
import { makeCanvas, canvasTexture } from '../gfx/textures.js';
import { mulberry32, TAU } from '../core/util.js';
import { drawCardFace } from './art.js';

const hueCol = (h, s = 0.62, l = 0.62) => new THREE.Color().setHSL(((h % 360) + 360) % 360 / 360, s, l);

function seedOf(id = 'x') {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** The finished gadget for a build thread (about 0.45 units tall). */
export function gadget(t) {
  const g = new THREE.Group();
  const rng = mulberry32(seedOf(t.id));
  const c = hueCol(t.hue ?? 20);
  const main = mat(`#${c.getHexString()}`, { roughness: 0.45 });
  const dark = mat(`#${hueCol(t.hue ?? 20, 0.45, 0.4).getHexString()}`, { roughness: 0.5 });
  const light = mat(`#${hueCol(t.hue ?? 20, 0.75, 0.82).getHexString()}`, { roughness: 0.5 });
  const metal = mat('#c9cfd4', { roughness: 0.3, metalness: 0.6 });
  const ink = mat('#3a2a24');
  const face = (y, z, s = 1) => {
    for (const sx of [-1, 1]) g.add(mesh(sphere(0.022 * s, 8, 6), ink, { pos: [sx * 0.06 * s, y, z] }));
  };
  switch (t.motif) {
    case 'plant':
      g.add(mesh(smoothLathe([[0, 0], [0.13, 0], [0.16, 0.18], [0.17, 0.2], [0.15, 0.2]], 18, 10, 'gpot'), main));
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * TAU;
        g.add(mesh(sphere(0.08, 10, 8), mat('#79c25f'), { pos: [Math.cos(a) * 0.07, 0.3 + rng() * 0.08, Math.sin(a) * 0.07], scale: [0.6, 1.2, 0.4], rot: [0, a, 0.4] }));
      }
      face(0.1, 0.165, 0.9);
      break;
    case 'robot':
      g.add(mesh(rbox(0.3, 0.26, 0.24, 0.06), main, { pos: [0, 0.22, 0] }));
      g.add(mesh(rbox(0.22, 0.14, 0.02, 0.03), light, { pos: [0, 0.24, 0.12] }));
      face(0.25, 0.135, 0.9);
      g.add(mesh(cyl(0.012, 0.012, 0.14, 6), metal, { pos: [0, 0.42, 0] }));
      g.add(mesh(sphere(0.035, 10, 8), uniqueMat('#ffd36b', { emissive: '#ffb020', emissiveIntensity: 0.6 }), { pos: [0, 0.5, 0] }));
      for (const s of [-1, 1]) g.add(mesh(cyl(0.05, 0.05, 0.05, 14), dark, { pos: [s * 0.12, 0.05, 0], rot: [0, 0, Math.PI / 2] }));
      break;
    case 'book':
      g.add(mesh(rbox(0.3, 0.06, 0.22, 0.01), main, { pos: [0, 0.03, 0] }));
      g.add(mesh(rbox(0.28, 0.05, 0.21, 0.005), light, { pos: [0, 0.085, 0] }));
      g.add(mesh(rbox(0.3, 0.05, 0.22, 0.01), dark, { pos: [0, 0.135, 0], rot: [0, 0.2, 0] }));
      break;
    case 'envelope':
      g.add(mesh(rbox(0.34, 0.22, 0.04, 0.01), mat('#fdf3e2'), { pos: [0, 0.13, 0], rot: [-0.2, 0, 0] }));
      g.add(mesh(sphere(0.04, 10, 8), main, { pos: [0, 0.14, 0.03], scale: [1, 1, 0.4] }));
      break;
    case 'gear':
      for (let i = 0; i < 12; i++) g.add(mesh(rbox(0.06, 0.06, 0.05, 0.01), main, { pos: [Math.cos((i / 12) * TAU) * 0.17, 0.2 + Math.sin((i / 12) * TAU) * 0.17, 0], rot: [0, 0, (i / 12) * TAU] }));
      g.add(mesh(cyl(0.16, 0.16, 0.05, 24), main, { pos: [0, 0.2, 0], rot: [Math.PI / 2, 0, 0] }));
      g.add(mesh(cyl(0.05, 0.05, 0.07, 12), light, { pos: [0, 0.2, 0], rot: [Math.PI / 2, 0, 0] }));
      g.add(mesh(rbox(0.2, 0.04, 0.12, 0.01), dark, { pos: [0, 0.02, 0] }));
      break;
    case 'lamp':
      g.add(mesh(cyl(0.1, 0.12, 0.03, 16), dark, { pos: [0, 0.015, 0] }));
      g.add(mesh(cyl(0.012, 0.012, 0.26, 6), metal, { pos: [0, 0.15, 0] }));
      g.add(mesh(cyl(0.07, 0.15, 0.13, 18, true), uniqueMat(`#${c.getHexString()}`, { emissive: '#ffcf8a', emissiveIntensity: 0.6, side: THREE.DoubleSide }), { pos: [0, 0.32, 0] }));
      break;
    case 'cup':
      g.add(mesh(smoothLathe([[0, 0], [0.12, 0], [0.13, 0.2], [0.12, 0.2]], 18, 10, 'gcup'), main));
      g.add(mesh(torus(0.06, 0.016, 6, 16, Math.PI), main, { pos: [0.13, 0.1, 0], rot: [0, 0, -Math.PI / 2] }));
      face(0.11, 0.13, 0.8);
      break;
    case 'clock':
      g.add(mesh(cyl(0.17, 0.17, 0.08, 24), main, { pos: [0, 0.2, 0], rot: [Math.PI / 2, 0, 0] }));
      g.add(mesh(cyl(0.14, 0.14, 0.01, 24), light, { pos: [0, 0.2, 0.042], rot: [Math.PI / 2, 0, 0] }));
      g.add(mesh(rbox(0.012, 0.1, 0.005, 0.002), ink, { pos: [0, 0.24, 0.05] }));
      g.add(mesh(rbox(0.07, 0.012, 0.005, 0.002), ink, { pos: [0.03, 0.2, 0.05] }));
      for (const s of [-1, 1]) g.add(mesh(sphere(0.05, 10, 8), dark, { pos: [s * 0.11, 0.37, 0] }));
      for (const s of [-1, 1]) g.add(mesh(cyl(0.015, 0.015, 0.08, 6), dark, { pos: [s * 0.1, 0.04, 0], rot: [0, 0, s * 0.3] }));
      break;
    case 'house':
      g.add(mesh(rbox(0.26, 0.2, 0.22, 0.02), mat('#f6ead8'), { pos: [0, 0.1, 0] }));
      g.add(mesh(cyl(0.001, 0.2, 0.16, 4), main, { pos: [0, 0.28, 0], rot: [0, Math.PI / 4, 0] }));
      g.add(mesh(rbox(0.06, 0.1, 0.01, 0.01), dark, { pos: [0, 0.05, 0.111] }));
      break;
    case 'radio':
      g.add(mesh(rbox(0.32, 0.2, 0.14, 0.04), main, { pos: [0, 0.1, 0] }));
      g.add(mesh(cyl(0.05, 0.05, 0.01, 16), light, { pos: [-0.07, 0.1, 0.072], rot: [Math.PI / 2, 0, 0] }));
      g.add(mesh(cyl(0.004, 0.004, 0.26, 4), metal, { pos: [0.1, 0.32, -0.03], rot: [0, 0, -0.35] }));
      break;
    case 'key':
      g.add(mesh(torus(0.07, 0.025, 8, 18), mat('#e9c25a', { metalness: 0.5, roughness: 0.35 }), { pos: [-0.1, 0.12, 0], rot: [0, 0, 0] }));
      g.add(mesh(rbox(0.22, 0.035, 0.03, 0.01), mat('#e9c25a', { metalness: 0.5, roughness: 0.35 }), { pos: [0.07, 0.12, 0] }));
      g.add(mesh(rbox(0.12, 0.03, 0.12, 0.01), dark, { pos: [0, 0.015, 0] }));
      break;
    case 'star':
    case 'kite':
    case 'shell':
    case 'leaf':
    case 'note':
    case 'cloud':
    case 'map':
    default: {
      // a little display stand with the motif as a chunky cut-out
      const tex = canvasTexture(motifCanvas(t));
      g.add(mesh(rbox(0.3, 0.3, 0.04, 0.03), [main, main, main, main, texMat(tex, { roughness: 0.6 }), main], { pos: [0, 0.22, 0] }));
      g.add(mesh(rbox(0.18, 0.04, 0.12, 0.01), dark, { pos: [0, 0.02, 0] }));
      g.add(mesh(cyl(0.012, 0.012, 0.08, 6), metal, { pos: [0, 0.06, 0] }));
    }
  }
  g.userData.kind = 'gadget';
  return g;
}

function motifCanvas(t) {
  const c = makeCanvas(160, 160);
  drawCardFace(c, { ...t, line: '' });
  return c;
}

/** A book for finished research (stands on the shelf). */
export function researchBook(t) {
  const g = new THREE.Group();
  const c = hueCol(t.hue ?? 200, 0.55, 0.55);
  const m = t.verified ? mat(`#${c.getHexString()}`, { roughness: 0.6 }) : mat(`#${hueCol(t.hue ?? 200, 0.25, 0.68).getHexString()}`, { roughness: 0.8 });
  const h = 0.26 + (seedOf(t.id) % 8) * 0.01;
  g.add(mesh(rbox(0.07, h, 0.22, 0.008), m, { pos: [0, h / 2, 0] }));
  g.add(mesh(rbox(0.074, 0.015, 0.224, 0.004), mat('#fff3d6'), { pos: [0, h * 0.75, 0] }));
  g.add(mesh(rbox(0.074, 0.015, 0.224, 0.004), mat('#fff3d6'), { pos: [0, h * 0.25, 0] }));
  g.userData.kind = 'book';
  return g;
}

/** Work in progress. progress 0..1 (never shown as a number: just looks less unfinished). */
export function wip(t, progress = 0) {
  const g = new THREE.Group();
  const rng = mulberry32(seedOf(t.id) + 7);
  if (t.kind === 'research') {
    // a growing stack of half-written pages, one open notebook
    const pages = 1 + Math.floor(progress * 6);
    for (let i = 0; i < pages; i++) g.add(mesh(rbox(0.26, 0.008, 0.34, 0.002), mat(i % 2 ? '#fbf6ec' : '#f4ecdf', { roughness: 1 }), { pos: [(rng() - 0.5) * 0.03, 0.005 + i * 0.009, (rng() - 0.5) * 0.03], rot: [0, (rng() - 0.5) * 0.2, 0] }));
    const top = pageCanvas(progress, t);
    const page = mesh(new THREE.PlaneGeometry(0.26, 0.34), texMat(canvasTexture(top), { roughness: 1 }), { pos: [0, 0.012 + pages * 0.009, 0], rot: [-Math.PI / 2, 0, 0], cast: false });
    g.add(page);
    g.add(mesh(cyl(0.008, 0.008, 0.16, 5), mat('#6a7d8c'), { pos: [0.18, 0.02, 0.05], rot: [Math.PI / 2, 0, 0.6] }));
    g.userData.kind = 'wip';
    return g;
  }
  if (t.kind === 'todo') return g;
  // builds: the finished object, partly assembled inside scaffolding, with loose parts around
  const thing = gadget(t);
  const shown = 0.35 + progress * 0.65;
  thing.scale.set(1, shown, 1);
  thing.traverse((o) => {
    if (o.isMesh) {
      o.material = o.material.clone ? o.material.clone() : o.material;
      if (o.material.color) o.material.color.lerp(new THREE.Color('#d8cfc4'), 0.55 * (1 - progress));
    }
  });
  g.add(thing);
  // scaffolding
  const wood = mat('#d7b98f', { roughness: 0.8 });
  const sh = 0.5;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(cyl(0.01, 0.01, sh, 5), wood, { pos: [sx * 0.2, sh / 2, sz * 0.16] }));
  for (const y of [0.18, 0.42]) for (const sz of [-1, 1]) g.add(mesh(cyl(0.008, 0.008, 0.42, 5), wood, { pos: [0, y, sz * 0.16], rot: [0, 0, Math.PI / 2] }));
  // loose parts: fewer as it comes together
  const loose = Math.round((1 - progress) * 5) + 1;
  const parts = [mat('#c9cfd4', { metalness: 0.6, roughness: 0.3 }), mat('#d8b07a'), mat('#9fb6c9')];
  for (let i = 0; i < loose; i++) {
    const a = rng() * TAU;
    const r = 0.25 + rng() * 0.08;
    const p = rng() < 0.5 ? mesh(cyl(0.015, 0.015, 0.04, 6), parts[i % 3], { pos: [Math.cos(a) * r, 0.02, Math.sin(a) * r], rot: [Math.PI / 2, 0, a] }) : mesh(rbox(0.05, 0.02, 0.03, 0.005), parts[i % 3], { pos: [Math.cos(a) * r, 0.01, Math.sin(a) * r], rot: [0, a, 0] });
    g.add(p);
  }
  // a little blueprint underneath
  g.add(mesh(new THREE.PlaneGeometry(0.5, 0.36), mat('#9ec3e6', { roughness: 1 }), { pos: [0, 0.003, 0], rot: [-Math.PI / 2, 0, 0.1], cast: false }));
  g.userData.kind = 'wip';
  g.userData.thing = thing;
  return g;
}

function pageCanvas(progress, t) {
  const c = makeCanvas(128, 168);
  const g = c.getContext('2d');
  g.fillStyle = '#fffaf0';
  g.fillRect(0, 0, 128, 168);
  g.strokeStyle = '#6a5a52';
  g.lineWidth = 2;
  const lines = Math.round(2 + progress * 11);
  const rng = mulberry32(seedOf(t.id));
  for (let i = 0; i < lines; i++) {
    g.beginPath();
    g.moveTo(12, 20 + i * 11);
    g.lineTo(12 + 40 + rng() * 60, 20 + i * 11);
    g.stroke();
  }
  return c;
}

/** Failure, shown honestly and gently. */
export function failed(t) {
  const g = new THREE.Group();
  if (t.kind === 'research') {
    const geo = new THREE.IcosahedronGeometry(0.11, 1);
    const p = geo.attributes.position;
    const rng = mulberry32(seedOf(t.id));
    for (let i = 0; i < p.count; i++) {
      const k = 0.7 + rng() * 0.5;
      p.setXYZ(i, p.getX(i) * k, p.getY(i) * k, p.getZ(i) * k);
    }
    geo.computeVertexNormals();
    g.add(mesh(geo, mat('#f3ead9', { roughness: 1, flat: true }), { pos: [0, 0.1, 0] }));
    g.userData.kind = 'crumpled';
    return g;
  }
  const thing = gadget(t);
  thing.rotation.z = 0.35;
  thing.position.y = -0.02;
  thing.traverse((o) => {
    if (o.isMesh && o.material.color) {
      o.material = o.material.clone();
      o.material.color.lerp(new THREE.Color('#6d625a'), 0.55);
    }
  });
  g.add(thing);
  g.userData.kind = 'smoking';
  g.userData.smoke = true;
  return g;
}

/** The card a crew member holds toward you while presenting. */
export function heldCard(t, { glow = false } = {}) {
  const c = makeCanvas(256, 340);
  drawCardFace(c, t, { glow });
  const tex = canvasTexture(c);
  const g = new THREE.Group();
  const front = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, transparent: true, emissive: glow ? '#ffe9a0' : '#000000', emissiveIntensity: glow ? 0.35 : 0, emissiveMap: glow ? tex : null });
  const back = mat(glow ? '#ffe6a0' : '#efe2cf');
  const card = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.56, 0.012), [back, back, back, back, front, back]);
  card.castShadow = true;
  card.position.set(0, 0.22, 0.06);
  card.rotation.x = -0.15;
  g.add(card);
  g.userData.holdOffset = [0, 0.05, 0.08];
  g.userData.card = card;
  return g;
}

/** A letter in hand. */
export function heldLetter() {
  const g = new THREE.Group();
  g.add(mesh(rbox(0.34, 0.22, 0.02, 0.01), mat('#fdf3e2'), { pos: [0, 0.12, 0.04] }));
  g.add(mesh(sphere(0.035, 10, 8), mat('#d9776a'), { pos: [0, 0.12, 0.055], scale: [1, 1, 0.4] }));
  g.userData.holdOffset = [0, 0.02, 0.06];
  return g;
}

export { seedOf, hueCol, capsule };
