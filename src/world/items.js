// Little things critters carry around.
import * as THREE from 'three';
import { mat, COLORS } from '../gfx/materials.js';
import { rbox, cyl, rcyl, torus, mesh, group, sphere } from '../gfx/geo.js';
import { pick } from '../core/util.js';

const BOOK_COLORS = ['#e8746a', '#7aa6dc', '#f2c14e', '#8dc68a', '#c39be0', '#f29bb5'];
const NOTE_COLORS = ['#ffe68a', '#ffc2d6', '#bfe8ff', '#c9f2c0', '#ffd6a8'];

export function makeItem(kind, opts = {}) {
  switch (kind) {
    case 'book':
      return makeBook(opts.color);
    case 'wateringCan':
      return makeWateringCan();
    case 'mug':
      return makeMug();
    case 'note':
      return makeNote(opts.color);
    case 'letter':
      return makeLetter();
    case 'parcel':
      return makeParcel();
    default:
      return makeBook();
  }
}

function makeBook(color = pick(BOOK_COLORS)) {
  return withOffset(makeBookInner(color), [0, -0.13, 0.03]);
}

function withOffset(obj, off) {
  obj.userData.holdOffset = off;
  return obj;
}

function makeBookInner(color) {
  const g = group({});
  const cover = mat(color, { roughness: 0.6 });
  const pages = mat(COLORS.paper, { roughness: 0.9 });
  // open book, angled toward the reader
  const left = group({ rot: [0, 0, 0.18] }, mesh(rbox(0.2, 0.02, 0.27, 0.008), cover, { pos: [-0.1, 0, 0] }), mesh(rbox(0.185, 0.03, 0.25, 0.008), pages, { pos: [-0.1, 0.018, 0] }));
  const right = group({ rot: [0, 0, -0.18] }, mesh(rbox(0.2, 0.02, 0.27, 0.008), cover, { pos: [0.1, 0, 0] }), mesh(rbox(0.185, 0.03, 0.25, 0.008), pages, { pos: [0.1, 0.018, 0] }));
  const flip = new THREE.Group();
  const page = mesh(rbox(0.18, 0.006, 0.24, 0.002), pages, { pos: [0.09, 0, 0] });
  flip.add(page);
  flip.position.y = 0.035;
  flip.visible = false;
  g.add(left, right, flip);
  g.rotation.x = -1.05;
  g.position.y = 0.02;
  let t = -1;
  g.userData.flip = () => {
    t = 0;
    flip.visible = true;
  };
  g.onBeforeRender = () => {};
  g.userData.update = (dt) => {
    if (t < 0) return;
    t += dt * 2.2;
    flip.rotation.z = Math.PI * Math.min(1, t) * 1;
    if (t >= 1) {
      t = -1;
      flip.visible = false;
    }
  };
  return wrap(g);
}

function makeWateringCan() {
  const body = mat('#7cc4c9', { roughness: 0.4, metalness: 0.1 });
  const g = group(
    {},
    mesh(rcyl(0.12, 0.17, 0.04), body, { pos: [0, 0, 0] }),
    mesh(cyl(0.022, 0.03, 0.26), body, { pos: [0, 0.07, 0.15], rot: [0.95, 0, 0] }),
    mesh(cyl(0.045, 0.03, 0.03), body, { pos: [0, 0.16, 0.26], rot: [0.95, 0, 0] }),
    mesh(torus(0.075, 0.016, 8, 20, Math.PI), body, { pos: [0, 0.09, -0.02], rot: [0, Math.PI / 2, 0] })
  );
  g.position.set(0, -0.02, 0.02);
  return wrap(g);
}

function makeMug() {
  const m = mat('#ffd0b5', { roughness: 0.5 });
  return wrap(
    group(
      {},
      mesh(rcyl(0.06, 0.11, 0.015), m),
      mesh(torus(0.035, 0.012, 8, 16), m, { pos: [0.065, 0, 0], rot: [0, 0, 0] }),
      mesh(cyl(0.05, 0.05, 0.01), mat('#7b4a33', { roughness: 0.3 }), { pos: [0, 0.05, 0] })
    )
  );
}

function makeNote(color = pick(NOTE_COLORS)) {
  const g = group({}, mesh(rbox(0.22, 0.22, 0.012, 0.004), mat(color, { roughness: 0.85 })));
  g.rotation.x = -0.2;
  return wrap(g);
}

function makeLetter() {
  const paper = mat('#fff3e0', { roughness: 0.85 });
  const g = group({}, mesh(rbox(0.28, 0.18, 0.02, 0.006), paper), mesh(sphere(0.025, 10, 8), mat('#e6455e', { roughness: 0.5 }), { pos: [0, 0, 0.012], scale: [1, 1, 0.3] }));
  g.rotation.x = -0.25;
  return wrap(g);
}

function makeParcel() {
  const g = group(
    {},
    mesh(rbox(0.3, 0.24, 0.26, 0.03), mat('#d9a876', { roughness: 0.85 })),
    mesh(rbox(0.31, 0.04, 0.27, 0.01), mat('#ff8fa8', { roughness: 0.6 }), { pos: [0, 0, 0] }),
    mesh(rbox(0.04, 0.25, 0.27, 0.01), mat('#ff8fa8', { roughness: 0.6 }), { pos: [0, 0, 0] })
  );
  g.position.y = 0.1;
  return wrap(g);
}

function wrap(inner) {
  const outer = new THREE.Group();
  outer.add(inner);
  outer.userData.update = inner.userData.update;
  outer.userData.flip = inner.userData.flip;
  return outer;
}
