// Procedural canvas textures. Everything is painted in code so the game runs
// from file:// with no image loading (and stays stylistically consistent).
import * as THREE from 'three';
import { mulberry32, clamp, lerp } from '../core/util.js';

const cache = new Map();

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

export function canvasTexture(c, o = {}) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = o.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = o.anisotropy ?? 8;
  if (o.repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
  }
  if (o.wrapS) t.wrapS = o.wrapS;
  if (o.wrapT) t.wrapT = o.wrapT;
  return t;
}

const shade = (hex, amt) => {
  const c = new THREE.Color(hex);
  c.offsetHSL(0, 0, amt);
  return '#' + c.getHexString();
};
const mix = (a, b, t) => '#' + new THREE.Color(a).lerp(new THREE.Color(b), t).getHexString();

// ------------------------------------------------------------------ floor
/** Wood planks. One texture covers `units` x `units` world units. */
export function planksTexture({ base = '#d9a36b', units = 4, plankW = 0.5, seed = 3 } = {}) {
  const key = `planks:${base}:${units}:${plankW}:${seed}`;
  if (cache.has(key)) return cache.get(key);
  const S = 1024;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  const rng = mulberry32(seed);
  const ppu = S / units;
  const rows = Math.round(units / plankW);
  const rh = S / rows;
  for (let r = 0; r < rows; r++) {
    let x = -rng() * ppu * 1.5;
    while (x < S) {
      const len = ppu * (1.2 + rng() * 1.6);
      const tone = (rng() - 0.5) * 0.09;
      const col = shade(base, tone);
      g.fillStyle = col;
      g.fillRect(x, r * rh, len, rh);
      // grain
      g.save();
      g.beginPath();
      g.rect(x, r * rh, len, rh);
      g.clip();
      const lines = 7 + Math.floor(rng() * 4);
      for (let k = 0; k < lines; k++) {
        const y0 = r * rh + rng() * rh;
        g.strokeStyle = `rgba(110,60,30,${0.04 + rng() * 0.06})`;
        g.lineWidth = 1 + rng() * 2;
        g.beginPath();
        const amp = 2 + rng() * 5;
        const f = 0.004 + rng() * 0.01;
        const ph = rng() * 10;
        for (let px = x; px <= x + len; px += 8) {
          const py = y0 + Math.sin(px * f + ph) * amp;
          if (px === x) g.moveTo(px, py);
          else g.lineTo(px, py);
        }
        g.stroke();
      }
      // a little knot now and then
      if (rng() < 0.25) {
        const kx = x + rng() * len;
        const ky = r * rh + rh * (0.3 + rng() * 0.4);
        g.strokeStyle = 'rgba(110,60,30,0.12)';
        g.lineWidth = 2;
        for (let k = 0; k < 3; k++) {
          g.beginPath();
          g.ellipse(kx, ky, 6 + k * 5, 3 + k * 2.5, 0, 0, Math.PI * 2);
          g.stroke();
        }
      }
      // soft highlight on top edge, shadow at bottom
      const grd = g.createLinearGradient(0, r * rh, 0, (r + 1) * rh);
      grd.addColorStop(0, 'rgba(255,240,220,0.10)');
      grd.addColorStop(0.5, 'rgba(255,240,220,0)');
      grd.addColorStop(1, 'rgba(90,50,25,0.10)');
      g.fillStyle = grd;
      g.fillRect(x, r * rh, len, rh);
      g.restore();
      // end seam
      g.fillStyle = 'rgba(95,55,30,0.35)';
      g.fillRect(x + len - 2, r * rh, 2.5, rh);
      x += len;
    }
    g.fillStyle = 'rgba(95,55,30,0.45)';
    g.fillRect(0, r * rh, S, 2.5);
  }
  const t = canvasTexture(c, { repeat: true });
  t.repeat.set(1 / units, 1 / units);
  cache.set(key, t);
  return t;
}

