// The island world: terrain chunks + the house + sky, assembled from what
// has been unlocked, plus the camera and input.
import * as THREE from 'three';
import { Engine } from '../core/engine.js';
import { Daylight } from '../world/daylight.js';
import { CHUNKS, ROOMS, H } from './layout.js';
import { buildChunk, buildFence, buildMist, buildSkyClouds, chunkOutline, terrainCut, pointInChunk, buildShaft } from './terrain.js';
import { House, FLOOR0 } from './house.js';
import { IslandCamera } from './camera.js';
import { IslandInput } from './input.js';
import { Furnisher } from './furnish.js';
import { FloorNav, wallSegments } from './nav.js';
import { PORCH } from './layout.js';
import { FX } from '../gfx/fx.js';
import { swayPlants } from '../world/props/furniture.js';
import { clamp, easeOutBack, smoothstep } from '../core/util.js';

export function structureFor(unlocks) {
  const u = (k) => !!unlocks[k];
  const built = ['commons'];
  const sealed = [];
  if (u('workshop')) built.push('workshop');
  else sealed.push('workshop');
  if (u('study')) built.push('study');
  if (u('kitchen')) built.push('kitchen');
  if (u('upstairs')) built.push('bunk', 'yours', 'attic');
  const chunks = ['core'];
  if (u('study') || u('kitchen')) chunks.push('west');
  if (u('gate')) chunks.push('gate');
  if (u('garden')) chunks.push('garden');
  if (u('shed')) chunks.push('shed');
  return { built, sealed, chunks, upstairs: u('upstairs') };
}

export class IslandWorld {
  constructor(container, opts = {}) {
    this.engine = new Engine(container, { fov: 30, post: false, quality: opts.quality, preserveDrawingBuffer: true, stencil: true });
    this.engine.renderer.toneMapping = THREE.NeutralToneMapping;
    this.engine.scene.environmentIntensity = 0.4;
    this.scene = this.engine.scene;
    this.root = new THREE.Group();
    this.root.name = 'island';
    this.scene.add(this.root);
    this.daylight = new Daylight(this.engine);
    const s = this.daylight.sun.shadow;
    s.camera.left = s.camera.bottom = -17;
    s.camera.right = s.camera.top = 17;
    s.camera.far = 60;
    s.camera.updateProjectionMatrix();
    this.daylight.sun.shadow.radius = 2.5;
    this.house = new House();
    this.root.add(this.house.group);
    this.chunks = new Map();
    this.landGroup = new THREE.Group();
    this.root.add(this.landGroup);
    this.clouds = buildSkyClouds();
    this.scene.add(this.clouds);
    this.rig = new IslandCamera(this.engine.camera);
    this.engine.onResize = () => this.rig.fit();
    this.lamps = { lights: [], glows: [] };
    this.structure = null;
    // furniture + actors live in persistent per-level groups that follow the house's levels
    this.levels = [0, 1, 2].map((l) => {
      const g = new THREE.Group();
      g.name = `actors:${l}`;
      this.root.add(g);
      return g;
    });
    this.furnish = new Furnisher(this);
    this.navs = [];
    this.fx = new FX(this.scene);
  }

  /** Local hour of the day (real clock unless a preset is forced). */
  clockHour() {
    return this.daylight.currentHour();
  }

  /** Bring the world's structure in line with the unlock state. */
  applyStructure(unlocks, { animate = false } = {}) {
    const st = structureFor(unlocks);
    const key = JSON.stringify(st);
    if (this.structure && this.structureKey === key) return st;
    const prev = this.structure;
    this.structure = st;
    this.structureKey = key;
    this.house.build(st);
    this.furnish.sync(st);
    this.lamps = this.furnish.lamps;
    // land chunks
    for (const id of st.chunks) {
      if (this.chunks.has(id)) continue;
      const c = buildChunk(CHUNKS[id]);
      c.children[0].position.y = 0.002 + CHUNKS[id].seed * 0.0025;
      this.landGroup.add(c);
      this.chunks.set(id, c);
      if (animate && prev) {
        c.userData.rise = 0;
        c.position.y = -14;
      }
    }
    // fence + mist where the gate will be, until it exists
    if (!st.chunks.includes('gate')) {
      if (!this.mist) {
        this.mist = buildMist(CHUNKS.gate.cx, CHUNKS.gate.cz, CHUNKS.gate.hx * 0.95, CHUNKS.gate.hz * 0.9, 24, 4);
        this.root.add(this.mist);
        const core = CHUNKS.core;
        const pts = chunkOutline(core)
          .filter(([x, z]) => x < core.cx - 1.2 && z > 5.2)
          .map(([x, z]) => [x + (core.cx - x) * 0.07, z + (core.cz - z) * 0.07]);
        pts.sort((a, b) => a[1] - b[1]);
        this.fence = buildFence(pts.filter((p, i) => i % 2 === 0));
        this.root.add(this.fence);
      }
    } else if (this.mist) {
      this.mist.userData.leaving = 1;
    }
    this._updateBounds();
    this.buildNav();
    return st;
  }

