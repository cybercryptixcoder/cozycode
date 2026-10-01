// Everything drawn in HTML on top of the 3D world.
import * as THREE from 'three';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { TIME_PRESETS } from '../world/daylight.js';
import { iconDataURL } from '../gfx/icons.js';
import { handleMessage } from '../game/chat.js';
import { clamp, damp } from '../core/util.js';

const ICON = {
  left: '<svg viewBox="0 0 24 24"><path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  right: '<svg viewBox="0 0 24 24"><path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  send: '<svg viewBox="0 0 24 24"><path d="M4 12.5 19.5 5l-4.2 15-3.6-5.6L4 12.5Z" fill="currentColor"/><path d="m11.7 14.4 7.8-9.4" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>',
  music: '<svg viewBox="0 0 24 24"><path d="M9 17.5V6.2l10-2.2v11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.6" cy="17.6" r="2.6" fill="currentColor"/><circle cx="16.6" cy="15.2" r="2.6" fill="currentColor"/></svg>',
  sound: '<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></g></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5Z" fill="currentColor"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="m7 7 10 10M17 7 7 17" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',
  wave: '<svg viewBox="0 0 24 24"><path d="M7 13.5V7.8a1.4 1.4 0 0 1 2.8 0V12m0-1.5V5.6a1.4 1.4 0 0 1 2.8 0V11m0-3.8a1.4 1.4 0 0 1 2.8 0V12m0-2.6a1.4 1.4 0 0 1 2.8 0V15a5.5 5.5 0 0 1-5.5 5.5h-.9a5.5 5.5 0 0 1-4.3-2.1L4.2 15a1.5 1.5 0 0 1 2.3-1.9Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>',
  moonZ: '<svg viewBox="0 0 24 24"><path d="M17 15a6 6 0 0 1-8-8 6 6 0 1 0 8 8Z" fill="currentColor"/><path d="M15 4h4l-4 4h4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  help: '<svg viewBox="0 0 24 24"><path d="M9.2 9.3a2.9 2.9 0 1 1 4.1 2.6c-.9.4-1.3 1-1.3 1.9v.4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="17.6" r="1.4" fill="currentColor"/></svg>',
  studio: '<svg viewBox="0 0 24 24"><path d="M12 4c4.4 0 7 3.6 7 8.2 0 4.3-3.1 7.8-7 7.8s-7-3.5-7-7.8C5 7.6 7.6 4 12 4Z" fill="currentColor"/><circle cx="9.6" cy="12" r="1.2" fill="#fff"/><circle cx="14.4" cy="12" r="1.2" fill="#fff"/><path d="M12 4c0-1.5.8-2.3 2.2-2.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
};

export class HUD {
  constructor(world) {
    this.world = world;
    this.selected = null;
    this.bubbles = new Map();
    this._portraitT = 0;
    this._build();
    this._ring = this._makeRing();
    bus.on('critter:say', (c, text, opts) => this.say(c, text, opts));
    bus.on('critter:spawned', () => this.renderRoster());
    bus.on('critter:removed', (c) => {
      this.bubbles.get(c)?.el.remove();
      this.bubbles.delete(c);
      if (this.selected === c) this.select(null);
      this.renderRoster();
    });
    bus.on('critter:moved', () => this.renderRoster());
    bus.on('board:open', () => this.openPanel('ideas'));
    bus.on('todo:open', () => this.openPanel('todos'));
    bus.on('letters:open', () => this.openPanel('letters'));
    bus.on('note:pinned', (n, c) => {
      this.toast(`${c?.name || 'Someone'} pinned “${trim(n.text, 38)}” to the idea board`, 'note');
      if (this.panel === 'ideas') this.openPanel('ideas');
    });
    bus.on('todo:added', (t, c) => {
      this.toast(`${c?.name || 'Someone'} wrote “${trim(t.text, 38)}” on today’s board`, 'todo');
      if (this.panel === 'todos') this.openPanel('todos');
    });
    bus.on('letter:sent', (l, c) => this.toast(`${c?.name || 'Someone'} posted your letter ✉`, 'mail'));
    bus.on('computer:click', () => this.toast('the computer smiles at you. beep!', 'note'));
    this.renderRoster();
    this.refreshToggles();
    this._welcome();
  }

