// The house: one continuous structure generated from whichever rooms are
// unlocked. Exterior walls facing the camera sink to a stub (dollhouse
// cutaway), roofs lift off whenever the camera is above them, interior
// partitions stay solid (they only fade when you focus a room behind them),
// and from below the bottom floor opens up so you can look into the rooms.
import * as THREE from 'three';
import { ROOMS, DOORS, WINDOWS, PORCH, H, T, ATTIC_H, OUTWARD, neighbor } from './layout.js';
import { wallTexture, sidingTexture, planksTexture, tilesTexture, makeCanvas, canvasTexture } from '../gfx/textures.js';
import { mat, uniqueMat, texMat } from '../gfx/materials.js';
import { rbox, cyl, sphere, mesh, group, plane } from '../gfx/geo.js';
import { Spring, clamp, easeOutBack, smoothstep, mulberry32, TAU } from '../core/util.js';
import { cloudTexture } from './terrain.js';

export const FLOOR0 = 0.15;
const STUB = 0.32;

// muted, receding environment palette
const PAPER = {
  commons: { paper: '#f3e6d8', pattern: 'dots', accent: '#e9c8b8', wainscot: '#ecd9c4', board: '#bfa088' },
  workshop: { paper: '#e9e4d8', pattern: 'stripes', accent: '#d6d2bf', wainscot: '#ddd5c2', board: '#b39c86' },
  study: { paper: '#e5e3ea', pattern: 'scallop', accent: '#cfcbe0', wainscot: '#d9d4e0', board: '#a99aa4' },
  kitchen: { paper: '#eef0e2', pattern: 'gingham', accent: '#d3dcbf', wainscot: '#e2e4d0', board: '#b4a58e' },
  bunk: { paper: '#e7ecef', pattern: 'stripes', accent: '#cdd8de', wainscot: '#d8dfe2', board: '#a8a0a0' },
  yours: { paper: '#f3e7e4', pattern: 'flowers', accent: '#e8cfd0', wainscot: '#eadad5', board: '#bba39a' },
  attic: { paper: '#ebe0d0', pattern: 'stripes', accent: '#dccdb8', wainscot: '#e0d2bd', board: '#b49c84' },
};

const _cut = new Map(); // cache of wall paper materials per room
function paperMat(roomId, height) {
  const key = roomId + ':' + height;
  if (!_cut.has(key)) {
    const p = PAPER[roomId] || PAPER.commons;
    const t = wallTexture({ ...p, unit: 2, height, wainscotH: Math.min(1.0, height * 0.35), seed: roomId.length });
    _cut.set(key, texMat(t, { roughness: 0.9 }));
  }
  return _cut.get(key);
}
let _sidingMat = null;
function sidingMat(height) {
  return texMat(sidingTexture({ height }), { roughness: 0.88 });
}
const capMat = () => mat('#f4eadc', { roughness: 0.85 });

