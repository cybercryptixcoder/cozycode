// The sproutling: a soft gumdrop with stubby arms, tiny feet and a sprout.
// It is deliberately simple to look at; the cuteness comes from how it moves:
// squash & stretch, jelly lean, springy sprout, eyes that lead the body,
// blinks on head turns, tiny pitter-patter steps and lots of little fidgets.
import * as THREE from 'three';
import { BODY, getParts, getShadowTexture, bodyRadiusAt } from './parts.js';
import { FaceRenderer, defaultFaceState } from './face.js';
import { makeBodyMaterial, makeLimbMaterial } from './material.js';
import { ACTIONS } from './actions.js';
import {
  Spring,
  clamp,
  damp,
  dampAngle,
  nearestAngle,
  wrapAngle,
  lerp,
  noise1,
  rand,
  chance,
  mulberry32,
  smoothstep,
  pickWeighted,
} from '../core/util.js';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

export const PALETTE = [
  { name: 'peach', color: '#ffb18f' },
  { name: 'mint', color: '#93dcbc' },
  { name: 'lilac', color: '#c4b0f2' },
  { name: 'butter', color: '#ffd977' },
  { name: 'sky', color: '#95c8f4' },
  { name: 'rose', color: '#ffa3bf' },
  { name: 'sage', color: '#b9d48f' },
  { name: 'apricot', color: '#ffc58a' },
  { name: 'lavender', color: '#a9b2f0' },
  { name: 'coral', color: '#ff9a8c' },
];

export const ACCESSORIES = ['sprout', 'leaf', 'antenna', 'flower'];

const MOOD_FACES = {
  happy: { eyes: 'normal', mouth: 'smile', blush: 0.38 },
  content: { eyes: 'normal', mouth: 'cat', blush: 0.32 },
  excited: { eyes: 'star', mouth: 'open', blush: 0.5, mouthOpen: 0.55 },
  sleepy: { eyes: 'sleepy', mouth: 'flat', blush: 0.25 },
  curious: { eyes: 'normal', mouth: 'o', blush: 0.3, mouthOpen: 0.1 },
  sad: { eyes: 'sad', mouth: 'frown', blush: 0.2, brows: 'worried' },
  grumpy: { eyes: 'angry', mouth: 'pout', blush: 0.25, brows: 'angry' },
  focused: { eyes: 'focus', mouth: 'cat', blush: 0.25 },
  shy: { eyes: 'normal', mouth: 'wobble', blush: 0.8 },
};

let nextId = 1;
let bubbleMat = null;
let bubbleGeo = null;

export class Critter {
  constructor(opts = {}) {
    this.id = opts.id || `critter-${nextId++}`;
    this.name = opts.name || 'Sprout';
    this.seed = opts.seed ?? Math.floor(Math.random() * 1e9);
    const rng = mulberry32(this.seed);
    this.rng = rng;
    this.color = opts.color || PALETTE[Math.floor(rng() * PALETTE.length)].color;
    this.accessory = opts.accessory || ACCESSORIES[Math.floor(rng() * ACCESSORIES.length)];
    this.size = opts.size ?? 0.92 + rng() * 0.16;

    // Personality: these numbers drive how it *moves*, not just what it does.
    const t = opts.traits || {};
    this.traits = {
      energy: t.energy ?? rng(),
      curiosity: t.curiosity ?? rng(),
      sociability: t.sociability ?? rng(),
      sleepiness: t.sleepiness ?? rng(),
      clumsiness: t.clumsiness ?? rng() * 0.8,
      chattiness: t.chattiness ?? rng(),
    };
    const tr = this.traits;
    this.walkSpeed = 0.85 + tr.energy * 0.55;
    this.bounce = 0.8 + tr.energy * 0.45;
    this.blinkEvery = 2.4 + rng() * 2.6;
    this.voice = opts.voice ?? 0.85 + rng() * 0.5; // babble pitch multiplier

    this.ctx = opts.ctx || {}; // { fx, sfx, camera, cursor }
    this.mood = 'happy';
    this.moodHold = 0;

    this._build(opts);
    this._initState();
  }

  // ---------------------------------------------------------------------------
  // Construction
  _build(opts) {
    const P = getParts();
    this.face = new FaceRenderer(
      opts.faceShape || {
        eyeDX: 0.146 + this.rng() * 0.028,
        eyeSize: 0.92 + this.rng() * 0.2,
        eyeY: 0.55 + this.rng() * 0.03,
      }
    );
    this.material = makeBodyMaterial(this.color, this.face.texture, { belly: 0.22 + this.rng() * 0.2 });
    this.limbMaterial = makeLimbMaterial(this.color);

    this.root = new THREE.Group();
    this.root.name = `critter:${this.name}`;
    this.root.userData.critter = this;
    this.root.scale.setScalar(this.size);

    this.mover = new THREE.Group();
    this.root.add(this.mover);

    // feet
    this.feet = [];
    for (const side of [1, -1]) {
      const f = new THREE.Mesh(P.foot, this.limbMaterial);
      f.castShadow = true;
      f.position.set(side * 0.19, 0, 0.16);
      f.userData.base = f.position.clone();
      f.userData.critter = this;
      this.mover.add(f);
      this.feet.push(f);
    }

    this.squash = new THREE.Group();
    this.squash.position.y = BODY.lift;
    this.mover.add(this.squash);

    this.bodyPivot = new THREE.Group();
    this.squash.add(this.bodyPivot);

    this.body = new THREE.Mesh(P.body, this.material);
    this.body.castShadow = true;
    this.body.receiveShadow = true;
    this.body.userData.critter = this;
    this.bodyPivot.add(this.body);

    // arms (pivot at the shoulder on the body surface)
    this.arms = [];
    const shoulderY = 0.4;
    const shoulderR = bodyRadiusAt(shoulderY) - 0.02;
    for (const side of [1, -1]) {
      const pivot = new THREE.Group();
      pivot.position.set(side * shoulderR, shoulderY, 0.03);
      const arm = new THREE.Mesh(P.arm, this.limbMaterial);
      arm.castShadow = true;
      arm.userData.critter = this;
      pivot.add(arm);
      pivot.userData.side = side;
      this.bodyPivot.add(pivot);
      this.arms.push(pivot);
    }

    // accessory on top
    this.topPivot = new THREE.Group();
    this.topPivot.position.set(0, BODY.height - 0.03, 0.01);
    this.bodyPivot.add(this.topPivot);
    this.leafPivots = [];
    this._buildAccessory(P);

    // held item anchor
    this.hand = new THREE.Group();
    this.hand.position.set(0, 0.36, 0.52);
    this.bodyPivot.add(this.hand);
    this.item = null;
    this.itemMode = null;

    // blob shadow
    const shadowMat = new THREE.MeshBasicMaterial({
      map: getShadowTexture(),
      transparent: true,
      depthWrite: false,
      opacity: 1,
    });
    this.shadow = new THREE.Mesh(P.shadow, shadowMat);
    this.shadow.position.y = 0.012;
    this.shadow.renderOrder = 1;
    this.shadow.userData.noAO = true;
    this.root.add(this.shadow);
  }

