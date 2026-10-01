// Cards: how the crew shows you things.
//
//   pitch     one line + one picture. swipe right keeps (pins it to the
//             board), left tosses (cheerfully, into the bin), up shows the
//             next feature card (each with its own keep/toss). nudge chips
//             ask for simpler / weirder / smaller / bigger. "build it" or
//             dragging the card onto a room greenlights it.
//   pair      two pitches about the same thing: tap the one you prefer.
//   decision  a question with 2-3 options.
//   finished  the object, one line; flip it over for its receipts.
//   failure   honest and gentle: one line, then try again or let it go.
import * as THREE from 'three';
import { drawMotif } from '../play/art.js';
import { makeCanvas } from '../gfx/textures.js';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { clock } from '../play/clock.js';
import { progressOf } from '../play/scenery.js';

const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};
const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export function motifImage(t, w = 320, h = 220, { faded = false } = {}) {
  const c = makeCanvas(w * 2, h * 2);
  const g = c.getContext('2d');
  const hue = t.hue ?? 20;
  const grd = g.createLinearGradient(0, 0, 0, c.height);
  grd.addColorStop(0, `hsl(${hue},${faded ? 15 : 60}%,${faded ? 86 : 90}%)`);
  grd.addColorStop(1, `hsl(${(hue + 30) % 360},${faded ? 12 : 55}%,${faded ? 80 : 84}%)`);
  g.fillStyle = grd;
  g.fillRect(0, 0, c.width, c.height);
  // soft ground shadow
  g.fillStyle = 'rgba(80,50,40,0.08)';
  g.beginPath();
  g.ellipse(c.width / 2, c.height * 0.8, c.width * 0.2, c.height * 0.05, 0, 0, Math.PI * 2);
  g.fill();
  g.save();
  g.translate(c.width / 2, c.height * 0.48);
  if (faded) g.filter = 'grayscale(0.6)';
  drawMotif(g, t.motif, Math.min(c.width, c.height) * 0.34, hue, { sparkle: t.rare || t.quality === 'delight' });
  g.restore();
  c.className = 'art';
  return c;
}

export class Cards {
  constructor(game, root) {
    this.game = game;
    this.d = game.director;
    this.root = el('div', 'cards hidden');
    root.appendChild(this.root);
    this.open = null;
    bus.on('present:open', (m, c) => this.openPresent(m, c));
    bus.on('prop:tap', (p, it) => this.onProp(p, it));
  }

  get s() {
    return this.game.store.data;
  }

  // ------------------------------------------------------------ shell
  show(node, { onClose, cls = '' } = {}) {
    const presenter = this.presenter;
    this.close(true);
    this.presenter = presenter;
    this.root.innerHTML = '';
    this.root.className = `cards ${cls}`;
    const scrim = el('div', 'scrim');
    scrim.addEventListener('pointerdown', (e) => {
      if (e.target === scrim) this.close();
    });
    scrim.appendChild(node);
    this.root.appendChild(scrim);
    this.open = { node, onClose, t0: clock.now() };
    this.game.modal = true;
    document.body.classList.add('modal');
    if (this.presenter && !cls.includes('mail')) this.game.world.rig.present(this.presenter);
    requestAnimationFrame(() => this.root.classList.add('in'));
    sound.unlock();
  }

  close(silent = false) {
    if (!this.open) return;
    const o = this.open;
    this.open = null;
    this.game.modal = false;
    document.body.classList.remove('modal');
    this.game.world.rig.endPresent();
    this.root.classList.remove('in');
    const r = this.root;
    setTimeout(() => {
      if (!this.open) {
        r.classList.add('hidden');
        r.innerHTML = '';
      }
    }, 260);
    if (!silent) o.onClose?.();
    if (this.presenter) {
      this.presenter.brain.attending = 0;
      this.presenter = null;
    }
  }

  dwell() {
    return this.open ? clock.now() - this.open.t0 : 0;
  }

