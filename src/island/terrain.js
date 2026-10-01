// The floating island: soft land chunks with a grassy top, a soil lip and a
// rocky underside with dangling roots. When the camera tilts below, the land
// under the house is cut away so you can look up into the bottom floor.
import * as THREE from 'three';
import { mulberry32, clamp, smoothstep, TAU } from '../core/util.js';
import { CHUNKS } from './layout.js';
import { canvasTexture, makeCanvas } from '../gfx/textures.js';

const cutUniforms = {
  uCut: { value: new THREE.Vector4(-6.1, -6.1, 6.1, 6.1) },
  uCutOn: { value: 0 },
};
export const terrainCut = cutUniforms;

function withCut(mat) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uCut = cutUniforms.uCut;
    shader.uniforms.uCutOn = cutUniforms.uCutOn;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nuniform vec4 uCut;\nuniform float uCutOn;')
      .replace(
        'void main() {',
        `void main() {
  if (uCutOn > 0.5 && vWPos.x > uCut.x && vWPos.x < uCut.z && vWPos.z > uCut.y && vWPos.z < uCut.w && vWPos.y > -9.0) discard;`
      );
  };
  mat.customProgramCacheKey = () => 'terrain-cut-' + mat.type;
  return mat;
}

/** Outline of a chunk (closed list of [x, z]). */
export function chunkOutline(c, n = 84) {
  const rng = mulberry32(c.seed * 977);
  const bumps = Array.from({ length: 6 }, () => [rng() * TAU, 0.02 + rng() * 0.035, 2 + Math.floor(rng() * 4)]);
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU;
    const ca = Math.abs(Math.cos(a));
    const sa = Math.abs(Math.sin(a));
    let r = Math.pow(Math.pow(ca / c.hx, c.p) + Math.pow(sa / c.hz, c.p), -1 / c.p);
    let k = 1;
    for (const [ph, amp, f] of bumps) k += Math.sin(a * f + ph) * amp;
    r *= k;
    pts.push([c.cx + Math.cos(a) * r, c.cz + Math.sin(a) * r]);
  }
  return pts;
}

export function pointInChunk(c, x, z, margin = 0) {
  const dx = (x - c.cx) / Math.max(0.1, c.hx - margin);
  const dz = (z - c.cz) / Math.max(0.1, c.hz - margin);
  return Math.pow(Math.abs(dx), c.p) + Math.pow(Math.abs(dz), c.p) <= 0.94;
}

let grassTex = null;
function grassTexture() {
  if (grassTex) return grassTex;
  const S = 256;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  g.fillStyle = '#b9cf98';
  g.fillRect(0, 0, S, S);
  const rng = mulberry32(17);
  for (let i = 0; i < 1600; i++) {
    const v = rng();
    g.fillStyle = v < 0.5 ? `rgba(130,170,105,${0.18 + rng() * 0.25})` : `rgba(225,235,190,${0.15 + rng() * 0.25})`;
    const x = rng() * S;
    const y = rng() * S;
    g.fillRect(x, y, 1.5 + rng() * 2, 3 + rng() * 5);
  }
  // a few tiny flowers
  for (let i = 0; i < 26; i++) {
    g.fillStyle = ['#fff6ea', '#ffd9e2', '#fff1b8'][i % 3];
    g.beginPath();
    g.arc(rng() * S, rng() * S, 2.2, 0, TAU);
    g.fill();
  }
  grassTex = canvasTexture(c, { repeat: true });
  grassTex.repeat.set(1 / 4, 1 / 4);
  return grassTex;
}

const grassMat = withCut(new THREE.MeshStandardMaterial({ map: null, color: '#ffffff', roughness: 0.95 }));
const rockMat = withCut(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, side: THREE.DoubleSide, flatShading: false }));
const rootMat = new THREE.MeshStandardMaterial({ color: '#8a6d5c', roughness: 0.9 });