  _buildAccessory(P) {
    const green = new THREE.MeshStandardMaterial({ color: '#76c25e', roughness: 0.5 });
    const green2 = new THREE.MeshStandardMaterial({ color: '#8fd672', roughness: 0.45 });
    this.accessoryMaterials = [green, green2];
    const kind = this.accessory;
    if (kind === 'sprout' || kind === 'flower') {
      const stem = new THREE.Mesh(P.stem, green);
      stem.castShadow = true;
      this.topPivot.add(stem);
      const tip = new THREE.Group();
      tip.position.copy(P.stemTip);
      this.topPivot.add(tip);
      if (kind === 'sprout') {
        for (const side of [1, -1]) {
          const lp = new THREE.Group();
          lp.rotation.y = side > 0 ? 0.25 : Math.PI - 0.25;
          const leaf = new THREE.Mesh(P.leaf, side > 0 ? green2 : green);
          leaf.castShadow = true;
          leaf.rotation.z = 0.45;
          lp.add(leaf);
          lp.userData.baseZ = 0.45;
          lp.userData.side = side;
          tip.add(lp);
          this.leafPivots.push({ pivot: lp, leaf, side });
        }
      } else {
        const petalCol = this.rng() < 0.5 ? '#fff6ee' : '#ffd0e0';
        const petalMat = new THREE.MeshStandardMaterial({ color: petalCol, roughness: 0.5 });
        const centerMat = new THREE.MeshStandardMaterial({ color: '#ffcc4d', roughness: 0.6 });
        const flower = new THREE.Group();
        flower.rotation.z = -0.35;
        for (let i = 0; i < 5; i++) {
          const p = new THREE.Mesh(P.petal, petalMat);
          p.rotation.y = (i / 5) * Math.PI * 2;
          p.rotation.z = 0.18;
          p.castShadow = true;
          flower.add(p);
        }
        const c = new THREE.Mesh(P.flowerCenter, centerMat);
        c.position.y = 0.008;
        flower.add(c);
        tip.add(flower);
        this.flower = flower;
        this.accessoryMaterials.push(petalMat, centerMat);
        // one leaf on the stem
        const lp = new THREE.Group();
        lp.position.set(0.01, -0.1, 0);
        lp.rotation.y = Math.PI - 0.3;
        const leaf = new THREE.Mesh(P.leaf, green2);
        leaf.scale.setScalar(0.75);
        leaf.rotation.z = 0.5;
        lp.add(leaf);
        lp.userData.baseZ = 0.5;
        tip.add(lp);
        this.leafPivots.push({ pivot: lp, leaf, side: -1 });
      }
    } else if (kind === 'leaf') {
      const lp = new THREE.Group();
      lp.rotation.y = Math.PI / 2 + 0.2;
      const leaf = new THREE.Mesh(P.bigLeaf, green2);
      leaf.castShadow = true;
      leaf.rotation.z = 1.05;
      lp.add(leaf);
      lp.userData.baseZ = 1.05;
      this.topPivot.add(lp);
      this.leafPivots.push({ pivot: lp, leaf, side: 1 });
    } else if (kind === 'antenna') {
      const stalkMat = this.limbMaterial;
      const stalk = new THREE.Mesh(P.antennaStalk, stalkMat);
      stalk.castShadow = true;
      this.topPivot.add(stalk);
      const bobColor = new THREE.Color(this.color).offsetHSL(0.45, 0.1, 0.05);
      const bobMat = new THREE.MeshStandardMaterial({
        color: bobColor,
        roughness: 0.3,
        emissive: bobColor,
        emissiveIntensity: 0.15,
      });
      this.accessoryMaterials.push(bobMat);
      this.bobbleMat = bobMat;
      const bob = new THREE.Mesh(P.bobble, bobMat);
      bob.position.y = 0.22;
      bob.castShadow = true;
      this.topPivot.add(bob);
      this.bobble = bob;
    }
  }

