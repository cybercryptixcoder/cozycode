// The game: ties the island world, the crew, the work source, the UI and
// the player's hands together.
import * as THREE from 'three';
import { IslandWorld } from '../island/world.js';
import { IslandInput } from '../island/input.js';
import { Daylight } from '../world/daylight.js';
import { Store } from './state.js';
import { Crew } from './crew.js';
import { Director } from './director.js';
import { Scenery, progressOf } from './scenery.js';
import { Arrivals } from './arrivals.js';
import { Stager } from './unlocks.js';
import { clock } from './clock.js';
import * as A from './artifact.js';
import { Bubbles } from '../ui2/bubbles.js';
import { Cards } from '../ui2/cards.js';
import { Mail } from '../ui2/mail.js';
import { Shell } from '../ui2/shell.js';
import { Homecoming } from './homecoming.js';
import { Notifier, Seasons, Docked, inferFacts } from './extras.js';
import { line } from './lines.js';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { clamp, chance, pick } from '../core/util.js';

const _plane = new THREE.Plane();
const _hit = new THREE.Vector3();
const MIN = 60 * 1000;

export class Game {
  constructor(container, opts = {}) {
    this.container = container;
    this.opts = opts;
    this.store = opts.store || new Store();
    Daylight.now = () => clock.now();
    this.world = new IslandWorld(container, { quality: this.store.data.settings.quality });
    this.crew = new Crew(this.world, this.store);
    this.director = new Director(this);
    this.scenery = new Scenery(this);
    this.arrivals = new Arrivals(this);
    this.stager = new Stager(this);
    this.uiRoot = document.createElement('div');
    this.uiRoot.className = 'ui';
    container.appendChild(this.uiRoot);
    this.bubbles = new Bubbles(this.uiRoot, this.world, this.crew);
    this.hooks = [];
    this.visible = !document.hidden;
    this.ui = null; // set by the shell
    this.cards = new Cards(this, this.uiRoot);
    this.mail = new Mail(this, this.cards);
    this.shell = new Shell(this, this.uiRoot);
    this.homecoming = new Homecoming(this);
    this.notifier = new Notifier(this);
    this.seasons = new Seasons(this);
    this.docked = new Docked(this);
  }

  get s() {
    return this.store.data;
  }

  /** Something modal is up (a card, the mail ritual, a homecoming, an unlock). */
  get busy() {
    return !!(this.modal || this.stager.busy || this.homecoming?.active);
  }

  start() {
    const s = this.s;
    if (this.opts.unlocks) Object.assign(s.unlocks, this.opts.unlocks);
    sound.setSfx(s.settings.sound !== false);
    if (s.settings.music) sound.onUnlock?.(() => sound.setMusic(true));
    this.crew.ensureStartingCrew();
    this.crew.hooks = {
      describeJob: (m) => this.describeJob(m),
      describePresent: (m) => this.describePresent(m),
      presentItem: (m) => this.presentItem(m),
      onReachedRug: (m, c) => this.onReachedRug(m, c),
    };
    // catch up on everything that happened while the app was closed
    const now = clock.now();
    const away = now - (s.lastSeen || now);
    if (away > 30 * MIN) this.director.rollVisitor(s.lastSeen, now);
    this.director.advance(now, { live: false });
    this.applyStructure(false);
    this.crew.loadAll();
    this.arrivals.sync();
    this.scenery.sync();
    this._wireInput();
    this._wireEvents();
    this.world.engine.add((dt, time) => this.update(dt, time));
    this.world.engine.start();
    window.addEventListener('pagehide', () => this.save());
    document.addEventListener('visibilitychange', () => this._visibility());
    this._saveT = 0;
    this._tickT = 0;
    this.opened(away, { first: !!this.store.fresh });
  }

  /** Rebuild the island for the unlocks that have been shown. */
  applyStructure(animate) {
    this.world.applyStructure(this.stager.shownUnlocks(), { animate });
    this.afterStructure();
  }

  afterStructure() {
    this.crew._rugSpots = null;
    this.scenery.drawMap();
    this.scenery.drawRoster();
    this.scenery.sync();
    this.arrivals.sync();
  }

