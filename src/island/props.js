// Gameplay furniture for the island house. The environment is deliberately
// muted (paper, wood, linen); the things that matter — cards, work in
// progress, finished objects — are the saturated bits placed on top later.
//
// Every builder returns a Group whose front faces +z, origin on the floor.
// Objects that hold things expose `userData.slots` (local positions).
import * as THREE from 'three';
import { mat, uniqueMat, texMat } from '../gfx/materials.js';
import { rbox, cyl, rcyl, sphere, torus, mesh, group, plane, circle, cushion, capsule, smoothLathe } from '../gfx/geo.js';
import { makeCanvas, canvasTexture, corkTexture, roundRect, wrapText, labelTexture } from '../gfx/textures.js';
import { mulberry32, TAU } from '../core/util.js';

export const MUTED = {
  wood: '#c9ab8c',
  woodDark: '#a98a6c',
  woodLight: '#dcc3a6',
  linen: '#efe4d6',
  linen2: '#e4d6c4',
  sage: '#b9c4a8',
  dusk: '#b7b2c6',
  clay: '#d4a99a',
  slate: '#8f9aa0',
  brass: '#c8a873',
  ink: '#5d4a40',
};

const wood = () => mat(MUTED.wood, { roughness: 0.75 });
const woodDark = () => mat(MUTED.woodDark, { roughness: 0.75 });
const woodLight = () => mat(MUTED.woodLight, { roughness: 0.8 });
const linen = (c = MUTED.linen) => mat(c, { roughness: 0.95 });

// ------------------------------------------------------------------ commons

/** The pitch rug: a round braided rug with three little spots to stand on. */
export function pitchRug(r = 1.25) {
  const g = new THREE.Group();
  const c = makeCanvas(512, 512);
  const x = c.getContext('2d');
  const cols = ['#e9d3bd', '#dcc0a6', '#efe0cf', '#d6b9a0', '#ebd8c6'];
  for (let i = 0; i < 9; i++) {
    x.fillStyle = cols[i % cols.length];
    x.beginPath();
    x.arc(256, 256, 250 - i * 27, 0, TAU);
    x.fill();
    // braid ticks
    x.strokeStyle = 'rgba(120,90,70,0.12)';
    x.lineWidth = 3;
    const rr = 250 - i * 27 - 13;
    for (let a = 0; a < TAU; a += 0.09 + i * 0.01) {
      x.beginPath();
      x.moveTo(256 + Math.cos(a) * (rr - 8), 256 + Math.sin(a) * (rr - 8));
      x.lineTo(256 + Math.cos(a + 0.05) * (rr + 8), 256 + Math.sin(a + 0.05) * (rr + 8));
      x.stroke();
    }
  }
  const tex = canvasTexture(c);
  const disc = new THREE.Mesh(circle(r, 48), texMat(tex, { roughness: 0.95 }));
  disc.rotation.x = -Math.PI / 2;
  disc.position.y = 0.012;
  disc.receiveShadow = true;
  g.add(disc);
  // three stand spots: little stitched circles
  const spots = [];
  const spotMat = mat('#f4e8da', { roughness: 0.95 });
  for (let i = 0; i < 3; i++) {
    const a = -0.9 + i * 0.9;
    const sx = Math.sin(a) * r * 0.55;
    const sz = Math.cos(a) * r * 0.25;
    const s = new THREE.Mesh(circle(0.26, 24), spotMat);
    s.rotation.x = -Math.PI / 2;
    s.position.set(sx, 0.016, sz);
    s.receiveShadow = true;
    g.add(s);
    spots.push({ x: sx, z: sz });
  }
  g.userData.spots = spots;
  return g;
}

/** The idea board: cork with six pin spots. Covered with a cloth until it wakes. */
export function ideaBoard(w = 1.9, h = 1.25) {
  const g = new THREE.Group();
  const corkTex = corkTexture();
  corkTex.repeat.set(w / 1.2, h / 1.2);
  g.add(mesh(rbox(w + 0.14, h + 0.14, 0.07, 0.04), woodDark(), { pos: [0, 0, 0.035] }));
  g.add(mesh(rbox(w, h, 0.03, 0.01), texMat(corkTex, { roughness: 0.95, color: '#e8dccd' }), { pos: [0, 0, 0.075] }));
  const notes = new THREE.Group();
  notes.position.z = 0.1;
  g.add(notes);
  const slots = [];
  for (let j = 0; j < 2; j++) for (let i = 0; i < 3; i++) slots.push({ x: -w / 2 + (i + 0.5) * (w / 3), y: h / 4 - j * (h / 2), z: 0.1 });
  // pin dots where notes go (empty spots stay visible)
  for (const s of slots) g.add(mesh(sphere(0.025, 8, 6), mat('#cdb8a2'), { pos: [s.x, s.y + 0.16, 0.1] }));
  // the cloth that hides the board until the first idea is kept
  const cloth = new THREE.Group();
  const clothMat = mat('#e6dccf', { roughness: 1, side: THREE.DoubleSide });
  const cg = new THREE.PlaneGeometry(w + 0.3, h + 0.35, 12, 8);
  const p = cg.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const px = p.getX(i);
    const py = p.getY(i);
    p.setZ(i, 0.03 + Math.sin(px * 7.5) * 0.025 * (0.5 - py / (h + 0.35)) + 0.01);
  }
  cg.computeVertexNormals();
  cloth.add(mesh(cg, clothMat, { pos: [0, -0.06, 0.12] }));
  g.add(cloth);
  g.userData = { notes, slots, cloth, w, h };
  return g;
}

