// The sproutling animation library. Every action is procedural: it writes
// offsets into a pose (body tilt, squash, arm swings, feet...) and face
// overrides (eye shape, mouth, blush). The rig's springs then add the jelly.
//
// def fields:
//   slot     'main' (default) or 'upper' (can run while walking)
//   dur      seconds, null for looping actions (stop with critter.stop(name))
//   lockMove true -> the critter stands still while this plays
//   start(c, a) / update(c, a, pose, face, dt) / end(c, a)
import * as THREE from 'three';
import {
  bump,
  clamp,
  easeIn,
  easeInOut,
  easeOutBack,
  envelope,
  smoother,
  rand,
  chance,
  pick,
  TAU,
} from '../core/util.js';

const _v = new THREE.Vector3();

const fx = (c, type, pos, opts) => c.ctx.fx?.(type, pos, opts);
const sfx = (c, name, opts = {}) => c.ctx.sfx?.(name, { critter: c, ...opts });
const head = (c, extra = 0) => c.headPos(new THREE.Vector3(), extra);
const forward = (c) => new THREE.Vector3(Math.sin(c.heading), 0, Math.cos(c.heading));
const cameraPos = (c) => c.ctx.camera?.position;

function faceCamera(c) {
  const cam = cameraPos(c);
  if (cam && !c.walking) c.faceToward(cam);
  if (cam) c.lookAt(cam, 2.5);
}

