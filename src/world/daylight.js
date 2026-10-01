// Day & night. By default the world follows your real clock: morning sun
// through the windows, golden afternoons, lamps and fairy lights at night.
import * as THREE from 'three';
import { clamp, lerp, smoothstep } from '../core/util.js';
import { WindowView, gradientCanvasTexture } from '../gfx/textures.js';

const C = (h) => new THREE.Color(h);

// keyframes over 24h
const KEYS = [
  {
    h: 0,
    bg: ['#262c55', '#3d3f74', '#5a4f86'],
    hemiSky: '#8b9be0',
    hemiGround: '#3b3150',
    hemi: 0.4,
    sun: 0,
    sunColor: '#a9bcff',
    moon: 0.6,
    lamps: 1,
    env: 0.16,
    exposure: 1.0,
    win: { top: '#141a40', bottom: '#3c3470', cloud: 'rgba(120,120,170,0.35)', hills: ['#2a3550', '#24304a', '#1d283f'], tree: '#1f3a3a', trunk: '#2a2230' },
    stars: 1,
    grade: [0.96, 0.98, 1.06],
  },
  {
    h: 5,
    bg: ['#3a3f78', '#7a6a9e', '#d99aa6'],
    hemiSky: '#a7a6e0',
    hemiGround: '#4a3a50',
    hemi: 0.45,
    sun: 0.2,
    sunColor: '#ffb08a',
    moon: 0.4,
    lamps: 0.9,
    env: 0.22,
    exposure: 1.0,
    win: { top: '#3a3f78', bottom: '#e8a0a0', cloud: 'rgba(255,200,210,0.5)', hills: ['#5a5a80', '#4a5070', '#3d4560'], tree: '#38524a', trunk: '#3a2e38' },
    stars: 0.4,
    grade: [1.0, 0.98, 1.02],
  },
  {
    h: 7,
    bg: ['#ffd9c2', '#fbc3c0', '#e6c4e6'],
    hemiSky: '#ffe6d6',
    hemiGround: '#b98a7a',
    hemi: 0.6,
    sun: 2.6,
    sunColor: '#ffbf8f',
    moon: 0,
    lamps: 0.25,
    env: 0.3,
    exposure: 1.0,
    win: { top: '#9fd2f5', bottom: '#ffd9c2', cloud: 'rgba(255,240,235,0.9)', hills: ['#a8d58f', '#8cc47a', '#76b46c'], tree: '#6aa864', trunk: '#8a5a3c' },
    stars: 0,
    grade: [1.03, 1.0, 0.97],
  },
  {
    h: 10,
    bg: ['#ffe8d6', '#fcd8d0', '#f1d6ea'],
    hemiSky: '#fff1e2',
    hemiGround: '#c49a82',
    hemi: 0.66,
    sun: 3.4,
    sunColor: '#ffe4c2',
    moon: 0,
    lamps: 0,
    env: 0.34,
    exposure: 1.0,
    win: { top: '#86c8f5', bottom: '#d9f0ff', cloud: 'rgba(255,255,255,0.95)', hills: ['#a8d58f', '#8cc47a', '#76b46c'], tree: '#6aa864', trunk: '#8a5a3c' },
    stars: 0,
    grade: [1.02, 1.0, 0.98],
  },
  {
    h: 14,
    bg: ['#ffe9d4', '#fdd6c8', '#f3d3e4'],
    hemiSky: '#fff4e6',
    hemiGround: '#c49a82',
    hemi: 0.68,
    sun: 3.5,
    sunColor: '#fff0d8',
    moon: 0,
    lamps: 0,
    env: 0.34,
    exposure: 1.0,
    win: { top: '#7cc2f5', bottom: '#d6efff', cloud: 'rgba(255,255,255,0.95)', hills: ['#a8d58f', '#8cc47a', '#76b46c'], tree: '#6aa864', trunk: '#8a5a3c' },
    stars: 0,
    grade: [1.01, 1.0, 0.99],
  },
  {
    h: 17.5,
    bg: ['#ffd6b0', '#f9b6a0', '#e8a9c2'],
    hemiSky: '#ffe0c2',
    hemiGround: '#b8806a',
    hemi: 0.6,
    sun: 3.1,
    sunColor: '#ffb070',
    moon: 0,
    lamps: 0.3,
    env: 0.3,
    exposure: 1.0,
    win: { top: '#f5b38a', bottom: '#ffd9a8', cloud: 'rgba(255,220,200,0.9)', hills: ['#b9b86f', '#a0a862', '#8a9a58'], tree: '#7a9550', trunk: '#7a4a32' },
    stars: 0,
    grade: [1.05, 0.99, 0.94],
  },
  {
    h: 19.5,
    bg: ['#8e7bb5', '#d790a6', '#f2a989'],
    hemiSky: '#d7b0d8',
    hemiGround: '#6a4a5a',
    hemi: 0.5,
    sun: 1.1,
    sunColor: '#ff8a6a',
    moon: 0.1,
    lamps: 0.85,
    env: 0.18,
    exposure: 1.0,
    win: { top: '#6a5a9a', bottom: '#f29a80', cloud: 'rgba(255,180,170,0.7)', hills: ['#6a6a7a', '#5a5a70', '#4a4a60'], tree: '#45584f', trunk: '#4a3236' },
    stars: 0.25,
    grade: [1.03, 0.97, 0.98],
  },
  {
    h: 21.5,
    bg: ['#2c3260', '#444580', '#6a5690'],
    hemiSky: '#8b9be0',
    hemiGround: '#3b3150',
    hemi: 0.42,
    sun: 0,
    sunColor: '#a9bcff',
    moon: 0.6,
    lamps: 1,
    env: 0.18,
    exposure: 1.0,
    win: { top: '#161c45', bottom: '#433a78', cloud: 'rgba(120,120,170,0.35)', hills: ['#2a3550', '#24304a', '#1d283f'], tree: '#1f3a3a', trunk: '#2a2230' },
    stars: 1,
    grade: [0.97, 0.98, 1.05],
  },
];
KEYS.push({ ...KEYS[0], h: 24 });