/** A sticky note with a tiny picture and a line of text. */
export function noteCard(text, color = '#ffe08a', drawPic = null) {
  const c = makeCanvas(256, 256);
  const x = c.getContext('2d');
  x.fillStyle = color;
  x.fillRect(0, 0, 256, 256);
  x.fillStyle = 'rgba(0,0,0,0.05)';
  x.fillRect(0, 230, 256, 26);
  if (drawPic) {
    x.save();
    x.translate(128, 92);
    drawPic(x, 70);
    x.restore();
  }
  x.fillStyle = '#4e3a30';
  x.font = `30px 'Patrick Hand', cursive`;
  x.textAlign = 'center';
  const lines = wrapText(x, text, 220, 2);
  lines.forEach((l, i) => x.fillText(l, 128, (drawPic ? 190 : 110) + i * 30));
  const tex = canvasTexture(c);
  const g = new THREE.Group();
  const side = mat(color);
  g.add(mesh(rbox(0.42, 0.42, 0.01, 0.004), [side, side, side, side, texMat(tex, { roughness: 0.9 }), side]));
  g.add(mesh(sphere(0.03, 10, 8), mat('#d9776a', { roughness: 0.4 }), { pos: [0, 0.17, 0.02] }));
  g.userData.tex = tex;
  return g;
}

/** The toss bin: a wicker basket that crumpled ideas get dropped in. */
export function tossBin() {
  const g = new THREE.Group();
  const m = mat('#cfb08c', { roughness: 0.95 });
  g.add(mesh(smoothLathe([[0, 0], [0.2, 0], [0.24, 0.05], [0.27, 0.42], [0.25, 0.44]], 22, 14, 'tossbin'), m));
  for (let i = 0; i < 4; i++) g.add(mesh(torus(0.22 + i * 0.012, 0.012, 6, 28), mat('#b89573'), { pos: [0, 0.08 + i * 0.1, 0], rot: [Math.PI / 2, 0, 0] }));
  const inside = new THREE.Group();
  inside.position.y = 0.3;
  g.add(inside);
  g.userData.inside = inside;
  g.userData.top = 0.46;
  return g;
}

/** Crumpled paper ball. */
export function paperBall(color = '#f3ead9') {
  const geo = new THREE.IcosahedronGeometry(0.09, 1);
  const p = geo.attributes.position;
  const rng = mulberry32(Math.floor(Math.random() * 1e6));
  for (let i = 0; i < p.count; i++) {
    const k = 0.75 + rng() * 0.45;
    p.setXYZ(i, p.getX(i) * k, p.getY(i) * k, p.getZ(i) * k);
  }
  geo.computeVertexNormals();
  return mesh(geo, mat(color, { roughness: 1, flat: true }));
}

/** A stack of unopened moving boxes. */
export function movingBoxes(seed = 3, n = 4) {
  const g = new THREE.Group();
  const rng = mulberry32(seed);
  const cols = ['#d6b38c', '#ccaa83', '#dfc09c'];
  let y = 0;
  for (let i = 0; i < n; i++) {
    const s = 0.5 + rng() * 0.2;
    const stack = i > 0 && rng() < 0.5;
    const b = new THREE.Group();
    b.add(mesh(rbox(s, s * 0.8, s, 0.04), mat(cols[i % 3], { roughness: 0.95 })));
    b.add(mesh(rbox(s * 1.01, 0.05, 0.12, 0.01), mat('#b98d63', { roughness: 0.8 }), { pos: [0, s * 0.4, 0] }));
    if (stack) {
      b.position.set((rng() - 0.5) * 0.15, y + s * 0.4, (rng() - 0.5) * 0.1);
      y += s * 0.8;
    } else {
      y = s * 0.8;
      b.position.set(i * 0.62 - 0.5, s * 0.4, (rng() - 0.5) * 0.3);
    }
    b.rotation.y = (rng() - 0.5) * 0.5;
    g.add(b);
  }
  return g;
}

/** A plain couch (two nap spots). */
export function couch(w = 1.7, color = '#c9b8a6') {
  const g = new THREE.Group();
  const fab = mat(color, { roughness: 0.95 });
  const fab2 = mat(new THREE.Color(color).offsetHSL(0, 0, 0.05).getStyle(), { roughness: 0.95 });
  g.add(mesh(rbox(w, 0.3, 0.8, 0.08), fab, { pos: [0, 0.2, 0] }));
  g.add(mesh(rbox(w, 0.55, 0.22, 0.1), fab, { pos: [0, 0.5, -0.3] }));
  for (const s of [-1, 1]) g.add(mesh(rbox(0.2, 0.45, 0.8, 0.08), fab, { pos: [s * (w / 2 - 0.08), 0.38, 0] }));
  for (const s of [-1, 1]) g.add(mesh(cushion(w / 2 - 0.2, 0.12, 0.6, 0.6), fab2, { pos: [s * (w / 4 - 0.05), 0.4, 0.06] }));
  g.add(mesh(cushion(0.34, 0.26, 0.12, 0.7), mat('#e3c7b4', { roughness: 0.95 }), { pos: [-w / 2 + 0.36, 0.58, -0.14], rot: [-0.2, 0.3, 0.1] }));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(cyl(0.035, 0.03, 0.08, 8), woodDark(), { pos: [sx * (w / 2 - 0.1), 0.04, sz * 0.3] }));
  return g;
}

