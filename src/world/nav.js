// Grid navigation for a room: A* + line-of-sight smoothing.
export class NavGrid {
  constructor(w, d, cell = 0.2, inflate = 0.4) {
    this.w = w;
    this.d = d;
    this.cell = cell;
    this.inflate = inflate;
    this.cols = Math.round(w / cell);
    this.rows = Math.round(d / cell);
    this.blocked = new Uint8Array(this.cols * this.rows);
    this.wallMargin = 0.42;
  }

  // world <-> grid
  ix(x) {
    return Math.floor((x + this.w / 2) / this.cell);
  }
  iz(z) {
    return Math.floor((z + this.d / 2) / this.cell);
  }
  cx(i) {
    return -this.w / 2 + (i + 0.5) * this.cell;
  }
  cz(j) {
    return -this.d / 2 + (j + 0.5) * this.cell;
  }

  build(footprints, openAreas = []) {
    const { cols, rows } = this;
    this.blocked.fill(0);
    for (let j = 0; j < rows; j++)
      for (let i = 0; i < cols; i++) {
        const x = this.cx(i);
        const z = this.cz(j);
        if (Math.abs(x) > this.w / 2 - this.wallMargin || Math.abs(z) > this.d / 2 - this.wallMargin) {
          this.blocked[j * cols + i] = 1;
          continue;
        }
        for (const f of footprints) {
          if (inside(f, x, z, this.inflate)) {
            this.blocked[j * cols + i] = 1;
            break;
          }
        }
      }
    // areas forced open (e.g. the doorway)
    for (const a of openAreas) {
      for (let j = 0; j < rows; j++)
        for (let i = 0; i < cols; i++) if (inside(a, this.cx(i), this.cz(j), 0)) this.blocked[j * cols + i] = 0;
    }
  }

  isFreeCell(i, j) {
    return i >= 0 && j >= 0 && i < this.cols && j < this.rows && !this.blocked[j * this.cols + i];
  }

  isFree(x, z) {
    return this.isFreeCell(this.ix(x), this.iz(z));
  }

  nearestFree(x, z) {
    const i0 = this.ix(x);
    const j0 = this.iz(z);
    if (this.isFreeCell(i0, j0)) return { x, z };
    for (let r = 1; r < Math.max(this.cols, this.rows); r++) {
      let best = null;
      let bd = Infinity;
      for (let dj = -r; dj <= r; dj++)
        for (let di = -r; di <= r; di++) {
          if (Math.max(Math.abs(di), Math.abs(dj)) !== r) continue;
          const i = i0 + di;
          const j = j0 + dj;
          if (!this.isFreeCell(i, j)) continue;
          const d = di * di + dj * dj;
          if (d < bd) {
            bd = d;
            best = { x: this.cx(i), z: this.cz(j) };
          }
        }
      if (best) return best;
    }
    return { x: 0, z: 0 };
  }

  lineOfSight(ax, az, bx, bz) {
    const dist = Math.hypot(bx - ax, bz - az);
    const steps = Math.ceil(dist / (this.cell * 0.5));
    for (let k = 1; k < steps; k++) {
      const t = k / steps;
      if (!this.isFree(ax + (bx - ax) * t, az + (bz - az) * t)) return false;
    }
    return true;
  }