// ------------------------------------------------------------------ walls
class HouseWall {
  constructor(house, o) {
    this.house = house;
    Object.assign(this, o); // kind, roomA, roomB, side, cx, cz, rotY, length, base, height, openings
    this.group = new THREE.Group();
    this.group.position.set(o.cx, o.base, o.cz);
    this.group.rotation.y = o.rotY;
    const [nx, nz] = OUTWARD[o.side];
    this.outward = new THREE.Vector2(nx, nz); // relative to roomA
    this.cutK = new Spring(0, 2.2, 0.85);
    this.fade = new Spring(1, 3, 1);
    this.decor = new THREE.Group();
    this.group.add(this.decor);
    this.items = [];

    const exterior = o.kind === 'exterior';
    const depth = T;
    const zShift = exterior ? -T : -T / 2;
    const inner = paperMat(o.roomA.id, Math.round(o.height * 10) / 10);
    const outer = exterior ? sidingMat(Math.round(o.height * 10) / 10) : paperMat(o.roomB.id, Math.round(o.height * 10) / 10);
    // per-wall clones so partitions can fade on their own
    this.mats = [outer.clone(), inner.clone(), capMat().clone()];
    if (exterior && !o.sealed) {
      this.stub = new THREE.Mesh(this._extrude(0, STUB, depth, zShift), this.mats);
      this.stub.receiveShadow = this.stub.castShadow = true;
      this.group.add(this.stub);
      this.upperPivot = new THREE.Group();
      this.upperPivot.position.y = STUB;
      this.group.add(this.upperPivot);
      const ug = this._extrude(STUB, o.height, depth, zShift);
      ug.translate(0, -STUB, 0);
      this.upper = new THREE.Mesh(ug, this.mats);
      this.upper.receiveShadow = true;
      this.upperPivot.add(this.upper);
      // invisible full wall keeps the sun's shadows put when it's cut away
      this.proxy = new THREE.Mesh(this._extrude(0, o.height, depth, zShift), new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }));
      this.proxy.castShadow = true;
      this.proxy.userData.noAO = true;
      this.group.add(this.proxy);
    } else {
      this.full = new THREE.Mesh(this._extrude(0, o.height, depth, zShift), this.mats);
      this.full.castShadow = this.full.receiveShadow = true;
      this.group.add(this.full);
    }
    // top trim
    const trim = new THREE.Mesh(rbox(o.length + 0.02, 0.07, T + 0.05, 0.025), mat('#e6d6c2', { roughness: 0.75 }));
    trim.position.set(0, o.height - 0.03, zShift + T / 2);
    trim.castShadow = false;
    (this.upperPivot || this.group).add(trim);
    if (this.upperPivot) trim.position.y -= STUB;
  }

  _extrude(y0, y1, depth, zShift) {
    const L = this.length;
    const shape = new THREE.Shape();
    const notches = [];
    for (const op of this.openings) {
      const bottom = op.type === 'door' ? 0 : op.y;
      const top = op.type === 'door' ? op.h : op.y + op.h;
      if (top <= y0 || bottom >= y1) continue;
      const x0 = op.u - op.w / 2;
      const x1 = op.u + op.w / 2;
      if (bottom <= y0 + 1e-4) {
        notches.push({ x0, x1, top: Math.min(top, y1), arched: op.shape === 'arch' && top <= y1 && top - op.w / 2 >= y0, r: op.w / 2, u: op.u, fullTop: top });
      } else {
        const p = new THREE.Path();
        const b = Math.max(bottom, y0 + 0.001);
        const t = Math.min(top, y1 - 0.001);
        if (op.shape === 'round') {
          p.absarc(op.u, op.y + op.h / 2, Math.min(op.w, op.h) / 2, 0, TAU, false);
        } else if (op.shape === 'arch' && t === top) {
          const r = op.w / 2;
          p.moveTo(x0, b);
          p.lineTo(x1, b);
          p.lineTo(x1, t - r);
          p.absarc(op.u, t - r, r, 0, Math.PI, false);
          p.lineTo(x0, b);
        } else {
          p.moveTo(x0, b);
          p.lineTo(x1, b);
          p.lineTo(x1, t);
          p.lineTo(x0, t);
          p.lineTo(x0, b);
        }
        shape.holes.push(p);
      }
    }
    notches.sort((a, b) => a.x0 - b.x0);
    shape.moveTo(-L / 2, y0);
    for (const n of notches) {
      shape.lineTo(n.x0, y0);
      if (n.arched) {
        shape.lineTo(n.x0, n.fullTop - n.r);
        shape.absarc(n.u, n.fullTop - n.r, n.r, Math.PI, 0, true);
      } else {
        shape.lineTo(n.x0, n.top);
        shape.lineTo(n.x1, n.top);
      }
      shape.lineTo(n.x1, y0);
    }
    shape.lineTo(L / 2, y0);
    shape.lineTo(L / 2, y1);
    shape.lineTo(-L / 2, y1);
    shape.lineTo(-L / 2, y0);
    const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: 20 });
    // split the cap group in two: first half = back face (z=0), second = front (z=depth)
    const g0 = g.groups[0];
    const g1 = g.groups[1];
    const half = g0.count / 2;
    g.clearGroups();
    g.addGroup(g0.start, half, 0); // faces local -z (outside / room B)
    g.addGroup(g0.start + half, half, 1); // faces local +z (room A)
    if (g1) g.addGroup(g1.start, g1.count, 2);
    // planar UVs in wall units for the caps
    const uv = g.attributes.uv;
    const pos = g.attributes.position;
    for (let i = 0; i < uv.count; i++) {
      if (i < g0.start + g0.count) uv.setXY(i, pos.getX(i) + L * 7, pos.getY(i));
    }
    g.translate(0, 0, zShift);
    return g;
  }

  add(obj, u, y, z = 0.0, order = null) {
    const holder = new THREE.Group();
    holder.position.set(u, y, z);
    holder.add(obj);
    holder.userData.order = order ?? y;
    this.decor.add(holder);
    this.items.push(holder);
    return holder;
  }

  setFade(target) {
    this.fade.target = target;
  }

  update(dt, camDir, forceCut) {
    // exterior walls: sink when facing the camera
    if (this.upperPivot) {
      const d = this.outward.x * camDir.x + this.outward.y * camDir.y;
      const want = forceCut ? 1 : d > 0.2 ? 1 : 0;
      this.cutK.target = want;
      this.cutK.update(dt);
      const c = clamp(this.cutK.x, 0, 1.08);
      const sy = Math.max(0.0005, 1 - c);
      this.upperPivot.scale.y = sy;
      this.upperPivot.visible = sy > 0.002;
      this.cut = want === 1;
      const k = want ? 1 - smoothstep(0, 0.35, c) : smoothstep(0.55, 1, 1 - c);
      for (const it of this.items) {
        const s = want ? k : easeOutBack(clamp(k));
        it.scale.setScalar(Math.max(0.0001, s));
        it.visible = s > 0.01;
      }
      this.cutAmount = c;
    }
    // partitions: fade when they're in the way of a focused room
    this.fade.update(dt);
    const f = clamp(this.fade.x, 0.12, 1);
    const fading = f < 0.98;
    for (const m of this.mats) {
      if (m.transparent !== fading) {
        m.transparent = fading;
        m.depthWrite = !fading;
        m.needsUpdate = true;
      }
      m.opacity = f;
    }
    for (const it of this.items) it.traverse((o) => o.isMesh && o.material && setOpacity(o, f));
  }
}

function setOpacity(o, f) {
  if (!o.userData.__fadeMat) {
    if (f >= 0.98) return;
    o.userData.__fadeMat = true;
    o.material = o.material.clone();
  }
  const m = o.material;
  const fading = f < 0.98;
  if (m.transparent !== fading && !m.userData?.alwaysTransparent) {
    m.transparent = fading;
    m.depthWrite = !fading;
    m.needsUpdate = true;
  }
  m.opacity = f;
}