function lerpColor(a, b, t) {
  return '#' + C(a).lerp(C(b), t).getHexString();
}

function sample(hour) {
  let i = 0;
  while (i < KEYS.length - 1 && KEYS[i + 1].h <= hour) i++;
  const a = KEYS[i];
  const b = KEYS[Math.min(i + 1, KEYS.length - 1)];
  const t = b.h === a.h ? 0 : smoothstep(0, 1, (hour - a.h) / (b.h - a.h));
  const L = (k) => lerp(a[k], b[k], t);
  const LC = (k) => lerpColor(a[k], b[k], t);
  return {
    bg: a.bg.map((c, k) => lerpColor(c, b.bg[k], t)),
    hemiSky: LC('hemiSky'),
    hemiGround: LC('hemiGround'),
    hemi: L('hemi'),
    sun: L('sun'),
    sunColor: LC('sunColor'),
    moon: L('moon'),
    lamps: L('lamps'),
    env: L('env'),
    exposure: L('exposure'),
    stars: L('stars'),
    grade: a.grade.map((g, k) => lerp(g, b.grade[k], t)),
    win: {
      top: lerpColor(a.win.top, b.win.top, t),
      bottom: lerpColor(a.win.bottom, b.win.bottom, t),
      cloud: t < 0.5 ? a.win.cloud : b.win.cloud,
      hills: a.win.hills.map((c, k) => lerpColor(c, b.win.hills[k], t)),
      tree: lerpColor(a.win.tree, b.win.tree, t),
      trunk: lerpColor(a.win.trunk, b.win.trunk, t),
    },
  };
}

export const TIME_PRESETS = [
  { id: 'auto', label: 'real time' },
  { id: 'morning', label: 'morning', h: 8.2 },
  { id: 'noon', label: 'afternoon', h: 14 },
  { id: 'golden', label: 'golden hour', h: 17.6 },
  { id: 'dusk', label: 'dusk', h: 19.7 },
  { id: 'night', label: 'night', h: 23 },
];

export class Daylight {
  /** Clock hook (the island game shifts it for testing). */
  static now = () => Date.now();

  constructor(engine) {
    this.engine = engine;
    const scene = engine.scene;
    this.hemi = new THREE.HemisphereLight('#fff', '#888', 1);
    scene.add(this.hemi);

    this.sun = new THREE.DirectionalLight('#fff', 2);
    this.sun.castShadow = true;
    const s = this.sun.shadow;
    s.mapSize.set(engine.quality === 'low' ? 1024 : 2048, engine.quality === 'low' ? 1024 : 2048);
    s.camera.left = -9;
    s.camera.right = 9;
    s.camera.top = 9;
    s.camera.bottom = -9;
    s.camera.near = 0.5;
    s.camera.far = 40;
    s.radius = 3;
    s.bias = -0.0004;
    s.normalBias = 0.025;
    scene.add(this.sun);
    scene.add(this.sun.target);
    engine.shadowLights = [this.sun];

    this.moon = new THREE.DirectionalLight('#a9bcff', 0.4);
    this.moon.position.set(-6, 9, -4);
    scene.add(this.moon);

    this.view = new WindowView();
    this.override = null; // preset id or null (= real time)
    this._bgKey = '';
    this.hour = 12;
    this.state = null;
    this.rooms = [];
    this._t = 99;
    this.speed = 1; // >1 to fast-forward (debug)
    this._virtual = null;
  }

