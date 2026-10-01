// Geometry for the sproutling body and its little parts.
// Everything is built once and shared between all critters.
import * as THREE from 'three';

// Body dimensions in critter units (a critter is ~1 unit tall before scaling).
export const BODY = {
  height: 1.02,
  lift: 0.07, // body sits slightly above the feet
};

// Face texture mapping (surface units, see material.js). The face is painted on
// the body with a cylindrical arc-length projection so features never stretch.
export const FACE = {
  w: 0.92,
  h: 0.62,
  y0: 0.22,
  px: 512,
};
FACE.py = Math.round((FACE.px * FACE.h) / FACE.w);

// Gumdrop / mochi silhouette: a touch wider at the bottom, soft dome on top.
const PROFILE = [
  [0.0, 0.0],
  [0.28, 0.0],
  [0.4, 0.018],
  [0.472, 0.07],
  [0.502, 0.17],
  [0.506, 0.3],
  [0.488, 0.46],
  [0.445, 0.63],
  [0.365, 0.8],
  [0.235, 0.94],
  [0.08, 1.012],
  [0.0, 1.02],
];

export function bodyRadiusAt(y) {
  // Linear interpolation of the profile, good enough for placement maths.
  for (let i = 1; i < PROFILE.length; i++) {
    const [r1, y1] = PROFILE[i];
    const [r0, y0] = PROFILE[i - 1];
    if (y <= y1) {
      const t = (y - y0) / Math.max(1e-5, y1 - y0);
      return r0 + (r1 - r0) * t;
    }
  }
  return 0;
}

let cache = null;

export function getParts() {
  if (cache) return cache;

  // Body ---------------------------------------------------------------
  const curve = new THREE.SplineCurve(PROFILE.map(([r, y]) => new THREE.Vector2(r, y)));
  const pts = curve.getSpacedPoints(56).map((p) => new THREE.Vector2(Math.max(0, p.x), p.y));
  pts[0].set(0, 0);
  pts[pts.length - 1].set(0, PROFILE[PROFILE.length - 1][1]);
  const body = new THREE.LatheGeometry(pts, 64);
  body.computeBoundingSphere();

  // Arms: little rounded nubs hanging from a pivot at their top.
  const arm = new THREE.CapsuleGeometry(0.074, 0.12, 6, 12);
  arm.translate(0, -0.115, 0);

  // Feet: soft flattened beans.
  const foot = new THREE.SphereGeometry(1, 20, 14);
  foot.scale(0.115, 0.07, 0.15);
  foot.translate(0, 0.05, 0.02);

  // Sprout stem: a gently curved tube.
  const stemCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, -0.02, 0),
    new THREE.Vector3(0.006, 0.06, 0),
    new THREE.Vector3(0.022, 0.13, 0),
    new THREE.Vector3(0.05, 0.19, 0),
  ]);
  const stem = new THREE.TubeGeometry(stemCurve, 12, 0.022, 8, false);
  const stemTip = new THREE.Vector3(0.05, 0.19, 0);

  // Leaf: chunky rounded teardrop extruded with bevels (sticker-like volume).
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0);
  leafShape.bezierCurveTo(0.05, 0.035, 0.11, 0.05, 0.17, 0.0);
  leafShape.bezierCurveTo(0.11, -0.05, 0.05, -0.035, 0, 0);
  const leaf = new THREE.ExtrudeGeometry(leafShape, {
    depth: 0.008,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.012,
    bevelSegments: 3,
    curveSegments: 16,
  });
  leaf.translate(0, 0, -0.004);
  // Cup the leaf a little so it catches light nicely.
  {
    const p = leaf.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i);
      const y = p.getY(i);
      p.setZ(i, p.getZ(i) + y * y * 6 - x * x * 0.8);
    }
    leaf.computeVertexNormals();
  }
  leaf.rotateX(-Math.PI / 2); // lie flat (extends along +x)

  // Single big curly leaf variant
  const bigLeaf = leaf.clone();
  bigLeaf.scale(1.45, 1.3, 1.6);

  // Antenna: thin stalk + bobble
  const antennaStalk = new THREE.CylinderGeometry(0.014, 0.018, 0.2, 8);
  antennaStalk.translate(0, 0.1, 0);
  const bobble = new THREE.SphereGeometry(0.06, 18, 14);

  // Flower petals
  const petal = new THREE.SphereGeometry(1, 14, 10);
  petal.scale(0.05, 0.016, 0.034);
  petal.translate(0.055, 0, 0);
  const flowerCenter = new THREE.SphereGeometry(0.035, 14, 10);
  flowerCenter.scale(1, 0.6, 1);

  // Blob shadow
  const shadow = new THREE.CircleGeometry(0.62, 32);
  shadow.rotateX(-Math.PI / 2);

  cache = {
    body,
    arm,
    foot,
    stem,
    stemTip,
    leaf,
    bigLeaf,
    antennaStalk,
    bobble,
    petal,
    flowerCenter,
    shadow,
  };
  return cache;
}

let shadowTex = null;
export function getShadowTexture() {
  if (shadowTex) return shadowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  grd.addColorStop(0, 'rgba(60,35,25,0.55)');
  grd.addColorStop(0.45, 'rgba(60,35,25,0.32)');
  grd.addColorStop(1, 'rgba(60,35,25,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  shadowTex = new THREE.CanvasTexture(c);
  shadowTex.colorSpace = THREE.SRGBColorSpace;
  return shadowTex;
}