  _presenterLook(c) {
    if (!c) return;
    this.presenter = c;
    c.brain.attending = 999;
    c.lookAt(this.game.world.engine.camera.position, 999);
  }

  // ------------------------------------------------------------ presenting
  openPresent(m, c) {
    const p = m.present;
    if (!p) return;
    const t = this.d.thread(p.thread);
    if (!t) {
      this.d.resolvePresent(m, p.thread);
      return;
    }
    this.game.scenery.seen(t.id);
    this._presenterLook(c);
    if (c) c.say(this._intro(p.kind, t), { silent: false });
    switch (p.kind) {
      case 'pitch': {
        const other = this._pairFor(t, m);
        return other ? this.pair(t, other) : this.pitch(t, m);
      }
      case 'decision':
        return this.decision(t, m);
      case 'finished':
        return this.finished(t, m);
      case 'failure':
        return this.failure(t, m);
      case 'letter':
        return bus.emit('mail:compose', t, m, c);
    }
  }

  _intro(kind, t) {
    if (kind === 'pitch') return t.rare ? 'look what i found…' : t.aside || 'what do you think?';
    if (kind === 'decision') return 'quick question!';
    if (kind === 'finished') return t.verified ? 'it’s done! and it works!' : 'it’s done! mostly…';
    if (kind === 'failure') return 'so… this one didn’t work.';
    return 'here!';
  }

  /** Another pitch about the same area, held by someone else: show both. */
  _pairFor(t, m) {
    if (!t.area) return null;
    for (const o of this.d.members()) {
      if (o.id === m.id) continue;
      const p = o.present;
      if (p?.kind !== 'pitch') continue;
      const ot = this.d.thread(p.thread);
      if (ot && ot.area === t.area && ot.status === 'pitched' && !ot.rare) return ot;
    }
    return null;
  }

  pitch(t, m) {
    const node = el('div', 'deck');
    const feats = (t.features || []).filter((f) => f.state === 'new');
    const stack = [{ main: true }, ...feats.map((f) => ({ f }))];
    let i = 0;
    const by = this.d.member(t.by);
    const draw = () => {
      node.innerHTML = '';
      const top = stack[i];
      const pile = el('div', 'pile');
      // cards waiting underneath (no counters: you just see the stack)
      for (let k = Math.min(stack.length - 1, i + 2); k > i; k--) {
        const under = el('div', `card under u${k - i}`);
        pile.appendChild(under);
      }
      const card = top.main ? this._pitchCard(t, by) : this._featureCard(t, top.f);
      pile.appendChild(card);
      node.appendChild(pile);
      const hint = el('div', 'hint', top.main ? (stack.length > 1 ? 'keep → · ← toss · ↑ more' : 'keep → · ← toss') : 'keep this bit → · ← not this');
      node.appendChild(hint);
      if (top.main) node.appendChild(this._pitchActions(t, m, () => (i = 0, draw())));
      this._swipe(card, {
        right: () => {
          if (top.main) return this._keep(t);
          this.d.feature(t.id, top.f.id, 'kept');
          next();
        },
        left: () => {
          if (top.main) return this._toss(t);
          this.d.feature(t.id, top.f.id, 'tossed');
          next();
        },
        up: top.main && stack.length > 1 ? () => next() : null,
        drop: top.main ? (x, y) => this._dropOnRoom(t, x, y) : null,
      });
    };
    const next = () => {
      i++;
      if (i >= stack.length) {
        i = 0;
        stack.splice(1); // features answered; back to the idea itself
      }
      draw();
    };
    draw();
    this.show(node, { cls: 'pitch', onClose: () => this.d.taste('ignore', { thread: t.id, dwell: this.dwell() }) });
    this.d.taste('dwellStart', { thread: t.id });
  }