  _initState() {
    this.time = rand(0, 100);
    this.vel = new THREE.Vector2();
    this.desiredVel = new THREE.Vector2();
    this.push = new THREE.Vector2();
    this.speed = 0;
    this.prevVelFwd = 0;
    this.prevVelSide = 0;
    this.yaw = new Spring(0, 2.0, 0.72);
    this.yawVel = 0;
    this.phase = 0;
    this.walkBlend = 0;
    this.hopBlend = 0;
    this.gait = 'walk';

    this.sq = new Spring(0, 4.2, 0.3);
    this.leanX = new Spring(0, 2.6, 0.32);
    this.leanZ = new Spring(0, 2.6, 0.32);
    this.sproutX = new Spring(0, 2.4, 0.16);
    this.sproutZ = new Spring(0, 2.4, 0.16);
    this.prevTop = null;
    this.prevTopVel = new THREE.Vector3();

    this.airY = 0; // physical height (dropped / held)
    this.vy = 0;
    this.held = false;
    this.falling = false;
    this.heldVel = new THREE.Vector2();

    this.actions = [];
    this.path = null;
    this.pathIndex = 0;
    this.arrive = null;
    this.faceYaw = null; // explicit heading request

    this.blinkT = rand(0.5, 3);
    this.blinkP = -1;
    this.doubleBlink = false;
    this.look = { x: 0, y: 0 };
    this.lookTarget = null;
    this.lookUntil = 0;
    this.glance = { x: 0, y: 0, t: rand(1, 3) };

    this.talkTime = 0;
    this.pokeCount = 0;
    this.pokeDecay = 0;
    this.petAmount = 0;
    this.fidgetT = rand(2, 6);
    this.fidgetsEnabled = true;
    this.stance = 'stand';
    this.seat = 0;
    this.visible = true;
    this.lastHeadingTarget = 0;
    this.faceState = defaultFaceState();
    this.flash = 0;
    this.hover = 0;
    this.hoverTarget = 0;
  }

  // ---------------------------------------------------------------------------
  // Public API
  setContext(ctx) {
    this.ctx = ctx;
  }

  get position() {
    return this.root.position;
  }

  get heading() {
    return this.yaw.x;
  }

  setHeading(a, instant = false) {
    const t = nearestAngle(this.yaw.x, a);
    this.yaw.target = t;
    if (instant) this.yaw.snap(t);
  }

  /** Face a world point (turns the body). */
  faceToward(p, instant = false) {
    const dx = p.x - this.root.position.x;
    const dz = p.z - this.root.position.z;
    if (dx * dx + dz * dz < 1e-6) return;
    this.setHeading(Math.atan2(dx, dz), instant);
  }

  /** Point the eyes at something for a while. */
  lookAt(target, seconds = 2) {
    this.lookTarget = target;
    this.lookUntil = this.time + seconds;
  }

  play(name, opts = {}) {
    const def = ACTIONS[name];
    if (!def) {
      console.warn('unknown action', name);
      return null;
    }
    const slot = def.slot || 'main';
    for (const a of this.actions) {
      if ((a.def.slot || 'main') === slot && !a.stopping) this._stopAction(a, def.blendOut ?? 0.18);
    }
    const a = {
      def,
      name,
      t: 0,
      dur: opts.duration ?? (typeof def.dur === 'function' ? def.dur(this, opts) : def.dur),
      w: 0,
      stopping: false,
      fade: 0,
      opts,
      data: {},
      fired: new Set(),
      onDone: opts.onDone,
      at(time) {
        if (this.t >= time && !this.fired.has(time)) {
          this.fired.add(time);
          return true;
        }
        return false;
      },
    };
    def.start?.(this, a);
    this.actions.push(a);
    return a;
  }

  stop(name, fade = 0.25) {
    for (const a of this.actions) if ((!name || a.name === name) && !a.stopping) this._stopAction(a, fade);
  }

  stopSlot(slot = 'main', fade = 0.2) {
    for (const a of this.actions) if ((a.def.slot || 'main') === slot && !a.stopping) this._stopAction(a, fade);
  }

  isPlaying(name) {
    return this.actions.some((a) => a.name === name && !a.stopping);
  }

  get mainAction() {
    for (let i = this.actions.length - 1; i >= 0; i--) {
      const a = this.actions[i];
      if ((a.def.slot || 'main') === 'main' && !a.stopping) return a;
    }
    return null;
  }

  get busy() {
    const a = this.mainAction;
    return !!(a && a.def.lockMove);
  }

  _stopAction(a, fade) {
    a.stopping = true;
    a.fade = Math.max(0.01, fade);
    a.def.end?.(this, a);
  }

  /** Walk along a list of {x,z} points. */
  walkPath(points, opts = {}) {
    this.path = points && points.length ? points.map((p) => new THREE.Vector2(p.x, p.z)) : null;
    this.pathIndex = 0;
    this.arrive = opts.onArrive || null;
    this.pathSpeed = opts.speed ?? 1;
    this.gait = opts.gait || (this.traits.energy > 0.82 && chance(0.4) ? 'hop' : 'walk');
    this.arriveFace = opts.face ?? null;
    if (!this.path) {
      const cb = this.arrive;
      this.arrive = null;
      cb?.(true);
    }
  }

  stopWalking() {
    this.path = null;
    this.desiredVel.set(0, 0);
  }

  get walking() {
    return !!this.path;
  }

  say(text, opts = {}) {
    const dur = opts.duration ?? Math.min(5, 0.6 + text.length * 0.055);
    this.talkTime = dur;
    this.ctx.onSay?.(this, text, { ...opts, duration: dur });
  }

  /** Hold a specific face for a while (eyes/mouth names from face.js). */
  showFace(face, seconds = 3) {
    this.faceOverride = { ...face, until: this.time + seconds };
  }

  setMood(mood, hold = 0) {
    this.mood = mood;
    this.moodHold = hold;
  }

  hold(itemObject, mode = 'front') {
    this.drop(true);
    this.item = itemObject;
    this.itemMode = mode;
    if (mode === 'overhead') this.hand.position.set(0, BODY.height + 0.18, 0.02);
    else if (mode === 'side') this.hand.position.set(0.5, 0.25, 0.18);
    else this.hand.position.set(0, 0.36, 0.5);
    this.hand.add(itemObject);
    const off = itemObject.userData.holdOffset;
    if (off && mode === 'front') itemObject.position.set(off[0], off[1], off[2]);
    else itemObject.position.set(0, 0, 0);
    itemObject.rotation.set(0, 0, 0);
  }

