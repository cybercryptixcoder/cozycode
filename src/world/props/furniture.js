// Floor furniture, sized for sproutlings (who are about 1 unit tall).
import * as THREE from 'three';
import { mat, uniqueMat, texMat, COLORS } from '../../gfx/materials.js';
import { rbox, cyl, rcyl, sphere, torus, mesh, group, plane, circle, cushion, smoothLathe, capsule } from '../../gfx/geo.js';
import { quiltTexture, roundRugTexture, stripeRugTexture, makeCanvas, canvasTexture, speckleTexture, roundRect } from '../../gfx/textures.js';
import { mulberry32, pick, rand, TAU } from '../../core/util.js';
import { bookStack, jar, tinyRobot, trophy } from './decor.js';

const BOOK_COLORS = ['#e8746a', '#7aa6dc', '#f2c14e', '#8dc68a', '#c39be0', '#f29bb5', '#7fc8c0', '#f6a26b', '#fff1e0'];

// ------------------------------------------------------------------ bed
export function bed({ w = 2.0, d = 1.4, quilt = undefined, frame = '#e6a673' } = {}) {
  const g = new THREE.Group();
  const wood = mat(frame, { roughness: 0.6 });
  const woodDark = mat('#c98454', { roughness: 0.6 });
  // frame
  g.add(mesh(rbox(w, 0.18, d, 0.06), wood, { pos: [0, 0.17, 0] }));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(rcyl(0.07, 0.12, 0.03, 12), woodDark, { pos: [sx * (w / 2 - 0.12), 0.06, sz * (d / 2 - 0.12)] }));
  // headboard (rounded top) along -z
  const hb = new THREE.Shape();
  hb.moveTo(-w / 2, 0);
  hb.lineTo(w / 2, 0);
  hb.lineTo(w / 2, 0.55);
  hb.quadraticCurveTo(w / 2, 0.95, 0, 0.98);
  hb.quadraticCurveTo(-w / 2, 0.95, -w / 2, 0.55);
  hb.lineTo(-w / 2, 0);
  const hbg = new THREE.ExtrudeGeometry(hb, { depth: 0.1, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 3, curveSegments: 20 });
  g.add(mesh(hbg, wood, { pos: [0, 0.1, -d / 2 - 0.02] }));
  // heart cut-out decoration
  g.add(mesh(sphere(0.07, 12, 10), mat('#ff9db5', { roughness: 0.5 }), { pos: [-0.05, 0.86, -d / 2 + 0.13], scale: [1, 1, 0.4] }));
  g.add(mesh(sphere(0.07, 12, 10), mat('#ff9db5', { roughness: 0.5 }), { pos: [0.05, 0.86, -d / 2 + 0.13], scale: [1, 1, 0.4] }));
  // footboard
  g.add(mesh(rbox(w, 0.42, 0.1, 0.05), wood, { pos: [0, 0.3, d / 2 - 0.02] }));
  // mattress
  g.add(mesh(cushion(w - 0.12, 0.2, d - 0.16, 0.25), mat('#fffaf2', { roughness: 0.95 }), { pos: [0, 0.34, 0] }));
  // quilt: drapes over the lower 2/3
  const qt = quiltTexture({ colors: quilt });
  qt.repeat.set(1.4, 1);
  const qm = texMat(qt, { roughness: 0.95 });
  const quiltGeo = cushion(w - 0.04, 0.08, d * 0.68, 0.4);
  g.add(mesh(quiltGeo, qm, { pos: [0, 0.45, d * 0.14] }));
  // fold
  g.add(mesh(capsule(0.06, w - 0.22, 6, 12), mat('#fff1e6', { roughness: 0.95 }), { pos: [0, 0.49, -d * 0.2], rot: [0, 0, Math.PI / 2] }));
  // pillows
  const pcols = ['#ffd6c9', '#d8efe3', '#fff0c9'];
  const np = w > 1.6 ? 2 : 1;
  for (let i = 0; i < np; i++) {
    const x = np === 1 ? 0 : (i - 0.5) * (w * 0.46);
    g.add(mesh(cushion(0.62, 0.16, 0.36, 0.7), mat(pcols[i % pcols.length], { roughness: 0.95 }), { pos: [x, 0.52, -d / 2 + 0.3], rot: [0.25, (i - 0.5) * 0.2, 0] }));
  }
  // a plushie friend
  const plush = group({ pos: [w * 0.32, 0.52, d * 0.05], rot: [0, -0.5, 0.1] });
  plush.add(mesh(sphere(0.12, 16, 12), mat('#c9a27e', { roughness: 0.95 }), { scale: [1, 0.95, 0.9] }));
  plush.add(mesh(sphere(0.045, 10, 8), mat('#c9a27e', { roughness: 0.95 }), { pos: [-0.08, 0.1, 0] }));
  plush.add(mesh(sphere(0.045, 10, 8), mat('#c9a27e', { roughness: 0.95 }), { pos: [0.08, 0.1, 0] }));
  plush.add(mesh(sphere(0.045, 10, 8), mat('#f2dcc4', { roughness: 0.95 }), { pos: [0, -0.02, 0.1], scale: [1, 0.8, 0.6] }));
  plush.add(mesh(sphere(0.014, 6, 6), mat('#2a1a15'), { pos: [-0.04, 0.03, 0.105] }));
  plush.add(mesh(sphere(0.014, 6, 6), mat('#2a1a15'), { pos: [0.04, 0.03, 0.105] }));
  g.add(plush);
  return g;
}