/** A hand-drawn map of the island on paper, blanks where things aren't yet. */
export function paperMap(w = 0.95, h = 0.7) {
  const c = makeCanvas(384, Math.round((384 * h) / w));
  paperFill(c);
  const tex = canvasTexture(c);
  const g = new THREE.Group();
  g.add(mesh(rbox(w + 0.06, h + 0.06, 0.03, 0.01), woodLight(), { pos: [0, 0, 0.015] }));
  const paper = new THREE.Mesh(plane(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 }));
  paper.position.z = 0.035;
  g.add(paper);
  g.userData = { canvas: c, tex };
  return g;
}

export function paperFill(c, color = '#f4ead8') {
  const x = c.getContext('2d');
  x.fillStyle = color;
  x.fillRect(0, 0, c.width, c.height);
  const rng = mulberry32(c.width + c.height);
  for (let i = 0; i < 300; i++) {
    x.fillStyle = `rgba(150,120,90,${rng() * 0.06})`;
    x.fillRect(rng() * c.width, rng() * c.height, 2, 2);
  }
}

/** A frame holding the crew roster (little portraits drawn on paper). */
export function rosterFrame(w = 0.9, h = 0.6) {
  const c = makeCanvas(384, Math.round((384 * h) / w));
  paperFill(c);
  const tex = canvasTexture(c);
  const g = new THREE.Group();
  g.add(mesh(rbox(w + 0.08, h + 0.08, 0.04, 0.02), woodDark(), { pos: [0, 0, 0.02] }));
  const paper = new THREE.Mesh(plane(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 }));
  paper.position.z = 0.045;
  g.add(paper);
  g.userData = { canvas: c, tex };
  return g;
}

// ------------------------------------------------------------------ workshop

/** Workbench with three build slots. Locked slots wear a dust cloth. */
export function buildBench(w = 2.5, d = 0.85, h = 0.6) {
  const g = new THREE.Group();
  g.add(mesh(rbox(w, 0.08, d, 0.02), mat('#cdb091', { roughness: 0.7 }), { pos: [0, h, 0] }));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(rbox(0.08, h, 0.08, 0.02), woodDark(), { pos: [sx * (w / 2 - 0.1), h / 2, sz * (d / 2 - 0.1)] }));
  g.add(mesh(rbox(w - 0.2, 0.05, d - 0.2, 0.02), woodDark(), { pos: [0, 0.16, 0] }));
  // a vice and some offcuts underneath
  g.add(mesh(rbox(0.16, 0.12, 0.12, 0.02), mat(MUTED.slate, { roughness: 0.5, metalness: 0.3 }), { pos: [w / 2 - 0.15, h + 0.1, d / 2 - 0.1] }));
  g.add(mesh(rbox(0.5, 0.05, 0.12, 0.01), woodLight(), { pos: [-0.4, 0.21, 0.05], rot: [0, 0.3, 0] }));
  const slots = [];
  const covers = [];
  for (let i = 0; i < 3; i++) {
    const x = -w / 2 + (i + 0.5) * (w / 3);
    slots.push({ x, y: h + 0.04, z: 0 });
    // a felt mat marks each slot
    g.add(mesh(rbox(w / 3 - 0.12, 0.012, d - 0.2, 0.004), mat('#b9c4a8', { roughness: 1 }), { pos: [x, h + 0.045, 0] }));
    const cover = new THREE.Group();
    cover.add(mesh(cushion(w / 3 - 0.08, 0.14, d - 0.1, 0.9), mat('#e2d8ca', { roughness: 1 }), { pos: [0, 0.05, 0] }));
    cover.add(mesh(rbox(0.2, 0.18, 0.2, 0.03), mat('#d6b38c', { roughness: 0.95 }), { pos: [0.1, 0.2, -0.05], rot: [0, 0.4, 0] }));
    cover.position.set(x, h + 0.04, 0);
    g.add(cover);
    covers.push(cover);
  }
  g.userData = { slots, covers, top: h + 0.04 };
  return g;
}

/** A display pedestal for a verified finished build (grows in when earned). */
export function pedestal() {
  const g = new THREE.Group();
  const stone = mat('#ece4da', { roughness: 0.7 });
  g.add(mesh(rcyl(0.32, 0.08, 0.03, 24), stone, { pos: [0, 0.04, 0] }));
  g.add(mesh(cyl(0.24, 0.27, 0.55, 24), stone, { pos: [0, 0.35, 0] }));
  g.add(mesh(rcyl(0.3, 0.07, 0.03, 24), stone, { pos: [0, 0.65, 0] }));
  // brass label plate
  const label = new THREE.Group();
  label.position.set(0, 0.36, 0.25);
  g.add(label);
  g.userData = { top: 0.69, label };
  return g;
}

/** A small label plate texture for a pedestal. */
export function labelPlate(text) {
  const tex = labelTexture(text, { w: 512, h: 128, bg: '#d8bd84', color: '#5a4030', size: 52, font: 'Patrick Hand', weight: 400 });
  const m = mat('#c8a873', { roughness: 0.4, metalness: 0.4 });
  return mesh(rbox(0.34, 0.09, 0.015, 0.005), [m, m, m, m, texMat(tex, { roughness: 0.4 }), m], { rot: [-0.12, 0, 0] });
}

