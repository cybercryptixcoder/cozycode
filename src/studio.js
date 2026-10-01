// Critter Studio: the sproutling on its own little stage, so the character
// (look, face, every animation) can be explored by itself.
import './ui/studio.css';
import * as THREE from 'three';
import { Engine } from './core/engine.js';
import { sound } from './core/audio.js';
import { Critter, PALETTE, ACCESSORIES } from './critters/critter.js';
import { SHOWCASE } from './critters/actions.js';
import { FX } from './gfx/fx.js';
import { Interaction } from './world/interact.js';
import { makeItem } from './world/items.js';
import { mat } from './gfx/materials.js';
import { rcyl, mesh } from './gfx/geo.js';
import { damp, clamp, rand, pick, TAU } from './core/util.js';
import { iconDataURL } from './gfx/icons.js';

const NAMES = ['Mochi', 'Pip', 'Tofu', 'Nori', 'Biscuit', 'Sprig', 'Dumpling', 'Pebble'];
const STAGE_R = 2.3;

async function main() {
  await document.fonts?.load?.('600 20px Fredoka').catch(() => {});
  const app = document.getElementById('app');
  const engine = new Engine(app, { fov: 28 });
  const { scene, camera } = engine;
  engine.renderer.toneMapping = THREE.NeutralToneMapping;
  engine.renderer.toneMappingExposure = 1.0;

  // background
  scene.background = gradientTexture(['#fde7d8', '#f9d9e3', '#e7dcf6']);

  // lights
  const hemi = new THREE.HemisphereLight('#fff4ea', '#d9b8a8', 1.25);
  scene.add(hemi);
  const key = new THREE.DirectionalLight('#fff1e0', 2.4);
  key.position.set(-3.5, 6.5, 4.5);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.left = -4;
  key.shadow.camera.right = 4;
  key.shadow.camera.top = 4;
  key.shadow.camera.bottom = -4;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 20;
  key.shadow.radius = 4;
  key.shadow.bias = -0.0005;
  key.shadow.normalBias = 0.02;
  scene.add(key);
  const rim = new THREE.DirectionalLight('#c9dcff', 1.1);
  rim.position.set(3, 3, -5);
  scene.add(rim);

  // stage
  const stage = new THREE.Group();
  scene.add(stage);
  const top = mesh(rcyl(STAGE_R, 0.36, 0.12, 64), mat('#fff6ec', { roughness: 0.85 }), { pos: [0, -0.18, 0] });
  top.castShadow = false;
  stage.add(top);
  const rimRing = mesh(rcyl(STAGE_R + 0.08, 0.3, 0.1, 64), mat('#f6b8a4', { roughness: 0.7 }), { pos: [0, -0.36, 0] });
  rimRing.castShadow = false;
  stage.add(rimRing);
  const base = mesh(rcyl(STAGE_R - 0.2, 0.5, 0.15, 64), mat('#eea08c', { roughness: 0.8 }), { pos: [0, -0.68, 0] });
  base.castShadow = false;
  stage.add(base);

  const fx = new FX(scene);
  const critters = [];

  const ctx = {
    fx: (type, pos, opts) => fx.spawn(type, pos, opts),
    sfx: (name, opts) => sound.play(name, opts),
    camera,
    beat: () => sound.beat(),
    musicOn: () => sound.musicOn && !!sound.ctx,
    makeItem: (kind) => makeItem(kind),
    onSay: (c, text) => {
      sound.babble(text, c.voice);
      showBubble(c, text);
    },
  };

  function addCritter(opts = {}) {
    const c = new Critter({ ctx, name: opts.name || NAMES[critters.length % NAMES.length], ...opts });
    scene.add(c.root);
    critters.push(c);
    return c;
  }

  const hero = addCritter({
    name: 'Mochi',
    color: '#ffb18f',
    accessory: 'sprout',
    seed: 7,
    traits: { energy: 0.6, curiosity: 0.8, sociability: 0.8, sleepiness: 0.4, clumsiness: 0.5, chattiness: 0.7 },
    faceShape: { eyeDX: 0.156, eyeSize: 1.04, eyeY: 0.56 },
  });
  hero.setHeading(0, true);

  // camera orbit
  const orbit = { az: 0.35, el: 0.32, dist: 6.2, taz: 0.35, tel: 0.32, tdist: 6.2, target: new THREE.Vector3(0, 0.62, 0) };
  let dragging = null;
  const dom = engine.renderer.domElement;

  const interaction = new Interaction({
    dom,
    camera,
    getCritters: () => critters,
    clampPos: (x, z) => {
      const r = Math.hypot(x, z);
      const max = STAGE_R - 0.45;
      if (r > max) return [(x / r) * max, (z / r) * max];
      return [x, z];
    },
    onClickCritter: (c) => select(c),
    sound,
  });

  dom.addEventListener('pointerdown', (e) => {
    sound.unlock();
    if (interaction.captured) return;
    dragging = { x: e.clientX, y: e.clientY, az: orbit.taz, el: orbit.tel };
  });
  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    orbit.taz = dragging.az - (e.clientX - dragging.x) * 0.008;
    orbit.tel = clamp(dragging.el + (e.clientY - dragging.y) * 0.005, 0.02, 1.2);
  });
  window.addEventListener('pointerup', () => (dragging = null));
  dom.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      orbit.tdist = clamp(orbit.tdist * (1 + Math.sign(e.deltaY) * 0.08), 2.4, 11);
    },
    { passive: false }
  );

  // wander mode
  let wander = false;
  function wanderTick(c) {
    if (c.walking || c.busy || c.held || c.falling) return;
    if (c._wanderWait > 0) return;
    const a = rand(0, TAU);
    const r = rand(0.2, STAGE_R - 0.6);
    c.walkPath([{ x: Math.cos(a) * r, z: Math.sin(a) * r }], {
      onArrive: () => {
        c._wanderWait = rand(1.5, 4);
        if (Math.random() < 0.4) c.fidget();
      },
    });
  }

  // selected critter (target of the buttons)
  let selected = hero;
  function select(c) {
    selected = c;
    for (const x of critters) x.material.userData.uniforms.uGlow.value = 0;
    updatePanel();
  }

  // speech bubbles
  const bubbleLayer = document.getElementById('bubbles');
  const bubbles = new Map();
  function showBubble(c, text) {
    let b = bubbles.get(c);
    if (!b) {
      b = document.createElement('div');
      b.className = 'bubble';
      bubbleLayer.appendChild(b);
      bubbles.set(c, b);
    }
    b.textContent = text;
    b.classList.add('show');
    clearTimeout(b._t);
    b._t = setTimeout(() => b.classList.remove('show'), 2600 + text.length * 40);
  }

  // UI ------------------------------------------------------------------------
  const panel = document.getElementById('actions');
  for (const [group, names] of Object.entries(SHOWCASE)) {
    const sec = document.createElement('section');
    sec.innerHTML = `<h3>${group}</h3>`;
    const wrap = document.createElement('div');
    wrap.className = 'btns';
    for (const n of names) {
      const btn = document.createElement('button');
      btn.textContent = label(n);
      btn.onclick = () => {
        sound.unlock();
        sound.play('click');
        const c = selected;
        if (['type', 'tinker', 'read', 'write', 'water', 'stamp', 'gaze', 'sit', 'sleep', 'dance'].includes(n)) {
          if (c.isPlaying(n)) {
            c.stop(n);
            btn.classList.remove('on');
            return;
          }
          c.stopWalking();
          c.play(n, n === 'sit' ? { seat: 0 } : {});
          wrap.querySelectorAll('button.on').forEach((b) => b.classList.remove('on'));
          btn.classList.add('on');
        } else {
          c.stopSlot('main', 0.15);
          wrap.querySelectorAll('button.on').forEach((b) => b.classList.remove('on'));
          if (n === 'trip') {
            // trips happen while walking
            const a = c.heading;
            c.walkPath([{ x: c.position.x + Math.sin(a) * 0.5, z: c.position.z + Math.cos(a) * 0.5 }]);
            setTimeout(() => c.play('trip'), 250);
          } else c.play(n);
        }
      };
      wrap.appendChild(btn);
    }
    sec.appendChild(wrap);
    panel.appendChild(sec);
  }
  {
    const sec = document.createElement('section');
    sec.innerHTML = '<h3>Talk</h3>';
    const wrap = document.createElement('div');
    wrap.className = 'btns';
    const lines = ['hi hi!', 'I had an idea!!', 'is it snack time?', 'mmm… cozy.', 'look what I made!', 'oh no…'];
    for (const line of lines) {
      const btn = document.createElement('button');
      btn.textContent = `“${line}”`;
      btn.onclick = () => {
        sound.unlock();
        selected.say(line);
        selected.play('talk');
        setTimeout(() => selected.stop('talk'), 2400);
      };
      wrap.appendChild(btn);
    }
    sec.appendChild(wrap);
    panel.appendChild(sec);
  }

  {
    // every eye shape and mouth, to look at the face set on its own
    const sec = document.createElement('section');
    sec.innerHTML = '<h3>Eyes</h3>';
    const eyes = document.createElement('div');
    eyes.className = 'btns';
    for (const e of ['normal', 'happy', 'closed', 'squint', 'wide', 'dot', 'star', 'heart', 'dizzy', 'sleepy', 'sad', 'angry', 'focus', 'wink']) {
      const b = document.createElement('button');
      b.textContent = e;
      b.onclick = () => {
        sound.unlock();
        selected.showFace({ eyes: e }, 3.5);
      };
      eyes.appendChild(b);
    }
    sec.appendChild(eyes);
    const h = document.createElement('h3');
    h.textContent = 'Mouths';
    sec.appendChild(h);
    const mouths = document.createElement('div');
    mouths.className = 'btns';
    for (const m of ['smile', 'cat', 'o', 'open', 'grin', 'yawn', 'flat', 'wobble', 'frown', 'tongue', 'pout']) {
      const b = document.createElement('button');
      b.textContent = m;
      b.onclick = () => {
        sound.unlock();
        selected.showFace({ mouth: m }, 3.5);
      };
      mouths.appendChild(b);
    }
    sec.appendChild(mouths);
    panel.appendChild(sec);
  }

  // look panel
  const look = document.getElementById('look');
  const swatches = look.querySelector('.swatches');
  for (const p of PALETTE) {
    const b = document.createElement('button');
    b.className = 'swatch';
    b.style.background = p.color;
    b.title = p.name;
    b.onclick = () => rebuild(selected, { color: p.color });
    swatches.appendChild(b);
  }
  const acc = look.querySelector('.accessories');
  for (const a of ACCESSORIES) {
    const b = document.createElement('button');
    b.textContent = a;
    b.onclick = () => rebuild(selected, { accessory: a });
    acc.appendChild(b);
  }
  const moods = look.querySelector('.moods');
  for (const m of ['happy', 'content', 'excited', 'curious', 'focused', 'sleepy', 'shy', 'sad', 'grumpy']) {
    const b = document.createElement('button');
    b.textContent = m;
    b.onclick = () => {
      selected.setMood(m, 999);
      moods.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
    };
    moods.appendChild(b);
  }

  function rebuild(c, changes) {
    const idx = critters.indexOf(c);
    const pos = c.position.clone();
    const heading = c.heading;
    scene.remove(c.root);
    c.dispose();
    const n = new Critter({
      ctx,
      name: c.name,
      seed: c.seed,
      color: changes.color ?? c.color,
      accessory: changes.accessory ?? c.accessory,
      traits: c.traits,
      faceShape: c.face.shape,
      size: c.size,
    });
    n.root.position.copy(pos);
    n.setHeading(heading, true);
    scene.add(n.root);
    critters[idx] = n;
    if (selected === c) selected = n;
    n.play('hop');
    sound.play('pop');
    updatePanel();
  }

  document.getElementById('friends').onclick = () => {
    sound.unlock();
    if (critters.length >= 5) return;
    const c = addCritter({ name: NAMES[critters.length] });
    const a = rand(0, TAU);
    c.root.position.set(Math.cos(a) * 1.4, 0, Math.sin(a) * 1.4);
    c.airY = 2.5;
    c.falling = true;
    sound.play('spawn');
    fx.spawn('sparkle', c.root.position.clone().setY(0.6), { count: 6 });
  };
  const wanderBtn = document.getElementById('wander');
  wanderBtn.onclick = () => {
    wander = !wander;
    wanderBtn.classList.toggle('on', wander);
    if (!wander) critters.forEach((c) => c.stopWalking());
  };
  const soundBtn = document.getElementById('sound');
  soundBtn.onclick = () => {
    sound.unlock();
    sound.setSfx(!sound.sfxOn);
    sound.setMusic(sound.sfxOn);
    soundBtn.classList.toggle('off', !sound.sfxOn);
  };

  const nameEl = document.getElementById('name');
  const portrait = document.getElementById('portrait');
  function updatePanel() {
    nameEl.textContent = selected.name;
    const t = selected.traits;
    document.getElementById('traits').innerHTML = Object.entries(t)
      .map(([k, v]) => `<div class="trait"><span>${k}</span><i style="--v:${(v * 100).toFixed(0)}%"></i></div>`)
      .join('');
  }
  updatePanel();

  document.getElementById('hint-heart').src = iconDataURL('heart');

  // loop -----------------------------------------------------------------------
  engine.add((dt) => {
    orbit.az = damp(orbit.az, orbit.taz, 8, dt);
    orbit.el = damp(orbit.el, orbit.tel, 8, dt);
    orbit.dist = damp(orbit.dist, orbit.tdist, 8, dt);
    // gentle focus on the selected critter
    if (!orbit.lock) {
      const ft = selected.position.clone();
      ft.y = 0.62 + selected.mover.position.y * 0.5;
      orbit.target.lerp(ft, 1 - Math.exp(-3 * dt));
    }
    // portrait screens: back off and frame the critter above the panel
    const portrait = camera.aspect < 0.9;
    const dist = orbit.dist * (portrait ? 1.55 / Math.max(0.5, camera.aspect) * 0.62 : 1);
    const look = orbit.target.clone();
    if (portrait) look.y -= 0.9;
    camera.position.set(
      look.x + Math.sin(orbit.az) * Math.cos(orbit.el) * dist,
      look.y + 0.9 * (portrait ? 1 : 0) + Math.sin(orbit.el) * dist,
      look.z + Math.cos(orbit.az) * Math.cos(orbit.el) * dist
    );
    camera.lookAt(look);

    interaction.update(dt);
    for (const c of critters) {
      if (wander || c !== selected) {
        c._wanderWait = (c._wanderWait || 0) - dt;
        if (wander || critters.length > 1) wanderTick(c);
      }
      // keep everyone on the stage
      const r = Math.hypot(c.position.x, c.position.z);
      if (r > STAGE_R - 0.4 && !c.held) {
        c.position.x *= (STAGE_R - 0.4) / r;
        c.position.z *= (STAGE_R - 0.4) / r;
      }
      c.update(dt);
    }
    // soft separation between friends
    for (let i = 0; i < critters.length; i++)
      for (let j = i + 1; j < critters.length; j++) {
        const a = critters[i];
        const b = critters[j];
        const dx = b.position.x - a.position.x;
        const dz = b.position.z - a.position.z;
        const d = Math.hypot(dx, dz);
        if (d > 0.001 && d < 0.95 && !a.held && !b.held) {
          const push = (0.95 - d) * 0.5;
          a.position.x -= (dx / d) * push;
          a.position.z -= (dz / d) * push;
          b.position.x += (dx / d) * push;
          b.position.z += (dz / d) * push;
        }
      }
    fx.update(dt);

    // bubbles follow heads
    const rect = dom.getBoundingClientRect();
    for (const [c, b] of bubbles) {
      const p = c.headPos(new THREE.Vector3(), 0.25).project(camera);
      b.style.transform = `translate(${(p.x * 0.5 + 0.5) * rect.width}px, ${(-p.y * 0.5 + 0.5) * rect.height}px) translate(-50%, -100%)`;
    }
    portraitTick(dt);
  });

  let portraitT = 0;
  function portraitTick(dt) {
    portraitT -= dt;
    if (portraitT > 0) return;
    portraitT = 0.25;
    selected.face.drawPortrait(portrait, selected.color, selected.faceState);
  }

  engine.start();
  window.cozyStudio = { engine, critters, sound, fx, orbit, get selected() { return selected; } };
  window.__step = (n = 1) => {
    engine.stop();
    engine.step(1 / 60, n);
  };
  document.body.classList.add('ready');
}

function label(n) {
  return n.replace(/([A-Z])/g, ' $1').toLowerCase();
}

function gradientTexture(stops) {
  const c = document.createElement('canvas');
  c.width = 4;
  c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 256);
  stops.forEach((s, i) => grd.addColorStop(i / (stops.length - 1), s));
  g.fillStyle = grd;
  g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

main().catch((err) => {
  console.error(err);
  document.body.insertAdjacentHTML('beforeend', `<pre class="fatal">${String(err && err.stack ? err.stack : err)}</pre>`);
});
