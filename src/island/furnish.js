// Furnishing: puts the gameplay furniture into each room (once the room
// exists), and describes what the crew can do there (stations) and what
// the game can put things on (named objects with slots).
//
// Coordinates are world x/z; each room's group sits at the room's floor
// height, so y here is height above that floor.
import * as THREE from 'three';
import * as P from './props.js';
import { plant, floorLamp, bookshelf } from '../world/props/furniture.js';
import { mailbox } from '../world/props/post.js';
import { ROOMS, GATE, CHUNKS, T } from './layout.js';
import { FLOOR0 } from './house.js';
import { mat } from '../gfx/materials.js';
import { rbox, cyl, sphere, mesh } from '../gfx/geo.js';
import { mulberry32 } from '../core/util.js';

const PI = Math.PI;
const IN = T / 2 + 0.01; // wall-mounted things sit just off the wall surface

/** heading to face a wall side (critter looks at it) */
export const FACE = { north: PI, south: 0, east: PI / 2, west: -PI / 2 };

export class RoomKit {
  constructor(id, level) {
    this.id = id;
    this.level = level;
    this.group = new THREE.Group();
    this.group.name = `furnish:${id}`;
    this.stations = [];
    this.footprints = [];
    this.objects = {};
    this.lights = [];
    this.glows = [];
    this.plants = [];
  }

  /** place a floor object at world x/z; footprint {w,d} or {r} blocks nav */
  place(obj, { x, z, y = 0, rot = 0, footprint = null, name = null, movable = false }) {
    obj.position.set(x, y, z);
    obj.rotation.y = rot;
    this.group.add(obj);
    if (footprint) this.footprints.push({ x, z, rot, ...footprint });
    if (name) this.objects[name] = obj;
    if (movable) obj.userData.movable = { room: this.id, name };
    obj.userData.room = this.id;
    return obj;
  }

  /** mount on a wall of the room: side + position along it (world coord) */
  mount(obj, side, along, y, name = null, room = ROOMS[this.id]) {
    const r = room;
    const p = {
      north: [along, r.z0 + IN, 0],
      south: [along, r.z1 - IN, PI],
      west: [r.x0 + IN, along, PI / 2],
      east: [r.x1 - IN, along, -PI / 2],
    }[side];
    obj.position.set(p[0], y, p[1]);
    obj.rotation.y = p[2];
    obj.userData.wall = side;
    obj.userData.room = this.id;
    this.group.add(obj);
    if (name) this.objects[name] = obj;
    return obj;
  }

  station(s) {
    const st = { room: this.id, level: this.level, seat: 0, tags: [], reservedBy: null, ...s };
    this.stations.push(st);
    return st;
  }
}

/** World-space position of a local slot on an object. */
export function slotWorld(obj, slot, out = new THREE.Vector3()) {
  obj.updateWorldMatrix(true, false);
  return out.set(slot.x, slot.y, slot.z ?? 0).applyMatrix4(obj.matrixWorld);
}

// ---------------------------------------------------------------------------
// Rooms

