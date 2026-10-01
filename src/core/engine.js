// Renderer, post-processing and the main loop.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/** GTAO that ignores sprites, shadow proxies and anything tagged noAO. */
class CozyAOPass extends GTAOPass {
  _overrideVisibility() {
    const cache = this._visibilityCache;
    this.scene.traverse((o) => {
      if (o.visible && (o.isPoints || o.isLine || o.isSprite || o.userData.noAO)) {
        o.visible = false;
        cache.push(o);
      }
    });
  }
}

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uVignette: { value: 0.32 },
    uWarm: { value: new THREE.Vector3(1.02, 1.0, 0.96) },
    uLift: { value: new THREE.Vector3(0.012, 0.008, 0.02) },
    uSat: { value: 1.06 },
    uTime: { value: 0 },
    uRes: { value: new THREE.Vector2(1, 1) },
    uTiltShift: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uVignette;
    uniform vec3 uWarm;
    uniform vec3 uLift;
    uniform float uSat;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uTiltShift;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 col = texture2D(tDiffuse, vUv);
      if (uTiltShift > 0.0) {
        // cheap miniature blur toward the top & bottom of the frame
        float band = smoothstep(0.18, 0.5, abs(vUv.y - 0.47)) * uTiltShift;
        if (band > 0.01) {
          vec2 px = band * 2.2 / uRes;
          vec4 acc = col * 0.2;
          acc += texture2D(tDiffuse, vUv + vec2( px.x,  px.y)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2(-px.x,  px.y)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2( px.x, -px.y)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2(-px.x, -px.y)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2( 2.0*px.x, 0.0)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2(-2.0*px.x, 0.0)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2(0.0,  2.0*px.y)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2(0.0, -2.0*px.y)) * 0.1;
          col = acc;
        }
      }
      vec3 c = col.rgb * uWarm + uLift * (1.0 - col.rgb);
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, uSat);
      vec2 d = vUv - 0.5;
      d.x *= uRes.x / uRes.y * 0.75;
      float v = smoothstep(0.95, 0.25, length(d));
      c *= mix(1.0 - uVignette, 1.0, v);
      c += (hash(vUv * uRes + uTime) - 0.5) / 255.0; // dither, kills banding
      gl_FragColor = vec4(c, col.a);
    }
  `,
};

export class Engine {
  constructor(container, opts = {}) {
    this.container = container;
    this.quality = opts.quality || detectQuality();
    this.direct = opts.post === false; // render straight to screen, no post stack
    const renderer = (this.renderer = new THREE.WebGLRenderer({
      antialias: this.direct || this.quality === 'low',
      preserveDrawingBuffer: !!opts.preserveDrawingBuffer,
      powerPreference: 'high-performance',
      alpha: false,
    }));
    renderer.setPixelRatio(this._pixelRatio());
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.AgXToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.classList.add('gl');
    container.appendChild(renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(opts.fov ?? 30, 1, 0.1, 200);

    // soft studio reflections for the vinyl-toy materials
    const pmrem = new THREE.PMREMGenerator(renderer);
    this.envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = this.envMap;
    this.scene.environmentIntensity = 0.55;

    if (!this.direct) this._buildComposer();

    this.updaters = new Set();
    this._last = performance.now();
    this.time = 0;
    this.frame = 0;
    this._fpsAcc = 0;
    this._fpsN = 0;
    this.fps = 60;

    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);
    if ('ResizeObserver' in window) {
      this._ro = new ResizeObserver(() => this.resize());
      this._ro.observe(container);
    }
    this.resize();
  }

  _buildComposer() {
    const r = this.renderer;
    const size = r.getDrawingBufferSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x || 1, size.y || 1, {
      type: THREE.HalfFloatType,
      samples: this.quality === 'low' ? 0 : 4,
    });
    const composer = (this.composer = new EffectComposer(r, rt));
    this.renderPass = new RenderPass(this.scene, this.camera);
    composer.addPass(this.renderPass);

    if (this.quality !== 'low' && !new URLSearchParams(location.search).has('noao')) {
      const ao = (this.aoPass = new CozyAOPass(this.scene, this.camera, size.x, size.y));
      ao.output = GTAOPass.OUTPUT.Default;
      ao.blendIntensity = 0.9;
      ao.updateGtaoMaterial({ radius: 0.55, distanceExponent: 1.4, thickness: 1.5, scale: 1.15, samples: this.quality === 'high' ? 16 : 8 });
      ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
      composer.addPass(ao);
    }

    const params = new URLSearchParams(location.search);
    if (!params.has('nobloom')) {
      // only things brighter than "white" bloom: lamps, fairy lights, glowing bits
      this.bloomPass = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), 0.35, 0.5, 4.5);
      composer.addPass(this.bloomPass);
    }

    composer.addPass(new OutputPass());
    this.gradePass = new ShaderPass(GradeShader);
    composer.addPass(this.gradePass);
  }

  _pixelRatio() {
    const cap = { high: 2, medium: 1.25, low: 1 }[this.quality] ?? 1.5;
    return Math.min(window.devicePixelRatio || 1, cap);
  }

  setQuality(q) {
    if (q === this.quality) return;
    this.quality = q;
    this.renderer.setPixelRatio(this._pixelRatio());
    if (!this.direct) {
      this.composer.dispose?.();
      this._buildComposer();
    }
    this._w = this._h = null; // force a resize of the new targets
    this._shadowDirty = true;
    this.scene.traverse((o) => o.material && (Array.isArray(o.material) ? o.material.forEach((m) => (m.needsUpdate = true)) : (o.material.needsUpdate = true)));
    this.resize();
    this.onQuality?.(q);
  }

  resize() {
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    if (w === this._w && h === this._h) return;
    this._w = w;
    this._h = h;
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = w + 'px';
    this.renderer.domElement.style.height = h + 'px';
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (!this.direct) {
      const pr = this.renderer.getPixelRatio();
      this.composer.setPixelRatio(pr);
      this.composer.setSize(w, h);
      this.gradePass.uniforms.uRes.value.set(w * pr, h * pr);
    }
    this.onResize?.(w, h);
  }

  get width() {
    return this._w;
  }
  get height() {
    return this._h;
  }

  add(fn) {
    this.updaters.add(fn);
    return () => this.updaters.delete(fn);
  }

  start() {
    const loop = () => {
      this._raf = requestAnimationFrame(loop);
      const now = performance.now();
      // optional frame cap (the docked mode runs at a gentle, battery-friendly rate)
      if (this.maxFps && now - this._last < 1000 / this.maxFps - 2) return;
      const dt = Math.min((now - this._last) / 1000, this.maxFps ? 0.25 : 1 / 15);
      this._last = now;
      this.time += dt;
      this.frame++;
      this._fpsAcc += dt;
      this._fpsN++;
      if (this._fpsAcc > 1) {
        this.fps = this._fpsN / this._fpsAcc;
        this._fpsAcc = 0;
        this._fpsN = 0;
        this.onFps?.(this.fps);
      }
      for (const fn of this.updaters) fn(dt, this.time);
      this.render();
    };
    loop();
  }

  render() {
    if (this.direct) {
      // the sun moves slowly: refresh shadows every other frame (never on 'low')
      const sm = this.renderer.shadowMap;
      sm.enabled = this.quality !== 'low';
      sm.autoUpdate = false;
      if (this.frame % 2 === 0 || this._shadowDirty) {
        sm.needsUpdate = true;
        this._shadowDirty = false;
      }
      this.renderer.render(this.scene, this.camera);
      return;
    }
    this.gradePass.uniforms.uTime.value = (this.frame % 64) * 1.37;
    this.composer.render();
  }

  stop() {
    cancelAnimationFrame(this._raf);
    this._raf = null;
  }

  /** Deterministic stepping (used for testing / filmstrips). */
  step(dt = 1 / 60, n = 1, render = true) {
    for (let i = 0; i < n; i++) {
      this.time += dt;
      this.frame++;
      for (const fn of this.updaters) fn(dt, this.time);
    }
    if (render) this.render();
  }
}

function detectQuality() {
  try {
    const q = new URLSearchParams(location.search).get('quality');
    if (q === 'low' || q === 'medium' || q === 'high') return q;
    const saved = localStorage.getItem('cozy.quality');
    if (saved === 'low' || saved === 'medium' || saved === 'high') return saved;
  } catch (e) {
    /* ignore */
  }
  const mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
  if (mobile) return 'low';
  return 'high';
}