// ------------------------------------------------------------------ window & door decor
const glassMat = new THREE.MeshStandardMaterial({ color: '#d9ecf5', emissive: '#ffcf8a', emissiveIntensity: 0, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.55 });
glassMat.userData.alwaysTransparent = true;
export const houseGlass = glassMat;

function windowDecor(op, exteriorSide) {
  const g = new THREE.Group();
  const frame = mat('#fbf4ea', { roughness: 0.6 });
  const w = op.w;
  const h = op.h;
  const b = 0.08;
  if (op.shape === 'round') {
    const r = Math.min(w, h) / 2;
    const ring = mesh(new THREE.TorusGeometry(r, 0.06, 8, 36), frame, { pos: [0, h / 2, 0.02] });
    g.add(ring);
    g.add(mesh(new THREE.CircleGeometry(r, 32), glassMat, { pos: [0, h / 2, -T * 0.5], cast: false }));
    g.add(mesh(rbox(0.05, r * 2, 0.05, 0.02), frame, { pos: [0, h / 2, -T * 0.5] }));
    g.add(mesh(rbox(r * 2, 0.05, 0.05, 0.02), frame, { pos: [0, h / 2, -T * 0.5] }));
    return g;
  }
  // frame sides
  g.add(mesh(rbox(w + b * 2, b, 0.08, 0.02), frame, { pos: [0, -b / 2, 0.02] }));
  if (op.shape !== 'arch') g.add(mesh(rbox(w + b * 2, b, 0.08, 0.02), frame, { pos: [0, h + b / 2, 0.02] }));
  for (const s of [-1, 1]) g.add(mesh(rbox(b, op.shape === 'arch' ? h - w / 2 : h, 0.08, 0.02), frame, { pos: [s * (w / 2 + b / 2), (op.shape === 'arch' ? h - w / 2 : h) / 2, 0.02] }));
  if (op.shape === 'arch') g.add(mesh(new THREE.TorusGeometry(w / 2 + b / 2, b / 2, 6, 20, Math.PI), frame, { pos: [0, h - w / 2, 0.02] }));
  // sill
  g.add(mesh(rbox(w + 0.3, 0.07, 0.28, 0.025), frame, { pos: [0, -0.07, 0.1] }));
  // glass + mullions inside the opening
  const glassShape = op.shape === 'arch' ? archGeo(w, h) : new THREE.PlaneGeometry(w, h).translate(0, h / 2, 0);
  g.add(mesh(glassShape, glassMat, { pos: [0, 0, -T * 0.5], cast: false }));
  g.add(mesh(rbox(0.04, h, 0.04, 0.015), frame, { pos: [0, h / 2, -T * 0.5] }));
  g.add(mesh(rbox(w, 0.04, 0.04, 0.015), frame, { pos: [0, h * 0.55, -T * 0.5] }));
  void exteriorSide;
  return g;
}

function archGeo(w, h) {
  const s = new THREE.Shape();
  const r = w / 2;
  s.moveTo(-r, 0);
  s.lineTo(r, 0);
  s.lineTo(r, h - r);
  s.absarc(0, h - r, r, 0, Math.PI, false);
  s.lineTo(-r, 0);
  return new THREE.ShapeGeometry(s, 16);
}

function doorFrame(op) {
  const g = new THREE.Group();
  const wood = mat('#d8b998', { roughness: 0.7 });
  const w = op.w;
  const h = op.h;
  const r = w / 2;
  for (const z of [0.02, -T - 0.02]) {
    for (const s of [-1, 1]) g.add(mesh(rbox(0.09, h - r, 0.06, 0.02), wood, { pos: [s * (r + 0.045), (h - r) / 2, z] }));
    g.add(mesh(new THREE.TorusGeometry(r + 0.045, 0.045, 6, 20, Math.PI), wood, { pos: [0, h - r, z] }));
  }
  return g;
}

function boards(op) {
  const g = new THREE.Group();
  const wood = mat('#b98f6c', { roughness: 0.85 });
  const rng = mulberry32(3);
  for (let i = 0; i < 4; i++) {
    const y = 0.35 + i * 0.45;
    g.add(mesh(rbox(op.w + 0.3, 0.2, 0.05, 0.02), wood, { pos: [(rng() - 0.5) * 0.1, y, 0.06], rot: [0, 0, (rng() - 0.5) * 0.25] }));
  }
  g.add(mesh(rbox(0.16, op.h - 0.2, 0.05, 0.02), wood, { pos: [0, op.h / 2 - 0.1, 0.035], rot: [0, 0, 0.5] }));
  // warm light leaking out from underneath
  const leak = mesh(plane(op.w, 0.06), new THREE.MeshBasicMaterial({ color: '#ffc879', transparent: true, opacity: 0.95 }), { pos: [0, 0.03, 0.08], rot: [0, 0, 0], cast: false, receive: false });
  g.add(leak);
  const glowMat = new THREE.SpriteMaterial({ map: glowTexture(), color: '#ffc173', transparent: true, depthWrite: false, opacity: 0.55, blending: THREE.AdditiveBlending });
  const glow = new THREE.Sprite(glowMat);
  glow.scale.set(op.w * 2.2, 0.7, 1);
  glow.position.set(0, 0.06, 0.35);
  glow.userData.noAO = true;
  g.add(glow);
  // floor light spill
  const spill = mesh(plane(op.w * 1.5, 0.9), new THREE.MeshBasicMaterial({ map: glowTexture(), color: '#ffb866', transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }), { pos: [0, 0.01, 0.5], rot: [-Math.PI / 2, 0, 0], cast: false, receive: false });
  g.add(spill);
  g.userData.glow = { glowMat, leak, spill };
  return g;
}