/** Checker / tile floor for the post room. */
export function tilesTexture({ a = '#f6e2c8', b = '#e9c9a4', units = 2, n = 4 } = {}) {
  const key = `tiles:${a}:${b}:${units}:${n}`;
  if (cache.has(key)) return cache.get(key);
  const S = 512;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  const cs = S / n;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      g.fillStyle = (i + j) % 2 ? a : b;
      g.fillRect(i * cs, j * cs, cs, cs);
      const grd = g.createLinearGradient(i * cs, j * cs, (i + 1) * cs, (j + 1) * cs);
      grd.addColorStop(0, 'rgba(255,255,255,0.12)');
      grd.addColorStop(1, 'rgba(120,80,50,0.06)');
      g.fillStyle = grd;
      g.fillRect(i * cs, j * cs, cs, cs);
      g.strokeStyle = 'rgba(150,110,80,0.35)';
      g.lineWidth = 3;
      g.strokeRect(i * cs + 1.5, j * cs + 1.5, cs - 3, cs - 3);
    }
  const t = canvasTexture(c, { repeat: true });
  t.repeat.set(1 / units, 1 / units);
  cache.set(key, t);
  return t;
}

// ------------------------------------------------------------------ walls
/**
 * Wall texture: baseboard + wainscot panels + chair rail + wallpaper.
 * Width covers `unit` world units (tiles horizontally), height covers `height`.
 */
export function wallTexture({
  paper = '#fde9d6',
  pattern = 'dots',
  accent = '#f5b8a6',
  wainscot = '#f3d3b5',
  board = '#c98d5d',
  unit = 2,
  height = 4.2,
  wainscotH = 1.15,
  seed = 1,
} = {}) {
  const key = `wall:${paper}:${pattern}:${accent}:${wainscot}:${board}:${unit}:${height}:${wainscotH}`;
  if (cache.has(key)) return cache.get(key);
  const ppu = 200;
  const W = Math.round(unit * ppu);
  const H = Math.round(height * ppu);
  const c = makeCanvas(W, H);
  const g = c.getContext('2d');
  const rng = mulberry32(seed);
  const Y = (y) => H - y * ppu; // world height -> px

  // wallpaper
  g.fillStyle = paper;
  g.fillRect(0, 0, W, H);
  // subtle vertical paper texture
  for (let i = 0; i < 400; i++) {
    g.fillStyle = `rgba(150,100,70,${rng() * 0.025})`;
    g.fillRect(rng() * W, rng() * H, 1 + rng() * 2, 4 + rng() * 30);
  }
  const top = Y(height);
  const bottom = Y(wainscotH);
  g.save();
  g.beginPath();
  g.rect(0, top, W, bottom - top);
  g.clip();
  drawPattern(g, pattern, W, H, accent, paper, rng);
  g.restore();

  // wainscot
  g.fillStyle = wainscot;
  g.fillRect(0, bottom, W, H - bottom);
  const panels = 2;
  const pw = W / panels;
  for (let i = 0; i < panels; i++) {
    const x = i * pw + pw * 0.12;
    const w = pw * 0.76;
    const y0 = Y(wainscotH - 0.16);
    const y1 = Y(0.32);
    g.fillStyle = shade(wainscot, -0.04);
    roundRect(g, x, y0, w, y1 - y0, 10);
    g.fill();
    g.strokeStyle = shade(wainscot, 0.06);
    g.lineWidth = 4;
    roundRect(g, x + 3, y0 + 3, w - 6, y1 - y0 - 6, 8);
    g.stroke();
    g.strokeStyle = shade(wainscot, -0.12);
    g.lineWidth = 2;
    roundRect(g, x, y0, w, y1 - y0, 10);
    g.stroke();
  }
  // chair rail
  g.fillStyle = shade(wainscot, -0.08);
  g.fillRect(0, bottom - 10, W, 22);
  g.fillStyle = shade(wainscot, 0.07);
  g.fillRect(0, bottom - 10, W, 6);
  // baseboard
  g.fillStyle = board;
  g.fillRect(0, Y(0.2), W, Y(0) - Y(0.2));
  g.fillStyle = shade(board, 0.08);
  g.fillRect(0, Y(0.2), W, 6);
  g.fillStyle = shade(board, -0.1);
  g.fillRect(0, Y(0.02), W, 4);
  // soft AO near the floor
  const grd = g.createLinearGradient(0, Y(0.5), 0, H);
  grd.addColorStop(0, 'rgba(90,50,30,0)');
  grd.addColorStop(1, 'rgba(90,50,30,0.18)');
  g.fillStyle = grd;
  g.fillRect(0, Y(0.5), W, H - Y(0.5));
  // soft darkening toward the ceiling edge
  const grd2 = g.createLinearGradient(0, 0, 0, Y(height - 0.6));
  grd2.addColorStop(0, 'rgba(120,70,50,0.10)');
  grd2.addColorStop(1, 'rgba(120,70,50,0)');
  g.fillStyle = grd2;
  g.fillRect(0, 0, W, Y(height - 0.6));

  const t = canvasTexture(c, { repeat: true });
  t.wrapT = THREE.ClampToEdgeWrapping;
  t.repeat.set(1 / unit, 1 / height);
  cache.set(key, t);
  return t;
}

