// Post Room props: the mailbox, cubbies, sorting desk, letter wall.
import * as THREE from 'three';
import { mat, uniqueMat, texMat, COLORS } from '../../gfx/materials.js';
import { rbox, cyl, rcyl, sphere, torus, mesh, group, plane, capsule, smoothLathe } from '../../gfx/geo.js';
import { makeCanvas, canvasTexture, roundRect, wrapText } from '../../gfx/textures.js';
import { mulberry32, pick, rand, TAU } from '../../core/util.js';

const ENVELOPES = ['#fff3e0', '#ffe4ec', '#e6f3ff', '#eafbe6', '#fff8d6'];

export function envelope(color = '#fff3e0', s = 1) {
  const g = new THREE.Group();
  g.add(mesh(rbox(0.3 * s, 0.2 * s, 0.015, 0.008), mat(color, { roughness: 0.85 })));
  const flap = new THREE.BufferGeometry();
  flap.setAttribute('position', new THREE.Float32BufferAttribute([-0.15 * s, 0.1 * s, 0, 0.15 * s, 0.1 * s, 0, 0, -0.02 * s, 0], 3));
  flap.setAttribute('normal', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1, 0, 0, 1], 3));
  flap.setAttribute('uv', new THREE.Float32BufferAttribute([0, 1, 1, 1, 0.5, 0], 2));
  g.add(mesh(flap, mat(new THREE.Color(color).offsetHSL(0, 0, -0.05).getStyle(), { side: THREE.DoubleSide }), { pos: [0, 0, 0.009] }));
  g.add(mesh(sphere(0.022 * s, 10, 8), mat('#e6455e', { roughness: 0.5 }), { pos: [0, 0.0, 0.012], scale: [1, 1, 0.35] }));
  return g;
}

export function mailbox() {
  const g = new THREE.Group();
  const red = mat('#f07462', { roughness: 0.45 });
  const dark = mat('#5a3a36', { roughness: 0.6 });
  g.add(mesh(rcyl(0.17, 0.12, 0.03, 20), dark, { pos: [0, 0.06, 0] }));
  g.add(mesh(cyl(0.07, 0.09, 0.25, 12), dark, { pos: [0, 0.22, 0] }));
  g.add(mesh(smoothLathe([[0, 0], [0.38, 0], [0.42, 0.06], [0.42, 0.62], [0.36, 0.82], [0.2, 0.93], [0, 0.96]], 32, 24, 'mailbox'), red, { pos: [0, 0.32, 0] }));
  g.add(mesh(torus(0.42, 0.025, 8, 32), mat('#ffd6a0', { roughness: 0.4 }), { pos: [0, 0.62, 0], rot: [Math.PI / 2, 0, 0] }));
  // slot
  g.add(mesh(rbox(0.36, 0.06, 0.08, 0.025), mat('#2a1a18'), { pos: [0, 0.98, 0.37], rot: [-0.25, 0, 0] }));
  g.add(mesh(rbox(0.42, 0.04, 0.1, 0.02), mat('#ffd6a0'), { pos: [0, 1.03, 0.37], rot: [-0.25, 0, 0] }));
  // heart badge
  g.add(mesh(sphere(0.06, 12, 10), mat('#fff3e0'), { pos: [0, 0.6, 0.41], scale: [1, 1, 0.35] }));
  g.add(mesh(sphere(0.025, 8, 6), mat('#f07462'), { pos: [-0.016, 0.61, 0.43], scale: [1, 1, 0.4] }));
  g.add(mesh(sphere(0.025, 8, 6), mat('#f07462'), { pos: [0.016, 0.61, 0.43], scale: [1, 1, 0.4] }));
  // flag
  const flag = new THREE.Group();
  flag.position.set(0.43, 0.75, 0);
  flag.add(mesh(rbox(0.03, 0.4, 0.03, 0.01), mat('#ffd6a0'), { pos: [0, 0.2, 0] }));
  flag.add(mesh(rbox(0.03, 0.14, 0.2, 0.02), mat('#ffd36b'), { pos: [0, 0.33, 0.1] }));
  g.add(flag);
  g.userData.flag = flag;
  return g;
}

