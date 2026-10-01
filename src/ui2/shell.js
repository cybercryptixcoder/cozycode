// The whole interface: a room-name label, a one-line ticker, a snapshot
// button and settings. Everything else happens on the island itself.
// (Plus a few sheets that open from there: naming a newcomer, whispering,
// settings.)
import { el, esc } from './cards.js';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { clock } from '../play/clock.js';
import { ROOMS } from '../island/layout.js';
import { pick } from '../core/util.js';
import { NAMES } from '../play/crew.js';
import { PALETTE } from '../critters/critter.js';

const ICON = {
  camera: '<svg viewBox="0 0 24 24"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.6l1.2-1.6A1.5 1.5 0 0 1 10.5 4h3a1.5 1.5 0 0 1 1.2.6L15.9 6h1.6A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><circle cx="12" cy="12.4" r="3.4" fill="none" stroke="currentColor" stroke-width="1.9"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M6 18l1.6-1.6M16.4 7.6 18 6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
  mic: '<svg viewBox="0 0 24 24"><rect x="9" y="3.5" width="6" height="11" rx="3" fill="currentColor"/><path d="M6 11.5a6 6 0 0 0 12 0M12 17.5V21" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
};

const FLAVOR = [
  'the kettle’s warm',
  'a cloud drifted past that looked like a boot',
  'someone left a mug on the stairs again',
  'the mist is extra soft today',
  'the porch boards creaked hello',
  'a bee bumped into the window, then left',
  'the idea board smells faintly of cork',
  'there’s a crumb on the bench. it’s fine.',
  'the plant leaned a little toward the sun',
  'quiet hum from under the island',
  'the toss bin looks content',
  'a leaf blew onto the porch',
];

export class Shell {
  constructor(game, root) {
    this.game = game;
    this.d = game.director;
    this.root = root;
    game.ui = this;
    this._build();
    this.tickerQueue = [];
    this.flavorN = 0;
    this._tickerT = 3;
    this._labelHold = 0;
    bus.on('ticker', (text) => this.news(text));
    bus.on('crew:needsName', (m, c) => this.nameCrew(m, c));
    bus.on('whisper:open', (c) => this.whisper(c));
    game.hooks.push((dt) => this.update(dt));
  }

  get s() {
    return this.game.store.data;
  }

  _build() {
    const top = el('div', 'hud-top');
    this.labelEl = el('div', 'room-label', 'the commons');
    top.appendChild(this.labelEl);
    this.root.appendChild(top);
    const bottom = el('div', 'hud-bottom');
    this.tickerEl = el('div', 'ticker', '<span></span>');
    this.tickerEl.addEventListener('click', () => this.expandTicker());
    const snap = el('button', 'round snap', ICON.camera);
    snap.title = 'snapshot';
    snap.addEventListener('click', () => this.snapshot());
    const gear = el('button', 'round gear', ICON.gear);
    gear.title = 'settings';
    gear.addEventListener('click', () => this.settings());
    bottom.append(snap, this.tickerEl, gear);
    this.root.appendChild(bottom);
    this.flash = el('div', 'flash');
    this.root.appendChild(this.flash);
  }

  // ------------------------------------------------------------ room label
  label(text, hold = 2.5) {
    this.labelEl.textContent = text;
    this._labelHold = hold;
    this.labelEl.classList.add('pop');
    setTimeout(() => this.labelEl.classList.remove('pop'), 400);
  }

  _roomName() {
    const w = this.game.world;
    if (w.engine.camera.position.y < 0.2) return 'the underside';
    if (w.rig.followCritter) return `following ${w.rig.followCritter.name.toLowerCase()}`;
    if (w.focus) return ROOMS[w.focus]?.name || w.focus;
    // the room fully open toward the camera at this corner
    const open = { se: 'commons', ne: 'workshop', nw: 'study', sw: 'kitchen' }[w.rig.viewCorner];
    const built = w.house.byId[open] && !w.house.byId[open].sealed;
    return built ? ROOMS[open].name : 'the island';
  }