function drawPattern(g, pattern, W, H, accent, paper, rng) {
  if (pattern === 'dots') {
    const s = 50;
    g.fillStyle = accent;
    for (let y = 0; y < H + s; y += s)
      for (let x = 0; x < W + s; x += s) {
        const ox = (Math.floor(y / s) % 2) * (s / 2);
        g.globalAlpha = 0.55;
        g.beginPath();
        g.arc(x + ox, y, 5.5, 0, Math.PI * 2);
        g.fill();
      }
    g.globalAlpha = 1;
  } else if (pattern === 'stripes') {
    const s = W / 8;
    for (let x = 0; x < W; x += s) {
      g.fillStyle = accent;
      g.globalAlpha = 0.28;
      g.fillRect(x, 0, s * 0.42, H);
      g.globalAlpha = 0.5;
      g.fillRect(x + s * 0.55, 0, 3, H);
    }
    g.globalAlpha = 1;
  } else if (pattern === 'flowers') {
    const s = 80;
    for (let y = 0; y < H + s; y += s)
      for (let x = 0; x < W + s; x += s) {
        const ox = (Math.floor(y / s) % 2) * (s / 2);
        flower(g, x + ox, y, 9, accent);
      }
  } else if (pattern === 'gingham') {
    const s = 40;
    g.globalAlpha = 0.18;
    g.fillStyle = accent;
    for (let x = 0; x < W; x += s * 2) g.fillRect(x, 0, s, H);
    for (let y = 0; y < H; y += s * 2) g.fillRect(0, y, W, s);
    g.globalAlpha = 1;
  } else if (pattern === 'scallop') {
    const s = 40;
    g.strokeStyle = accent;
    g.globalAlpha = 0.45;
    g.lineWidth = 3;
    for (let y = 0; y < H + s; y += s * 0.8)
      for (let x = 0; x < W + s; x += s) {
        const ox = (Math.round(y / (s * 0.8)) % 2) * (s / 2);
        g.beginPath();
        g.arc(x + ox, y, s / 2, 0, Math.PI);
        g.stroke();
      }
    g.globalAlpha = 1;
  }
}

function flower(g, x, y, r, col) {
  g.fillStyle = col;
  g.globalAlpha = 0.6;
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2;
    g.beginPath();
    g.arc(x + Math.cos(a) * r * 0.75, y + Math.sin(a) * r * 0.75, r * 0.55, 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 0.9;
  g.fillStyle = '#ffe9a8';
  g.beginPath();
  g.arc(x, y, r * 0.38, 0, Math.PI * 2);
  g.fill();
  g.globalAlpha = 1;
}

export function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

// ------------------------------------------------------------------ textiles
export function roundRugTexture({ colors = ['#f7c6b0', '#fff1e2', '#f2a48a', '#fde3c8'], rings = 7 } = {}) {
  const key = `rrug:${colors.join(',')}:${rings}`;
  if (cache.has(key)) return cache.get(key);
  const S = 512;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  const R = S / 2;
  for (let i = 0; i < rings; i++) {
    const r = R * (1 - i / rings);
    g.fillStyle = colors[i % colors.length];
    g.beginPath();
    g.arc(R, R, r, 0, Math.PI * 2);
    g.fill();
    // braided texture
    g.strokeStyle = 'rgba(255,255,255,0.18)';
    g.lineWidth = 2;
    for (let k = 0; k < 90; k++) {
      const a = (k / 90) * Math.PI * 2;
      const rr = r - R / rings / 2;
      g.beginPath();
      g.moveTo(R + Math.cos(a) * (rr - 6), R + Math.sin(a) * (rr - 6));
      g.lineTo(R + Math.cos(a + 0.04) * (rr + 6), R + Math.sin(a + 0.04) * (rr + 6));
      g.stroke();
    }
  }
  const t = canvasTexture(c);
  cache.set(key, t);
  return t;
}

export function stripeRugTexture({ colors = ['#9ccdf2', '#fff6ea', '#f7b2a1', '#fff6ea'], border = '#f29a84' } = {}) {
  const key = `srug:${colors.join(',')}:${border}`;
  if (cache.has(key)) return cache.get(key);
  const W = 512;
  const H = 320;
  const c = makeCanvas(W, H);
  const g = c.getContext('2d');
  g.fillStyle = border;
  g.fillRect(0, 0, W, H);
  const n = 12;
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[i % colors.length];
    g.fillRect(24 + (i * (W - 48)) / n, 24, (W - 48) / n + 1, H - 48);
  }
  // little diamonds along the border
  g.fillStyle = '#fff6ea';
  for (let x = 30; x < W - 20; x += 32) {
    diamond(g, x, 12, 6);
    diamond(g, x, H - 12, 6);
  }
  // weave noise
  const rng = mulberry32(9);
  for (let i = 0; i < 2500; i++) {
    g.fillStyle = `rgba(255,255,255,${rng() * 0.08})`;
    g.fillRect(rng() * W, rng() * H, 2, 1);
  }
  const t = canvasTexture(c);
  cache.set(key, t);
  return t;
}