function commons() {
  const k = new RoomKit('commons', 0);
  // the idea board on the back (north) wall, left of the boarded door
  const board = k.mount(P.ideaBoard(1.9, 1.25), 'north', 1.45, 1.55, 'board');
  k.station({ id: 'board', label: 'pinning an idea to the board', activity: 'pin', pos: { x: 1.45, z: 0.8 }, face: FACE.north, tags: ['ideas'], role: 'ideas' });
  k.station({ id: 'board-think', label: 'squinting at the idea board', activity: 'ponder', pos: { x: 2.25, z: 1.0 }, face: FACE.north + 0.3, tags: ['ideas', 'fun'] });
  void board;
  // a hand-drawn map + the crew roster on the west wall
  k.mount(P.paperMap(0.95, 0.7), 'west', 1.6, 1.6, 'map');
  k.mount(P.rosterFrame(0.9, 0.6), 'west', 5.05, 1.75, 'roster');
  // keepsakes live above the boarded door: empty slots invite filling
  k.mount(P.keepsakeShelf(1.9, 1, 6), 'north', 3.6, 2.5, 'keepsakes');
  // the pitch rug in the middle, where crew stand to present
  const rug = k.place(P.pitchRug(1.2), { x: 2.55, z: 3.3, name: 'rug' });
  rug.rotation.y = PI / 4; // spots arc toward the default camera
  // the couch on the west wall (two nap spots)
  k.place(P.couch(1.7, '#cbbcab'), { x: 0.55, z: 4.95, rot: PI / 2, footprint: { w: 1.75, d: 0.85 }, name: 'couch', movable: true });
  k.station({ id: 'couch-a', label: 'napping on the couch', activity: 'sleep', pos: { x: 0.62, z: 4.55 }, approach: { x: 1.35, z: 4.55 }, seat: 0.36, face: PI / 2, tags: ['rest'] });
  k.station({ id: 'couch-b', label: 'curled up on the couch', activity: 'read', pos: { x: 0.62, z: 5.35 }, approach: { x: 1.35, z: 5.35 }, seat: 0.36, face: PI / 2, tags: ['rest', 'calm'] });
  // the toss bin by the rug
  k.place(P.tossBin(), { x: 4.05, z: 4.55, footprint: { r: 0.3 }, name: 'bin' });
  // unopened boxes, stacked in front of the boarded door
  k.place(P.movingBoxes(4, 4), { x: 3.7, z: 0.75, name: 'boxes' });
  k.footprints.push({ x: 3.7, z: 0.75, w: 2.2, d: 0.9, tag: 'boxes' });
  // a lamp in the corner and a plant
  const lamp = k.place(floorLamp('#efe4d2'), { x: 0.45, z: 0.45, footprint: { r: 0.26 }, name: 'lamp', movable: true });
  lamp.userData.lamp.base = 4.5;
  k.lights.push(lamp);
  const pl = k.place(plant('leafy', { scale: 1.05, color: '#cfa48e', seed: 9 }), { x: 3.35, z: 5.62, footprint: { r: 0.28 }, movable: true, name: 'plant' });
  k.plants.push(pl);
  k.station({ id: 'water-commons', label: 'watering the big plant', activity: 'water', pos: { x: 3.35, z: 4.95 }, face: 0, tags: ['care'] });
  // the south window, to gaze from
  k.station({ id: 'gaze-commons', label: 'watching the clouds go by', activity: 'gaze', pos: { x: 4.5, z: 5.3 }, face: 0, tags: ['calm'] });
  // the stairs: blocked except their foot
  k.footprints.push({ x: 5.4, z: 2.6, w: 1.0, d: 4.35 });
  // front door mat
  k.place(new THREE.Group().add(mesh(rbox(1.0, 0.02, 0.55, 0.01), mat('#c9b49a', { roughness: 1 }), { pos: [0, 0.01, 0], cast: false })), { x: 2.0, z: 5.55 });
  return k;
}

