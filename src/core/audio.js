// All sound is synthesized with WebAudio: boops, squeaks, babble voices
// (Animal-Crossing-style syllables), a generative music box, and gentle
// day/night ambience. No audio files needed.
import { clamp, rand, pick, chance } from './util.js';

const PENTA = [0, 2, 4, 7, 9];
const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

export class Sound {
  constructor() {
    this.ctx = null;
    this.sfxOn = true;
    this.musicOn = true;
    this.volume = 0.8;
    this.tempo = 92;
    this._beatOrigin = performance.now() / 1000;
    this._lastStep = 0;
    this.listeners = [];
    this.ambience = 'day';
    this._ambT = 0;
    this.isVisible = () => true; // set by the world: is this critter in view?
  }

  /** Must be called from a user gesture. Safe to call many times. */
  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = this.volume;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 3;
    this.master.connect(comp).connect(ctx.destination);

    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = this.sfxOn ? 1 : 0;
    this.sfxBus.connect(this.master);
    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = this.musicOn ? 0.55 : 0;
    this.musicBus.connect(this.master);

    // soft room reverb
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this._impulse(2.4, 2.8);
    this.reverbSend = ctx.createGain();
    this.reverbSend.gain.value = 0.35;
    this.reverbSend.connect(this.reverb).connect(this.master);

