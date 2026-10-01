// The Post Room: where anything that leaves the house gets sent, and where
// replies arrive. (For now: a cozy little mail office the critters run.)
//   NE  Letter Wall — pinned "sent" letters, a bench
//   SE  Outbox      — the big mailbox, parcels
//   SW  Sorting Desk — trays, stamps, the pneumatic tube
//   NW  Cubbies      — the wall of pigeonholes
import * as THREE from 'three';
import { Room } from '../room.js';
import * as F from '../props/furniture.js';
import * as D from '../props/decor.js';
import * as P from '../props/post.js';
import { bus } from '../../core/events.js';
import { bounce, wiggle, toggleLamp } from './nook.js';
import { rand } from '../../core/util.js';

const PI = Math.PI;

export const POST_SPEC = {
  id: 'post',
  name: 'The Post Room',
  w: 8,
  d: 7,
  h: 3.3,
  floor: { type: 'tiles', a: '#f7e6cf', b: '#ecd0ae', units: 2, n: 4 },
  wallStyle: { paper: '#e4eefb', pattern: 'scallop', accent: '#a9c0e6', wainscot: '#d5e2f3', board: '#9fb4d6', unit: 2, wainscotH: 1.05 },
  walls: {
    south: { paper: '#fbeee0', pattern: 'flowers', accent: '#f4b2a3', wainscot: '#f6dcc4', board: '#c98d5d' },
    west: { paper: '#fbeee0', pattern: 'flowers', accent: '#f4b2a3', wainscot: '#f6dcc4', board: '#c98d5d' },
  },
  wallCap: '#fff3e3',
  trim: '#c9d6ea',
  base: ['#fff1e2', '#b9cdea', '#93acd6'],
  corners: { nw: 'Cubbies', ne: 'Letter Wall', se: 'Outbox', sw: 'Sorting Desk' },
  openings: [
    { wall: 'east', type: 'door', shape: 'arch', x: 0.9, w: 1.25, h: 2.25, to: 'nook' },
    { wall: 'north', type: 'window', shape: 'arch', x: -1.4, y: 1.0, w: 1.3, h: 1.65 },
    { wall: 'south', type: 'window', shape: 'rect', x: 2.4, y: 1.05, w: 1.4, h: 1.35 },
    { wall: 'west', type: 'window', shape: 'round', x: -1.9, y: 1.2, w: 1.0, h: 1.0 },
  ],
  navOpen: [{ x: 3.6, z: 0.9, w: 1.0, d: 1.3, rot: 0 }],
};