/** Wall shelf with N slots on two boards. */
export function slotShelf({ w = 1.6, rows = 2, perRow = 4, gap = 0.48, color = MUTED.wood } = {}) {
  const g = new THREE.Group();
  const m = mat(color, { roughness: 0.75 });
  const slots = [];
  for (let r = 0; r < rows; r++) {
    const y = r * gap;
    g.add(mesh(rbox(w, 0.05, 0.32, 0.015), m, { pos: [0, y, 0.16] }));
    for (const s of [-1, 1]) g.add(mesh(rbox(0.04, 0.16, 0.04, 0.01), woodDark(), { pos: [s * (w / 2 - 0.15), y - 0.09, 0.05], rot: [0.6, 0, 0] }));
    for (let i = 0; i < perRow; i++) slots.push({ x: -w / 2 + (i + 0.5) * (w / perRow), y: y + 0.025, z: 0.16 });
  }
  g.userData = { slots };
  return g;
}

/** Pegboard whose empty hooks wait for capabilities (new tools). */
export function toolPegboard(w = 1.5, h = 0.95) {
  const g = new THREE.Group();
  const c = makeCanvas(256, Math.round((256 * h) / w));
  const x = c.getContext('2d');
  x.fillStyle = '#dcc6a8';
  x.fillRect(0, 0, c.width, c.height);
  x.fillStyle = 'rgba(110,80,60,0.4)';
  for (let i = 8; i < c.width; i += 16) for (let j = 8; j < c.height; j += 16) x.fillRect(i - 2, j - 2, 4, 4);
  const side = mat('#cdb595');
  g.add(mesh(rbox(w, h, 0.04, 0.02), [side, side, side, side, texMat(canvasTexture(c)), side], { pos: [0, 0, 0.02] }));
  const slots = [];
  const hook = mat(MUTED.brass, { metalness: 0.5, roughness: 0.4 });
  for (let j = 0; j < 2; j++)
    for (let i = 0; i < 4; i++) {
      const sx = -w / 2 + (i + 0.5) * (w / 4);
      const sy = h / 2 - 0.22 - j * 0.45;
      g.add(mesh(capsule(0.012, 0.05, 4, 6), hook, { pos: [sx, sy, 0.06], rot: [Math.PI / 2.4, 0, 0] }));
      slots.push({ x: sx, y: sy - 0.02, z: 0.08 });
    }
  // the basic tools everyone starts with
  const metal = mat('#aab3ba', { roughness: 0.35, metalness: 0.6 });
  g.add(mesh(rbox(0.035, 0.3, 0.03, 0.01), woodLight(), { pos: [slots[0].x, slots[0].y - 0.14, 0.08] }));
  g.add(mesh(rbox(0.14, 0.06, 0.05, 0.015), metal, { pos: [slots[0].x, slots[0].y + 0.01, 0.08] }));
  g.userData = { slots, used: 1 };
  return g;
}

// ------------------------------------------------------------------ study

export function writingDesk(w = 1.9, d = 0.75, h = 0.58) {
  const g = new THREE.Group();
  g.add(mesh(rbox(w, 0.06, d, 0.02), mat('#cfb393', { roughness: 0.7 }), { pos: [0, h, 0] }));
  for (const sx of [-1, 1]) g.add(mesh(rbox(0.06, h, d - 0.1, 0.02), woodDark(), { pos: [sx * (w / 2 - 0.08), h / 2, 0] }));
  g.add(mesh(rbox(w - 0.2, 0.18, 0.04, 0.02), woodDark(), { pos: [0, h - 0.12, -d / 2 + 0.06] }));
  // pen pot + ink
  g.add(mesh(cyl(0.05, 0.045, 0.12, 12), mat(MUTED.clay), { pos: [w / 2 - 0.2, h + 0.09, -d / 2 + 0.16] }));
  for (let i = 0; i < 3; i++) g.add(mesh(cyl(0.007, 0.007, 0.18, 5), mat(['#6a7d8c', '#a07060', '#8a9a6a'][i]), { pos: [w / 2 - 0.2 + (i - 1) * 0.02, h + 0.17, -d / 2 + 0.16], rot: [0.1 * (i - 1), 0, 0.12 * (i - 1)] }));
  const slots = [];
  for (let i = 0; i < 2; i++) slots.push({ x: -w / 4 + i * (w / 2) - 0.1 * (i - 0.5), y: h + 0.035, z: 0.05 });
  g.userData = { slots, top: h + 0.03 };
  return g;
}

