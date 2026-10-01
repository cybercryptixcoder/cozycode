// Wall-mounted things: windows, doors, boards, frames, clocks, lights...
import * as THREE from 'three';
import { mat, uniqueMat, texMat, COLORS } from '../../gfx/materials.js';
import { rbox, cyl, rcyl, sphere, torus, mesh, group, plane, circle, capsule } from '../../gfx/geo.js';
import { corkTexture, noteTexture, makeCanvas, canvasTexture, roundRect, wrapText, labelTexture } from '../../gfx/textures.js';
import { rand, pick, clamp, mulberry32, TAU } from '../../core/util.js';

const T = 0.24;

// ------------------------------------------------------------------ windows
/**
 * Window furniture for an opening: frame, mullions, sill, curtains and the
 * painted outdoor view behind it. Returns the decor holder.
 */
export function addWindow(room, wall, o, view, opts = {}) {
  const frameMat = mat(opts.frame || '#fff8ef', { roughness: 0.6 });
  const g = new THREE.Group();
  const cy = o.y + o.h / 2;
  const kind = o.shape || 'rect';

  if (kind === 'round') {
    const r = Math.min(o.w, o.h) / 2;
    g.add(mesh(torus(r, 0.07, 10, 48), frameMat, { pos: [0, 0, 0.02] }));
    g.add(mesh(rbox(0.06, r * 2, 0.06, 0.02), frameMat, { pos: [0, 0, -0.06] }));
    g.add(mesh(rbox(r * 2, 0.06, 0.06, 0.02), frameMat, { pos: [0, 0, -0.06] }));
    // inner reveal ring
    const reveal = new THREE.Mesh(new THREE.CylinderGeometry(r, r, T, 48, 1, true), mat('#fff3e3', { side: THREE.BackSide, roughness: 0.8 }));
    reveal.rotation.x = Math.PI / 2;
    reveal.position.z = -T / 2;
    g.add(reveal);
  } else {
    const w = o.w;
    const h = o.h;
    const arch = kind === 'arch';
    // frame as an extruded outline around the hole
    const outer = new THREE.Shape();
    const inner = new THREE.Path();
    const b = 0.09;
    const rr = w / 2;
    if (arch) {
      outer.moveTo(-w / 2 - b, -h / 2 - b);
      outer.lineTo(w / 2 + b, -h / 2 - b);
      outer.lineTo(w / 2 + b, h / 2 - rr);
      outer.absarc(0, h / 2 - rr, rr + b, 0, Math.PI, false);
      outer.lineTo(-w / 2 - b, -h / 2 - b);
      inner.moveTo(-w / 2, -h / 2);
      inner.lineTo(w / 2, -h / 2);
      inner.lineTo(w / 2, h / 2 - rr);
      inner.absarc(0, h / 2 - rr, rr, 0, Math.PI, false);
      inner.lineTo(-w / 2, -h / 2);
    } else {
      outer.moveTo(-w / 2 - b, -h / 2 - b);
      outer.lineTo(w / 2 + b, -h / 2 - b);
      outer.lineTo(w / 2 + b, h / 2 + b);
      outer.lineTo(-w / 2 - b, h / 2 + b);
      inner.moveTo(-w / 2, -h / 2);
      inner.lineTo(w / 2, -h / 2);
      inner.lineTo(w / 2, h / 2);
      inner.lineTo(-w / 2, h / 2);
    }
    outer.holes.push(inner);
    const fg = new THREE.ExtrudeGeometry(outer, { depth: 0.06, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2, curveSegments: 24 });
    g.add(mesh(fg, frameMat, { pos: [0, 0, 0.0] }));
    // mullions
    const mz = -T * 0.5;
    g.add(mesh(rbox(0.05, arch ? h - 0.02 : h, 0.05, 0.015), frameMat, { pos: [0, 0, mz] }));
    g.add(mesh(rbox(w, 0.05, 0.05, 0.015), frameMat, { pos: [0, arch ? -h * 0.08 : 0, mz] }));
    // reveal (inner sides of the opening)
    const revealMat = mat('#fff3e3', { roughness: 0.85 });
    g.add(mesh(rbox(w, 0.02, T, 0.005), revealMat, { pos: [0, -h / 2 + 0.01, -T / 2], cast: false }));
    // sill
    g.add(mesh(rbox(w + 0.36, 0.08, 0.3, 0.03), frameMat, { pos: [0, -h / 2 - 0.08, 0.1] }));
    if (opts.planter !== false) g.add(planterBox(w * 0.7, opts.flowers));
    g.children[g.children.length - 1].position.set(0, -h / 2 - 0.04, 0.12);
  }

  // outdoor view (unlit so it reads as bright daylight)
  if (view) {
    // a small backdrop just behind the opening (kept below the wall top so
    // it never peeks over the wall from the elevated camera)
    const vw = Math.max(o.w, o.h) + 0.7;
    const vmat = new THREE.MeshBasicMaterial({ map: view.texture, toneMapped: true });
    const vp = new THREE.Mesh(plane(vw, vw), vmat);
    vp.position.z = -T - 0.28;
    vp.userData.noAO = true;
    vp.castShadow = false;
    g.add(vp);
  }

  // curtains
  if (opts.curtains !== false && kind !== 'round') {
    const cw = o.w * 0.42;
    const ch = o.h + 0.25;
    const ccol = opts.curtain || '#ffb7a3';
    const cm = mat(ccol, { roughness: 0.95, side: THREE.DoubleSide });
    for (const side of [-1, 1]) {
      const c = curtain(cw, ch, cm);
      c.position.set(side * (o.w / 2 + 0.06), o.h / 2 + 0.15, 0.12);
      g.add(c);
      // tie-back bow
      g.add(mesh(sphere(0.05, 10, 8), mat(opts.tie || '#fff1d6'), { pos: [side * (o.w / 2 + 0.06), -0.05, 0.2], scale: [1.4, 0.8, 0.8] }));
    }
    // rod
    g.add(mesh(cyl(0.025, 0.025, o.w + 0.9, 10), mat(COLORS.woodDark, { roughness: 0.5 }), { pos: [0, o.h / 2 + 0.2, 0.14], rot: [0, 0, Math.PI / 2] }));
    for (const side of [-1, 1]) g.add(mesh(sphere(0.05, 12, 10), mat(COLORS.woodDark, { roughness: 0.5 }), { pos: [side * (o.w / 2 + 0.47), o.h / 2 + 0.2, 0.14] }));
  }

  const holder = wall.add(g, o.x, cy, 0, { order: cy });
  room.windows.push({ wall, opening: o, holder });
  return holder;
}