function diamond(g, x, y, r) {
  g.beginPath();
  g.moveTo(x, y - r);
  g.lineTo(x + r, y);
  g.lineTo(x, y + r);
  g.lineTo(x - r, y);
  g.closePath();
  g.fill();
}

export function quiltTexture({ colors = ['#ffd0c2', '#fff2df', '#c9e7d6', '#ffe6a6', '#d9cdf5', '#ffc1d2'], n = 6, seed = 4 } = {}) {
  const key = `quilt:${colors.join(',')}:${n}`;
  if (cache.has(key)) return cache.get(key);
  const S = 512;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  const rng = mulberry32(seed);
  const cs = S / n;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      const col = colors[Math.floor(rng() * colors.length)];
      g.fillStyle = col;
      g.fillRect(i * cs, j * cs, cs, cs);
      const kind = rng();
      g.fillStyle = shade(col, -0.06);
      if (kind < 0.3) {
        for (let k = 0; k < 4; k++)
          for (let l = 0; l < 4; l++) {
            g.beginPath();
            g.arc(i * cs + (k + 0.5) * (cs / 4), j * cs + (l + 0.5) * (cs / 4), 3, 0, Math.PI * 2);
            g.fill();
          }
      } else if (kind < 0.55) {
        for (let k = 0; k < 4; k++) g.fillRect(i * cs, j * cs + k * (cs / 4), cs, cs / 8);
      } else if (kind < 0.7) {
        flower(g, i * cs + cs / 2, j * cs + cs / 2, cs * 0.18, shade(col, -0.15));
      }
      g.setLineDash([5, 5]);
      g.strokeStyle = 'rgba(255,255,255,0.7)';
      g.lineWidth = 2;
      g.strokeRect(i * cs + 5, j * cs + 5, cs - 10, cs - 10);
      g.setLineDash([]);
    }
  const t = canvasTexture(c, { repeat: true });
  cache.set(key, t);
  return t;
}

export function corkTexture() {
  const key = 'cork';
  if (cache.has(key)) return cache.get(key);
  const S = 256;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  g.fillStyle = '#d6a473';
  g.fillRect(0, 0, S, S);
  const rng = mulberry32(5);
  for (let i = 0; i < 2600; i++) {
    const v = rng();
    g.fillStyle = v < 0.5 ? `rgba(150,95,50,${0.15 + rng() * 0.3})` : `rgba(240,200,150,${0.15 + rng() * 0.3})`;
    g.beginPath();
    g.arc(rng() * S, rng() * S, 0.6 + rng() * 2.2, 0, Math.PI * 2);
    g.fill();
  }
  const t = canvasTexture(c, { repeat: true });
  cache.set(key, t);
  return t;
}

export function speckleTexture(base = '#e8d2b8', dark = 'rgba(120,80,50,0.25)', light = 'rgba(255,255,255,0.3)') {
  const key = `speckle:${base}`;
  if (cache.has(key)) return cache.get(key);
  const S = 256;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  g.fillStyle = base;
  g.fillRect(0, 0, S, S);
  const rng = mulberry32(11);
  for (let i = 0; i < 900; i++) {
    g.fillStyle = rng() < 0.6 ? dark : light;
    g.beginPath();
    g.arc(rng() * S, rng() * S, 0.6 + rng() * 1.4, 0, Math.PI * 2);
    g.fill();
  }
  const t = canvasTexture(c, { repeat: true });
  cache.set(key, t);
  return t;
}

