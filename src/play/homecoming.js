// The homecoming: plays when you've been away more than 20 minutes and
// something is new. It opens on the commons:
//   1. the crew lead greets you
//   2. finished things are presented one at a time (one line, the object in
//      hand), then each goes where it lives
//   3. whoever has a decision steps onto the rug
//   4. if mail came, the mailbox flag is up and the bird is on its perch
//   5. if a visitor came, it's standing near the gate
// Finished things first, then decisions, then surprises. Under 30 seconds.
// One tap skips it. If nothing is new: a quick wave and "all quiet".
import * as THREE from 'three';
import { ROOMS, CHUNKS } from '../island/layout.js';
import { line } from './lines.js';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { clock } from './clock.js';
import { pick } from '../core/util.js';

const AWAY = 20 * 60 * 1000;

export class Homecoming {
  constructor(game) {
    this.game = game;
    this.active = null;
    bus.on('app:opened', (o) => this.onOpened(o));
  }

  get s() {
    return this.game.store.data;
  }
  get d() {
    return this.game.director;
  }

  lead() {
    const crew = this.game.crew.critters.filter((c) => !c.member.specialist && !c.member.unnamed);
    return crew.find((c) => c.member.role === 'ideas') || crew[0] || null;
  }

  onOpened({ away, first }) {
    // let the world settle a beat (and any unlock wait until after)
    setTimeout(() => {
      const news = (this.s.news || []).filter((n) => !n.seen);
      if (first) return this.welcome();
      if (away > AWAY && news.length) return this.play(news);
      if (away > 60 * 1000 && !this.d.waiting().length && !this.game.stager.pending().length) return this.allQuiet();
      this._markSeen();
    }, 600);
  }

  welcome() {
    const c = this.lead();
    if (!c) return;
    c.brain.attending = 3;
    c.play('wave');
    c.say('oh! hi! welcome to the island');
    setTimeout(() => this.game.crew.critters[1]?.say('it’s small. for now.'), 2600);
  }

  allQuiet() {
    const c = this.lead();
    if (!c) return;
    c.brain.attending = 3;
    c.lookAt(this.game.world.engine.camera.position, 3);
    c.play('wave');
    c.say(line('quiet'));
    this.game.ui?.news('all caught up. we’re on it, go do your thing.');
    this._markSeen();
  }

  _markSeen() {
    for (const n of this.s.news || []) n.seen = true;
    this.s.news = (this.s.news || []).slice(-50);
  }

  play(news) {
    const g = this.game;
    const d = this.d;
    const w = g.world;
    const steps = [];
    let t = 0;
    const lead = this.lead();
    this.s.metrics.homecomings++;
    const rug = g.crew.rugSpots();
    const rugCenter = rug.length ? { x: rug.reduce((a, s) => a + s.x, 0) / rug.length, z: rug.reduce((a, s) => a + s.z, 0) / rug.length } : { x: 2.6, z: 3.3 };
    // 1. greet
    steps.push({
      at: 0,
      fn: () => {
        w.rig.goToCorner(0);
        w.focus = 'commons';
        w.rig.focusOn(ROOMS.commons, ROOMS.commons.base ?? 0.15);
      },
    });
    if (lead) {
      steps.push({
        at: 0.3,
        fn: (skip) => {
          if (skip) return;
          lead.brain.interrupt();
          const r = lead.brain.route({ level: 0, x: rugCenter.x + 0.4, z: rugCenter.z + 0.5 });
          lead.brain.run([...(r || []), { type: 'faceCam' }, { type: 'act', name: 'wave' }], 'saying hi');
          lead.say(line('welcome'));
          lead.play('wave');
        },
      });
      t = 2.2;
    }
    // 2. finished things, one at a time
    const finished = d.threads((x) => x.status === 'done').sort((a, b) => a.doneAt - b.doneAt).slice(0, 4);
    for (const th of finished) {
      const owner = g.crew.critter(th.owner) || lead;
      steps.push({
        at: t,
        fn: (skip) => {
          if (skip || !owner) return;
          owner.brain.interrupt();
          const item = g.presentItem({ present: { kind: 'finished', thread: th.id } });
          if (item) owner.hold(item, 'overhead');
          owner.play('cheer');
          owner.say(th.kind === 'research' ? `i read all about ${th.key || th.title}!` : `${th.title} is done${th.verified ? '!' : '… mostly!'}`);
          owner.lookAt(w.engine.camera.position, 2.5);
        },
      });
      steps.push({
        at: t + 2.1,
        fn: (skip) => {
          if (owner && !skip) {
            const p = owner.headPos(new THREE.Vector3(), 0.3);
            w.fx.spawn('sparkle', p, { count: 10 });
            sound.play('chime');
            owner.drop(true);
          }
          d.accept(th.id);
        },
      });
      t += 2.7;
    }
    // 3. decisions step onto the rug
    const deciders = d.members((m) => m.present?.kind === 'decision');
    if (deciders.length) {
      steps.push({
        at: t,
        fn: (skip) => {
          if (skip) return;
          for (const m of deciders) {
            const c = g.crew.critter(m.id);
            const spot = c && g.crew.rugSpotFor(c);
            if (c && spot) c.brain.goPresent(spot);
          }
          const c0 = g.crew.critter(deciders[0].id);
          c0?.say('i need your help with something!');
        },
      });
      t += 2;
    }
    // 4/5. surprises at the gate
    const mail = this.s.mail.flag && w.structure.chunks.includes('gate');
    const visitor = this.s.visitors.find((v) => !v.gone);
    if (mail || visitor) {
      steps.push({
        at: t,
        fn: () => {
          const ch = CHUNKS.gate;
          w.rig.goToCorner(3);
          w.focus = null;
          w.rig.focusOn({ x0: ch.cx - ch.hx, x1: ch.cx + ch.hx, z0: ch.cz - ch.hz, z1: ch.cz + ch.hz }, 0);
          g.arrivals.sync();
          if (mail) sound.play('coo');
          if (lead) lead.say(mail && visitor ? 'mail came! and someone visited!' : mail ? 'and look, mail!' : 'someone came to visit!');
        },
      });
      t += 3.2;
    }
    const corner = w.rig.k;
    steps.push({
      at: t,
      fn: () => {
        w.focus = null;
        w.rig.clearFocus();
        w.rig.goToCorner(corner);
      },
    });
    this.active = { steps, t: 0, i: 0 };
    this._markSeen();
    bus.emit('homecoming:start');
  }

  skip() {
    const a = this.active;
    if (!a) return;
    this.s.metrics.homecomingSkips++;
    for (; a.i < a.steps.length; a.i++) a.steps[a.i].fn(true);
    this.active = null;
    bus.emit('homecoming:end', { skipped: true });
  }

  update(dt) {
    const a = this.active;
    if (!a) return;
    a.t += dt;
    while (a.i < a.steps.length && a.steps[a.i].at <= a.t) {
      a.steps[a.i].fn(false);
      a.i++;
    }
    if (a.i >= a.steps.length) {
      this.active = null;
      bus.emit('homecoming:end', { skipped: false });
    }
  }
}

export { clock, pick };
