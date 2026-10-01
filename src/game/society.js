// The household: spawns sproutlings, runs their brains, and handles everything
// that involves more than one of them (chatting, playing tag, bumping into
// each other, tea parties) plus the shared things they make (notes, to-dos,
// letters, paintings).
import * as THREE from 'three';
import { Critter, PALETTE, ACCESSORIES } from '../critters/critter.js';
import { Brain } from './brain.js';
import { line } from './lines.js';
import { makeItem } from '../world/items.js';
import { noteMesh } from '../world/props/decor.js';
import { letterCard } from '../world/props/post.js';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { rand, chance, pick, clamp, uid } from '../core/util.js';

export const DEFAULT_CREW = [
  {
    name: 'Mochi',
    color: '#ffb18f',
    accessory: 'sprout',
    seed: 7,
    traits: { energy: 0.6, curiosity: 0.85, sociability: 0.8, sleepiness: 0.35, clumsiness: 0.45, chattiness: 0.75 },
    faceShape: { eyeDX: 0.156, eyeSize: 1.04, eyeY: 0.56 },
    likes: { ideas: 1, learn: 0.6, social: 0.4 },
    bio: 'Keeps the idea board tidy. Mostly.',
  },
  {
    name: 'Pip',
    color: '#93dcbc',
    accessory: 'antenna',
    seed: 21,
    traits: { energy: 0.95, curiosity: 0.7, sociability: 0.6, sleepiness: 0.15, clumsiness: 0.85, chattiness: 0.6 },
    likes: { build: 1, fun: 0.8, work: 0.5 },
    bio: 'Builds tiny robots. Trips over them too.',
  },
  {
    name: 'Nori',
    color: '#c4b0f2',
    accessory: 'leaf',
    seed: 33,
    traits: { energy: 0.25, curiosity: 0.5, sociability: 0.45, sleepiness: 0.9, clumsiness: 0.2, chattiness: 0.3 },
    likes: { rest: 1, calm: 0.9, learn: 0.6 },
    bio: 'Professional napper. Excellent at reading.',
  },
  {
    name: 'Biscuit',
    color: '#ffd977',
    accessory: 'flower',
    seed: 48,
    traits: { energy: 0.7, curiosity: 0.6, sociability: 0.95, sleepiness: 0.4, clumsiness: 0.4, chattiness: 0.95 },
    likes: { social: 1, music: 0.8, care: 0.5 },
    bio: 'Hosts tea. Knows everyone’s business.',
  },
  {
    name: 'Tofu',
    color: '#95c8f4',
    accessory: 'sprout',
    seed: 55,
    traits: { energy: 0.55, curiosity: 0.55, sociability: 0.45, sleepiness: 0.45, clumsiness: 0.3, chattiness: 0.35 },
    likes: { work: 1, tasks: 0.9, mail: 0.8 },
    bio: 'Runs the post room with great seriousness.',
  },
  {
    name: 'Pebble',
    color: '#ffa3bf',
    accessory: 'leaf',
    seed: 69,
    traits: { energy: 0.45, curiosity: 0.75, sociability: 0.55, sleepiness: 0.55, clumsiness: 0.55, chattiness: 0.5 },
    size: 0.9,
    likes: { care: 1, calm: 0.7, fun: 0.5 },
    bio: 'Talks to the plants. The plants listen.',
  },
];

const NAMES = ['Sprig', 'Dumpling', 'Waffle', 'Clover', 'Miso', 'Peaches', 'Juniper', 'Noodle', 'Fig', 'Momo', 'Bean', 'Puddle', 'Toast', 'Bun', 'Kiwi', 'Maple'];

export class Society {
  constructor(world) {
    this.world = world;
    this.critters = [];
    this.pendingNotes = [];
    this.pendingTodos = [];
    this.pendingLetters = [];
    this.chats = [];
    this.games = [];
    this._greetT = 0;
    this.ctx = {
      fx: (type, pos, opts) => this._fx(type, pos, opts),
      sfx: (name, opts) => sound.play(name, opts),
      camera: world.engine.camera,
      beat: () => sound.beat(),
      makeItem: (kind) => makeItem(kind),
      onSay: (c, text, opts) => bus.emit('critter:say', c, text, opts),
    };
    world.makeItem = (kind) => makeItem(kind);
  }