  update(dt) {
    if (this._labelHold > 0) this._labelHold -= dt;
    else {
      const n = this._roomName();
      if (this.labelEl.textContent !== n) this.label(n, 0);
    }
    this._tickerT -= dt;
    if (this._tickerT <= 0) this._nextTicker();
  }

  // ------------------------------------------------------------ ticker (news : flavor ~ 1:2)
  news(text) {
    this.tickerQueue.push(text);
    if (this.tickerQueue.length > 6) this.tickerQueue.shift();
    if (this._tickerT > 2) this._tickerT = 1.2;
  }

  _nextTicker() {
    let text;
    const wantNews = this.flavorN >= 2 || (this.tickerQueue.length && this.flavorN >= 1);
    if (wantNews && this.tickerQueue.length) {
      text = this.tickerQueue.shift();
      this.flavorN = 0;
    } else {
      text = this._flavor();
      this.flavorN++;
    }
    this._tickerT = 7 + Math.min(6, text.length * 0.06);
    const span = this.tickerEl.querySelector('span');
    span.classList.add('out');
    setTimeout(() => {
      span.textContent = text;
      span.classList.remove('out');
    }, 250);
  }

  _flavor() {
    const crew = this.game.crew.critters;
    const r = Math.random();
    if (r < 0.4 && crew.length) {
      const c = pick(crew);
      return `${c.name.toLowerCase()} is ${this.game.crew.statusLine(c).replace(/\.$/, '')}`;
    }
    if (r < 0.55 && !this.d.waiting().length) return pick(['all caught up. we’re on it, go do your thing.', 'nothing needs you right now', 'all quiet. we’ve got it.']);
    const h = this.game.world.clockHour();
    if (r < 0.7) return h < 7 || h >= 21 ? pick(['the stars are out', 'windows glowing', 'someone’s snoring softly']) : h < 11 ? pick(['morning light on the porch', 'the kettle’s on']) : pick(['afternoon sun on the boards', 'warm and slow out here']);
    return pick(FLAVOR);
  }

  expandTicker() {
    const node = el('div', 'sheet');
    node.appendChild(el('div', 'title', 'lately'));
    const list = el('div', 'list');
    for (const x of (this.s.ticker.last || []).slice(0, 12)) list.appendChild(el('div', 'tline', `<i>${new Date(x.at).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}</i> ${esc(x.text)}`));
    if (!this.s.ticker.last?.length) list.appendChild(el('div', 'small', 'nothing yet. it’s early days.'));
    node.appendChild(list);
    this.game.cards.show(node, { cls: 'small' });
  }