function curtain(w, h, m) {
  const geo = new THREE.PlaneGeometry(w, h, 28, 10);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const y = p.getY(i);
    const t = (y + h / 2) / h; // 0 bottom .. 1 top
    // gathered toward the middle at a tie-back height, flaring at the bottom
    const pinch = 1 - 0.55 * Math.exp(-Math.pow((t - 0.42) / 0.12, 2));
    const nx = x * pinch * (0.85 + 0.15 * t);
    const fold = Math.sin((x / w) * Math.PI * 7) * 0.035 * (0.6 + 0.4 * (1 - t));
    p.setX(i, nx);
    p.setZ(i, fold);
    p.setY(i, y - h / 2);
  }
  geo.computeVertexNormals();
  const c = new THREE.Mesh(geo, m);
  c.castShadow = true;
  c.receiveShadow = true;
  return c;
}

export function planterBox(w, flowers = ['#ff9db5', '#ffd36b', '#fff4f0', '#c7a8f2']) {
  const g = group({});
  g.add(mesh(rbox(w, 0.14, 0.18, 0.03), mat('#e88c66', { roughness: 0.8 }), { pos: [0, 0.07, 0] }));
  g.add(mesh(rbox(w - 0.04, 0.02, 0.14, 0.01), mat('#7a5136'), { pos: [0, 0.14, 0] }));
  const n = Math.round(w / 0.12);
  const rng = mulberry32(Math.round(w * 100));
  for (let i = 0; i < n; i++) {
    const x = -w / 2 + 0.08 + (i / Math.max(1, n - 1)) * (w - 0.16);
    g.add(mesh(cyl(0.008, 0.008, 0.16), mat(COLORS.leafDark), { pos: [x, 0.2, rng() * 0.06 - 0.03] }));
    g.add(mesh(sphere(0.045, 10, 8), mat(flowers[i % flowers.length], { roughness: 0.6 }), { pos: [x, 0.29 + rng() * 0.04, rng() * 0.06 - 0.03], scale: [1, 0.7, 1] }));
    g.add(mesh(sphere(0.035, 8, 6), mat(COLORS.leaf), { pos: [x + 0.04, 0.18, 0.02], scale: [1.4, 0.6, 1] }));
  }
  return g;
}