  /** Floor height + walkable grids for every level. */
  levelY(level) {
    return FLOOR0 + level * H;
  }

  /** Height of the walking surface at x/z on a level (ground: house floor vs grass). */
  groundY(level, x, z) {
    if (level > 0) return this.levelY(level);
    if (x > PORCH.x0 - 0.05 && x < PORCH.x1 + 0.05 && z > PORCH.z0 - 0.1 && z < PORCH.z1 + 0.05) return FLOOR0;
    for (const r of this.house.rooms) if (r.level === 0 && x > r.x0 - 0.12 && x < r.x1 + 0.12 && z > r.z0 - 0.12 && z < r.z1 + 0.12) return FLOOR0;
    return 0.01;
  }

  buildNav() {
    const rooms = this.house.rooms;
    const inRoom = (r, x, z) => x > r.x0 && x < r.x1 && z > r.z0 && z < r.z1;
    this.navs = [];
    // ground: the whole island
    const g = new FloorNav(-9, -14, 15, 14, 0.25);
    const ground = rooms.filter((r) => r.level === 0);
    g.buildWith(
      (x, z) => {
        for (const r of ground) if (inRoom(r, x, z)) return !r.sealed;
        if (x > PORCH.x0 && x < PORCH.x1 && z > PORCH.z0 && z < PORCH.z1) return true;
        return this.isOnLand(x, z, 0.75);
      },
      this.furnish.footprintsFor(0),
      wallSegments(this.house, 0)
    );
    this.navs[0] = g;
    for (const level of [1, 2]) {
      const rs = rooms.filter((r) => r.level === level && !r.sealed);
      if (!rs.length) continue;
      const n = new FloorNav(-6.5, -6.5, 6.5, 6.5, 0.25);
      n.buildWith((x, z) => rs.some((r) => inRoom(r, x, z)), this.furnish.footprintsFor(level), wallSegments(this.house, level));
      this.navs[level] = n;
    }
  }

  /** Portals between levels that exist right now: [{id, kind, a:{level,x,z}, b:{level,x,z}, path}] */
  portals() {
    const out = [];
    const h = this.house;
    if (h.upstairs) {
      out.push({
        id: 'stairs',
        kind: 'stairs',
        a: { level: 0, x: 5.35, z: 5.45 },
        b: { level: 1, x: 5.3, z: -0.75 },
        // walk the steps: foot -> top landing -> through the bunk room door
        path: [
          { x: 5.35, z: 5.0, y: FLOOR0 },
          { x: 5.35, z: 0.45, y: FLOOR0 + H },
          { x: 5.3, z: -0.1, y: FLOOR0 + H },
          { x: 5.3, z: -0.75, y: FLOOR0 + H },
        ],
      });
    }
    const attic = h.byId.attic;
    if (attic && !attic.sealed) {
      const below = attic.level - 1;
      out.push({
        id: 'ladder',
        kind: 'ladder',
        a: { level: below, x: 0.7, z: -4.75 },
        b: { level: attic.level, x: 1.55, z: -4.6 },
        path: [
          { x: 0.7, z: -5.05, y: this.levelY(below) },
          { x: 0.7, z: -5.05, y: attic.base + 0.05 },
          { x: 1.55, z: -4.6, y: attic.base },
        ],
      });
    }
    return out;
  }