// ------------------------------------------------------------------ bookshelf
export function bookshelf({ w = 1.4, h = 1.9, d = 0.42, shelves = 4, seed = 2, color = '#e0a06c' } = {}) {
  const g = new THREE.Group();
  const wood = mat(color, { roughness: 0.6 });
  const back = mat('#f3cfa8', { roughness: 0.8 });
  const t = 0.06;
  g.add(mesh(rbox(t, h, d, 0.02), wood, { pos: [-w / 2 + t / 2, h / 2, 0] }));
  g.add(mesh(rbox(t, h, d, 0.02), wood, { pos: [w / 2 - t / 2, h / 2, 0] }));
  g.add(mesh(rbox(w + 0.06, t, d + 0.04, 0.02), wood, { pos: [0, h - t / 2, 0] }));
  g.add(mesh(rbox(w - 0.02, 0.03, h - 0.02, 0.01), back, { pos: [0, h / 2, -d / 2 + 0.015], rot: [Math.PI / 2, 0, 0] }));
  const rng = mulberry32(seed);
  const sh = (h - 0.12) / shelves;
  for (let s = 0; s <= shelves; s++) {
    const y = 0.06 + s * sh;
    g.add(mesh(rbox(w - 0.06, t, d - 0.02, 0.015), wood, { pos: [0, y, 0] }));
    if (s === shelves) break;
    // fill with books (sometimes a plant or trinket)
    let x = -w / 2 + 0.1;
    while (x < w / 2 - 0.14) {
      const r = rng();
      if (r < 0.08 && x < w / 2 - 0.35) {
        const p = smallPlant(rng);
        p.position.set(x + 0.11, y + t / 2, 0.02);
        g.add(p);
        x += 0.26;
        continue;
      }
      if (r < 0.14 && x < w / 2 - 0.3) {
        const st = bookStack(3, Math.floor(rng() * 1000));
        st.position.set(x + 0.13, y + t / 2, 0.02);
        g.add(st);
        x += 0.3;
        continue;
      }
      const bw = 0.045 + rng() * 0.035;
      const bh = sh * (0.55 + rng() * 0.3);
      const lean = rng() < 0.1 ? 0.2 : 0;
      const col = BOOK_COLORS[Math.floor(rng() * BOOK_COLORS.length)];
      g.add(mesh(rbox(bw, bh, d * 0.7, 0.008), mat(col, { roughness: 0.75 }), { pos: [x + bw / 2 + lean * bh * 0.4, y + t / 2 + bh / 2, 0.02], rot: [0, 0, -lean] }));
      if (rng() < 0.4) g.add(mesh(rbox(bw + 0.004, 0.012, d * 0.7 + 0.004, 0.003), mat('#fff6e0'), { pos: [x + bw / 2 + lean * bh * 0.4, y + t / 2 + bh * 0.75, 0.02], rot: [0, 0, -lean] }));
      x += bw + 0.008 + lean * bh * 0.5;
    }
  }
  return g;
}

function smallPlant(rng = Math.random) {
  const g = new THREE.Group();
  g.add(mesh(smoothLathe([[0, 0], [0.06, 0], [0.075, 0.08], [0.08, 0.1], [0.07, 0.1]], 16, 12, 'smallpot'), mat(pick(['#e88c66', '#ffd2b8', '#9fd3c7']), { roughness: 0.7 })));
  const leaf = mat(COLORS.leaf, { roughness: 0.6 });
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * TAU + rng();
    g.add(mesh(sphere(0.05, 8, 6), leaf, { pos: [Math.cos(a) * 0.04, 0.14 + rng() * 0.04, Math.sin(a) * 0.04], scale: [1, 0.6, 0.7], rot: [0, a, 0.5] }));
  }
  return g;
}

// ------------------------------------------------------------------ plants
const LEAF = () => mat('#6fb35b', { roughness: 0.55 });
const LEAF2 = () => mat('#8cc96f', { roughness: 0.55 });

export function pot(r = 0.22, h = 0.34, color = '#e88c66', rim = true) {
  const g = new THREE.Group();
  const pts = [
    [0, 0],
    [r * 0.72, 0],
    [r * 0.78, 0.02],
    [r * 0.92, h * 0.8],
    [r, h],
    [r * 0.88, h],
  ];
  g.add(mesh(smoothLathe(pts, 28, 20, `pot:${r}:${h}`), mat(color, { roughness: 0.75 })));
  if (rim) g.add(mesh(torus(r * 0.96, 0.035, 8, 28), mat(color, { roughness: 0.75 }), { pos: [0, h, 0], rot: [Math.PI / 2, 0, 0] }));
  g.add(mesh(circle(r * 0.88, 24), mat('#7a5136', { roughness: 1 }), { pos: [0, h - 0.03, 0], rot: [-Math.PI / 2, 0, 0], cast: false }));
  return g;
}

function leafGeo(len = 0.4, wid = 0.22) {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.bezierCurveTo(wid * 0.9, len * 0.15, wid * 0.8, len * 0.85, 0, len);
  s.bezierCurveTo(-wid * 0.8, len * 0.85, -wid * 0.9, len * 0.15, 0, 0);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.006, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2, curveSegments: 14 });
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const y = p.getY(i);
    p.setZ(i, p.getZ(i) + x * x * 1.6 - Math.sin((y / len) * Math.PI) * 0.03 + (y / len) * (y / len) * 0.08);
  }
  g.computeVertexNormals();
  return g;
}
const leafCache = {};
const getLeaf = (k, l, w) => leafCache[k] || (leafCache[k] = leafGeo(l, w));