  drop(destroy = false) {
    if (!this.item) return null;
    const it = this.item;
    this.hand.remove(it);
    this.item = null;
    this.itemMode = null;
    if (destroy) disposeObject(it);
    return it;
  }

  /** Poke / boop reaction escalation. */
  poke() {
    this.pokeCount += 1;
    this.pokeDecay = 2.2;
    this.flash = 0.35;
    this.ctx.sfx?.('boop', { pitch: this.voice, critter: this });
    if (this.held) return;
    if (this.mainAction?.name === 'sleep') {
      // with a brain, ending the nap lets its plan continue into 'wake'
      if (this.brain) this.stop('sleep', 0.2);
      else this.play('wake');
      return;
    }
    if (this.pokeCount >= 7) {
      this.pokeCount = 0;
      this.play('grumpy');
    } else if (this.pokeCount >= 5) {
      this.play('dizzy');
    } else if (this.pokeCount >= 3) {
      this.play('giggle');
    } else {
      this.play('boop');
    }
  }

  // ---------------------------------------------------------------------------
  // Per-frame update
  update(dt) {
    dt = Math.min(dt, 1 / 20);
    this.time += dt;
    const time = this.time;

    // decay transient states
    if (this.pokeDecay > 0) {
      this.pokeDecay -= dt;
      if (this.pokeDecay <= 0) this.pokeCount = 0;
    }
    if (this.moodHold > 0) this.moodHold -= dt;
    this.talkTime = Math.max(0, this.talkTime - dt);
    this.flash = damp(this.flash, 0, 10, dt);
    this.hover = damp(this.hover, this.hoverTarget, 10, dt);

    // pose + face scratch objects
    const p = (this._pose = this._pose || makePose());
    resetPose(p);
    const moodFace = MOOD_FACES[this.mood] || MOOD_FACES.happy;
    const f = this.faceState;
    f.eyes = moodFace.eyes;
    f.mouth = moodFace.mouth;
    f.mouthOpen = moodFace.mouthOpen ?? 0.4;
    f.blush = moodFace.blush;
    f.brows = moodFace.brows || null;
    f.tear = 0;
    f.open = 1;

    this._locomotion(dt, p);
    this._lookAndBlink(dt, f);
    this._idle(dt, p, f);

    // actions ---------------------------------------------------------------
    for (let i = 0; i < this.actions.length; i++) {
      const a = this.actions[i];
      a.t += dt;
      if (a.stopping) {
        a.w -= dt / a.fade;
      } else {
        a.w = Math.min(1, a.w + dt / (a.def.fadeIn ?? 0.12));
        if (a.dur && a.t >= a.dur) {
          a.stopping = true;
          a.fade = a.def.fadeOut ?? 0.12;
          a.def.end?.(this, a);
          a.finished = true;
        }
      }
      a.w = clamp(a.w, 0, 1);
      a.def.update(this, a, p, f, dt);
    }
    for (let i = this.actions.length - 1; i >= 0; i--) {
      const a = this.actions[i];
      if (a.stopping && a.w <= 0) {
        this.actions.splice(i, 1);
        if (a.finished) a.onDone?.(this, a);
      }
    }

    this.item?.userData.update?.(dt);
    if (this._capOff && this._cap) {
      const k = Math.max(0, this._capK - dt * 2.5);
      this.nightcap(k);
      if (k <= 0) this._capOff = false;
    }

    // held item arm poses
    if (this.item && !p.armsOverride) {
      const w = 1;
      if (this.itemMode === 'overhead') {
        p.armL.z += 2.55 * w;
        p.armR.z += 2.55 * w;
        p.armL.f += 0.15;
        p.armR.f += 0.15;
      } else if (this.itemMode === 'front') {
        p.armL.f += 1.15;
        p.armR.f += 1.15;
        p.armL.z -= 0.28;
        p.armR.z -= 0.28;
      } else if (this.itemMode === 'side') {
        p.armL.z += 0.5;
        p.armL.f += 0.4;
      }
    }

    // explicit face override (studio / API): { eyes, mouth, blush, until }
    const fo = this.faceOverride;
    if (fo && this.time < fo.until) {
      if (fo.eyes) f.eyes = fo.eyes;
      if (fo.mouth) {
        f.mouth = fo.mouth;
        f.mouthOpen = fo.mouthOpen ?? 0.6;
      }
      if (fo.blush !== undefined) f.blush = fo.blush;
      if (fo.brows !== undefined) f.brows = fo.brows;
    }

    // talking mouth
    if (this.talkTime > 0 && !p.faceLocked) {
      if (f.mouth !== 'yawn' && f.mouth !== 'open') f.mouth = 'talk';
      f.mouthOpen = 0.5 + 0.5 * Math.sin(time * 19) * Math.abs(noise1(time * 6, this.seed));
      p.y += Math.abs(Math.sin(time * 9.5)) * 0.012;
    }

    this._applyPose(dt, p, f);
  }