  _pitchCard(t, by) {
    const card = el('div', `card pitchcard${t.rare ? ' rare' : ''}`);
    card.appendChild(motifImage(t));
    card.appendChild(el('div', 'line', esc(t.line)));
    card.appendChild(el('div', 'by', `— ${esc((by?.name || 'the crew').toLowerCase())}`));
    return card;
  }

  _featureCard(t, f) {
    const card = el('div', 'card featurecard');
    card.appendChild(el('div', 'small', esc(t.title)));
    const c = motifImage(t, 320, 120);
    card.appendChild(c);
    card.appendChild(el('div', 'line', esc(f.line)));
    return card;
  }

  _pitchActions(t, m, redraw) {
    const row = el('div', 'actions');
    const chips = el('div', 'chips');
    for (const dir of ['simpler', 'weirder', 'smaller', 'bigger']) {
      const b = el('button', 'chip', dir);
      b.addEventListener('click', () => {
        this.game.haptic('tick');
        sound.play('pop');
        const c = this.game.crew.critter(t.by);
        c?.play('think');
        c?.say(dir === 'weirder' ? 'ooh, okay…' : 'hmm, let me see…');
        this.d.nudge(t.id, dir);
        b.classList.add('used');
        setTimeout(redraw, 350);
      });
      chips.appendChild(b);
    }
    row.appendChild(chips);
    const build = el('button', 'build', t.kind === 'research' ? 'look into it' : 'build it');
    build.addEventListener('click', () => this._greenlight(t));
    row.appendChild(build);
    return row;
  }

  _keep(t) {
    this.d.taste('dwell', { thread: t.id, ms: this.dwell() });
    this.d.keep(t.id);
    this.game.haptic('tick');
    this._fly('right');
  }

  _toss(t) {
    this.d.taste('dwell', { thread: t.id, ms: this.dwell() });
    this.d.toss(t.id);
    this.game.haptic('tick');
    sound.play('whoosh');
    this._fly('left');
  }

  _greenlight(t, room = null) {
    this.d.taste('dwell', { thread: t.id, ms: this.dwell() });
    if (room === 'study') t.kind = 'research';
    this.d.greenlight(t.id);
    this.game.haptic('done');
    sound.play('yay');
    const full = this.d.slotsUsed(t.kind).length >= this.d.slotsFor(t.kind) && this.d.slotsFor(t.kind) > 0;
    this._fly('down');
    if (full && t.status === 'queued') setTimeout(() => this.benchFull(t), 400);
  }