export function cubbies({ cols = 4, rows = 4, w = 2.0, h = 1.8, d = 0.45, seed = 3 } = {}) {
  const g = new THREE.Group();
  const wood = mat('#e3a46f', { roughness: 0.6 });
  const back = mat('#f3cfa8', { roughness: 0.8 });
  const t = 0.05;
  g.add(mesh(rbox(w, h, 0.04, 0.01), back, { pos: [0, h / 2 + 0.1, -d / 2 + 0.02] }));
  for (let i = 0; i <= cols; i++) g.add(mesh(rbox(t, h, d, 0.015), wood, { pos: [-w / 2 + (i * w) / cols, h / 2 + 0.1, 0] }));
  for (let j = 0; j <= rows; j++) g.add(mesh(rbox(w + t, t, d, 0.015), wood, { pos: [0, 0.1 + (j * h) / rows, 0] }));
  for (const s of [-1, 1]) g.add(mesh(rbox(0.08, 0.1, d * 0.8, 0.02), mat('#c98454'), { pos: [s * (w / 2 - 0.1), 0.05, 0] }));
  const rng = mulberry32(seed);
  const cw = w / cols;
  const ch = h / rows;
  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++) {
      const cx = -w / 2 + (i + 0.5) * cw;
      const cy = 0.1 + j * ch + t / 2;
      const r = rng();
      if (r < 0.55) {
        const n = 1 + Math.floor(rng() * 3);
        for (let k = 0; k < n; k++) {
          const e = envelope(ENVELOPES[Math.floor(rng() * ENVELOPES.length)], 0.9);
          e.rotation.set(-Math.PI / 2 + 0.25 + rng() * 0.3, 0, rng() * 0.3 - 0.15);
          e.position.set(cx + rng() * 0.1 - 0.05, cy + 0.02 + k * 0.025, 0.02);
          g.add(e);
        }
      } else if (r < 0.75) {
        g.add(mesh(rbox(cw * 0.6, ch * 0.5, d * 0.6, 0.03), mat(pick(['#d9a876', '#e8bb88', '#c99a6a']), { roughness: 0.85 }), { pos: [cx, cy + ch * 0.25, 0] }));
        g.add(mesh(rbox(cw * 0.61, 0.025, d * 0.61, 0.008), mat('#ff8fa8'), { pos: [cx, cy + ch * 0.35, 0] }));
      } else if (r < 0.85) {
        const rolled = mesh(capsule(0.05, cw * 0.5, 4, 10), mat('#fff3e0', { roughness: 0.85 }), { pos: [cx, cy + 0.06, 0], rot: [0, 0, Math.PI / 2] });
        g.add(rolled);
      }
    }
  // brass labels
  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++) g.add(mesh(rbox(0.12, 0.035, 0.01, 0.005), mat(COLORS.brass, { metalness: 0.5, roughness: 0.35 }), { pos: [-w / 2 + (i + 0.5) * cw, 0.1 + j * ch + 0.04, d / 2 + 0.005] }));
  return g;
}

export function sortingDesk() {
  const g = new THREE.Group();
  const wood = mat('#e3a46f', { roughness: 0.55 });
  const w = 1.7;
  const d = 0.75;
  const h = 0.56;
  g.add(mesh(rbox(w, 0.07, d, 0.025), wood, { pos: [0, h, 0] }));
  for (const s of [-1, 1]) g.add(mesh(rbox(0.5, h, d - 0.05, 0.03), mat('#d39a62'), { pos: [s * (w / 2 - 0.27), h / 2, 0] }));
  for (const s of [-1, 1]) for (let k = 0; k < 3; k++) g.add(mesh(sphere(0.022, 8, 6), mat(COLORS.brass, { metalness: 0.5 }), { pos: [s * (w / 2 - 0.27), 0.1 + k * 0.16, d / 2 - 0.01] }));
  // letter trays
  for (let k = 0; k < 3; k++) {
    const tray = group({ pos: [-0.45, h + 0.05 + k * 0.1, -0.1] });
    tray.add(mesh(rbox(0.5, 0.025, 0.38, 0.01), mat('#9fd3c7', { roughness: 0.5 })));
    for (let e = 0; e < 3; e++) tray.add(mesh(rbox(0.36, 0.012, 0.25, 0.004), mat(pick(ENVELOPES)), { pos: [rand(-0.03, 0.03), 0.02 + e * 0.012, rand(-0.02, 0.02)], rot: [0, rand(-0.2, 0.2), 0] }));
    for (const s of [-1, 1]) tray.add(mesh(rbox(0.03, 0.1, 0.03, 0.01), mat('#9fd3c7'), { pos: [s * 0.22, -0.05, 0.15] }));
    g.add(tray);
  }
  // stamp + ink pad
  g.add(mesh(rbox(0.22, 0.04, 0.15, 0.015), mat('#4a6fa5', { roughness: 0.6 }), { pos: [0.35, h + 0.055, 0.12] }));
  const stamp = group({ pos: [0.55, h + 0.04, 0.0] });
  stamp.add(mesh(rbox(0.12, 0.04, 0.12, 0.01), mat('#ffb59a')));
  stamp.add(mesh(cyl(0.025, 0.025, 0.1, 10), mat(COLORS.woodLight), { pos: [0, 0.07, 0] }));
  stamp.add(mesh(sphere(0.045, 12, 10), mat('#c98454'), { pos: [0, 0.14, 0] }));
  g.add(stamp);
  // a scale
  const scale = group({ pos: [0.5, h + 0.04, -0.22] });
  scale.add(mesh(rbox(0.22, 0.06, 0.18, 0.02), mat('#cbd5e1', { metalness: 0.3, roughness: 0.35 })));
  scale.add(mesh(rcyl(0.11, 0.015, 0.006, 20), mat('#e6eef7', { metalness: 0.4, roughness: 0.3 }), { pos: [0, 0.05, 0] }));
  scale.add(mesh(rbox(0.12, 0.08, 0.1, 0.02), mat('#d9a876'), { pos: [0, 0.1, 0] }));
  g.add(scale);
  g.userData.stamp = stamp;
  return g;
}

