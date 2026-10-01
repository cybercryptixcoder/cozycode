// Draws a critter's face into a canvas that the body shader samples.
// Faces are 2D (like Animal Crossing) so expressions can be swapped freely:
// blinking, glancing, ^^ happy eyes, spirals, hearts, sparkles, pouts...
import * as THREE from 'three';
import { FACE } from './parts.js';
import { clamp } from '../core/util.js';

const K = FACE.px / FACE.w; // pixels per surface unit
const EYE_INK = '#2a1a15';
const MOUTH_INK = '#3b231d';
const MOUTH_FILL = '#6e2a2c';
const TONGUE = '#ff8796';

export function defaultFaceState() {
  return {
    eyes: 'normal',
    open: 1,
    lookX: 0,
    lookY: 0,
    mouth: 'smile',
    mouthOpen: 0.4,
    blush: 0.3,
    brows: null,
    spin: 0,
    tear: 0,
  };
}

export class FaceRenderer {
  /**
   * @param {object} shape per-critter face proportions (individuality!)
   */
  constructor(shape = {}) {
    this.shape = {
      eyeY: 0.565,
      eyeDX: 0.158,
      eyeSize: 1,
      mouthY: 0.448,
      blushDX: 0.268,
      ...shape,
    };
    this.canvas = document.createElement('canvas');
    this.canvas.width = FACE.px;
    this.canvas.height = FACE.py;
    this.ctx = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = 4;
    this.texture.generateMipmaps = true;
    this.texture.minFilter = THREE.LinearMipmapLinearFilter;
    this._key = '';
    this.state = defaultFaceState();
  }

  // Surface units -> canvas pixels
  X(s) {
    return (s / FACE.w + 0.5) * FACE.px;
  }
  Y(y) {
    return (1 - (y - FACE.y0) / FACE.h) * FACE.py;
  }

  update(state) {
    this.state = state;
    const key = faceKey(state);
    if (key === this._key) return false;
    this._key = key;
    this.draw(this.ctx, state);
    this.texture.needsUpdate = true;
    return true;
  }

  draw(ctx, st) {
    ctx.clearRect(0, 0, FACE.px, FACE.py);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    this.drawBlush(ctx, st);
    for (let i = 0; i < 2; i++) this.drawEye(ctx, st, i);
    this.drawBrows(ctx, st);
    this.drawMouth(ctx, st);
    if (st.tear > 0.05) this.drawTear(ctx, st);
  }

  eyeCenter(st, i) {
    const side = i === 0 ? -1 : 1;
    const sh = this.shape;
    const lx = clamp(st.lookX, -1, 1) * 0.02;
    const ly = clamp(st.lookY, -1, 1) * 0.016;
    return {
      side,
      x: this.X(side * sh.eyeDX + lx),
      y: this.Y(sh.eyeY + ly),
      rx: 0.06 * K * sh.eyeSize,
      ry: 0.081 * K * sh.eyeSize,
    };
  }