  /** Returns a list of {x,z} points (excluding the start) or null. */
  findPath(from, to) {
    const { cols, rows } = this;
    const s = this.nearestFree(from.x, from.z);
    const g = this.nearestFree(to.x, to.z);
    const si = this.ix(s.x);
    const sj = this.iz(s.z);
    const gi = this.ix(g.x);
    const gj = this.iz(g.z);
    if (this.lineOfSight(from.x, from.z, to.x, to.z) && this.isFree(to.x, to.z)) return [{ x: to.x, z: to.z }];
    const N = cols * rows;
    const gScore = new Float32Array(N).fill(Infinity);
    const came = new Int32Array(N).fill(-1);
    const closed = new Uint8Array(N);
    const open = new MinHeap();
    const start = sj * cols + si;
    const goal = gj * cols + gi;
    gScore[start] = 0;
    const h = (i, j) => {
      const dx = Math.abs(i - gi);
      const dy = Math.abs(j - gj);
      return dx + dy + (Math.SQRT2 - 2) * Math.min(dx, dy);
    };
    open.push(start, h(si, sj));
    let found = false;
    let iter = 0;
    while (open.size && iter++ < 20000) {
      const cur = open.pop();
      if (cur === goal) {
        found = true;
        break;
      }
      if (closed[cur]) continue;
      closed[cur] = 1;
      const ci = cur % cols;
      const cj = (cur / cols) | 0;
      for (let dj = -1; dj <= 1; dj++)
        for (let di = -1; di <= 1; di++) {
          if (!di && !dj) continue;
          const ni = ci + di;
          const nj = cj + dj;
          if (!this.isFreeCell(ni, nj)) continue;
          if (di && dj && (!this.isFreeCell(ci + di, cj) || !this.isFreeCell(ci, cj + dj))) continue;
          const n = nj * cols + ni;
          if (closed[n]) continue;
          const cost = gScore[cur] + (di && dj ? Math.SQRT2 : 1);
          if (cost < gScore[n]) {
            gScore[n] = cost;
            came[n] = cur;
            open.push(n, cost + h(ni, nj));
          }
        }
    }
    if (!found) return null;
    const cells = [];
    for (let c = goal; c !== -1 && c !== start; c = came[c]) cells.push(c);
    cells.reverse();
    const pts = cells.map((c) => ({ x: this.cx(c % cols), z: this.cz((c / cols) | 0) }));
    pts.push({ x: to.x, z: to.z });
    // string-pulling
    const out = [];
    let ax = from.x;
    let az = from.z;
    let k = 0;
    while (k < pts.length) {
      let far = k;
      for (let m = pts.length - 1; m > k; m--) {
        if (this.lineOfSight(ax, az, pts[m].x, pts[m].z)) {
          far = m;
          break;
        }
      }
      out.push(pts[far]);
      ax = pts[far].x;
      az = pts[far].z;
      k = far + 1;
    }
    return out;
  }

  randomFree(rng = Math.random, near = null, radius = 3) {
    for (let tries = 0; tries < 80; tries++) {
      let x;
      let z;
      if (near) {
        const a = rng() * Math.PI * 2;
        const r = rng() * radius;
        x = near.x + Math.cos(a) * r;
        z = near.z + Math.sin(a) * r;
      } else {
        x = (rng() - 0.5) * this.w;
        z = (rng() - 0.5) * this.d;
      }
      if (this.isFree(x, z)) return { x, z };
    }
    return this.nearestFree(near ? near.x : 0, near ? near.z : 0);
  }
}

function inside(f, x, z, inflate) {
  const dx = x - f.x;
  const dz = z - f.z;
  if (f.r !== undefined) return dx * dx + dz * dz < (f.r + inflate) * (f.r + inflate);
  // rotate into the footprint's local frame (three.js Y rotation convention)
  const lx = dx * Math.cos(f.rot || 0) - dz * Math.sin(f.rot || 0);
  const lz = dx * Math.sin(f.rot || 0) + dz * Math.cos(f.rot || 0);
  return Math.abs(lx) < f.w / 2 + inflate && Math.abs(lz) < f.d / 2 + inflate;
}

class MinHeap {
  constructor() {
    this.items = [];
    this.prio = [];
  }
  get size() {
    return this.items.length;
  }
  push(item, p) {
    const a = this.items;
    const pr = this.prio;
    a.push(item);
    pr.push(p);
    let i = a.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (pr[parent] <= pr[i]) break;
      [a[parent], a[i]] = [a[i], a[parent]];
      [pr[parent], pr[i]] = [pr[i], pr[parent]];
      i = parent;
    }
  }
  pop() {
    const a = this.items;
    const pr = this.prio;
    const top = a[0];
    const lastI = a.pop();
    const lastP = pr.pop();
    if (a.length) {
      a[0] = lastI;
      pr[0] = lastP;
      let i = 0;
      for (;;) {
        const l = 2 * i + 1;
        const r = l + 1;
        let m = i;
        if (l < a.length && pr[l] < pr[m]) m = l;
        if (r < a.length && pr[r] < pr[m]) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]];
        [pr[m], pr[i]] = [pr[i], pr[m]];
        i = m;
      }
    }
    return top;
  }
}
