// Body material: a soft vinyl-toy look with a painted-on face.
// We inject into MeshStandardMaterial so the critter still receives real
// lights and shadows, then add: a vertical tint gradient, a lighter belly,
// a soft rim light (plushy silhouette), a tiny bit of fake subsurface warmth,
// and the face texture projected with an arc-length cylindrical mapping.
import * as THREE from 'three';
import { BODY, FACE } from './parts.js';

export function makeBodyMaterial(color, faceTexture, opts = {}) {
  const base = new THREE.Color(color);
  const mat = new THREE.MeshStandardMaterial({
    color: base,
    roughness: 0.5,
    metalness: 0,
    envMapIntensity: 0.55,
  });

  const belly = base.clone().lerp(new THREE.Color('#fff7ea'), 0.45);
  const rim = base.clone().lerp(new THREE.Color('#fff4e6'), 0.6);

  const uniforms = {
    uFace: { value: faceTexture },
    uFaceRect: { value: new THREE.Vector4(FACE.w, FACE.h, FACE.y0, BODY.height) },
    uBelly: { value: belly },
    uBellyAmt: { value: opts.belly ?? 0.55 },
    uRim: { value: rim },
    uRimStrength: { value: 0.32 },
    uFlash: { value: 0 },
    uGlow: { value: 0 },
  };
  mat.userData.uniforms = uniforms;

  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vObjPos;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvObjPos = position;');

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
varying vec3 vObjPos;
uniform sampler2D uFace;
uniform vec4 uFaceRect;
uniform vec3 uBelly;
uniform float uBellyAmt;
uniform vec3 uRim;
uniform float uRimStrength;
uniform float uFlash;
uniform float uGlow;`
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
{
  float hgt = clamp(vObjPos.y / uFaceRect.w, 0.0, 1.0);
  // darker toward the bottom, a little brighter on the crown
  diffuseColor.rgb *= mix(0.80, 1.06, smoothstep(0.0, 0.85, hgt));

  float ang = atan(vObjPos.x, vObjPos.z);
  float rr = length(vObjPos.xz);
  float s = ang * rr; // horizontal surface arc length

  // belly patch
  vec2 bp = vec2(s / 0.235, (vObjPos.y - 0.25) / 0.165);
  float bellyMask = (1.0 - smoothstep(0.55, 1.0, length(bp))) * step(0.0, vObjPos.z + 0.25);
  diffuseColor.rgb = mix(diffuseColor.rgb, uBelly, bellyMask * uBellyAmt);

  // painted face
  vec2 fuv = vec2(0.5 + s / uFaceRect.x, (vObjPos.y - uFaceRect.z) / uFaceRect.y);
  if (abs(ang) < 1.45 && fuv.x > 0.0 && fuv.x < 1.0 && fuv.y > 0.0 && fuv.y < 1.0) {
    vec4 fc = texture2D(uFace, fuv);
    diffuseColor.rgb = mix(diffuseColor.rgb, fc.rgb, fc.a);
  }
}`
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
{
  vec3 vdir = normalize(vViewPosition);
  float fres = 1.0 - clamp(dot(normal, vdir), 0.0, 1.0);
  float rimT = pow(fres, 2.6);
  totalEmissiveRadiance += uRim * rimT * uRimStrength;
  // gentle fake subsurface warmth so shadows never go muddy
  totalEmissiveRadiance += diffuseColor.rgb * vec3(0.10, 0.06, 0.05);
  totalEmissiveRadiance += vec3(1.0, 0.95, 0.9) * uFlash;
  totalEmissiveRadiance += uRim * uGlow * (0.25 + rimT);
}`
      );
  };
  mat.customProgramCacheKey = () => 'critter-body-v1';
  return mat;
}

export function makeLimbMaterial(color) {
  const c = new THREE.Color(color).offsetHSL(0, 0.03, -0.06);
  return new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, envMapIntensity: 0.5 });
}