function workshop() {
  const k = new RoomKit('workshop', 0);
  // the build bench in the middle: workers stand on the south side, facing north (the camera's way from NE)
  const bench = k.place(P.buildBench(2.5, 0.85, 0.6), { x: 2.45, z: -3.2, footprint: { w: 2.6, d: 0.95 }, name: 'bench' });
  bench.userData.slots.forEach((s, i) => {
    k.station({ id: `bench-${i}`, label: 'building at the bench', activity: 'build', slot: i, pos: { x: 2.45 + s.x, z: -2.35 }, face: PI, tags: ['build', 'work'], role: 'build', job: true });
  });
  // pedestals (hidden until a verified build earns one)
  const peds = [
    { x: 2.9, z: -5.15 },
    { x: 4.0, z: -5.15 },
    { x: 5.1, z: -5.0 },
    { x: 5.15, z: -3.85 },
  ];
  k.objects.pedestalSpots = peds;
  for (const p of peds) k.footprints.push({ x: p.x, z: p.z, r: 0.34, optional: true });
  // shelf for finished builds on the west wall
  k.mount(P.slotShelf({ w: 1.6, rows: 2, perRow: 4 }), 'west', -1.5, 1.0, 'shelf');
  k.station({ id: 'shelf-ws', label: 'admiring the finished builds', activity: 'admire', pos: { x: 0.85, z: -1.5 }, face: -PI / 2, tags: ['fun'] });
  // pegboard (capabilities appear as new tools)
  k.mount(P.toolPegboard(1.5, 0.95), 'south', 1.35, 1.65, 'pegboard');
  // offcuts and a crate
  k.place(P.movingBoxes(9, 2), { x: 5.2, z: -1.0, footprint: { w: 1.2, d: 0.7 } });
  k.station({ id: 'tinker-ws', label: 'tidying the tools', activity: 'tinker', pos: { x: 1.35, z: -0.75 }, face: 0, tags: ['build', 'fun'] });
  return k;
}

function study() {
  const k = new RoomKit('study', 0);
  const desk = k.place(P.writingDesk(1.9, 0.75, 0.58), { x: -3.4, z: -2.9, footprint: { w: 2.0, d: 0.85 }, name: 'desk' });
  desk.userData.slots.forEach((s, i) => {
    k.station({ id: `desk-${i}`, label: 'researching at the desk', activity: 'research', slot: i, pos: { x: -3.4 + s.x, z: -2.2 }, face: PI, tags: ['research', 'work'], role: 'research', job: true, seat: 0 });
  });
  const lamp = P.deskLamp();
  lamp.position.set(-3.4 + 0.75, 0.61, -2.95 - 0.2);
  k.group.add(lamp);
  k.objects.owlLamp = lamp;
  // the bookshelf where finished research lives, on the east wall
  k.mount(P.researchShelf(1.7, 2.0, 0.38, 4, 8), 'east', -1.35, 0, 'books');
  k.footprints.push({ x: -0.3, z: -1.35, w: 0.5, d: 1.75 });
  k.station({ id: 'browse-study', label: 'browsing the bookshelf', activity: 'browse', pos: { x: -1.0, z: -1.35 }, face: PI / 2, tags: ['research', 'calm'] });
  // an armchair for reading
  k.place(P.couch(0.95, '#bcc2b0'), { x: -1.2, z: -5.0, rot: -PI / 4 - PI / 2 + PI, footprint: { r: 0.55 }, movable: true, name: 'armchair' });
  k.station({ id: 'read-study', label: 'reading in the armchair', activity: 'read', pos: { x: -1.25, z: -4.95 }, approach: { x: -1.9, z: -4.3 }, seat: 0.36, face: -PI * 0.75, tags: ['calm', 'research'] });
  // telescope spot (appears with the capability)
  k.objects.telescopeSpot = { x: -5.0, z: -5.0 };
  k.station({ id: 'gaze-study', label: 'looking out the window', activity: 'gaze', pos: { x: -4.6, z: -4.9 }, face: PI, tags: ['calm'] });
  const pl = k.place(plant('tall', { scale: 1.0, color: '#b8a6c4', seed: 3 }), { x: -5.5, z: -0.5, footprint: { r: 0.25 }, movable: true, name: 'plant' });
  k.plants.push(pl);
  return k;
}