/** Potted plant. kind: 'leafy' | 'round' | 'tall' | 'succulent' | 'flowers' */
export function plant(kind = 'leafy', { scale = 1, color = '#e88c66', seed = 1 } = {}) {
  const g = new THREE.Group();
  const rng = mulberry32(seed);
  const potH = kind === 'succulent' ? 0.18 : 0.34;
  const potR = kind === 'succulent' ? 0.16 : 0.22;
  g.add(pot(potR, potH, color));
  const foliage = new THREE.Group();
  foliage.position.y = potH - 0.02;
  g.add(foliage);
  if (kind === 'leafy') {
    const n = 9;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * TAU + rng() * 0.4;
      const tilt = 0.35 + rng() * 0.5;
      const len = 0.42 + rng() * 0.3;
      const stem = new THREE.Group();
      stem.rotation.set(0, a, 0);
      const inner = new THREE.Group();
      inner.rotation.x = tilt;
      stem.add(inner);
      inner.add(mesh(cyl(0.01, 0.012, len * 0.6, 5), mat('#5e9c4c'), { pos: [0, len * 0.3, 0] }));
      const lf = mesh(getLeaf('big', 0.36, 0.22), i % 2 ? LEAF() : LEAF2(), { pos: [0, len * 0.55, 0], rot: [-0.6 - rng() * 0.4, 0, 0] });
      inner.add(lf);
      foliage.add(stem);
    }
  } else if (kind === 'round') {
    const m = LEAF2();
    const m2 = LEAF();
    for (let i = 0; i < 14; i++) {
      const a = rng() * TAU;
      const r = rng() * 0.18;
      foliage.add(mesh(sphere(0.12 + rng() * 0.06, 12, 10), i % 3 ? m : m2, { pos: [Math.cos(a) * r, 0.18 + rng() * 0.3, Math.sin(a) * r] }));
    }
  } else if (kind === 'tall') {
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * TAU + rng();
      const h = 0.6 + rng() * 0.45;
      const blade = mesh(capsule(0.05, h, 4, 8), i % 2 ? mat('#5e9c4c') : mat('#7ab866'), { pos: [Math.cos(a) * 0.08, h / 2, Math.sin(a) * 0.08], rot: [Math.sin(a) * 0.15, a, Math.cos(a) * 0.15], scale: [1, 1, 0.28] });
      foliage.add(blade);
    }
  } else if (kind === 'succulent') {
    const m = mat('#9fd3a8', { roughness: 0.5 });
    for (let ring = 0; ring < 3; ring++)
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * TAU + ring * 0.4;
        const tilt = 1.1 - ring * 0.35;
        const l = group({ rot: [0, a, 0] }, mesh(sphere(0.06, 8, 6), m, { pos: [0, 0.04 + ring * 0.02, 0.06 - ring * 0.02], rot: [tilt, 0, 0], scale: [0.6, 0.4, 1.3] }));
        foliage.add(l);
      }
  } else if (kind === 'flowers') {
    const cols = ['#ff9db5', '#ffd36b', '#fff4f0', '#c7a8f2', '#ffb59a'];
    for (let i = 0; i < 7; i++) {
      const a = rng() * TAU;
      const r = rng() * 0.12;
      const h = 0.3 + rng() * 0.25;
      foliage.add(mesh(cyl(0.008, 0.01, h, 5), mat('#5e9c4c'), { pos: [Math.cos(a) * r, h / 2, Math.sin(a) * r] }));
      const head = group({ pos: [Math.cos(a) * r, h, Math.sin(a) * r] });
      const pc = mat(cols[i % cols.length], { roughness: 0.6 });
      for (let k = 0; k < 5; k++) {
        const pa = (k / 5) * TAU;
        head.add(mesh(sphere(0.035, 8, 6), pc, { pos: [Math.cos(pa) * 0.035, 0, Math.sin(pa) * 0.035], scale: [1, 0.5, 1] }));
      }
      head.add(mesh(sphere(0.022, 8, 6), mat('#ffcc4d'), { pos: [0, 0.012, 0] }));
      foliage.add(head);
    }
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU;
      foliage.add(mesh(sphere(0.07, 8, 6), LEAF(), { pos: [Math.cos(a) * 0.12, 0.05, Math.sin(a) * 0.12], scale: [1.2, 0.5, 0.7], rot: [0, -a, 0.3] }));
    }
  }
  g.scale.setScalar(scale);
  g.userData.foliage = foliage;
  g.userData.sway = rng() * 10;
  return g;
}

/** Plants sway gently; returns an updater. */
export function swayPlants(plants) {
  return (dt, t) => {
    for (const p of plants) {
      const f = p.userData.foliage;
      if (!f) continue;
      const s = p.userData.sway;
      f.rotation.z = Math.sin(t * 0.9 + s) * 0.025 + (p.userData.wiggle || 0) * Math.sin(t * 18) * 0.12;
      f.rotation.x = Math.sin(t * 0.7 + s * 1.3) * 0.02;
      if (p.userData.wiggle) p.userData.wiggle = Math.max(0, p.userData.wiggle - dt * 1.2);
    }
  };
}

// ------------------------------------------------------------------ rugs
export function roundRug(r = 2, colors) {
  const g = new THREE.Group();
  const tex = roundRugTexture({ colors });
  const top = mesh(circle(r, 64), texMat(tex, { roughness: 1 }), { pos: [0, 0.022, 0], rot: [-Math.PI / 2, 0, 0], cast: false });
  g.add(top);
  g.add(mesh(cyl(r, r, 0.02, 64, true), mat(colors ? colors[0] : '#f7c6b0', { roughness: 1 }), { pos: [0, 0.011, 0], cast: false }));
  return g;
}

export function rectRug(w = 2.2, d = 1.4, colors, border) {
  const g = new THREE.Group();
  const tex = stripeRugTexture({ colors, border });
  g.add(mesh(rbox(w, 0.02, d, 0.009), [mat(border || '#f29a84'), mat(border || '#f29a84'), texMat(tex, { roughness: 1 }), mat(border || '#f29a84'), mat(border || '#f29a84'), mat(border || '#f29a84')], { pos: [0, 0.012, 0], cast: false }));
  // tassels
  const tm = mat('#fff3e3', { roughness: 1 });
  for (const sx of [-1, 1])
    for (let i = 0; i < 9; i++) g.add(mesh(capsule(0.012, 0.06, 3, 5), tm, { pos: [sx * (w / 2 + 0.04), 0.012, -d / 2 + 0.1 + (i / 8) * (d - 0.2)], rot: [0, 0, Math.PI / 2], cast: false }));
  return g;
}

