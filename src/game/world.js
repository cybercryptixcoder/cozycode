// The World ties everything together: renderer, rooms, critters, camera,
// interaction, HUD and the public API the agent layer will talk to.
import * as THREE from 'three';
import { Engine } from '../core/engine.js';
import { sound } from '../core/audio.js';
import { bus } from '../core/events.js';
import { FX } from '../gfx/fx.js';
import { Daylight, applyLamps } from '../world/daylight.js';
import { CameraRig } from '../world/camera-rig.js';
import { Interaction } from '../world/interact.js';
import { buildNook } from '../world/rooms/nook.js';
import { buildPost } from '../world/rooms/post.js';
import { Motes } from '../world/ambient.js';
import { Society } from './society.js';
import { HUD } from '../ui/hud.js';
import { Store } from './store.js';
import { createAPI } from './api.js';
import { clamp, pick } from '../core/util.js';

export class World {
  constructor(container) {
    this.container = container;
    this.engine = new Engine(container, { fov: 30 });
    this.engine.renderer.toneMapping = THREE.NeutralToneMapping;
    this.sound = sound;
    this.bus = bus;
    this.store = new Store();
    this.rooms = {};
    this.roomId = null;
    this.params = new URLSearchParams(location.search);
  }

  async init() {
    const { engine } = this;
    this.daylight = new Daylight(engine);
    const t = this.params.get('time');
    if (t) this.daylight.setPreset(t);
    else if (this.store.data.settings.time && this.store.data.settings.time !== 'auto') this.daylight.setPreset(this.store.data.settings.time);

    this.fx = new FX(engine.scene);
    bus.on('fx', (type, pos, opts) => this.fx.spawn(type, pos, opts));
    bus.on('sfx', (name, opts) => sound.play(name, opts));

    // rooms
    this.rooms.nook = buildNook(this);
    this.rooms.post = buildPost(this);
    for (const r of Object.values(this.rooms)) {
      engine.scene.add(r.group);
      r.setVisible(false);
      r.motes = new Motes(r, r.id === 'nook' ? 170 : 110);
    }

    this.rig = new CameraRig(engine);
    this.interaction = new Interaction({
      dom: engine.renderer.domElement,
      camera: engine.camera,
      getCritters: () => this.society.inRoom(this.roomId),
      getProps: () => this.room?.interactive || [],
      clampPos: (x, z) => {
        const r = this.room;
        const mx = r.w / 2 - 0.45;
        const mz = r.d / 2 - 0.45;
        return [clamp(x, -mx, mx), clamp(z, -mz, mz)];
      },
      onClickCritter: (c) => this.hud?.select(c),
      onClickEmpty: (press) => this.onFloorClick(press),
      onHover: (c, prop, pointer) => this.hud?.hover(c, prop, pointer),
      onDrop: (c) => this.society.onDropped(c),
      sound,
    });
    this.rig.interaction = this.interaction;
    // double-click a sproutling to follow it around
    engine.renderer.domElement.addEventListener('dblclick', (e) => {
      this.interaction._ndcFrom(e);
      const { critter } = this.interaction.pick();
      if (critter) {
        this.hud.select(critter);
        this.rig.follow(critter);
        this.hud._syncCardButtons();
      }
    });
    this.interaction.onDragStart = (c) => this.society.onPicked(c);

    this.society = new Society(this);
    this.society.load(this.store.data.critters);
    const awaySec = (Date.now() - (this.store.data.lastSeen || Date.now())) / 1000;
    if (this.store.data.critters && awaySec > 90) this.society.catchUp(awaySec);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this._hiddenAt = Date.now();
      else if (this._hiddenAt) {
        const s = (Date.now() - this._hiddenAt) / 1000;
        this._hiddenAt = null;
        if (s > 90) this.society.catchUp(s);
      }
    });

    this.hud = new HUD(this);
    this.api = createAPI(this);

    const startRoom = this.params.get('room') || this.store.data.settings.room || 'nook';
    this.enterRoom(this.rooms[startRoom] ? startRoom : 'nook', { instant: true, corner: this.store.data.settings.corner ?? 0 });

    sound.isVisible = (c) => c.roomId === this.roomId;
    sound.setSfx(this.store.data.settings.sfx !== false);
    sound.setMusic(this.store.data.settings.music !== false);

    bus.on('door:click', (room, door) => this.travel(door.to));
    bus.on('music:toggle', () => {
      sound.unlock();
      sound.setMusic(!sound.musicOn);
      this.store.data.settings.music = sound.musicOn;
      this.hud.refreshToggles();
      if (sound.musicOn) this.society.musicStarted();
    });
    bus.on('lamp:toggle', () => this.society.onLampToggled());

    // keyboard
    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.key === 'ArrowLeft' || e.key === 'q' || e.key === 'Q' || e.key === 'a' || e.key === 'A') this.rotate(-1);
      if (e.key === 'ArrowRight' || e.key === 'e' || e.key === 'E' || e.key === 'd' || e.key === 'D') this.rotate(1);
      if (e.key === 'Escape') {
        this.hud.select(null);
        this.rig.unfollow();
      }
    });
    this.rig.onRotate = () => sound.play('rotate');
    this.rig.onCornerChange = () => this.hud.updateCorner();

    engine.onResize = () => this.rig.fit();
    // if the machine struggles, quietly step the visual quality down
    const userPicked = this.params.has('quality');
    let slow = 0;
    engine.onFps = (fps) => {
      if (userPicked || engine.time < 4 || document.hidden) return;
      slow = fps < 38 ? slow + 1 : 0;
      if (slow >= 3 && engine.quality !== 'low') {
        slow = 0;
        engine.setQuality(engine.quality === 'high' ? 'medium' : 'low');
        console.info('[cozy] lowering quality to', engine.quality, `(${fps.toFixed(0)} fps)`);
      }
    };
    engine.add((dt, time) => this.update(dt, time));

    // autosave
    setInterval(() => this.save(), 8000);
    window.addEventListener('beforeunload', () => this.save());
    document.addEventListener('visibilitychange', () => document.hidden && this.save());
  }

  get room() {
    return this.rooms[this.roomId];
  }

  rotate(dir) {
    this.rig.rotate(dir);
  }

  /** Clicking the floor sends the selected sproutling there. */
  onFloorClick(press) {
    const c = this.hud?.selected;
    if (!c || c.roomId !== this.roomId) return;
    const r = this.engine.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2((press.x / r.width) * 2 - 1, -(press.y / r.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.engine.camera);
    const hit = new THREE.Vector3();
    if (!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit)) return;
    const room = this.room;
    if (Math.abs(hit.x) > room.w / 2 || Math.abs(hit.z) > room.d / 2) {
      this.hud.select(null);
      return;
    }
    const p = room.nav.nearestFree(hit.x, hit.z);
    this.fx.spawn('pop', new THREE.Vector3(p.x, 0.08, p.z), {});
    sound.play('click');
    if (c.mainAction?.name === 'sleep') c.play('wake');
    c.brain.run(
      [
        { type: 'walk', to: p, gait: c.traits.energy > 0.5 ? 'hop' : undefined },
        { type: 'act', name: Math.random() < 0.5 ? 'hop' : 'lookAround' },
        { type: 'wait', t: 3, look: this.engine.camera.position },
      ],
      'going where you pointed'
    );
  }

  enterRoom(id, { instant = false, corner = null } = {}) {
    const prev = this.room;
    if (prev) prev.setVisible(false);
    this.roomId = id;
    const room = this.room;
    room.setVisible(true);
    this.fx.clear();
    this.rig.setRoom(room, corner ?? (id === 'post' ? 3 : 0));
    this.society.onRoomShown(id);
    this.hud?.onRoomChanged(room);
    this.store.data.settings.room = id;
  }

  /** Iris-wipe through a door to another room. */
  travel(to) {
    if (!this.rooms[to] || this._traveling) return;
    this._traveling = true;
    sound.play('door');
    const room = this.room;
    const door = room.doors.find((d) => d.to === to);
    if (door) door.target = 1;
    const doorPos = door ? door.holder.getWorldPosition(new THREE.Vector3()).setY(1.1) : new THREE.Vector3();
    const p = doorPos.clone().project(this.engine.camera);
    const x = (p.x * 0.5 + 0.5) * 100;
    const y = (-p.y * 0.5 + 0.5) * 100;
    this.hud.iris(x, y, () => {
      if (door) door.target = 0;
      this.enterRoom(to, {});
      const back = this.room.doors.find((d) => d.to === room.id);
      if (back) {
        back.open = 1;
        back.target = 0;
      }
      sound.play('whoosh');
    }).then(() => {
      this._traveling = false;
    });
  }

  update(dt, time) {
    const room = this.room;
    this.daylight.update(dt, room);
    sound.setAmbience(this.daylight.phase === 'night' ? 'night' : this.daylight.phase === 'morning' ? 'morning' : 'day');
    this.rig.update(dt);
    this.interaction.update(dt);
    room.update(dt, this.engine.camera, time);
    const buf = this.engine.renderer.getDrawingBufferSize(this._buf || (this._buf = new THREE.Vector2()));
    room.motes?.update(dt, this.daylight, this.engine.camera, buf.y);
    this.society.update(dt, time);
    this.fx.update(dt);
    this.hud.update(dt);
  }

  save() {
    this.store.data.critters = this.society.serialize();
    this.store.data.settings.corner = this.rig.corner;
    this.store.data.settings.time = this.daylight.presetId;
    this.store.data.settings.sfx = sound.sfxOn;
    this.store.data.settings.music = sound.musicOn;
    this.store.save();
  }

  start() {
    this.engine.start();
    // a little hello when you arrive
    setTimeout(() => {
      const cam = this.engine.camera.position;
      const here = this.society
        .inRoom(this.roomId)
        .filter((c) => !c.held && c.mainAction?.name !== 'sleep' && !c.brain.station)
        .sort((a, b) => a.position.distanceTo(cam) - b.position.distanceTo(cam))
        .slice(0, 3);
      here.forEach((c, i) =>
        setTimeout(() => {
          c.brain.attending = 2.5;
          c.faceToward(cam);
          c.play(i === 0 ? 'wave' : Math.random() < 0.5 ? 'hop' : 'wave', { sound: i === 0 });
          if (i === 0) c.say(pick(['oh! hi!!', 'you’re here!', 'hiii :)', 'welcome back!']));
        }, 400 + i * 450)
      );
    }, 1600);
  }
}

export { applyLamps };