  drawEye(ctx, st, i) {
    const e = this.eyeCenter(st, i);
    let mode = st.eyes;
    if (mode === 'wink') mode = i === 1 ? 'happy' : 'normal';
    const open = clamp(st.open, 0, 1);

    // A nearly closed blink turns into a soft closed line.
    if (open < 0.14 && (mode === 'normal' || mode === 'wide' || mode === 'star' || mode === 'sleepy' || mode === 'sad' || mode === 'angry' || mode === 'focus' || mode === 'dot')) {
      mode = 'closed-blink';
    }

    ctx.save();
    switch (mode) {
      case 'happy': {
        ctx.strokeStyle = EYE_INK;
        ctx.lineWidth = 0.016 * K;
        ctx.beginPath();
        ctx.moveTo(e.x - e.rx * 1.05, e.y + e.ry * 0.28);
        ctx.quadraticCurveTo(e.x, e.y - e.ry * 1.05, e.x + e.rx * 1.05, e.y + e.ry * 0.28);
        ctx.stroke();
        break;
      }
      case 'closed':
      case 'closed-blink': {
        ctx.strokeStyle = EYE_INK;
        ctx.lineWidth = 0.014 * K;
        ctx.beginPath();
        const y = e.y + e.ry * 0.15;
        ctx.moveTo(e.x - e.rx * 1.0, y - e.ry * 0.12);
        ctx.quadraticCurveTo(e.x, y + e.ry * 0.62, e.x + e.rx * 1.0, y - e.ry * 0.12);
        ctx.stroke();
        break;
      }
      case 'squint': {
        // > <
        ctx.strokeStyle = EYE_INK;
        ctx.lineWidth = 0.015 * K;
        const d = -e.side; // point toward the nose
        ctx.beginPath();
        ctx.moveTo(e.x - d * e.rx * 0.85, e.y - e.ry * 0.62);
        ctx.lineTo(e.x + d * e.rx * 0.75, e.y);
        ctx.lineTo(e.x - d * e.rx * 0.85, e.y + e.ry * 0.62);
        ctx.stroke();
        break;
      }
      case 'dizzy': {
        ctx.strokeStyle = EYE_INK;
        ctx.lineWidth = 0.011 * K;
        ctx.beginPath();
        const turns = 2.3;
        const steps = 60;
        for (let k = 0; k <= steps; k++) {
          const t = k / steps;
          const a = st.spin * (i === 0 ? 1 : -1) + t * turns * Math.PI * 2;
          const r = t * e.rx * 1.15;
          const x = e.x + Math.cos(a) * r;
          const y = e.y + Math.sin(a) * r * 1.1;
          if (k === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        break;
      }
      case 'heart': {
        const s = e.rx * 1.35 * (0.92 + 0.08 * Math.sin(st.spin * 3));
        heartPath(ctx, e.x, e.y + s * 0.05, s);
        ctx.fillStyle = '#ff5b7c';
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.beginPath();
        ctx.ellipse(e.x - s * 0.38, e.y - s * 0.32, s * 0.16, s * 0.11, -0.6, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      default: {
        // Bean eyes: normal / wide / star / sleepy / sad / angry / focus / dot
        let rx = e.rx;
        let ry = e.ry;
        let hl = 1;
        if (mode === 'wide') {
          rx *= 1.16;
          ry *= 1.16;
          hl = 0.8;
        } else if (mode === 'dot') {
          rx *= 0.48;
          ry *= 0.52;
          hl = 0.0;
        } else if (mode === 'star') {
          rx *= 1.1;
          ry *= 1.1;
        }
        ry *= Math.max(0.12, open);

        // lids: line across the eye defined by heights at inner/outer corners
        let lidIn = null;
        let lidOut = null;
        if (mode === 'sleepy') {
          // heavy, rounded lids sitting low and level
          lidIn = lidOut = 0.12;
          ry *= 0.85;
        } else if (mode === 'sad') {
          lidIn = -0.62;
          lidOut = 0.12;
        } else if (mode === 'angry') {
          lidIn = 0.15;
          lidOut = -0.5;
        } else if (mode === 'focus') {
          lidIn = lidOut = -0.45;
        }

        ctx.beginPath();
        ctx.ellipse(e.x, e.y, rx, ry, 0, 0, Math.PI * 2);
        if (lidIn !== null) {
          ctx.save();
          ctx.clip();
          // clip region: below lid line
          const xi = e.x - e.side * rx * 1.3; // inner corner x (toward nose)
          const xo = e.x + e.side * rx * 1.3;
          const yi = e.y + lidIn * ry;
          const yo = e.y + lidOut * ry;
          const bulge = mode === 'angry' ? -0.05 : mode === 'sleepy' ? 0.42 : 0.16;
          const mx = (xi + xo) / 2;
          const my = (yi + yo) / 2 + bulge * ry;
          ctx.beginPath();
          ctx.moveTo(xi, yi);
          ctx.quadraticCurveTo(mx, my, xo, yo);
          ctx.lineTo(xo, e.y + ry * 2);
          ctx.lineTo(xi, e.y + ry * 2);
          ctx.closePath();
          ctx.clip();
          this.fillEyeBall(ctx, e.x, e.y, rx, ry, hl, mode, st);
          ctx.restore();
          // lid line
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(e.x, e.y, rx + 4, ry + 4, 0, 0, Math.PI * 2);
          ctx.clip();
          ctx.strokeStyle = EYE_INK;
          ctx.lineWidth = 0.009 * K;
          ctx.beginPath();
          ctx.moveTo(xi, yi);
          ctx.quadraticCurveTo(mx, my, xo, yo);
          ctx.stroke();
          ctx.restore();
        } else {
          this.fillEyeBall(ctx, e.x, e.y, rx, ry, hl, mode, st);
        }
      }
    }
    ctx.restore();
  }

  fillEyeBall(ctx, x, y, rx, ry, hl, mode, st) {
    const grd = ctx.createRadialGradient(x, y - ry * 0.25, ry * 0.1, x, y, Math.max(rx, ry) * 1.05);
    grd.addColorStop(0, '#3f2a22');
    grd.addColorStop(0.75, '#24150f');
    grd.addColorStop(1, '#1b0f0b');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();

    // warm glow at the bottom of the eye — reads as "jelly" depth
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.clip();
    const g2 = ctx.createRadialGradient(x, y + ry * 0.95, 1, x, y + ry * 0.95, rx * 1.1);
    g2.addColorStop(0, 'rgba(150,95,70,0.75)');
    g2.addColorStop(1, 'rgba(150,95,70,0)');
    ctx.fillStyle = g2;
    ctx.fillRect(x - rx, y, rx * 2, ry);
    ctx.restore();

    if (hl <= 0) return;
    const lx = clamp(st.lookX, -1, 1);
    const ly = clamp(st.lookY, -1, 1);
    ctx.fillStyle = '#ffffff';
    if (mode === 'star') {
      starPath(ctx, x + rx * 0.3 - lx * 2, y - ry * 0.32 + ly * 2, rx * 0.55, 0.32);
      ctx.fill();
      starPath(ctx, x - rx * 0.36, y + ry * 0.42, rx * 0.26, 0.4);
      ctx.fill();
    } else {
      const big = rx * 0.36 * hl;
      ctx.beginPath();
      ctx.ellipse(x + rx * 0.3 - lx * 2, y - ry * 0.36 + ly * 2, big, Math.min(big * 1.05, ry * 0.5), 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x - rx * 0.34, y + ry * 0.44, rx * 0.14 * hl, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  drawBlush(ctx, st) {
    const sh = this.shape;
    const b = clamp(st.blush, 0, 1.2);
    if (b <= 0.01) return;
    for (const side of [-1, 1]) {
      const x = this.X(side * sh.blushDX);
      const y = this.Y(sh.eyeY - 0.098);
      const rx = 0.072 * K;
      const ry = 0.043 * K;
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, ry / rx);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
      const a = 0.2 + 0.5 * Math.min(1, b);
      g.addColorStop(0, `rgba(255,112,138,${a})`);
      g.addColorStop(0.55, `rgba(255,120,145,${a * 0.75})`);
      g.addColorStop(1, 'rgba(255,130,150,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      if (b > 0.6) {
        ctx.strokeStyle = `rgba(226,84,110,${clamp((b - 0.6) * 2.2, 0, 0.85)})`;
        ctx.lineWidth = 0.0065 * K;
        for (let k = -1; k <= 1; k++) {
          const cx = x + k * rx * 0.36;
          ctx.beginPath();
          ctx.moveTo(cx + rx * 0.1, y - ry * 0.35);
          ctx.lineTo(cx - rx * 0.1, y + ry * 0.35);
          ctx.stroke();
        }
      }
    }
  }

  drawBrows(ctx, st) {
    if (!st.brows) return;
    const sh = this.shape;
    ctx.strokeStyle = EYE_INK;
    ctx.lineWidth = 0.012 * K;
    for (let i = 0; i < 2; i++) {
      const side = i === 0 ? -1 : 1;
      const cx = this.X(side * sh.eyeDX);
      const by = sh.eyeY + 0.105 * sh.eyeSize;
      const w = 0.045 * K;
      let inner = 0;
      let outer = 0;
      if (st.brows === 'worried') {
        inner = 0.022;
        outer = -0.008;
      } else if (st.brows === 'angry') {
        inner = -0.018;
        outer = 0.016;
      } else if (st.brows === 'raised') {
        inner = outer = 0.028;
      }
      const xi = cx - side * w;
      const xo = cx + side * w;
      ctx.beginPath();
      ctx.moveTo(xi, this.Y(by + inner));
      ctx.quadraticCurveTo(cx, this.Y(by + (inner + outer) / 2 + 0.012), xo, this.Y(by + outer));
      ctx.stroke();
    }
  }

  drawMouth(ctx, st) {
    const sh = this.shape;
    const x = this.X(0);
    const y = this.Y(sh.mouthY);
    const open = clamp(st.mouthOpen, 0, 1);
    let mode = st.mouth;
    if (mode === 'talk') mode = open < 0.18 ? 'smile' : 'open';
    ctx.strokeStyle = MOUTH_INK;
    ctx.fillStyle = MOUTH_FILL;
    ctx.lineWidth = 0.0105 * K;
    switch (mode) {
      case 'cat': {
        const w = 0.042 * K;
        const h = 0.02 * K;
        ctx.beginPath();
        ctx.moveTo(x - w, y - h * 0.1);
        ctx.quadraticCurveTo(x - w * 0.5, y + h * 1.25, x, y);
        ctx.quadraticCurveTo(x + w * 0.5, y + h * 1.25, x + w, y - h * 0.1);
        ctx.stroke();
        break;
      }
      case 'o': {
        ctx.beginPath();
        ctx.ellipse(x, y + 4, 0.016 * K * (0.8 + 0.4 * open), 0.02 * K * (0.65 + 0.7 * open), 0, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'pout': {
        ctx.beginPath();
        ctx.ellipse(x, y + 4, 0.011 * K, 0.009 * K, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'open':
      case 'grin': {
        const w = (mode === 'grin' ? 0.052 : 0.04) * K;
        const h = 0.034 * K * (0.45 + 0.75 * open);
        ctx.beginPath();
        ctx.moveTo(x - w, y - 2);
        ctx.quadraticCurveTo(x, y + 2, x + w, y - 2);
        ctx.quadraticCurveTo(x + w * 0.95, y + h * 1.6, x, y + h * 1.55);
        ctx.quadraticCurveTo(x - w * 0.95, y + h * 1.6, x - w, y - 2);
        ctx.closePath();
        ctx.fill();
        ctx.save();
        ctx.clip();
        ctx.fillStyle = TONGUE;
        ctx.beginPath();
        ctx.ellipse(x, y + h * 1.55, w * 0.62, h * 0.75, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        break;
      }
      case 'yawn': {
        const rx = 0.03 * K * (0.7 + 0.3 * open);
        const ry = 0.05 * K * (0.3 + 0.7 * open);
        ctx.beginPath();
        ctx.ellipse(x, y + ry * 0.6, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.save();
        ctx.clip();
        ctx.fillStyle = TONGUE;
        ctx.beginPath();
        ctx.ellipse(x, y + ry * 1.45, rx * 0.8, ry * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        break;
      }
      case 'flat': {
        const w = 0.024 * K;
        ctx.beginPath();
        ctx.moveTo(x - w, y + 3);
        ctx.lineTo(x + w, y + 3);
        ctx.stroke();
        break;
      }
      case 'wobble': {
        const w = 0.045 * K;
        ctx.beginPath();
        for (let k = 0; k <= 24; k++) {
          const t = k / 24;
          const px = x - w + t * w * 2;
          const py = y + 4 + Math.sin(t * Math.PI * 5) * 0.0065 * K;
          if (k === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        break;
      }
      case 'frown': {
        const w = 0.03 * K;
        const h = 0.018 * K;
        ctx.beginPath();
        ctx.moveTo(x - w, y + h);
        ctx.quadraticCurveTo(x, y - h * 0.7, x + w, y + h);
        ctx.stroke();
        break;
      }
      case 'tongue': {
        const w = 0.034 * K;
        const h = 0.022 * K;
        ctx.fillStyle = TONGUE;
        ctx.beginPath();
        ctx.ellipse(x + w * 0.28, y + h * 0.85, 0.013 * K, 0.017 * K, 0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 0.006 * K;
        ctx.strokeStyle = '#d65c6f';
        ctx.stroke();
        ctx.strokeStyle = MOUTH_INK;
        ctx.lineWidth = 0.0105 * K;
        ctx.beginPath();
        ctx.moveTo(x - w, y);
        ctx.quadraticCurveTo(x, y + h * 1.1, x + w, y);
        ctx.stroke();
        break;
      }
      case 'none':
        break;
      case 'smile':
      default: {
        const w = 0.03 * K;
        const h = 0.022 * K;
        ctx.beginPath();
        ctx.moveTo(x - w, y);
        ctx.quadraticCurveTo(x, y + h * 1.25, x + w, y);
        ctx.stroke();
      }
    }
  }

  drawTear(ctx, st) {
    const e = this.eyeCenter(st, 1);
    const a = clamp(st.tear, 0, 1);
    const x = e.x + e.rx * 0.7;
    const y = e.y + e.ry * 1.1;
    ctx.fillStyle = `rgba(120,190,255,${0.9 * a})`;
    ctx.beginPath();
    ctx.moveTo(x, y - 14);
    ctx.quadraticCurveTo(x + 11, y + 2, x, y + 8);
    ctx.quadraticCurveTo(x - 11, y + 2, x, y - 14);
    ctx.fill();
  }

  /** Paint a round portrait (used by the HUD roster and cards). */
  drawPortrait(canvas, bodyColor, state = this.state) {
    const g = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    g.clearRect(0, 0, w, h);
    const col = new THREE.Color(bodyColor);
    const light = col.clone().offsetHSL(0, -0.02, 0.08).getStyle();
    const dark = col.clone().offsetHSL(0, 0.02, -0.08).getStyle();
    const grd = g.createLinearGradient(0, 0, 0, h);
    grd.addColorStop(0, light);
    grd.addColorStop(1, dark);
    g.fillStyle = grd;
    g.beginPath();
    g.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2);
    g.fill();
    // face, cropped around eyes/mouth
    const tmp = document.createElement('canvas');
    tmp.width = FACE.px;
    tmp.height = FACE.py;
    this.draw(tmp.getContext('2d'), state);
    const cropW = FACE.px * 0.62;
    const cropH = cropW;
    const cx = FACE.px / 2;
    const cy = this.Y(this.shape.eyeY - 0.045);
    g.drawImage(tmp, cx - cropW / 2, cy - cropH / 2, cropW, cropH, 0, 0, w, h);
  }
}

function faceKey(s) {
  return [
    s.eyes,
    Math.round(clamp(s.open) * 24),
    Math.round(s.lookX * 12),
    Math.round(s.lookY * 12),
    s.mouth,
    Math.round(clamp(s.mouthOpen) * 12),
    Math.round(clamp(s.blush, 0, 1.2) * 20),
    s.brows || '',
    s.eyes === 'dizzy' || s.eyes === 'heart' ? Math.round(s.spin * 8) : 0,
    Math.round(s.tear * 6),
  ].join('|');
}

function heartPath(ctx, x, y, s) {
  ctx.beginPath();
  ctx.moveTo(x, y + s * 0.85);
  ctx.bezierCurveTo(x - s * 1.25, y + s * 0.05, x - s * 0.95, y - s * 0.95, x, y - s * 0.38);
  ctx.bezierCurveTo(x + s * 0.95, y - s * 0.95, x + s * 1.25, y + s * 0.05, x, y + s * 0.85);
  ctx.closePath();
}

export function starPath(ctx, x, y, r, inner = 0.38) {
  ctx.beginPath();
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2 - Math.PI / 2;
    const rr = k % 2 === 0 ? r : r * inner;
    const px = x + Math.cos(a) * rr;
    const py = y + Math.sin(a) * rr;
    if (k === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}