function kitchen() {
  const k = new RoomKit('kitchen', 0);
  k.mount(P.todoBoard(1.4, 1.3), 'north', -4.6, 1.55, 'chalkboard');
  k.station({ id: 'chalk', label: 'updating the chalkboard', activity: 'chalk', pos: { x: -4.6, z: 0.8 }, face: FACE.north, tags: ['chores', 'work'], role: 'chores', job: true });
  // counter on the east wall with the kettle
  const ctr = k.place(P.counter(2.0, 0.62, 0.62), { x: -0.45, z: 1.45, rot: -PI / 2, footprint: { w: 2.05, d: 0.7 }, name: 'counter' });
  const kt = P.kettle();
  kt.position.set(0, ctr.userData.top, -0.5);
  ctr.add(kt);
  k.objects.radioSpot = { obj: ctr, x: 0, y: ctr.userData.top, z: 0.45 };
  k.station({ id: 'tea-make', label: 'making a pot of tea', activity: 'cook', pos: { x: -1.25, z: 1.3 }, face: PI / 2, tags: ['chores', 'care'] });
  // a table for tea
  k.place(P.roundTable(0.6, 0.42), { x: -3.1, z: 3.6, footprint: { r: 0.62 }, name: 'table', movable: true });
  const cols = ['#d9c2a8', '#c9cfbd', '#d8c7d4', '#e0cfb4'];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * PI * 2 + PI / 4;
    const x = -3.1 + Math.sin(a) * 0.98;
    const z = 3.6 + Math.cos(a) * 0.98;
    k.place(P.stoolSeat(cols[i]), { x, z });
    k.station({ id: `tea-${i}`, label: 'having tea', activity: 'tea', pos: { x, z }, seat: 0.3, face: a + PI, tags: ['social', 'rest'] });
  }
  const pl = k.place(plant('round', { scale: 0.9, color: '#c9b49a', seed: 6 }), { x: -5.5, z: 0.55, footprint: { r: 0.25 }, movable: true, name: 'plant' });
  k.plants.push(pl);
  k.station({ id: 'water-kitchen', label: 'watering the herbs', activity: 'water', pos: { x: -4.9, z: 0.6 }, face: -PI / 2, tags: ['care'] });
  return k;
}

function bunk() {
  const k = new RoomKit('bunk', 1);
  const beds = [
    { x: 2.45, z: -5.45, rot: 0 },
    { x: 4.6, z: -5.45, rot: 0 },
    { x: 0.55, z: -1.35, rot: PI / 2 },
    { x: 5.45, z: -2.75, rot: -PI / 2 },
  ];
  const quilts = [
    ['#d9c7d6', '#c8d4c4'],
    ['#e2d0bd', '#cfd2e0'],
    ['#d0dccd', '#e6cfd1'],
    ['#dcd1e4', '#e4d9c3'],
  ];
  beds.forEach((b, i) => {
    const bb = k.place(P.bunkBed(1.85, 0.95, quilts[i]), { x: b.x, z: b.z, rot: b.rot, footprint: { w: 1.9, d: 1.0 } });
    bb.userData.spots.forEach((s, j) => {
      // spot along the bed's long axis (its local x), on the open side
      const lx = s.x + 0.2;
      const wx = b.x + Math.cos(b.rot) * lx;
      const wz = b.z - Math.sin(b.rot) * lx;
      const ax = b.x + Math.cos(b.rot) * lx + Math.sin(b.rot) * 0.95;
      const az = b.z - Math.sin(b.rot) * lx + Math.cos(b.rot) * 0.95;
      k.station({ id: `bunk-${i}-${j}`, label: 'asleep in a bunk', activity: 'sleep', bunk: true, pos: { x: wx, z: wz }, approach: { x: ax, z: az }, seat: s.y, face: b.rot + PI, tags: ['rest'] });
    });
  });
  k.footprints.push({ x: 0.7, z: -5.55, w: 0.7, d: 0.5 }); // attic ladder
  k.place(new THREE.Group().add(mesh(rbox(2.2, 0.015, 1.4, 0.01), mat('#ddd0c2', { roughness: 1 }), { cast: false, pos: [0, 0.01, 0] })), { x: 3.0, z: -3.0 });
  k.station({ id: 'bunk-chat', label: 'chatting in the bunk room', activity: 'sit', pos: { x: 3.0, z: -3.0 }, face: PI / 4, tags: ['social'] });
  return k;
}

