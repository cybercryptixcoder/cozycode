// Sticker-style icons drawn on canvases: used for emote particles and UI.
import { starPath } from '../critters/face.js';

const S = 128;
const cache = new Map();

function canvas() {
  const c = document.createElement('canvas');
  c.width = c.height = S;
  return c;
}

function outlined(g, pathFn, fill, outline = '#fffaf2', ow = 14) {
  g.lineJoin = 'round';
  g.lineCap = 'round';
  pathFn();
  g.strokeStyle = outline;
  g.lineWidth = ow;
  g.stroke();
  pathFn();
  g.fillStyle = fill;
  g.fill();
}

function heart(g, x, y, s) {
  g.beginPath();
  g.moveTo(x, y + s * 0.85);
  g.bezierCurveTo(x - s * 1.25, y + s * 0.05, x - s * 0.95, y - s * 0.95, x, y - s * 0.38);
  g.bezierCurveTo(x + s * 0.95, y - s * 0.95, x + s * 1.25, y + s * 0.05, x, y + s * 0.85);
  g.closePath();
}

function glyph(g, text, color, size = 92, font = 'Fredoka, "Trebuchet MS", sans-serif') {
  g.font = `700 ${size}px ${font}`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.lineJoin = 'round';
  g.strokeStyle = '#fffaf2';
  g.lineWidth = 16;
  g.strokeText(text, S / 2, S / 2 + 4);
  g.fillStyle = color;
  g.fillText(text, S / 2, S / 2 + 4);
}