  _fx(type, pos, opts) {
    // only show particles for the room we're looking at
    const c = opts?.critter;
    if (c && c.roomId !== this.world.roomId) return;
    if (this._fxRoomGuard && this._fxRoomGuard !== this.world.roomId) return;
    this.world.fx.spawn(type, pos, opts);
  }

  // ------------------------------------------------------------ roster
  load(saved) {
    const fresh = !(Array.isArray(saved) && saved.length);
    const list = fresh ? DEFAULT_CREW.map((d, i) => ({ ...d, roomId: i === 4 ? 'post' : 'nook' })) : saved;
    for (const d of list) this.spawn(d, { silent: true });
    const w = this.world;
    if (fresh) {
      // a lived-in start: a few things already on the boards
      const data = w.store.data;
      const now = Date.now();
      if (!data.notes.length)
        [
          ['more naps (scientifically)', 'Nori', '#c9f2c0'],
          ['a robot that waters the plants', 'Pip', '#bfe8ff'],
          ['tea party at 4?', 'Biscuit', '#ffe68a'],
          ['what if the mailbox could sing', 'Mochi', '#ffc2d6'],
        ].forEach(([text, by, color], i) => data.notes.push({ id: uid('note'), text, by, color, at: now - (4 - i) * 60000 }));
      if (!data.todos.length) data.todos.push({ id: uid('todo'), text: 'say hi to the sproutlings', done: false, at: now });
      if (!data.letters.length)
        ['dear world, hello! love, the crew', 'thank you, sun, for the naps', 'to the plant shop: more pots pls'].forEach((text, i) =>
          data.letters.push({ id: uid('letter'), text, at: now - (3 - i) * 86400000 })
        );
    }
    // restore notes / todos / letters
    for (const n of w.store.data.notes) this._addNoteMesh(n, false);
    this._redrawTodos();
    for (const l of w.store.data.letters) this._addLetterCard(l, false);
  }

  serialize() {
    return this.critters.map((c) => ({
      id: c.id,
      name: c.name,
      color: c.color,
      accessory: c.accessory,
      seed: c.seed,
      traits: c.traits,
      size: c.size,
      faceShape: c.face.shape,
      likes: c.brain.likes,
      bio: c.bio,
      roomId: c.roomId,
      x: c.position.x,
      z: c.position.z,
    }));
  }

  spawn(d = {}, { silent = false, viaDoor = false } = {}) {
    const n = this.critters.length;
    const usedNames = new Set(this.critters.map((c) => c.name));
    const name = d.name || NAMES.find((x) => !usedNames.has(x)) || `Sprout ${n + 1}`;
    const usedColors = new Set(this.critters.map((c) => c.color));
    const color = d.color || (PALETTE.find((p) => !usedColors.has(p.color)) || pick(PALETTE)).color;
    const c = new Critter({
      id: d.id,
      name,
      color,
      accessory: d.accessory || pick(ACCESSORIES),
      seed: d.seed ?? Math.floor(Math.random() * 1e6),
      traits: d.traits,
      faceShape: d.faceShape,
      size: d.size,
      ctx: this.ctx,
    });
    c.bio = d.bio || pick(['New here. Very excited.', 'Likes snacks and long naps.', 'Has opinions about tea.', 'Collects shiny pebbles.']);
    c.brain = new Brain(c, this, { likes: d.likes || {} });
    const roomId = d.roomId && this.world.rooms[d.roomId] ? d.roomId : this.world.roomId || 'nook';
    c.roomId = roomId;
    const room = this.world.rooms[roomId];
    room.group.add(c.root);
    let p = d.x !== undefined ? room.nav.nearestFree(d.x, d.z) : room.randomFreePoint();
    c.position.set(p.x, 0, p.z);
    c.setHeading(rand(-1, 1), true);
    this.critters.push(c);
    if (viaDoor) c.brain.arrive(room);
    else if (!silent) {
      c.airY = 2.8;
      c.falling = true;
      sound.play('spawn');
      this._fx('sparkle', c.position.clone().setY(1.2), { count: 8 });
    }
    bus.emit('critter:spawned', c);
    return c;
  }