// ------------------------------------------------------------------ tables & seats
export function coffeeTable({ r = 0.7, h = 0.32 } = {}) {
  const g = new THREE.Group();
  const wood = mat('#e3a46f', { roughness: 0.55 });
  g.add(mesh(rcyl(r, 0.08, 0.035, 48), wood, { pos: [0, h, 0] }));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU + 0.5;
    g.add(mesh(rcyl(0.05, h, 0.02, 12), mat('#c98454'), { pos: [Math.cos(a) * r * 0.6, h / 2, Math.sin(a) * r * 0.6] }));
  }
  // tea set
  const top = h + 0.04;
  g.add(teapot([0, top, -0.05]));
  const mugCols = ['#ffd0b5', '#cfeede', '#e6dcff'];
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU + 1.2;
    g.add(mug(mugCols[i], [Math.cos(a) * r * 0.62, top, Math.sin(a) * r * 0.62], a));
  }
  // cookie plate
  const plate = group({ pos: [0.25, top, 0.25] });
  plate.add(mesh(rcyl(0.15, 0.02, 0.008, 24), mat('#fffaf2', { roughness: 0.4 })));
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * TAU;
    const ck = mesh(rcyl(0.05, 0.02, 0.008, 14), mat('#e2a868', { roughness: 0.8 }), { pos: [Math.cos(a) * 0.06, 0.02 + (i === 3 ? 0.02 : 0), Math.sin(a) * 0.06], rot: [0.1, 0, i === 3 ? 0.2 : 0] });
    plate.add(ck);
    plate.add(mesh(sphere(0.008, 5, 4), mat('#6b3f2a'), { pos: [Math.cos(a) * 0.06 + 0.01, 0.034 + (i === 3 ? 0.02 : 0), Math.sin(a) * 0.06] }));
  }
  g.add(plate);
  return g;
}

export function teapot(pos = [0, 0, 0], color = '#9fd3c7') {
  const g = group({ pos });
  const m = mat(color, { roughness: 0.35 });
  g.add(mesh(smoothLathe([[0, 0], [0.08, 0], [0.13, 0.07], [0.13, 0.13], [0.09, 0.19], [0.05, 0.2], [0, 0.2]], 24, 20, 'teapot'), m));
  g.add(mesh(sphere(0.025, 10, 8), m, { pos: [0, 0.22, 0] }));
  g.add(mesh(cyl(0.018, 0.03, 0.14, 10), m, { pos: [0.15, 0.13, 0], rot: [0, 0, -0.9] }));
  g.add(mesh(torus(0.055, 0.014, 8, 16, Math.PI * 1.3), m, { pos: [-0.13, 0.11, 0], rot: [0, 0, 1.0] }));
  // little heart
  g.add(mesh(sphere(0.02, 8, 6), mat('#ff9db5'), { pos: [0.02, 0.11, 0.125], scale: [1, 1, 0.4] }));
  return g;
}

export function mug(color = '#ffd0b5', pos = [0, 0, 0], rot = 0) {
  const g = group({ pos, rot: [0, rot, 0] });
  const m = mat(color, { roughness: 0.45 });
  g.add(mesh(rcyl(0.05, 0.09, 0.012, 16), m, { pos: [0, 0.045, 0] }));
  g.add(mesh(torus(0.028, 0.009, 6, 12), m, { pos: [0.055, 0.05, 0] }));
  g.add(mesh(cyl(0.044, 0.044, 0.005, 14), mat('#8a5536', { roughness: 0.2 }), { pos: [0, 0.08, 0] }));
  return g;
}

export function floorCushion(color = '#ffc4cf', r = 0.36) {
  const g = new THREE.Group();
  const c = mesh(cushion(r * 2, 0.16, r * 2, 0.6), mat(color, { roughness: 0.95 }), { pos: [0, 0.1, 0] });
  g.add(c);
  g.add(mesh(sphere(0.035, 10, 8), mat('#fff6ea'), { pos: [0, 0.21, 0], scale: [1, 0.5, 1] }));
  return g;
}

export function pouf(color = '#9fdcc0', r = 0.34, h = 0.32) {
  const g = new THREE.Group();
  g.add(mesh(rcyl(r, h, 0.12, 32), mat(color, { roughness: 0.95 }), { pos: [0, h / 2, 0] }));
  g.add(mesh(torus(r - 0.02, 0.02, 6, 32), mat('#fff6ea', { roughness: 0.95 }), { pos: [0, h * 0.5, 0], rot: [Math.PI / 2, 0, 0] }));
  return g;
}

export function beanBag(color = '#ffd977') {
  const g = new THREE.Group();
  const geo = smoothLathe(
    [
      [0, 0],
      [0.48, 0.02],
      [0.6, 0.14],
      [0.58, 0.3],
      [0.45, 0.44],
      [0.25, 0.5],
      [0.1, 0.44],
      [0, 0.42],
    ],
    32,
    24,
    'beanbag'
  );
  const b = mesh(geo, mat(color, { roughness: 0.92 }), { scale: [1, 1, 0.92] });
  g.add(b);
  // seat dent highlight & back bump
  g.add(mesh(sphere(0.32, 20, 14), mat(color, { roughness: 0.92 }), { pos: [0, 0.38, -0.25], scale: [1.2, 0.85, 0.7] }));
  return g;
}

