// The Nook: the main room. Four corners, four moods.
//   NW  Cozy Corner — bed, books, reading chair, the big arched window
//   NE  Idea Corner — the idea board, bean bags, an easel, a lightbulb lamp
//   SE  Workshop    — workbench, computer, pegboard, the shelf of builds
//   SW  Front Door  — the door to the Post Room, today's chalkboard, hooks
import * as THREE from 'three';
import { Room } from '../room.js';
import * as F from '../props/furniture.js';
import * as D from '../props/decor.js';
import { mat, COLORS } from '../../gfx/materials.js';
import { bus } from '../../core/events.js';

const PI = Math.PI;

export const NOOK_SPEC = {
  id: 'nook',
  name: 'The Nook',
  w: 10,
  d: 9,
  h: 3.3,
  floor: { type: 'planks', base: '#dda673', units: 4, plankW: 0.5, seed: 3 },
  wallStyle: { paper: '#fde7d4', pattern: 'dots', accent: '#f4ab98', wainscot: '#f8dcc0', board: '#c98d5d', unit: 2, wainscotH: 1.05 },
  walls: {
    east: { paper: '#e8f1e4', pattern: 'stripes', accent: '#b9d9b0', wainscot: '#d9ead2' },
    south: { paper: '#e8f1e4', pattern: 'stripes', accent: '#b9d9b0', wainscot: '#d9ead2' },
  },
  wallCap: '#fff3e3',
  trim: '#e9b98c',
  base: ['#fff1e2', '#f6b9a2', '#e99a86'],
  corners: { nw: 'Cozy Corner', ne: 'Idea Corner', se: 'Workshop', sw: 'Front Door' },
  openings: [
    { wall: 'north', type: 'window', shape: 'arch', x: -2.6, y: 0.95, w: 1.5, h: 1.8 },
    { wall: 'west', type: 'window', shape: 'round', x: 1.8, y: 1.15, w: 1.15, h: 1.15 },
    { wall: 'west', type: 'door', shape: 'arch', x: -2.6, w: 1.25, h: 2.25, to: 'post' },
    { wall: 'south', type: 'window', shape: 'rect', x: -3.0, y: 1.05, w: 1.6, h: 1.45 },
  ],
  navOpen: [{ x: -4.6, z: 2.6, w: 1.0, d: 1.3, rot: 0 }],
};