  remove(c) {
    c.brain.cancel();
    c.root.parent?.remove(c.root);
    c.dispose();
    this.critters = this.critters.filter((x) => x !== c);
    bus.emit('critter:removed', c);
  }

  inRoom(id) {
    return this.critters.filter((c) => c.roomId === id);
  }

  find(q) {
    if (!q) return null;
    const s = String(q).toLowerCase();
    return this.critters.find((c) => c.id === q || c.name.toLowerCase() === s) || null;
  }

  moveToRoom(c, roomId) {
    const room = this.world.rooms[roomId];
    if (!room) return;
    const from = this.world.rooms[c.roomId];
    const door = from.doors.find((d) => d.to === roomId);
    if (door) setTimeout(() => (door.target = 0), 400);
    c.roomId = roomId;
    room.group.add(c.root);
    c.brain.arrive(room);
    bus.emit('critter:moved', c, roomId);
  }

  onRoomShown(id) {
    for (const c of this.critters) c.root.visible = true;
    void id;
  }

  // ------------------------------------------------------------ user poking
  onPicked(c) {
    c.brain.interrupt();
    this.leaveSocial(c);
    if (chance(0.5)) setTimeout(() => c.held && c.say(pick(['wheee!', 'whoa!', 'up we go!'])), 300);
  }

  onDropped(c) {
    const room = this.world.rooms[c.roomId];
    const p = room.nav.nearestFree(c.position.x, c.position.z);
    c.position.x = p.x;
    c.position.z = p.z;
    c.brain.paused = 1.6;
    if (chance(0.35)) setTimeout(() => c.say(line('dropped')), 900);
  }

  // ------------------------------------------------------------ update
  update(dt) {
    const shown = this.world.roomId;
    for (const c of this.critters) {
      c.brain.update(dt);
      c.update(dt);
      // trips happen (to the clumsy) while walking
      if (c.walking && !c.held && c.speed > 0.6 && c.roomId === shown && Math.random() < dt * 0.006 * c.traits.clumsiness) {
        c.play('trip');
        setTimeout(() => chance(0.6) && c.say(line('tripped')), 2600);
      }
    }
    this._separate(dt);
    this._greetings(dt);
    this._updateChats(dt);
    this._updateGames(dt);
  }

  _separate(dt) {
    const byRoom = {};
    for (const c of this.critters) (byRoom[c.roomId] ||= []).push(c);
    for (const list of Object.values(byRoom)) {
      for (let i = 0; i < list.length; i++)
        for (let j = i + 1; j < list.length; j++) {
          const a = list[i];
          const b = list[j];
          if (a.held || b.held) continue;
          const dx = b.position.x - a.position.x;
          const dz = b.position.z - a.position.z;
          const d = Math.hypot(dx, dz);
          const min = 0.46 * (a.size + b.size);
          if (d > 0.0001 && d < min) {
            const push = (min - d) * Math.min(1, dt * 8);
            const aFixed = a.seat > 0.01 || a.busy;
            const bFixed = b.seat > 0.01 || b.busy;
            const ka = aFixed ? 0 : bFixed ? 1 : 0.5;
            const kb = bFixed ? 0 : aFixed ? 1 : 0.5;
            a.position.x -= (dx / d) * push * ka;
            a.position.z -= (dz / d) * push * ka;
            b.position.x += (dx / d) * push * kb;
            b.position.z += (dz / d) * push * kb;
            // head-on bump between two walkers: bonk! (rarely)
            if (a.walking && b.walking && d < min * 0.75 && !a._bonkCool && !b._bonkCool && chance(0.35)) {
              a._bonkCool = b._bonkCool = true;
              setTimeout(() => (a._bonkCool = b._bonkCool = false), 20000);
              a.play('bonk', { from: b.position });
              b.play('bonk', { from: a.position });
              this._fx('sparkle', a.position.clone().lerp(b.position, 0.5).setY(0.9), { critter: a, count: 3 });
              setTimeout(() => a.say(line('bump')), 500);
            }
          }
        }
    }
  }