export function armchair(color = '#c7b6ee') {
  const g = new THREE.Group();
  const fab = mat(color, { roughness: 0.92 });
  const fab2 = mat(new THREE.Color(color).offsetHSL(0, 0, 0.05).getStyle(), { roughness: 0.92 });
  g.add(mesh(rbox(1.05, 0.28, 0.85, 0.12), fab, { pos: [0, 0.22, 0] }));
  g.add(mesh(cushion(0.72, 0.16, 0.66, 0.5), fab2, { pos: [0, 0.42, 0.05] }));
  g.add(mesh(rbox(1.05, 0.7, 0.22, 0.11), fab, { pos: [0, 0.55, -0.34], rot: [-0.12, 0, 0] }));
  for (const s of [-1, 1]) g.add(mesh(rbox(0.2, 0.42, 0.85, 0.1), fab, { pos: [s * 0.45, 0.42, 0] }));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(cyl(0.035, 0.025, 0.09, 8), mat('#a8683f'), { pos: [sx * 0.42, 0.045, sz * 0.32] }));
  g.add(mesh(cushion(0.4, 0.12, 0.3, 0.7), mat('#fff0c9', { roughness: 0.95 }), { pos: [0.12, 0.6, -0.15], rot: [0.5, -0.3, 0.2] }));
  return g;
}

export function stool(color = '#ffb59a', h = 0.34) {
  const g = new THREE.Group();
  g.add(mesh(rcyl(0.24, 0.07, 0.03, 24), mat(color, { roughness: 0.7 }), { pos: [0, h, 0] }));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU;
    g.add(mesh(cyl(0.025, 0.03, h, 8), mat(COLORS.woodLight), { pos: [Math.cos(a) * 0.14, h / 2, Math.sin(a) * 0.14], rot: [Math.sin(a) * 0.1, 0, -Math.cos(a) * 0.1] }));
  }
  return g;
}

export function desk({ w = 1.5, d = 0.7, h = 0.56, color = '#e3a46f' } = {}) {
  const g = new THREE.Group();
  const wood = mat(color, { roughness: 0.55 });
  g.add(mesh(rbox(w, 0.06, d, 0.025), wood, { pos: [0, h, 0] }));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(rbox(0.06, h, 0.06, 0.02), mat('#c98454'), { pos: [sx * (w / 2 - 0.07), h / 2, sz * (d / 2 - 0.07)] }));
  g.add(mesh(rbox(w * 0.4, 0.14, d * 0.8, 0.03), wood, { pos: [w * 0.25, h - 0.1, 0] }));
  g.add(mesh(sphere(0.025, 8, 6), mat(COLORS.brass, { metalness: 0.5, roughness: 0.4 }), { pos: [w * 0.25, h - 0.1, d * 0.41] }));
  return g;
}

/** Chunky friendly retro computer whose screen shows a little animation. */
export function computer() {
  const g = new THREE.Group();
  const shell = mat('#fff1dd', { roughness: 0.5 });
  g.add(mesh(rbox(0.56, 0.44, 0.48, 0.09), shell, { pos: [0, 0.3, 0] }));
  g.add(mesh(rbox(0.36, 0.08, 0.3, 0.03), shell, { pos: [0, 0.04, -0.02] }));
  const c = makeCanvas(256, 192);
  const tex = canvasTexture(c);
  const screenMat = new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: new THREE.Color('#ffffff'), emissiveIntensity: 1.1, roughness: 0.3 });
  const screen = new THREE.Mesh(plane(0.42, 0.31), screenMat);
  screen.position.set(0, 0.31, 0.241);
  g.add(screen);
  g.add(mesh(rbox(0.46, 0.35, 0.02, 0.04), mat('#e8d6bf'), { pos: [0, 0.31, 0.236] }));
  // keyboard + mouse
  g.add(mesh(rbox(0.46, 0.04, 0.16, 0.02), shell, { pos: [0, 0.02, 0.38], rot: [0.08, 0, 0] }));
  for (let r = 0; r < 3; r++)
    for (let k = 0; k < 8; k++) g.add(mesh(rbox(0.04, 0.02, 0.035, 0.008), mat(k === 3 && r === 1 ? '#ffb59a' : '#f3e2cc'), { pos: [-0.17 + k * 0.048, 0.045 + r * 0.004, 0.33 + r * 0.045] }));
  g.add(mesh(capsule(0.03, 0.03, 4, 8), shell, { pos: [0.33, 0.025, 0.38], rot: [Math.PI / 2, 0, 0], scale: [1, 1, 0.6] }));
  // the screen program: cozy blinking face or "typing" lines
  let t = 0;
  let mode = 'idle';
  let lines = [];
  g.userData.setMode = (m) => (mode = m);
  g.userData.update = (dt) => {
    t += dt;
    if (Math.floor(t * 8) === Math.floor((t - dt) * 8)) return;
    const x = c.getContext('2d');
    x.fillStyle = '#20343a';
    x.fillRect(0, 0, 256, 192);
    if (mode === 'work') {
      if (Math.random() < 0.5) {
        lines.push({ w: 30 + Math.random() * 150, c: pick(['#8ef0c9', '#ffd27a', '#ffb3c6', '#bfe6ff']), indent: Math.floor(Math.random() * 3) * 16 });
        if (lines.length > 9) lines.shift();
      }
      lines.forEach((l, i) => {
        x.fillStyle = l.c;
        roundRect(x, 18 + l.indent, 18 + i * 18, l.w, 9, 4);
        x.fill();
      });
      if (Math.floor(t * 2) % 2) {
        x.fillStyle = '#fff';
        x.fillRect(22 + (lines.at(-1)?.w || 0) + (lines.at(-1)?.indent || 0), 18 + (lines.length - 1) * 18, 8, 10);
      }
    } else {
      // sleepy smiley screensaver
      const blink = Math.sin(t * 1.3) > 0.97;
      x.fillStyle = '#8ef0c9';
      if (blink) {
        x.fillRect(86, 80, 24, 5);
        x.fillRect(146, 80, 24, 5);
      } else {
        x.beginPath();
        x.ellipse(98, 82, 10, 14, 0, 0, TAU);
        x.ellipse(158, 82, 10, 14, 0, 0, TAU);
        x.fill();
      }
      x.strokeStyle = '#8ef0c9';
      x.lineWidth = 6;
      x.lineCap = 'round';
      x.beginPath();
      x.arc(128, 108, 22, 0.25, Math.PI - 0.25);
      x.stroke();
    }
    // scanlines
    x.fillStyle = 'rgba(0,0,0,0.12)';
    for (let y = 0; y < 192; y += 4) x.fillRect(0, y, 256, 1);
    tex.needsUpdate = true;
  };
  return g;
}