// ------------------------------------------------------------------ door
export function addDoor(room, wall, o, opts = {}) {
  const wood = mat(opts.color || '#e0915f', { roughness: 0.6 });
  const woodDark = mat(opts.trim || '#b8683f', { roughness: 0.6 });
  const g = new THREE.Group();
  const w = o.w;
  const h = o.h;
  const r = w / 2;
  // frame
  const outer = new THREE.Shape();
  const b = 0.12;
  outer.moveTo(-w / 2 - b, 0);
  outer.lineTo(-w / 2, 0);
  outer.lineTo(-w / 2, h - r);
  outer.absarc(0, h - r, r, Math.PI, 0, true);
  outer.lineTo(w / 2, 0);
  outer.lineTo(w / 2 + b, 0);
  outer.lineTo(w / 2 + b, h - r);
  outer.absarc(0, h - r, r + b, 0, Math.PI, false);
  outer.lineTo(-w / 2 - b, 0);
  const fg = new THREE.ExtrudeGeometry(outer, { depth: 0.07, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2, curveSegments: 24 });
  g.add(mesh(fg, woodDark));

  // door leaf, hinged on the left
  const leafShape = new THREE.Shape();
  const lw = w - 0.04;
  leafShape.moveTo(0, 0);
  leafShape.lineTo(lw, 0);
  leafShape.lineTo(lw, h - r - 0.02);
  leafShape.absarc(lw / 2, h - r - 0.02, lw / 2, 0, Math.PI, false);
  leafShape.lineTo(0, 0);
  // little round window
  const hole = new THREE.Path();
  hole.absarc(lw / 2, h - r - 0.05, 0.17, 0, TAU, false);
  leafShape.holes.push(hole);
  const leafGeo = new THREE.ExtrudeGeometry(leafShape, { depth: 0.08, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.015, bevelSegments: 2, curveSegments: 24 });
  const hinge = new THREE.Group();
  hinge.position.set(-lw / 2, 0.01, -T * 0.55);
  const leaf = mesh(leafGeo, wood);
  hinge.add(leaf);
  // panels
  for (const py of [0.35, 0.95]) leaf.add(mesh(rbox(lw * 0.62, 0.42, 0.03, 0.04), woodDark, { pos: [lw / 2, py, 0.1] }));
  leaf.add(mesh(torus(0.17, 0.03, 8, 28), mat('#ffe7b0', { roughness: 0.4, metalness: 0.3 }), { pos: [lw / 2, h - r - 0.05, 0.1] }));
  // knob
  leaf.add(mesh(sphere(0.05, 14, 10), mat(COLORS.brass, { roughness: 0.3, metalness: 0.7 }), { pos: [lw - 0.12, 0.95, 0.14] }));
  g.add(hinge);
  // the world behind the door (a warm corridor glow)
  const behind = new THREE.Mesh(plane(w + 0.4, h + 0.4), new THREE.MeshBasicMaterial({ color: opts.behind || '#ffe1b8' }));
  behind.position.set(0, h / 2, -T - 0.3);
  behind.userData.noAO = true;
  g.add(behind);
  // sign above
  if (opts.sign) {
    const signTex = labelTexture(opts.sign, { w: 512, h: 128, bg: '#fff3df', color: '#8a5536', size: 54 });
    const sign = mesh(rbox(0.95, 0.24, 0.05, 0.05), [mat('#c98d5d'), mat('#c98d5d'), mat('#c98d5d'), mat('#c98d5d'), texMat(signTex), mat('#c98d5d')], { pos: [0, h + 0.32, 0.06] });
    g.add(sign);
  }

  const holder = wall.add(g, o.x, 0, 0, { order: 0.3 });
  const door = { wall, opening: o, holder, hinge, open: 0, target: 0, to: o.to, leaf };
  room.doors.push(door);
  room.onUpdate((dt) => {
    door.open += (door.target - door.open) * (1 - Math.exp(-6 * dt));
    hinge.rotation.y = -door.open * 1.55;
  });
  return door;
}

// ------------------------------------------------------------------ boards
/** Cork idea board; notes are added/removed live. */
export function makeCorkBoard(w = 2.6, h = 1.5) {
  const g = new THREE.Group();
  const frame = mat('#c98d5d', { roughness: 0.6 });
  const corkTex = corkTexture();
  corkTex.repeat.set(w / 1.2, h / 1.2);
  const cork = texMat(corkTex, { roughness: 0.95 });
  g.add(mesh(rbox(w + 0.16, h + 0.16, 0.08, 0.05), frame, { pos: [0, 0, 0.04] }));
  g.add(mesh(rbox(w, h, 0.03, 0.01), cork, { pos: [0, 0, 0.085] }));
  const notes = new THREE.Group();
  notes.position.z = 0.1;
  g.add(notes);
  // red yarn connecting a few notes
  const yarn = new THREE.Group();
  yarn.position.z = 0.125;
  g.add(yarn);
  g.userData = { notes, yarn, w, h, slots: [] };
  // slot grid
  const cols = 5;
  const rows = 3;
  for (let j = 0; j < rows; j++)
    for (let i = 0; i < cols; i++)
      g.userData.slots.push({
        x: -w / 2 + 0.3 + (i + 0.5) * ((w - 0.6) / cols) + rand(-0.06, 0.06),
        y: h / 2 - 0.28 - (j + 0.5) * ((h - 0.5) / rows) + rand(-0.04, 0.04),
        used: null,
      });
  return g;
}

const PIN_COLORS = ['#ff6b6b', '#5aa9ff', '#ffd23f', '#7bd389', '#c38bff'];
export function noteMesh(text, color) {
  const g = new THREE.Group();
  const tex = noteTexture(text, color);
  const note = new THREE.Mesh(rbox(0.36, 0.36, 0.008, 0.004), [mat(color), mat(color), mat(color), mat(color), texMat(tex, { roughness: 0.9 }), mat(color)]);
  note.castShadow = true;
  g.add(note);
  g.add(mesh(sphere(0.03, 10, 8), mat(pick(PIN_COLORS), { roughness: 0.35 }), { pos: [0, 0.14, 0.02] }));
  g.rotation.z = rand(-0.12, 0.12);
  g.userData.tex = tex;
  return g;
}