  // ------------------------------------------------------------------ DOM
  _build() {
    const root = (this.root = document.createElement('div'));
    root.className = 'hud';
    root.innerHTML = `
      <div class="plaque">
        <div class="plaque-room"></div>
        <div class="plaque-corner"><span class="dots"><i></i><i></i><i></i><i></i></span><b></b></div>
      </div>
      <div class="topbar">
        <button class="chip time" title="time of day"><span class="ico"></span><span class="lbl"></span></button>
        <button class="round music" title="music">${ICON.music}</button>
        <button class="round sound" title="sound">${ICON.sound}</button>
        <a class="round studio" href="critter.html" title="Critter Studio">${ICON.studio}</a>
        <button class="round help" title="how to play">${ICON.help}</button>
      </div>
      <div class="roster"></div>
      <div class="card hidden">
        <button class="x">${ICON.close}</button>
        <div class="card-top"><canvas width="96" height="96"></canvas><div><div class="card-name"></div><div class="card-bio"></div></div></div>
        <div class="card-rows">
          <div><span>feeling</span><b class="card-mood"></b></div>
          <div><span>up to</span><b class="card-doing"></b></div>
        </div>
        <div class="needs"></div>
        <div class="card-btns">
          <button data-a="follow">${ICON.eye}<span>follow</span></button>
          <button data-a="call">${ICON.wave}<span>call over</span></button>
          <button data-a="nap">${ICON.moonZ}<span>nap</span></button>
        </div>
      </div>
      <div class="bottom">
        <button class="round rot rot-left" title="turn left (←)">${ICON.left}</button>
        <form class="chat" autocomplete="off">
          <input type="text" maxlength="160" placeholder="say something to your sproutlings…" />
          <button type="submit" class="send" title="send">${ICON.send}</button>
        </form>
        <button class="round rot rot-right" title="turn right (→)">${ICON.right}</button>
      </div>
      <div class="suggest">
        <button>hi everyone!</button><button>idea: a tiny greenhouse</button><button>todo: water the plants</button><button>dance party</button><button>letter: thank you!</button><button>good night</button>
      </div>
      <div class="tooltip hidden"></div>
      <div class="toasts"></div>
      <div class="bubbles"></div>
      <div class="panel-wrap hidden"><div class="panel"><button class="x">${ICON.close}</button><div class="panel-body"></div></div></div>
      <div class="iris"></div>
      <div class="titlecard"><b></b><span></span></div>
    `;
    document.body.appendChild(root);
    const $ = (s) => root.querySelector(s);
    this.$ = $;
    this.el = {
      room: $('.plaque-room'),
      corner: $('.plaque-corner b'),
      dots: [...root.querySelectorAll('.plaque .dots i')],
      roster: $('.roster'),
      card: $('.card'),
      cardCanvas: $('.card canvas'),
      cardName: $('.card-name'),
      cardBio: $('.card-bio'),
      cardMood: $('.card-mood'),
      cardDoing: $('.card-doing'),
      needs: $('.needs'),
      tooltip: $('.tooltip'),
      toasts: $('.toasts'),
      bubbles: $('.bubbles'),
      input: $('.chat input'),
      panelWrap: $('.panel-wrap'),
      panelBody: $('.panel-body'),
      iris: $('.iris'),
      time: $('.time'),
    };

    $('.rot-left').onclick = () => {
      sound.unlock();
      this.world.rotate(-1);
    };
    $('.rot-right').onclick = () => {
      sound.unlock();
      this.world.rotate(1);
    };
    $('.chat').onsubmit = (e) => {
      e.preventDefault();
      sound.unlock();
      const text = this.el.input.value.trim();
      if (!text) return;
      this.el.input.value = '';
      sound.play('pop');
      handleMessage(this.world, text, this.selected);
      root.querySelector('.suggest').classList.add('used');
    };
    window.addEventListener('keydown', (e) => {
      const typing = document.activeElement === this.el.input;
      if (!typing && (e.key === 'Enter' || e.key === '/') && !this.panel) {
        e.preventDefault();
        this.el.input.focus();
      } else if (typing && e.key === 'Escape') this.el.input.blur();
      else if (e.key === 'Escape' && this.panel) this.closePanel();
    });
    this.el.input.addEventListener('focus', () => root.querySelector('.suggest').classList.add('show'));
    this.el.input.addEventListener('blur', () => setTimeout(() => root.querySelector('.suggest').classList.remove('show'), 200));
    root.querySelectorAll('.suggest button').forEach((b) => {
      b.onmousedown = (e) => {
        e.preventDefault();
        this.el.input.value = b.textContent;
        this.el.input.focus();
      };
    });
    $('.music').onclick = () => bus.emit('music:toggle');
    $('.sound').onclick = () => {
      sound.unlock();
      sound.setSfx(!sound.sfxOn);
      this.world.store.data.settings.sfx = sound.sfxOn;
      this.refreshToggles();
    };
    this.el.time.onclick = () => {
      sound.unlock();
      const ids = TIME_PRESETS.map((p) => p.id);
      const i = ids.indexOf(this.world.daylight.presetId);
      const next = ids[(i + 1) % ids.length];
      this.world.daylight.setPreset(next);
      this.world.store.data.settings.time = next;
      sound.play('click');
      this.refreshToggles();
    };
    $('.help').onclick = () => this.openPanel('help');
    // the four dots are a tiny map: click one to turn to that corner
    const order = ['nw', 'ne', 'se', 'sw'];
    this.el.dots.forEach((d, i) => {
      d.title = 'turn to this corner';
      d.onclick = () => {
        sound.unlock();
        const keys = ['nw', 'sw', 'se', 'ne']; // corner index -> far corner
        const want = keys.indexOf(order[i]);
        let delta = (want - this.world.rig.corner + 4) % 4;
        if (delta === 3) delta = -1;
        if (delta) this.world.rotate(delta);
      };
    });
    $('.card .x').onclick = () => this.select(null);
    $('.card-btns').onclick = (e) => {
      const b = e.target.closest('button');
      if (!b || !this.selected) return;
      sound.play('click');
      const c = this.selected;
      if (b.dataset.a === 'follow') {
        if (this.world.rig.followCritter === c) this.world.rig.unfollow();
        else this.world.rig.follow(c);
        this._syncCardButtons();
      } else if (b.dataset.a === 'call') this.world.api.callOver(c.name);
      else if (b.dataset.a === 'nap') this.world.api.nap(c.name);
    };
    $('.panel-wrap').onclick = (e) => {
      if (e.target === this.el.panelWrap || e.target.closest('.x')) this.closePanel();
    };
    this.el.panelBody.addEventListener('click', (e) => this._panelClick(e));
  }