  _locomotion(dt, p) {
    const pos = this.root.position;
    const desired = this.desiredVel.set(0, 0);
    const busy = this.busy;

    if (this.held) {
      this.path = this.path ? this.path : null;
    } else if (this.path && !busy) {
      const target = this.path[this.pathIndex];
      const dx = target.x - pos.x;
      const dz = target.y - pos.z;
      const d = Math.hypot(dx, dz);
      const last = this.pathIndex === this.path.length - 1;
      const speed = this.walkSpeed * this.pathSpeed * (this.gait === 'hop' ? 1.15 : this.gait === 'run' ? 1.8 : 1);
      if (d < (last ? 0.06 : 0.28)) {
        if (last) {
          const cb = this.arrive;
          this.path = null;
          this.arrive = null;
          if (this.arriveFace !== null && this.arriveFace !== undefined) this.setHeading(this.arriveFace);
          cb?.(true);
        } else {
          this.pathIndex++;
        }
      } else {
        // slow down on approach for a soft stop
        const slow = last ? clamp(d / 0.6, 0.25, 1) : 1;
        desired.set((dx / d) * speed * slow, (dz / d) * speed * slow);
      }
    }

    // integrate velocity with gentle acceleration (critters ease into motion)
    const accel = this.held ? 0 : 6.5;
    const prevX = this.vel.x;
    const prevY = this.vel.y;
    this.vel.x = damp(this.vel.x, desired.x, accel, dt);
    this.vel.y = damp(this.vel.y, desired.y, accel, dt);
    if (!this.held && !this.falling) {
      pos.x += (this.vel.x + this.push.x) * dt;
      pos.z += (this.vel.y + this.push.y) * dt;
    }
    this.push.multiplyScalar(Math.exp(-8 * dt));
    this.speed = this.vel.length();

    // heading follows motion (unless an action pins it)
    const yawBefore = this.yaw.x;
    if (this.speed > 0.08 && !this.held) {
      this.setHeading(Math.atan2(this.vel.x, this.vel.y));
    }
    this.yaw.update(dt);
    this.yawVel = (this.yaw.x - yawBefore) / Math.max(dt, 1e-4);
    this.root.rotation.y = this.yaw.x;

    // Blink when turning the head sharply (a classic animation touch)
    if (Math.abs(wrapAngle(this.yaw.target - this.lastHeadingTarget)) > 0.9) {
      this.lastHeadingTarget = this.yaw.target;
      if (this.blinkP < 0) this.blinkP = 0;
    }

    // local accelerations for jelly lean
    const s = Math.sin(this.yaw.x);
    const c = Math.cos(this.yaw.x);
    const fwd = this.vel.x * s + this.vel.y * c;
    const side = this.vel.x * c - this.vel.y * s;
    const aF = (fwd - this.prevVelFwd) / Math.max(dt, 1e-4);
    const aS = (side - this.prevVelSide) / Math.max(dt, 1e-4);
    this.prevVelFwd = fwd;
    this.prevVelSide = side;
    this.leanX.target = clamp(fwd * 0.07 - aF * 0.018, -0.3, 0.3);
    this.leanZ.target = clamp(aS * 0.012 + this.yawVel * fwd * 0.03, -0.25, 0.25);

    // walk cycle
    const moving = this.speed > 0.05 && !this.held;
    const turning = !moving && Math.abs(this.yawVel) > 1.2 && !this.held && !busy;
    this.walkBlend = damp(this.walkBlend, moving || turning ? 1 : 0, 9, dt);
    const hopping = this.gait === 'hop' && moving;
    this.hopBlend = damp(this.hopBlend, hopping ? 1 : 0, 7, dt);

    if (moving) {
      const stepLen = this.gait === 'hop' ? 0.5 : this.gait === 'run' ? 0.3 : 0.19;
      this.phase += (dt * Math.PI * this.speed) / stepLen;
    } else if (turning) {
      this.phase += dt * Math.PI * 4.5;
    }
    const wb = this.walkBlend * (1 - this.hopBlend);
    if (wb > 0.001) {
      const ph = this.phase;
      const sn = Math.sin(ph);
      const run = this.gait === 'run' ? 1.4 : 1;
      p.footL.y += Math.max(0, sn) * 0.08 * wb;
      p.footR.y += Math.max(0, -sn) * 0.08 * wb;
      p.footL.z += Math.cos(ph) * 0.085 * wb * run;
      p.footR.z -= Math.cos(ph) * 0.085 * wb * run;
      p.y += Math.abs(sn) * 0.035 * wb * this.bounce;
      p.sq -= (1 - Math.abs(sn)) * 0.03 * wb * this.bounce;
      p.tz += sn * 0.07 * wb;
      p.ry += sn * 0.06 * wb;
      p.armL.f += sn * 0.6 * wb * run;
      p.armR.f -= sn * 0.6 * wb * run;
      p.armL.z += 0.12 * wb;
      p.armR.z += 0.12 * wb;
      p.tx += 0.04 * wb * run;
    }
    if (this.hopBlend > 0.001) {
      const hb = this.hopBlend * this.walkBlend;
      const ph = this.phase;
      const sn = Math.abs(Math.sin(ph));
      p.y += sn * 0.2 * hb * this.bounce;
      const contact = 1 - smoothstep(0, 0.35, sn);
      p.sq += (sn * 0.1 - contact * 0.14) * hb;
      p.armL.z += (0.4 + sn * 0.9) * hb;
      p.armR.z += (0.4 + sn * 0.9) * hb;
      p.footL.y += sn * 0.03 * hb;
      p.footR.y += sn * 0.03 * hb;
      p.footL.z -= sn * 0.04 * hb;
      p.footR.z -= sn * 0.04 * hb;
      // land puff
      const prevContact = this._hopContact || false;
      const nowContact = sn < 0.12;
      if (nowContact && !prevContact && hb > 0.5) {
        this.sq.impulse(-0.6 * this.bounce);
        if (chance(0.5)) this.ctx.fx?.('dust', this.footPos(), { count: 2, size: 0.18 });
        this.ctx.sfx?.('step', { critter: this, soft: true });
      }
      this._hopContact = nowContact;
    }

    // tiny footstep taps
    if (wb > 0.5 && moving) {
      const stepIdx = Math.floor(this.phase / Math.PI);
      if (stepIdx !== this._lastStep) {
        this._lastStep = stepIdx;
        this.ctx.sfx?.('step', { critter: this });
      }
    }

    // physical fall / drag
    if (this.held) {
      this.airY = damp(this.airY, this.heldHeight ?? 1.1, 10, dt);
    } else if (this.falling || this.airY > 0.0001) {
      this.vy -= 18 * dt;
      this.airY += this.vy * dt;
      if (this.airY <= 0) {
        const impact = Math.abs(this.vy);
        this.airY = 0;
        this.falling = false;
        if (impact > 1.2 || this._bigFall) {
          this.sq.impulse(-Math.min(4, impact * 0.55));
          this.ctx.fx?.('dust', this.footPos(), { count: 5, size: 0.3 });
          this.ctx.sfx?.('land', { critter: this, strength: impact });
          if (impact > 3 && !this._bigFall) {
            this.vy = impact * 0.22; // one little bounce
            this.airY = 0.0001;
            this.falling = true;
            this._bigFall = true;
          } else {
            this.play(this._bigFall && chance(0.35) ? 'dizzy' : 'land');
            this._bigFall = false;
          }
        }
        if (!this.falling) this.vy = 0;
      }
    }
  }