/** Chalkboard with a live to-do list. */
export function makeChalkboard(w = 1.6, h = 1.15, title = 'today') {
  const g = new THREE.Group();
  const frame = mat('#c98d5d', { roughness: 0.6 });
  g.add(mesh(rbox(w + 0.14, h + 0.14, 0.07, 0.04), frame, { pos: [0, 0, 0.035] }));
  const c = makeCanvas(512, Math.round((512 * h) / w));
  const tex = canvasTexture(c);
  const board = new THREE.Mesh(plane(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 }));
  board.position.z = 0.075;
  board.receiveShadow = true;
  g.add(board);
  // chalk tray
  g.add(mesh(rbox(w * 0.8, 0.04, 0.12, 0.015), frame, { pos: [0, -h / 2 - 0.06, 0.1] }));
  g.add(mesh(capsule(0.012, 0.06, 4, 8), mat('#fff'), { pos: [-0.2, -h / 2 - 0.025, 0.1], rot: [0, 0, Math.PI / 2] }));
  g.add(mesh(capsule(0.012, 0.05, 4, 8), mat('#ffb3c1'), { pos: [-0.05, -h / 2 - 0.025, 0.12], rot: [0, 0.3, Math.PI / 2] }));
  g.userData.draw = (items) => drawChalk(c, tex, title, items);
  g.userData.draw([]);
  return g;
}

function drawChalk(c, tex, title, items) {
  const g = c.getContext('2d');
  const W = c.width;
  const H = c.height;
  g.fillStyle = '#3f5a4c';
  g.fillRect(0, 0, W, H);
  const rng = mulberry32(3);
  for (let i = 0; i < 40; i++) {
    g.fillStyle = `rgba(255,255,255,${rng() * 0.05})`;
    g.beginPath();
    g.ellipse(rng() * W, rng() * H, 20 + rng() * 60, 8 + rng() * 20, rng() * 3, 0, TAU);
    g.fill();
  }
  g.fillStyle = 'rgba(255,255,255,0.92)';
  g.font = `48px 'Patrick Hand', cursive`;
  g.textAlign = 'center';
  g.fillText(title, W / 2, 56);
  g.strokeStyle = 'rgba(255,255,255,0.6)';
  g.lineWidth = 3;
  g.beginPath();
  g.moveTo(W / 2 - 70, 70);
  g.quadraticCurveTo(W / 2, 78, W / 2 + 70, 68);
  g.stroke();
  g.textAlign = 'left';
  g.font = `32px 'Patrick Hand', cursive`;
  const list = items.slice(-6);
  if (!list.length) {
    g.fillStyle = 'rgba(255,255,255,0.45)';
    g.fillText('nothing yet ~ just vibes', 40, 130);
  }
  list.forEach((it, i) => {
    const y = 120 + i * 46;
    g.strokeStyle = 'rgba(255,255,255,0.85)';
    g.lineWidth = 3;
    g.strokeRect(36, y - 22, 24, 24);
    if (it.done) {
      g.beginPath();
      g.moveTo(40, y - 10);
      g.lineTo(48, y);
      g.lineTo(64, y - 28);
      g.strokeStyle = '#ffd6a0';
      g.stroke();
    }
    g.fillStyle = it.done ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.92)';
    const text = wrapText(g, it.text, W - 110, 1)[0] || '';
    g.fillText(text, 76, y);
    if (it.done) {
      g.fillRect(74, y - 10, g.measureText(text).width + 4, 2);
    }
  });
  // doodle
  g.strokeStyle = 'rgba(255,190,200,0.8)';
  g.lineWidth = 3;
  const hx = W - 60;
  const hy = H - 50;
  g.beginPath();
  g.moveTo(hx, hy + 12);
  g.bezierCurveTo(hx - 24, hy - 4, hx - 12, hy - 22, hx, hy - 8);
  g.bezierCurveTo(hx + 12, hy - 22, hx + 24, hy - 4, hx, hy + 12);
  g.stroke();
  tex.needsUpdate = true;
}

// ------------------------------------------------------------------ frames & art
export function pictureFrame(w, h, drawFn, frameColor = '#fff7ec') {
  const g = new THREE.Group();
  g.add(mesh(rbox(w + 0.1, h + 0.1, 0.05, 0.02), mat(frameColor, { roughness: 0.55 }), { pos: [0, 0, 0.025] }));
  const c = makeCanvas(256, Math.round((256 * h) / w));
  drawFn(c.getContext('2d'), c.width, c.height);
  const pic = new THREE.Mesh(plane(w - 0.04, h - 0.04), new THREE.MeshStandardMaterial({ map: canvasTexture(c), roughness: 0.6 }));
  pic.position.z = 0.052;
  g.add(pic);
  return g;
}