export function buildNook(world) {
  const room = new Room(NOOK_SPEC);
  const { walls } = room;
  const view = world.daylight.view;
  const plants = [];
  const addPlant = (p) => {
    plants.push(p);
    return p;
  };

  // ---------------------------------------------------------------- windows & door
  const [archWin, roundWin, doorOp, southWin] = NOOK_SPEC.openings;
  D.addWindow(room, walls.north, archWin, view, { curtain: '#ffb7a3', flowers: ['#ff9db5', '#fff4f0', '#ffd36b'] });
  D.addWindow(room, walls.west, roundWin, view, { frame: '#fff8ef' });
  D.addWindow(room, walls.south, southWin, view, { curtain: '#b9e0d2', tie: '#fffaf0', flowers: ['#ffd36b', '#ff9a8c', '#c7a8f2'] });
  const door = D.addDoor(room, walls.west, doorOp, { sign: 'post room', behind: '#ffe3bf' });
  room.makeInteractive(door.holder, {
    label: 'Door to the Post Room',
    hint: 'click to visit',
    onClick: () => bus.emit('door:click', room, door),
  });

  // ---------------------------------------------------------------- NW: cozy corner
  const bed = F.bed({ w: 2.0, d: 1.4 });
  room.place(bed, { x: -3.6, z: -3.42, rot: 0, footprint: { w: 2.0, d: 1.45 }, interactive: { label: 'The big bed', hint: 'fluff the pillows', onClick: (o) => bounce(o) } });
  room.station({ id: 'bed-a', label: 'napping in the big bed', corner: 'nw', activity: 'sleep', pos: { x: -4.05, z: -3.25 }, approach: { x: -4.0, z: -2.2 }, seat: 0.46, face: 0, tags: ['rest'] });
  room.station({ id: 'bed-b', label: 'napping in the big bed', corner: 'nw', activity: 'sleep', pos: { x: -3.15, z: -3.25 }, approach: { x: -3.1, z: -2.2 }, seat: 0.46, face: 0, tags: ['rest'] });

  room.place(F.bookshelf({ w: 1.4, h: 1.95, seed: 5 }), { x: -1.25, z: -4.22, rot: 0, footprint: { w: 1.45, d: 0.45 }, hideWith: 'north' });
  room.station({ id: 'shelf', label: 'browsing the bookshelf', corner: 'nw', activity: 'browse', pos: { x: -1.25, z: -3.35 }, face: PI, tags: ['fun', 'learn'] });
  room.place(addPlant(F.plant('flowers', { scale: 0.85, color: '#9fd3c7', seed: 4 })), { x: -2.27, z: -4.15, footprint: { r: 0.2 } });

  const chair = F.armchair('#c7b6ee');
  room.place(chair, { x: -1.55, z: -1.75, rot: 0.75, footprint: { w: 1.05, d: 0.9 }, interactive: { label: 'Reading chair', hint: 'so squishy' , onClick: (o) => bounce(o) } });
  room.station({ id: 'chair', label: 'reading in the comfy chair', corner: 'nw', activity: 'read', pos: { x: -1.53, z: -1.73 }, approach: { x: -0.95, z: -1.1 }, seat: 0.46, face: 0.75, tags: ['fun', 'learn', 'rest'] });

  room.place(F.rectRug(2.4, 1.6, ['#c7b6ee', '#fff6ea', '#ffc4cf', '#fff6ea'], '#b9a5e6'), { x: -2.7, z: -1.85, rot: 0 });
  room.place(F.floorCushion('#ffd977', 0.32), { x: -3.1, z: -1.7, footprint: null });
  room.station({ id: 'cushion-read', label: 'reading on the rug', corner: 'nw', activity: 'read', pos: { x: -3.1, z: -1.7 }, seat: 0.16, face: 0.4, tags: ['fun', 'learn'] });

  room.station({ id: 'round-window', label: 'gazing out the round window', corner: 'nw', activity: 'gaze', pos: { x: -4.2, z: -1.8 }, face: -PI / 2, tags: ['rest', 'calm'] });

  const lampNW = F.floorLamp('#fff0d6');
  room.place(lampNW, { x: -4.5, z: -0.55, footprint: { r: 0.28 }, interactive: { label: 'Floor lamp', hint: 'click to toggle', onClick: (o) => toggleLamp(o) } });
  room.lights.push(lampNW);
  const bigPlant = addPlant(F.plant('leafy', { scale: 1.25, seed: 9, color: '#e88c66' }));
  room.place(bigPlant, { x: -4.45, z: 0.55, footprint: { r: 0.3 }, interactive: { label: 'Monty the monstera', hint: 'say hi', onClick: (o) => wiggle(o) } });
  room.station({ id: 'water-monty', label: 'watering Monty', corner: 'nw', activity: 'water', pos: { x: -3.75, z: 0.55 }, face: -PI / 2, tags: ['care'] });

  // north wall decor (cozy side)
  walls.north.add(D.pictureFrame(0.55, 0.42, D.ART.hills), -4.35, 1.55);
  walls.north.add(D.pictureFrame(0.4, 0.5, D.ART.critters, '#ffd6c9'), -4.35, 2.35);
  walls.north.add(D.pictureFrame(0.32, 0.32, D.ART.heart, '#fff7ec'), -0.6, 2.55);
  walls.north.add(D.wallShelf(0.9, [F.jar('#ff9db5'), D.bookStack(2, 3)]), -1.6, 2.4);
  const fl1 = D.fairyLights(9.4, 0.3, 22);
  walls.north.add(fl1, 0, 3.0);
  room.glows.push(fl1);
  const fl2 = D.fairyLights(8.4, 0.28, 18, ['#ffd27a', '#ffe9a8', '#ffb3c6']);
  walls.west.add(fl2, 0, 3.0);
  room.glows.push(fl2);
  walls.west.add(D.pictureFrame(0.5, 0.38, D.ART.stars, '#fff7ec'), 0.35, 1.8);
  walls.west.add(D.pictureFrame(0.34, 0.44, D.ART.flower, '#d8efe3'), 0.35, 1.05);

  // ---------------------------------------------------------------- NE: idea corner
  const board = D.makeCorkBoard(2.6, 1.45);
  const boardHolder = walls.north.add(board, 2.65, 1.78);
  room.makeInteractive(boardHolder, { label: 'The Idea Board', hint: 'click to read the notes', onClick: () => bus.emit('board:open', room) });
  room.ideaBoard = board;
  room.station({ id: 'board', label: 'pinning ideas on the board', corner: 'ne', activity: 'pin', pos: { x: 2.65, z: -3.72 }, face: PI, tags: ['ideas', 'work'] });
  room.station({ id: 'board-doodle', label: 'doodling on the idea board', corner: 'ne', activity: 'write', pos: { x: 1.9, z: -3.72 }, face: PI, tags: ['ideas', 'fun'] });
  walls.north.add(D.sign('ideas!', { w: 0.9, h: 0.26, bg: '#fff3df', color: '#e07a5f' }), 2.65, 2.75);

  room.place(F.beanBag('#ffd977'), { x: 1.75, z: -2.25, rot: 0.5, footprint: { r: 0.45 } });
  room.station({ id: 'beanbag-a', label: 'thinking on a bean bag', corner: 'ne', activity: 'think', pos: { x: 1.78, z: -2.2 }, approach: { x: 1.4, z: -1.35 }, seat: 0.3, face: 0.5, tags: ['ideas', 'rest'] });
  room.place(F.beanBag('#9fdcc0'), { x: 3.55, z: -2.1, rot: -0.4, footprint: { r: 0.45 } });
  room.station({ id: 'beanbag-b', label: 'thinking on a bean bag', corner: 'ne', activity: 'think', pos: { x: 3.52, z: -2.05 }, approach: { x: 3.4, z: -1.2 }, seat: 0.3, face: -0.4, tags: ['ideas', 'rest'] });

  const easel = F.easel(drawEaselArt);
  room.place(easel, { x: 4.25, z: -3.65, rot: -0.75, footprint: { r: 0.45 }, hideWith: 'north' });
  room.station({ id: 'easel', label: 'painting at the easel', corner: 'ne', activity: 'paint', pos: { x: 3.6, z: -3.0 }, face: 2.35, tags: ['fun', 'ideas'] });

  room.place(F.sideTable('#ffd0b5', 0.45), { x: 4.45, z: -1.0, footprint: { r: 0.3 } });
  const bulb = F.bulbLamp();
  room.place(bulb, { x: 4.45, z: -1.0, y: 0.48, interactive: { label: 'Lightbulb lamp', hint: 'click to toggle', onClick: (o) => toggleLamp(o) } });
  room.lights.push(bulb);
  walls.east.add(D.wallShelf(1.3, [D.trophy('#ffd27a'), F.jar('#9fdcc0', 0.2), D.trophy('#c9d4ff')]), -2.4, 2.05);
  walls.east.add(D.bunting(3.4, 0.25), -2.5, 2.85);
  room.place(addPlant(F.plant('tall', { scale: 1.1, seed: 2, color: '#ffd2b8' })), { x: 4.5, z: 0.25, footprint: { r: 0.25 } });

  // ---------------------------------------------------------------- center: tea & gramophone
  room.place(F.roundRug(2.1, ['#ffc9b3', '#fff4e6', '#f6a993', '#fde4cc', '#ffd9a0', '#fff4e6']), { x: 0.2, z: 0.35 });
  const table = F.coffeeTable({ r: 0.68 });
  room.place(table, { x: 0.2, z: 0.35, footprint: { r: 0.7 }, interactive: { label: 'Tea table', hint: 'there are cookies', onClick: (o) => bounce(o) } });
  const cushionCols = ['#ffc4cf', '#9fdcc0', '#c7b6ee', '#ffd977'];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * PI * 2 + PI / 4;
    const x = 0.2 + Math.sin(a) * 1.28;
    const z = 0.35 + Math.cos(a) * 1.28;
    room.place(F.floorCushion(cushionCols[i]), { x, z });
    room.station({ id: `tea-${i}`, label: 'having tea with friends', corner: 'center', activity: 'tea', pos: { x, z }, seat: 0.18, face: a + PI, tags: ['social', 'rest'] });
  }

  const gramophone = F.gramophone();
  room.place(gramophone, { x: 0.55, z: -3.95, rot: 0, footprint: { w: 0.95, d: 0.65 }, interactive: { label: 'Gramophone', hint: 'click for a dance party', onClick: () => bus.emit('music:party') } });
  room.gramophone = gramophone;
  room.station({ id: 'dance-a', label: 'dancing to the music', corner: 'center', activity: 'dance', pos: { x: 0.0, z: -2.6 }, face: 0, tags: ['fun', 'music'] });
  room.station({ id: 'dance-b', label: 'dancing to the music', corner: 'center', activity: 'dance', pos: { x: 1.0, z: -2.75 }, face: 0, tags: ['fun', 'music'] });
  room.station({ id: 'dance-c', label: 'dancing to the music', corner: 'center', activity: 'dance', pos: { x: 0.5, z: -1.9 }, face: 0, tags: ['fun', 'music'] });

  // ---------------------------------------------------------------- SE: workshop
  const bench = F.workbench({ w: 2.3, d: 0.8, h: 0.6 });
  room.place(bench, { x: 3.0, z: 3.98, rot: PI, footprint: { w: 2.35, d: 0.85 }, interactive: { label: 'Workbench', hint: 'a robot in progress', onClick: (o) => bounce(o) } });
  room.station({ id: 'bench', label: 'tinkering at the workbench', corner: 'se', activity: 'tinker', pos: { x: 3.0, z: 3.1 }, face: 0, tags: ['work', 'build'] });
  room.station({ id: 'bench-b', label: 'tinkering at the workbench', corner: 'se', activity: 'tinker', pos: { x: 2.0, z: 3.1 }, face: 0, tags: ['work', 'build'] });

  const deskObj = F.desk({ w: 1.5, d: 0.72, h: 0.56 });
  room.place(deskObj, { x: 4.4, z: 1.55, rot: -PI / 2, footprint: { w: 1.5, d: 0.75 } });
  const pc = F.computer();
  room.place(pc, { x: 4.45, z: 1.55, y: 0.59, rot: -PI / 2, interactive: { label: 'Computer', hint: 'beep boop', onClick: () => bus.emit('computer:click', room) } });
  room.computer = pc;
  room.onUpdate((dt) => pc.userData.update(dt));
  room.place(F.stool('#ffb59a', 0.34), { x: 3.45, z: 1.55 });
  room.station({ id: 'computer', label: 'typing on the computer', corner: 'se', activity: 'type', pos: { x: 3.45, z: 1.55 }, seat: 0.36, face: PI / 2, tags: ['work', 'build'], onStart: () => pc.userData.setMode('work'), onEnd: () => pc.userData.setMode('idle') });

  walls.east.add(D.pegboard(1.5, 0.95), 3.15, 1.55);
  const builds = D.wallShelf(1.5, [D.tinyRobot('#9ccdf2'), D.tinyRobot('#ffd977'), F.gear(0.08, mat('#f2c14e', { roughness: 0.4, metalness: 0.4 })), D.tinyRobot('#c7b6ee')]);
  walls.east.add(builds, 1.4, 2.25);
  walls.east.add(D.sign('builds', { w: 0.7, h: 0.22, bg: '#fff3df', color: '#5a8fc6' }), 1.4, 2.72);
  room.place(F.toolbox('#6aa6e8'), { x: 4.5, z: 3.0, rot: -0.3, footprint: { w: 0.5, d: 0.3 } });
  room.place(F.crate('#d9a876', 0.5), { x: 4.45, z: 4.05, rot: 0.2, footprint: { w: 0.55, d: 0.55 } });
  room.place(F.crate('#e8bb88', 0.38), { x: 4.4, z: 4.1, y: 0.4, rot: -0.3 });
  const deskLampHolder = new THREE.Group();
  room.place(addPlant(F.plant('succulent', { scale: 1, seed: 7, color: '#9fd3c7' })), { x: 1.55, z: 4.15, footprint: { r: 0.18 } });
  void deskLampHolder;

  // ---------------------------------------------------------------- SW: front door
  room.place(F.welcomeMat('hi!'), { x: -4.35, z: -0 + 2.6, rot: PI / 2 });
  room.station({ id: 'door', label: 'heading to the Post Room', corner: 'sw', activity: 'door', pos: { x: -4.15, z: 2.6 }, face: -PI / 2, tags: ['travel'], door });

  const chalk = D.makeChalkboard(1.5, 1.05, 'today');
  const chalkHolder = walls.south.add(chalk, 2.35, 1.72);
  room.makeInteractive(chalkHolder, { label: "Today's chalkboard", hint: 'click to see the list', onClick: () => bus.emit('todo:open', room) });
  room.chalkboard = chalk;
  room.station({ id: 'todo', label: "writing on today's board", corner: 'sw', activity: 'write', pos: { x: -2.35, z: 3.62 }, face: 0, tags: ['work', 'tasks'] });

  room.place(F.shoeBench(1.3), { x: -2.35, z: 4.18, rot: PI, footprint: { w: 1.3, d: 0.42 } });
  room.place(F.umbrellaStand(), { x: -4.5, z: 4.1, footprint: { r: 0.18 } });
  walls.west.add(D.wallHooks(3, [() => D.scarf('#ff9a8c'), () => D.tinyHat('#ffe08a'), () => D.scarf('#95c8f4')]), -3.95, 1.55);
  const clock = D.wallClock(0.3);
  walls.south.add(clock, 0.6, 2.45);
  room.onUpdate(() => clock.userData.update(new Date()));
  walls.south.add(D.pictureFrame(0.5, 0.36, D.ART.map, '#fff7ec'), 0.6, 1.55);
  room.place(F.yarnBasket(), { x: -0.9, z: 4.15, footprint: { r: 0.3 } });
  room.place(addPlant(F.plant('round', { scale: 1.0, seed: 3, color: '#ffd2b8' })), { x: -0.05, z: 4.15, footprint: { r: 0.25 }, interactive: { label: 'Bushy plant', hint: 'boop', onClick: (o) => wiggle(o) } });
  const lampSW = F.floorLamp('#e8f6ff');
  room.place(lampSW, { x: -4.5, z: 1.25, footprint: { r: 0.28 }, interactive: { label: 'Floor lamp', hint: 'click to toggle', onClick: (o) => toggleLamp(o) } });
  room.lights.push(lampSW);

  // ---------------------------------------------------------------- general stations
  room.station({ id: 'window-north', label: 'looking out the big window', corner: 'nw', activity: 'gaze', pos: { x: -2.1, z: -3.62 }, face: PI, tags: ['rest', 'calm'] });
  room.station({ id: 'window-south', label: 'watching the clouds', corner: 'se', activity: 'gaze', pos: { x: 2.35, z: 2.7 }, face: 0.4, tags: ['rest', 'calm'] });

  room.onUpdate(F.swayPlants(plants));
  // a little steam from the teapot
  let steamT = 0;
  const spout = new THREE.Vector3();
  room.onUpdate((dt) => {
    steamT -= dt;
    if (steamT > 0) return;
    steamT = 0.55 + Math.random() * 0.5;
    spout.set(0.2 + 0.17, 0.32 + 0.04 + 0.2, 0.35 - 0.05);
    bus.emit('fx', 'steam', spout);
  });
  room.onUpdate((dt) => {
    const playing = world.sound.musicOn && world.sound.ctx;
    gramophone.userData.record.rotation.y -= dt * (playing ? 3.5 : 0);
    gramophone.userData.horn.scale.setScalar(playing ? 1 + Math.max(0, Math.sin(world.sound.beat() * PI)) * 0.03 : 1);
  });

  room.finalize();
  return room;
}