/** Bookshelf with empty spaces for finished research. */
export function researchShelf(w = 1.6, h = 2.0, d = 0.38, shelves = 4, perShelf = 8) {
  const g = new THREE.Group();
  const m = mat('#c6a888', { roughness: 0.75 });
  const t = 0.05;
  g.add(mesh(rbox(t, h, d, 0.02), m, { pos: [-w / 2 + t / 2, h / 2, 0] }));
  g.add(mesh(rbox(t, h, d, 0.02), m, { pos: [w / 2 - t / 2, h / 2, 0] }));
  g.add(mesh(rbox(w + 0.06, t, d + 0.04, 0.02), m, { pos: [0, h - t / 2, 0] }));
  g.add(mesh(rbox(w - 0.02, h - 0.02, 0.02, 0.01), mat('#e3d3c0', { roughness: 0.9 }), { pos: [0, h / 2, -d / 2 + 0.012] }));
  const sh = (h - 0.12) / shelves;
  const slots = [];
  for (let s = 0; s <= shelves; s++) {
    const y = 0.06 + s * sh;
    g.add(mesh(rbox(w - 0.06, t, d - 0.02, 0.015), m, { pos: [0, y, 0] }));
    if (s === shelves) break;
    for (let i = 0; i < perShelf; i++) slots.push({ x: -w / 2 + 0.12 + i * ((w - 0.24) / (perShelf - 1)), y: y + t / 2, z: 0.02, h: sh * 0.72 });
  }
  // one shelf of old reference books, so it never looks empty
  const rng = mulberry32(8);
  for (let i = 0; i < 6; i++) {
    const s = slots[slots.length - perShelf + i];
    const bh = s.h * (0.7 + rng() * 0.25);
    g.add(mesh(rbox(0.07, bh, d * 0.7, 0.008), mat(['#b9a28a', '#a8b1a0', '#c2ab9d', '#a9a4b8'][i % 4], { roughness: 0.85 }), { pos: [s.x, s.y + bh / 2, s.z] }));
  }
  g.userData = { slots: slots.slice(0, slots.length - perShelf) };
  return g;
}

/** A book standing on a shelf (finished research). Saturated: it's an output. */
export function bookSpine(color, h = 0.3, glow = false) {
  const g = new THREE.Group();
  const m = glow ? uniqueMat(color, { emissive: color, emissiveIntensity: 0.4, roughness: 0.55 }) : mat(color, { roughness: 0.6 });
  g.add(mesh(rbox(0.08, h, 0.24, 0.01), m, { pos: [0, h / 2, 0] }));
  g.add(mesh(rbox(0.085, 0.015, 0.245, 0.004), mat('#fff3d6'), { pos: [0, h * 0.78, 0] }));
  return g;
}

export function telescope() {
  const g = new THREE.Group();
  const brass = mat(MUTED.brass, { metalness: 0.55, roughness: 0.35 });
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU;
    g.add(mesh(cyl(0.018, 0.018, 0.9, 6), woodDark(), { pos: [Math.sin(a) * 0.18, 0.42, Math.cos(a) * 0.18], rot: [Math.cos(a) * 0.3, 0, -Math.sin(a) * 0.3] }));
  }
  const tube = new THREE.Group();
  tube.position.y = 0.86;
  tube.rotation.x = -0.6;
  tube.add(mesh(cyl(0.07, 0.09, 0.8, 16), mat('#7d8a99', { roughness: 0.45, metalness: 0.2 }), { rot: [Math.PI / 2, 0, 0] }));
  tube.add(mesh(torus(0.09, 0.015, 6, 18), brass, { pos: [0, 0, -0.4] }));
  tube.add(mesh(torus(0.07, 0.012, 6, 18), brass, { pos: [0, 0, 0.4] }));
  g.add(tube);
  return g;
}

export function deskLamp() {
  const g = new THREE.Group();
  const m = mat('#8e9a8a', { roughness: 0.5 });
  g.add(mesh(rcyl(0.09, 0.03, 0.01, 16), m));
  g.add(mesh(cyl(0.012, 0.012, 0.32, 6), m, { pos: [0, 0.17, 0], rot: [0, 0, 0.25] }));
  const shade = new THREE.Mesh(cyl(0.05, 0.11, 0.12, 16, true), uniqueMat('#e9e2c8', { emissive: '#ffcf8a', emissiveIntensity: 0, side: THREE.DoubleSide }));
  shade.position.set(-0.08, 0.34, 0);
  shade.rotation.z = 0.5;
  g.add(shade);
  const bulb = new THREE.Mesh(sphere(0.035, 10, 8), uniqueMat('#fff3d6', { emissive: '#ffd27a', emissiveIntensity: 0 }));
  bulb.position.set(-0.1, 0.3, 0);
  g.add(bulb);
  const light = new THREE.PointLight('#ffcf8a', 0, 3.2, 1.6);
  light.position.set(-0.12, 0.26, 0);
  g.add(light);
  g.userData = { shade, bulb, light, on: 0 };
  return g;
}

// ------------------------------------------------------------------ kitchen

