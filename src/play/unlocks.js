// Unlocks are staged moments (10-20 s): the camera turns to look, the crew
// carries boxes, dust puffs, the new place is revealed, a chime. They only
// play while you're watching; if something unlocked while you were away it
// waits for you (after the homecoming).
import * as THREE from 'three';
import { ROOMS, CHUNKS, GATE } from '../island/layout.js';
import { sound } from '../core/audio.js';
import { bus } from '../core/events.js';
import { clamp, easeOutBack, rand } from '../core/util.js';
import { makeItem } from '../world/items.js';

const TITLES = {
  board: 'the idea board',
  workshop: 'the workshop',
  gate: 'the gate',
  study: 'the study',
  kitchen: 'the kitchen',
  upstairs: 'upstairs',
  garden: 'the garden plot',
  shed: 'the long-project shed',
};

export class Stager {
  constructor(game) {
    this.game = game;
    this.world = game.world;
    this.active = null;
  }

  get s() {
    return this.game.store.data;
  }

  get busy() {
    return !!this.active;
  }

  /** Unlocks that exist in the state but haven't been shown yet. */
  pending() {
    return this.s.pendingUnlocks || [];
  }

  /** The structure the world should show right now (pending ones aren't built yet). */
  shownUnlocks() {
    const out = { ...this.s.unlocks };
    for (const p of this.pending()) delete out[p];
    // the board is part of the commons from the start (just covered)
    return out;
  }

  playNext() {
    if (this.active) return false;
    const name = this.pending()[0];
    if (!name) return false;
    this.play(name);
    return true;
  }

  play(name) {
    this._corner = this.world.rig.k;
    const steps = this[`_${name}`]?.() || this._generic(name);
    this.active = { name, steps, t: 0, i: 0 };
    this.game.ui?.label?.(TITLES[name] ? `✦ ${TITLES[name]}` : name, 3.5);
    bus.emit('unlock:start', name);
  }

  /** Skip to the end (tap). */
  skip() {
    const a = this.active;
    if (!a) return;
    for (; a.i < a.steps.length; a.i++) a.steps[a.i].fn?.(true);
    this._finish();
  }

  update(dt) {
    const a = this.active;
    if (!a) return;
    a.t += dt;
    while (a.i < a.steps.length && a.steps[a.i].at <= a.t) {
      a.steps[a.i].fn?.(false);
      a.i++;
    }
    if (a.i >= a.steps.length) this._finish();
  }

  _finish() {
    const a = this.active;
    if (!a) return;
    this.s.pendingUnlocks = this.pending().filter((p) => p !== a.name);
    this.active = null;
    this.game.applyStructure(false);
    bus.emit('unlock:done', a.name);
    this.game.store.save();
  }

  // ------------------------------------------------------------ helpers
  _reveal(name) {
    // add this unlock to what the world shows, with rising land / walls
    const st = this.shownUnlocks();
    st[name] = this.s.unlocks[name];
    const before = new Set(this.world.house.rooms.map((r) => r.id));
    this.world.applyStructure(st, { animate: true });
    this.game.afterStructure();
    const fresh = this.world.house.rooms.filter((r) => !before.has(r.id) || (r.id === 'workshop' && name === 'workshop'));
    for (const w of this.world.house.walls) {
      if (!fresh.includes(w.roomA) && !fresh.includes(w.roomB)) continue;
      const g = w.group;
      g.scale.y = 0.01;
      this.game.scenery.anim((k) => {
        const a = clamp(k / 1.6);
        g.scale.y = Math.max(0.01, easeOutBack(a, 1.2));
        return a < 1;
      });
    }
    for (const r of fresh) {
      const kit = this.world.furnish.kit(r.id);
      if (kit) this.game.scenery.popIn(kit.group);
      this._dust(r, 10);
    }
  }

  _dust(r, n = 8) {
    for (let i = 0; i < n; i++) {
      const p = new THREE.Vector3(rand(r.x0 + 0.5, r.x1 - 0.5), (r.base ?? 0.15) + 0.2, rand(r.z0 + 0.5, r.z1 - 0.5));
      setTimeout(() => this.world.fx.spawn('dust', p, { count: 3, size: 0.45 }), i * 60);
    }
  }

