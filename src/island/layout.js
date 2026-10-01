// The floor plan of the island house, and the land it sits on.
//
// The house is a 2x2 grid of 6x6 rooms per floor. Looking from each of the
// four corner angles, the room nearest the camera has both of its exterior
// walls removed, so every rotation gives a clear view into one room:
//
//            north (-z)
//        +--------+--------+
//        | study  |workshop|        camera angle 0 (default) sits south-east
//   west |  (NW)  |  (NE)  | east   -> commons fully open
//        +--------+--------+        angle 1 north-east -> workshop
//        |kitchen |commons |        angle 2 north-west -> study
//        |  (SW)  |  (SE)  |        angle 3 south-west -> kitchen
//        +--------+--------+
//            south (+z)   porch + front door below the commons
//
// Upstairs (floor 1) sits over the north half: the bunk room over the
// workshop and your room over the study. The attic sits on top of the
// north-east column. The gate is outside, on a promontory to the south-west.

export const H = 3.0; // floor-to-floor height
export const T = 0.22; // wall thickness
export const ATTIC_H = 2.0;

/** Rooms. `unlock` names the unlock that brings the room into the world. */
export const ROOMS = {
  commons: { id: 'commons', name: 'the commons', floor: 0, x0: 0, x1: 6, z0: 0, z1: 6, unlock: null, angle: 0, floorStyle: 'planks', tint: '#e9cdb0' },
  workshop: { id: 'workshop', name: 'the workshop', floor: 0, x0: 0, x1: 6, z0: -6, z1: 0, unlock: 'workshop', angle: 1, floorStyle: 'boards', tint: '#d9c3a6', sealedAtStart: true },
  study: { id: 'study', name: 'the study', floor: 0, x0: -6, x1: 0, z0: -6, z1: 0, unlock: 'study', angle: 2, floorStyle: 'planks', tint: '#d6c9b8' },
  kitchen: { id: 'kitchen', name: 'the kitchen', floor: 0, x0: -6, x1: 0, z0: 0, z1: 6, unlock: 'kitchen', angle: 3, floorStyle: 'tiles', tint: '#ece0cc' },
  bunk: { id: 'bunk', name: 'the bunk room', floor: 1, x0: 0, x1: 6, z0: -6, z1: 0, unlock: 'upstairs', angle: 1, floorStyle: 'planks', tint: '#e2d3c4' },
  yours: { id: 'yours', name: 'your room', floor: 1, x0: -6, x1: 0, z0: -6, z1: 0, unlock: 'upstairs', angle: 2, floorStyle: 'planks', tint: '#eadbd0' },
  attic: { id: 'attic', name: 'the attic', floor: 'top', x0: 0, x1: 6, z0: -6, z1: 0, unlock: 'upstairs', attic: true, floorStyle: 'boards', tint: '#dccab4' },
};

/** Doorways between rooms (on the shared wall) and to the outside. */
export const DOORS = [
  { a: 'commons', b: 'workshop', along: 3.6, boardedUntil: 'workshop' },
  { a: 'commons', b: 'kitchen', along: 3.4 },
  { a: 'workshop', b: 'study', along: -3.2 },
  { a: 'study', b: 'kitchen', along: -2.8 },
  { a: 'bunk', b: 'yours', along: -3.0 },
  // front door: commons south wall -> porch
  { a: 'commons', side: 'south', along: 2.0, front: true },
  // kitchen back door -> the gate path
  { a: 'kitchen', side: 'south', along: -1.6 },
  // bunk room door at the top of the stairs
  { a: 'bunk', side: 'south', along: 5.3, upstairsLanding: true },
];

/** Windows on exterior walls: side + position along the wall + kind. */
export const WINDOWS = {
  commons: [
    { side: 'south', along: 4.6, kind: 'rect' },
    { side: 'east', along: 3.2, kind: 'arch' },
  ],
  workshop: [
    { side: 'east', along: -3.0, kind: 'rect' },
    { side: 'north', along: 3.0, kind: 'rect' },
  ],
  study: [
    { side: 'north', along: -3.0, kind: 'arch' },
    { side: 'west', along: -3.0, kind: 'round' },
  ],
  kitchen: [
    { side: 'west', along: 3.0, kind: 'rect' },
    { side: 'south', along: -4.2, kind: 'rect' },
  ],
  bunk: [
    { side: 'east', along: -3.0, kind: 'round' },
    { side: 'north', along: 3.0, kind: 'rect' },
  ],
  yours: [
    { side: 'north', along: -3.0, kind: 'arch' },
    { side: 'west', along: -3.0, kind: 'rect' },
  ],
};