  setPreset(id) {
    const p = TIME_PRESETS.find((x) => x.id === id);
    this.override = p && p.h !== undefined ? p.h : null;
    this._t = 99;
  }

  get presetId() {
    if (this.override === null) return 'auto';
    return TIME_PRESETS.find((p) => p.h === this.override)?.id || 'auto';
  }

  setHour(h) {
    this.override = ((h % 24) + 24) % 24;
    this._t = 99;
  }

  currentHour() {
    if (this.override !== null) return this.override;
    const d = new Date(Daylight.now());
    return d.getHours() + d.getMinutes() / 60 + d.getSeconds() / 3600;
  }

  get isNight() {
    return this.hour >= 20.5 || this.hour < 6;
  }

  get phase() {
    const h = this.hour;
    if (h >= 5 && h < 11) return 'morning';
    if (h >= 11 && h < 17) return 'day';
    if (h >= 17 && h < 20.5) return 'evening';
    return 'night';
  }

  update(dt, room) {
    this._t += dt;
    const h = (this.hour = this.currentHour());
    const st = (this.state = sample(h));
    const engine = this.engine;

    // background gradient (only rebuild when it visibly changes)
    const key = st.bg.join();
    if (key !== this._bgKey) {
      this._bgKey = key;
      const old = engine.scene.background;
      engine.scene.background = gradientCanvasTexture(st.bg);
      old?.dispose?.();
      document.documentElement.style.setProperty('--sky-top', st.bg[0]);
      document.documentElement.style.setProperty('--sky-bottom', st.bg[2]);
    }

    this.hemi.color.set(st.hemiSky);
    this.hemi.groundColor.set(st.hemiGround);
    this.hemi.intensity = st.hemi;
    engine.scene.environmentIntensity = st.env;

    // sun path: low and warm in the morning/evening, slanting in through
    // the windows; from the north-west so it pours into the default view
    const dayT = clamp((h - 6) / 14, 0, 1); // 6am .. 8pm
    const az = lerp(-2.75, -1.5, dayT); // radians around Y (north-west-ish)
    const el = 0.36 + Math.sin(dayT * Math.PI) * 0.26;
    const r = 20;
    this.sun.position.set(Math.sin(az) * Math.cos(el) * r, Math.sin(el) * r, Math.cos(az) * Math.cos(el) * r);
    this.sun.target.position.set(0, 0, 0);
    this.sun.color.set(st.sunColor);
    this.sun.intensity = st.sun;
    this.sun.castShadow = st.sun > 0.05;
    this.moon.intensity = st.moon;

    const g = engine.gradePass?.uniforms;
    if (g) g.uWarm.value.set(st.grade[0], st.grade[1], st.grade[2]);

    // window view
    if (this._t > 2) {
      this._t = 0;
      const night = st.stars > 0.5;
      const sunX = 0.15 + dayT * 0.7;
      this.view.draw({
        top: st.win.top,
        bottom: st.win.bottom,
        cloud: st.win.cloud,
        hills: st.win.hills,
        tree: st.win.tree,
        trunk: st.win.trunk,
        stars: Math.round(st.stars * 10) / 10,
        sun: night
          ? { visible: true, x: 0.72, y: 0.22, color: '#c9d4ff', size: 26, disc: '#f3f0ff' }
          : st.sun > 0.3
            ? { visible: true, x: Math.round(sunX * 100) / 100, y: Math.round((0.55 - Math.sin(dayT * Math.PI) * 0.4) * 100) / 100, color: h > 16 || h < 8 ? '#ffb070' : '#fff1c4', size: 30 }
            : { visible: false },
        moon: night,
      });
    }

    // lamps & glowy things in the room
    if (room) applyLamps(room, st.lamps, engine.time);
  }
}

export function applyLamps(room, level, time) {
  for (const l of room.lights) {
    const lamp = l.userData.lamp;
    const on = lamp.on ? level : 0;
    lamp.level = (lamp.level ?? on) + (on - (lamp.level ?? on)) * 0.08;
    const k = lamp.level;
    lamp.light.intensity = lamp.base * k;
    lamp.light.visible = k > 0.02;
    lamp.shadeMat.emissiveIntensity = 0.15 + k * 1.6;
    if (lamp.bulbMat !== lamp.shadeMat) lamp.bulbMat.emissiveIntensity = k * 8;
  }
  for (const gl of room.glows) {
    const k = gl.userData.level !== undefined ? gl.userData.level : level;
    const mats = gl.userData.bulbMats;
    if (!mats) continue;
    mats.forEach((m, i) => {
      const tw = 0.72 + 0.28 * Math.sin(time * 2.2 + i * 1.7);
      m.emissiveIntensity = 0.25 + k * 7 * tw;
    });
  }
}
