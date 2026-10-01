// Navigation for the island: one grid per floor (ground covers the whole
// island, upper floors cover their rooms), walls with door gaps as
// obstacles, plus portals (stairs, ladder) between floors.
import { NavGrid } from '../world/nav.js';
import { T } from './layout.js';

export class FloorNav extends NavGrid {
  constructor(x0, z0, x1, z1, cell = 0.25) {
    super(x1 - x0, z1 - z0, cell, 0.22);
    this.x0 = x0;
    this.z0 = z0;
  }
  ix(x) {
    return Math.floor((x - this.x0) / this.cell);
  }
  iz(z) {
    return Math.floor((z - this.z0) / this.cell);
  }
  cx(i) {
    return this.x0 + (i + 0.5) * this.cell;
  }
  cz(j) {
    return this.z0 + (j + 0.5) * this.cell;
  }
  /** isFree(x, z) decides walkable cells; footprints/segments then block. */
  buildWith(isFree, footprints = [], segments = []) {
    const { cols, rows } = this;
    for (let j = 0; j < rows; j++)
      for (let i = 0; i < cols; i++) {
        const x = this.cx(i);
        const z = this.cz(j);
        let free = isFree(x, z);
        if (free) for (const f of footprints) if (inside(f, x, z, this.inflate)) free = false;
        if (free) for (const s of segments) if (nearSegment(s, x, z)) free = false;
        this.blocked[j * cols + i] = free ? 0 : 1;
      }
  }
  randomFree(rng = Math.random, near = null, radius = 3) {
    for (let tries = 0; tries < 120; tries++) {
      let x;
      let z;
      if (near) {
        const a = rng() * Math.PI * 2;
        const r = rng() * radius;
        x = near.x + Math.cos(a) * r;
        z = near.z + Math.sin(a) * r;
      } else {
        x = this.x0 + rng() * this.w;
        z = this.z0 + rng() * this.d;
      }
      if (this.isFree(x, z)) return { x, z };
    }
    return this.nearestFree(near ? near.x : this.x0 + this.w / 2, near ? near.z : this.z0 + this.d / 2);
  }
}

function inside(f, x, z, inflate) {
  const dx = x - f.x;
  const dz = z - f.z;
  if (f.r !== undefined) return dx * dx + dz * dz < (f.r + inflate) * (f.r + inflate);
  const r = f.rot || 0;
  const lx = dx * Math.cos(r) - dz * Math.sin(r);
  const lz = dx * Math.sin(r) + dz * Math.cos(r);
  return Math.abs(lx) < f.w / 2 + inflate && Math.abs(lz) < f.d / 2 + inflate;
}

/** segment: { ax, az, bx, bz, gaps: [[u0, u1], ...] } with u measured from a */
function nearSegment(s, x, z) {
  const vx = s.bx - s.ax;
  const vz = s.bz - s.az;
  const L = Math.hypot(vx, vz);
  const t = ((x - s.ax) * vx + (z - s.az) * vz) / (L * L);
  if (t < -0.02 || t > 1.02) return false;
  const px = s.ax + vx * t;
  const pz = s.az + vz * t;
  const d = Math.hypot(x - px, z - pz);
  if (d > T / 2 + 0.26) return false;
  const u = t * L;
  for (const [u0, u1] of s.gaps || []) if (u > u0 && u < u1) return false;
  return true;
}

/** Turn the house's walls on one level into blocking segments with door gaps. */
export function wallSegments(house, level) {
  const segs = [];
  for (const w of house.walls) {
    if (w.roomA.level !== level) continue;
    const half = w.length / 2;
    const dx = Math.cos(w.rotY);
    const dz = -Math.sin(w.rotY);
    // segment runs from local u=-half (a) to u=+half (b)
    const ax = w.cx - dx * half;
    const az = w.cz - dz * half;
    const bx = w.cx + dx * half;
    const bz = w.cz + dz * half;
    const gaps = w.openings.filter((o) => o.type === 'door' && !o.boarded).map((o) => [o.u + half - o.w / 2 + 0.12, o.u + half + o.w / 2 - 0.12]);
    // exterior walls sit just outside the room edge
    const off = w.kind === 'exterior' ? -T / 2 : 0;
    const nx = Math.sin(w.rotY) * off; // local +z in world
    const nz = Math.cos(w.rotY) * off;
    segs.push({ ax: ax + nx, az: az + nz, bx: bx + nx, bz: bz + nz, gaps });
  }
  return segs;
}
