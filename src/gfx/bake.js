// Merge many small meshes that share a material into one, to keep draw calls
// down. Sub-groups flagged `userData.dynamic` (things that animate on their
// own: swaying leaves, clock hands, a door on its hinge...) are kept intact
// and baked separately inside themselves.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const _m = new THREE.Matrix4();

export function prepGeometry(geo, matrix) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone();
  for (const name of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(name)) g.deleteAttribute(name);
  if (!g.attributes.normal) g.computeVertexNormals();
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  g.morphAttributes = {};
  g.clearGroups();
  g.applyMatrix4(matrix);
  return g;
}

function bakeable(o) {
  return (
    o.isMesh &&
    !o.isSkinnedMesh &&
    !o.isInstancedMesh &&
    !Array.isArray(o.material) &&
    !o.material.transparent &&
    !o.userData.keep &&
    !o.userData.dynamic &&
    o.children.length === 0 &&
    o.visible
  );
}

/** Bake the meshes under `root` into a few merged meshes (local to root). */
export function bakeGroup(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const removals = [];
  const visit = (obj) => {
    for (const child of obj.children) {
      if (child.userData.noBake) continue;
      if (child.userData.dynamic) {
        bakeGroup(child);
        continue;
      }
      if (bakeable(child)) {
        const key = `${child.material.uuid}|${child.castShadow ? 1 : 0}${child.receiveShadow ? 1 : 0}`;
        let b = buckets.get(key);
        if (!b) buckets.set(key, (b = { material: child.material, cast: child.castShadow, receive: child.receiveShadow, list: [] }));
        b.list.push(child);
      } else visit(child);
    }
  };
  visit(root);
  let saved = 0;
  for (const b of buckets.values()) {
    if (b.list.length < 2) continue;
    const geos = b.list.map((o) => prepGeometry(o.geometry, _m.multiplyMatrices(inv, o.matrixWorld)));
    const merged = mergeGeometries(geos, false);
    for (const g of geos) g.dispose();
    if (!merged) continue;
    merged.computeBoundingSphere();
    const mesh = new THREE.Mesh(merged, b.material);
    mesh.castShadow = b.cast;
    mesh.receiveShadow = b.receive;
    mesh.name = 'baked';
    root.add(mesh);
    for (const o of b.list) removals.push(o);
    saved += b.list.length - 1;
  }
  for (const o of removals) o.parent?.remove(o);
  return saved;
}