export function buildPost(world) {
  const room = new Room(POST_SPEC);
  const { walls } = room;
  const view = world.daylight.view;
  const plants = [];

  const [doorOp, northWin, southWin, westWin] = POST_SPEC.openings;
  const door = D.addDoor(room, walls.east, doorOp, { sign: 'the nook', color: '#9fc3e8', trim: '#6f93c6', behind: '#ffe3bf' });
  room.makeInteractive(door.holder, { label: 'Door to the Nook', hint: 'click to go back', onClick: () => bus.emit('door:click', room, door) });
  D.addWindow(room, walls.north, northWin, view, { curtain: '#cfe0f7', flowers: ['#ff9db5', '#ffd36b'] });
  D.addWindow(room, walls.south, southWin, view, { curtain: '#ffc9b8' });
  D.addWindow(room, walls.west, westWin, view, {});

  room.place(F.welcomeMat('mail!'), { x: 3.35, z: 0.9, rot: -PI / 2 });
  room.station({ id: 'door', label: 'heading back to the Nook', corner: 'ne', activity: 'door', pos: { x: 3.15, z: 0.9 }, face: PI / 2, tags: ['travel'], door });

  // ---------------------------------------------------------------- NE letter wall
  const lw = P.letterWall(2.4, 1.35);
  const lwHolder = walls.north.add(lw, 1.75, 1.75);
  room.letterWall = lw;
  room.makeInteractive(lwHolder, { label: 'Letter Wall', hint: 'every letter sent', onClick: () => bus.emit('letters:open', room) });
  walls.north.add(D.sign('sent with love', { w: 1.3, h: 0.24, bg: '#fff3df', color: '#e07a5f' }), 1.75, 2.72);
  room.place(P.bench(1.4, '#ffc4cf'), { x: 1.75, z: -2.95, rot: 0, footprint: { w: 1.4, d: 0.5 } });
  room.station({ id: 'bench-a', label: 'reading old letters', corner: 'ne', activity: 'read', pos: { x: 1.35, z: -2.95 }, approach: { x: 1.35, z: -2.15 }, seat: 0.42, face: 0, tags: ['rest', 'social'] });
  room.station({ id: 'bench-b', label: 'resting on the bench', corner: 'ne', activity: 'sit', pos: { x: 2.15, z: -2.95 }, approach: { x: 2.15, z: -2.15 }, seat: 0.42, face: 0, tags: ['rest', 'social'] });
  room.station({ id: 'letters', label: 'admiring the letter wall', corner: 'ne', activity: 'admire', pos: { x: 3.2, z: -2.6 }, face: PI - 0.5, tags: ['calm'] });
  const fl = D.fairyLights(7.6, 0.25, 16, ['#ffd27a', '#bfe6ff', '#ffb3c6']);
  walls.north.add(fl, 0, 3.0);
  room.glows.push(fl);

  // ---------------------------------------------------------------- SE outbox
  const box = P.mailbox();
  room.place(box, { x: 2.85, z: 2.55, rot: -PI / 4 + 0.2, footprint: { r: 0.48 }, interactive: { label: 'The Mailbox', hint: 'outgoing mail goes here', onClick: (o) => { bounce(o); bus.emit('sfx', 'mail'); } } });
  room.mailbox = box;
  room.station({ id: 'mailbox', label: 'posting a letter', corner: 'se', activity: 'post', pos: { x: 2.2, z: 1.9 }, face: Math.atan2(2.85 - 2.2, 2.55 - 1.9), tags: ['work', 'mail'] });
  room.place(F.crate('#d9a876', 0.5), { x: 3.55, z: 1.25 + 0.1, rot: 0.3, footprint: { w: 0.55, d: 0.55 } });
  room.place(F.crate('#e8bb88', 0.42), { x: 1.4, z: 3.05, rot: -0.2, footprint: { w: 0.45, d: 0.45 } });
  room.place(F.crate('#c99a6a', 0.34), { x: 1.38, z: 3.05, y: 0.34, rot: 0.25 });
  room.place(F.basket('#e2b47c'), { x: 3.55, z: 3.0, footprint: { r: 0.3 } });
  for (let i = 0; i < 4; i++) {
    const e = P.envelope(['#fff3e0', '#ffe4ec', '#e6f3ff', '#fff8d6'][i], 0.8);
    e.position.set(3.55 + rand(-0.08, 0.08), 0.24 + i * 0.02, 3.0 + rand(-0.06, 0.06));
    e.rotation.set(-PI / 2, 0, rand(0, 3));
    room.props.add(e);
  }
  walls.south.add(D.pictureFrame(0.46, 0.34, D.ART.map, '#fff7ec'), -1.0, 1.75);
  walls.east.add(D.wallClock(0.28), 2.6, 2.4);

  // ---------------------------------------------------------------- SW sorting desk
  const sd = P.sortingDesk();
  room.place(sd, { x: -2.3, z: 2.85, rot: PI, footprint: { w: 1.75, d: 0.8 } });
  room.station({ id: 'sort', label: 'stamping letters', corner: 'sw', activity: 'stamp', pos: { x: -1.85, z: 2.05 }, face: 0, tags: ['work', 'mail'] });
  room.station({ id: 'sort-b', label: 'sorting the mail', corner: 'sw', activity: 'stamp', pos: { x: -2.75, z: 2.05 }, face: 0, tags: ['work', 'mail'] });
  const tb = P.tube(
    [
      [-3.2, 0.6, 3.15],
      [-3.45, 1.0, 3.2],
      [-3.6, 1.8, 3.25],
      [-3.6, 2.8, 3.25],
      [-3.6, 3.22, 3.25],
    ],
    '#cbd5e1'
  );
  room.place(tb, { isStatic: false });
  room.tube = tb;
  room.place(F.stool('#9fd3c7', 0.34), { x: -3.6, z: 1.6 });
  const lamp = F.floorLamp('#fff0d6');
  room.place(lamp, { x: -3.55, z: 0.55, footprint: { r: 0.28 }, interactive: { label: 'Floor lamp', hint: 'click to toggle', onClick: (o) => toggleLamp(o) } });
  room.lights.push(lamp);
  walls.south.add(D.bunting(3.2, 0.22, ['#9ccdf2', '#ffd36b', '#ffb59a', '#c7b6ee']), 1.9, 2.85);

  // ---------------------------------------------------------------- NW cubbies
  room.place(P.cubbies({ cols: 4, rows: 4, w: 2.1, h: 1.85, d: 0.45 }), { x: -3.72, z: -1.35, rot: PI / 2, footprint: { w: 2.2, d: 0.5 }, hideWith: 'west' });
  room.station({ id: 'cubby', label: 'filing letters in the cubbies', corner: 'nw', activity: 'reach', pos: { x: -2.95, z: -1.35 }, face: -PI / 2, tags: ['work', 'mail'] });
  room.station({ id: 'cubby-b', label: 'checking the cubbies', corner: 'nw', activity: 'reach', pos: { x: -2.95, z: -0.65 }, face: -PI / 2, tags: ['work', 'mail'] });
  const pl = F.plant('leafy', { scale: 1.1, seed: 12, color: '#9fc3e8' });
  plants.push(pl);
  room.place(pl, { x: -3.45, z: -2.95, footprint: { r: 0.3 }, interactive: { label: 'Post plant', hint: 'thriving', onClick: (o) => wiggle(o) } });
  room.station({ id: 'water-post', label: 'watering the post plant', corner: 'nw', activity: 'water', pos: { x: -2.75, z: -2.6 }, face: Math.atan2(-3.45 + 2.75, -2.95 + 2.6), tags: ['care'] });
  room.station({ id: 'window-n', label: 'peeking out the window', corner: 'nw', activity: 'gaze', pos: { x: -1.4, z: -2.85 }, face: PI, tags: ['rest', 'calm'] });
  walls.north.add(D.pictureFrame(0.4, 0.3, D.ART.hills), -3.0, 2.35);
  walls.west.add(D.sign('cubbies', { w: 0.8, h: 0.22, bg: '#fff3df', color: '#6f93c6' }), 1.35, 2.35);

  // center rug + small table
  room.place(F.rectRug(2.6, 1.7, ['#9ccdf2', '#fff6ea', '#ffc4cf', '#fff6ea'], '#7fb2e3'), { x: -0.1, z: 0.2, rot: 0 });
  room.place(F.floorCushion('#ffd977', 0.34), { x: -0.7, z: 0.2 });
  room.place(F.floorCushion('#ffc4cf', 0.34), { x: 0.6, z: 0.2 });
  room.station({ id: 'rug-a', label: 'chatting on the rug', corner: 'center', activity: 'tea', pos: { x: -0.7, z: 0.2 }, seat: 0.18, face: PI / 2, tags: ['social', 'rest'] });
  room.station({ id: 'rug-b', label: 'chatting on the rug', corner: 'center', activity: 'tea', pos: { x: 0.6, z: 0.2 }, seat: 0.18, face: -PI / 2, tags: ['social', 'rest'] });
  const pl2 = F.plant('flowers', { scale: 0.9, seed: 21, color: '#ffd2b8' });
  plants.push(pl2);
  room.place(pl2, { x: 3.55, z: -0.35, footprint: { r: 0.22 } });

  room.onUpdate(F.swayPlants(plants));

  // the pneumatic tube occasionally whooshes a capsule up
  let podT = -rand(4, 10);
  room.onUpdate((dt) => {
    const { curve, pod } = tb.userData;
    podT += dt;
    if (podT > 0) {
      const u = podT / 1.4;
      if (u >= 1) {
        pod.visible = false;
        podT = -rand(8, 18);
      } else {
        pod.visible = true;
        const p = curve.getPoint(u);
        const tan = curve.getTangent(u);
        pod.position.copy(p);
        pod.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan);
        if (u < 0.02 && world.roomId === 'post') bus.emit('sfx', 'whoosh');
      }
    }
    const flag = box.userData.flag;
    const want = (world.store.data.letters?.length || 0) > 0 ? -1.4 : 0;
    flag.rotation.z += (want - flag.rotation.z) * Math.min(1, dt * 4);
  });

  room.finalize();
  return room;
}