  _look(roomOrRect, corner = null, level = 0) {
    const w = this.world;
    if (corner !== null) w.rig.goToCorner(corner);
    w.focus = roomOrRect?.id && w.house.byId[roomOrRect.id] ? roomOrRect.id : null;
    if (roomOrRect) {
      const y = roomOrRect.base ?? 0.15 + level * 3;
      w.rig.focusOn(roomOrRect, y);
    }
  }

  _unfocus() {
    this.world.focus = null;
    this.world.rig.clearFocus();
    if (this._corner !== undefined) this.world.rig.goToCorner(this._corner);
  }

  _crew(n = 3) {
    return this.game.crew.critters.filter((c) => !c.held && c.level === 0 && c.mainAction?.name !== 'sleep').slice(0, n);
  }

  _carry(c, to, item = 'parcel') {
    c.brain.run(
      [
        { type: 'hold', item: () => makeItem(item), mode: 'front' },
        ...(c.brain.route({ level: 0, x: to.x, z: to.z }) || []),
        { type: 'drop' },
        { type: 'act', name: 'cheer' },
      ],
      'carrying boxes'
    );
  }

  _cheer(text) {
    const cs = this._crew(4);
    cs.forEach((c, i) => setTimeout(() => c.play(i % 2 ? 'hop' : 'cheer'), i * 150));
    if (cs[0] && text) cs[0].say(text);
    sound.play('chime');
    this.game.haptic('done');
  }

  // ------------------------------------------------------------ the sequences
  _board() {
    const r = ROOMS.commons;
    const board = this.world.furnish.obj('commons', 'board');
    const cloth = board?.userData.cloth;
    const ideas = this.game.crew.critters.find((c) => c.member.role === 'ideas') || this.game.crew.critters[0];
    return [
      { at: 0, fn: () => this._look(r, 0) },
      {
        at: 0.2,
        fn: (skip) => {
          if (skip || !ideas) return;
          ideas.brain.run([...(ideas.brain.route({ level: 0, x: 1.45, z: 0.85 }, { face: Math.PI }) || []), { type: 'act', name: 'reach' }], 'uncovering the idea board');
        },
      },
      {
        at: 3.2,
        fn: (skip) => {
          if (!cloth) return;
          this.game.scenery._clothGone = true;
          if (skip) {
            cloth.visible = false;
            return;
          }
          const start = cloth.position.clone();
          this.game.scenery.anim((k) => {
            const a = clamp(k / 1.2);
            cloth.position.set(start.x + a * 0.4, start.y - a * a * 1.6, start.z + a * 0.3);
            cloth.rotation.z = -a * 0.9;
            if (a >= 1) cloth.visible = false;
            return a < 1;
          });
          const p = board.getWorldPosition(new THREE.Vector3());
          this.world.fx.spawn('dust', p, { count: 8, size: 0.5 });
          this.world.fx.spawn('sparkle', p.add(new THREE.Vector3(0, 0.3, 0.3)), { count: 10 });
        },
      },
      { at: 4.8, fn: () => this._cheer('our idea board!') },
      { at: 9.5, fn: () => this._unfocus() },
    ];
  }