export const ART = {
  hills(g, W, H) {
    const grd = g.createLinearGradient(0, 0, 0, H);
    grd.addColorStop(0, '#bfe3ff');
    grd.addColorStop(1, '#fff1dc');
    g.fillStyle = grd;
    g.fillRect(0, 0, W, H);
    g.fillStyle = '#ffd36b';
    g.beginPath();
    g.arc(W * 0.72, H * 0.3, W * 0.1, 0, TAU);
    g.fill();
    g.fillStyle = '#9bd18c';
    g.beginPath();
    g.ellipse(W * 0.3, H, W * 0.6, H * 0.45, 0, 0, TAU);
    g.fill();
    g.fillStyle = '#7cc17a';
    g.beginPath();
    g.ellipse(W * 0.85, H * 1.05, W * 0.5, H * 0.4, 0, 0, TAU);
    g.fill();
  },
  heart(g, W, H) {
    g.fillStyle = '#fff1e6';
    g.fillRect(0, 0, W, H);
    g.fillStyle = '#ff8fa8';
    const s = W * 0.28;
    const x = W / 2;
    const y = H / 2;
    g.beginPath();
    g.moveTo(x, y + s * 0.85);
    g.bezierCurveTo(x - s * 1.25, y + s * 0.05, x - s * 0.95, y - s * 0.95, x, y - s * 0.38);
    g.bezierCurveTo(x + s * 0.95, y - s * 0.95, x + s * 1.25, y + s * 0.05, x, y + s * 0.85);
    g.fill();
  },
  critters(g, W, H) {
    g.fillStyle = '#fff6ea';
    g.fillRect(0, 0, W, H);
    const cols = ['#ffb18f', '#93dcbc', '#c4b0f2', '#ffd977'];
    cols.forEach((c, i) => {
      const x = W * (0.2 + i * 0.2);
      const y = H * 0.68;
      g.fillStyle = c;
      g.beginPath();
      g.ellipse(x, y, W * 0.085, H * 0.2, 0, 0, TAU);
      g.fill();
      g.fillStyle = '#2a1a15';
      g.beginPath();
      g.arc(x - W * 0.025, y - H * 0.03, 3, 0, TAU);
      g.arc(x + W * 0.025, y - H * 0.03, 3, 0, TAU);
      g.fill();
      g.strokeStyle = '#78b85e';
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(x, y - H * 0.2);
      g.lineTo(x + 3, y - H * 0.28);
      g.stroke();
    });
    g.fillStyle = '#8a6f62';
    g.font = `${Math.round(H * 0.12)}px 'Patrick Hand', cursive`;
    g.textAlign = 'center';
    g.fillText('the crew', W / 2, H * 0.2);
  },
  flower(g, W, H) {
    g.fillStyle = '#e9f6ff';
    g.fillRect(0, 0, W, H);
    g.strokeStyle = '#7cc17a';
    g.lineWidth = 6;
    g.beginPath();
    g.moveTo(W / 2, H);
    g.quadraticCurveTo(W * 0.45, H * 0.7, W / 2, H * 0.42);
    g.stroke();
    g.fillStyle = '#ff9db5';
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * TAU;
      g.beginPath();
      g.arc(W / 2 + Math.cos(a) * W * 0.12, H * 0.38 + Math.sin(a) * W * 0.12, W * 0.09, 0, TAU);
      g.fill();
    }
    g.fillStyle = '#ffd36b';
    g.beginPath();
    g.arc(W / 2, H * 0.38, W * 0.08, 0, TAU);
    g.fill();
  },
  stars(g, W, H) {
    g.fillStyle = '#4a4f8a';
    g.fillRect(0, 0, W, H);
    const rng = mulberry32(7);
    for (let i = 0; i < 40; i++) {
      g.fillStyle = `rgba(255,245,210,${0.4 + rng() * 0.6})`;
      g.beginPath();
      g.arc(rng() * W, rng() * H, 1 + rng() * 2.5, 0, TAU);
      g.fill();
    }
    g.fillStyle = '#ffe9a8';
    g.beginPath();
    g.arc(W * 0.7, H * 0.35, W * 0.14, 0, TAU);
    g.fill();
    g.fillStyle = '#4a4f8a';
    g.beginPath();
    g.arc(W * 0.76, H * 0.31, W * 0.12, 0, TAU);
    g.fill();
  },
  map(g, W, H) {
    g.fillStyle = '#fbefd5';
    g.fillRect(0, 0, W, H);
    g.strokeStyle = '#d6a473';
    g.setLineDash([6, 6]);
    g.lineWidth = 3;
    g.beginPath();
    g.moveTo(W * 0.15, H * 0.8);
    g.bezierCurveTo(W * 0.4, H * 0.2, W * 0.6, H * 0.9, W * 0.85, H * 0.25);
    g.stroke();
    g.setLineDash([]);
    g.strokeStyle = '#e8746a';
    g.lineWidth = 5;
    g.beginPath();
    g.moveTo(W * 0.8, H * 0.2);
    g.lineTo(W * 0.9, H * 0.3);
    g.moveTo(W * 0.9, H * 0.2);
    g.lineTo(W * 0.8, H * 0.3);
    g.stroke();
  },
};