/** Chalkboard that holds seven everyday to-dos. */
export function todoBoard(w = 1.4, h = 1.3) {
  const g = new THREE.Group();
  g.add(mesh(rbox(w + 0.12, h + 0.12, 0.06, 0.03), woodDark(), { pos: [0, 0, 0.03] }));
  const c = makeCanvas(400, Math.round((400 * h) / w));
  const tex = canvasTexture(c);
  const board = new THREE.Mesh(plane(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 }));
  board.position.z = 0.065;
  g.add(board);
  g.add(mesh(rbox(w * 0.8, 0.035, 0.1, 0.012), woodDark(), { pos: [0, -h / 2 - 0.05, 0.09] }));
  g.add(mesh(capsule(0.012, 0.06, 4, 8), mat('#f8f4ec'), { pos: [-0.2, -h / 2 - 0.02, 0.09], rot: [0, 0, Math.PI / 2] }));
  g.userData = {
    canvas: c,
    tex,
    draw(items) {
      const x = c.getContext('2d');
      const W = c.width;
      const Hh = c.height;
      x.fillStyle = '#46564c';
      x.fillRect(0, 0, W, Hh);
      const rng = mulberry32(5);
      for (let i = 0; i < 30; i++) {
        x.fillStyle = `rgba(255,255,255,${rng() * 0.05})`;
        x.beginPath();
        x.ellipse(rng() * W, rng() * Hh, 20 + rng() * 50, 6 + rng() * 16, rng() * 3, 0, TAU);
        x.fill();
      }
      x.font = `30px 'Patrick Hand', cursive`;
      x.textAlign = 'left';
      const rowH = (Hh - 30) / 7;
      for (let i = 0; i < 7; i++) {
        const y = 22 + rowH * (i + 0.7);
        const it = items[i];
        x.strokeStyle = 'rgba(255,255,255,0.35)';
        x.lineWidth = 2;
        x.strokeRect(22, y - 18, 18, 18);
        if (!it) continue;
        x.strokeStyle = 'rgba(255,255,255,0.9)';
        x.strokeRect(22, y - 18, 18, 18);
        if (it.done) {
          x.strokeStyle = '#ffe2a8';
          x.lineWidth = 3;
          x.beginPath();
          x.moveTo(24, y - 9);
          x.lineTo(31, y - 2);
          x.lineTo(44, y - 24);
          x.stroke();
        }
        x.fillStyle = it.done ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.92)';
        const t = wrapText(x, it.text, W - 70, 1)[0] || '';
        x.fillText(t, 52, y);
        if (it.done) x.fillRect(50, y - 9, x.measureText(t).width + 4, 2);
      }
      tex.needsUpdate = true;
    },
  };
  g.userData.draw([]);
  return g;
}

export function counter(w = 2.0, d = 0.62, h = 0.62) {
  const g = new THREE.Group();
  g.add(mesh(rbox(w, h - 0.06, d, 0.03), mat('#d9cbb8', { roughness: 0.85 }), { pos: [0, (h - 0.06) / 2, 0] }));
  g.add(mesh(rbox(w + 0.06, 0.06, d + 0.04, 0.02), mat('#e8e2d8', { roughness: 0.5 }), { pos: [0, h - 0.03, 0] }));
  for (let i = 0; i < 3; i++) g.add(mesh(rbox(w / 3 - 0.06, h - 0.2, 0.02, 0.01), mat('#cdbda8'), { pos: [-w / 3 + i * (w / 3), (h - 0.06) / 2, d / 2 + 0.005] }));
  for (let i = 0; i < 3; i++) g.add(mesh(sphere(0.02, 8, 6), mat(MUTED.brass, { metalness: 0.4 }), { pos: [-w / 3 + i * (w / 3), h - 0.18, d / 2 + 0.02] }));
  g.userData = { top: h };
  return g;
}

export function kettle() {
  const g = new THREE.Group();
  const m = mat('#a9bfb6', { roughness: 0.4, metalness: 0.15 });
  g.add(mesh(smoothLathe([[0, 0], [0.11, 0], [0.13, 0.08], [0.12, 0.16], [0.07, 0.2], [0, 0.21]], 20, 14, 'kettle'), m));
  g.add(mesh(torus(0.07, 0.012, 6, 16, Math.PI), woodDark(), { pos: [0, 0.22, 0], rot: [0, Math.PI / 2, 0] }));
  g.add(mesh(cyl(0.015, 0.03, 0.12, 8), m, { pos: [0.14, 0.12, 0], rot: [0, 0, -0.9] }));
  return g;
}

export function radio() {
  const g = new THREE.Group();
  g.add(mesh(rbox(0.36, 0.22, 0.14, 0.04), mat('#c98b6d', { roughness: 0.55 }), { pos: [0, 0.11, 0] }));
  g.add(mesh(circle(0.07, 20), mat('#e9dcc4'), { pos: [-0.08, 0.11, 0.072] }));
  g.add(mesh(rbox(0.1, 0.05, 0.01, 0.005), mat('#f5ecd9'), { pos: [0.09, 0.14, 0.072] }));
  g.add(mesh(cyl(0.004, 0.004, 0.3, 4), mat('#aab3ba', { metalness: 0.6 }), { pos: [0.12, 0.34, -0.03], rot: [0, 0, -0.35] }));
  return g;
}

export function roundTable(r = 0.6, h = 0.42) {
  const g = new THREE.Group();
  g.add(mesh(rcyl(r, 0.06, 0.02, 32), mat('#d8bf9f', { roughness: 0.7 }), { pos: [0, h, 0] }));
  g.add(mesh(cyl(0.06, 0.08, h, 10), woodDark(), { pos: [0, h / 2, 0] }));
  g.add(mesh(rcyl(0.25, 0.04, 0.015, 16), woodDark(), { pos: [0, 0.02, 0] }));
  return g;
}

export function stoolSeat(color = '#d9c2a8') {
  const g = new THREE.Group();
  g.add(mesh(rcyl(0.2, 0.06, 0.03, 16), mat(color, { roughness: 0.9 }), { pos: [0, 0.3, 0] }));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU;
    g.add(mesh(cyl(0.02, 0.02, 0.3, 6), woodDark(), { pos: [Math.sin(a) * 0.12, 0.15, Math.cos(a) * 0.12], rot: [Math.cos(a) * 0.15, 0, -Math.sin(a) * 0.15] }));
  }
  return g;
}

