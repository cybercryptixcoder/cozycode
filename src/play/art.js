// Little flat drawings for cards, notes and letters: one per motif, tinted
// by a hue so every idea has its own picture.
import { TAU } from '../core/util.js';

const hsl = (h, s, l, a = 1) => `hsla(${h},${s}%,${l}%,${a})`;

/** Draw `motif` centred at (0,0) within a box of radius r. */
export function drawMotif(g, motif, r, hue = 20, opts = {}) {
  const main = hsl(hue, 70, 62);
  const dark = hsl(hue, 45, 38);
  const light = hsl(hue, 80, 82);
  const ink = '#4e3a30';
  g.save();
  g.lineJoin = 'round';
  g.lineCap = 'round';
  g.lineWidth = r * 0.07;
  g.strokeStyle = ink;
  const blob = (x, y, rx, ry, fill) => {
    g.beginPath();
    g.ellipse(x, y, rx, ry, 0, 0, TAU);
    g.fillStyle = fill;
    g.fill();
    g.stroke();
  };
  const rr = (x, y, w, h, rad, fill) => {
    g.beginPath();
    g.roundRect(x, y, w, h, rad);
    g.fillStyle = fill;
    g.fill();
    g.stroke();
  };
  const eyes = (y, s = 1) => {
    g.fillStyle = ink;
    for (const sx of [-1, 1]) {
      g.beginPath();
      g.arc(sx * r * 0.16 * s, y, r * 0.06 * s, 0, TAU);
      g.fill();
    }
  };
  switch (motif) {
    case 'plant': {
      rr(-r * 0.38, r * 0.15, r * 0.76, r * 0.6, r * 0.12, hsl(hue, 55, 58));
      g.fillStyle = '#7cc46a';
      for (const [a, s] of [
        [-0.7, 1],
        [0, 1.2],
        [0.7, 1],
      ]) {
        g.save();
        g.translate(0, r * 0.15);
        g.rotate(a);
        g.beginPath();
        g.ellipse(0, -r * 0.42 * s, r * 0.18, r * 0.38 * s, 0, 0, TAU);
        g.fillStyle = a === 0 ? '#86d06f' : '#6db85c';
        g.fill();
        g.stroke();
        g.restore();
      }
      eyes(r * 0.42, 0.8);
      break;
    }
    case 'robot':
      g.beginPath();
      g.moveTo(0, -r * 0.55);
      g.lineTo(0, -r * 0.8);
      g.stroke();
      blob(0, -r * 0.85, r * 0.09, r * 0.09, '#ffd36b');
      rr(-r * 0.5, -r * 0.55, r, r * 0.75, r * 0.2, main);
      rr(-r * 0.36, -r * 0.4, r * 0.72, r * 0.42, r * 0.12, light);
      eyes(-r * 0.2);
      rr(-r * 0.32, r * 0.25, r * 0.64, r * 0.45, r * 0.12, dark);
      break;
    case 'map':
      g.beginPath();
      g.moveTo(-r * 0.7, -r * 0.5);
      g.lineTo(-r * 0.23, -r * 0.65);
      g.lineTo(r * 0.23, -r * 0.5);
      g.lineTo(r * 0.7, -r * 0.65);
      g.lineTo(r * 0.7, r * 0.55);
      g.lineTo(r * 0.23, r * 0.7);
      g.lineTo(-r * 0.23, r * 0.55);
      g.lineTo(-r * 0.7, r * 0.7);
      g.closePath();
      g.fillStyle = '#f6ecd5';
      g.fill();
      g.stroke();
      g.setLineDash([r * 0.08, r * 0.08]);
      g.strokeStyle = main;
      g.beginPath();
      g.moveTo(-r * 0.5, r * 0.4);
      g.bezierCurveTo(-r * 0.2, -r * 0.1, r * 0.1, r * 0.4, r * 0.35, -r * 0.25);
      g.stroke();
      g.setLineDash([]);
      g.strokeStyle = ink;
      g.fillStyle = hsl(hue, 80, 55);
      g.beginPath();
      g.arc(r * 0.38, -r * 0.3, r * 0.1, 0, TAU);
      g.fill();
      break;
    case 'star': {
      g.beginPath();
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * TAU - Math.PI / 2;
        const k = i % 2 ? 0.42 : 0.85;
        g.lineTo(Math.cos(a) * r * k, Math.sin(a) * r * k);
      }
      g.closePath();
      g.fillStyle = hsl(48, 95, 66);
      g.fill();
      g.stroke();
      eyes(-r * 0.02, 0.8);
      break;
    }
    case 'cloud':
      g.fillStyle = '#fbfdff';
      g.beginPath();
      g.arc(-r * 0.35, r * 0.1, r * 0.3, 0, TAU);
      g.arc(0, -r * 0.12, r * 0.4, 0, TAU);
      g.arc(r * 0.38, r * 0.1, r * 0.3, 0, TAU);
      g.fill();
      g.beginPath();
      g.arc(-r * 0.35, r * 0.1, r * 0.3, Math.PI * 0.6, Math.PI * 1.6);
      g.arc(0, -r * 0.12, r * 0.4, Math.PI * 1.1, Math.PI * 1.95);
      g.arc(r * 0.38, r * 0.1, r * 0.3, Math.PI * 1.45, Math.PI * 0.45);
      g.stroke();
      g.beginPath();
      g.moveTo(-r * 0.62, r * 0.38);
      g.lineTo(r * 0.66, r * 0.38);
      g.stroke();
      eyes(r * 0.05, 0.8);
      for (let i = 0; i < 3; i++) blob(-r * 0.3 + i * r * 0.3, r * 0.65, r * 0.04, r * 0.07, hsl(hue, 70, 70));
      break;
    case 'book':
      rr(-r * 0.6, -r * 0.5, r * 1.2, r, r * 0.08, main);
      g.beginPath();
      g.moveTo(0, -r * 0.5);
      g.lineTo(0, r * 0.5);
      g.stroke();
      g.strokeStyle = light;
      for (let i = 0; i < 3; i++) {
        g.beginPath();
        g.moveTo(-r * 0.45, -r * 0.25 + i * r * 0.2);
        g.lineTo(-r * 0.12, -r * 0.25 + i * r * 0.2);
        g.moveTo(r * 0.12, -r * 0.25 + i * r * 0.2);
        g.lineTo(r * 0.45, -r * 0.25 + i * r * 0.2);
        g.stroke();
      }
      break;
    case 'envelope':
      rr(-r * 0.7, -r * 0.45, r * 1.4, r * 0.9, r * 0.06, '#fdf3e2');
      g.beginPath();
      g.moveTo(-r * 0.7, -r * 0.45);
      g.lineTo(0, r * 0.1);
      g.lineTo(r * 0.7, -r * 0.45);
      g.stroke();
      blob(0, r * 0.08, r * 0.13, r * 0.13, hsl(hue, 70, 55));
      break;
    case 'gear': {
      g.beginPath();
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * TAU;
        const k = i % 2 ? 0.62 : 0.8;
        g.lineTo(Math.cos(a) * r * k, Math.sin(a) * r * k);
      }
      g.closePath();
      g.fillStyle = hsl(hue, 25, 70);
      g.fill();
      g.stroke();
      blob(0, 0, r * 0.22, r * 0.22, light);
      break;
    }
    case 'lamp':
      g.beginPath();
      g.moveTo(-r * 0.25, -r * 0.6);
      g.lineTo(r * 0.25, -r * 0.6);
      g.lineTo(r * 0.5, -r * 0.1);
      g.lineTo(-r * 0.5, -r * 0.1);
      g.closePath();
      g.fillStyle = hsl(hue, 70, 75);
      g.fill();
      g.stroke();
      g.beginPath();
      g.moveTo(0, -r * 0.1);
      g.lineTo(0, r * 0.5);
      g.stroke();
      rr(-r * 0.3, r * 0.5, r * 0.6, r * 0.14, r * 0.06, dark);
      g.fillStyle = 'rgba(255,220,120,0.5)';
      g.beginPath();
      g.moveTo(-r * 0.5, -r * 0.1);
      g.lineTo(-r * 0.75, r * 0.4);
      g.lineTo(r * 0.75, r * 0.4);
      g.lineTo(r * 0.5, -r * 0.1);
      g.fill();
      break;
    case 'note':
      g.fillStyle = main;
      g.beginPath();
      g.moveTo(-r * 0.25, r * 0.45);
      g.lineTo(-r * 0.25, -r * 0.5);
      g.lineTo(r * 0.45, -r * 0.65);
      g.lineTo(r * 0.45, r * 0.3);
      g.stroke();
      blob(-r * 0.42, r * 0.45, r * 0.2, r * 0.15, main);
      blob(r * 0.28, r * 0.3, r * 0.2, r * 0.15, main);
      break;
    case 'cup':
      rr(-r * 0.45, -r * 0.3, r * 0.8, r * 0.75, r * 0.18, main);
      g.beginPath();
      g.arc(r * 0.42, r * 0.05, r * 0.18, -Math.PI / 2, Math.PI / 2);
      g.stroke();
      g.strokeStyle = 'rgba(120,100,90,0.5)';
      for (const x of [-0.2, 0.05]) {
        g.beginPath();
        g.moveTo(x * r, -r * 0.4);
        g.bezierCurveTo((x - 0.1) * r, -r * 0.55, (x + 0.1) * r, -r * 0.65, x * r, -r * 0.8);
        g.stroke();
      }
      eyes(r * 0.05, 0.7);
      break;
    case 'clock':
      blob(0, 0, r * 0.6, r * 0.6, light);
      g.beginPath();
      g.moveTo(0, 0);
      g.lineTo(0, -r * 0.4);
      g.moveTo(0, 0);
      g.lineTo(r * 0.28, r * 0.1);
      g.stroke();
      for (const s of [-1, 1]) blob(s * r * 0.45, -r * 0.6, r * 0.14, r * 0.14, main);
      break;
    case 'leaf':
      g.beginPath();
      g.moveTo(-r * 0.55, r * 0.55);
      g.bezierCurveTo(-r * 0.6, -r * 0.4, r * 0.2, -r * 0.7, r * 0.6, -r * 0.6);
      g.bezierCurveTo(r * 0.6, r * 0.1, r * 0.1, r * 0.6, -r * 0.55, r * 0.55);
      g.fillStyle = '#86c96d';
      g.fill();
      g.stroke();
      g.beginPath();
      g.moveTo(-r * 0.5, r * 0.5);
      g.lineTo(r * 0.4, -r * 0.4);
      g.stroke();
      break;
    case 'house':
      rr(-r * 0.5, -r * 0.1, r, r * 0.65, r * 0.06, '#f6ead8');
      g.beginPath();
      g.moveTo(-r * 0.65, -r * 0.05);
      g.lineTo(0, -r * 0.65);
      g.lineTo(r * 0.65, -r * 0.05);
      g.closePath();
      g.fillStyle = main;
      g.fill();
      g.stroke();
      rr(-r * 0.12, r * 0.18, r * 0.24, r * 0.37, r * 0.05, dark);
      break;
    case 'kite':
      g.beginPath();
      g.moveTo(0, -r * 0.7);
      g.lineTo(r * 0.45, -r * 0.1);
      g.lineTo(0, r * 0.4);
      g.lineTo(-r * 0.45, -r * 0.1);
      g.closePath();
      g.fillStyle = main;
      g.fill();
      g.stroke();
      g.beginPath();
      g.moveTo(0, r * 0.4);
      g.bezierCurveTo(r * 0.2, r * 0.55, -r * 0.2, r * 0.65, r * 0.1, r * 0.85);
      g.stroke();
      break;
    case 'shell': {
      g.beginPath();
      for (let i = 0; i < 60; i++) {
        const a = i * 0.22;
        const k = 0.08 + i * 0.011;
        g.lineTo(Math.cos(a) * r * k, Math.sin(a) * r * k);
      }
      g.fillStyle = hsl(hue, 60, 80);
      g.fill();
      g.stroke();
      break;
    }
    case 'key':
      blob(-r * 0.35, 0, r * 0.25, r * 0.25, hsl(45, 80, 62));
      blob(-r * 0.35, 0, r * 0.08, r * 0.08, '#fff6e0');
      g.beginPath();
      g.moveTo(-r * 0.1, 0);
      g.lineTo(r * 0.65, 0);
      g.moveTo(r * 0.45, 0);
      g.lineTo(r * 0.45, r * 0.18);
      g.moveTo(r * 0.6, 0);
      g.lineTo(r * 0.6, r * 0.14);
      g.stroke();
      break;
    case 'radio':
      rr(-r * 0.6, -r * 0.3, r * 1.2, r * 0.75, r * 0.15, main);
      blob(-r * 0.25, r * 0.08, r * 0.2, r * 0.2, light);
      rr(r * 0.1, -r * 0.12, r * 0.35, r * 0.15, r * 0.04, '#fff6e0');
      g.beginPath();
      g.moveTo(r * 0.3, -r * 0.3);
      g.lineTo(r * 0.55, -r * 0.75);
      g.stroke();
      break;
    default:
      blob(0, 0, r * 0.5, r * 0.5, main);
  }
  if (opts.sparkle) {
    g.fillStyle = 'rgba(255,240,170,0.95)';
    for (const [x, y, s] of [
      [-0.75, -0.7, 0.12],
      [0.8, -0.5, 0.09],
      [0.7, 0.7, 0.1],
    ]) {
      g.beginPath();
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * TAU;
        const k = i % 2 ? 0.35 : 1;
        g.lineTo(x * r + Math.cos(a) * s * r * k, y * r + Math.sin(a) * s * r * k);
      }
      g.fill();
    }
  }
  g.restore();
}