  save() {
    this.crew.savePositions();
    this.s.lastSeen = clock.now();
    this.store.save();
  }

  _visibility() {
    const now = clock.now();
    if (document.hidden) {
      this.visible = false;
      this.director.onHidden(now);
      this.save();
      bus.emit('app:hidden');
      return;
    }
    this.visible = true;
    const away = now - (this.s.lastSeen || now);
    if (away > 30 * MIN) this.director.rollVisitor(this.s.lastSeen, now);
    this.director.advance(now, { live: false });
    this.applyStructure(false);
    this.opened(away, {});
  }

  /** The player just arrived (launch or coming back to the tab). */
  opened(away, { first = false } = {}) {
    const s = this.s;
    s.metrics.opens.push({ at: clock.now(), away: Math.round(away / 1000), notified: !!this._notifiedSince });
    if (s.metrics.opens.length > 400) s.metrics.opens.splice(0, s.metrics.opens.length - 400);
    this._notifiedSince = false;
    bus.emit('app:opened', { away, first });
  }

  update(dt, time) {
    this.world.update(dt, time);
    this.input.update(dt);
    this.crew.update(dt);
    this.scenery.update(dt);
    this.arrivals.update(dt, time);
    this.stager.update(dt);
    this.homecoming.update(dt);
    this.seasons.update(dt);
    this.bubbles.update(dt);
    for (const h of this.hooks) h(dt, time);
    this._tickT += dt;
    if (this._tickT > 1) {
      this._tickT = 0;
      this.tick();
    }
    this._saveT += dt;
    if (this._saveT > 20) {
      this._saveT = 0;
      this.save();
    }
  }

  /** Once a second: let the source catch up, and stage any pending unlock. */
  tick() {
    const now = clock.now();
    this.director.advance(now, { live: true });
    if (!this.busy && this.stager.pending().length) this.stager.playNext();
    this.arrivals.sync();
    // now and then, a ghostly guess about you shows up in your room
    this._inferT = (this._inferT || 0) + 1;
    if (this._inferT > 600) {
      this._inferT = 0;
      const f = inferFacts(this.s);
      if (f.length) {
        this.s.facts.push(...f);
        this.scenery.sync();
      }
    }
    if (this._ledgerT === undefined || this._ledgerT++ > 20) {
      this._ledgerT = 0;
      this.scenery.drawLedger();
    }
  }

  // ------------------------------------------------------------ presenting
  describeJob(m) {
    const job = m.job;
    if (!job) return null;
    if (job.kind === 'ideas') return pick(['thinking up something new.', 'staring at the idea board, humming.', 'chewing on an idea.']);
    if (job.kind === 'mail') return 'taking a letter out to the gate.';
    const t = this.director.thread(job.thread);
    if (!t) return null;
    const p = progressOf(t, clock.now());
    const how = p < 0.25 ? 'just getting started on' : p < 0.6 ? 'in the middle of' : p < 0.9 ? 'nearly done with' : 'putting the last bits on';
    if (t.kind === 'research') return `${how} reading up on ${t.key || t.title}.`;
    if (t.kind === 'todo') return `${t.line}.`;
    return `${how} ${t.title}.`;
  }

  describePresent(m) {
    const p = m.present;
    if (!p) return null;
    const t = this.director.thread(p.thread);
    const what = t?.title || 'something';
    return {
      pitch: t?.rare ? 'found something glowing. tap to see.' : 'has an idea to show you.',
      decision: `has a question about ${what}.`,
      finished: `finished ${what}! tap to see.`,
      failure: `${what} didn’t work out. wants to tell you.`,
      letter: 'has a letter ready to send.',
    }[p.kind];
  }

  /** What a crew member holds while presenting. */
  presentItem(m) {
    const p = m.present;
    if (!p) return null;
    const t = this.director.thread(p.thread);
    if (!t) return null;
    if (p.kind === 'letter') return A.heldLetter();
    if (p.kind === 'finished') {
      const o = t.kind === 'research' ? A.researchBook(t) : A.gadget(t);
      o.userData.holdOffset = [0, -0.05, 0.12];
      return o;
    }
    if (p.kind === 'failure') {
      const o = A.failed(t);
      o.userData.holdOffset = [0, -0.05, 0.12];
      return o;
    }
    if (p.kind === 'decision') return A.heldCard({ ...t, line: t.decision?.question || t.line }, {});
    return A.heldCard(t, { glow: !!t.rare });
  }