export function workbench({ w = 2.2, d = 0.8, h = 0.6 } = {}) {
  const g = new THREE.Group();
  const top = mat('#d39a62', { roughness: 0.6 });
  const leg = mat('#a8683f', { roughness: 0.6 });
  g.add(mesh(rbox(w, 0.1, d, 0.03), top, { pos: [0, h, 0] }));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(rbox(0.09, h, 0.09, 0.02), leg, { pos: [sx * (w / 2 - 0.1), h / 2, sz * (d / 2 - 0.1)] }));
  g.add(mesh(rbox(w - 0.2, 0.05, d - 0.15, 0.02), leg, { pos: [0, 0.14, 0] }));
  // lower shelf stuff
  g.add(mesh(rbox(0.4, 0.22, 0.3, 0.04), mat('#ef6b5b', { roughness: 0.5 }), { pos: [-w * 0.3, 0.27, 0] }));
  g.add(mesh(rbox(0.3, 0.16, 0.26, 0.02), mat('#d9a876', { roughness: 0.85 }), { pos: [w * 0.15, 0.24, 0.02] }));
  // vise
  const metal = mat('#9fb4c7', { roughness: 0.35, metalness: 0.5 });
  g.add(mesh(rbox(0.16, 0.12, 0.14, 0.02), metal, { pos: [w / 2 - 0.25, h + 0.11, d / 2 - 0.12] }));
  g.add(mesh(cyl(0.012, 0.012, 0.24, 6), metal, { pos: [w / 2 - 0.25, h + 0.1, d / 2 + 0.02], rot: [Math.PI / 2, 0, 0] }));
  // project in progress: a little robot without an arm
  const bot = tinyRobot('#ffb59a');
  bot.position.set(-0.1, h + 0.05, -0.05);
  bot.scale.setScalar(1.6);
  g.add(bot);
  // gears
  g.add(gear(0.09, mat('#f2c14e', { roughness: 0.4, metalness: 0.4 }), [0.45, h + 0.06, 0.1]));
  g.add(gear(0.06, mat('#9fb4c7', { roughness: 0.4, metalness: 0.4 }), [0.6, h + 0.06, -0.12]));
  // screws
  for (let i = 0; i < 5; i++) g.add(mesh(cyl(0.012, 0.006, 0.05, 6), metal, { pos: [0.2 + rand(-0.1, 0.1), h + 0.06, 0.2 + rand(-0.05, 0.05)], rot: [Math.PI / 2, rand(0, 3), 0] }));
  g.userData.bot = bot;
  return g;
}

export function gear(r, m, pos = [0, 0, 0]) {
  const g = group({ pos });
  g.add(mesh(cyl(r, r, 0.03, 20), m, { pos: [0, 0.015, 0] }));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    g.add(mesh(rbox(r * 0.35, 0.03, r * 0.35, 0.005), m, { pos: [Math.cos(a) * r, 0.015, Math.sin(a) * r], rot: [0, -a, 0] }));
  }
  g.add(mesh(cyl(r * 0.3, r * 0.3, 0.035, 12), mat('#7a5136'), { pos: [0, 0.016, 0] }));
  return g;
}

export function toolbox(color = '#6aa6e8') {
  const g = new THREE.Group();
  const m = mat(color, { roughness: 0.45, metalness: 0.1 });
  g.add(mesh(rbox(0.5, 0.24, 0.26, 0.04), m, { pos: [0, 0.12, 0] }));
  g.add(mesh(rbox(0.52, 0.04, 0.28, 0.015), mat('#4f86c6'), { pos: [0, 0.24, 0] }));
  g.add(mesh(torus(0.08, 0.015, 6, 14, Math.PI), mat('#3a3a3a'), { pos: [0, 0.26, 0] }));
  return g;
}

export function crate(color = '#d9a876', s = 0.5) {
  const g = new THREE.Group();
  const m = mat(color, { roughness: 0.85 });
  g.add(mesh(rbox(s, s * 0.8, s, 0.03), m, { pos: [0, s * 0.4, 0] }));
  const slat = mat('#c08a58', { roughness: 0.85 });
  for (const y of [0.15, 0.55]) g.add(mesh(rbox(s + 0.02, 0.06, s + 0.02, 0.015), slat, { pos: [0, s * y + 0.02, 0] }));
  return g;
}