let _glowTex = null;
export function glowTexture() {
  if (_glowTex) return _glowTex;
  const c = makeCanvas(64, 64);
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.4, 'rgba(255,255,255,0.45)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  _glowTex = canvasTexture(c);
  return _glowTex;
}

// ------------------------------------------------------------------ roof
let _shingles = null;
function shingleMat() {
  if (_shingles) return _shingles;
  const c = makeCanvas(256, 256);
  const g = c.getContext('2d');
  g.fillStyle = '#c99a8f';
  g.fillRect(0, 0, 256, 256);
  const rng = mulberry32(8);
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 9; col++) {
      const x = col * 32 - (row % 2) * 16;
      const y = row * 32;
      g.fillStyle = `hsl(${8 + rng() * 10}, ${28 + rng() * 10}%, ${62 + rng() * 8}%)`;
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x + 30, y);
      g.lineTo(x + 30, y + 22);
      g.quadraticCurveTo(x + 15, y + 34, x, y + 22);
      g.closePath();
      g.fill();
      g.strokeStyle = 'rgba(110,70,60,0.25)';
      g.lineWidth = 2;
      g.stroke();
    }
  }
  const t = canvasTexture(c, { repeat: true });
  t.repeat.set(1 / 1.6, 1 / 1.6);
  _shingles = new THREE.MeshStandardMaterial({ map: t, roughness: 0.85, side: THREE.DoubleSide });
  return _shingles;
}
const snowMat = new THREE.MeshStandardMaterial({ color: '#fbfdff', roughness: 0.9, emissive: '#c8d8ff', emissiveIntensity: 0.05 });

function gableRoof(rect, baseY, rise, overhang = 0.4) {
  const g = new THREE.Group();
  const w = rect.x1 - rect.x0 + overhang * 2;
  const d = rect.z1 - rect.z0 + overhang * 2;
  const cx = (rect.x0 + rect.x1) / 2;
  const cz = (rect.z0 + rect.z1) / 2;
  const halfD = d / 2;
  const slopeLen = Math.hypot(halfD, rise);
  const ang = Math.atan2(rise, halfD);
  const mk = (sign) => {
    const geo = new THREE.BoxGeometry(w, 0.14, slopeLen + 0.05);
    // world-ish uvs so shingles keep their size
    const uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w, uv.getY(i) * slopeLen);
    const m = new THREE.Mesh(geo, shingleMat());
    m.position.set(cx, baseY + rise / 2, cz + sign * halfD / 2);
    m.rotation.x = sign * ang;
    m.castShadow = true;
    m.receiveShadow = true;
    const snow = new THREE.Mesh(new THREE.BoxGeometry(w * 0.98, 0.09, slopeLen * 0.96), snowMat);
    snow.position.y = 0.11;
    snow.userData.snow = true;
    m.add(snow);
    g.add(m);
  };
  mk(1);
  mk(-1);
  // gable ends
  const tri = new THREE.Shape();
  const ww = rect.z1 - rect.z0;
  tri.moveTo(-ww / 2, 0);
  tri.lineTo(ww / 2, 0);
  tri.lineTo(0, rise);
  tri.lineTo(-ww / 2, 0);
  const tg = new THREE.ExtrudeGeometry(tri, { depth: T, bevelEnabled: false });
  for (const s of [-1, 1]) {
    const m = new THREE.Mesh(tg, sidingMat(3));
    m.rotation.y = Math.PI / 2;
    m.position.set(s > 0 ? rect.x1 - T : rect.x0, baseY, cz);
    m.castShadow = true;
    g.add(m);
  }
  // chimney-ish ridge cap
  const ridge = new THREE.Mesh(rbox(w, 0.12, 0.2, 0.05), mat('#b98a80', { roughness: 0.8 }));
  ridge.position.set(cx, baseY + rise + 0.04, cz);
  g.add(ridge);
  g.userData.ridgeY = baseY + rise;
  return g;
}

