// Small systems around the edges:
//   Notifier  only real things, batched, max 3 a day, none at night
//   Seasons   snow on the roof in winter, autumn leaves, rainy days, holidays
//   Docked    a small, battery-light window with the ticker; click to expand
//   Inferences  ghostly guesses about you from what you keep and toss
import * as THREE from 'three';
import { bus } from '../core/events.js';
import { clock } from './clock.js';
import { mulberry32, uid } from '../core/util.js';
import { fairyLights } from '../world/props/decor.js';
import { mat } from '../gfx/materials.js';
import { sphere, cyl, mesh } from '../gfx/geo.js';
import { PORCH } from '../island/layout.js';

// ------------------------------------------------------------------ notifications
export class Notifier {
  constructor(game) {
    this.game = game;
    this.pending = [];
    this.timer = null;
    bus.on('notify:ask', () => this.ask());
    bus.on('news', (n) => this.onNews(n));
  }

  get s() {
    return this.game.store.data;
  }

  ask() {
    if (!('Notification' in window)) return;
    try {
      Notification.requestPermission();
    } catch (e) {
      /* ignore */
    }
  }

  onNews(n) {
    // only while the tab is in the background, and only real things
    if (this.game.visible || !this.s.settings.notifications) return;
    if (!['finished', 'decision', 'mail', 'arrival', 'failure'].includes(n.kind)) return;
    this.pending.push(n);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.flush(), 2 * 60 * 1000); // batch
  }

  flush() {
    const list = this.pending;
    this.pending = [];
    if (!list.length || !('Notification' in window) || Notification.permission !== 'granted') return;
    const h = new Date(clock.now()).getHours();
    if (h >= 22 || h < 8) return; // never at night
    const today = new Date(clock.now()).toDateString();
    const sent = this.s.metrics.notifications.filter((x) => new Date(x).toDateString() === today).length;
    if (sent >= 3) return;
    const d = this.game.director;
    const parts = list.map((n) => {
      const t = n.thread && d.thread(n.thread);
      if (n.kind === 'finished') return `${t?.title || 'something'} is done`;
      if (n.kind === 'decision') return `a question about ${t?.title || 'a build'}`;
      if (n.kind === 'mail') return 'mail came';
      if (n.kind === 'arrival') return 'someone new arrived';
      return `${t?.title || 'something'} didn’t work out`;
    });
    try {
      new Notification('the island', { body: parts.slice(0, 3).join(' · '), silent: true });
      this.s.metrics.notifications.push(clock.now());
      this.game._notifiedSince = true;
    } catch (e) {
      /* ignore */
    }
  }
}

