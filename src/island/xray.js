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
  });
  const ghost = new THREE.Mesh(critter.body.geometry, mat);
  ghost.renderOrder = 60;
  ghost.userData.noAO = true;
  ghost.raycast = () => {};
  critter.body.add(ghost);
  const feet = critter.feet.map((f) => {
    const g = new THREE.Mesh(f.geometry, mat);
    g.renderOrder = 60;
    g.raycast = () => {};
    f.add(g);
    return g;
  });
  critter._xray = { mat, ghost, feet };
  return critter._xray;
}

export function setSilhouetteStrength(critter, k) {
  if (critter._xray) critter._xray.mat.opacity = 0.42 * k;
}