function yours() {
  const k = new RoomKit('yours', 1);
  // a shelf for things about you (stated = solid, inferred = ghostly outlines)
  k.mount(P.slotShelf({ w: 1.7, rows: 2, perRow: 4, gap: 0.5, color: '#cbb193' }), 'east', -1.4, 0.95, 'factShelf');
  k.place(P.simpleBed(1.4, 1.9, '#d9cbe0'), { x: -4.9, z: -1.35, rot: PI / 2, footprint: { w: 1.5, d: 2.0 }, name: 'bed', movable: true });
  k.place(P.factTable(1.4, 0.7), { x: -3.2, z: -4.2, footprint: { w: 1.45, d: 0.75 }, name: 'facts' });
  k.objects.factFloor = [
    { x: -1.6, z: -4.9 },
    { x: -4.9, z: -4.6 },
    { x: -2.2, z: -2.6 },
    { x: -5.2, z: -3.2 },
  ];
  k.station({ id: 'tidy-yours', label: 'tidying your room', activity: 'tidy', pos: { x: -3.2, z: -3.5 }, face: PI, tags: ['care'] });
  const pl = k.place(plant('flowers', { scale: 0.85, color: '#cfb7a4', seed: 4 }), { x: -0.55, z: -5.45, footprint: { r: 0.22 }, movable: true, name: 'plant' });
  k.plants.push(pl);
  return k;
}

function attic() {
  const k = new RoomKit('attic', 1);
  const rng = mulberry32(17);
  const spots = [];
  for (let j = 0; j < 3; j++) for (let i = 0; i < 4; i++) spots.push({ x: 2.2 + i * 0.95 + (rng() - 0.5) * 0.15, z: -4.9 + j * 1.25 + (rng() - 0.5) * 0.15 });
  k.objects.boxSpots = spots;
  k.station({ id: 'attic-rummage', label: 'rummaging in the attic', activity: 'rummage', pos: { x: 2.0, z: -1.2 }, face: PI, tags: ['ideas', 'fun'] });
  return k;
}

/** Outside: the gate and everything that leaves or arrives. */
function gate() {
  const k = new RoomKit('gate', 0);
  const mb = k.place(mailbox(), { x: GATE.mailbox.x, z: GATE.mailbox.z, rot: 0.6, footprint: { r: 0.45 }, name: 'mailbox' });
  mb.scale.setScalar(0.9);
  k.station({ id: 'mailbox', label: 'posting a letter', activity: 'post', pos: { x: GATE.mailbox.x + 0.45, z: GATE.mailbox.z + 0.75 }, face: 0.6 + PI, tags: ['mail', 'work'], role: 'mail', job: true });
  const lw = k.place(P.letterBoard(2.0, 1.1), { x: GATE.wall.x, z: GATE.wall.z, rot: 0.55, footprint: { w: 2.2, d: 0.4 }, name: 'letterWall' });
  void lw;
  k.station({ id: 'letter-read', label: 'reading the letter wall', activity: 'browse', pos: { x: GATE.wall.x + 0.45, z: GATE.wall.z + 0.75 }, face: 0.55 + PI, tags: ['mail', 'calm'] });
  k.place(P.perchPost(), { x: GATE.perch.x, z: GATE.perch.z, rot: -0.4, footprint: { r: 0.2 }, name: 'perch' });
  k.place(P.mooringPost(), { x: GATE.mooring.x, z: GATE.mooring.z, footprint: { r: 0.25 }, name: 'mooring' });
  k.place(P.gateArch(1.5), { x: GATE.entry.x, z: GATE.entry.z, rot: -0.35, name: 'arch' });
  k.footprints.push({ x: GATE.entry.x - 0.7, z: GATE.entry.z - 0.25, r: 0.14 }, { x: GATE.entry.x + 0.7, z: GATE.entry.z + 0.25, r: 0.14 });
  k.station({ id: 'gate-gaze', label: 'watching for the mail bird', activity: 'gaze', pos: { x: -0.6, z: 10.6 }, face: 0.5, tags: ['calm', 'mail'] });
  return k;
}