// ------------------------------------------------------------------ bunks & your room

/** A bunk bed: two sleeping spots (bottom & top). Long axis along x. */
export function bunkBed(w = 1.85, d = 0.95, quilts = ['#d9c7d6', '#c8d4c4']) {
  const g = new THREE.Group();
  const m = wood();
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(rbox(0.07, 1.7, 0.07, 0.02), m, { pos: [sx * (w / 2 - 0.04), 0.85, sz * (d / 2 - 0.04)] }));
  const levels = [0.32, 1.12];
  levels.forEach((y, i) => {
    g.add(mesh(rbox(w, 0.08, d, 0.03), m, { pos: [0, y, 0] }));
    g.add(mesh(cushion(w - 0.1, 0.12, d - 0.1, 0.4), linen('#f3ece2'), { pos: [0, y + 0.08, 0] }));
    g.add(mesh(cushion(w * 0.62, 0.06, d - 0.04, 0.5), mat(quilts[i % quilts.length], { roughness: 0.95 }), { pos: [w * 0.17, y + 0.15, 0] }));
    g.add(mesh(cushion(0.36, 0.1, 0.5, 0.7), linen('#fbf6ee'), { pos: [-w / 2 + 0.3, y + 0.18, 0] }));
  });
  // top rail + ladder
  g.add(mesh(rbox(w * 0.7, 0.05, 0.05, 0.02), m, { pos: [w * 0.1, 1.42, d / 2 - 0.04] }));
  for (let i = 0; i < 3; i++) g.add(mesh(cyl(0.018, 0.018, 0.22, 6), m, { pos: [-w / 2 + 0.25, 0.5 + i * 0.25, d / 2 + 0.02], rot: [0, 0, Math.PI / 2] }));
  g.userData = { spots: [{ x: -w / 2 + 0.45, y: levels[0] + 0.14 }, { x: -w / 2 + 0.45, y: levels[1] + 0.14 }] };
  return g;
}

/** Keepsake shelf: every slot has a faint outline, so empty ones invite filling. */
export function keepsakeShelf(w = 1.7, rows = 2, perRow = 5) {
  const g = slotShelf({ w, rows, perRow, gap: 0.5, color: '#cbb193' });
  const outline = mat('#e5d6c3', { roughness: 1, transparent: true, opacity: 0.7 });
  for (const s of g.userData.slots) {
    const ring = mesh(torus(0.09, 0.008, 4, 24), outline, { pos: [s.x, s.y + 0.006, s.z], rot: [Math.PI / 2, 0, 0], cast: false });
    g.add(ring);
    s.ring = ring;
  }
  return g;
}

export function simpleBed(w = 1.4, d = 1.9, quilt = '#d9cbe0') {
  const g = new THREE.Group();
  g.add(mesh(rbox(w, 0.24, d, 0.05), wood(), { pos: [0, 0.14, 0] }));
  g.add(mesh(rbox(w, 0.7, 0.08, 0.04), wood(), { pos: [0, 0.4, -d / 2 + 0.04] }));
  g.add(mesh(cushion(w - 0.08, 0.16, d - 0.12, 0.3), linen('#f6f0e6'), { pos: [0, 0.32, 0] }));
  g.add(mesh(cushion(w, 0.06, d * 0.6, 0.4), mat(quilt, { roughness: 0.95 }), { pos: [0, 0.42, d * 0.18] }));
  g.add(mesh(cushion(0.6, 0.14, 0.34, 0.7), linen('#fbf6ee'), { pos: [0, 0.46, -d / 2 + 0.3] }));
  return g;
}

/** A low table that holds stated & inferred facts. */
export function factTable(w = 1.4, d = 0.7) {
  const g = new THREE.Group();
  g.add(mesh(rbox(w, 0.05, d, 0.02), mat('#d8c3a8'), { pos: [0, 0.36, 0] }));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(cyl(0.025, 0.02, 0.34, 6), woodDark(), { pos: [sx * (w / 2 - 0.08), 0.17, sz * (d / 2 - 0.08)] }));
  const slots = [];
  for (let i = 0; i < 4; i++) slots.push({ x: -w / 2 + (i + 0.5) * (w / 4), y: 0.385, z: 0 });
  g.userData = { slots };
  return g;
}

// ------------------------------------------------------------------ attic

/** One storage box for a shelved idea (labelled; saturated tag = the idea). */
export function ideaBox(color = '#e6c36a', seed = 1) {
  const g = new THREE.Group();
  const rng = mulberry32(seed);
  const s = 0.42 + rng() * 0.08;
  g.add(mesh(rbox(s, s * 0.72, s * 0.85, 0.03), mat('#d6b994', { roughness: 0.95 }), { pos: [0, s * 0.36, 0] }));
  g.add(mesh(rbox(s * 1.02, 0.05, s * 0.87, 0.015), mat('#cba982', { roughness: 0.9 }), { pos: [0, s * 0.72, 0] }));
  g.add(mesh(rbox(0.18, 0.1, 0.005, 0.004), mat(color), { pos: [0, s * 0.42, s * 0.43] }));
  g.rotation.y = (rng() - 0.5) * 0.2;
  g.userData.top = s * 0.75;
  return g;
}

// ------------------------------------------------------------------ gate