  onReachedRug(m, c) {
    if (chance(0.5)) c.say(pick(['ooh, look!', 'i have a thing!', 'psst!', 'ta-da?']));
    c.play('wave');
  }

  // ------------------------------------------------------------ events
  _wireEvents() {
    bus.on('present:changed', (m) => {
      const c = this.crew.critter(m.id);
      if (!c) return;
      if (!m.present) {
        c.drop(true);
        if (c.brain.doing.startsWith('waiting on the rug')) c.brain.cancel();
      } else if (!c.brain.station?.job && !c.brain.chatting && !c.held) {
        c.brain.idleT = Math.min(c.brain.idleT, 0.3);
      }
    });
    bus.on('crew:arrived', (m, o) => this.onCrewArrived(m, o));
    bus.on('crew:left', (m, o) => {
      const c = this.crew.critter(m.id);
      if (!c) return;
      if (!o.live || !this.visible) {
        this.crew.remove(c);
        return;
      }
      const at = this.arrivals.big.anchor();
      c.brain.run([...(c.brain.route({ level: 0, x: at.x + 0.9, z: at.z + 0.4 }) || []), { type: 'act', name: 'wave' }, { type: 'call', fn: () => this.crew.remove(c) }], 'heading home');
      setTimeout(() => this.arrivals.big.depart(), 9000);
    });
    bus.on('mail:arrived', (list) => {
      if (this.visible) this.arrivals.bird.land(false);
    });
    bus.on('letter:sent', () => {
      const mb = this.world.furnish.obj('gate', 'mailbox');
      if (!mb) return;
      this.scenery._sendingFlag = true;
      this.arrivals.bird.pickUp(mb.getWorldPosition(new THREE.Vector3()), () => (this.scenery._sendingFlag = false));
    });
    bus.on('thread:kept', (t) => this._react(t.by, 'keep'));
    bus.on('thread:tossed', (t) => this._react(t.by, 'toss'));
    bus.on('thread:greenlit', (t) => this._react(t.by, 'greenlit'));
    bus.on('capability', () => this.scenery.sync());
    bus.on('todo:added', () => this.scenery.sync());
    bus.on('todo:ticked', () => this.scenery.sync());
    bus.on('keepsake:added', () => this.scenery.sync());
    bus.on('fact:added', () => this.scenery.sync());
    bus.on('unlock:done', () => {
      this.scenery.drawMap();
      this.scenery.drawRoster();
    });
  }

  _react(memberId, kind) {
    const c = this.crew.critter(memberId);
    if (!c) return;
    setTimeout(() => {
      c.say(line(kind));
      c.play(kind === 'toss' ? 'giggle' : kind === 'greenlit' ? 'cheer' : 'hop');
    }, 250);
  }

  onCrewArrived(m, o) {
    const big = o.balloon === 'big';
    const balloon = big ? this.arrivals.big : this.arrivals.small;
    const spawn = () => {
      const c = this.crew.spawn(m);
      const at = balloon.anchor();
      c.position.set(at.x + 0.7, 0, at.z + 0.5);
      c.play('land');
      if (o.live && this.visible) {
        setTimeout(() => {
          c.play('wave');
          c.say(big ? 'right then. where’s the heavy thing?' : 'hello! i’m new!');
          if (m.unnamed) bus.emit('crew:needsName', m, c);
        }, 900);
        if (!big) setTimeout(() => balloon.depart(), 6000);
      }
      this.scenery.drawRoster();
      return c;
    };
    if (o.live && this.visible) balloon.arrive(spawn);
    else spawn();
  }

  // ------------------------------------------------------------ input
  roomAt(ray) {
    const h = this.world.house;
    const rooms = h.rooms.filter((r) => !r.sealed && this.world.levels[r.level]?.visible !== false).sort((a, b) => b.level - a.level);
    for (const r of rooms) {
      _plane.set(new THREE.Vector3(0, 1, 0), -r.base);
      if (!ray.ray.intersectPlane(_plane, _hit)) continue;
      if (_hit.x > r.x0 && _hit.x < r.x1 && _hit.z > r.z0 && _hit.z < r.z1) return r;
    }
    return null;
  }