/** Outside the front: porch hangouts available from the start. */
function porch() {
  const k = new RoomKit('porch', 0);
  k.station({ id: 'porch-sit', label: 'sitting on the porch step', activity: 'sit', pos: { x: 3.4, z: 7.1 }, face: 0, tags: ['calm', 'social'] });
  k.station({ id: 'porch-gaze', label: 'looking at the mist', activity: 'gaze', pos: { x: 0.9, z: 7.9 }, face: -PI * 0.8, tags: ['calm'] });
  const pl = k.place(plant('flowers', { scale: 0.8, color: '#c9b49a', seed: 11 }), { x: 5.3, z: 6.6, footprint: { r: 0.2 } });
  k.plants.push(pl);
  return k;
}

/** The underside: a machine room hanging below the island, and the ledger. */
function underside() {
  const k = new RoomKit('underside', -1);
  const g = k.group;
  const y0 = -5.6;
  const cx = 6.6;
  const cz = 3.2;
  // platform (hangs on roots)
  const deck = mat('#a68a6e', { roughness: 0.9 });
  g.add(mesh(rbox(3.6, 0.12, 2.6, 0.04), deck, { pos: [cx, y0, cz] }));
  for (let i = 0; i < 7; i++) g.add(mesh(rbox(0.06, 0.13, 2.62, 0.01), mat('#957a60'), { pos: [cx - 1.6 + i * 0.53, y0 + 0.005, cz] }));
  const root = mat('#8a6c50', { roughness: 0.95 });
  for (const [dx, dz] of [
    [-1.6, -1.1],
    [1.6, -1.1],
    [-1.6, 1.1],
    [1.6, 1.1],
  ]) {
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(cx + dx * 0.6 - 1.2, -1.6, cz + dz * 0.5 - 0.6), new THREE.Vector3(cx + dx * 0.8, -3.6, cz + dz * 0.8), new THREE.Vector3(cx + dx, y0, cz + dz)]);
    g.add(mesh(new THREE.TubeGeometry(curve, 16, 0.07, 6, false), root));
  }
  // jars and pipes
  const jars = [];
  const cols = ['#ffd27a', '#9fe0c8', '#f2a7c3', '#b8c8ff', '#ffd27a'];
  for (let i = 0; i < 5; i++) {
    const j = P.glowJar(cols[i], 0.3 + (i % 2) * 0.1);
    j.position.set(cx - 1.4 + i * 0.36, y0 + 0.06, cz - 1.0);
    g.add(j);
    jars.push(j);
  }
  g.add(P.pipe([[cx - 1.5, y0 + 0.5, cz - 1.15], [cx - 0.6, y0 + 1.1, cz - 1.2], [cx + 0.2, y0 + 0.7, cz - 1.15], [cx + 1.2, y0 + 1.6, cz - 0.9], [cx + 0.6, -2.4, cz - 0.4]], 0.05));
  g.add(P.pipe([[cx + 1.5, y0 + 0.1, cz + 0.6], [cx + 1.6, y0 + 1.0, cz + 0.4], [cx + 0.9, -2.8, cz + 0.2]], 0.04, '#b6a58a'));
  // a big gear + boiler
  g.add(mesh(cyl(0.35, 0.4, 0.8, 16), mat('#b49a7e', { roughness: 0.5, metalness: 0.3 }), { pos: [cx + 1.25, y0 + 0.46, cz - 0.6] }));
  const gear = new THREE.Group();
  for (let i = 0; i < 10; i++) gear.add(mesh(rbox(0.1, 0.08, 0.06, 0.01), mat('#a39073', { metalness: 0.4 }), { pos: [Math.cos((i / 10) * PI * 2) * 0.32, Math.sin((i / 10) * PI * 2) * 0.32, 0], rot: [0, 0, (i / 10) * PI * 2] }));
  gear.add(mesh(cyl(0.3, 0.3, 0.06, 20), mat('#a39073', { metalness: 0.4 }), { rot: [PI / 2, 0, 0] }));
  gear.position.set(cx + 0.4, y0 + 0.7, cz - 1.25);
  g.add(gear);
  k.objects.gear = gear;
  k.objects.jars = jars;
  // the ledger
  const led = P.ledger();
  led.position.set(cx - 0.3, y0 + 0.06, cz + 0.55);
  led.rotation.y = PI / 5;
  g.add(led);
  led.userData.interactive = { kind: 'ledger' };
  k.objects.ledger = led;
  // a lantern so it's never pitch dark
  const lantern = new THREE.PointLight('#ffcf8a', 3, 6, 1.5);
  lantern.position.set(cx, y0 + 1.6, cz + 0.4);
  g.add(lantern);
  g.add(mesh(sphere(0.09, 10, 8), mat('#fff0c8', { emissive: '#ffcf8a', emissiveIntensity: 2 }), { pos: [cx, y0 + 1.6, cz + 0.4], cast: false }));
  g.add(mesh(cyl(0.008, 0.008, 1.2, 4), mat('#6b5644'), { pos: [cx, y0 + 2.2, cz + 0.4] }));
  return k;
}