    this._noise = this._noiseBuffer();
    this._startMusic();
    this.listeners.forEach((fn) => fn());
  }

  onUnlock(fn) {
    this.listeners.push(fn);
  }

  setSfx(on) {
    this.sfxOn = on;
    if (this.sfxBus) this.sfxBus.gain.setTargetAtTime(on ? 1 : 0, this.ctx.currentTime, 0.05);
  }
  setMusic(on) {
    this.musicOn = on;
    if (this.musicBus) this.musicBus.gain.setTargetAtTime(on ? 0.55 : 0, this.ctx.currentTime, 0.3);
  }

  /** Global beat clock (also used for dancing when music is off). */
  beat() {
    if (this.ctx && this.musicOn) {
      return (this.ctx.currentTime - this._musicT0) * (this.tempo / 60);
    }
    return (performance.now() / 1000 - this._beatOrigin) * (this.tempo / 60);
  }

  _impulse(seconds, decay) {
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  _noiseBuffer() {
    const ctx = this.ctx;
    const buf = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  // ------------------------------------------------------------ primitives
  _env(gainNode, t, a, peak, d, sustain = 0) {
    const g = gainNode.gain;
    g.cancelScheduledValues(t);
    g.setValueAtTime(0.0001, t);
    g.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + a);
    g.exponentialRampToValueAtTime(Math.max(0.0001, sustain || 0.0001), t + a + d);
  }

  tone({ type = 'sine', f0 = 440, f1 = null, dur = 0.15, gain = 0.2, attack = 0.005, t = 0, vibrato = 0, vibratoF = 7, filter = null, reverb = 0.15, dest = null, curve = 'exp' }) {
    const ctx = this.ctx;
    const now = ctx.currentTime + t;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(f0, now);
    if (f1) {
      if (curve === 'exp') osc.frequency.exponentialRampToValueAtTime(Math.max(20, f1), now + dur);
      else osc.frequency.linearRampToValueAtTime(f1, now + dur);
    }
    let node = osc;
    if (vibrato) {
      const lfo = ctx.createOscillator();
      const lg = ctx.createGain();
      lfo.frequency.value = vibratoF;
      lg.gain.value = vibrato;
      lfo.connect(lg).connect(osc.frequency);
      lfo.start(now);
      lfo.stop(now + dur + 0.1);
    }
    if (filter) {
      const bq = ctx.createBiquadFilter();
      bq.type = filter.type || 'lowpass';
      bq.frequency.value = filter.f;
      bq.Q.value = filter.q ?? 0.8;
      node.connect(bq);
      node = bq;
    }
    const g = ctx.createGain();
    this._env(g, now, attack, gain, dur);
    node.connect(g);
    g.connect(dest || this.sfxBus);
    if (reverb) {
      const s = ctx.createGain();
      s.gain.value = reverb;
      g.connect(s).connect(this.reverbSend);
    }
    osc.start(now);
    osc.stop(now + attack + dur + 0.05);
  }

  noise({ dur = 0.1, gain = 0.1, t = 0, filter = { type: 'bandpass', f: 2000, q: 1 }, f1 = null, attack = 0.003, reverb = 0.05 }) {
    const ctx = this.ctx;
    const now = ctx.currentTime + t;
    const src = ctx.createBufferSource();
    src.buffer = this._noise;
    const bq = ctx.createBiquadFilter();
    bq.type = filter.type;
    bq.frequency.setValueAtTime(filter.f, now);
    if (f1) bq.frequency.exponentialRampToValueAtTime(f1, now + dur);
    bq.Q.value = filter.q ?? 1;
    const g = ctx.createGain();
    this._env(g, now, attack, gain, dur);
    src.connect(bq).connect(g).connect(this.sfxBus);
    if (reverb) {
      const s = ctx.createGain();
      s.gain.value = reverb;
      g.connect(s).connect(this.reverbSend);
    }
    src.start(now, Math.random() * 0.5);
    src.stop(now + dur + attack + 0.05);
  }

  /** One babble syllable. */
  syllable(base, t, { vowel = 0.5, loud = 1, len = 0.07 } = {}) {
    const f = base * (0.85 + vowel * 0.5) * rand(0.95, 1.05);
    this.tone({
      type: 'triangle',
      f0: f * 1.06,
      f1: f * 0.94,
      dur: len,
      gain: 0.075 * loud,
      attack: 0.006,
      t,
      filter: { type: 'lowpass', f: 1800 + vowel * 1600, q: 2 },
      reverb: 0.08,
    });
    this.tone({ type: 'sine', f0: f * 2, f1: f * 1.9, dur: len * 0.8, gain: 0.025 * loud, t, reverb: 0 });
  }

  // ------------------------------------------------------------ public sfx
  play(name, o = {}) {
    if (!this.ctx || !this.sfxOn) return;
    const c = o.critter;
    if (c && !this.isVisible(c)) return;
    const v = c ? c.voice : o.pitch ?? 1;
    const T = (opts) => this.tone(opts);
    const N = (opts) => this.noise(opts);
    switch (name) {
      case 'boop':
        T({ f0: 520 * v, f1: 860 * v, dur: 0.12, gain: 0.22, vibrato: 0 });
        T({ type: 'triangle', f0: 1040 * v, f1: 1500 * v, dur: 0.08, gain: 0.05 });
        break;
      case 'hop':
        T({ f0: 300 * v, f1: 640 * v, dur: 0.14, gain: 0.12 });
        break;
      case 'land':
        T({ f0: 190, f1: 90, dur: 0.12, gain: 0.12 * clamp(o.strength ?? 1, 0.3, 1.5), reverb: 0.02 });
        N({ dur: 0.06, gain: 0.04, filter: { type: 'lowpass', f: 500 } });
        break;
      case 'step': {
        const now = performance.now();
        if (!o.stomp && now - this._lastStep < 140) return;
        this._lastStep = now;
        N({ dur: o.stomp ? 0.08 : 0.025, gain: o.stomp ? 0.08 : o.soft ? 0.009 : 0.013, filter: { type: 'bandpass', f: o.stomp ? 600 : rand(2200, 3200), q: 1.5 }, reverb: 0 });
        break;
      }
      case 'giggle':
        for (let i = 0; i < 6; i++) this.syllable(380 * v * (1 + (i % 2) * 0.12 + i * 0.03), i * 0.085, { vowel: 0.9, len: 0.06 });
        break;
      case 'dizzy':
        T({ f0: 900 * v, f1: 300 * v, dur: 0.9, gain: 0.08, vibrato: 40, vibratoF: 9 });
        break;
      case 'grumble':
        T({ type: 'sawtooth', f0: 170 * v, f1: 130 * v, dur: 0.5, gain: 0.07, vibrato: 12, vibratoF: 18, filter: { type: 'lowpass', f: 600 } });
        break;
      case 'hi':
        this.syllable(320 * v, 0, { vowel: 0.4, len: 0.09 });
        this.syllable(380 * v, 0.11, { vowel: 1, len: 0.14, loud: 1.2 });
        break;
      case 'hmm':
        T({ f0: 380 * v, f1: 520 * v, dur: 0.38, gain: 0.08, vibrato: 6, filter: { type: 'lowpass', f: 1200 } });
        break;
      case 'yawn':
        T({ type: 'triangle', f0: 520 * v, f1: 240 * v, dur: 1.0, gain: 0.07, attack: 0.15, filter: { type: 'lowpass', f: 1400 }, curve: 'lin' });
        N({ dur: 0.8, gain: 0.015, filter: { type: 'bandpass', f: 900, q: 0.7 } });
        break;
      case 'mm':
        T({ type: 'triangle', f0: 300 * v, f1: 340 * v, dur: 0.45, gain: 0.06, attack: 0.05, filter: { type: 'lowpass', f: 900 } });
        break;
      case 'ah':
        this.syllable(330 * v, 0, { vowel: 0.7, len: 0.16 });
        this.syllable(370 * v, 0.6, { vowel: 0.8, len: 0.2 });
        break;
      case 'sneeze':
        N({ dur: 0.18, gain: 0.16, filter: { type: 'bandpass', f: 3500, q: 0.8 }, f1: 1500 });
        T({ f0: 900 * v, f1: 420 * v, dur: 0.16, gain: 0.1, t: 0.02 });
        break;
      case 'whoa':
        T({ f0: 600 * v, f1: 950 * v, dur: 0.18, gain: 0.08 });
        T({ f0: 950 * v, f1: 480 * v, dur: 0.25, gain: 0.08, t: 0.18 });
        break;
      case 'bonk':
        T({ type: 'triangle', f0: 340, f1: 170, dur: 0.14, gain: o.soft ? 0.08 : 0.16, reverb: 0.05 });
        N({ dur: 0.03, gain: 0.05, filter: { type: 'highpass', f: 2000 } });
        break;
      case 'shake':
        for (let i = 0; i < 5; i++) N({ dur: 0.035, gain: 0.025, t: i * 0.05, filter: { type: 'bandpass', f: 1800, q: 2 } });
        break;
      case 'whee':
        T({ f0: 500 * v, f1: 1250 * v, dur: 0.42, gain: 0.09, vibrato: 10 });
        break;
      case 'snore':
        N({ dur: 0.7, gain: 0.02, attack: 0.3, filter: { type: 'lowpass', f: 300, q: 4 } });
        break;
      case 'mumble':
        for (let i = 0; i < 3; i++) this.syllable(240 * v, i * 0.1, { vowel: rand(0.1, 0.5), loud: 0.5 });
        break;
      case 'tap':
        N({ dur: 0.012, gain: 0.02, filter: { type: 'bandpass', f: 4200, q: 3 }, reverb: 0 });
        break;
      case 'tink':
        T({ f0: 1900, dur: 0.22, gain: 0.05, reverb: 0.2 });
        T({ f0: 2850, dur: 0.15, gain: 0.025 });
        break;
      case 'page':
        N({ dur: 0.16, gain: 0.03, filter: { type: 'highpass', f: 2500 }, f1: 5000 });
        break;
      case 'idea':
        T({ f0: midi(84), dur: 0.9, gain: 0.08, reverb: 0.4 });
        T({ f0: midi(91), dur: 0.7, gain: 0.05, t: 0.08, reverb: 0.4 });
        break;
      case 'scribble':
        N({ dur: 0.09, gain: 0.015, filter: { type: 'bandpass', f: rand(2200, 3200), q: 4 } });
        break;
      case 'water':
        for (let i = 0; i < 8; i++) T({ f0: rand(900, 1500), f1: rand(1600, 2400), dur: 0.05, gain: 0.02, t: i * rand(0.06, 0.12) });
        break;
      case 'pin':
        T({ f0: 1200, f1: 700, dur: 0.05, gain: 0.08 });
        break;
      case 'stamp':
        T({ f0: 160, f1: 80, dur: 0.1, gain: 0.14 });
        N({ dur: 0.04, gain: 0.05, filter: { type: 'lowpass', f: 900 } });
        break;
      case 'coo':
        T({ f0: 560 * v, f1: 660 * v, dur: 0.18, gain: 0.07, vibrato: 14, vibratoF: 12 });
        T({ f0: 660 * v, f1: 600 * v, dur: 0.22, gain: 0.06, t: 0.17, vibrato: 14, vibratoF: 12 });
        break;
      case 'hic':
        T({ f0: 700 * v, f1: 1100 * v, dur: 0.07, gain: 0.12 });
        break;
      case 'gasp':
        N({ dur: 0.12, gain: 0.04, filter: { type: 'highpass', f: 1500 }, f1: 4000 });
        T({ f0: 520 * v, f1: 860 * v, dur: 0.12, gain: 0.08 });
        break;
      case 'yay':
        this.syllable(420 * v, 0, { vowel: 0.9, len: 0.09, loud: o.soft ? 0.6 : 1 });
        this.syllable(520 * v, 0.1, { vowel: 1, len: 0.16, loud: o.soft ? 0.6 : 1.2 });
        if (!o.soft) [0, 4, 7, 12].forEach((n, i) => T({ f0: midi(84 + n), dur: 0.3, gain: 0.03, t: 0.2 + i * 0.06, reverb: 0.3 }));
        break;
      case 'aww':
        T({ type: 'triangle', f0: 600 * v, f1: 380 * v, dur: 0.6, gain: 0.07, filter: { type: 'lowpass', f: 1300 } });
        break;
      case 'sigh':
        N({ dur: 0.7, gain: 0.03, attack: 0.1, filter: { type: 'bandpass', f: 1200, q: 0.6 }, f1: 500 });
        break;
      case 'pop':
        T({ f0: 380, f1: 950, dur: 0.06, gain: 0.12 });
        break;
      case 'click':
        T({ f0: 900, f1: 1300, dur: 0.04, gain: 0.07, reverb: 0 });
        break;
      case 'chime':
        [0, 4, 7, 11, 14].forEach((n, i) => T({ f0: midi(79 + n), dur: 0.5, gain: 0.04, t: i * 0.05, reverb: 0.4 }));
        break;
      case 'door':
        T({ type: 'triangle', f0: 140, f1: 110, dur: 0.18, gain: 0.12 });
        [0, 0.14].forEach((t) => T({ f0: midi(88), dur: 0.6, gain: 0.05, t: 0.05 + t, reverb: 0.5 }));
        break;
      case 'whoosh':
        N({ dur: 0.5, gain: 0.06, attack: 0.15, filter: { type: 'bandpass', f: 400, q: 0.7 }, f1: 2400 });
        break;
      case 'rotate':
        N({ dur: 0.28, gain: 0.025, attack: 0.08, filter: { type: 'bandpass', f: 600, q: 0.8 }, f1: 1400 });
        break;
      case 'switch':
        T({ type: 'square', f0: 1400, dur: 0.02, gain: 0.03, filter: { type: 'lowpass', f: 3000 }, reverb: 0 });
        break;
      case 'plant':
        T({ f0: 500, f1: 750, dur: 0.08, gain: 0.05 });
        N({ dur: 0.15, gain: 0.02, filter: { type: 'highpass', f: 3000 } });
        break;
      case 'mail':
        T({ f0: midi(84), dur: 0.5, gain: 0.05, reverb: 0.4 });
        T({ f0: midi(88), dur: 0.6, gain: 0.05, t: 0.12, reverb: 0.4 });
        break;
      case 'spawn':
        [0, 7, 12, 16, 19].forEach((n, i) => T({ f0: midi(72 + n), dur: 0.35, gain: 0.05, t: i * 0.06, reverb: 0.4 }));
        break;
      case 'hum': {
        const notes = [0, 2, 4, 2, 0, 7];
        notes.forEach((n, i) =>
          T({ type: 'triangle', f0: midi(67 + n) * v * 0.6, dur: 0.3, gain: 0.045, t: i * 0.42, attack: 0.04, filter: { type: 'lowpass', f: 1000 }, vibrato: 4 })
        );
        break;
      }
      default:
        break;
    }
  }

  /** Animalese-style babble for a line of text. Returns its duration. */
  babble(text, voice = 1) {
    if (!this.ctx || !this.sfxOn) return text.length * 0.06;
    const clean = text.slice(0, 64);
    let t = 0;
    const base = 300 * voice;
    const q = /\?\s*$/.test(clean);
    const ex = /!\s*$/.test(clean);
    for (let i = 0; i < clean.length; i++) {
      const ch = clean[i].toLowerCase();
      if (ch === ' ') {
        t += 0.03;
        continue;
      }
      if (/[.,;:~]/.test(ch)) {
        t += 0.12;
        continue;
      }
      if (!/[a-z0-9]/.test(ch)) continue;
      if (i % 2 === 1 && !/[aeiouy]/.test(ch)) continue; // keep it snappy
      const vowel = /[aeiouy]/.test(ch) ? 0.6 + (ch.charCodeAt(0) % 5) * 0.1 : (ch.charCodeAt(0) % 7) / 14;
      const end = i > clean.length - 4;
      const lift = q && end ? 1.25 : 1;
      this.syllable(base * lift, t, { vowel, loud: ex ? 1.25 : 1, len: 0.06 });
      t += 0.068;
    }
    return t;
  }

  // ------------------------------------------------------------ music box
  _startMusic() {
    const ctx = this.ctx;
    this._musicT0 = ctx.currentTime + 0.1;
    this._nextBeat = 0;
    this._chordIdx = 0;
    this._melodyNote = 2;
    // I - vi - IV - V  in F major-ish, written as semitone roots
    this._prog = [
      [0, 4, 7],
      [9, 12, 16],
      [5, 9, 12],
      [7, 11, 14],
      [0, 4, 7],
      [9, 12, 16],
      [2, 5, 9],
      [7, 11, 14],
    ];
    const tick = () => {
      if (!this.ctx) return;
      const spb = 60 / this.tempo;
      const horizon = ctx.currentTime + 0.25;
      while (this._musicT0 + this._nextBeat * spb * 0.5 < horizon) {
        const step = this._nextBeat; // eighth notes
        const when = this._musicT0 + step * spb * 0.5;
        this._musicStep(step, when, spb);
        this._nextBeat++;
      }
      this._ambienceTick();
    };
    this._musicTimer = setInterval(tick, 60);
  }

  _bell(freq, when, gain, dur = 1.6) {
    const ctx = this.ctx;
    const t = Math.max(when, ctx.currentTime);
    const out = ctx.createGain();
    out.gain.setValueAtTime(0.0001, t);
    out.gain.exponentialRampToValueAtTime(gain, t + 0.006);
    out.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    out.connect(this.musicBus);
    const s = ctx.createGain();
    s.gain.value = 0.6;
    out.connect(s).connect(this.reverbSend);
    const partials = [
      [1, 1],
      [2.0, 0.22],
      [3.01, 0.08],
      [4.16, 0.05],
    ];
    for (const [m, a] of partials) {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq * m;
      const g = ctx.createGain();
      g.gain.setValueAtTime(a, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur / (m * 0.8));
      o.connect(g).connect(out);
      o.start(t);
      o.stop(t + dur + 0.05);
    }
  }

  _musicStep(step, when, spb) {
    if (!this.musicOn) return;
    const KEY = 65; // F4
    const bar = Math.floor(step / 8);
    const inBar = step % 8;
    const chord = this._prog[bar % this._prog.length];
    const night = this.ambience === 'night';
    const g = night ? 0.05 : 0.065;
    if (inBar === 0) this._bell(midi(KEY - 24 + chord[0]), when, g * 0.9, 2.6);
    if (inBar === 0 || inBar === 4) {
      // soft arpeggio
      chord.forEach((n, i) => this._bell(midi(KEY - 12 + n), when + i * spb * 0.16, g * 0.45, 1.8));
    }
    // melody on some eighths
    const play = inBar === 0 ? 0.9 : inBar % 2 === 0 ? 0.55 : 0.22;
    if (Math.random() < play * (night ? 0.6 : 1)) {
      // random walk over pentatonic, gravitating to chord tones
      let m = this._melodyNote + pick([-2, -1, -1, 0, 1, 1, 2]);
      m = clamp(m, 0, 9);
      this._melodyNote = m;
      const oct = Math.floor(m / 5);
      let note = KEY + PENTA[m % 5] + oct * 12;
      if (inBar === 0 && chance(0.6)) note = KEY + 12 + chord[Math.floor(Math.random() * 3)] - 12 * (chord[0] > 6 ? 1 : 0);
      this._bell(midi(note), when, g * 0.8, 1.5);
    }
  }

  setAmbience(mode) {
    this.ambience = mode;
  }

  _ambienceTick() {
    if (!this.sfxOn || !this.ctx) return;
    this._ambT -= 0.06;
    if (this._ambT > 0) return;
    const [room, time] = String(this.ambience || '').split(':');
    const night = time === 'night' || this.ambience === 'night';
    switch (room) {
      case 'workshop':
        // soft taps and a ratchet now and then
        this._ambT = rand(1.4, 3.5);
        for (let i = 0; i < Math.floor(rand(1, 4)); i++) this.noise({ dur: 0.03, gain: 0.012, t: i * rand(0.12, 0.2), filter: { type: 'bandpass', f: rand(1800, 3200), q: 4 } });
        return;
      case 'kitchen':
        // the kettle simmering
        this._ambT = rand(0.6, 1.4);
        for (let i = 0; i < 3; i++) this.tone({ f0: rand(500, 900), f1: rand(900, 1300), dur: 0.05, gain: 0.004, t: i * rand(0.1, 0.3), reverb: 0.2 });
        return;
      case 'study':
        // a clock, and a page
        this._ambT = 1;
        this.noise({ dur: 0.012, gain: 0.006, filter: { type: 'highpass', f: 3000, q: 1 } });
        if (chance(0.06)) this.play('page');
        return;
      case 'gate':
        this._ambT = rand(2, 5);
        this.noise({ dur: 1.6, gain: 0.006, attack: 0.6, filter: { type: 'lowpass', f: 500, q: 0.7 }, reverb: 0.3 });
        if (!night && chance(0.6)) this._chirp();
        return;
      case 'under':
        this._ambT = 2.4;
        this.tone({ type: 'sine', f0: 55, dur: 2.4, gain: 0.02, attack: 0.8, reverb: 0.4 });
        if (chance(0.3)) this.tone({ f0: rand(1200, 1600), dur: 0.08, gain: 0.004, t: rand(0, 1), reverb: 0.5 });
        return;
    }
    if (night) {
      this._ambT = rand(1.2, 3);
      this._cricket();
    } else if (time === 'morning' || time === 'day' || this.ambience === 'morning' || this.ambience === 'day') {
      this._ambT = rand(4, 11);
      if (chance(0.7)) this._chirp();
    } else this._ambT = 5;
  }

  _chirp() {
    const base = rand(2400, 3600);
    const n = Math.floor(rand(2, 5));
    for (let i = 0; i < n; i++) {
      this.tone({ f0: base * rand(0.9, 1.1), f1: base * rand(1.2, 1.5), dur: 0.06, gain: 0.012, t: i * rand(0.08, 0.13), reverb: 0.3 });
    }
  }

  _cricket() {
    const f = rand(4200, 4800);
    for (let i = 0; i < 3; i++) this.tone({ f0: f, dur: 0.03, gain: 0.006, t: i * 0.05, reverb: 0.2 });
  }
}

export const sound = new Sound();