// ------------------------------------------------------------------ outside view
/** The little world outside the windows. Redrawn when the time of day changes. */
export class WindowView {
  constructor() {
    this.canvas = makeCanvas(512, 512);
    this.texture = canvasTexture(this.canvas);
    this.key = '';
  }
  draw(sky) {
    // sky: { top, bottom, sun:{x,y,color,visible}, stars:0..1, cloud }
    const key = JSON.stringify(sky);
    if (key === this.key) return;
    this.key = key;
    const g = this.canvas.getContext('2d');
    const S = 512;
    const grd = g.createLinearGradient(0, 0, 0, S);
    grd.addColorStop(0, sky.top);
    grd.addColorStop(0.75, sky.bottom);
    g.fillStyle = grd;
    g.fillRect(0, 0, S, S);
    const rng = mulberry32(42);
    if (sky.stars > 0.01) {
      for (let i = 0; i < 90; i++) {
        g.fillStyle = `rgba(255,250,230,${sky.stars * (0.3 + rng() * 0.7)})`;
        const r = rng() < 0.1 ? 2.2 : 1.1;
        g.beginPath();
        g.arc(rng() * S, rng() * S * 0.62, r, 0, Math.PI * 2);
        g.fill();
      }
    }
    if (sky.sun?.visible) {
      const { x, y, color, size = 34 } = sky.sun;
      const glow = g.createRadialGradient(x * S, y * S, 2, x * S, y * S, size * 3);
      glow.addColorStop(0, color);
      glow.addColorStop(0.3, color + '88');
      glow.addColorStop(1, color + '00');
      g.fillStyle = glow;
      g.fillRect(0, 0, S, S);
      g.fillStyle = sky.sun.disc || '#fff8e8';
      g.beginPath();
      g.arc(x * S, y * S, size, 0, Math.PI * 2);
      g.fill();
      if (sky.moon) {
        g.fillStyle = sky.top;
        g.beginPath();
        g.arc(x * S + size * 0.45, y * S - size * 0.25, size * 0.85, 0, Math.PI * 2);
        g.fill();
      }
    }
    // clouds
    g.fillStyle = sky.cloud;
    for (let i = 0; i < 5; i++) {
      const cx = rng() * S;
      const cy = 60 + rng() * 170;
      const w = 50 + rng() * 60;
      for (let k = 0; k < 5; k++) {
        g.beginPath();
        g.arc(cx + (k - 2) * w * 0.28, cy - Math.sin((k / 4) * Math.PI) * w * 0.22, w * (0.22 + 0.1 * Math.sin((k / 4) * Math.PI)), 0, Math.PI * 2);
        g.fill();
      }
    }
    // hills
    const hills = sky.hills;
    hill(g, S, 330, 40, hills[0], 0.008, 1.3);
    hill(g, S, 370, 30, hills[1], 0.012, 4.1);
    // little trees
    for (let i = 0; i < 7; i++) {
      const tx = 30 + rng() * (S - 60);
      const ty = 380 + rng() * 40;
      g.fillStyle = sky.trunk;
      g.fillRect(tx - 3, ty, 6, 22);
      g.fillStyle = sky.tree;
      g.beginPath();
      g.arc(tx, ty - 4, 16 + rng() * 8, 0, Math.PI * 2);
      g.fill();
    }
    hill(g, S, 420, 18, hills[2], 0.018, 2.2);
    // warm window glow at night (a neighbour's house)
    if (sky.stars > 0.4) {
      g.fillStyle = '#5a4a6a';
      g.fillRect(380, 360, 50, 40);
      g.beginPath();
      g.moveTo(372, 362);
      g.lineTo(405, 335);
      g.lineTo(438, 362);
      g.fill();
      g.fillStyle = '#ffd88a';
      g.fillRect(392, 372, 12, 12);
      g.fillRect(410, 372, 12, 12);
    }
    this.texture.needsUpdate = true;
  }
}

function hill(g, S, base, amp, color, f, ph) {
  g.fillStyle = color;
  g.beginPath();
  g.moveTo(0, S);
  for (let x = 0; x <= S; x += 8) g.lineTo(x, base - Math.sin(x * f + ph) * amp - Math.sin(x * f * 2.3 + ph * 2) * amp * 0.3);
  g.lineTo(S, S);
  g.closePath();
  g.fill();
}