// ------------------------------------------------------------------ lamps
export function floorLamp(shade = '#fff0d6') {
  const g = new THREE.Group();
  g.add(mesh(rcyl(0.2, 0.05, 0.02, 24), mat('#c98454'), { pos: [0, 0.025, 0] }));
  g.add(mesh(cyl(0.025, 0.025, 1.45, 10), mat('#c98454'), { pos: [0, 0.75, 0] }));
  const shadeMat = uniqueMat(shade, { roughness: 0.9, emissive: '#ffcf8a', emissiveIntensity: 0, side: THREE.DoubleSide });
  const sh = mesh(new THREE.CylinderGeometry(0.2, 0.32, 0.36, 28, 1, true), shadeMat, { pos: [0, 1.5, 0] });
  g.add(sh);
  g.add(mesh(torus(0.32, 0.015, 6, 28), mat('#ffb59a'), { pos: [0, 1.32, 0], rot: [Math.PI / 2, 0, 0] }));
  const bulbMat = uniqueMat('#fff6dd', { emissive: '#ffd79a', emissiveIntensity: 0 });
  g.add(mesh(sphere(0.07, 12, 10), bulbMat, { pos: [0, 1.42, 0], cast: false }));
  const light = new THREE.PointLight('#ffc98a', 0, 6.5, 1.6);
  light.position.set(0, 1.35, 0);
  g.add(light);
  g.userData.lamp = { light, shadeMat, bulbMat, base: 5.5, on: true };
  return g;
}

export function bulbLamp() {
  const g = new THREE.Group();
  g.add(mesh(rcyl(0.14, 0.06, 0.02, 20), mat('#7aa6dc'), { pos: [0, 0.03, 0] }));
  g.add(mesh(cyl(0.02, 0.02, 0.3, 8), mat('#cbd5e1', { metalness: 0.4, roughness: 0.3 }), { pos: [0, 0.2, 0] }));
  const glass = uniqueMat('#fff7d6', { emissive: '#ffe08a', emissiveIntensity: 0, roughness: 0.2 });
  const bulb = mesh(smoothLathe([[0, 0], [0.06, 0.01], [0.07, 0.07], [0.15, 0.17], [0.15, 0.28], [0.08, 0.36], [0, 0.37]], 24, 20, 'bulb'), glass, { pos: [0, 0.35, 0] });
  g.add(bulb);
  g.add(mesh(cyl(0.065, 0.065, 0.06, 14), mat('#cbd5e1', { metalness: 0.5, roughness: 0.35 }), { pos: [0, 0.36, 0] }));
  const light = new THREE.PointLight('#ffe7a8', 0, 4.5, 1.6);
  light.position.set(0, 0.6, 0);
  g.add(light);
  g.userData.lamp = { light, shadeMat: glass, bulbMat: glass, base: 3, on: true };
  return g;
}

export function sideTable(color = '#ffd0b5', h = 0.5) {
  const g = new THREE.Group();
  g.add(mesh(rcyl(0.3, 0.06, 0.025, 28), mat(color, { roughness: 0.6 }), { pos: [0, h, 0] }));
  g.add(mesh(cyl(0.04, 0.05, h, 10), mat(COLORS.woodLight), { pos: [0, h / 2, 0] }));
  g.add(mesh(rcyl(0.18, 0.04, 0.015, 20), mat(COLORS.woodLight), { pos: [0, 0.02, 0] }));
  return g;
}

// ------------------------------------------------------------------ music
/** Gramophone with a flower-shaped horn. The record spins while music plays. */
export function gramophone() {
  const g = new THREE.Group();
  const wood = mat('#c98454', { roughness: 0.5 });
  g.add(mesh(rbox(0.9, 0.5, 0.6, 0.06), wood, { pos: [0, 0.25, 0] }));
  for (const sx of [-1, 1]) g.add(mesh(rbox(0.3, 0.3, 0.02, 0.04), mat('#e3a46f'), { pos: [sx * 0.2, 0.25, 0.305] }));
  const box = mesh(rbox(0.56, 0.16, 0.48, 0.04), mat('#e3a46f'), { pos: [0, 0.58, 0] });
  g.add(box);
  const record = group({ pos: [-0.04, 0.67, 0.02] });
  record.add(mesh(cyl(0.2, 0.2, 0.012, 32), mat('#2b2523', { roughness: 0.25 })));
  record.add(mesh(cyl(0.07, 0.07, 0.014, 20), mat('#ff8f7a', { roughness: 0.5 })));
  g.add(record);
  // horn
  const brass = mat('#f2c14e', { roughness: 0.25, metalness: 0.65 });
  const neck = new THREE.CatmullRomCurve3([new THREE.Vector3(0.2, 0.66, -0.12), new THREE.Vector3(0.24, 0.85, -0.16), new THREE.Vector3(0.18, 1.0, -0.1), new THREE.Vector3(0.08, 1.06, 0.02)]);
  g.add(mesh(new THREE.TubeGeometry(neck, 16, 0.035, 8, false), brass));
  const hornGeo = new THREE.LatheGeometry(
    Array.from({ length: 14 }, (_, i) => {
      const t = i / 13;
      return new THREE.Vector2(0.035 + Math.pow(t, 2.4) * 0.34, t * 0.5);
    }),
    10
  );
  // scallop the rim (flower petals)
  const p = hornGeo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i);
    if (y > 0.3) {
      const a = Math.atan2(p.getZ(i), p.getX(i));
      const k = 1 + Math.sin(a * 5) * 0.06 * ((y - 0.3) / 0.2);
      p.setX(i, p.getX(i) * k);
      p.setZ(i, p.getZ(i) * k);
    }
  }
  hornGeo.computeVertexNormals();
  const horn = mesh(hornGeo, mat('#ff9fb2', { roughness: 0.45, side: THREE.DoubleSide }), { pos: [0.06, 1.06, 0.04], rot: [1.1, 0, 0.15] });
  g.add(horn);
  g.add(mesh(torus(0.37, 0.02, 6, 30), brass, { pos: [0.06 + 0.07, 1.06 + 0.22, 0.04 + 0.45], rot: [1.1 - Math.PI / 2, 0, 0.15] }));
  g.userData.record = record;
  g.userData.horn = horn;
  return g;
}

