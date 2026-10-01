// Soft coloured silhouettes for crew members hidden behind walls (or seen
// through floors from below), so a partition never loses you the crew.
// Each critter gets a ghost copy of its body drawn only where something is
// in front of it (depthFunc = Greater).
import * as THREE from 'three';

export function addSilhouette(critter) {
  if (critter._xray) return critter._xray;
  const col = new THREE.Color(critter.color).offsetHSL(0, 0.12, 0.06);
  const mat = new THREE.MeshBasicMaterial({
    color: col,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
    depthTest: true,
    depthFunc: THREE.GreaterDepth,
    // pulled toward the camera so the critter's own surface never counts as "in front"
    polygonOffset: true,
    polygonOffsetFactor: -4,
    polygonOffsetUnits: -8,
    // never over a crew member who's visible (their pixels are marked in the stencil)
    stencilWrite: true,
    stencilRef: 1,
    stencilFunc: THREE.NotEqualStencilFunc,
    stencilFail: THREE.KeepStencilOp,
    stencilZFail: THREE.KeepStencilOp,
    stencilZPass: THREE.KeepStencilOp,
  });
  // every visible bit of a crew member marks the stencil
  critter.root.traverse((o) => {
    if (!o.isMesh || o === critter.shadow) return;
    const ms = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of ms) {
      if (m.transparent) continue;
      m.stencilWrite = true;
      m.stencilRef = 1;
      m.stencilFunc = THREE.AlwaysStencilFunc;
      m.stencilZPass = THREE.ReplaceStencilOp;
    }
  });
  const ghost = new THREE.Mesh(critter.body.geometry, mat);
  ghost.renderOrder = 60;
  ghost.userData.noAO = true;
  ghost.raycast = () => {};
  critter.body.add(ghost);
  critter._xray = { mat, ghost, feet: [] };
  return critter._xray;
}

export function setSilhouetteStrength(critter, k) {
  if (critter._xray) critter._xray.mat.opacity = 0.42 * k;
}