/** Ways between floors. Critters climb these with a little scripted move. */
export const PORTALS = [
  // the staircase runs up the east side of the commons, landing at the bunk room
  { id: 'stairs', kind: 'stairs', from: { floor: 0, x: 5.35, z: 5.0 }, to: { floor: 1, x: 5.3, z: -0.7 }, unlock: 'upstairs' },
  // ladder from the bunk room up to the attic
  { id: 'ladder', kind: 'ladder', from: { floor: 1, x: 0.7, z: -5.2 }, to: { floor: 2, x: 1.5, z: -4.6 }, unlock: 'upstairs' },
];

/** Land. Each chunk is a soft rounded blob; new chunks rise from the mist. */
export const CHUNKS = {
  core: { id: 'core', cx: 3.3, cz: 0.7, hx: 4.6, hz: 8.1, p: 3.2, depth: 7.5, seed: 1, unlock: null },
  west: { id: 'west', cx: -3.3, cz: 0.0, hx: 4.6, hz: 7.4, p: 3.0, depth: 6.2, seed: 2, unlock: 'west' },
  gate: { id: 'gate', cx: -2.4, cz: 9.8, hx: 3.4, hz: 2.7, p: 2.6, depth: 3.6, seed: 3, unlock: 'gate' },
  garden: { id: 'garden', cx: 10.2, cz: 2.0, hx: 3.0, hz: 3.8, p: 2.6, depth: 3.8, seed: 4, unlock: 'garden' },
  shed: { id: 'shed', cx: 2.6, cz: -10.4, hx: 3.6, hz: 2.6, p: 2.6, depth: 3.4, seed: 5, unlock: 'shed' },
};

/** Porch in front of the commons (part of the core from the start). */
export const PORCH = { x0: 0.3, x1: 5.7, z0: 6.0, z1: 7.6 };

/** Where the gate things go (on the gate chunk). */
export const GATE = { mailbox: { x: -1.6, z: 9.2 }, wall: { x: -3.6, z: 8.2 }, perch: { x: -0.2, z: 11.4 }, mooring: { x: -4.6, z: 11.2 }, entry: { x: -1.0, z: 8.0 } };

/** The order the world reveals itself in, and what each unlock touches. */
export const UNLOCKS = {
  board: { title: 'the idea board', rooms: [], chunks: [] },
  workshop: { title: 'the workshop', rooms: ['workshop'], chunks: [] },
  gate: { title: 'the gate', rooms: [], chunks: ['gate'] },
  study: { title: 'the study', rooms: ['study'], chunks: ['west'] },
  kitchen: { title: 'the kitchen', rooms: ['kitchen'], chunks: ['west'] },
  upstairs: { title: 'upstairs', rooms: ['bunk', 'yours', 'attic'], chunks: [] },
  garden: { title: 'the garden', rooms: [], chunks: ['garden'] },
  shed: { title: 'the long-project shed', rooms: [], chunks: ['shed'] },
};

export const SIDES = ['north', 'south', 'east', 'west'];

export function roomRect(r) {
  return { x0: r.x0, x1: r.x1, z0: r.z0, z1: r.z1, cx: (r.x0 + r.x1) / 2, cz: (r.z0 + r.z1) / 2 };
}

/** Which room (if any) is directly across `side` from room r, on the same floor. */
export function neighbor(r, side, rooms) {
  const c = roomRect(r);
  const probe = {
    north: [c.cx, r.z0 - 0.5],
    south: [c.cx, r.z1 + 0.5],
    east: [r.x1 + 0.5, c.cz],
    west: [r.x0 - 0.5, c.cz],
  }[side];
  return rooms.find((o) => o !== r && o.level === r.level && probe[0] > o.x0 && probe[0] < o.x1 && probe[1] > o.z0 && probe[1] < o.z1) || null;
}

export const OUTWARD = {
  north: [0, -1],
  south: [0, 1],
  east: [1, 0],
  west: [-1, 0],
};