/** A wall of pinned "sent" letters; updated live. */
export function letterWall(w = 2.6, h = 1.4) {
  const g = new THREE.Group();
  const frame = mat('#c98d5d', { roughness: 0.6 });
  g.add(mesh(rbox(w + 0.14, h + 0.14, 0.06, 0.04), frame, { pos: [0, 0, 0.03] }));
  g.add(mesh(rbox(w, h, 0.02, 0.01), mat('#fff3e3', { roughness: 0.95 }), { pos: [0, 0, 0.065] }));
  // string lines
  for (let j = 0; j < 3; j++) {
    const y = h / 2 - 0.25 - j * 0.45;
    const pts = [];
    for (let i = 0; i <= 10; i++) pts.push(new THREE.Vector3(-w / 2 + 0.05 + (i / 10) * (w - 0.1), y - Math.sin((i / 10) * Math.PI) * 0.06, 0.09));
    g.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 20, 0.006, 4), mat('#c4a484'), { cast: false }));
  }
  const pinned = new THREE.Group();
  g.add(pinned);
  g.userData = { pinned, w, h };
  return g;
}

export function letterCard(text, color = '#fff3e0') {
  const c = makeCanvas(256, 176);
  const x = c.getContext('2d');
  x.fillStyle = color;
  x.fillRect(0, 0, 256, 176);
  x.strokeStyle = '#e8c9a8';
  x.lineWidth = 6;
  x.strokeRect(8, 8, 240, 160);
  x.fillStyle = '#ff8fa8';
  x.fillRect(196, 18, 40, 46);
  x.fillStyle = '#fff';
  x.fillRect(201, 23, 30, 36);
  x.fillStyle = '#ff8fa8';
  x.beginPath();
  x.arc(216, 41, 9, 0, TAU);
  x.fill();
  x.fillStyle = '#5a4036';
  x.font = `28px 'Patrick Hand', cursive`;
  const lines = wrapText(x, text, 170, 4);
  lines.forEach((l, i) => x.fillText(l, 20, 50 + i * 30));
  const g = new THREE.Group();
  const m = mat(color);
  g.add(mesh(rbox(0.38, 0.26, 0.01, 0.004), [m, m, m, m, texMat(canvasTexture(c), { roughness: 0.9 }), m]));
  g.add(mesh(rbox(0.04, 0.08, 0.02, 0.005), mat('#d9a876'), { pos: [0, 0.13, 0.012] }));
  g.rotation.z = rand(-0.1, 0.1);
  return g;
}

export function bench(w = 1.4, color = '#9fd3c7') {
  const g = new THREE.Group();
  const wood = mat('#e3a46f', { roughness: 0.6 });
  g.add(mesh(rbox(w, 0.08, 0.45, 0.03), wood, { pos: [0, 0.34, 0] }));
  for (const s of [-1, 1]) for (const z of [-1, 1]) g.add(mesh(rbox(0.07, 0.34, 0.07, 0.02), mat('#c98454'), { pos: [s * (w / 2 - 0.1), 0.17, z * 0.15] }));
  g.add(mesh(rbox(w, 0.42, 0.07, 0.03), wood, { pos: [0, 0.62, -0.2], rot: [-0.12, 0, 0] }));
  g.add(mesh(rbox(w - 0.1, 0.07, 0.4, 0.03), mat(color, { roughness: 0.95 }), { pos: [0, 0.41, 0.01] }));
  return g;
}

export function tube(points, color = '#cbd5e1') {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  const g = new THREE.Group();
  g.add(mesh(new THREE.TubeGeometry(curve, 64, 0.07, 12, false), mat(color, { roughness: 0.25, metalness: 0.35 })));
  const pod = mesh(capsule(0.05, 0.1, 6, 10), mat('#ffd36b', { roughness: 0.4, metalness: 0.2 }), {});
  pod.visible = false;
  g.add(pod);
  g.userData = { curve, pod };
  return g;
}
