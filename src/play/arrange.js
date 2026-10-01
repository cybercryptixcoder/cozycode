// Moving things around: long-press furniture (or a finished object on its
// pedestal) to pick it up, drag it somewhere else in the room, let go.
// Where things are is remembered.
import * as THREE from 'three';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { clamp } from '../core/util.js';
import { ROOMS } from '../island/layout.js';

const _plane = new THREE.Plane();
const _hit = new THREE.Vector3();

export class Arrange {
  constructor(game) {
    this.game = game;
    this.moving = null;
    bus.on('move:start', (p) => this.start(p));
    bus.on('move:drag', (p, ray) => this.drag(p, ray));
    bus.on('move:end', (p) => this.end(p));
  }

  get s() {
    return this.game.store.data;
  }

  /** Put saved furniture back where the player left it. */
  applyPlacements() {
    const f = this.game.world.furnish;
    for (const [key, pl] of Object.entries(this.s.placements || {})) {
      const [room, name] = key.split(':');
      if (room === 'artifact') continue;
      const kit = f.kit(room);
      const obj = kit?.objects[name];
      if (!obj || obj.userData._placed === `${pl.x},${pl.z}`) continue;
      this._moveTo(kit, obj, name, pl.x, pl.z);
      obj.userData._placed = `${pl.x},${pl.z}`;
    }
  }

  _moveTo(kit, obj, name, x, z) {
    const dx = x - obj.position.x;
    const dz = z - obj.position.z;
    obj.position.x = x;
    obj.position.z = z;
    for (const fp of kit.footprints) if (fp.name === name) (fp.x += dx), (fp.z += dz);
    for (const st of kit.stations) {
      if (st.of !== name) continue;
      st.pos = { x: st.pos.x + dx, z: st.pos.z + dz };
      if (st.approach) st.approach = { x: st.approach.x + dx, z: st.approach.z + dz };
    }
  }

  start(p) {
    const mv = p.userData.movable;
    if (!mv) return;
    this.moving = { p, y0: p.position.y, x0: p.position.x, z0: p.position.z };
    p.position.y += 0.3;
    sound.play('pop');
    this.game.ui?.label(`moving the ${mv.label || mv.name}`, 2);
  }

  _room(mv) {
    if (mv.artifact) return this.game.world.house.byId.workshop;
    return this.game.world.house.byId[mv.room] || ROOMS[mv.room];
  }

  drag(p, ray) {
    const m = this.moving;
    if (!m || m.p !== p) return;
    const mv = p.userData.movable;
    const r = this._room(mv);
    const parent = p.parent;
    const y = parent.getWorldPosition(new THREE.Vector3()).y;
    _plane.set(new THREE.Vector3(0, 1, 0), -y);
    if (!ray.ray.intersectPlane(_plane, _hit)) return;
    p.position.x = clamp(_hit.x, r.x0 + 0.45, r.x1 - 0.45);
    p.position.z = clamp(_hit.z, r.z0 + 0.45, r.z1 - 0.45);
  }

  end(p) {
    const m = this.moving;
    if (!m || m.p !== p) return;
    this.moving = null;
    const mv = p.userData.movable;
    const x = +p.position.x.toFixed(2);
    const z = +p.position.z.toFixed(2);
    p.position.set(m.x0, m.y0, m.z0);
    if (mv.artifact) {
      p.position.set(x, m.y0, z);
      (this.s.placements ||= {})[`artifact:${mv.thread}`] = { x, z };
    } else {
      const kit = this.game.world.furnish.kit(mv.room);
      this._moveTo(kit, p, mv.name, x, z);
      (this.s.placements ||= {})[`${mv.room}:${mv.name}`] = { x, z };
      p.userData._placed = `${x},${z}`;
    }
    this.game.world.fx.spawn('dust', p.getWorldPosition(new THREE.Vector3()), { count: 4, size: 0.35 });
    sound.play('land');
    this.game.world.buildNav();
    this.game.director.taste('move', { what: mv.name || 'artifact' });
    this.game.store.save();
  }
}
