// The island world: terrain chunks + the house + sky, assembled from what
// has been unlocked, plus the camera and input.
import * as THREE from 'three';
import { Engine } from '../core/engine.js';
import { Daylight } from '../world/daylight.js';
import { CHUNKS, ROOMS, H } from './layout.js';
import { buildChunk, buildFence, buildMist, buildSkyClouds, chunkOutline, terrainCut, pointInChunk } from './terrain.js';
import { House, FLOOR0 } from './house.js';
import { IslandCamera } from './camera.js';
import { IslandInput } from './input.js';
import { clamp, easeOutBack, smoothstep } from '../core/util.js';

export function structureFor(unlocks) {
  const u = (k) => !!unlocks[k];
  const built = ['commons'];
  const sealed = [];
  if (u('workshop')) built.push('workshop', 'attic');
  else sealed.push('workshop');
  if (u('study')) built.push('study');
  if (u('kitchen')) built.push('kitchen');
  if (u('upstairs')) built.push('bunk', 'yours');
  const chunks = ['core'];
  if (u('study') || u('kitchen')) chunks.push('west');
  if (u('gate')) chunks.push('gate');
  if (u('garden')) chunks.push('garden');
  if (u('shed')) chunks.push('shed');
  return { built, sealed, chunks, upstairs: u('upstairs') };
}

export class IslandWorld {
  constructor(container, opts = {}) {
    this.engine = new Engine(container, { fov: 30, post: false, quality: opts.quality, preserveDrawingBuffer: true });
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
        this.mist = buildMist(CHUNKS.gate.cx, CHUNKS.gate.cz, CHUNKS.gate.hx * 0.95, CHUNKS.gate.hz * 0.9, 16, 4);
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
    return st;
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
    this.rig.setBounds({ cx, cz, radius, top, depth: 7 });
    // the cut-away under the house matches the built ground floor
    const ground = this.structure.built.map((id) => ROOMS[id]).filter((r) => r.floor === 0);
    const x0 = Math.min(...ground.map((r) => r.x0)) - 0.1;
    const x1 = Math.max(...ground.map((r) => r.x1)) + 0.1;
    const z0 = Math.min(...ground.map((r) => r.z0)) - 0.1;
    const z1 = Math.max(...ground.map((r) => r.z1)) + 0.1;
    terrainCut.uCut.value.set(x0, z0, x1, z1);
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
    this.house.update(dt, cam, { focus: this.focus });
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
    const tint = this.daylight.state ? new THREE.Color(this.daylight.state.hemiSky).lerp(new THREE.Color('#ffffff'), 0.6) : null;
    this.clouds.userData.update(time, tint, below ? 0.7 : 1);
  }
}

export { smoothstep };
