// Shared material cache + the cozy palette.
import * as THREE from 'three';

export const COLORS = {
  cream: '#fff4e4',
  paper: '#fffaf0',
  wood: '#d79a64',
  woodLight: '#e8b680',
  woodDark: '#a8683f',
  walnut: '#8a5536',
  terracotta: '#e0805a',
  clay: '#d8735a',
  sage: '#a8c98a',
  leaf: '#78b85e',
  leafDark: '#4f9a4a',
  mint: '#9fdcc0',
  peach: '#ffb99a',
  blush: '#ffc4cf',
  rose: '#f490a8',
  butter: '#ffe08a',
  mustard: '#f2c14e',
  sky: '#9ccdf2',
  denim: '#7a9fd6',
  lilac: '#c7b6ee',
  plum: '#9a6fb0',
  charcoal: '#4a3c38',
  ink: '#3b2a25',
  white: '#fffdf8',
  metal: '#c9c3bd',
  brass: '#e2b866',
  glass: '#dff3ff',
};

const cache = new Map();

/** Get (or create) a shared standard material. */
export function mat(color, o = {}) {
  const key = JSON.stringify([color, o.roughness, o.metalness, o.emissive, o.emissiveIntensity, o.transparent, o.opacity, o.side, o.flat]);
  if (cache.has(key)) return cache.get(key);
  const m = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    roughness: o.roughness ?? 0.72,
    metalness: o.metalness ?? 0,
    emissive: o.emissive ? new THREE.Color(o.emissive) : new THREE.Color(0, 0, 0),
    emissiveIntensity: o.emissiveIntensity ?? 1,
    transparent: !!o.transparent,
    opacity: o.opacity ?? 1,
    side: o.side ?? THREE.FrontSide,
    flatShading: !!o.flat,
    envMapIntensity: o.envMapIntensity ?? 0.6,
  });
  cache.set(key, m);
  return m;
}

/** A unique (non-shared) material, for things whose color/emissive animate. */
export function uniqueMat(color, o = {}) {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    roughness: o.roughness ?? 0.7,
    metalness: o.metalness ?? 0,
    emissive: o.emissive ? new THREE.Color(o.emissive) : new THREE.Color(0, 0, 0),
    emissiveIntensity: o.emissiveIntensity ?? 1,
    transparent: !!o.transparent,
    opacity: o.opacity ?? 1,
    side: o.side ?? THREE.FrontSide,
    map: o.map || null,
    envMapIntensity: o.envMapIntensity ?? 0.6,
  });
}

export function texMat(map, o = {}) {
  return new THREE.MeshStandardMaterial({
    map,
    color: new THREE.Color(o.color ?? '#ffffff'),
    roughness: o.roughness ?? 0.8,
    metalness: 0,
    transparent: !!o.transparent,
    side: o.side ?? THREE.FrontSide,
    envMapIntensity: o.envMapIntensity ?? 0.5,
    alphaTest: o.alphaTest ?? 0,
  });
}