  _makeRing() {
    const geo = new THREE.RingGeometry(0.5, 0.62, 48);
    geo.rotateX(-Math.PI / 2);
    const m = new THREE.MeshBasicMaterial({ color: '#fff6e8', transparent: true, opacity: 0.85, depthWrite: false });
    const ring = new THREE.Mesh(geo, m);
    ring.userData.noAO = true;
    ring.renderOrder = 2;
    ring.visible = false;
    return ring;
  }

  // ------------------------------------------------------------------ roster & card
  renderRoster() {
    const r = this.el.roster;
    r.innerHTML = '';
    for (const c of this.world.society.critters) {
      const b = document.createElement('button');
      b.className = 'face';
      b.title = c.name;
      const cv = document.createElement('canvas');
      cv.width = cv.height = 72;
      b.appendChild(cv);
      const tag = document.createElement('span');
      tag.className = 'where';
      b.appendChild(tag);
      b.onclick = () => {
        sound.unlock();
        sound.play('click');
        if (c.roomId !== this.world.roomId) this.world.travel(c.roomId);
        setTimeout(() => this.select(c), c.roomId !== this.world.roomId ? 900 : 0);
      };
      b._critter = c;
      b._canvas = cv;
      b._tag = tag;
      r.appendChild(b);
    }
    this._portraitT = 0;
  }