// ------------------------------------------------------------------ house
export class House {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'house';
    this.walls = [];
    this.rooms = [];
    this.roofs = [];
    this.floorMeshes = [];
    this.followers = new Map(); // "room:side" -> [objects] that pop with that wall
    this.levelGroups = [];
    this.focus = null;
    this.boardedDoors = [];
    this.windowGlows = [];
  }

  /** (Re)build the structure for a set of rooms. sealed: rooms that exist but are closed up. */
  build({ built, sealed = [], upstairs = false }) {
    // clear previous structure (followers are kept and re-attached)
    this.group.clear();
    this.walls = [];
    this.roofs = [];
    this.floorMeshes = [];
    this.boardedDoors = [];
    this.windowGlows = [];
    const ids = [...new Set([...built, ...sealed])];
    const rooms = ids
      .map((id) => ROOMS[id])
      .filter(Boolean)
      .map((r) => {
        let level = r.floor;
        if (r.attic) level = upstairs ? 2 : 1;
        return { ...r, level, base: FLOOR0 + level * H, height: r.attic ? ATTIC_H : H, sealed: sealed.includes(r.id) && !built.includes(r.id) };
      });
    this.rooms = rooms;
    this.byId = Object.fromEntries(rooms.map((r) => [r.id, r]));

    // levels (so whole floors can hide when you focus below them)
    this.levelGroups = [0, 1, 2].map((l) => {
      const g = new THREE.Group();
      g.name = `level:${l}`;
      this.group.add(g);
      return g;
    });

    // stone plinth under the ground floor
    for (const r of rooms.filter((r) => r.level === 0)) {
      const p = mesh(rbox(r.x1 - r.x0 + 0.5, FLOOR0 + 0.25, r.z1 - r.z0 + 0.5, 0.08), mat('#cbbcae', { roughness: 0.9 }), { pos: [(r.x0 + r.x1) / 2, (FLOOR0 - 0.25) / 2, (r.z0 + r.z1) / 2] });
      p.userData.groundFloor = true;
      this.levelGroups[0].add(p);
      this.floorMeshes.push(p);
    }

    for (const r of rooms) {
      const lg = this.levelGroups[r.level];
      if (!r.sealed) {
        // floor surface with world UVs
        const tex = r.floorStyle === 'tiles' ? tilesTexture({ a: '#efe6d6', b: '#e3d6c2', units: 2, n: 4 }) : planksTexture({ base: r.floorStyle === 'boards' ? '#d2b394' : '#d9b896', units: 4, plankW: r.floorStyle === 'boards' ? 0.6 : 0.45, seed: r.id.length });
        const geo = new THREE.PlaneGeometry(r.x1 - r.x0, r.z1 - r.z0);
        geo.rotateX(-Math.PI / 2);
        const uv = geo.attributes.uv;
        const pos = geo.attributes.position;
        for (let i = 0; i < uv.count; i++) uv.setXY(i, pos.getX(i) + (r.x0 + r.x1) / 2, pos.getZ(i) + (r.z0 + r.z1) / 2);
        const fl = new THREE.Mesh(geo, texMat(tex, { roughness: 0.7 }));
        fl.position.set((r.x0 + r.x1) / 2, r.base + 0.002, (r.z0 + r.z1) / 2);
        fl.receiveShadow = true;
        fl.userData.floorOf = r.id;
        lg.add(fl);
        if (r.level === 0) this.floorMeshes.push(fl);
      }
      // slab (for upper floors this is also the ceiling of the room below)
      if (r.level > 0) {
        const slab = new THREE.Mesh(new THREE.BoxGeometry(r.x1 - r.x0 + T * 2, 0.22, r.z1 - r.z0 + T * 2), [mat('#e8dccd'), mat('#e8dccd'), mat('#e8dccd'), mat('#f4ece2'), mat('#e8dccd'), mat('#e8dccd')]);
        slab.position.set((r.x0 + r.x1) / 2, r.base - 0.11, (r.z0 + r.z1) / 2);
        slab.castShadow = slab.receiveShadow = true;
        lg.add(slab);
      }
    }

    // walls
    const doneShared = new Set();
    for (const r of rooms) {
      for (const side of ['north', 'south', 'east', 'west']) {
        const nb = neighbor(r, side, rooms);
        if (nb) {
          const key = [r.id, nb.id].sort().join('|');
          if (doneShared.has(key)) continue;
          doneShared.add(key);
        }
        const kind = nb ? 'partition' : 'exterior';
        const frame = this._frame(r, side, kind);
        const openings = this._openings(r, side, nb, frame);
        const sealedWall = r.sealed || (nb && nb.sealed && kind === 'exterior');
        const wall = new HouseWall(this, {
          kind,
          side,
          roomA: r,
          roomB: nb,
          cx: frame.cx,
          cz: frame.cz,
          rotY: frame.rotY,
          length: frame.length,
          base: r.base,
          height: r.height,
          openings,
          sealed: r.sealed,
        });
        this.levelGroups[r.level].add(wall.group);
        this.walls.push(wall);
        // decor for openings
        for (const op of openings) {
          if (op.type === 'window') {
            const d = windowDecor(op, kind === 'exterior');
            if (r.sealed) d.add(boardsForWindow(op));
            wall.add(d, op.u, op.y, 0, op.y + 1);
          } else if (op.boarded) {
            const holder = wall.add(boards(op), op.u, 0, nb && nb.id === op.boardFacing ? -T : 0, 0.2);
            if (nb && nb.id === op.boardFacing) holder.rotation.y = Math.PI;
            this.boardedDoors.push(holder);
          } else {
            wall.add(doorFrame(op), op.u, 0, 0, 0.3);
            if (op.front) wall.add(frontDoorLeaf(op), op.u, 0, 0, 0.3);
          }
        }
        // followers registered for this wall
        const fkey = `${r.id}:${side}`;
        wall.followerKey = fkey;
        if (nb) wall.followerKeyB = `${nb.id}:${opposite(side)}`;
        void sealedWall;
      }
    }

    // roofs over the top room of each column (+ sealed rooms)
    const columns = new Map();
    for (const r of rooms) {
      const key = `${r.x0},${r.z0}`;
      if (!columns.has(key) || columns.get(key).level < r.level) columns.set(key, r);
    }
    for (const r of columns.values()) {
      const rise = r.attic ? 1.6 : 1.4;
      const roof = gableRoof(r, r.base + r.height, rise);
      roof.userData.room = r;
      roof.userData.always = r.sealed;
      this.group.add(roof);
      this.roofs.push(roof);
      // light the windows from inside at night
    }

    // staircase in the commons + ladder to the attic
    if (this.byId.commons) this.levelGroups[0].add(this._stairs(upstairs));
    const attic = this.byId.attic;
    if (attic && !attic.sealed) {
      const below = upstairs ? this.byId.bunk : this.byId.workshop;
      if (below && !below.sealed) this.levelGroups[below.level].add(this._ladder(below.base, attic.base));
    }
    // porch
    if (this.byId.commons) this.levelGroups[0].add(this._porch());
    this._reattachFollowers();
    this.upstairs = upstairs;
  }

  _frame(r, side, kind) {
    const cx = (r.x0 + r.x1) / 2;
    const cz = (r.z0 + r.z1) / 2;
    const wx = r.x1 - r.x0;
    const wz = r.z1 - r.z0;
    const ext = kind === 'exterior' ? T * 2 : 0;
    switch (side) {
      case 'north':
        return { cx, cz: r.z0, rotY: 0, length: wx + ext, toU: (x, z) => x - cx };
      case 'south':
        return { cx, cz: r.z1, rotY: Math.PI, length: wx + ext, toU: (x, z) => -(x - cx) };
      case 'east':
        return { cx: r.x1, cz, rotY: -Math.PI / 2, length: wz, toU: (x, z) => z - cz };
      default:
        return { cx: r.x0, cz, rotY: Math.PI / 2, length: wz, toU: (x, z) => -(z - cz) };
    }
  }

  _openings(r, side, nb, frame) {
    const ops = [];
    const along = (a) => (side === 'north' || side === 'south' ? frame.toU(a, 0) : frame.toU(0, a));
    for (const d of DOORS) {
      let match = false;
      if (d.side && d.a === r.id && d.side === side && !nb) match = true;
      if (!d.side && nb && ((d.a === r.id && d.b === nb.id) || (d.b === r.id && d.a === nb.id))) match = true;
      if (!match) continue;
      if (d.upstairsLanding && !this._upstairsBuilt(r)) continue;
      const boarded = d.boardedUntil && (r.sealed || (nb && nb.sealed));
      ops.push({ type: 'door', u: along(d.along), w: 1.15, h: 2.2, shape: 'arch', front: d.front, boarded, boardFacing: boarded ? (r.sealed ? nb?.id : r.id) : null });
    }
    if (!nb && !r.attic) {
      for (const wdef of WINDOWS[r.id] || []) {
        if (wdef.side !== side) continue;
        const kind = wdef.kind;
        const op = kind === 'round' ? { y: 1.2, w: 1.0, h: 1.0 } : kind === 'arch' ? { y: 0.95, w: 1.2, h: 1.55 } : { y: 1.0, w: 1.35, h: 1.25 };
        ops.push({ type: 'window', u: along(wdef.along), shape: kind, ...op });
      }
    }
    if (r.attic && !nb && (side === 'east' || side === 'west')) ops.push({ type: 'window', u: 0, y: 0.45, w: 0.7, h: 0.7, shape: 'round' });
    return ops;
  }

  _upstairsBuilt(r) {
    return r.level >= 1;
  }

  _stairs(upstairs) {
    const g = new THREE.Group();
    g.name = 'stairs';
    const wood = mat('#d3b08e', { roughness: 0.7 });
    const n = 10;
    const z0 = 5.0;
    const z1 = 0.55;
    const x = 5.35;
    const run = (z0 - z1) / n;
    for (let i = 0; i < n; i++) {
      const y = FLOOR0 + (i + 1) * (H / n);
      g.add(mesh(rbox(1.0, 0.1, run + 0.04, 0.03), wood, { pos: [x, y - 0.05, z0 - (i + 0.5) * run] }));
      g.add(mesh(rbox(0.96, y - FLOOR0, 0.06, 0.01), mat('#c9a37f'), { pos: [x, FLOOR0 + (y - FLOOR0) / 2, z0 - (i + 1) * run + 0.03] }));
    }
    // stringer
    const len = Math.hypot(z0 - z1, H);
    const str = mesh(rbox(0.08, 0.3, len, 0.03), mat('#b98f6c'), { pos: [x - 0.52, FLOOR0 + H / 2 - 0.1, (z0 + z1) / 2], rot: [Math.atan2(H, z0 - z1), 0, 0] });
    g.add(str);
    // rail with posts
    for (let i = 0; i <= n; i += 2) {
      const y = FLOOR0 + i * (H / n);
      g.add(mesh(cyl(0.025, 0.025, 0.8), mat('#e3cbb2'), { pos: [x - 0.45, y + 0.4, z0 - i * run] }));
    }
    g.add(mesh(rbox(0.06, 0.06, len, 0.02), mat('#b98f6c'), { pos: [x - 0.45, FLOOR0 + H / 2 + 0.8, (z0 + z1) / 2], rot: [Math.atan2(H, z0 - z1), 0, 0] }));
    g.userData.footprint = { x, z: (z0 + z1) / 2, w: 1.1, d: z0 - z1 + 0.2 };
    // boxes stacked on the stairs until upstairs opens
    if (!upstairs) {
      const boxes = new THREE.Group();
      boxes.name = 'stairBoxes';
      const rng = mulberry32(12);
      for (let i = 0; i < 7; i++) {
        const k = Math.floor(i * 1.3) + 1;
        const y = FLOOR0 + k * (H / n);
        const s = 0.42 + rng() * 0.18;
        const b = mesh(rbox(s, s * 0.8, s, 0.04), mat(['#d9b48a', '#cfa77d', '#e2c19b'][i % 3], { roughness: 0.9 }), { pos: [x + (rng() - 0.5) * 0.3, y + s * 0.4, z0 - (k - 0.5) * run], rot: [0, rng() * 0.6, 0] });
        boxes.add(b);
        b.add(mesh(rbox(s * 1.01, 0.05, 0.1, 0.01), mat('#c08a5a'), { pos: [0, s * 0.4, 0] }));
      }
      g.add(boxes);
      this.stairBoxes = boxes;
    }
    return g;
  }

  _ladder(baseY, topY) {
    const g = new THREE.Group();
    const wood = mat('#cfa77d', { roughness: 0.75 });
    const h = topY - baseY;
    for (const s of [-1, 1]) g.add(mesh(rbox(0.06, h + 0.4, 0.06, 0.02), wood, { pos: [0.7 + s * 0.22, baseY + h / 2 + 0.2, -5.45], rot: [-0.12, 0, 0] }));
    for (let i = 1; i < h / 0.35; i++) g.add(mesh(cyl(0.025, 0.025, 0.44, 6), wood, { pos: [0.7, baseY + i * 0.35, -5.45 + i * 0.35 * 0.12], rot: [0, 0, Math.PI / 2] }));
    // hatch outline in the ceiling
    return g;
  }

  _porch() {
    const g = new THREE.Group();
    g.name = 'porch';
    const deck = mat('#d6b896', { roughness: 0.8 });
    const p = PORCH;
    const w = p.x1 - p.x0;
    const d = p.z1 - p.z0;
    for (let i = 0; i < Math.round(w / 0.45); i++) {
      g.add(mesh(rbox(0.43, 0.08, d, 0.02), deck, { pos: [p.x0 + 0.225 + i * 0.45, FLOOR0 - 0.04, p.z0 + d / 2] }));
    }
    // steps down to the grass
    g.add(mesh(rbox(1.4, 0.08, 0.35, 0.02), deck, { pos: [2.0, 0.07, p.z1 + 0.2] }));
    // railing posts with lanterns
    for (const x of [p.x0 + 0.1, p.x1 - 0.1]) {
      g.add(mesh(rbox(0.1, 0.9, 0.1, 0.03), mat('#c9a37f'), { pos: [x, FLOOR0 + 0.45, p.z1 - 0.1] }));
    }
    g.add(mesh(rbox(w - 2.0, 0.06, 0.06, 0.02), mat('#c9a37f'), { pos: [p.x0 + 1.0 + (w - 2.0) / 2 + 0.9, FLOOR0 + 0.75, p.z1 - 0.1] }));
    for (let x = p.x0 + 3.0; x < p.x1 - 0.2; x += 0.35) g.add(mesh(cyl(0.02, 0.02, 0.6, 5), mat('#e3cbb2'), { pos: [x, FLOOR0 + 0.42, p.z1 - 0.1] }));
    g.userData.footprint = null;
    return g;
  }

  // -------------------------------------------------------------- followers
  /** Make `obj` pop away whenever the wall `side` of room `roomId` is cut. */
  follow(roomId, side, obj) {
    const key = `${roomId}:${side}`;
    if (!this.followers.has(key)) this.followers.set(key, []);
    this.followers.get(key).push(obj);
    obj.userData.baseScale = obj.scale.clone();
  }

  _reattachFollowers() {
    for (const w of this.walls) {
      w.followers = [...(this.followers.get(w.followerKey) || []), ...(w.followerKeyB ? this.followers.get(w.followerKeyB) || [] : [])];
    }
  }

  wallOf(roomId, side) {
    return this.walls.find((w) => w.followerKey === `${roomId}:${side}` || w.followerKeyB === `${roomId}:${side}`);
  }

  /** Is this room's exterior wall on `side` cut away right now? */
  isCut(roomId, side) {
    return !!this.wallOf(roomId, side)?.cut;
  }

  // -------------------------------------------------------------- per frame
  update(dt, camera, opts = {}) {
    const camDir = new THREE.Vector2(camera.position.x, camera.position.z);
    if (camDir.lengthSq() < 1e-4) camDir.set(0, 1);
    camDir.normalize();
    const below = camera.position.y < 0.2;
    const focus = opts.focus ? this.byId[opts.focus] : null;

    for (const w of this.walls) {
      // fade partitions in the way of a focused room
      let fade = 1;
      if (focus && w.kind === 'partition') {
        if (w.roomA.level === focus.level && blocks(w, camera.position, focus)) fade = 0.15;
      }
      if (focus && w.kind === 'exterior' && w.roomA.level === focus.level && w.roomA !== focus && blocks(w, camera.position, focus)) fade = 0.15;
      w.setFade(fade);
      w.update(dt, camDir, false);
      // followers ride along with their wall's cut state
      if (w.followers?.length) {
        const k = w.upperPivot ? 1 - clamp(w.cutAmount ?? 0) : 1;
        for (const f of w.followers) {
          const b = f.userData.baseScale;
          const s = k < 0.5 ? smoothstep(0, 0.5, k) : 1;
          f.scale.set(b.x * Math.max(0.0001, s), b.y * Math.max(0.0001, s), b.z * Math.max(0.0001, s));
          f.visible = s > 0.01;
        }
      }
    }
    // floors above the focused room hide; with no focus everything shows
    const maxLevel = focus ? focus.level : 9;
    this.levelGroups.forEach((g, l) => {
      const want = l <= maxLevel ? 1 : 0;
      g.userData.k = (g.userData.k ?? 1) + (want - (g.userData.k ?? 1)) * Math.min(1, dt * 6);
      g.visible = g.userData.k > 0.02;
      g.position.y = (1 - g.userData.k) * 2.5;
    });
    for (const fm of this.floorMeshes) fm.visible = !below;
    // roofs: gone whenever the camera is above them (or focusing), visible from the side and below
    for (const r of this.roofs) {
      const room = r.userData.room;
      const ridge = r.userData.ridgeY;
      const show = r.userData.always || (!focus && (camera.position.y < ridge + 0.4 || below)) || (focus && room.level > focus.level && false);
      const hiddenByFocus = focus && room.level >= focus.level && !r.userData.always;
      const want = show && !hiddenByFocus ? 1 : 0;
      r.userData.k = (r.userData.k ?? want) + (want - (r.userData.k ?? want)) * Math.min(1, dt * 7);
      r.visible = r.userData.k > 0.02;
      r.position.y = (1 - r.userData.k) * 3;
      r.scale.setScalar(0.85 + 0.15 * r.userData.k);
      r.position.x = (1 - (0.85 + 0.15 * r.userData.k)) * ((room.x0 + room.x1) / 2);
      r.position.z = (1 - (0.85 + 0.15 * r.userData.k)) * ((room.z0 + room.z1) / 2);
    }
    // boarded door glow breathes
    const t = performance.now() / 1000;
    for (const b of this.boardedDoors) {
      const gl = b.children[0]?.userData.glow;
      if (gl) gl.glowMat.opacity = 0.45 + Math.sin(t * 1.7) * 0.12;
    }
  }

  setSnow(on) {
    this.group.traverse((o) => {
      if (o.userData.snow) o.visible = on;
    });
  }

  setNight(k) {
    glassMat.emissiveIntensity = k * 1.4;
    glassMat.opacity = 0.55 + k * 0.35;
  }
}

