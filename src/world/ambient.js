// Atmosphere: dust motes drifting in the air (they glint in sunlight and turn
// into faint fireflies at night).
import * as THREE from 'three';

export class Motes {
  constructor(room, count = 160) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const seed = new Float32Array(count * 4);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * (room.w - 0.8);
      pos[i * 3 + 1] = 0.3 + Math.random() * (room.h - 0.5);
      pos[i * 3 + 2] = (Math.random() - 0.5) * (room.d - 0.8);
      seed[i * 4] = Math.random() * 100;
      seed[i * 4 + 1] = 0.5 + Math.random();
      seed[i * 4 + 2] = Math.random();
      seed[i * 4 + 3] = Math.random();
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('seed', new THREE.BufferAttribute(seed, 4));
    this.uniforms = {
      uTime: { value: 0 },
      uOpacity: { value: 0.6 },
      uColor: { value: new THREE.Color('#fff2d6') },
      uScale: { value: 500 },
      uSize: { value: 0.05 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        attribute vec4 seed;
        uniform float uTime;
        uniform float uScale;
        uniform float uSize;
        varying float vTw;
        void main() {
          vec3 p = position;
          float t = uTime * 0.12 * seed.y + seed.x;
          p.x += sin(t * 1.3) * 0.35 + sin(t * 0.37) * 0.6;
          p.y += sin(t * 0.9 + seed.z * 6.0) * 0.25;
          p.z += cos(t * 1.1) * 0.35 + cos(t * 0.29) * 0.6;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (0.6 + seed.w) * uScale / -mv.z;
          vTw = 0.55 + 0.45 * sin(uTime * (1.0 + seed.z * 2.0) + seed.x * 7.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        uniform vec3 uColor;
        varying float vTw;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(uColor * a * a * uOpacity * vTw, 1.0);
        }
      `,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    room.group.add(this.points);
  }

  update(dt, daylight, camera, height) {
    this.uniforms.uTime.value += dt;
    const st = daylight.state;
    if (!st) return;
    const night = st.stars;
    // sunlit dust by day, a few warm fireflies by night
    this.uniforms.uOpacity.value = 0.18 + st.sun * 0.08 + night * 0.4;
    this.uniforms.uColor.value.set(night > 0.5 ? '#ffe7a0' : '#fff4dc');
    this.uniforms.uSize.value = night > 0.5 ? 0.075 : 0.05;
    const fov = (camera.fov * Math.PI) / 180;
    this.uniforms.uScale.value = height / (2 * Math.tan(fov / 2));
  }
}