  focusRoom(r) {
    const w = this.world;
    if (!r || w.focus === r.id) {
      w.focus = null;
      w.rig.clearFocus();
      return;
    }
    w.focus = r.id;
    w.rig.focusOn(r, r.base);
    this.director.taste('room', { room: r.id });
    bus.emit('room:focus', r);
  }

  props() {
    const out = [];
    for (const k of this.world.furnish.kits.values()) out.push(k.group);
    out.push(...this.arrivals.props());
    return out;
  }

  _wireInput() {
    const w = this.world;
    this.input = new IslandInput({
      dom: w.engine.renderer.domElement,
      camera: w.engine.camera,
      rig: w.rig,
      hooks: {
        critters: () => this.crew.critters.filter((c) => this.crew.visibleCritter(c)),
        props: () => this.props(),
        roomAt: (ray) => this.roomAt(ray),
        sound,
        haptic: (k) => this.haptic(k),
        onTapCritter: (c) => this.tapCritter(c),
        onDoubleTapCritter: (c) => {
          w.rig.follow(c);
          w.focus = null;
        },
        onLongPressCritter: (c) => bus.emit('whisper:open', c),
        onTapProp: (p) => this.tapProp(p),
        onLongPressProp: (p) => bus.emit('prop:long', p),
        onTapRoom: (r) => {
          if (this.homecoming.active) return this.homecoming.skip();
          if (this.stager.busy) return this.stager.skip();
          this.focusRoom(r);
        },
        onTapEmpty: () => {
          if (this.homecoming.active) return this.homecoming.skip();
          if (this.stager.busy) return this.stager.skip();
          this.focusRoom(null);
        },
        onPickUp: (c) => {
          this.crew.onPicked(c);
          this.haptic('tick');
        },
        onDrop: (c) => this.crew.onDropped(c),
        onPet: (c) => {
          c.brain.interrupt();
          this.crew.leaveSocial(c);
          if (chance(0.5)) setTimeout(() => c.say(line('petted')), 500);
        },
        clampDrag: (x, z, c) => {
          const nav = w.navs[c.level];
          if (!nav) return [x, z];
          return [clamp(x, nav.x0 + 0.3, nav.x0 + nav.w - 0.3), clamp(z, nav.z0 + 0.3, nav.z0 + nav.d - 0.3)];
        },
        onMoveStart: (p) => bus.emit('move:start', p),
        onMoveDrag: (p, ray) => bus.emit('move:drag', p, ray),
        onMoveEnd: (p) => bus.emit('move:end', p),
      },
    });
  }

  tapCritter(c) {
    if (this.homecoming.active) return this.homecoming.skip();
    const m = c.member;
    if (m?.unnamed) return bus.emit('crew:needsName', m, c);
    if (m?.present && !this.busy) {
      bus.emit('present:open', m, c);
      return;
    }
    c.brain.attending = 2.2;
    c.lookAt(this.world.engine.camera.position, 2);
    c.say(this.crew.statusLine(c), { status: true });
    bus.emit('critter:tapped', c);
  }

  tapProp(p) {
    if (this.homecoming.active) return this.homecoming.skip();
    const it = p.userData.interactive || {};
    if (it.thread) this.scenery.seen(it.thread);
    bus.emit('prop:tap', p, it);
  }

  haptic(kind) {
    if (!this.s.settings.haptics || !navigator.vibrate) return;
    const p = { tick: 8, thump: [22], done: [12, 40, 12, 40, 30] }[kind] || 8;
    try {
      navigator.vibrate(p);
    } catch (e) {
      /* ignore */
    }
  }

  // ------------------------------------------------------------ debug: skip ahead in time
  warp(hours) {
    this.save();
    const from = clock.now();
    clock.offset += hours * 3600 * 1000;
    const now = clock.now();
    if (hours * 60 > 30) this.director.rollVisitor(from, now);
    this.director.advance(now, { live: false });
    this.applyStructure(false);
    this.opened(now - from, {});
  }
}

export { pick };