  select(c) {
    if (this.selected === c) return;
    this.selected = c;
    const card = this.el.card;
    if (!c) {
      card.classList.add('hidden');
      this._ring.visible = false;
      if (this.world.rig.followCritter) this.world.rig.unfollow();
      return;
    }
    card.classList.remove('hidden');
    card.style.setProperty('--tint', c.color);
    this.el.cardName.textContent = c.name;
    this.el.cardBio.textContent = c.bio || '';
    c.brain.attending = Math.max(c.brain.attending, c.mainAction?.name === 'sleep' ? 0 : 1.6);
    if (!c.walking && !c.busy && c.mainAction?.name !== 'sleep') setTimeout(() => c.play('wave', { sound: false }), 350);
    this._syncCardButtons();
    this._updateCard(true);
  }

  _syncCardButtons() {
    const f = this.root.querySelector('[data-a="follow"] span');
    f.textContent = this.world.rig.followCritter === this.selected ? 'unfollow' : 'follow';
  }

  _updateCard(force) {
    const c = this.selected;
    if (!c) return;
    this.el.cardMood.textContent = moodWord(c);
    this.el.cardDoing.textContent = c.held ? 'being carried around!' : c.brain.doing;
    const n = c.brain.needs;
    const bars = [
      ['energy', n.energy],
      ['fun', n.fun],
      ['friends', n.social],
      ['purpose', n.purpose],
    ];
    if (force || !this.el.needs.children.length) {
      this.el.needs.innerHTML = bars.map(([k]) => `<div class="need"><span>${k}</span><i><u></u></i></div>`).join('');
    }
    [...this.el.needs.querySelectorAll('u')].forEach((u, i) => (u.style.width = `${Math.round(bars[i][1] * 100)}%`));
  }

  hover(c, prop, pointer) {
    const tip = this.el.tooltip;
    if (c) {
      tip.innerHTML = `<b>${c.name}</b><span>${c.held ? 'wheee' : c.brain.doing}</span>`;
    } else if (prop) {
      tip.innerHTML = `<b>${prop.userData.label}</b>${prop.userData.hint ? `<span>${prop.userData.hint}</span>` : ''}`;
    } else {
      tip.classList.add('hidden');
      return;
    }
    tip.classList.remove('hidden');
    tip.style.transform = `translate(${pointer.x + 16}px, ${pointer.y + 14}px)`;
  }

  // ------------------------------------------------------------------ bubbles
  say(c, text, opts = {}) {
    let b = this.bubbles.get(c);
    if (!b) {
      const el = document.createElement('div');
      el.className = 'bubble';
      this.el.bubbles.appendChild(el);
      b = { el, text: '', shown: 0, until: 0 };
      this.bubbles.set(c, b);
    }
    b.text = text;
    b.shown = 0;
    b.until = performance.now() / 1000 + Math.max(2.2, text.length * 0.075 + 1.6);
    b.el.style.setProperty('--tint', c.color);
    if (c.roomId === this.world.roomId) sound.babble(text, c.voice);
  }