export function buildChunk(def) {
  if (!grassMat.map) {
    grassMat.map = grassTexture();
    grassMat.needsUpdate = true;
  }
  const group = new THREE.Group();
  group.name = `chunk:${def.id}`;
  const outline = chunkOutline(def);
  const rng = mulberry32(def.seed * 131);

  // grassy top
  const shape = new THREE.Shape(outline.map(([x, z]) => new THREE.Vector2(x, -z)));
  const top = new THREE.ShapeGeometry(shape, 1);
  top.rotateX(-Math.PI / 2);
  const uv = top.attributes.uv;
  const pos = top.attributes.position;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, pos.getX(i), pos.getZ(i));
  const topMesh = new THREE.Mesh(top, grassMat);
  topMesh.receiveShadow = true;
  topMesh.position.y = 0.002;
  topMesh.name = 'grass';
  group.add(topMesh);

  // soil lip + rock underside as stacked rings
  const rows = [];
  const lip = [
    [0.0, 1.0, 0],
    [-0.1, 1.025, 0],
    [-0.32, 1.02, 0],
    [-0.55, 0.985, 0],
  ];
  for (const [y, s] of lip) rows.push({ y, s, soil: true });
  const R = 9;
  for (let j = 1; j <= R; j++) {
    const t = j / R;
    rows.push({ y: -0.55 - t * def.depth, s: Math.max(0.06, 0.985 - Math.pow(t, 1.5) * 0.93), soil: false, t });
  }
  const n = outline.length;
  const verts = [];
  const cols = [];
  const soil = new THREE.Color('#b08a6d');
  const soilDark = new THREE.Color('#987460');
  const rockTop = new THREE.Color('#c4a58f');
  const rockMid = new THREE.Color('#a48a92');
  const rockLow = new THREE.Color('#7c6e8e');
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    for (let i = 0; i < n; i++) {
      const [x, z] = outline[i];
      const jitter = row.soil ? 0 : (rng() - 0.5) * 0.35 * (0.4 + (row.t || 0));
      const dx = x - def.cx;
      const dz = z - def.cz;
      const s = row.s + (row.soil ? 0 : (rng() - 0.5) * 0.06);
      verts.push(def.cx + dx * s + jitter, row.y + (row.soil ? 0 : (rng() - 0.5) * 0.3), def.cz + dz * s + jitter);
      let c;
      if (row.soil) c = r < 2 ? soil : soilDark;
      else c = row.t < 0.45 ? rockTop.clone().lerp(rockMid, row.t / 0.45) : rockMid.clone().lerp(rockLow, (row.t - 0.45) / 0.55);
      const v = 0.94 + rng() * 0.1;
      cols.push(c.r * v, c.g * v, c.b * v);
    }
  }
  // tip
  const tipIndex = verts.length / 3;
  verts.push(def.cx + (rng() - 0.5), rows[rows.length - 1].y - def.depth * 0.08, def.cz + (rng() - 0.5));
  cols.push(rockLow.r * 0.9, rockLow.g * 0.9, rockLow.b * 0.9);
  const idx = [];
  for (let r = 0; r < rows.length - 1; r++) {
    for (let i = 0; i < n; i++) {
      const a = r * n + i;
      const b = r * n + ((i + 1) % n);
      const c2 = (r + 1) * n + i;
      const d = (r + 1) * n + ((i + 1) % n);
      idx.push(a, c2, b, b, c2, d);
    }
  }
  const last = (rows.length - 1) * n;
  for (let i = 0; i < n; i++) idx.push(last + i, tipIndex, last + ((i + 1) % n));
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const rock = new THREE.Mesh(g, rockMat);
  rock.castShadow = false;
  rock.receiveShadow = true;
  rock.name = 'rock';
  group.add(rock);

  // dangling roots from the underside
  const rootCount = Math.round(4 + def.hx * def.hz * 0.18);
  for (let i = 0; i < rootCount; i++) {
    const a = rng() * TAU;
    const rr = 0.25 + rng() * 0.55;
    const [ox, oz] = outline[Math.floor(rng() * n)];
    const x = def.cx + (ox - def.cx) * rr * 0.7;
    const z = def.cz + (oz - def.cz) * rr * 0.7;
    const y0 = -0.8 - (1 - rr) * def.depth * 0.5;
    const len = 1.2 + rng() * 2.6;
    const pts = [];
    for (let k = 0; k <= 5; k++) {
      const t = k / 5;
      pts.push(new THREE.Vector3(x + Math.sin(a + t * 3) * 0.25 * t, y0 - t * len, z + Math.cos(a + t * 2) * 0.25 * t));
    }
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 12, 0.05 * (1 - rng() * 0.4), 5), rootMat);
    tube.userData.root = true;
    group.add(tube);
  }

  // small rocks / tufts on top for life
  group.userData = { def, outline, top: topMesh, rock };
  return group;
}

// ------------------------------------------------------------------ fence & mist
export function buildFence(points) {
  const g = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: '#d6b796', roughness: 0.85 });
  for (let i = 0; i < points.length; i++) {
    const [x, z] = points[i];
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.75, 6), wood);
    post.position.set(x, 0.37, z);
    post.castShadow = true;
    g.add(post);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), wood);
    cap.position.set(x, 0.76, z);
    g.add(cap);
    if (i > 0) {
      const [px, pz] = points[i - 1];
      const len = Math.hypot(x - px, z - pz);
      for (const h of [0.28, 0.55]) {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(len, 0.06, 0.05), wood);
        rail.position.set((x + px) / 2, h, (z + pz) / 2);
        rail.rotation.y = -Math.atan2(z - pz, x - px);
        rail.castShadow = true;
        g.add(rail);
      }
    }
  }
  return g;
}

let cloudTex = null;
export function cloudTexture() {
  if (cloudTex) return cloudTex;
  const S = 128;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  const rng = mulberry32(5);
  for (let i = 0; i < 9; i++) {
    const x = 30 + rng() * 68;
    const y = 44 + rng() * 40;
    const r = 18 + rng() * 22;
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, 'rgba(255,255,255,0.95)');
    grd.addColorStop(0.6, 'rgba(255,255,255,0.55)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.beginPath();
    g.arc(x, y, r, 0, TAU);
    g.fill();
  }
  cloudTex = canvasTexture(c);
  return cloudTex;
}