// ------------------------------------------------------------------ clock
export function wallClock(r = 0.32) {
  const g = new THREE.Group();
  g.add(mesh(rcyl(r + 0.05, 0.08, 0.03, 40), mat('#ffb59a', { roughness: 0.5 }), { pos: [0, 0, 0.04], rot: [Math.PI / 2, 0, 0] }));
  const c = makeCanvas(256, 256);
  const x = c.getContext('2d');
  x.fillStyle = '#fffaf2';
  x.beginPath();
  x.arc(128, 128, 128, 0, TAU);
  x.fill();
  x.fillStyle = '#8a6f62';
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * TAU;
    x.beginPath();
    x.arc(128 + Math.sin(a) * 100, 128 - Math.cos(a) * 100, i % 3 === 0 ? 9 : 5, 0, TAU);
    x.fill();
  }
  const face = new THREE.Mesh(circle(r, 40), new THREE.MeshStandardMaterial({ map: canvasTexture(c), roughness: 0.6 }));
  face.position.z = 0.085;
  g.add(face);
  const handMat = mat('#5a4036', { roughness: 0.5 });
  const hour = new THREE.Group();
  hour.add(mesh(rbox(0.035, r * 0.55, 0.012, 0.01), handMat, { pos: [0, r * 0.25, 0] }));
  const minute = new THREE.Group();
  minute.add(mesh(rbox(0.025, r * 0.8, 0.012, 0.01), handMat, { pos: [0, r * 0.37, 0] }));
  hour.position.z = 0.095;
  minute.position.z = 0.105;
  g.add(hour, minute);
  g.add(mesh(sphere(0.03, 10, 8), mat('#ff8f7a'), { pos: [0, 0, 0.11] }));
  g.userData.update = (date) => {
    const h = date.getHours() % 12;
    const m = date.getMinutes();
    const s = date.getSeconds();
    hour.rotation.z = -((h + m / 60) / 12) * TAU;
    minute.rotation.z = -((m + s / 60) / 60) * TAU;
  };
  return g;
}

// ------------------------------------------------------------------ lights
/** String of fairy lights hanging between two wall-local points. */
export function fairyLights(length, sag = 0.25, count = 14, colors = ['#ffd27a', '#ffb3c6', '#bfe6ff', '#c9f2b8', '#ffe9a8']) {
  const g = new THREE.Group();
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    pts.push(new THREE.Vector3(-length / 2 + t * length, -Math.sin(t * Math.PI) * sag, 0.05));
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  g.add(mesh(new THREE.TubeGeometry(curve, 48, 0.008, 5, false), mat('#6b5a4e'), { cast: false }));
  const bulbs = [];
  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count;
    const p = curve.getPoint(t);
    const col = colors[i % colors.length];
    const m = uniqueMat(col, { emissive: col, emissiveIntensity: 1, roughness: 0.3 });
    const b = mesh(sphere(0.035, 10, 8), m, { pos: [p.x, p.y - 0.035, p.z + 0.01], scale: [1, 1.25, 1], cast: false });
    g.add(b);
    bulbs.push(b);
  }
  g.userData.bulbs = bulbs;
  return g;
}

/** Triangle flag bunting. */
export function bunting(length, sag = 0.3, colors = ['#ffb59a', '#ffe08a', '#9fdcc0', '#c7b6ee', '#ffc4cf']) {
  const g = new THREE.Group();
  const pts = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    pts.push(new THREE.Vector3(-length / 2 + t * length, -Math.sin(t * Math.PI) * sag, 0.06));
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  g.add(mesh(new THREE.TubeGeometry(curve, 40, 0.008, 5, false), mat('#fff1e0'), { cast: false }));
  const n = Math.floor(length / 0.28);
  const tri = new THREE.BufferGeometry();
  tri.setAttribute('position', new THREE.Float32BufferAttribute([-0.1, 0, 0, 0.1, 0, 0, 0, -0.2, 0], 3));
  tri.setAttribute('normal', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1, 0, 0, 1], 3));
  tri.setAttribute('uv', new THREE.Float32BufferAttribute([0, 1, 1, 1, 0.5, 0], 2));
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const p = curve.getPoint(t);
    const f = mesh(tri, mat(colors[i % colors.length], { side: THREE.DoubleSide, roughness: 0.9 }), { pos: [p.x, p.y, p.z + 0.005] });
    g.add(f);
  }
  return g;
}