  /** Dragged the card into the world: if it landed on a room, greenlight. */
  _dropOnRoom(t, x, y) {
    const g = this.game;
    const r = g.world.engine.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, g.world.engine.camera);
    const room = g.roomAt(ray);
    if (!room) return false;
    this.d.taste('dragToRoom', { thread: t.id, room: room.id });
    this._greenlight(t, room.id);
    return true;
  }

  _fly(dir) {
    const card = this.root.querySelector('.card:not(.under)');
    if (card) card.classList.add(`fly-${dir}`);
    setTimeout(() => this.close(true), 280);
  }

  /** Bench full: it waits its turn, or something on the bench can be shelved. */
  benchFull(t) {
    const node = el('div', 'sheet');
    node.appendChild(el('div', 'title', 'the bench is full'));
    node.appendChild(el('div', 'line', `${esc(t.title)} will wait its turn. or shelve something to make room:`));
    const list = el('div', 'list');
    for (const w of this.d.threads((x) => x.kind === t.kind && (x.status === 'wip' || x.status === 'waiting'))) {
      const b = el('button', 'row', `<span>${esc(w.title)}</span><em>shelve</em>`);
      b.addEventListener('click', () => {
        this.d.shelve(w.id);
        sound.play('pop');
        this.close();
      });
      list.appendChild(b);
    }
    node.appendChild(list);
    const ok = el('button', 'build ghost', 'it can wait');
    ok.addEventListener('click', () => this.close());
    node.appendChild(ok);
    this.show(node, { cls: 'small' });
  }

  pair(a, b) {
    const node = el('div', 'pair');
    node.appendChild(el('div', 'title', 'two ideas about the same thing. which one?'));
    const row = el('div', 'two');
    for (const [t, o] of [
      [a, b],
      [b, a],
    ]) {
      const by = this.d.member(t.by);
      const card = this._pitchCard(t, by);
      card.classList.add('pick');
      card.addEventListener('click', () => {
        this.game.haptic('tick');
        sound.play('pop');
        this.d.pick(t.id, o.id);
        card.classList.add('chosen');
        setTimeout(() => this.close(true), 350);
      });
      row.appendChild(card);
    }
    node.appendChild(row);
    const neither = el('button', 'build ghost', 'neither, thanks');
    neither.addEventListener('click', () => {
      this.d.toss(a.id);
      this.d.toss(b.id);
      this.close(true);
    });
    node.appendChild(neither);
    // both step forward
    for (const t of [a, b]) {
      const c = this.game.crew.critter(t.by);
      if (c) this._presenterLook(c);
    }
    this.show(node, { cls: 'pairwise' });
  }

  decision(t, m) {
    const node = el('div', 'sheet');
    node.appendChild(motifImage(t, 320, 120));
    node.appendChild(el('div', 'small', esc(t.title)));
    node.appendChild(el('div', 'title', esc(t.decision?.question || 'which way?')));
    const opts = el('div', 'options');
    for (const o of t.decision?.options || []) {
      const b = el('button', 'option', esc(o));
      b.addEventListener('click', () => {
        this.game.haptic('tick');
        sound.play('pop');
        this.d.answer(t.id, o);
        const c = this.game.crew.critter(m.id);
        c?.say(`${o}. got it!`);
        c?.play('nod');
        this.close(true);
      });
      opts.appendChild(b);
    }
    node.appendChild(opts);
    this.show(node, { cls: 'small' });
  }

  finished(t, m) {
    const node = el('div', 'flipper');
    const inner = el('div', 'flip-inner');
    const front = el('div', 'card face front');
    front.appendChild(motifImage(t));
    front.appendChild(el('div', 'line', esc(t.title)));
    front.appendChild(el('div', `stamp ${t.verified ? 'ok' : 'meh'}`, t.verified ? 'checked & working' : 'works, not fully checked'));
    front.appendChild(el('div', 'hint', 'tap to flip'));
    const back = el('div', 'card face back');
    back.appendChild(this._receipts(t));
    inner.append(front, back);
    node.appendChild(inner);
    inner.addEventListener('click', () => {
      inner.classList.toggle('flipped');
      sound.play('page');
      this.d.taste('drillIn', { thread: t.id });
    });
    const ok = el('button', 'build', t.kind === 'research' ? 'onto the shelf' : t.verified ? 'onto a pedestal!' : 'onto the shelf');
    ok.addEventListener('click', () => {
      this.d.accept(t.id);
      this.close(true);
    });
    node.appendChild(ok);
    this.show(node, { cls: 'finished' });
    void m;
  }

  _receipts(t) {
    const r = t.receipts || {};
    const box = el('div', 'receipts');
    box.appendChild(el('div', 'title', 'receipts'));
    if (r.prototype) box.appendChild(el('div', 'rc', `<b>prototype</b>${esc(r.prototype)}`));
    if (r.draft) box.appendChild(el('div', 'rc', `<b>${t.kind === 'research' ? 'notes' : 'draft'}</b>${esc(r.draft)}`));
    if (r.sources?.length) box.appendChild(el('div', 'rc', `<b>sources</b>${r.sources.map(esc).join(' · ')}`));
    if (t.answers?.length) box.appendChild(el('div', 'rc', `<b>you chose</b>${t.answers.map((a) => esc(a.a)).join(' · ')}`));
    return box;
  }

  failure(t, m) {
    const node = el('div', 'sheet failure');
    node.appendChild(motifImage(t, 320, 150, { faded: true }));
    node.appendChild(el('div', 'small', esc(t.title)));
    node.appendChild(el('div', 'title', esc(t.failure?.reason || 'it didn’t work out.')));
    const row = el('div', 'options');
    const again = el('button', 'option', 'try again');
    again.addEventListener('click', () => {
      this.d.retry(t.id);
      this.game.crew.critter(m.id)?.say('okay! one more go.');
      this.close(true);
    });
    const go = el('button', 'option ghost', 'let it go');
    go.addEventListener('click', () => {
      this.d.letGo(t.id);
      this.game.crew.critter(m.id)?.say('that’s okay. onwards!');
      this.close(true);
    });
    row.append(again, go);
    node.appendChild(row);
    this.show(node, { cls: 'small' });
  }

  // ------------------------------------------------------------ tapping things in the world
  onProp(p, it) {
    if (this.open || this.game.busy) return;
    const d = this.d;
    switch (it.kind) {
      case 'note': {
        const t = d.thread(it.thread);
        if (!t) return;
        const node = el('div', 'sheet');
        node.appendChild(motifImage(t, 320, 150));
        node.appendChild(el('div', 'title', esc(t.line)));
        const row = el('div', 'options');
        const b = el('button', 'option', t.kind === 'research' ? 'look into it' : 'build it');
        b.addEventListener('click', () => {
          this.close(true);
          this._greenlight(t);
        });
        const a = el('button', 'option ghost', 'up to the attic');
        a.addEventListener('click', () => {
          t.status = 'attic';
          t.atticAt = clock.now();
          d.log(t, clock.now(), 'moved to the attic');
          d.taste('shelve', { thread: t.id });
          this.close(true);
        });
        row.append(b, a);
        node.appendChild(row);
        d.taste('drillIn', { thread: t.id });
        return this.show(node, { cls: 'small' });
      }
      case 'atticBox': {
        const t = d.thread(it.thread);
        if (!t) return;
        const node = el('div', 'sheet');
        node.appendChild(el('div', 'small', 'in a box in the attic'));
        node.appendChild(el('div', 'title', esc(t.line)));
        const row = el('div', 'options');
        const b = el('button', 'option', 'bring it down');
        b.addEventListener('click', () => {
          d.unattic(t.id);
          this.close(true);
        });
        row.append(b);
        node.appendChild(row);
        return this.show(node, { cls: 'small' });
      }
      case 'wip': {
        const t = d.thread(it.thread);
        if (!t) return;
        const p = progressOf(t, clock.now());
        const words = t.status === 'waiting' ? 'waiting on your answer' : t.status === 'failed' ? 'that one didn’t work' : p < 0.3 ? 'just started' : p < 0.7 ? 'coming along' : 'nearly there';
        const node = el('div', 'sheet');
        node.appendChild(el('div', 'small', esc(t.title)));
        node.appendChild(el('div', 'title', words));
        const row = el('div', 'options');
        if (t.status === 'wip') {
          const s = el('button', 'option ghost', 'shelve it for later');
          s.addEventListener('click', () => {
            d.shelve(t.id);
            this.close(true);
          });
          row.append(s);
        }
        node.appendChild(row);
        return this.show(node, { cls: 'small' });
      }
      case 'artifact': {
        const t = d.thread(it.thread);
        if (!t) return;
        const node = el('div', 'flipper');
        const inner = el('div', 'flip-inner');
        const front = el('div', 'card face front');
        front.appendChild(motifImage(t));
        front.appendChild(el('div', 'line', esc(t.title)));
        front.appendChild(el('div', 'hint', 'tap to flip'));
        const back = el('div', 'card face back');
        back.appendChild(this._receipts(t));
        inner.append(front, back);
        inner.addEventListener('click', () => {
          inner.classList.toggle('flipped');
          sound.play('page');
        });
        node.appendChild(inner);
        d.taste('drillIn', { thread: t.id });
        return this.show(node, { cls: 'finished' });
      }
      case 'visitor': {
        const v = this.s.visitors.find((x) => x.id === it.id);
        if (!v) return;
        const mem = d.receiveMemento(v.id);
        this.game.arrivals.visitorLeaves(v.id);
        sound.play('chime');
        const node = el('div', 'sheet');
        node.appendChild(el('div', 'title', `${esc(v.name)} left you ${esc(mem?.name || 'a little something')}`));
        node.appendChild(el('div', 'small', 'it’s on the keepsake shelf now'));
        return this.show(node, { cls: 'small' });
      }
      case 'keepsake': {
        const k = this.s.keepsakes.find((x) => x.id === it.id);
        if (!k) return;
        const node = el('div', 'sheet');
        node.appendChild(el('div', 'title', esc(k.name)));
        node.appendChild(el('div', 'small', `from ${esc(k.from || 'somewhere')}`));
        return this.show(node, { cls: 'small' });
      }
      case 'fact': {
        const f = this.s.facts.find((x) => x.id === it.id);
        if (!f) return;
        const node = el('div', 'sheet');
        node.appendChild(el('div', 'small', f.kind === 'stated' ? 'you told us' : 'we think…'));
        node.appendChild(el('div', 'title', esc(f.text)));
        if (f.kind !== 'stated' && f.state !== 'kept') {
          const row = el('div', 'options');
          const k = el('button', 'option', 'that’s right');
          k.addEventListener('click', () => {
            f.state = 'kept';
            d.taste('factKeep', { fact: f.id });
            this.game.scenery.sync();
            this.close(true);
          });
          const x = el('button', 'option ghost', 'not really');
          x.addEventListener('click', () => {
            f.state = 'tossed';
            d.taste('factToss', { fact: f.id });
            this.game.scenery.sync();
            this.close(true);
          });
          row.append(k, x);
          node.appendChild(row);
        }
        return this.show(node, { cls: 'small' });
      }
      case 'mailbox':
        return bus.emit('mail:open');
      case 'letterWall':
        return bus.emit('mail:wall');
      case 'ledger':
        return bus.emit('ledger:open');
      case 'bird':
        sound.play('coo');
        return;
    }
  }

  // ------------------------------------------------------------ swipe
  _swipe(card, { left, right, up, drop }) {
    let sx = 0;
    let sy = 0;
    let dx = 0;
    let dy = 0;
    let down = false;
    let id = null;
    card.addEventListener('pointerdown', (e) => {
      down = true;
      id = e.pointerId;
      sx = e.clientX;
      sy = e.clientY;
      dx = dy = 0;
      card.setPointerCapture(id);
      card.classList.add('dragging');
    });
    card.addEventListener('pointermove', (e) => {
      if (!down || e.pointerId !== id) return;
      dx = e.clientX - sx;
      dy = e.clientY - sy;
      card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx * 0.05}deg)`;
      card.classList.toggle('lean-right', dx > 60);
      card.classList.toggle('lean-left', dx < -60);
      // dragging down past the deck: the world shows through so you can aim at a room
      this.root.classList.toggle('aiming', !!drop && dy > 140);
    });
    const end = (e) => {
      if (!down || e.pointerId !== id) return;
      down = false;
      card.classList.remove('dragging', 'lean-right', 'lean-left');
      this.root.classList.remove('aiming');
      const W = 90;
      if (drop && dy > 140 && drop(e.clientX, e.clientY)) return;
      if (dx > W && Math.abs(dx) > Math.abs(dy)) return right?.();
      if (dx < -W && Math.abs(dx) > Math.abs(dy)) return left?.();
      if (up && dy < -W && Math.abs(dy) > Math.abs(dx)) {
        this.game.haptic('tick');
        sound.play('page');
        return up();
      }
      card.style.transform = '';
    };
    card.addEventListener('pointerup', end);
    card.addEventListener('pointercancel', end);
  }
}

export { el, esc };
