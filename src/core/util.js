// Small math + animation helpers shared across the project.

export const TAU = Math.PI * 2;

export const clamp = (v, lo = 0, hi = 1) => (v < lo ? lo : v > hi ? hi : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, v) => clamp((v - a) / (b - a));
export const remap = (v, a, b, c, d) => lerp(c, d, invLerp(a, b, v));
export const smoothstep = (a, b, v) => {
  const t = clamp((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
export const smoother = (t) => {
  t = clamp(t);
  return t * t * t * (t * (t * 6 - 15) + 10);
};

/** Frame-rate independent exponential approach. `rate` ~ 1/seconds. */
export const damp = (current, target, rate, dt) => lerp(current, target, 1 - Math.exp(-rate * dt));

export const wrapAngle = (a) => {
  a = (a + Math.PI) % TAU;
  if (a < 0) a += TAU;
  return a - Math.PI;
};
/** Returns `target` shifted by multiples of TAU so it is closest to `current`. */
export const nearestAngle = (current, target) => current + wrapAngle(target - current);
export const dampAngle = (current, target, rate, dt) => damp(current, nearestAngle(current, target), rate, dt);

// Easing ---------------------------------------------------------------
export const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
export const easeOut = (t) => 1 - (1 - t) * (1 - t);
export const easeIn = (t) => t * t;
export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
export const easeInCubic = (t) => t * t * t;
export const easeOutBack = (t, s = 1.70158) => {
  const c3 = s + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2);
};
export const easeOutElastic = (t) => {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1;
};

/** 0 -> 1 -> 0 hump across [a,b]. */
export const bump = (t, a = 0, b = 1) => {
  if (t <= a || t >= b) return 0;
  return Math.sin(((t - a) / (b - a)) * Math.PI);
};
/** Trapezoid envelope: rises a->b, holds, falls c->d (smooth edges). */
export const envelope = (t, a, b, c, d) => {
  if (t <= a || t >= d) return 0;
  if (t < b) return smoother((t - a) / (b - a));
  if (t <= c) return 1;
  return 1 - smoother((t - c) / (d - c));
};

// Springs ---------------------------------------------------------------
/**
 * Damped harmonic spring with frequency (Hz) and damping ratio.
 * Low damping (0.2-0.4) gives the jelly wobble that makes the critters feel soft.
 */
export class Spring {
  constructor(value = 0, freq = 4, damping = 0.5) {
    this.x = value;
    this.v = 0;
    this.target = value;
    this.freq = freq;
    this.damping = damping;
  }
  update(dt) {
    const w = TAU * this.freq;
    const steps = Math.max(1, Math.ceil(dt / (1 / 240)));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) {
      const a = -w * w * (this.x - this.target) - 2 * this.damping * w * this.v;
      this.v += a * h;
      this.x += this.v * h;
    }
    return this.x;
  }
  impulse(v) {
    this.v += v;
  }
  snap(v) {
    this.x = this.target = v;
    this.v = 0;
  }
}

// Random -----------------------------------------------------------------
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const chance = (p) => Math.random() < p;
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const pickWeighted = (entries) => {
  // entries: [[item, weight], ...]
  let total = 0;
  for (const [, w] of entries) total += Math.max(0, w);
  if (total <= 0) return entries.length ? entries[0][0] : undefined;
  let r = Math.random() * total;
  for (const [item, w] of entries) {
    r -= Math.max(0, w);
    if (r <= 0) return item;
  }
  return entries[entries.length - 1][0];
};
export const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/** Smooth 1D value noise, handy for organic idle sway. */
export function noise1(x, seed = 0) {
  const i = Math.floor(x);
  const f = x - i;
  const h = (n) => {
    const s = Math.sin((n + seed * 57.13) * 127.1) * 43758.5453;
    return s - Math.floor(s);
  };
  const u = f * f * (3 - 2 * f);
  return lerp(h(i), h(i + 1), u) * 2 - 1;
}

export const uid = (() => {
  let n = 0;
  return (prefix = 'id') => `${prefix}-${Date.now().toString(36)}-${(n++).toString(36)}`;
})();