// ------------------------------------------------------------------ shelves
export function wallShelf(w = 1.2, items = []) {
  const g = new THREE.Group();
  const wood = mat(COLORS.woodLight, { roughness: 0.6 });
  g.add(mesh(rbox(w, 0.06, 0.28, 0.02), wood, { pos: [0, 0, 0.14] }));
  for (const side of [-1, 1]) g.add(mesh(rbox(0.04, 0.16, 0.18, 0.015), wood, { pos: [side * (w / 2 - 0.15), -0.1, 0.09] }));
  let x = -w / 2 + 0.12;
  for (const it of items) {
    it.position.x = x + (it.userData.w || 0.15) / 2;
    it.position.y += 0.03;
    it.position.z = 0.15;
    g.add(it);
    x += (it.userData.w || 0.15) + 0.06;
  }
  return g;
}

export function jar(color = '#ffd27a', h = 0.18) {
  const g = new THREE.Group();
  g.add(mesh(rcyl(0.065, h, 0.03, 18), mat('#e8f6ff', { roughness: 0.15, transparent: true, opacity: 0.55 }), { pos: [0, h / 2, 0], cast: false }));
  g.add(mesh(rcyl(0.05, h * 0.7, 0.02, 14), mat(color, { roughness: 0.6 }), { pos: [0, h * 0.37, 0] }));
  g.add(mesh(rcyl(0.07, 0.04, 0.015, 18), mat('#e88c66'), { pos: [0, h + 0.02, 0] }));
  g.userData.w = 0.14;
  return g;
}

export function trophy(color = '#ffd27a') {
  const g = new THREE.Group();
  const gold = mat(color, { roughness: 0.3, metalness: 0.5 });
  g.add(mesh(rbox(0.12, 0.05, 0.12, 0.015), mat('#8a5536'), { pos: [0, 0.025, 0] }));
  g.add(mesh(cyl(0.015, 0.025, 0.08, 10), gold, { pos: [0, 0.09, 0] }));
  g.add(mesh(new THREE.LatheGeometry([new THREE.Vector2(0.0, 0), new THREE.Vector2(0.03, 0.0), new THREE.Vector2(0.07, 0.08), new THREE.Vector2(0.075, 0.12), new THREE.Vector2(0.068, 0.12)], 20), gold, { pos: [0, 0.13, 0] }));
  for (const s of [-1, 1]) g.add(mesh(torus(0.03, 0.008, 6, 14), gold, { pos: [s * 0.075, 0.2, 0], rot: [0, Math.PI / 2, 0] }));
  g.userData.w = 0.16;
  return g;
}

export function tinyRobot(color = '#9ccdf2') {
  const g = new THREE.Group();
  const m = mat(color, { roughness: 0.4, metalness: 0.2 });
  g.add(mesh(rbox(0.16, 0.14, 0.12, 0.04), m, { pos: [0, 0.07, 0] }));
  g.add(mesh(rbox(0.13, 0.1, 0.1, 0.04), m, { pos: [0, 0.2, 0] }));
  g.add(mesh(rbox(0.09, 0.04, 0.01, 0.01), mat('#2a3a4a', { emissive: '#7cf0ff', emissiveIntensity: 0.6 }), { pos: [0, 0.2, 0.051] }));
  g.add(mesh(cyl(0.006, 0.006, 0.07), mat('#555'), { pos: [0, 0.29, 0] }));
  g.add(mesh(sphere(0.02, 8, 6), mat('#ff6b6b', { emissive: '#ff6b6b', emissiveIntensity: 0.6 }), { pos: [0, 0.33, 0] }));
  g.userData.w = 0.18;
  return g;
}

export function bookStack(n = 3, seed = 1) {
  const g = new THREE.Group();
  const rng = mulberry32(seed);
  const cols = ['#e8746a', '#7aa6dc', '#f2c14e', '#8dc68a', '#c39be0', '#f29bb5', '#7fc8c0'];
  let y = 0;
  for (let i = 0; i < n; i++) {
    const h = 0.04 + rng() * 0.03;
    const b = mesh(rbox(0.22 + rng() * 0.06, h, 0.16 + rng() * 0.04, 0.01), mat(cols[Math.floor(rng() * cols.length)], { roughness: 0.7 }), { pos: [rng() * 0.03, y + h / 2, 0], rot: [0, rng() * 0.4 - 0.2, 0] });
    g.add(b);
    y += h;
  }
  g.userData.w = 0.26;
  return g;
}