  _workshop() {
    const r = ROOMS.workshop;
    const boxes = this.world.furnish.obj('commons', 'boxes');
    const boarded = this.world.house.boardedDoors[0];
    const crew = this._crew(3);
    return [
      { at: 0, fn: () => this._look(ROOMS.commons, 0) },
      {
        at: 0.3,
        fn: (skip) => {
          if (skip) return;
          crew.forEach((c, i) => c.brain.run([...(c.brain.route({ level: 0, x: 3.0 + i * 0.7, z: 1.9 }, { face: Math.PI }) || []), { type: 'act', name: 'think' }], 'about to open the boarded door'));
        },
      },
      {
        at: 3.5,
        fn: (skip) => {
          // planks pop off, warm light floods out
          if (boarded && !skip) {
            const p = boarded.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 1.1, 0.3));
            for (let i = 0; i < 4; i++)
              setTimeout(() => {
                this.world.fx.spawn('dust', p.clone().add(new THREE.Vector3(rand(-0.4, 0.4), rand(-0.6, 0.6), 0)), { count: 4, size: 0.4 });
                sound.play('bonk');
              }, i * 280);
          }
        },
      },
      { at: 5, fn: () => this._reveal('workshop') },
      {
        at: 5.4,
        fn: (skip) => {
          if (boxes) boxes.visible = false;
          if (skip) return;
          // everyone carries a box through into the new room
          crew.forEach((c, i) => this._carry(c, { x: 1.4 + i * 1.1, z: -1.4 - (i % 2) * 0.9 }));
        },
      },
      { at: 8.5, fn: () => this._look(r, 1) },
      { at: 12.5, fn: () => this._cheer('a whole workshop!') },
      { at: 16, fn: () => this._unfocus() },
    ];
  }

  _gate() {
    const g = CHUNKS.gate;
    const rect = { x0: g.cx - g.hx, x1: g.cx + g.hx, z0: g.cz - g.hz, z1: g.cz + g.hz };
    const crew = this._crew(2);
    return [
      { at: 0, fn: () => this._look(rect, 3) },
      { at: 0.8, fn: () => this._reveal('gate') },
      {
        at: 4.5,
        fn: (skip) => {
          if (skip) return;
          crew.forEach((c, i) => c.brain.run([...(c.brain.route({ level: 0, x: GATE.mailbox.x + 0.6 + i * 0.6, z: GATE.mailbox.z + 0.9 }) || []), { type: 'act', name: 'tinker', t: 3 }, { type: 'act', name: 'cheer' }], 'building the gate'));
          const mb = this.world.furnish.obj('gate', 'mailbox');
          if (mb) this.game.scenery.popIn(mb);
        },
      },
      {
        at: 9,
        fn: (skip) => {
          if (skip) return;
          const bird = this.game.arrivals.bird;
          bird?.land(false);
          setTimeout(() => bird?.leave(), 5000);
        },
      },
      { at: 11, fn: () => this._cheer('now things can leave the island!') },
      { at: 15, fn: () => this._unfocus() },
    ];
  }

  _room(name, roomId, corner, line) {
    const r = ROOMS[roomId];
    const crew = this._crew(3);
    return [
      { at: 0, fn: () => this._look(r, corner) },
      { at: 0.6, fn: () => this._reveal(name) },
      {
        at: 3.2,
        fn: (skip) => {
          if (skip) return;
          crew.forEach((c, i) => this._carry(c, { x: (r.x0 + r.x1) / 2 + (i - 1) * 0.9, z: (r.z0 + r.z1) / 2 + 0.6 }));
        },
      },
      { at: 10, fn: () => this._cheer(line) },
      { at: 14, fn: () => this._unfocus() },
    ];
  }

  _study() {
    return this._room('study', 'study', 2, 'a study! with a desk!');
  }

  _kitchen() {
    return this._room('kitchen', 'kitchen', 3, 'the kitchen! tea for everyone');
  }

  _upstairs() {
    const stairBoxes = this.world.house.stairBoxes;
    const crew = this._crew(3);
    return [
      { at: 0, fn: () => this._look(ROOMS.commons, 0) },
      {
        at: 0.5,
        fn: (skip) => {
          if (skip || !stairBoxes) return;
          // the boxes come off the stairs one by one
          stairBoxes.children.forEach((b, i) =>
            setTimeout(() => {
              b.visible = false;
              this.world.fx.spawn('dust', b.getWorldPosition(new THREE.Vector3()), { count: 3, size: 0.35 });
              sound.play('pop');
            }, 400 + i * 380)
          );
          crew.forEach((c, i) => this._carry(c, { x: 1.2 + i * 0.6, z: 5.3 }));
        },
      },
      { at: 4.2, fn: () => this._reveal('upstairs') },
      { at: 6, fn: () => this._look(ROOMS.bunk, 0, 1) },
      { at: 11, fn: () => this._cheer('beds! real beds!') },
      { at: 15, fn: () => this._unfocus() },
    ];
  }

  _generic(name) {
    return [
      { at: 0, fn: () => this._unfocus() },
      { at: 0.4, fn: () => this._reveal(name) },
      { at: 5, fn: () => this._cheer(`${TITLES[name] || name}!`) },
      { at: 9, fn: () => {} },
    ];
  }
}

export { TITLES };