// ------------------------------------------------------------------ prop pokes
function bounce(o) {
  o.userData.bounceT = 0;
  if (!o.userData.bouncing) {
    o.userData.bouncing = true;
    const base = o.scale.clone();
    const tick = () => {
      o.userData.bounceT += 1 / 60;
      const t = o.userData.bounceT;
      const s = Math.sin(t * 22) * Math.exp(-t * 6) * 0.06;
      o.scale.set(base.x * (1 - s * 0.5), base.y * (1 + s), base.z * (1 - s * 0.5));
      if (t < 1) requestAnimationFrame(tick);
      else {
        o.scale.copy(base);
        o.userData.bouncing = false;
      }
    };
    tick();
  }
  bus.emit('sfx', 'pop');
}

function wiggle(o) {
  o.userData.wiggle = 1;
  bus.emit('sfx', 'plant');
  bus.emit('fx', 'sparkle', o.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 1, 0)), { count: 4 });
}

function toggleLamp(o) {
  const lamp = o.userData.lamp;
  if (!lamp) return;
  lamp.on = !lamp.on;
  bus.emit('sfx', 'switch');
  bus.emit('lamp:toggle', o, lamp.on);
}

function drawEaselArt(g, W, H) {
  g.fillStyle = '#fffaf2';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#ffd36b';
  g.beginPath();
  g.arc(W * 0.3, H * 0.35, 30, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#ffb59a';
  g.lineWidth = 10;
  g.lineCap = 'round';
  for (let i = 0; i < 3; i++) {
    g.beginPath();
    g.moveTo(W * 0.15, H * (0.6 + i * 0.1));
    g.bezierCurveTo(W * 0.4, H * (0.5 + i * 0.1), W * 0.6, H * (0.75 + i * 0.1), W * 0.88, H * (0.6 + i * 0.1));
    g.strokeStyle = ['#ffb59a', '#9fdcc0', '#c7b6ee'][i];
    g.stroke();
  }
}

export { bounce, wiggle, toggleLamp };