  _lookAndBlink(dt, f) {
    const time = this.time;
    // blink
    this.blinkT -= dt;
    if (this.blinkT <= 0 && this.blinkP < 0) {
      this.blinkP = 0;
      this.doubleBlink = chance(0.18);
      this.blinkT = this.blinkEvery * rand(0.6, 1.4);
    }
    if (this.blinkP >= 0) {
      this.blinkP += dt / 0.15;
      const b = this.blinkP;
      f.open = b < 0.5 ? 1 - b * 2 : Math.min(1, (b - 0.5) * 2);
      if (b >= 1) {
        if (this.doubleBlink) {
          this.doubleBlink = false;
          this.blinkP = -0.25; // short gap, then blink again
        } else this.blinkP = -1;
      }
    }
    if (this.blinkP < 0 && this.blinkP > -1) {
      this.blinkP += dt / 0.08;
      if (this.blinkP >= 0) this.blinkP = 0;
      f.open = 1;
    }

    // look target -> eye offsets (eyes lead, body follows)
    let tx = 0;
    let ty = 0;
    let target = null;
    if (this.lookTarget && time < this.lookUntil) {
      target = this.lookTarget.isVector3 ? this.lookTarget : this.lookTarget.position || null;
      if (this.lookTarget.root) target = _v2.copy(this.lookTarget.root.position).setY(this.lookTarget.root.position.y + 0.6);
    } else {
      this.lookTarget = null;
    }
    if (target) {
      _v.copy(target).sub(this.root.position);
      const ang = wrapAngle(Math.atan2(_v.x, _v.z) - this.yaw.x);
      const horiz = Math.hypot(_v.x, _v.z);
      const vert = Math.atan2(_v.y - 0.6 * this.size - this.airY, Math.max(0.2, horiz));
      tx = clamp(ang / 0.9, -1, 1);
      ty = clamp(vert / 0.7, -1, 1);
      // turn the whole body if it has to look far away and isn't busy walking
      if (Math.abs(ang) > 0.85 && !this.path && !this.busy && !this.held && this.faceFollow !== false) {
        this.setHeading(this.yaw.x + ang * 0.85);
      }
    } else {
      this.glance.t -= dt;
      if (this.glance.t <= 0) {
        this.glance.t = rand(0.8, 3.2);
        if (chance(0.45)) {
          this.glance.x = 0;
          this.glance.y = 0;
        } else {
          this.glance.x = rand(-0.8, 0.8);
          this.glance.y = rand(-0.4, 0.5);
        }
      }
      tx = this.glance.x;
      ty = this.glance.y;
      if (this.speed > 0.1) {
        tx *= 0.3;
        ty = -0.15;
      }
    }
    // saccade: quick, snappy eye motion
    this.look.x = damp(this.look.x, tx, 22, dt);
    this.look.y = damp(this.look.y, ty, 22, dt);
    f.lookX = this.look.x;
    f.lookY = this.look.y;
  }

  _idle(dt, p, f) {
    const t = this.time;
    const act = this.mainAction?.name;
    // breathing + soft organic sway
    const breath = act === 'sleep' ? 0 : 1;
    p.sq += Math.sin(t * 2.3 + this.seed) * 0.014 * breath;
    p.tz += noise1(t * 0.35, this.seed) * 0.025;
    p.tx += noise1(t * 0.28, this.seed + 7) * 0.015;

    // bob along when there's music (everyone has their own groove)
    if (this.ctx.musicOn?.() && !this.held && act !== 'sleep' && act !== 'dance') {
      const b = this.ctx.beat() * Math.PI;
      const k = 0.5 + this.traits.energy * 0.8;
      p.tx += Math.abs(Math.sin(b)) * 0.035 * k;
      p.y += Math.abs(Math.sin(b)) * 0.008 * k;
      p.sproutZ += Math.sin(b * 0.5) * 0.15 * k;
    }
    // a bit shy when you hover over them
    f.blush += this.hover * 0.35;
    // sleepy ones droop
    if (this.mood === 'sleepy') {
      p.droop += 0.45;
      p.sq -= 0.02;
    }
    // little face quirks: a cat smile, a humming 'o', a tongue blep
    this.quirkT = (this.quirkT ?? rand(4, 10)) - dt;
    if (this.quirkT <= 0) {
      this.quirkT = rand(6, 16);
      const mouth = pickWeighted([
        ['cat', 3],
        ['tongue', 1.2 + this.traits.energy],
        ['o', 1],
        ['smile', 1],
      ]);
      this.quirk = { mouth, until: t + rand(1.2, 2.6) };
    }
    const cheerful = this.mood === 'happy' || this.mood === 'content' || this.mood === 'curious';
    if (this.quirk && t < this.quirk.until && !act && this.talkTime <= 0 && cheerful) {
      f.mouth = this.quirk.mouth;
      if (this.quirk.mouth === 'o') f.mouthOpen = 0.12;
    }

    // random fidgets when idle & free
    if (!this.fidgetsEnabled) return;
    const free = !this.path && !this.held && !this.falling && !this.mainAction && this.speed < 0.05;
    if (free) {
      this.fidgetT -= dt;
      if (this.fidgetT <= 0) {
        this.fidgetT = rand(3, 8);
        this.fidget();
      }
    }
  }