const BUILDERS = { commons, workshop, study, kitchen, bunk, yours, attic };

/**
 * Keeps one RoomKit per built room (plus outside areas), parented to the
 * world's persistent level groups at the right floor height.
 */
export class Furnisher {
  constructor(world) {
    this.world = world;
    this.kits = new Map();
  }

  sync(structure) {
    const house = this.world.house;
    const want = new Set(structure.built.filter((id) => BUILDERS[id]));
    want.add('porch');
    if (structure.chunks.includes('gate')) want.add('gate');
    want.add('underside');
    for (const id of want) {
      let kit = this.kits.get(id);
      if (!kit) {
        kit = id === 'gate' ? gate() : id === 'porch' ? porch() : id === 'underside' ? underside() : BUILDERS[id]();
        this.kits.set(id, kit);
        // register wall-mounted things on exterior walls so they pop with the cutaway
        for (const o of kit.group.children) {
          if (o.userData.wall) house.follow(id, o.userData.wall, o);
        }
      }
      if (id === 'commons') {
        // the unopened boxes are gone once the workshop is unpacked
        const open = structure.built.includes('workshop');
        const boxes = kit.objects.boxes;
        if (boxes) boxes.visible = !open;
        kit.footprints = kit.footprints.filter((f) => f.tag !== 'boxes' || !open);
      }
      const r = house.byId[id];
      const level = r ? r.level : id === 'underside' ? 0 : 0;
      kit.level = level;
      for (const s of kit.stations) s.level = level;
      kit.group.position.y = r ? r.base : id === 'porch' ? FLOOR0 : 0;
      if (id === 'underside') kit.group.position.y = 0;
      this.world.levels[level].add(kit.group);
    }
    house._reattachFollowers();
  }

  get stations() {
    const out = [];
    for (const k of this.kits.values()) out.push(...k.stations);
    return out;
  }

  kit(id) {
    return this.kits.get(id) || null;
  }

  obj(room, name) {
    return this.kits.get(room)?.objects[name] || null;
  }

  footprintsFor(level) {
    const out = [];
    for (const k of this.kits.values()) if (k.level === level && k.id !== 'underside') out.push(...k.footprints.filter((f) => !f.optional || f.active));
    return out;
  }

  get lamps() {
    const lights = [];
    const glows = [];
    for (const k of this.kits.values()) {
      lights.push(...k.lights);
      glows.push(...k.glows);
    }
    return { lights, glows };
  }
}

export { CHUNKS };