export function letterBoard(w = 2.0, h = 1.2) {
  const g = new THREE.Group();
  for (const s of [-1, 1]) g.add(mesh(rbox(0.1, h + 0.7, 0.1, 0.03), woodDark(), { pos: [s * (w / 2 + 0.02), (h + 0.7) / 2, 0] }));
  g.add(mesh(rbox(w, h, 0.05, 0.02), mat('#d8c4a6', { roughness: 0.9 }), { pos: [0, 0.6 + h / 2, 0] }));
  // little roof
  g.add(mesh(rbox(w + 0.4, 0.06, 0.4, 0.02), mat('#a99b8f'), { pos: [0, h + 0.75, 0.05], rot: [0.25, 0, 0] }));
  const slots = [];
  for (let j = 0; j < 2; j++) for (let i = 0; i < 5; i++) slots.push({ x: -w / 2 + 0.2 + i * ((w - 0.4) / 4), y: 0.6 + h - 0.32 - j * 0.5, z: 0.04 });
  g.userData = { slots };
  return g;
}

/** A tall perch post for the mail bird. */
export function perchPost() {
  const g = new THREE.Group();
  g.add(mesh(cyl(0.05, 0.07, 1.9, 8), woodDark(), { pos: [0, 0.95, 0] }));
  g.add(mesh(cyl(0.03, 0.03, 0.7, 6), wood(), { pos: [0, 1.85, 0], rot: [0, 0, Math.PI / 2] }));
  g.add(mesh(rcyl(0.16, 0.05, 0.02, 12), mat('#cbb79d'), { pos: [0.3, 1.88, 0] }));
  g.userData.top = { x: 0.3, y: 1.92, z: 0 };
  return g;
}

/** Mooring post for balloons, with a coiled rope. */
export function mooringPost() {
  const g = new THREE.Group();
  g.add(mesh(cyl(0.09, 0.11, 0.8, 10), woodDark(), { pos: [0, 0.4, 0] }));
  g.add(mesh(torus(0.13, 0.03, 6, 18), mat('#d9c39c', { roughness: 1 }), { pos: [0, 0.6, 0], rot: [Math.PI / 2, 0, 0] }));
  g.add(mesh(torus(0.18, 0.03, 6, 18), mat('#d9c39c', { roughness: 1 }), { pos: [0.1, 0.04, 0.2], rot: [Math.PI / 2, 0, 0] }));
  return g;
}

export function gateArch(w = 1.5) {
  const g = new THREE.Group();
  const m = mat('#d1bfa6', { roughness: 0.8 });
  for (const s of [-1, 1]) g.add(mesh(rbox(0.14, 1.6, 0.14, 0.04), m, { pos: [s * w / 2, 0.8, 0] }));
  const arc = mesh(torus(w / 2, 0.06, 6, 24, Math.PI), m, { pos: [0, 1.6, 0] });
  g.add(arc);
  // a few leaves on the arch
  const leaf = mat('#a8b994', { roughness: 0.8 });
  for (let i = 0; i < 9; i++) {
    const a = (i / 8) * Math.PI;
    g.add(mesh(sphere(0.07, 6, 5), leaf, { pos: [Math.cos(a) * w / 2, 1.6 + Math.sin(a) * w / 2, 0.04], scale: [1, 0.6, 0.8] }));
  }
  return g;
}

// ------------------------------------------------------------------ underside

/** The ledger: a big paper book on a lectern, holding every thread. */
export function ledger() {
  const g = new THREE.Group();
  g.add(mesh(rbox(0.12, 0.85, 0.12, 0.03), woodDark(), { pos: [0, 0.42, 0] }));
  g.add(mesh(rbox(0.5, 0.05, 0.4, 0.02), woodDark(), { pos: [0, 0.02, 0] }));
  const top = new THREE.Group();
  top.position.y = 0.9;
  top.rotation.x = 0.45;
  top.add(mesh(rbox(0.9, 0.04, 0.6, 0.02), wood(), {}));
  const c = makeCanvas(512, 340);
  const tex = canvasTexture(c);
  const pages = new THREE.Mesh(new THREE.PlaneGeometry(0.84, 0.56), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, emissive: '#3a2c20', emissiveIntensity: 0.15, emissiveMap: tex }));
  pages.rotation.x = -Math.PI / 2;
  pages.position.y = 0.03;
  top.add(pages);
  g.add(top);
  g.userData = { canvas: c, tex, pages };
  return g;
}

/** Glass jar of glowing stuff (machine room). */
export function glowJar(color = '#ffd27a', h = 0.34) {
  const g = new THREE.Group();
  g.add(mesh(cyl(0.12, 0.12, h, 14), uniqueMat('#e8f4f0', { transparent: true, opacity: 0.35, roughness: 0.1 }), { pos: [0, h / 2, 0], cast: false }));
  const goo = new THREE.Mesh(sphere(0.08, 12, 10), uniqueMat(color, { emissive: color, emissiveIntensity: 0.9 }));
  goo.position.y = h * 0.45;
  g.add(goo);
  g.add(mesh(cyl(0.13, 0.13, 0.04, 14), mat(MUTED.brass, { metalness: 0.5 }), { pos: [0, h + 0.02, 0] }));
  g.userData.goo = goo;
  return g;
}

export function pipe(points, r = 0.05, color = '#a7a196') {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  return mesh(new THREE.TubeGeometry(curve, 24, r, 8, false), mat(color, { roughness: 0.5, metalness: 0.3 }));
}