  _updateBubbles(dt) {
    const cam = this.world.engine.camera;
    const w = this.world.engine.width;
    const h = this.world.engine.height;
    const now = performance.now() / 1000;
    const placed = [];
    for (const [c, b] of this.bubbles) {
      const visible = c.roomId === this.world.roomId && now < b.until;
      if (!visible) {
        b.el.classList.remove('show');
        continue;
      }
      if (b.shown < b.text.length) {
        b.shown = Math.min(b.text.length, b.shown + dt * 30);
        b.el.textContent = b.text.slice(0, Math.ceil(b.shown));
      }
      const p = c.headPos(new THREE.Vector3(), 0.32).project(cam);
      if (p.z > 1) {
        b.el.classList.remove('show');
        continue;
      }
      const bw = b.el.offsetWidth || 120;
      const bh = b.el.offsetHeight || 36;
      const x = clamp((p.x * 0.5 + 0.5) * w, bw / 2 + 8, w - bw / 2 - 8);
      const y = clamp((-p.y * 0.5 + 0.5) * h, bh + 8, h);
      placed.push({ b, x, y, w: bw, h: bh, depth: p.z });
    }
    // nudge overlapping bubbles upward (nearest critter keeps its spot)
    placed.sort((a, c) => a.depth - c.depth);
    for (let i = 0; i < placed.length; i++) {
      const a = placed[i];
      a.ty = a.y;
      for (let pass = 0; pass < 4; pass++) {
        let moved = false;
        for (let j = 0; j < i; j++) {
          const o = placed[j];
          if (Math.abs(a.x - o.x) < (a.w + o.w) / 2 + 4 && Math.abs(a.ty - o.ty) < (a.h + o.h) / 2 + 4) {
            a.ty = o.ty - (o.h + a.h) / 2 - 6;
            moved = true;
          }
        }
        if (!moved) break;
      }
      a.b.y = a.b.y === undefined ? a.ty : damp(a.b.y, a.ty, 14, dt);
      a.b.el.style.transform = `translate(${a.x}px, ${a.b.y}px) translate(-50%, -100%)`;
      a.b.el.classList.add('show');
    }
  }

  // ------------------------------------------------------------------ toasts
  toast(text, kind = 'note') {
    const t = document.createElement('div');
    t.className = `toast ${kind}`;
    const icon = kind === 'mail' ? 'letter' : kind === 'todo' ? 'sparkle' : kind === 'love' ? 'heart' : 'bulb';
    t.innerHTML = `<img src="${iconDataURL(icon)}" alt=""/><span></span>`;
    t.querySelector('span').textContent = text;
    this.el.toasts.appendChild(t);
    requestAnimationFrame(() => t.classList.add('in'));
    setTimeout(() => {
      t.classList.remove('in');
      setTimeout(() => t.remove(), 400);
    }, 4200);
    while (this.el.toasts.children.length > 3) this.el.toasts.firstChild.remove();
  }

  _welcome() {
    const s = this.world.store.data;
    const away = Date.now() - (s.lastSeen || Date.now());
    if (s.critters && away > 1000 * 60 * 30) {
      const hrs = Math.round(away / 3600000);
      setTimeout(() => this.toast(hrs >= 1 ? `welcome back! you were away ${hrs}h — the crew kept the place cozy` : 'welcome back!', 'love'), 1200);
    } else if (!s.critters) {
      setTimeout(() => this.toast('welcome to the Nook! click a sproutling to say hi', 'love'), 1500);
    }
  }