function opposite(side) {
  return { north: 'south', south: 'north', east: 'west', west: 'east' }[side];
}

/** Does wall w sit between the camera (xz) and room r's centre? */
function blocks(w, cam, r) {
  const cx = (r.x0 + r.x1) / 2;
  const cz = (r.z0 + r.z1) / 2;
  // wall segment endpoints
  const half = w.length / 2;
  const dx = Math.cos(w.rotY);
  const dz = -Math.sin(w.rotY);
  const ax = w.cx - dx * half;
  const az = w.cz - dz * half;
  const bx = w.cx + dx * half;
  const bz = w.cz + dz * half;
  // test against a few rays from the camera to points in the room
  const pts = [
    [cx, cz],
    [cx + (r.x1 - r.x0) * 0.3, cz],
    [cx - (r.x1 - r.x0) * 0.3, cz],
    [cx, cz + (r.z1 - r.z0) * 0.3],
    [cx, cz - (r.z1 - r.z0) * 0.3],
  ];
  for (const [px, pz] of pts) if (segIntersect(cam.x, cam.z, px, pz, ax, az, bx, bz)) return true;
  return false;
}

function segIntersect(p0x, p0z, p1x, p1z, q0x, q0z, q1x, q1z) {
  const d = (p1x - p0x) * (q1z - q0z) - (p1z - p0z) * (q1x - q0x);
  if (Math.abs(d) < 1e-9) return false;
  const u = ((q0x - p0x) * (q1z - q0z) - (q0z - p0z) * (q1x - q0x)) / d;
  const v = ((q0x - p0x) * (p1z - p0z) - (q0z - p0z) * (p1x - p0x)) / d;
  return u > 0.001 && u < 0.999 && v > 0 && v < 1;
}