const DRAW = {
  heart(g) {
    outlined(g, () => heart(g, 64, 64, 40), '#ff6b8b');
    g.fillStyle = 'rgba(255,255,255,0.75)';
    g.beginPath();
    g.ellipse(48, 48, 9, 6, -0.6, 0, Math.PI * 2);
    g.fill();
  },
  sparkle(g) {
    outlined(g, () => starPath(g, 64, 64, 50, 0.3), '#ffe27a', '#fffaf2', 10);
    g.fillStyle = '#fff6c9';
    starPath(g, 64, 64, 22, 0.3);
    g.fill();
  },
  star(g) {
    outlined(
      g,
      () => {
        g.beginPath();
        for (let k = 0; k < 10; k++) {
          const a = (k / 10) * Math.PI * 2 - Math.PI / 2;
          const r = k % 2 === 0 ? 46 : 21;
          const x = 64 + Math.cos(a) * r;
          const y = 66 + Math.sin(a) * r;
          if (k === 0) g.moveTo(x, y);
          else g.lineTo(x, y);
        }
        g.closePath();
      },
      '#ffd24d',
      '#fffaf2',
      12
    );
  },
  zzz(g) {
    glyph(g, 'z', '#8fa6e8', 96);
  },
  note(g) {
    g.lineCap = 'round';
    const draw = (stroke, fill, extra) => {
      g.strokeStyle = stroke;
      g.fillStyle = stroke;
      g.lineWidth = 10 + extra;
      g.beginPath();
      g.ellipse(44, 92, 18 + extra / 2, 13 + extra / 2, -0.4, 0, Math.PI * 2);
      g.fill();
      g.beginPath();
      g.moveTo(60, 88);
      g.lineTo(60, 26);
      g.quadraticCurveTo(80, 34, 92, 52);
      g.stroke();
    };
    draw('#fffaf2', '#fffaf2', 12);
    draw('#7a5cc9', '#7a5cc9', 0);
  },
  dust(g) {
    const grd = g.createRadialGradient(64, 64, 4, 64, 64, 60);
    grd.addColorStop(0, 'rgba(255,248,236,0.95)');
    grd.addColorStop(0.55, 'rgba(244,232,214,0.75)');
    grd.addColorStop(1, 'rgba(244,232,214,0)');
    g.fillStyle = grd;
    g.beginPath();
    g.arc(64, 64, 60, 0, Math.PI * 2);
    g.fill();
  },
  ring(g) {
    g.strokeStyle = '#fffaf2';
    g.lineWidth = 9;
    g.beginPath();
    g.arc(64, 64, 48, 0, Math.PI * 2);
    g.stroke();
    g.strokeStyle = '#ffd36b';
    g.lineWidth = 4;
    g.stroke();
  },
  question(g) {
    glyph(g, '?', '#e98b4a', 100);
  },
  exclaim(g) {
    glyph(g, '!', '#ee5b5b', 104);
  },
  sweat(g) {
    outlined(
      g,
      () => {
        g.beginPath();
        g.moveTo(64, 14);
        g.bezierCurveTo(90, 52, 98, 72, 90, 88);
        g.bezierCurveTo(80, 112, 48, 112, 38, 88);
        g.bezierCurveTo(30, 72, 38, 52, 64, 14);
        g.closePath();
      },
      '#8cd1ff'
    );
    g.fillStyle = 'rgba(255,255,255,0.8)';
    g.beginPath();
    g.ellipse(52, 80, 6, 11, 0.3, 0, Math.PI * 2);
    g.fill();
  },
  drop(g) {
    g.fillStyle = '#7cc6f5';
    g.beginPath();
    g.moveTo(64, 20);
    g.bezierCurveTo(86, 56, 92, 72, 84, 88);
    g.bezierCurveTo(74, 106, 54, 106, 44, 88);
    g.bezierCurveTo(36, 72, 42, 56, 64, 20);
    g.fill();
  },
  anger(g) {
    g.strokeStyle = '#fffaf2';
    g.lineCap = 'round';
    const arcs = (col, w) => {
      g.strokeStyle = col;
      g.lineWidth = w;
      for (let k = 0; k < 4; k++) {
        g.save();
        g.translate(64, 64);
        g.rotate((k * Math.PI) / 2);
        g.beginPath();
        g.moveTo(10, -34);
        g.quadraticCurveTo(12, -12, 34, -10);
        g.stroke();
        g.restore();
      }
    };
    arcs('#fffaf2', 24);
    arcs('#ef4f5f', 11);
  },
  bulb(g) {
    // glow
    const grd = g.createRadialGradient(64, 54, 8, 64, 54, 62);
    grd.addColorStop(0, 'rgba(255,240,150,0.9)');
    grd.addColorStop(1, 'rgba(255,240,150,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, S, S);
    outlined(
      g,
      () => {
        g.beginPath();
        g.arc(64, 52, 30, Math.PI * 0.8, Math.PI * 2.2);
        g.lineTo(78, 86);
        g.lineTo(50, 86);
        g.closePath();
      },
      '#ffe066'
    );
    g.fillStyle = '#b9a58a';
    g.strokeStyle = '#fffaf2';
    g.lineWidth = 8;
    g.beginPath();
    g.roundRect(49, 88, 30, 18, 5);
    g.stroke();
    g.fill();
    g.fillStyle = 'rgba(255,255,255,0.85)';
    g.beginPath();
    g.ellipse(54, 42, 6, 10, 0.5, 0, Math.PI * 2);
    g.fill();
  },
  dots(g) {
    outlined(
      g,
      () => {
        g.beginPath();
        g.roundRect(10, 30, 108, 60, 30);
      },
      '#fffdf8',
      '#e8dccb',
      6
    );
    g.fillStyle = '#9a8676';
    for (let k = 0; k < 3; k++) {
      g.beginPath();
      g.arc(38 + k * 26, 60, 8, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = '#fffdf8';
    g.beginPath();
    g.arc(28, 102, 9, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.arc(16, 118, 5, 0, Math.PI * 2);
    g.fill();
  },
  spark(g) {
    const grd = g.createRadialGradient(64, 64, 2, 64, 64, 50);
    grd.addColorStop(0, 'rgba(255,255,230,1)');
    grd.addColorStop(0.3, 'rgba(255,214,110,0.9)');
    grd.addColorStop(1, 'rgba(255,160,60,0)');
    g.fillStyle = grd;
    g.beginPath();
    g.arc(64, 64, 50, 0, Math.PI * 2);
    g.fill();
  },
  confetti(g) {
    g.fillStyle = '#ffffff';
    g.fillRect(40, 26, 48, 76);
  },
  puff(g) {
    const grd = g.createRadialGradient(64, 64, 4, 64, 64, 60);
    grd.addColorStop(0, 'rgba(255,255,255,0.95)');
    grd.addColorStop(0.6, 'rgba(250,250,255,0.6)');
    grd.addColorStop(1, 'rgba(250,250,255,0)');
    g.fillStyle = grd;
    g.beginPath();
    g.arc(64, 64, 60, 0, Math.PI * 2);
    g.fill();
  },
  glow(g) {
    const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.25, 'rgba(255,255,255,0.55)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, S, S);
  },
  letter(g) {
    outlined(
      g,
      () => {
        g.beginPath();
        g.roundRect(18, 34, 92, 62, 8);
      },
      '#fff3e0',
      '#fffaf2',
      10
    );
    g.strokeStyle = '#e0b48a';
    g.lineWidth = 5;
    g.beginPath();
    g.moveTo(22, 40);
    g.lineTo(64, 70);
    g.lineTo(106, 40);
    g.stroke();
    g.fillStyle = '#ff6b8b';
    heart(g, 64, 72, 9);
    g.fill();
  },
};

export function iconCanvas(name) {
  if (cache.has(name)) return cache.get(name);
  const c = canvas();
  const g = c.getContext('2d');
  (DRAW[name] || DRAW.sparkle)(g);
  cache.set(name, c);
  return c;
}

export function iconDataURL(name) {
  return iconCanvas(name).toDataURL();
}

export const ICON_NAMES = Object.keys(DRAW);