// ------------------------------------------------------------------ text-ish
export function labelTexture(text, { w = 512, h = 128, bg = null, color = '#6b4638', font = 'Fredoka', weight = 600, size = 64, stroke = null } = {}) {
  const c = makeCanvas(w, h);
  const g = c.getContext('2d');
  if (bg) {
    g.fillStyle = bg;
    roundRect(g, 0, 0, w, h, h * 0.3);
    g.fill();
  }
  g.font = `${weight} ${size}px ${font}, sans-serif`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  if (stroke) {
    g.strokeStyle = stroke;
    g.lineWidth = size * 0.18;
    g.lineJoin = 'round';
    g.strokeText(text, w / 2, h / 2 + size * 0.05);
  }
  g.fillStyle = color;
  g.fillText(text, w / 2, h / 2 + size * 0.05);
  return canvasTexture(c);
}

/** Wrap text into lines that fit `maxW` with the current font. */
export function wrapText(g, text, maxW, maxLines = 6) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (g.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
      if (lines.length >= maxLines) break;
    } else line = test;
  }
  if (line && lines.length < maxLines) lines.push(line);
  if (lines.length === maxLines && words.join(' ').length > lines.join(' ').length) {
    lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, '…');
  }
  return lines;
}

export function noteTexture(text, color = '#ffe68a') {
  const S = 256;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  g.fillStyle = color;
  g.fillRect(0, 0, S, S);
  const grd = g.createLinearGradient(0, 0, 0, S);
  grd.addColorStop(0, 'rgba(255,255,255,0.15)');
  grd.addColorStop(1, 'rgba(120,80,30,0.08)');
  g.fillStyle = grd;
  g.fillRect(0, 0, S, S);
  g.fillStyle = 'rgba(0,0,0,0.06)';
  g.fillRect(0, 0, S, 28);
  g.fillStyle = '#4a3a33';
  let size = 40;
  let lines;
  do {
    g.font = `${size}px 'Patrick Hand', 'Comic Sans MS', cursive`;
    lines = wrapText(g, text, S - 36, 5);
    size -= 3;
  } while (lines.length * size * 1.1 > S - 60 && size > 20);
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  const lh = size * 1.12;
  const y0 = S / 2 + 10 - ((lines.length - 1) * lh) / 2;
  lines.forEach((l, i) => g.fillText(l, S / 2, y0 + i * lh));
  return canvasTexture(c);
}

export function gradientCanvasTexture(stops, w = 4, h = 256) {
  const c = makeCanvas(w, h);
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, h);
  stops.forEach((s, i) => grd.addColorStop(i / (stops.length - 1), s));
  g.fillStyle = grd;
  g.fillRect(0, 0, w, h);
  return canvasTexture(c);
}

export { shade, mix, clamp, lerp };

/** Exterior clapboard siding (muted), with a stone band at the bottom. */
export function sidingTexture({ base = '#efe0cc', stone = '#c9b9a8', unit = 2, height = 3, seed = 2 } = {}) {
  const key = `siding:${base}:${stone}:${unit}:${height}`;
  if (cache.has(key)) return cache.get(key);
  const ppu = 160;
  const W = Math.round(unit * ppu);
  const Hh = Math.round(height * ppu);
  const c = makeCanvas(W, Hh);
  const g = c.getContext('2d');
  const rng = mulberry32(seed);
  g.fillStyle = base;
  g.fillRect(0, 0, W, Hh);
  const board = 0.22 * ppu;
  for (let y = 0; y < Hh; y += board) {
    g.fillStyle = shade(base, (rng() - 0.5) * 0.03);
    g.fillRect(0, y, W, board);
    g.fillStyle = 'rgba(120,90,70,0.16)';
    g.fillRect(0, y + board - 3, W, 3);
    g.fillStyle = 'rgba(255,255,255,0.18)';
    g.fillRect(0, y, W, 2);
  }
  // stone foundation band
  const sb = 0.35 * ppu;
  g.fillStyle = stone;
  g.fillRect(0, Hh - sb, W, sb);
  for (let i = 0; i < 9; i++) {
    g.fillStyle = shade(stone, (rng() - 0.5) * 0.08);
    const x = (i / 9) * W;
    roundRect(g, x + 2, Hh - sb + 4, W / 9 - 4, sb - 8, 8);
    g.fill();
  }
  const t = canvasTexture(c, { repeat: true });
  t.wrapT = THREE.ClampToEdgeWrapping;
  t.repeat.set(1 / unit, 1 / height);
  cache.set(key, t);
  return t;
}