  fidget() {
    const tr = this.traits;
    const options = [
      ['lookAround', 1 + tr.curiosity * 2],
      ['tilt', 0.6 + tr.curiosity * 1.5],
      ['hop', 0.3 + tr.energy * 1.2],
      ['scratch', 0.7],
      ['hum', 0.6 + tr.chattiness],
      ['wiggle', 0.5 + tr.energy * 0.8],
      ['yawn', tr.sleepiness * 1.2],
      ['stretch', 0.35 + tr.sleepiness * 0.5],
      ['hiccup', 0.18],
      ['sneeze', 0.12],
      ['tapFoot', 0.3],
      ['blinkSlow', 0.4],
    ];
    let total = 0;
    for (const [, w] of options) total += w;
    let r = Math.random() * total;
    for (const [name, w] of options) {
      r -= w;
      if (r <= 0) {
        this.play(name);
        return name;
      }
    }
    return null;
  }

  /** A floppy nightcap for naps. k: 0 hidden .. 1 on. */
  nightcap(k) {
    if (!this._cap && k <= 0.01) return;
    if (!this._cap) {
      const capCol = new THREE.Color(this.color).offsetHSL(0.5, -0.15, 0.08);
      const capMat = new THREE.MeshStandardMaterial({ color: capCol, roughness: 0.9 });
      const stripe = new THREE.MeshStandardMaterial({ color: '#fff7ec', roughness: 0.95 });
      const cap = new THREE.Group();
      // brim
      const brim = new THREE.Mesh(new THREE.TorusGeometry(0.245, 0.06, 10, 32), stripe);
      brim.rotation.x = Math.PI / 2;
      cap.add(brim);
      // floppy cone, built from a few segments so the tip can droop
      const segs = [];
      let parent = cap;
      const radii = [0.26, 0.18, 0.11, 0.05];
      for (let i = 0; i < 3; i++) {
        const seg = new THREE.Group();
        seg.position.y = i === 0 ? 0 : 0.16;
        const m = new THREE.Mesh(new THREE.CylinderGeometry(radii[i + 1], radii[i], 0.17, 18, 1, true), i === 1 ? stripe : capMat);
        m.position.y = 0.085;
        m.material.side = THREE.DoubleSide;
        seg.add(m);
        // round knuckle so the bends never show a gap
        const joint = new THREE.Mesh(new THREE.SphereGeometry(radii[i + 1], 14, 10), i === 1 ? stripe : capMat);
        joint.position.y = 0.17;
        seg.add(joint);
        parent.add(seg);
        segs.push(seg);
        parent = seg;
      }
      const pom = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), stripe);
      pom.position.y = 0.18;
      parent.add(pom);
      cap.traverse((o) => o.isMesh && (o.castShadow = true));
      cap.position.set(0.02, BODY.height - 0.17, -0.02);
      cap.rotation.z = -0.16;
      cap.rotation.x = -0.08;
      this.bodyPivot.add(cap);
      this._cap = cap;
      this._capSegs = segs;
      this._capK = 0;
    }
    this._capK = k;
    const s = Math.max(0.001, k);
    this._cap.scale.setScalar(s);
    this._cap.visible = k > 0.01;
    // the tip flops with the body's motion
    const flop = 0.62 + this.sproutZ.x * 0.6 + Math.sin(this.time * 1.3) * 0.04;
    this._capSegs.forEach((seg, i) => {
      if (i > 0) {
        seg.rotation.z = -flop * (0.45 + i * 0.4);
        seg.rotation.x = this.sproutX.x * 0.3;
      }
    });
    if (this.topPivot) this.topPivot.visible = k < 0.5;
  }

  /** The classic sleep bubble. scale 0 hides it. */
  noseBubble(scale) {
    if (!this._bubble) {
      if (!bubbleMat) {
        bubbleMat = new THREE.MeshStandardMaterial({ color: '#d6f1ff', transparent: true, opacity: 0.5, roughness: 0.05, envMapIntensity: 1.4, depthWrite: false });
        bubbleGeo = new THREE.SphereGeometry(1, 20, 14);
      }
      const b = new THREE.Mesh(bubbleGeo, bubbleMat);
      b.userData.noAO = true;
      b.renderOrder = 3;
      this.bodyPivot.add(b);
      this._bubble = b;
    }
    const b = this._bubble;
    const r = 0.085 * scale;
    b.visible = scale > 0.02;
    b.scale.setScalar(Math.max(0.001, r));
    b.position.set(0.1, 0.5, bodyRadiusAt(0.5) - 0.03 + r * 0.85);
  }

  footPos(out = new THREE.Vector3()) {
    return out.copy(this.root.position).setY(this.root.position.y + 0.03);
  }

  headPos(out = new THREE.Vector3(), extra = 0) {
    // top of the head in world space (ignores tiny pose offsets on purpose)
    this.root.updateWorldMatrix(true, false);
    out.set(0, BODY.lift + BODY.height + 0.12 + extra + this.mover.position.y, 0);
    return this.root.localToWorld(out);
  }

  facePos(out = new THREE.Vector3(), forward = 0.55, up = 0.55) {
    this.root.updateWorldMatrix(true, false);
    out.set(0, up + this.mover.position.y, forward);
    return this.root.localToWorld(out);
  }

  _applyPose(dt, p, f) {
    const time = this.time;

    // seat + stance
    this.mover.position.y = this.airY + p.y + p.seat + this.seat;
    this.mover.rotation.x = p.rx;
    this.mover.rotation.z = p.rz;
    this.mover.rotation.y = p.spin;

    // squash spring
    this.sq.target = p.sq;
    const sqv = this.sq.update(dt);
    const sy = clamp(1 + sqv, 0.55, 1.5);
    const sxz = 1 / Math.sqrt(sy);
    this.squash.scale.set(sxz * (1 + p.sx), sy, sxz * (1 + p.sx * 0.6));

    // jelly lean springs added on top of pose tilt
    this.leanX.update(dt);
    this.leanZ.update(dt);
    this.bodyPivot.rotation.set(p.tx + this.leanX.x, p.ry, p.tz + this.leanZ.x, 'YXZ');

    // arms (f = forward swing, z = raise outward)
    for (const arm of this.arms) {
      const side = arm.userData.side;
      const a = side > 0 ? p.armL : p.armR;
      arm.rotation.set(-a.f, 0, side * (0.22 + a.z), 'XYZ');
    }

    // feet
    for (let i = 0; i < 2; i++) {
      const foot = this.feet[i];
      const fo = i === 0 ? p.footL : p.footR;
      const b = foot.userData.base;
      foot.position.set(b.x + fo.x, b.y + fo.y, b.z + fo.z);
      foot.rotation.x = fo.rx || 0;
    }

    // sprout: secondary motion from the motion of the head top
    this.topPivot.updateWorldMatrix(true, false);
    const top = _v.setFromMatrixPosition(this.topPivot.matrixWorld);
    if (!this.prevTop) this.prevTop = top.clone();
    const vel = _v2.copy(top).sub(this.prevTop).divideScalar(Math.max(dt, 1e-4));
    const acc = vel.clone().sub(this.prevTopVel).divideScalar(Math.max(dt, 1e-4));
    this.prevTopVel.copy(vel);
    this.prevTop.copy(top);
    // to local (yaw only)
    const s = Math.sin(this.yaw.x);
    const c = Math.cos(this.yaw.x);
    const aF = clamp(acc.x * s + acc.z * c, -60, 60);
    const aS = clamp(acc.x * c - acc.z * s, -60, 60);
    const aY = clamp(acc.y, -80, 80);
    const k = 0.0045;
    this.sproutX.impulse(aF * k * dt * 60 * 0.6);
    this.sproutZ.impulse(-aS * k * dt * 60 * 0.6);
    const tilt = this.bodyPivot.rotation;
    this.sproutX.target = -tilt.x * 0.55 + p.droop * 0.9 + p.sproutX;
    this.sproutZ.target = -tilt.z * 0.55 + p.sproutZ;
    this.sproutX.update(dt);
    this.sproutZ.update(dt);
    this.topPivot.rotation.set(clamp(this.sproutX.x, -1.2, 1.4), 0, clamp(this.sproutZ.x, -1.1, 1.1));
    const flutter = clamp(-aY * 0.004, -0.5, 0.5);
    for (const lp of this.leafPivots) {
      lp.pivot.rotation.z = lp.pivot.userData.baseZ + flutter + Math.sin(time * 2.2 + lp.side) * 0.04 - p.droop * 0.5;
      lp.leaf.rotation.x = this.sproutZ.v * 0.04 * lp.side;
    }
    if (this.flower) this.flower.rotation.y += dt * (0.2 + Math.abs(this.sproutZ.v) * 0.5);

    // body glow / poke flash
    const u = this.material.userData.uniforms;
    u.uFlash.value = this.flash * 0.6;
    u.uGlow.value = this.hover * 0.35;

    // shadow
    const h = Math.max(0, this.mover.position.y);
    const sh = 1 - clamp(h * 0.35, 0, 0.55);
    this.shadow.scale.set(sh * (1 + p.sx * 0.5), 1, sh);
    this.shadow.material.opacity = 1 - clamp(h * 0.45, 0, 0.65);
    this.shadow.rotation.y = -p.spin;

    // face
    f.spin = time * 4;
    this.face.update(f);
  }

  dispose() {
    this.drop(true);
    this.face.texture.dispose();
    this.material.dispose();
    this.limbMaterial.dispose();
    this.shadow.material.dispose();
    for (const m of this.accessoryMaterials) m.dispose();
  }
}