function boardsForWindow(op) {
  const g = new THREE.Group();
  const wood = mat('#b98f6c', { roughness: 0.85 });
  g.add(mesh(rbox(op.w + 0.2, 0.18, 0.05, 0.02), wood, { pos: [0, op.h * 0.35, 0.06], rot: [0, 0, 0.3] }));
  g.add(mesh(rbox(op.w + 0.2, 0.18, 0.05, 0.02), wood, { pos: [0, op.h * 0.65, 0.06], rot: [0, 0, -0.25] }));
  return g;
}

function frontDoorLeaf(op) {
  const g = new THREE.Group();
  const hinge = new THREE.Group();
  hinge.position.set(-op.w / 2 + 0.03, 0.01, -T * 0.5);
  const leafShape = new THREE.Shape();
  const lw = op.w - 0.06;
  const r = lw / 2;
  leafShape.moveTo(0, 0);
  leafShape.lineTo(lw, 0);
  leafShape.lineTo(lw, op.h - r - 0.03);
  leafShape.absarc(lw / 2, op.h - r - 0.03, r, 0, Math.PI, false);
  leafShape.lineTo(0, 0);
  const leaf = new THREE.Mesh(new THREE.ExtrudeGeometry(leafShape, { depth: 0.07, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 2, curveSegments: 18 }), mat('#9fb7c9', { roughness: 0.6 }));
  leaf.castShadow = true;
  hinge.add(leaf);
  hinge.add(mesh(sphere(0.045, 10, 8), mat('#e2b866', { roughness: 0.3, metalness: 0.6 }), { pos: [lw - 0.12, 1.0, 0.1] }));
  hinge.rotation.y = -1.25; // left ajar, welcoming
  g.add(hinge);
  g.userData.hinge = hinge;
  return g;
}

export { cloudTexture, gableRoof };