// ------------------------------------------------------------------ easel
export function easel(drawFn) {
  const g = new THREE.Group();
  const wood = mat(COLORS.woodLight, { roughness: 0.6 });
  g.add(mesh(rbox(0.05, 1.4, 0.05, 0.02), wood, { pos: [-0.3, 0.68, 0.05], rot: [0.08, 0, -0.12] }));
  g.add(mesh(rbox(0.05, 1.4, 0.05, 0.02), wood, { pos: [0.3, 0.68, 0.05], rot: [0.08, 0, 0.12] }));
  g.add(mesh(rbox(0.05, 1.3, 0.05, 0.02), wood, { pos: [0, 0.62, -0.3], rot: [-0.35, 0, 0] }));
  g.add(mesh(rbox(0.8, 0.05, 0.12, 0.02), wood, { pos: [0, 0.55, 0.1] }));
  const c = makeCanvas(256, 200);
  drawFn?.(c.getContext('2d'), 256, 200);
  const canvasMesh = new THREE.Mesh(rbox(0.8, 0.62, 0.03, 0.01), [mat('#fff'), mat('#fff'), mat('#fff'), mat('#fff'), texMat(canvasTexture(c), { roughness: 0.8 }), mat('#fff')]);
  canvasMesh.position.set(0, 0.9, 0.12);
  canvasMesh.rotation.x = -0.08;
  canvasMesh.castShadow = true;
  g.add(canvasMesh);
  g.userData.canvas = c;
  g.userData.canvasMesh = canvasMesh;
  return g;
}

// ------------------------------------------------------------------ door-side things
export function welcomeMat(text = 'hi!') {
  const g = new THREE.Group();
  const c = makeCanvas(256, 160);
  const x = c.getContext('2d');
  x.fillStyle = '#d9a26e';
  roundRect(x, 0, 0, 256, 160, 30);
  x.fill();
  x.strokeStyle = '#b97f4b';
  x.lineWidth = 6;
  roundRect(x, 10, 10, 236, 140, 22);
  x.stroke();
  x.fillStyle = '#7a4b2c';
  x.font = `600 64px Fredoka, sans-serif`;
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.fillText(text, 128, 84);
  const tex = canvasTexture(c);
  g.add(mesh(rbox(1.1, 0.025, 0.7, 0.01), [mat('#d9a26e'), mat('#d9a26e'), texMat(tex, { roughness: 1 }), mat('#d9a26e'), mat('#d9a26e'), mat('#d9a26e')], { pos: [0, 0.014, 0], cast: false }));
  return g;
}

export function umbrellaStand() {
  const g = new THREE.Group();
  g.add(mesh(rcyl(0.15, 0.4, 0.03, 20), mat('#9fd3c7', { roughness: 0.5 }), { pos: [0, 0.2, 0] }));
  const cols = ['#ff9db5', '#ffd36b'];
  cols.forEach((c, i) => {
    const u = group({ pos: [(i - 0.5) * 0.08, 0.35, 0], rot: [0, 0, (i - 0.5) * 0.3] });
    u.add(mesh(cyl(0.012, 0.012, 0.7, 6), mat('#5a4036'), { pos: [0, 0.3, 0] }));
    u.add(mesh(cyl(0.02, 0.07, 0.42, 8), mat(c, { roughness: 0.8 }), { pos: [0, 0.32, 0] }));
    u.add(mesh(torus(0.04, 0.012, 6, 12, Math.PI), mat('#5a4036'), { pos: [0.04, 0.66, 0], rot: [0, 0, 0] }));
    g.add(u);
  });
  return g;
}

export function shoeBench(w = 1.3) {
  const g = new THREE.Group();
  const wood = mat('#e3a46f', { roughness: 0.6 });
  g.add(mesh(rbox(w, 0.06, 0.42, 0.02), wood, { pos: [0, 0.36, 0] }));
  g.add(mesh(rbox(w, 0.04, 0.4, 0.015), wood, { pos: [0, 0.1, 0] }));
  for (const s of [-1, 1]) g.add(mesh(rbox(0.06, 0.38, 0.4, 0.02), wood, { pos: [s * (w / 2 - 0.03), 0.19, 0] }));
  g.add(mesh(cushion(w - 0.1, 0.08, 0.38, 0.5), mat('#ffc4cf', { roughness: 0.95 }), { pos: [0, 0.42, 0] }));
  // tiny boots (critter-sized!)
  const cols = ['#ff9a8c', '#95c8f4', '#ffd977'];
  cols.forEach((c, i) => {
    for (const s of [-1, 1]) g.add(mesh(sphere(0.07, 12, 8), mat(c, { roughness: 0.6 }), { pos: [-w / 2 + 0.25 + i * 0.4 + s * 0.07, 0.15, 0.04], scale: [0.85, 0.6, 1.25] }));
  });
  return g;
}

export function basket(color = '#e2b47c') {
  const g = new THREE.Group();
  const m = mat(color, { roughness: 0.9 });
  g.add(mesh(smoothLathe([[0, 0], [0.22, 0], [0.27, 0.12], [0.28, 0.22], [0.26, 0.22]], 24, 14, 'basket'), m));
  g.add(mesh(torus(0.27, 0.025, 6, 24), mat('#c8945a'), { pos: [0, 0.22, 0], rot: [Math.PI / 2, 0, 0] }));
  return g;
}

export function yarnBasket() {
  const g = basket();
  const cols = ['#ff9db5', '#9fdcc0', '#ffd36b'];
  cols.forEach((c, i) => g.add(mesh(sphere(0.1, 12, 10), mat(c, { roughness: 1 }), { pos: [(i - 1) * 0.11, 0.24, (i % 2) * 0.05] })));
  return g;
}

export { bookStack, jar, tinyRobot, trophy };