  _updateBounds() {
    let minX = Infinity;
    let maxX = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;
    // keep the still-misty gate area in frame: you should always see that more exists
    const framed = this.structure.chunks.includes('gate') ? this.structure.chunks : [...this.structure.chunks, 'gate'];
    for (const id of framed) {
      const c = CHUNKS[id];
      minX = Math.min(minX, c.cx - c.hx);
      maxX = Math.max(maxX, c.cx + c.hx);
      minZ = Math.min(minZ, c.cz - c.hz);
      maxZ = Math.max(maxZ, c.cz + c.hz);
    }
    const cx = (minX + maxX) / 2;
    const cz = (minZ + maxZ) / 2;
    const radius = Math.hypot(maxX - minX, maxZ - minZ) / 2;
    const top = this.structure.upstairs ? FLOOR0 + H * 2 + 2.5 : FLOOR0 + H + 2.5;
    // points to frame: land outlines (top + a bit of the rock below), the house's roofline
    const points = [];
    for (const id of framed) {
      const c = CHUNKS[id];
      const ol = chunkOutline(c);
      // the misty, not-yet-there gate only needs to peek into frame
      const k = this.structure.chunks.includes(id) ? 1 : 0.15;
      for (let i = 0; i < ol.length; i += 3) {
        const x = c.cx + (ol[i][0] - c.cx) * k;
        const z = c.cz + (ol[i][1] - c.cz) * k;
        points.push(new THREE.Vector3(x, 0.1, z));
        if (k === 1) points.push(new THREE.Vector3(c.cx + (ol[i][0] - c.cx) * 0.5, -c.depth * 0.42, c.cz + (ol[i][1] - c.cz) * 0.5));
      }
    }
    for (const r of this.house.rooms) {
      const y = r.base + r.height + 1.3;
      for (const [x, z] of [
        [r.x0, r.z0],
        [r.x1, r.z0],
        [r.x0, r.z1],
        [r.x1, r.z1],
      ])
        points.push(new THREE.Vector3(x, y, z));
    }
    this.rig.setBounds({ cx, cz, radius, top, depth: 7, points });
    // the cut-away under the house matches the built ground floor
    const ground = this.structure.built.map((id) => ROOMS[id]).filter((r) => r.floor === 0);
    const x0 = Math.min(...ground.map((r) => r.x0)) - 0.1;
    const x1 = Math.max(...ground.map((r) => r.x1)) + 0.1;
    const z0 = Math.min(...ground.map((r) => r.z0)) - 0.1;
    const z1 = Math.max(...ground.map((r) => r.z1)) + 0.1;
    terrainCut.uCut.value.set(x0, z0, x1, z1);
    const key = [x0, z0, x1, z1].join();
    if (this._shaftKey !== key) {
      this._shaftKey = key;
      if (this.shaft) this.root.remove(this.shaft);
      this.shaft = buildShaft(x0, z0, x1, z1, 3.2);
      this.root.add(this.shaft);
    }
  }

  isOnLand(x, z, margin = 0.6) {
    for (const id of this.structure.chunks) if (pointInChunk(CHUNKS[id], x, z, margin)) return true;
    return false;
  }

  update(dt, time) {
    this.rig.update(dt);
    this.daylight.update(dt, this.lamps);
    const cam = this.engine.camera;
    const below = cam.position.y < 0.2;
    terrainCut.uCutOn.value = below ? 1 : 0;
    if (this.shaft) this.shaft.visible = below;
    this.house.update(dt, cam, { focus: this.focus });
    // actor/furniture levels ride along with the house's levels
    this.levels.forEach((g, l) => {
      const hg = this.house.levelGroups[l];
      const k = hg?.userData.k ?? 1;
      g.visible = k > 0.02;
      g.position.y = (1 - k) * 2.5;
    });
    const under = this.furnish.kit('underside');
    if (under) under.group.visible = cam.position.y < 0.6;
    this.house.setNight(this.daylight.state ? clamp(this.daylight.state.lamps, 0, 1) : 0);
    // rising land chunks
    for (const c of this.chunks.values()) {
      if (c.userData.rise !== undefined) {
        c.userData.rise = Math.min(1, c.userData.rise + dt / 3.2);
        c.position.y = -14 * (1 - easeOutBack(c.userData.rise, 0.9));
        if (c.userData.rise >= 1) delete c.userData.rise;
      }
    }
    if (this.mist) {
      let k = 1;
      if (this.mist.userData.leaving !== undefined) {
        this.mist.userData.leaving -= dt / 2;
        k = Math.max(0, this.mist.userData.leaving);
        if (k <= 0) {
          this.root.remove(this.mist);
          this.root.remove(this.fence);
          this.mist = null;
        }
      }
      this.mist?.userData.update(time, k);
    }
    this.fx.update(dt);
    if (!this._sway || this._swayN !== this.furnish.kits.size) {
      this._swayN = this.furnish.kits.size;
      this._sway = swayPlants([...this.furnish.kits.values()].flatMap((k) => k.plants));
    }
    this._sway(dt, time);
    const tint = this.daylight.state ? new THREE.Color(this.daylight.state.hemiSky).lerp(new THREE.Color('#ffffff'), 0.6) : null;
    this.clouds.userData.update(time, tint, below ? 0.7 : 1);
  }
}

export { smoothstep };