  // ------------------------------------------------------------ snapshot
  snapshot() {
    const g = this.game;
    this.flash.classList.remove('go');
    void this.flash.offsetWidth;
    this.flash.classList.add('go');
    sound.play('click');
    g.haptic('tick');
    g.world.engine.render();
    const url = g.world.engine.renderer.domElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `island-${new Date(clock.now()).toISOString().slice(0, 10)}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    this.d.taste('snapshot', {});
  }

  // ------------------------------------------------------------ naming a newcomer
  nameCrew(m, c) {
    if (this.game.cards.open) return;
    const node = el('div', 'sheet naming');
    node.appendChild(el('div', 'title', 'someone new! what’s their name?'));
    const used = new Set(this.s.crew.map((x) => x.name));
    const suggestion = NAMES.find((n) => !used.has(n)) || 'Sprout';
    const input = el('input', 'name');
    input.maxLength = 14;
    input.placeholder = suggestion.toLowerCase();
    node.appendChild(input);
    const row = el('div', 'options');
    const ok = el('button', 'option', 'that’s them');
    const done = () => {
      const name = (input.value.trim() || suggestion).slice(0, 14);
      m.name = name[0].toUpperCase() + name.slice(1);
      m.unnamed = false;
      if (c) {
        c.name = m.name;
        c.play('cheer');
        c.say(`${m.name.toLowerCase()}! i love it`);
      }
      this.game.scenery.drawRoster();
      this.d.taste('name', { member: m.id });
      this.game.cards.close(true);
    };
    ok.addEventListener('click', done);
    input.addEventListener('keydown', (e) => e.key === 'Enter' && done());
    row.appendChild(ok);
    node.appendChild(row);
    this.game.cards.show(node, { cls: 'small' });
    setTimeout(() => input.focus(), 300);
  }

  // ------------------------------------------------------------ whisper (long-press a crew member)
  whisper(c) {
    const m = c.member;
    c.brain.attending = 999;
    c.lookAt(this.game.world.engine.camera.position, 999);
    c.play('tilt');
    const node = el('div', 'sheet whisper');
    node.appendChild(el('div', 'small', `whisper to ${esc(c.name.toLowerCase())}`));
    const input = el('textarea', 'say');
    input.rows = 2;
    input.maxLength = 200;
    input.placeholder = pick(['an idea, a to-do, something about you…', 'psst…', 'what’s on your mind?']);
    node.appendChild(input);
    const row = el('div', 'options');
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      const mic = el('button', 'option ghost mic', ICON.mic);
      mic.addEventListener('click', () => {
        try {
          const rec = new SR();
          rec.lang = navigator.language || 'en-US';
          rec.interimResults = true;
          mic.classList.add('on');
          rec.onresult = (e) => (input.value = [...e.results].map((r) => r[0].transcript).join(' '));
          rec.onend = () => mic.classList.remove('on');
          rec.start();
        } catch (e) {
          mic.classList.remove('on');
        }
      });
      row.appendChild(mic);
    }
    const send = el('button', 'option', 'whisper');
    const done = () => {
      const text = input.value.trim();
      this.game.cards.close(true);
      c.brain.attending = 0;
      if (!text) return;
      const kind = this.d.whisper(m.id, text);
      sound.play('mm');
      c.play('nod');
      c.say(kind === 'fact' ? 'ooh, noted. that’s going in your room.' : kind === 'todo' ? 'on the chalkboard it goes!' : kind === 'letter' ? 'i’ll write it up!' : 'hmm! let me think about that…');
    };
    send.addEventListener('click', done);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        done();
      }
    });
    row.appendChild(send);
    node.appendChild(row);
    // recolour / rename live here too
    const more = el('div', 'tweak');
    const colors = el('div', 'swatches');
    for (const p of PALETTE.slice(0, 10)) {
      const sw = el('button', 'swatch');
      sw.style.background = p.color;
      sw.addEventListener('click', () => this._recolor(c, p.color));
      colors.appendChild(sw);
    }
    const rename = el('button', 'chip', 'rename');
    rename.addEventListener('click', () => {
      this.game.cards.close(true);
      this.nameCrew(m, c);
    });
    more.append(colors, rename);
    node.appendChild(more);
    this.game.cards._presenterLook(c);
    this.game.cards.show(node, { cls: 'small whispering', onClose: () => (c.brain.attending = 0) });
    setTimeout(() => input.focus(), 300);
  }

  _recolor(c, color) {
    c.member.color = color;
    c.color = color;
    c.material.color.set(color);
    c.limbMaterial.color.set(color).offsetHSL(0, 0.03, -0.06);
    if (c._xray) c._xray.mat.color.set(color);
    c.play('spin');
    this.game.scenery.drawRoster();
    this.d.taste('recolor', { member: c.id });
  }

  // ------------------------------------------------------------ settings
  settings() {
    const s = this.s.settings;
    const node = el('div', 'sheet settings');
    node.appendChild(el('div', 'title', 'settings'));
    const tog = (key, label) => {
      const b = el('button', `toggle ${s[key] ? 'on' : ''}`, `<span>${label}</span><i></i>`);
      b.addEventListener('click', () => {
        s[key] = !s[key];
        b.classList.toggle('on', s[key]);
        this._applySettings(key);
      });
      return b;
    };
    node.append(tog('sound', 'sounds'), tog('music', 'music'), tog('haptics', 'haptics'), tog('notifications', 'notifications (real things only, max 3 a day, never at night)'));
    const budget = el('div', 'row budget');
    budget.appendChild(el('span', '', 'specialist visits per day'));
    const val = el('b', '', String(s.specialistBudget));
    const minus = el('button', 'chip', '−');
    const plus = el('button', 'chip', '+');
    minus.addEventListener('click', () => {
      s.specialistBudget = Math.max(0, s.specialistBudget - 1);
      val.textContent = s.specialistBudget;
      this.game.arrivals.sync();
    });
    plus.addEventListener('click', () => {
      s.specialistBudget = Math.min(5, s.specialistBudget + 1);
      val.textContent = s.specialistBudget;
      this.game.arrivals.sync();
    });
    budget.append(minus, val, plus);
    node.appendChild(budget);
    node.appendChild(el('div', 'small', 'the big balloon is moored at the gate while there’s a visit left today.'));
    const q = el('div', 'row');
    q.appendChild(el('span', '', 'detail'));
    for (const lv of ['low', 'medium', 'high']) {
      const b = el('button', `chip ${this.game.world.engine.quality === lv ? 'used' : ''}`, lv);
      b.addEventListener('click', () => {
        this.game.world.engine.setQuality(lv);
        s.quality = lv;
        q.querySelectorAll('.chip').forEach((x) => x.classList.toggle('used', x === b));
      });
      q.appendChild(b);
    }
    node.appendChild(q);
    const dock = el('button', 'option ghost', 'docked mode (small window)');
    dock.addEventListener('click', () => {
      this.game.cards.close(true);
      bus.emit('dock:toggle', true);
    });
    node.appendChild(dock);
    // numbers for tuning (tucked away, never on the island itself)
    const met = el('details', 'metrics');
    met.appendChild(el('summary', 'small', 'numbers for tuning'));
    met.appendChild(el('div', 'small mono', this._metrics()));
    node.appendChild(met);
    const studio = el('a', 'small link', 'critter studio (internal tool)');
    studio.href = 'critter.html';
    node.appendChild(studio);
    const reset = el('button', 'option ghost danger', 'start a new island');
    let armed = false;
    reset.addEventListener('click', () => {
      if (!armed) {
        armed = true;
        reset.textContent = 'tap again to really start over';
        return;
      }
      this.game.store.reset();
      location.reload();
    });
    node.appendChild(reset);
    this.game.cards.show(node, { cls: 'small' });
  }

  _metrics() {
    const m = this.s.metrics;
    const now = clock.now();
    const week = m.opens.filter((o) => now - o.at < 7 * 86400000);
    const days = Math.max(1, Math.min(7, (now - this.s.createdAt) / 86400000));
    const quiet = week.filter((o) => !o.notified).length;
    const fs = m.started ? (m.finished / m.started).toFixed(2) : '–';
    const caps = this.s.taste.length;
    return [
      `opens per day: ${(week.length / days).toFixed(1)}`,
      `opens without a notification: ${week.length ? Math.round((quiet / week.length) * 100) : 0}%`,
      `homecomings skipped: ${m.homecomingSkips} of ${m.homecomings}`,
      `finished ÷ started: ${fs} (${m.finished}/${m.started})`,
      `notifications sent: ${m.notifications.length}`,
      `taste log entries: ${caps}`,
    ].join('<br>');
  }

  _applySettings(key) {
    const s = this.s.settings;
    if (key === 'sound') sound.setSfx(s.sound);
    if (key === 'music') sound.setMusic(s.music);
    if (key === 'notifications' && s.notifications) bus.emit('notify:ask');
    this.game.store.save();
  }
}