export function pegboard(w = 1.6, h = 1.0) {
  const g = new THREE.Group();
  const c = makeCanvas(256, Math.round((256 * h) / w));
  const x = c.getContext('2d');
  x.fillStyle = '#e9c8a0';
  x.fillRect(0, 0, c.width, c.height);
  x.fillStyle = 'rgba(120,80,50,0.45)';
  for (let i = 8; i < c.width; i += 16) for (let j = 8; j < c.height; j += 16) x.fillRect(i - 2, j - 2, 4, 4);
  g.add(mesh(rbox(w, h, 0.04, 0.02), [mat('#d9b68d'), mat('#d9b68d'), mat('#d9b68d'), mat('#d9b68d'), texMat(canvasTexture(c)), mat('#d9b68d')], { pos: [0, 0, 0.02] }));
  // tools
  const metal = mat('#b9c2cc', { roughness: 0.35, metalness: 0.6 });
  const red = mat('#ef6b5b', { roughness: 0.5 });
  const blue = mat('#6aa6e8', { roughness: 0.5 });
  const yellow = mat('#f6c544', { roughness: 0.5 });
  // hammer
  g.add(mesh(rbox(0.04, 0.38, 0.03, 0.012), mat(COLORS.woodLight), { pos: [-w * 0.32, 0, 0.07] }));
  g.add(mesh(rbox(0.18, 0.07, 0.05, 0.015), metal, { pos: [-w * 0.32, 0.19, 0.07] }));
  // wrench
  g.add(mesh(rbox(0.035, 0.34, 0.02, 0.01), metal, { pos: [-w * 0.14, 0.02, 0.07], rot: [0, 0, 0.15] }));
  g.add(mesh(torus(0.04, 0.015, 6, 14, Math.PI * 1.5), metal, { pos: [-w * 0.16, 0.2, 0.07], rot: [0, 0, 0.9] }));
  // screwdrivers
  [red, blue, yellow].forEach((m, i) => {
    g.add(mesh(capsule(0.025, 0.08, 4, 8), m, { pos: [w * 0.05 + i * 0.1, 0.12, 0.08] }));
    g.add(mesh(cyl(0.008, 0.008, 0.16), metal, { pos: [w * 0.05 + i * 0.1, -0.02, 0.08] }));
  });
  // scissors-ish & tape
  g.add(mesh(torus(0.06, 0.025, 8, 20), yellow, { pos: [w * 0.35, 0.15, 0.08] }));
  g.add(mesh(rbox(0.3, 0.05, 0.03, 0.015), mat(COLORS.woodLight), { pos: [w * 0.3, -0.3, 0.07] }));
  g.add(mesh(rbox(0.36, 0.2, 0.12, 0.03), red, { pos: [-w * 0.05, -0.32, 0.1] }));
  return g;
}

export function sign(text, { w = 1.1, h = 0.3, bg = '#fff3df', color = '#8a5536', wood = '#c98d5d' } = {}) {
  const tex = labelTexture(text, { w: 512, h: Math.round((512 * h) / w), bg, color, size: Math.round((512 * h) / w) * 0.5 });
  const woodM = mat(wood);
  return group({}, mesh(rbox(w, h, 0.05, 0.05), [woodM, woodM, woodM, woodM, texMat(tex), woodM], { pos: [0, 0, 0.03] }));
}

export function wallHooks(n = 3, items = []) {
  const g = new THREE.Group();
  const wood = mat(COLORS.woodLight);
  g.add(mesh(rbox(0.3 * n + 0.2, 0.1, 0.05, 0.03), wood, { pos: [0, 0, 0.025] }));
  for (let i = 0; i < n; i++) {
    const x = -((n - 1) * 0.3) / 2 + i * 0.3;
    g.add(mesh(capsule(0.02, 0.06, 4, 8), mat(COLORS.brass, { metalness: 0.5, roughness: 0.35 }), { pos: [x, 0, 0.08], rot: [Math.PI / 2.6, 0, 0] }));
    if (items[i]) {
      const it = items[i]();
      it.position.set(x, -0.02, 0.1);
      g.add(it);
    }
  }
  return g;
}

export function scarf(color = '#ff9a8c') {
  const g = new THREE.Group();
  const m = mat(color, { roughness: 0.95 });
  g.add(mesh(torus(0.07, 0.035, 8, 16), m, { scale: [1, 0.6, 0.6] }));
  g.add(mesh(rbox(0.08, 0.42, 0.04, 0.02), m, { pos: [-0.04, -0.22, 0.02], rot: [0, 0, 0.08] }));
  g.add(mesh(rbox(0.08, 0.34, 0.04, 0.02), m, { pos: [0.05, -0.18, 0.04], rot: [0, 0, -0.06] }));
  for (let i = 0; i < 3; i++) g.add(mesh(rbox(0.082, 0.03, 0.042, 0.01), mat('#fff6ea'), { pos: [-0.04, -0.3 + i * 0.08, 0.02] }));
  return g;
}

export function tinyHat(color = '#ffe08a') {
  const g = new THREE.Group();
  const m = mat(color, { roughness: 0.8 });
  g.add(mesh(rcyl(0.14, 0.03, 0.015, 24), m, { pos: [0, -0.1, 0.1], rot: [Math.PI / 2.4, 0, 0] }));
  g.add(mesh(new THREE.SphereGeometry(0.09, 16, 10, 0, TAU, 0, Math.PI / 2), m, { pos: [0, -0.08, 0.12], rot: [Math.PI / 2.4, 0, 0] }));
  g.add(mesh(sphere(0.03, 8, 6), mat('#fff'), { pos: [0, 0.0, 0.17] }));
  return g;
}