function makePose() {
  return {
    y: 0,
    rx: 0,
    rz: 0,
    tx: 0,
    tz: 0,
    ry: 0,
    spin: 0,
    sq: 0,
    sx: 0,
    seat: 0,
    droop: 0,
    sproutX: 0,
    sproutZ: 0,
    armL: { f: 0, z: 0 },
    armR: { f: 0, z: 0 },
    footL: { x: 0, y: 0, z: 0, rx: 0 },
    footR: { x: 0, y: 0, z: 0, rx: 0 },
    faceLocked: false,
    armsOverride: false,
  };
}

function resetPose(p) {
  p.y = p.rx = p.rz = p.tx = p.tz = p.ry = p.spin = p.sq = p.sx = p.seat = p.droop = 0;
  p.sproutX = p.sproutZ = 0;
  p.armL.f = p.armL.z = p.armR.f = p.armR.z = 0;
  p.footL.x = p.footL.y = p.footL.z = p.footL.rx = 0;
  p.footR.x = p.footR.y = p.footR.z = p.footR.rx = 0;
  p.faceLocked = false;
  p.armsOverride = false;
}

export function disposeObject(obj) {
  obj.traverse((o) => {
    if (o.geometry && !o.geometry.userData?.shared) o.geometry.dispose?.();
  });
}

export { MOOD_FACES, lerp };