  _greetings(dt) {
    this._greetT -= dt;
    if (this._greetT > 0) return;
    this._greetT = 0.5;
    const now = performance.now() / 1000;
    for (const a of this.critters) {
      if (a.held || a.busy) continue;
      for (const b of this.critters) {
        if (a === b || a.roomId !== b.roomId) continue;
        const d = a.position.distanceTo(b.position);
        if (d > 1.8 || d < 0.6) continue;
        const last = a.brain.lastGreet.get(b.id) || -999;
        if (now - last < 90) continue;
        a.brain.lastGreet.set(b.id, now);
        b.brain.lastGreet.set(a.id, now);
        if (chance(0.5)) {
          a.lookAt(b, 2);
          b.lookAt(a, 2);
          a.play('wave', { target: b, sound: false });
          if (chance(0.4)) a.say(line('greet'));
        }
      }
    }
  }

  // ------------------------------------------------------------ chatting
  startChat(a, b) {
    if (b.brain.chatting || a.brain.chatting) return;
    const room = this.world.rooms[a.roomId];
    // meet halfway
    const mid = { x: (a.position.x + b.position.x) / 2, z: (a.position.z + b.position.z) / 2 };
    const dir = new THREE.Vector2(b.position.x - a.position.x, b.position.z - a.position.z);
    if (dir.lengthSq() < 0.01) dir.set(1, 0);
    dir.normalize();
    let pa = room.nav.nearestFree(mid.x - dir.x * 0.5, mid.z - dir.y * 0.5);
    let pb = room.nav.nearestFree(mid.x + dir.x * 0.5, mid.z + dir.y * 0.5);
    const chat = { a, b, t: 0, turns: Math.floor(rand(3, 6)), speaker: 0, next: 0.6, ended: false, ready: 0 };
    a.brain.chatting = chat;
    b.brain.chatting = chat;
    const onArrive = () => chat.ready++;
    a.brain.run([{ type: 'walk', to: pa }, { type: 'call', fn: onArrive }, { type: 'wait', t: 999 }], 'having a chat');
    b.brain.run([{ type: 'walk', to: pb }, { type: 'call', fn: onArrive }, { type: 'wait', t: 999 }], 'having a chat');
    this.chats.push(chat);
  }

  leaveSocial(c) {
    for (const ch of this.chats) if (ch.a === c || ch.b === c) this._endChat(ch);
    for (const g of this.games) if (g.a === c || g.b === c) g.ended = true;
  }

  _endChat(ch, ending = null) {
    if (ch.ended) return;
    ch.ended = true;
    for (const c of [ch.a, ch.b]) {
      c.brain.chatting = null;
      c.stop('talk');
      if (c.brain.task?.type === 'wait' && c.brain.task.t === 999) c.brain.task.done = true;
    }
    if (ending) {
      ch.a.play(ending, { partner: ch.b });
      ch.b.play(ending, { partner: ch.a });
    }
    ch.a.brain.needs.social = clamp(ch.a.brain.needs.social + 0.4);
    ch.b.brain.needs.social = clamp(ch.b.brain.needs.social + 0.4);
  }

  _updateChats(dt) {
    for (const ch of this.chats) {
      if (ch.ended) continue;
      ch.t += dt;
      const { a, b } = ch;
      if (ch.t > 30 || a.held || b.held || a.roomId !== b.roomId) {
        this._endChat(ch);
        continue;
      }
      if (ch.ready < 2) continue;
      if (!ch.started) {
        ch.started = true;
        a.faceToward(b.position);
        b.faceToward(a.position);
        a.play('talk');
        b.play('talk');
      }
      a.lookAt(b, 1);
      b.lookAt(a, 1);
      ch.next -= dt;
      if (ch.next > 0) continue;
      const speaker = ch.speaker % 2 === 0 ? a : b;
      const listener = speaker === a ? b : a;
      if (ch.speaker >= ch.turns * 2) {
        this._endChat(ch, pick(['hug', 'giggle', 'nod', 'hop', 'wave']));
        continue;
      }
      const text = ch.speaker === 0 ? line('chat') : ch.speaker % 2 ? line('reply') : line('chat');
      speaker.say(text);
      if (chance(0.3)) listener.play(pick(['nod', 'giggle', 'tilt']));
      ch.speaker++;
      ch.next = Math.max(1.4, text.length * 0.07 + 0.7);
    }
    this.chats = this.chats.filter((c) => !c.ended);
  }