/** A full card face (image + one line), used by the 3D card in hand and notes. */
export function drawCardFace(c, t, { glow = false } = {}) {
  const g = c.getContext('2d');
  const W = c.width;
  const H = c.height;
  g.clearRect(0, 0, W, H);
  g.fillStyle = glow ? '#fff6d8' : '#fffaf2';
  g.beginPath();
  g.roundRect(0, 0, W, H, W * 0.07);
  g.fill();
  const hue = t.hue ?? 20;
  g.fillStyle = hsl(hue, 60, 90);
  g.beginPath();
  g.roundRect(W * 0.07, W * 0.07, W * 0.86, H * 0.55, W * 0.05);
  g.fill();
  g.save();
  g.translate(W / 2, W * 0.07 + H * 0.275);
  drawMotif(g, t.motif, Math.min(W, H) * 0.22, hue, { sparkle: glow || t.quality === 'delight' });
  g.restore();
  g.fillStyle = '#4e3a30';
  g.font = `${Math.round(W * 0.075)}px 'Patrick Hand', cursive`;
  g.textAlign = 'center';
  const words = (t.line || '').split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const test = cur ? `${cur} ${w}` : w;
    if (g.measureText(test).width > W * 0.84 && cur) {
      lines.push(cur);
      cur = w;
    } else cur = test;
  }
  if (cur) lines.push(cur);
  lines.slice(0, 3).forEach((l, i) => g.fillText(i === 2 && lines.length > 3 ? `${l}…` : l, W / 2, H * 0.72 + i * W * 0.085));
}

export { hsl };