/** A soft patch of mist hiding where the island will grow. */
export function buildMist(cx, cz, rx, rz, count = 14, seed = 9) {
  const g = new THREE.Group();
  const rng = mulberry32(seed);
  const tex = cloudTexture();
  for (let i = 0; i < count; i++) {
    const m = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.9, color: '#f2f3ff' });
    const s = new THREE.Sprite(m);
    const a = rng() * TAU;
    const r = Math.sqrt(rng());
    s.position.set(cx + Math.cos(a) * rx * r, -0.2 + rng() * 1.3, cz + Math.sin(a) * rz * r);
    const sz = 2.4 + rng() * 2.6;
    s.scale.set(sz * 1.4, sz, 1);
    s.userData = { base: s.position.clone(), ph: rng() * TAU, sp: 0.15 + rng() * 0.2, op: 0.75 + rng() * 0.25 };
    s.userData.noAO = true;
    g.add(s);
  }
  g.userData.update = (t, k = 1) => {
    for (const s of g.children) {
      const u = s.userData;
      s.position.x = u.base.x + Math.sin(t * u.sp + u.ph) * 0.35;
      s.position.y = u.base.y + Math.sin(t * u.sp * 0.7 + u.ph) * 0.12;
      s.material.opacity = u.op * k;
    }
  };
  return g;
}

/**
 * The walls of the cut under the house: seen from below, the ground floor
 * opens onto a clean shaft through solid rock (a diorama cross-section).
 */
export function buildShaft(x0, z0, x1, z1, depth = 3.4) {
  const g = new THREE.Group();
  g.name = 'shaft';
  const c = makeCanvas(64, 256);
  const x = c.getContext('2d');
  const grd = x.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, '#8d6a52');
  grd.addColorStop(0.12, '#b5927a');
  grd.addColorStop(0.5, '#a08896');
  grd.addColorStop(1, '#6f6486');
  x.fillStyle = grd;
  x.fillRect(0, 0, 64, 256);
  const rng = mulberry32(5);
  for (let i = 0; i < 260; i++) {
    x.fillStyle = `rgba(${rng() < 0.5 ? '60,40,50' : '255,240,230'},${rng() * 0.12})`;
    x.beginPath();
    x.ellipse(rng() * 64, 30 + rng() * 226, 2 + rng() * 6, 1 + rng() * 3, 0, 0, TAU);
    x.fill();
  }
  // a band of roots near the top
  x.strokeStyle = 'rgba(110,80,55,0.6)';
  x.lineWidth = 2;
  for (let i = 0; i < 10; i++) {
    x.beginPath();
    const sx = rng() * 64;
    x.moveTo(sx, 20);
    x.bezierCurveTo(sx + 8, 50, sx - 8, 70, sx + rng() * 10, 90 + rng() * 40);
    x.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, side: THREE.DoubleSide, emissive: '#2a1c30', emissiveIntensity: 0.25 });
  const walls = [
    [(x0 + x1) / 2, z0, x1 - x0, 0],
    [(x0 + x1) / 2, z1, x1 - x0, Math.PI],
    [x0, (z0 + z1) / 2, z1 - z0, Math.PI / 2],
    [x1, (z0 + z1) / 2, z1 - z0, -Math.PI / 2],
  ];
  for (const [cx, cz, len, rot] of walls) {
    tex.repeat.set(len / 2, 1);
    const p = new THREE.Mesh(new THREE.PlaneGeometry(len, depth), m);
    p.position.set(cx, -depth / 2 - 0.02, cz);
    p.rotation.y = rot;
    p.userData.noAO = true;
    g.add(p);
  }
  // a faint warm glow from below the house
  const glow = new THREE.PointLight('#ffcf9a', 2.2, 9, 1.5);
  glow.position.set((x0 + x1) / 2, -1.2, (z0 + z1) / 2);
  g.add(glow);
  g.visible = false;
  return g;
}

/** Drifting sky clouds around (and below) the island. */
export function buildSkyClouds(count = 22) {
  const g = new THREE.Group();
  const rng = mulberry32(77);
  const tex = cloudTexture();
  for (let i = 0; i < count; i++) {
    const m = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.55, color: '#ffffff', fog: false });
    const s = new THREE.Sprite(m);
    const a = rng() * TAU;
    const r = 22 + rng() * 26;
    const y = -14 + rng() * 22;
    s.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
    const sz = 6 + rng() * 9;
    s.scale.set(sz * 1.6, sz, 1);
    s.userData = { a, r, y, sp: (0.004 + rng() * 0.006) * (rng() < 0.5 ? 1 : -1), op: 0.35 + rng() * 0.35 };
    g.add(s);
  }
  g.userData.update = (t, tint, opacityK = 1) => {
    for (const s of g.children) {
      const u = s.userData;
      const a = u.a + t * u.sp;
      s.position.set(Math.cos(a) * u.r, u.y, Math.sin(a) * u.r);
      s.material.opacity = u.op * opacityK;
      if (tint) s.material.color.copy(tint);
    }
  };
  return g;
}

export { clamp, smoothstep };