  // ------------------------------------------------------------ play (tag!)
  startPlay(a, b) {
    if (a.brain.chatting || b.brain.chatting) return;
    const g = { a, b, t: 0, it: a, runner: b, ended: false, legs: 0 };
    a.brain.run([{ type: 'wait', t: 999 }], 'playing tag');
    b.brain.run([{ type: 'wait', t: 999 }], 'playing tag');
    a.brain.chatting = b.brain.chatting = g;
    b.play('surprised');
    a.say(pick(["tag! you're it!", 'catch me!', 'bet you can’t catch me']));
    g.it = b;
    g.runner = a;
    this.games.push(g);
  }

  _updateGames(dt) {
    for (const g of this.games) {
      if (g.ended) continue;
      g.t += dt;
      const { it, runner } = g;
      const room = this.world.rooms[it.roomId];
      if (g.t > 24 || it.held || runner.held || it.roomId !== runner.roomId) g.ended = true;
      if (g.ended) {
        for (const c of [g.a, g.b]) {
          c.brain.chatting = null;
          c.stopWalking();
          if (c.brain.task?.t === 999) c.brain.task.done = true;
          c.brain.needs.fun = clamp(c.brain.needs.fun + 0.5);
        }
        g.a.play('giggle');
        g.b.play('giggle');
        continue;
      }
      // runner flees to random spots, "it" chases
      if (!runner.walking && !runner.busy) {
        const p = room.randomFreePoint();
        const path = room.nav.findPath(runner.position, p);
        if (path) runner.walkPath(path, { gait: 'run', speed: 0.85 });
      }
      g.repath = (g.repath || 0) - dt;
      if (g.repath <= 0 && !it.busy) {
        g.repath = 0.4;
        const path = room.nav.findPath(it.position, runner.position);
        if (path) it.walkPath(path, { gait: 'run', speed: 0.95 });
      }
      if (it.position.distanceTo(runner.position) < 0.85 && !runner.busy) {
        g.legs++;
        runner.play('surprised');
        it.play('hop');
        it.say(pick(['tag!', 'gotcha!', 'hehe!']));
        it.stopWalking();
        g.it = runner;
        g.runner = it;
        if (g.legs > 3) g.ended = true;
      }
    }
    this.games = this.games.filter((g) => !g.ended);
  }

  // ------------------------------------------------------------ shared things
  teaParty(room) {
    return room.stations.filter((s) => s.activity === 'tea' && s.reservedBy).length;
  }

  teaTalk(c, dt) {
    const others = this.critters.filter((o) => o !== c && o.roomId === c.roomId && o.brain.station?.activity === 'tea');
    if (!others.length) return;
    const o = others[0];
    c.lookAt(o, 0.5);
    if (Math.random() < dt * 0.12) {
      c.say(chance(0.5) ? line('chat') : line('reply'));
      if (chance(0.5)) setTimeout(() => o.play(pick(['nod', 'giggle'])), 900);
    }
    c.brain.needs.social = clamp(c.brain.needs.social + dt * 0.03);
  }

  haveIdea(c) {
    const ideas = [
      'a robot that waters plants',
      'pancake tuesdays',
      'a slide from the bed to the kitchen',
      'tiny hats for everyone',
      'a map of every cozy spot',
      'a song about clouds',
      'paint the mailbox with stars',
      'a library for snacks',
    ];
    const idea = pick(ideas);
    c.say(`${pick(['ooh! ', 'what if… ', 'idea: ', ''])}${idea}`);
    if (chance(0.35)) this.addNote(idea, { by: c.name, fromCritter: true });
  }