export const ACTIONS = {
  // ---------------------------------------------------------------- basics
  hop: {
    dur: 0.78,
    update(c, a, p, f) {
      const t = a.t;
      const B = c.bounce;
      if (t < 0.17) {
        const k = smoother(t / 0.17);
        p.sq -= 0.17 * k * B;
        p.armL.z -= 0.15 * k;
        p.armR.z -= 0.15 * k;
      } else if (t < 0.55) {
        const u = (t - 0.17) / 0.38;
        p.y += 4 * u * (1 - u) * 0.34 * B;
        p.armL.z += 1.1 * bump(u);
        p.armR.z += 1.1 * bump(u);
        p.footL.y -= 0.02 * bump(u);
        p.footR.y -= 0.02 * bump(u);
        f.mouth = 'o';
        f.mouthOpen = 0.3;
      } else {
        f.eyes = t < 0.68 ? 'squint' : f.eyes;
      }
      if (a.at(0.17)) {
        c.sq.impulse(1.4 * B);
        sfx(c, 'hop');
      }
      if (a.at(0.55)) {
        c.sq.impulse(-1.6 * B);
        fx(c, 'dust', c.footPos(), { count: 3, size: 0.22 });
        sfx(c, 'land', { strength: 0.6 });
      }
    },
  },

  boop: {
    dur: 1.05,
    lockMove: true,
    start(c) {
      c.sq.impulse(-2.6);
      c.leanX.impulse(-1.5);
      faceCamera(c);
      fx(c, 'pop', head(c, -0.25), { count: 1 });
    },
    update(c, a, p, f) {
      const t = a.t;
      if (t < 0.22) {
        f.eyes = 'squint';
        f.mouth = 'o';
        f.mouthOpen = 0.5;
        p.sq -= 0.08 * a.w;
      } else if (t < 0.5) {
        f.eyes = 'wide';
        f.mouth = 'o';
        f.mouthOpen = 0.7;
        p.y += bump(t, 0.22, 0.5) * 0.13;
        p.armL.z += bump(t, 0.22, 0.5) * 0.9;
        p.armR.z += bump(t, 0.22, 0.5) * 0.9;
      } else {
        f.eyes = 'happy';
        f.mouth = 'open';
        f.mouthOpen = 0.6;
        p.tz += Math.sin(t * 14) * 0.05 * (1 - t / 1.05);
      }
      f.blush += 0.35;
      if (a.at(0.22)) c.sq.impulse(1.8);
      if (a.at(0.5)) {
        c.sq.impulse(-1.4);
        fx(c, 'sparkle', head(c), { count: 3 });
      }
    },
  },

  giggle: {
    dur: 1.5,
    lockMove: true,
    start(c) {
      sfx(c, 'giggle');
      faceCamera(c);
    },
    update(c, a, p, f) {
      const t = a.t;
      const w = a.w;
      p.y += Math.abs(Math.sin(t * 24)) * 0.035 * w;
      p.tz += Math.sin(t * 12) * 0.06 * w;
      p.armR.f += 1.75 * w;
      p.armR.z -= 0.5 * w;
      p.armL.z += 0.3 * w;
      f.eyes = 'happy';
      f.mouth = 'open';
      f.mouthOpen = 0.45 + 0.4 * Math.abs(Math.sin(t * 24));
      f.blush += 0.4;
      if (a.at(0.2) || a.at(0.8)) fx(c, 'sparkle', head(c), { count: 2 });
    },
  },

  dizzy: {
    dur: 3.0,
    lockMove: true,
    start(c) {
      sfx(c, 'dizzy');
      fx(c, 'stars', head(c, 0.05), { critter: c, duration: 2.6 });
    },
    update(c, a, p, f) {
      const t = a.t;
      const w = a.w * (1 - smoother((t - 2.2) / 0.8));
      f.eyes = 'dizzy';
      f.mouth = 'wobble';
      p.tx += Math.sin(t * 6.5) * 0.15 * w;
      p.tz += Math.cos(t * 6.5) * 0.15 * w;
      p.sproutZ += Math.sin(t * 6.5) * 0.35 * w;
      p.sq -= 0.04 * w;
      p.armL.z += 0.5 * w;
      p.armR.z += 0.5 * w;
    },
  },

  grumpy: {
    dur: 3.2,
    lockMove: true,
    start(c, a) {
      a.data.turn = c.heading + (chance(0.5) ? 1 : -1) * 2.2;
      sfx(c, 'grumble');
      fx(c, 'anger', head(c, -0.1), {});
    },
    update(c, a, p, f) {
      const t = a.t;
      const puff = envelope(t, 0, 0.3, 2.0, 2.6);
      p.sx += 0.13 * puff;
      p.sq -= 0.05 * puff;
      f.eyes = 'angry';
      f.brows = 'angry';
      f.mouth = 'pout';
      f.blush += 0.3;
      if (t > 0.3 && t < 1.6) {
        const s = Math.sin(t * 15);
        p.footL.y += Math.max(0, s) * 0.07;
        p.footR.y += Math.max(0, -s) * 0.07;
        p.tz += s * 0.035;
        if (Math.abs(s) > 0.97 && !a.data.lastStomp) {
          a.data.lastStomp = true;
          c.sq.impulse(-0.6);
          sfx(c, 'step', { stomp: true });
        } else if (Math.abs(s) < 0.9) a.data.lastStomp = false;
      }
      if (a.at(0.4)) c.setHeading(a.data.turn);
      if (t > 2.1) {
        f.eyes = t < 2.6 ? 'closed' : 'normal';
        f.mouth = 'flat';
        f.brows = null;
      }
      if (a.at(2.1)) sfx(c, 'sigh');
      if (a.at(2.7)) faceCamera(c);
    },
    end(c) {
      c.setMood('content', 3);
    },
  },

  wave: {
    slot: 'upper',
    dur: 1.9,
    start(c, a) {
      if (a.opts.target) {
        if (!c.walking) c.faceToward(a.opts.target.position || a.opts.target);
        c.lookAt(a.opts.target, 2);
      } else faceCamera(c);
      if (a.opts.sound !== false) sfx(c, 'hi');
    },
    update(c, a, p, f) {
      const t = a.t;
      const e = envelope(t, 0, 0.25, 1.55, 1.9);
      const arm = c.walking ? p.armR : p.armL;
      arm.z += (2.45 + Math.sin(t * 13) * 0.42) * e;
      arm.f += 0.35 * e;
      p.tz += Math.sin(t * 6.5) * 0.05 * e;
      if (e > 0.4) {
        f.eyes = 'happy';
        f.mouth = 'open';
        f.mouthOpen = 0.5;
      }
    },
  },

  tilt: {
    dur: 1.7,
    start(c, a) {
      a.data.dir = chance(0.5) ? 1 : -1;
      fx(c, 'question', head(c, 0.05), {});
      sfx(c, 'hmm');
    },
    update(c, a, p, f) {
      const e = envelope(a.t, 0, 0.28, 1.25, 1.7);
      const d = a.data.dir;
      p.tz += d * 0.3 * easeOutBack(Math.min(1, e));
      p.sproutZ -= d * 0.25 * e;
      if (e > 0.3) {
        f.eyes = 'wide';
        f.mouth = 'o';
        f.mouthOpen = 0.1;
      }
    },
  },

  lookAround: {
    dur: 2.8,
    update(c, a, p, f) {
      const t = a.t;
      const left = envelope(t, 0.15, 0.45, 0.95, 1.25);
      const right = envelope(t, 1.25, 1.55, 2.1, 2.45);
      p.ry += (left - right) * 0.6;
      // eyes lead the turn
      const eyeL = envelope(t, 0.05, 0.15, 1.0, 1.15);
      const eyeR = envelope(t, 1.15, 1.25, 2.15, 2.3);
      f.lookX = (eyeL - eyeR) * 0.95;
      f.lookY = 0.1;
      if (t > 2.45) f.eyes = 'normal';
    },
  },

  yawn: {
    dur: 2.8,
    lockMove: true,
    start(c) {
      sfx(c, 'yawn');
    },
    update(c, a, p, f) {
      const t = a.t;
      const e = envelope(t, 0, 0.45, 1.05, 1.45);
      p.sq += 0.14 * e;
      p.armL.z += 2.3 * e;
      p.armR.z += 2.3 * e;
      p.armL.f += 0.3 * e;
      p.armR.f += 0.3 * e;
      p.tx -= 0.14 * e;
      if (t < 1.4) {
        f.eyes = 'closed';
        f.mouth = 'yawn';
        f.mouthOpen = e;
      } else if (t < 1.8) {
        f.eyes = 'closed';
        f.mouth = 'cat';
      } else {
        f.eyes = 'sleepy';
        const s = bump(t, 1.8, 2.5);
        p.tz += Math.sin(t * 32) * 0.05 * s;
      }
      f.tear = envelope(t, 1.0, 1.3, 2.3, 2.8) * 0.9;
    },
  },

  stretch: {
    dur: 2.4,
    lockMove: true,
    update(c, a, p, f) {
      const t = a.t;
      const e = envelope(t, 0, 0.5, 1.8, 2.4);
      p.armL.z += 2.6 * e;
      p.armR.z += 2.6 * e;
      p.sq += 0.13 * e;
      p.tz += Math.sin(t * 2.6) * 0.17 * e;
      f.eyes = 'closed';
      f.mouth = t > 0.6 && t < 1.6 ? 'o' : 'cat';
      f.mouthOpen = 0.3;
      if (a.at(0.6)) sfx(c, 'mm');
    },
  },

  sneeze: {
    dur: 2.5,
    lockMove: true,
    update(c, a, p, f) {
      const t = a.t;
      if (t < 1.12) {
        // "ah... ahh..."
        const k1 = smoother(t / 0.45);
        const k2 = smoother((t - 0.65) / 0.4);
        const k = t < 0.65 ? k1 * 0.5 : 0.5 + k2 * 0.5;
        p.sq += 0.14 * k;
        p.tx -= 0.24 * k;
        f.eyes = k > 0.6 ? 'squint' : 'sleepy';
        f.mouth = 'o';
        f.mouthOpen = 0.3 + k * 0.6;
        p.sproutX += 0.3 * k;
      } else if (t < 1.55) {
        const d = 1 - (t - 1.12) / 0.43;
        f.eyes = 'squint';
        f.mouth = 'open';
        f.mouthOpen = 0.8;
        p.tx += 0.22 * d;
      } else {
        const s = bump(t, 1.55, 2.3);
        p.ry += Math.sin(t * 24) * 0.22 * s;
        f.eyes = t < 2.0 ? 'closed' : 'happy';
        f.mouth = 'wobble';
      }
      if (a.at(0.05)) sfx(c, 'ah');
      if (a.at(1.12)) {
        c.sq.impulse(-3.2);
        c.leanX.impulse(7);
        c.sproutX.impulse(-6);
        const fw = forward(c);
        fx(c, 'puff', c.facePos(new THREE.Vector3(), 0.65, 0.5), { dir: fw, count: 6 });
        sfx(c, 'sneeze');
        c.push.addScaledVector(new THREE.Vector2(fw.x, fw.z), -1.6);
      }
    },
  },

  trip: {
    dur: 3.5,
    lockMove: true,
    start(c) {
      sfx(c, 'whoa');
      c.vel.multiplyScalar(0.3);
    },
    update(c, a, p, f) {
      const t = a.t;
      const FALL = 1.42;
      let fall = 0;
      if (t < 0.3) {
        fall = easeIn(t / 0.3);
        p.armL.z += 2.1 * fall;
        p.armR.z += 2.1 * fall;
        f.eyes = 'wide';
        f.mouth = 'o';
        f.mouthOpen = 0.8;
      } else if (t < 1.9) {
        fall = 1 + Math.sin((t - 0.3) * 18) * Math.exp(-(t - 0.3) * 7) * 0.06;
        const kick = Math.sin(t * 11);
        p.footL.z -= Math.max(0, kick) * 0.12;
        p.footR.z -= Math.max(0, -kick) * 0.12;
        p.armL.z += 0.9 + Math.sin(t * 9) * 0.35;
        p.armR.z += 0.9 + Math.sin(t * 9 + 1.2) * 0.35;
        f.eyes = 'squint';
        f.mouth = 'wobble';
      } else if (t < 2.4) {
        const u = (t - 1.9) / 0.5;
        fall = 1 - easeOutBack(u, 2.2);
        f.eyes = 'normal';
        f.mouth = 'o';
      } else {
        const s = bump(t, 2.4, 3.2);
        p.tz += Math.sin(t * 26) * 0.08 * s;
        f.eyes = 'happy';
        f.mouth = 'tongue';
        f.blush += 0.6;
      }
      p.rx += FALL * fall;
      p.y += 0.45 * clamp(fall, 0, 1);
      if (a.at(0.3)) {
        c.sq.impulse(-2.5);
        fx(c, 'dust', c.facePos(new THREE.Vector3(), 0.7, 0.05), { count: 6, size: 0.3 });
        sfx(c, 'bonk');
      }
      if (a.at(2.45)) {
        fx(c, 'sweat', head(c), {});
        sfx(c, 'shake');
      }
    },
  },

  dance: {
    dur: null,
    lockMove: true,
    start(c, a) {
      a.data.style = pick(['bounce', 'sway', 'wiggle']);
      a.data.noteT = rand(0.2, 1);
      a.data.offset = rand(0, 1) < 0.5 ? 0 : 0.5;
    },
    update(c, a, p, f) {
      const w = a.w;
      const beat = (c.ctx.beat ? c.ctx.beat() : a.t * 2) + a.data.offset;
      const bp = beat * Math.PI;
      const up = Math.abs(Math.sin(bp));
      const st = a.data.style;
      p.y += up * (st === 'bounce' ? 0.14 : 0.07) * w;
      p.sq += (up * 0.08 - 0.05) * w;
      p.tz += Math.sin(bp * 0.5) * (st === 'sway' ? 0.22 : 0.12) * w;
      if (st === 'wiggle') p.ry += Math.sin(bp * 2) * 0.25 * w;
      p.armL.z += (1.1 + 1.1 * Math.max(0, Math.sin(bp))) * w;
      p.armR.z += (1.1 + 1.1 * Math.max(0, -Math.sin(bp))) * w;
      p.footL.y += Math.max(0, Math.sin(bp)) * 0.05 * w;
      p.footR.y += Math.max(0, -Math.sin(bp)) * 0.05 * w;
      // a twirl every 8 beats
      const bar = beat % 8;
      if (bar > 7) p.spin += TAU * easeInOut(bar - 7);
      f.eyes = Math.floor(beat / 4) % 2 ? 'happy' : 'closed';
      f.mouth = Math.floor(beat / 2) % 2 ? 'open' : 'cat';
      f.mouthOpen = 0.6;
      f.blush += 0.2;
      a.data.noteT -= 1 / 60;
      if (a.data.noteT <= 0) {
        a.data.noteT = rand(1.2, 2.4);
        fx(c, 'note', head(c), {});
      }
    },
  },

  spin: {
    dur: 1.0,
    start(c) {
      sfx(c, 'whee');
    },
    update(c, a, p, f) {
      const u = clamp(a.t / 0.9);
      p.spin += TAU * easeInOut(u);
      const e = bump(u);
      p.armL.z += 1.6 * e;
      p.armR.z += 1.6 * e;
      p.y += e * 0.06;
      f.eyes = 'happy';
      f.mouth = 'open';
    },
  },

  // ---------------------------------------------------------------- rest
  sleep: {
    dur: null,
    lockMove: true,
    fadeIn: 0.6,
    start(c, a) {
      a.data.zT = 1;
      a.data.twitchT = rand(6, 14);
      if (!a.opts.silent) sfx(c, 'mm');
    },
    update(c, a, p, f) {
      const t = a.t;
      const e = smoother(t / 0.9) * a.w;
      const breath = Math.sin(t * 1.3);
      p.sq += (-0.1 + breath * 0.035) * e;
      p.y -= 0.02 * e;
      p.tx += (0.13 + breath * 0.02) * e;
      p.tz += Math.sin(t * 0.37) * 0.07 * e;
      p.footL.z += 0.09 * e;
      p.footR.z += 0.09 * e;
      p.armL.z -= 0.12 * e;
      p.armR.z -= 0.12 * e;
      p.droop += 0.7 * e;
      if (a.w > 0.4) {
        f.eyes = 'closed';
        f.mouth = breath > 0.35 ? 'o' : 'smile';
        f.mouthOpen = 0.15;
        f.blush += 0.15;
      }
      a.data.zT -= 1 / 60;
      if (a.data.zT <= 0) {
        a.data.zT = rand(1.6, 2.4);
        fx(c, 'zzz', head(c, -0.05), {});
        if (chance(0.35)) sfx(c, 'snore');
      }
      a.data.twitchT -= 1 / 60;
      if (a.data.twitchT <= 0) {
        a.data.twitchT = rand(8, 16);
        c.sq.impulse(-1.2);
        c.sproutX.impulse(-3);
        if (chance(0.5)) sfx(c, 'mumble');
      }
      // sleep bubble: grows with each breath... and eventually pops
      const bd = a.data;
      bd.bub = (bd.bub ?? -rand(1, 3)) + 1 / 60;
      if (bd.bub > 0 && !a.stopping) {
        const grow = Math.min(1, bd.bub / 4);
        c.noseBubble(grow * (0.65 + 0.35 * (breath * 0.5 + 0.5)));
        if (bd.bub > 4.5 && Math.random() < 0.004) {
          c.noseBubble(0);
          bd.bub = -rand(2, 5);
          c.sq.impulse(-0.8);
          sfx(c, 'pop');
        }
      } else c.noseBubble(0);
    },
    end(c) {
      c.noseBubble(0);
    },
  },

  wake: {
    dur: 2.6,
    lockMove: true,
    update(c, a, p, f) {
      const t = a.t;
      if (t < 1.1) {
        f.eyes = t < 0.5 ? 'closed' : 'sleepy';
        const rub = envelope(t, 0.1, 0.3, 0.8, 1.05);
        p.armR.f += 1.7 * rub;
        p.armR.z -= 0.45 * rub;
        p.armR.f += Math.sin(t * 22) * 0.12 * rub;
        p.sq -= 0.05 * (1 - t / 1.1);
        f.mouth = 'flat';
      } else {
        const e = envelope(t, 1.1, 1.5, 2.0, 2.5);
        p.armL.z += 2.4 * e;
        p.armR.z += 2.4 * e;
        p.sq += 0.12 * e;
        f.eyes = e > 0.3 ? 'closed' : 'normal';
        f.mouth = e > 0.3 ? 'yawn' : 'smile';
        f.mouthOpen = e;
      }
      if (a.at(1.15)) sfx(c, 'yawn');
    },
  },

  sit: {
    dur: null,
    lockMove: true,
    fadeIn: 0.35,
    update(c, a, p, f) {
      const t = a.t;
      const e = smoother(t / 0.45) * a.w;
      p.sq -= 0.07 * e;
      p.footL.z += 0.15 * e;
      p.footR.z += 0.15 * e;
      p.footL.y += 0.04 * e;
      p.footR.y += 0.04 * e;
      if (c.seat > 0.2) {
        // little feet swinging off the edge
        p.footL.z += Math.sin(t * 3.1) * 0.05 * e;
        p.footR.z += Math.sin(t * 3.1 + Math.PI) * 0.05 * e;
        p.footL.y -= 0.03 * e;
        p.footR.y -= 0.03 * e;
      }
    },
  },

  /** Hop from where we are onto/off something (bed, chair, bean bag...). */
  hopTo: {
    dur: 0.62,
    lockMove: true,
    start(c, a) {
      a.data.from = c.position.clone();
      a.data.to = new THREE.Vector3(a.opts.to.x, 0, a.opts.to.z);
      a.data.s0 = c.seat;
      a.data.s1 = a.opts.seat ?? 0;
      if (a.data.from.distanceTo(a.data.to) > 0.05) c.faceToward(a.data.to, true);
      c.stopWalking();
      c.vel.set(0, 0);
    },
    update(c, a, p, f) {
      const t = a.t;
      if (t < 0.12) {
        p.sq -= 0.14 * smoother(t / 0.12);
        return;
      }
      const u = smoother(clamp((t - 0.12) / 0.42));
      c.position.x = a.data.from.x + (a.data.to.x - a.data.from.x) * u;
      c.position.z = a.data.from.z + (a.data.to.z - a.data.from.z) * u;
      c.seat = a.data.s0 + (a.data.s1 - a.data.s0) * u;
      p.y += bump(u) * (0.28 + Math.abs(a.data.s1 - a.data.s0) * 0.4);
      p.armL.z += bump(u) * 0.9;
      p.armR.z += bump(u) * 0.9;
      if (u > 0.1 && u < 0.9) {
        f.mouth = 'o';
        f.mouthOpen = 0.3;
      }
      if (a.at(0.12)) {
        c.sq.impulse(1.4);
        sfx(c, 'hop');
      }
      if (a.at(0.55)) {
        c.sq.impulse(-1.6);
        if (a.data.s1 < 0.05) fx(c, 'dust', c.footPos(), { count: 2 });
      }
    },
    end(c, a) {
      c.seat = a.data.s1;
      c.position.x = a.data.to.x;
      c.position.z = a.data.to.z;
    },
  },

  // ---------------------------------------------------------------- work-ish
  type: {
    dur: null,
    lockMove: true,
    start(c, a) {
      a.data.pauseT = rand(3, 7);
      a.data.mode = 'type';
      a.data.modeT = 0;
    },
    update(c, a, p, f) {
      const t = a.t;
      const w = a.w;
      const d = a.data;
      d.modeT += 1 / 60;
      d.pauseT -= 1 / 60;
      if (d.pauseT <= 0) {
        d.mode = d.mode === 'type' ? pick(['think', 'think', 'yay', 'sip']) : 'type';
        d.modeT = 0;
        d.pauseT = d.mode === 'type' ? rand(3, 7) : rand(1.4, 2.2);
        if (d.mode === 'yay') {
          sfx(c, 'yay', { soft: true });
          fx(c, 'sparkle', head(c), { count: 4 });
        }
      }
      p.tx += 0.09 * w;
      if (d.mode === 'type') {
        p.armL.f += (1.25 + Math.max(0, Math.sin(t * 19)) * 0.2) * w;
        p.armR.f += (1.25 + Math.max(0, Math.sin(t * 19 + Math.PI)) * 0.2) * w;
        p.armL.z -= 0.24 * w;
        p.armR.z -= 0.24 * w;
        p.y += Math.abs(Math.sin(t * 9.5)) * 0.008 * w;
        f.eyes = 'focus';
        f.lookY = -0.35;
        f.lookX = Math.sin(t * 0.8) * 0.35;
        f.mouth = 'cat';
        if (Math.random() < 0.06) sfx(c, 'tap');
      } else if (d.mode === 'think') {
        p.armR.f += 1.45 * w;
        p.armR.z -= 0.6 * w;
        p.armL.f += 0.9 * w;
        p.tz += 0.09 * w;
        f.lookY = 0.65;
        f.lookX = 0.5;
        f.mouth = 'flat';
      } else if (d.mode === 'yay') {
        const e = bump(d.modeT, 0, 0.9);
        p.y += e * 0.12;
        p.armL.z += 2.2 * e;
        p.armR.z += 2.2 * e;
        f.eyes = 'happy';
        f.mouth = 'open';
      } else {
        // sip from an imaginary mug, very important
        p.armL.f += 1.8 * w;
        p.armL.z -= 0.3 * w;
        f.eyes = 'closed';
        f.mouth = 'cat';
        f.blush += 0.2;
      }
    },
  },

  tinker: {
    dur: null,
    lockMove: true,
    update(c, a, p, f) {
      const t = a.t;
      const w = a.w;
      const cyc = (t * 1.6) % 1;
      // raise... and BONK
      const raise = cyc < 0.7 ? smoother(cyc / 0.7) : 1 - easeIn((cyc - 0.7) / 0.3);
      p.armL.f += (0.9 + raise * 1.5) * w;
      p.armL.z -= 0.1 * w;
      p.armR.f += 1.0 * w;
      p.armR.z -= 0.35 * w;
      p.tx += (0.1 - raise * 0.06) * w;
      f.eyes = 'focus';
      f.lookY = -0.5;
      f.mouth = raise > 0.8 ? 'flat' : 'cat';
      const k = Math.floor(t * 1.6);
      if (k !== a.data.k) {
        a.data.k = k;
        if (t > 0.5) {
          c.sq.impulse(-0.7);
          fx(c, 'spark', c.facePos(new THREE.Vector3(), 0.75, 0.35), { count: 4 });
          sfx(c, 'tink');
        }
      }
    },
  },

  read: {
    dur: null,
    lockMove: true,
    start(c, a) {
      if (!c.item && c.ctx.makeItem) c.hold(c.ctx.makeItem('book', c), 'front');
      a.data.flipT = rand(3, 6);
      a.data.reactT = rand(5, 10);
      a.data.react = null;
    },
    update(c, a, p, f) {
      const t = a.t;
      const d = a.data;
      p.tx += 0.12 * a.w;
      f.lookY = -0.55;
      const line = (t * 0.55) % 1;
      f.lookX = line < 0.85 ? -0.55 + (line / 0.85) * 1.1 : 0.55 - ((line - 0.85) / 0.15) * 1.1;
      f.mouth = 'cat';
      d.flipT -= 1 / 60;
      if (d.flipT <= 0) {
        d.flipT = rand(3.5, 6.5);
        c.item?.userData.flip?.();
        sfx(c, 'page');
      }
      d.reactT -= 1 / 60;
      if (d.reactT <= 0) {
        d.reactT = rand(6, 12);
        d.react = pick(['gasp', 'giggle', 'aww']);
        d.reactAt = t;
      }
      if (d.react && t - d.reactAt < 1.4) {
        const k = t - d.reactAt;
        if (d.react === 'gasp') {
          f.eyes = 'wide';
          f.mouth = 'o';
          f.mouthOpen = 0.7;
          p.tx -= 0.08 * bump(k, 0, 1.4);
        } else if (d.react === 'giggle') {
          f.eyes = 'happy';
          f.mouth = 'open';
          p.y += Math.abs(Math.sin(k * 22)) * 0.02;
        } else {
          f.eyes = 'happy';
          f.mouth = 'cat';
          f.blush += 0.5;
          if (k < 0.05) fx(c, 'heart', head(c), { count: 1 });
        }
      }
    },
    end(c) {
      c.drop(true);
    },
  },

  think: {
    dur: 3.8,
    lockMove: true,
    start(c) {
      fx(c, 'dots', head(c, 0.05), {});
    },
    update(c, a, p, f) {
      const t = a.t;
      const e = envelope(t, 0, 0.4, 2.6, 3.0);
      p.armR.f += 1.5 * e;
      p.armR.z -= 0.62 * e;
      p.tz += 0.09 * e;
      p.ry += 0.18 * e;
      if (t < 2.6) {
        f.lookX = 0.6;
        f.lookY = 0.75;
        f.mouth = t < 1.4 ? 'flat' : 'o';
        f.mouthOpen = 0.1;
      } else {
        f.eyes = 'star';
        f.mouth = 'open';
        p.y += bump(t, 2.6, 3.2) * 0.16;
        p.sproutX -= 0.4 * bump(t, 2.6, 3.4);
        p.armL.z += 1.8 * bump(t, 2.6, 3.6);
      }
      if (a.at(2.6)) {
        fx(c, 'bulb', head(c, 0.12), {});
        sfx(c, 'idea');
        c.sq.impulse(1.5);
      }
    },
  },

  write: {
    dur: null,
    lockMove: true,
    update(c, a, p, f) {
      const t = a.t;
      const w = a.w;
      p.armL.f += (2.05 + Math.sin(t * 7) * 0.14) * w;
      p.armL.z += (0.12 + Math.cos(t * 7) * 0.12) * w;
      p.armR.z += 0.25 * w;
      p.y += Math.abs(Math.sin(t * 3.5)) * 0.02 * w;
      p.footL.rx = 0.25 * w;
      f.eyes = 'focus';
      f.lookY = 0.35;
      f.lookX = Math.sin(t * 1.4) * 0.3;
      f.mouth = 'cat';
      if (Math.random() < 0.03) sfx(c, 'scribble');
    },
  },

  water: {
    dur: null,
    lockMove: true,
    start(c, a) {
      if (!c.item && c.ctx.makeItem) c.hold(c.ctx.makeItem('wateringCan', c), 'front');
      a.data.dropT = 0;
    },
    update(c, a, p, f) {
      const w = a.w;
      const tilt = envelope(a.t, 0.3, 0.8, 99, 100);
      if (c.item) c.item.rotation.x = 0.75 * tilt * w;
      p.tx += 0.08 * w;
      f.eyes = 'happy';
      f.mouth = 'cat';
      a.data.dropT -= 1 / 60;
      if (tilt > 0.8 && a.data.dropT <= 0) {
        a.data.dropT = 0.12;
        const spout = c.facePos(new THREE.Vector3(), 0.95, 0.35);
        fx(c, 'drop', spout, {});
      }
      if (a.at(1.0)) sfx(c, 'water');
    },
    end(c) {
      c.drop(true);
    },
  },

  carry: {
    slot: 'upper',
    dur: null,
    update(c, a, p, f) {
      f.mouth = 'cat';
      f.eyes = 'normal';
    },
  },

  reach: {
    dur: 1.3,
    lockMove: true,
    update(c, a, p, f) {
      const e = envelope(a.t, 0, 0.35, 0.85, 1.25);
      p.armL.f += 2.2 * e;
      p.armR.f += 2.2 * e;
      p.armL.z -= 0.15 * e;
      p.armR.z -= 0.15 * e;
      p.y += 0.06 * e;
      p.sq += 0.07 * e;
      p.footL.rx = 0.5 * e;
      p.footR.rx = 0.5 * e;
      f.lookY = 0.45;
      f.mouth = 'o';
      f.mouthOpen = 0.2;
      if (a.at(0.7)) sfx(c, 'pin');
    },
  },

  admire: {
    dur: 1.8,
    lockMove: true,
    update(c, a, p, f) {
      const e = envelope(a.t, 0, 0.3, 1.5, 1.8);
      p.armL.z -= 0.5 * e;
      p.armR.z -= 0.5 * e;
      p.armL.f -= 0.45 * e;
      p.armR.f -= 0.45 * e;
      p.tx -= 0.06 * e;
      p.tx += Math.sin(a.t * 10) * 0.05 * bump(a.t, 0.6, 1.3);
      p.y += Math.abs(Math.sin(a.t * 7)) * 0.025 * e;
      f.eyes = 'happy';
      f.mouth = 'cat';
      f.blush += 0.2;
    },
  },

  stamp: {
    dur: null,
    lockMove: true,
    update(c, a, p, f) {
      const t = a.t;
      const cyc = (t * 1.2) % 1;
      const raise = cyc < 0.65 ? smoother(cyc / 0.65) : 1 - easeIn((cyc - 0.65) / 0.35);
      p.armL.f += (1.0 + raise * 1.1) * a.w;
      p.armR.f += (1.0 + raise * 1.1) * a.w;
      p.armL.z -= 0.35 * a.w;
      p.armR.z -= 0.35 * a.w;
      p.y += raise * 0.05;
      f.eyes = raise > 0.8 ? 'focus' : 'normal';
      f.lookY = -0.5;
      f.mouth = 'cat';
      const k = Math.floor(t * 1.2);
      if (k !== a.data.k) {
        a.data.k = k;
        if (t > 0.5) {
          c.sq.impulse(-1.1);
          sfx(c, 'stamp');
          if (chance(0.4)) fx(c, 'sparkle', c.facePos(new THREE.Vector3(), 0.7, 0.3), { count: 2 });
        }
      }
    },
  },

  gaze: {
    dur: null,
    lockMove: true,
    start(c, a) {
      a.data.sighT = rand(4, 9);
    },
    update(c, a, p, f) {
      const t = a.t;
      f.lookY = 0.35;
      f.lookX = Math.sin(t * 0.25) * 0.4;
      f.mouth = 'cat';
      p.tz += Math.sin(t * 0.8) * 0.05 * a.w;
      p.armL.z -= 0.1;
      a.data.sighT -= 1 / 60;
      if (a.data.sighT <= 0) {
        a.data.sighT = rand(6, 11);
        a.data.dreamy = t;
        if (chance(0.5)) fx(c, 'heart', head(c), { count: 1 });
      }
      if (a.data.dreamy && t - a.data.dreamy < 1.8) {
        f.eyes = 'closed';
        f.blush += 0.3;
      }
    },
  },

  // ---------------------------------------------------------------- reactions
  pet: {
    dur: null,
    lockMove: true,
    fadeIn: 0.25,
    start(c, a) {
      a.data.heartT = 0.3;
      a.data.cooT = 0;
      c.stopWalking();
    },
    update(c, a, p, f) {
      const t = a.t;
      const w = a.w;
      const lean = c.petLean || { x: 0, y: 0 };
      p.tz += clamp(lean.x, -1, 1) * 0.22 * w;
      p.tx += clamp(lean.y, -1, 1) * 0.12 * w;
      p.sq += (Math.sin(t * 38) * 0.008 - 0.03) * w;
      p.sproutZ += Math.sin(t * 5) * 0.25 * w;
      p.armL.z += 0.35 * w;
      p.armR.z += 0.35 * w;
      f.eyes = Math.floor(t / 1.6) % 3 === 2 ? 'happy' : 'closed';
      f.mouth = 'cat';
      f.blush += 0.55 * w;
      a.data.heartT -= 1 / 60;
      if (a.data.heartT <= 0) {
        a.data.heartT = rand(0.5, 0.9);
        fx(c, 'heart', head(c), { count: 1 });
      }
      a.data.cooT -= 1 / 60;
      if (a.data.cooT <= 0) {
        a.data.cooT = rand(1.4, 2.4);
        sfx(c, 'coo');
      }
    },
  },

  held: {
    dur: null,
    lockMove: true,
    fadeIn: 0.1,
    start(c, a) {
      sfx(c, 'whee');
      a.data.brave = c.traits.energy > 0.35;
    },
    update(c, a, p, f) {
      const t = a.t;
      const w = a.w;
      const hv = c.heldVel;
      p.sq += 0.07 * w;
      p.tz += clamp(-hv.x * 0.09, -0.5, 0.5) * w;
      p.tx += clamp(hv.y * 0.09, -0.5, 0.5) * w;
      p.footL.y += (Math.sin(t * 13) * 0.035 - 0.04) * w;
      p.footR.y += (Math.sin(t * 13 + Math.PI) * 0.035 - 0.04) * w;
      p.footL.z += Math.cos(t * 13) * 0.04 * w;
      p.footR.z -= Math.cos(t * 13) * 0.04 * w;
      p.armL.z += (0.95 + Math.sin(t * 10) * 0.35) * w;
      p.armR.z += (0.95 + Math.sin(t * 10 + 1.3) * 0.35) * w;
      if (t < 1.0 || !a.data.brave) {
        f.eyes = 'wide';
        f.mouth = a.data.brave ? 'o' : 'wobble';
        f.mouthOpen = 0.6;
      } else {
        f.eyes = 'happy';
        f.mouth = 'open';
      }
      f.blush += 0.2;
    },
  },

  land: {
    dur: 1.0,
    lockMove: true,
    update(c, a, p, f) {
      const t = a.t;
      if (t < 0.3) {
        f.eyes = 'squint';
        f.mouth = 'o';
      } else {
        p.tz += Math.sin(t * 26) * 0.07 * (1 - t);
        f.eyes = 'normal';
        f.mouth = 'smile';
      }
    },
  },

  hiccup: {
    dur: 0.9,
    update(c, a, p, f) {
      const t = a.t;
      p.y += bump(t, 0.1, 0.3) * 0.08;
      if (t > 0.1 && t < 0.5) {
        f.eyes = 'wide';
        f.mouth = 'o';
        f.mouthOpen = 0.2;
      }
      if (a.at(0.1)) {
        c.sq.impulse(2.4);
        sfx(c, 'hic');
      }
    },
  },

  scratch: {
    dur: 1.7,
    update(c, a, p, f) {
      const t = a.t;
      const e = envelope(t, 0, 0.3, 1.3, 1.7);
      p.armR.z += 2.25 * e;
      p.armR.f += (0.3 + Math.sin(t * 21) * 0.13) * e;
      p.tz -= 0.12 * e;
      f.lookX = -0.5;
      f.lookY = 0.55;
      f.mouth = 'cat';
    },
  },

  hum: {
    dur: 3.2,
    start(c) {
      sfx(c, 'hum');
    },
    update(c, a, p, f) {
      const t = a.t;
      p.tz += Math.sin(t * 3.2) * 0.07 * a.w;
      p.y += Math.abs(Math.sin(t * 3.2)) * 0.015;
      f.eyes = 'closed';
      f.mouth = 'o';
      f.mouthOpen = 0.15;
      if (a.at(0.3) || a.at(1.4) || a.at(2.4)) fx(c, 'note', head(c), {});
    },
  },

  wiggle: {
    dur: 1.5,
    update(c, a, p, f) {
      const e = envelope(a.t, 0, 0.2, 1.2, 1.5);
      p.ry += Math.sin(a.t * 17) * 0.26 * e;
      p.sq += Math.sin(a.t * 34) * 0.03 * e;
      p.armL.z += 0.6 * e;
      p.armR.z += 0.6 * e;
      f.eyes = 'happy';
      f.mouth = 'cat';
    },
  },

  tapFoot: {
    dur: 2.4,
    update(c, a, p, f) {
      const e = envelope(a.t, 0, 0.2, 2.1, 2.4);
      p.footL.y += Math.max(0, Math.sin(a.t * 12)) * 0.05 * e;
      p.footL.rx = -0.4 * e;
      p.armL.z -= 0.45 * e;
      p.armR.z -= 0.45 * e;
      p.armL.f -= 0.4 * e;
      p.armR.f -= 0.4 * e;
      f.mouth = 'flat';
      f.lookX = 0.6;
      f.lookY = 0.2;
    },
  },

  blinkSlow: {
    dur: 1.4,
    update(c, a, p, f) {
      f.open = 1 - bump(a.t, 0.1, 1.2);
      f.mouth = 'cat';
      f.blush += 0.25 * bump(a.t, 0, 1.4);
    },
  },

  nod: {
    dur: 1.0,
    slot: 'upper',
    update(c, a, p, f) {
      p.tx += Math.sin(a.t * 15) * 0.14 * envelope(a.t, 0, 0.1, 0.8, 1.0);
      f.eyes = 'happy';
    },
  },

  shakeHead: {
    dur: 1.1,
    slot: 'upper',
    update(c, a, p, f) {
      p.ry += Math.sin(a.t * 17) * 0.3 * envelope(a.t, 0, 0.1, 0.85, 1.1);
      f.eyes = 'closed';
      f.mouth = 'flat';
    },
  },

  surprised: {
    dur: 1.2,
    start(c) {
      c.sq.impulse(3.2);
      fx(c, 'exclaim', head(c, 0.05), {});
      sfx(c, 'gasp');
    },
    update(c, a, p, f) {
      const t = a.t;
      p.y += bump(t, 0, 0.32) * 0.2;
      p.sproutX -= 0.5 * bump(t, 0, 0.8);
      p.armL.z += 0.9 * bump(t, 0, 0.6);
      p.armR.z += 0.9 * bump(t, 0, 0.6);
      f.eyes = t < 0.7 ? 'dot' : 'wide';
      f.mouth = 'o';
      f.mouthOpen = 0.8;
    },
  },

  cheer: {
    dur: 2.3,
    lockMove: true,
    start(c) {
      faceCamera(c);
      sfx(c, 'yay');
      fx(c, 'confetti', head(c, 0.1), { count: 24 });
    },
    update(c, a, p, f) {
      const t = a.t;
      const h1 = bump(t, 0.1, 0.65);
      const h2 = bump(t, 0.85, 1.4);
      p.y += (h1 + h2) * 0.28 * c.bounce;
      p.armL.z += 2.5 * envelope(t, 0, 0.15, 1.6, 2.1);
      p.armR.z += 2.5 * envelope(t, 0, 0.15, 1.6, 2.1);
      p.armL.z += Math.sin(t * 16) * 0.2;
      p.armR.z += Math.sin(t * 16 + 1) * 0.2;
      f.eyes = 'star';
      f.mouth = 'open';
      f.mouthOpen = 0.8;
      f.blush += 0.4;
      if (a.at(0.65) || a.at(1.4)) {
        c.sq.impulse(-1.6);
        fx(c, 'dust', c.footPos(), { count: 2 });
      }
    },
  },

  shy: {
    dur: 2.6,
    lockMove: true,
    update(c, a, p, f) {
      const t = a.t;
      const e = envelope(t, 0, 0.3, 2.2, 2.6);
      const peek = envelope(t, 1.1, 1.25, 1.6, 1.8);
      p.armL.f += (1.9 - peek * 0.6) * e;
      p.armR.f += 1.9 * e;
      p.armL.z -= 0.55 * e;
      p.armR.z -= 0.55 * e;
      p.tz += Math.sin(t * 3) * 0.07 * e;
      p.tx += 0.1 * e;
      f.eyes = peek > 0.5 ? 'normal' : 'closed';
      f.blush = 1.1;
      f.mouth = 'wobble';
      if (a.at(0.4)) fx(c, 'heart', head(c), { count: 1, small: true });
    },
  },

  sad: {
    dur: 3.2,
    lockMove: true,
    start(c) {
      sfx(c, 'aww');
    },
    update(c, a, p, f) {
      const e = envelope(a.t, 0, 0.5, 2.6, 3.2);
      p.sq -= 0.05 * e;
      p.tx += 0.12 * e;
      p.droop += 0.9 * e;
      p.armL.z -= 0.15 * e;
      p.armR.z -= 0.15 * e;
      f.eyes = 'sad';
      f.mouth = 'frown';
      f.brows = 'worried';
      f.tear = envelope(a.t, 0.8, 1.2, 2.4, 3.0);
    },
  },

  sheepish: {
    dur: 2.6,
    lockMove: true,
    start(c) {
      faceCamera(c);
      fx(c, 'sweat', head(c), {});
    },
    update(c, a, p, f) {
      const t = a.t;
      const e = envelope(t, 0, 0.3, 2.2, 2.6);
      p.armR.z += 2.2 * e;
      p.armR.f += (0.3 + Math.sin(t * 20) * 0.12) * e;
      p.tz -= 0.1 * e;
      f.eyes = 'happy';
      f.mouth = 'wobble';
      f.blush = 0.9;
    },
  },

  hug: {
    dur: 2.8,
    lockMove: true,
    start(c, a) {
      if (a.opts.partner) c.faceToward(a.opts.partner.position);
      sfx(c, 'coo');
    },
    update(c, a, p, f) {
      const e = envelope(a.t, 0, 0.4, 2.2, 2.8);
      p.tx += 0.24 * e;
      p.armL.f += 1.5 * e;
      p.armR.f += 1.5 * e;
      p.armL.z += 0.2 * e;
      p.armR.z += 0.2 * e;
      p.sq += Math.sin(a.t * 4) * 0.02 * e;
      f.eyes = e > 0.5 ? 'closed' : 'happy';
      f.mouth = 'cat';
      f.blush += 0.6 * e;
      if (a.at(0.7)) fx(c, 'heart', head(c, 0.1), { count: 2 });
    },
  },

  bonk: {
    dur: 1.4,
    lockMove: true,
    start(c, a) {
      c.sq.impulse(-2.6);
      const away = a.opts.from
        ? new THREE.Vector2(c.position.x - a.opts.from.x, c.position.z - a.opts.from.z).normalize()
        : new THREE.Vector2(-Math.sin(c.heading), -Math.cos(c.heading));
      c.push.addScaledVector(away, 2.2);
      c.leanX.impulse(-4);
      sfx(c, 'bonk', { soft: true });
    },
    update(c, a, p, f) {
      const t = a.t;
      if (t < 0.4) {
        f.eyes = 'squint';
        f.mouth = 'o';
      } else if (t < 0.8) {
        f.eyes = 'wide';
        f.mouth = 'o';
      } else {
        f.eyes = 'happy';
        f.mouth = 'open';
        p.y += Math.abs(Math.sin(t * 20)) * 0.02;
      }
    },
  },

  talk: {
    slot: 'upper',
    dur: null,
    update(c, a, p, f) {
      if (c.talkTime > 0) {
        p.armL.f += Math.max(0, Math.sin(a.t * 3.3)) * 0.5 * a.w;
        p.armL.z += Math.max(0, Math.sin(a.t * 2.1)) * 0.4 * a.w;
      } else {
        // listening: little nods
        p.tx += Math.max(0, Math.sin(a.t * 5)) * 0.04 * a.w;
      }
    },
  },

  peek: {
    dur: 2.2,
    update(c, a, p, f) {
      const e = envelope(a.t, 0, 0.4, 1.7, 2.2);
      p.tx += 0.18 * e;
      p.tz += 0.18 * e;
      f.eyes = 'wide';
      f.mouth = 'o';
      f.mouthOpen = 0.15;
    },
  },
};

/** Actions that make sense to trigger from a UI / showcase. */
export const SHOWCASE = {
  Reactions: ['boop', 'giggle', 'surprised', 'dizzy', 'grumpy', 'shy', 'sheepish', 'sad', 'bonk'],
  Joy: ['hop', 'wave', 'spin', 'cheer', 'dance', 'wiggle', 'hum', 'nod'],
  Fidgets: ['tilt', 'lookAround', 'scratch', 'yawn', 'stretch', 'sneeze', 'hiccup', 'tapFoot', 'blinkSlow', 'peek'],
  Activities: ['type', 'tinker', 'read', 'write', 'think', 'water', 'stamp', 'gaze', 'sit', 'sleep', 'wake'],
  Mishaps: ['trip'],
};