  // ------------------------------------------------------------------ panels
  openPanel(kind) {
    sound.unlock();
    sound.play('pop');
    this.panel = kind;
    const store = this.world.store.data;
    const body = this.el.panelBody;
    if (kind === 'ideas') {
      const notes = [...store.notes].reverse();
      const pending = this.world.society.pendingNotes;
      body.innerHTML = `
        <h2>The Idea Board</h2>
        <p class="sub">Type <b>idea: …</b> below and a sproutling will pin it up. Later, the agents will pitch ideas here too.</p>
        <div class="notes">${pending.map((n) => noteHTML(n, true)).join('')}${notes.map((n) => noteHTML(n)).join('') || (pending.length ? '' : '<p class="empty">no ideas yet… type one in the chat box!</p>')}</div>`;
    } else if (kind === 'todos') {
      const todos = store.todos;
      body.innerHTML = `
        <h2>Today</h2>
        <p class="sub">Type <b>todo: …</b> and someone will chalk it up. Click to tick things off.</p>
        <ul class="todos">${todos.map((t) => `<li data-id="${t.id}" class="${t.done ? 'done' : ''}"><i></i><span>${esc(t.text)}</span><button class="del" data-del="${t.id}">${ICON.close}</button></li>`).join('') || '<p class="empty">a clean slate ~ nice</p>'}</ul>`;
    } else if (kind === 'letters') {
      const letters = [...store.letters].reverse();
      body.innerHTML = `
        <h2>Letter Wall</h2>
        <p class="sub">Type <b>letter: …</b> and Tofu’s crew will stamp it and post it. (Real sending comes with the agents.)</p>
        <div class="letters">${letters.map((l) => `<div class="letter"><span>${esc(l.text)}</span><small>${new Date(l.at).toLocaleDateString()}</small></div>`).join('') || '<p class="empty">no letters sent yet</p>'}</div>`;
    } else if (kind === 'help') {
      body.innerHTML = `
        <h2>How to be cozy</h2>
        <ul class="help-list">
          <li><b>Turn the room</b> with the arrows, ← → keys, or drag the background.</li>
          <li><b>Scroll</b> (or pinch) to zoom in toward a spot.</li>
          <li><b>Click</b> a sproutling to boop it and see what it’s up to. Boop a lot and see what happens.</li>
          <li><b>Rub</b> your cursor back and forth over one to pet it.</li>
          <li><b>Drag</b> one to pick it up and carry it somewhere.</li>
          <li><b>Click things</b>: the gramophone, lamps, plants, the idea board, the chalkboard, the door…</li>
          <li><b>Talk</b> in the box: <i>hi</i>, <i>idea: …</i>, <i>todo: …</i>, <i>letter: …</i>, <i>dance party</i>, <i>good night</i>, <i>come here</i>, <i>new friend</i>, or a sproutling’s name.</li>
          <li>Time follows your clock. Click the time chip to peek at other times of day.</li>
        </ul>
        <p class="sub">Meet one up close in the <a href="critter.html">Critter Studio</a>.</p>
        <button class="reset">reset the world</button>`;
    }
    this.el.panelWrap.classList.remove('hidden');
    this.el.panelWrap.dataset.kind = kind;
  }

  closePanel() {
    this.panel = null;
    this.el.panelWrap.classList.add('hidden');
  }

  _panelClick(e) {
    const del = e.target.closest('[data-del]');
    if (del) {
      this.world.society.removeTodo(del.dataset.del);
      this.openPanel('todos');
      return;
    }
    const li = e.target.closest('li[data-id]');
    if (li) {
      this.world.society.toggleTodo(li.dataset.id);
      sound.play(li.classList.contains('done') ? 'click' : 'yay');
      this.openPanel('todos');
      return;
    }
    const rm = e.target.closest('[data-note]');
    if (rm) {
      this.world.society.removeNote(rm.dataset.note);
      this.openPanel('ideas');
      return;
    }
    if (e.target.closest('.reset')) {
      if (confirm('Reset the world? Your sproutlings, notes and lists will start fresh.')) {
        this.world.store.reset();
        this.world._noSave = true;
        location.reload();
      }
    }
  }

  // ------------------------------------------------------------------ transitions
  iris(xPct, yPct, mid) {
    const el = this.el.iris;
    return new Promise((resolve) => {
      el.style.setProperty('--x', `${xPct}%`);
      el.style.setProperty('--y', `${yPct}%`);
      el.classList.remove('open');
      el.classList.add('closing');
      setTimeout(() => {
        mid?.();
        el.style.setProperty('--x', '50%');
        el.style.setProperty('--y', '55%');
        el.classList.remove('closing');
        el.classList.add('opening');
        setTimeout(() => {
          el.classList.remove('opening');
          resolve();
        }, 650);
      }, 650);
    });
  }