  wigglePlantNear(c) {
    const room = this.world.rooms[c.roomId];
    let best = null;
    let bd = 2.5;
    room.props.traverse((o) => {
      if (o.userData.foliage) {
        const d = o.getWorldPosition(new THREE.Vector3()).distanceTo(c.position);
        if (d < bd) {
          bd = d;
          best = o;
        }
      }
    });
    if (best) {
      best.userData.wiggle = 1;
      this._fx('sparkle', best.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.8, 0)), { critter: c, count: 4 });
      if (c.roomId === this.world.roomId) sound.play('plant');
    }
  }

  paintStroke(room, dt) {
    if (Math.random() > dt * 2) return;
    const easel = room.props.children.find((o) => o.userData.canvas);
    if (!easel) return;
    const cv = easel.userData.canvas;
    const g = cv.getContext('2d');
    g.strokeStyle = pick(['#ffb59a', '#9fdcc0', '#c7b6ee', '#ffd36b', '#95c8f4', '#ff9db5']);
    g.globalAlpha = 0.8;
    g.lineWidth = rand(4, 10);
    g.lineCap = 'round';
    g.beginPath();
    const x = rand(20, 236);
    const y = rand(20, 180);
    g.moveTo(x, y);
    g.quadraticCurveTo(x + rand(-40, 40), y + rand(-40, 40), x + rand(-60, 60), y + rand(-30, 30));
    g.stroke();
    g.globalAlpha = 1;
    const m = easel.userData.canvasMesh.material;
    const map = Array.isArray(m) ? m[4].map : m.map;
    if (map) map.needsUpdate = true;
  }

  // notes on the idea board -------------------------------------------------
  addNote(text, meta = {}) {
    const note = { id: uid('note'), text: String(text).slice(0, 140), color: pick(['#ffe68a', '#ffc2d6', '#bfe8ff', '#c9f2c0', '#ffd6a8']), at: Date.now(), ...meta };
    this.pendingNotes.push(note);
    bus.emit('note:queued', note);
    // make sure someone in the nook goes to pin it
    const nook = this.world.rooms.nook;
    const st = nook.stations.find((s) => s.activity === 'pin');
    if (st && !st.reservedBy) {
      const helper = this.pickHelper('nook', meta.by);
      if (helper) helper.brain.doStation(st);
    }
    return note;
  }

  pickHelper(roomId, preferName) {
    const pref = preferName ? this.find(preferName) : null;
    if (pref && pref.roomId === roomId && !pref.held) return pref;
    const list = this.inRoom(roomId).filter((c) => !c.held && c.mainAction?.name !== 'sleep' && !c.brain.chatting);
    if (!list.length) return null;
    return list.sort((a, b) => (a.brain.station ? 1 : 0) - (b.brain.station ? 1 : 0))[0];
  }

  pinNote(note, c) {
    const notes = this.world.store.data.notes;
    notes.push(note);
    if (notes.length > 15) notes.shift();
    this._addNoteMesh(note, true);
    bus.emit('note:pinned', note, c);
  }

  _addNoteMesh(note, animate) {
    const board = this.world.rooms.nook.ideaBoard;
    const { notes: group, slots } = board.userData;
    let slot = slots.find((s) => !s.used);
    if (!slot) {
      // board full: the oldest note makes room
      const oldest = slots.reduce((a, b) => (a.used.at < b.used.at ? a : b));
      group.remove(oldest.mesh);
      slot = oldest;
    }
    const m = noteMesh(note.text, note.color);
    m.position.set(slot.x, slot.y, 0.01);
    slot.used = note;
    slot.mesh = m;
    group.add(m);
    if (animate) {
      m.scale.setScalar(0.01);
      let t = 0;
      const grow = () => {
        t += 1 / 60;
        const k = Math.min(1, t / 0.4);
        m.scale.setScalar(Math.max(0.01, 1 + Math.sin(k * Math.PI) * 0.25 - (1 - k) * 0.9));
        if (k < 1) requestAnimationFrame(grow);
        else m.scale.setScalar(1);
      };
      grow();
      if (this.world.roomId === 'nook') {
        sound.play('pin');
        this.world.fx.spawn('sparkle', m.getWorldPosition(new THREE.Vector3()), { count: 5 });
      }
    }
  }

  removeNote(id) {
    const board = this.world.rooms.nook.ideaBoard;
    const { notes: group, slots } = board.userData;
    for (const s of slots)
      if (s.used?.id === id) {
        group.remove(s.mesh);
        s.used = null;
        s.mesh = null;
      }
    const notes = this.world.store.data.notes;
    const i = notes.findIndex((n) => n.id === id);
    if (i >= 0) notes.splice(i, 1);
  }

  // to-dos on the chalkboard -----------------------------------------------
  addTodo(text, meta = {}) {
    const todo = { id: uid('todo'), text: String(text).slice(0, 80), done: false, at: Date.now(), ...meta };
    this.pendingTodos.push(todo);
    const nook = this.world.rooms.nook;
    const st = nook.stations.find((s) => s.id === 'todo');
    if (st && !st.reservedBy) {
      const helper = this.pickHelper('nook', meta.by);
      if (helper) helper.brain.doStation(st);
    }
    return todo;
  }

  writeTodo(todo, c) {
    this.world.store.data.todos.push(todo);
    this._redrawTodos();
    bus.emit('todo:added', todo, c);
    if (this.world.roomId === 'nook') sound.play('scribble');
    if (c) c.say(line('todo'));
  }

  toggleTodo(id) {
    const t = this.world.store.data.todos.find((x) => x.id === id);
    if (!t) return;
    t.done = !t.done;
    this._redrawTodos();
    if (t.done) {
      const c = pick(this.inRoom(this.world.roomId)) || null;
      c?.play('cheer');
      bus.emit('todo:done', t);
    }
  }

  removeTodo(id) {
    const list = this.world.store.data.todos;
    const i = list.findIndex((x) => x.id === id);
    if (i >= 0) list.splice(i, 1);
    this._redrawTodos();
  }

  _redrawTodos() {
    const cb = this.world.rooms.nook.chalkboard;
    cb?.userData.draw(this.world.store.data.todos.filter((t) => !t.archived));
  }

  // letters ------------------------------------------------------------------
  sendLetter(text, meta = {}) {
    const letter = { id: uid('letter'), text: String(text).slice(0, 120), at: Date.now(), ...meta };
    this.pendingLetters.push(letter);
    const post = this.world.rooms.post;
    const st = post.stations.find((s) => s.activity === 'post');
    const helper = this.pickHelper('post') || null;
    if (helper && st && !st.reservedBy) helper.brain.doStation(st);
    return letter;
  }

  postLetter(letter, c) {
    if (!letter) return;
    const list = this.world.store.data.letters;
    list.push(letter);
    if (list.length > 12) list.shift();
    this._addLetterCard(letter, true);
    if (c.roomId === this.world.roomId) sound.play('mail');
    bus.emit('letter:sent', letter, c);
  }

  _addLetterCard(letter, animate) {
    const wall = this.world.rooms.post.letterWall;
    const { pinned, w } = wall.userData;
    const i = pinned.children.length;
    if (i >= 15) pinned.remove(pinned.children[0]);
    const k = pinned.children.length;
    const card = letterCard(letter.text, pick(['#fff3e0', '#ffe4ec', '#e6f3ff', '#eafbe6']));
    const col = k % 5;
    const row = Math.floor(k / 5);
    card.position.set(-w / 2 + 0.3 + col * ((w - 0.6) / 4), 0.43 - row * 0.45 - 0.15, 0.1);
    pinned.add(card);
    if (animate) card.scale.setScalar(1.15);
  }

  // events from the world -----------------------------------------------------
  musicStarted() {
    // a few music lovers come dance
    const room = this.world.room;
    const dancers = this.inRoom(room.id)
      .filter((c) => !c.held && c.mainAction?.name !== 'sleep')
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const spots = room.stations.filter((s) => s.activity === 'dance' && !s.reservedBy);
    dancers.forEach((c, i) => {
      if (spots[i] && chance(0.75)) {
        c.say(line('dance'));
        c.brain.doStation(spots[i], { duration: rand(15, 30) });
      } else c.play('dance', { duration: 0 }) && setTimeout(() => c.stop('dance'), 6000);
    });
  }

  onLampToggled() {}
}

export { NAMES };