// ------------------------------------------------------------------ seasons & weather
function leafTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  g.fillStyle = '#e39b4f';
  g.beginPath();
  g.ellipse(16, 16, 12, 7, 0.6, 0, Math.PI * 2);
  g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function dropTexture(snow) {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  if (snow) {
    const grd = g.createRadialGradient(16, 16, 0, 16, 16, 14);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 32, 32);
  } else {
    g.strokeStyle = 'rgba(200,220,255,0.8)';
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(16, 2);
    g.lineTo(16, 30);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Seasons {
  constructor(game) {
    this.game = game;
    this.world = game.world;
    this.points = null;
    this.mode = null;
    this._check = 0;
  }

  /** What the weather is right now (seeded by the day, so it's stable for a day). */
  today() {
    const d = new Date(clock.now());
    const m = d.getMonth();
    const season = m === 11 || m <= 1 ? 'winter' : m <= 4 ? 'spring' : m <= 7 ? 'summer' : 'autumn';
    const rng = mulberry32(d.getFullYear() * 400 + m * 32 + d.getDate());
    const wet = rng();
    let weather = 'clear';
    if (season === 'winter' && wet < 0.45) weather = 'snow';
    else if (season !== 'summer' && wet < 0.28) weather = 'rain';
    else if (season === 'summer' && wet < 0.12) weather = 'rain';
    const holiday = (m === 11 && d.getDate() >= 18) || (m === 0 && d.getDate() <= 2) ? 'winter-lights' : m === 9 && d.getDate() >= 25 ? 'pumpkins' : null;
    return { season, weather, holiday };
  }

  update(dt) {
    this._check -= dt;
    if (this._check <= 0) {
      this._check = 60;
      const w = this.today();
      const snowRoof = w.season === 'winter' && (w.weather === 'snow' || mulberry32(new Date(clock.now()).getDate())() < 0.6);
      this.world.house.setSnow(snowRoof);
      const mode = w.weather === 'snow' ? 'snow' : w.weather === 'rain' ? 'rain' : w.season === 'autumn' ? 'leaves' : null;
      if (mode !== this.mode) this._setMode(mode);
      this.weather = w;
      this._holiday(w.holiday);
    }
    if (this.points) this._animate(dt);
  }

  /** Holiday touches on the porch (they come and go by themselves). */
  _holiday(h) {
    const levels = this.world.levels[0];
    if (this._hol && this._hol.userData.kind !== h) {
      levels.remove(this._hol);
      this._hol = null;
    }
    if (!h || this._hol) {
      if (this._hol?.userData.lights) this.world.lamps.glows.includes(this._hol.userData.lights) || this.world.lamps.glows.push(this._hol.userData.lights);
      return;
    }
    const g = new THREE.Group();
    g.userData.kind = h;
    if (h === 'winter-lights') {
      const fl = fairyLights(PORCH.x1 - PORCH.x0 - 0.4, 0.18, 16, ['#ffd27a', '#ffe9a8', '#ff9db5', '#bfe6ff']);
      fl.position.set((PORCH.x0 + PORCH.x1) / 2, 0.15 + 0.95, PORCH.z1 - 0.05);
      g.add(fl);
      g.userData.lights = fl;
      this.world.lamps.glows.push(fl);
    } else if (h === 'pumpkins') {
      const orange = mat('#e8913f', { roughness: 0.6 });
      for (const [x, s] of [
        [PORCH.x0 + 0.5, 1],
        [PORCH.x0 + 0.95, 0.7],
        [PORCH.x1 - 0.5, 0.85],
      ]) {
        const p = new THREE.Group();
        p.add(mesh(sphere(0.18 * s, 14, 10), orange, { scale: [1, 0.78, 1] }));
        p.add(mesh(cyl(0.02, 0.025, 0.08, 6), mat('#6b8a46'), { pos: [0, 0.16 * s, 0] }));
        p.position.set(x, 0.15 + 0.13 * s, PORCH.z0 + 0.4);
        g.add(p);
      }
    }
    levels.add(g);
    this._hol = g;
  }

  _setMode(mode) {
    if (this.points) {
      this.world.scene.remove(this.points);
      this.points.geometry.dispose();
      this.points = null;
    }
    this.mode = mode;
    if (!mode) return;
    const n = mode === 'leaves' ? 40 : mode === 'snow' ? 500 : 700;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(n * 3);
    const b = this.world.rig.bounds;
    for (let i = 0; i < n; i++) {
      pos[i * 3] = b.cx + (Math.random() - 0.5) * b.radius * 2.4;
      pos[i * 3 + 1] = Math.random() * 16 - 2;
      pos[i * 3 + 2] = b.cz + (Math.random() - 0.5) * b.radius * 2.4;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      map: mode === 'leaves' ? leafTexture() : dropTexture(mode === 'snow'),
      size: mode === 'leaves' ? 0.35 : mode === 'snow' ? 0.18 : 0.3,
      transparent: true,
      depthWrite: false,
      opacity: mode === 'rain' ? 0.55 : 0.9,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.userData.noAO = true;
    this.world.scene.add(this.points);
  }

  _animate(dt) {
    const p = this.points.geometry.attributes.position;
    const fall = this.mode === 'rain' ? 9 : this.mode === 'snow' ? 0.8 : 0.6;
    const t = performance.now() / 1000;
    for (let i = 0; i < p.count; i++) {
      let y = p.getY(i) - fall * dt;
      let x = p.getX(i);
      if (this.mode !== 'rain') x += Math.sin(t * 0.8 + i) * dt * 0.3;
      if (y < -3) y = 14;
      p.setXY(i, x, y);
    }
    p.needsUpdate = true;
  }
}

// ------------------------------------------------------------------ docked mode
export class Docked {
  constructor(game) {
    this.game = game;
    this.on = false;
    bus.on('dock:toggle', (v) => this.set(v));
    if (new URLSearchParams(location.search).has('docked')) setTimeout(() => this.set(true), 50);
  }

  set(v) {
    const g = this.game;
    this.on = v;
    document.body.classList.toggle('docked', v);
    const e = g.world.engine;
    e.maxFps = v ? 8 : 0;
    if (v) {
      this._q = e.quality;
      e.setQuality('low');
      g.world.rig.zoom.target = 1.15;
      const close = () => {
        this.set(false);
        document.removeEventListener('click', onClick, true);
      };
      const onClick = (ev) => {
        if (ev.target.closest('.hud-bottom .round')) return;
        ev.stopPropagation();
        close();
      };
      setTimeout(() => document.addEventListener('click', onClick, true), 50);
    } else {
      if (this._q) e.setQuality(this._q);
      g.world.rig.zoom.target = 1;
    }
    setTimeout(() => window.dispatchEvent(new Event('resize')), 30);
  }
}

// ------------------------------------------------------------------ inferred facts
/** Every so often, guess something about the player from their keeps and tosses. */
export function inferFacts(state) {
  const keeps = {};
  const tosses = {};
  for (const e of state.taste) {
    if (!e.area) continue;
    if (e.kind === 'keep' || e.kind === 'greenlight') keeps[e.area] = (keeps[e.area] || 0) + 1;
    if (e.kind === 'toss') tosses[e.area] = (tosses[e.area] || 0) + 1;
  }
  const out = [];
  const LIKES = {
    plants: 'you like things that grow',
    sky: 'you look up a lot',
    books: 'you’re a reader',
    letters: 'you like keeping in touch',
    music: 'there’s always a song in your head',
    food: 'you like to cook for yourself',
    home: 'you like a tidy, easy home',
    focus: 'you like quiet focus',
    play: 'you like a bit of play',
    maps: 'you like knowing where you are',
    sleep: 'you care about rest',
    walks: 'you like a good walk',
  };
  for (const [area, n] of Object.entries(keeps)) {
    if (n >= 3 && (tosses[area] || 0) < n && LIKES[area] && !state.facts.some((f) => f.area === area)) out.push({ id: uid('f'), text: LIKES[area], kind: 'inferred', state: 'ghost', area, at: clock.now() });
  }
  return out.slice(0, 1);
}