  onRoomChanged(room) {
    this.el.room.textContent = room.name;
    // a little title card
    const tc = this.root.querySelector('.titlecard');
    tc.querySelector('b').textContent = room.name;
    tc.querySelector('span').textContent = room.id === 'post' ? 'where letters come and go' : 'home sweet home';
    tc.classList.remove('show');
    void tc.offsetWidth;
    tc.classList.add('show');
    room.group.add(this._ring);
    this.updateCorner();
    this.renderRoster();
    if (this.selected && this.selected.roomId !== room.id) this.select(null);
  }

  updateCorner() {
    const room = this.world.room;
    if (!room) return;
    const key = this.world.rig.cornerKey();
    this.el.corner.textContent = room.spec.corners[key] || '';
    const order = ['nw', 'ne', 'se', 'sw'];
    this.el.dots.forEach((d, i) => d.classList.toggle('on', order[i] === key));
    this.root.querySelector('.plaque').classList.remove('pulse');
    void this.root.offsetWidth;
    this.root.querySelector('.plaque').classList.add('pulse');
  }

  refreshToggles() {
    this.root.querySelector('.music').classList.toggle('off', !sound.musicOn);
    this.root.querySelector('.sound').classList.toggle('off', !sound.sfxOn);
    const d = this.world.daylight;
    const preset = TIME_PRESETS.find((p) => p.id === d.presetId);
    const night = d.isNight;
    const ico = night ? 'moon' : 'sun';
    if (this._ico !== ico) {
      this._ico = ico;
      this.el.time.querySelector('.ico').innerHTML = ICON[ico];
    }
    const lbl = preset?.id === 'auto' ? clockLabel() : preset?.label;
    if (this._lbl !== lbl) this.el.time.querySelector('.lbl').textContent = this._lbl = lbl;
  }

  update(dt) {
    this._updateBubbles(dt);
    // selection ring
    const c = this.selected;
    if (c && c.roomId === this.world.roomId) {
      this._ring.visible = true;
      this._ring.position.set(c.position.x, 0.03, c.position.z);
      const s = c.size * (1 + Math.sin(performance.now() / 300) * 0.04);
      this._ring.scale.setScalar(s);
    } else this._ring.visible = false;
    this._portraitT -= dt;
    if (this._portraitT <= 0) {
      this._portraitT = 0.3;
      for (const b of this.el.roster.children) {
        const cr = b._critter;
        cr.face.drawPortrait(b._canvas, cr.color, cr.faceState);
        const away = cr.roomId !== this.world.roomId;
        b.classList.toggle('away', away);
        b._tag.textContent = away ? (cr.roomId === 'post' ? 'post' : 'nook') : '';
        b.classList.toggle('sel', cr === this.selected);
        b.classList.toggle('asleep', cr.mainAction?.name === 'sleep');
      }
      if (this.selected) {
        this.selected.face.drawPortrait(this.el.cardCanvas, this.selected.color, this.selected.faceState);
        this._updateCard();
      }
      this.refreshToggles();
    }
  }
}

function moodWord(c) {
  if (c.held) return 'wheee!';
  if (c.mainAction?.name === 'sleep') return 'zzz…';
  if (c.mainAction?.name === 'pet') return 'so loved';
  return { happy: 'happy', content: 'cozy', excited: 'excited!', sleepy: 'sleepy', curious: 'curious', sad: 'a bit blue', grumpy: 'grumpy', focused: 'focused', shy: 'shy' }[c.mood] || c.mood;
}

function noteHTML(n, pending = false) {
  return `<div class="note ${pending ? 'pending' : ''}" style="--c:${n.color}"><span>${esc(n.text)}</span><small>${pending ? 'on its way…' : n.by ? `by ${esc(n.by)}` : 'from you'}</small>${pending ? '' : `<button data-note="${n.id}" title="unpin">${ICON.close}</button>`}</div>`;
}

const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
const trim = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
const clockLabel = () => new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

export { ICON, damp };
