// What happens when you type into the little text box.
//
// Every message is first offered to the outside world as a 'user:message'
// event (this is where the agent layer will plug in: call evt.preventDefault()
// to take over). If nobody claims it, the sproutlings react on their own with
// simple, playful keyword understanding.
import * as THREE from 'three';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { line } from './lines.js';
import { pick, chance, rand } from '../core/util.js';

export function handleMessage(world, text, selected = null) {
  const evt = {
    text,
    target: selected ? selected.name : null,
    room: world.roomId,
    handled: false,
    preventDefault() {
      this.handled = true;
    },
  };
  bus.emit('user:message', evt);
  if (evt.handled) return;
  respond(world, text, selected);
}

function addressed(world, text, selected) {
  const t = text.toLowerCase();
  const all = world.society.critters;
  const named = all.find((c) => new RegExp(`\\b${c.name.toLowerCase()}\\b`).test(t));
  if (named) return named;
  if (selected) return selected;
  const here = world.society.inRoom(world.roomId).filter((c) => !c.held && c.mainAction?.name !== 'sleep');
  if (!here.length) return world.society.inRoom(world.roomId)[0] || null;
  // the one closest to the middle of the screen
  const cam = world.engine.camera;
  let best = here[0];
  let bd = Infinity;
  for (const c of here) {
    const p = c.position.clone().project(cam);
    const d = p.x * p.x + (p.y + 0.1) * (p.y + 0.1);
    if (d < bd) {
      bd = d;
      best = c;
    }
  }
  return best;
}

function respond(world, raw, selected) {
  const soc = world.society;
  const text = raw.trim();
  const t = text.toLowerCase();
  const who = addressed(world, text, selected);
  const here = soc.inRoom(world.roomId).filter((c) => !c.held);
  const awake = here.filter((c) => c.mainAction?.name !== 'sleep');
  const reply = (c, msg, delay = 250) => c && setTimeout(() => c.say(msg), delay);
  const react = (c, act) => {
    if (!c) return;
    if (c.mainAction?.name === 'sleep') {
      c.brain.cancel();
      c.play('wake');
    }
    c.brain.attending = 2.5;
    c.play(act);
  };
  let m;

  // ideas -> idea board
  if ((m = text.match(/^\s*(?:idea|ideas|pitch|what if)\s*[:\-–—]?\s*(.+)$/i)) && m[1].length > 1) {
    soc.addNote(m[1], { by: null });
    react(who, 'think');
    reply(who, line('noted'), 400);
    return;
  }
  // to-dos -> chalkboard
  if ((m = text.match(/^\s*(?:todo|to-do|to do|task|remind me(?: to)?)\s*[:\-–—]?\s*(.+)$/i)) && m[1].length > 1) {
    soc.addTodo(m[1]);
    react(who, 'nod');
    reply(who, line('todo'), 400);
    return;
  }
  // letters -> post room
  if ((m = text.match(/^\s*(?:letter|mail|send|email|post)\s*[:\-–—]\s*(.+)$/i))) {
    soc.sendLetter(m[1]);
    react(who, 'hop');
    reply(who, pick(['i’ll tell the post room!', 'letter! on it!', 'Tofu will love this']), 400);
    return;
  }
  // new friends
  if (/\b(new friend|invite|spawn|hatch|adopt|another one|more friends?)\b/.test(t)) {
    if (soc.critters.length >= 12) {
      reply(who, 'the nook is a little full right now!');
      return;
    }
    const nm = text.match(/\b(?:named|called|name(?:d)? is)\s+([A-Za-z][\w'-]{0,14})/i);
    const c = soc.spawn({ name: nm ? cap(nm[1]) : undefined, roomId: world.roomId }, { viaDoor: true });
    sound.play('spawn');
    setTimeout(() => c.say(pick(['hi!! i’m new!', `i’m ${c.name}!`, 'is this the cozy place?'])), 1800);
    for (const o of awake.slice(0, 3)) setTimeout(() => o.play('wave', { target: c, sound: false }), rand(1500, 2600));
    return;
  }
  // rename
  if (selected && (m = text.match(/^\s*(?:rename|your name is|i'll call you|call you)\s+([A-Za-z][\w'-]{0,14})/i))) {
    const old = selected.name;
    selected.name = cap(m[1]);
    world.hud.renderRoster();
    world.hud.el.cardName.textContent = selected.name;
    react(selected, 'cheer');
    reply(selected, `${selected.name}! i love it`, 500);
    void old;
    return;
  }
  // dance party
  if (/\b(dance|party|music|boogie|groove|song)\b/.test(t)) {
    sound.unlock();
    if (!sound.musicOn) bus.emit('music:toggle');
    else soc.musicStarted();
    for (const c of awake) if (!c.brain.station) setTimeout(() => c.play('dance', {}), rand(0, 600)) && setTimeout(() => c.stop('dance'), rand(9000, 14000));
    reply(who, line('dance'), 300);
    return;
  }
  // bedtime
  if (/\b(good ?night|nighty|sleep|nap|bed ?time|go to bed|rest)\b/.test(t)) {
    const targets = /\b(everyone|all|y'?all|guys|friends)\b/.test(t) || !/\b(you)\b/.test(t) && !selected ? here : [who];
    bedtime(world, targets.filter(Boolean));
    reply(who, line('bedtime'), 200);
    return;
  }
  // wake up
  if (/\b(wake|morning|rise and shine|get up)\b/.test(t)) {
    for (const c of here) {
      if (c.mainAction?.name === 'sleep') {
        c.brain.cancel();
        setTimeout(() => c.play('wake'), rand(0, 1200));
      }
    }
    reply(who, line('morning'), 1600);
    return;
  }
  // greetings
  if (/\b(hi+|hello|hey+|hiya|howdy|yo|heya|sup|good (morning|afternoon|evening))\b/.test(t) || /^o\/$/.test(t)) {
    const group = /\b(everyone|all|y'?all|guys|friends|crew)\b/.test(t) || !selected ? awake : [who];
    group.forEach((c, i) => {
      setTimeout(() => {
        c.brain.attending = 3;
        c.faceToward(world.engine.camera.position);
        c.play(chance(0.3) ? 'hop' : 'wave');
        if (i < 2 || c === who) c.say(line('greetUser'));
      }, i * 260 + rand(0, 200));
    });
    return;
  }
  // come here / gather
  if (/\b(come( here)?|gather|huddle|everyone here|over here|assemble)\b/.test(t)) {
    gather(world, /\b(everyone|all|y'?all|guys)\b/.test(t) || !selected ? here : [who]);
    reply(who, pick(['coming!!', 'on my way!', 'yes?', 'wheee coming']), 300);
    return;
  }
  if (/\b(jump|hop)\b/.test(t)) {
    (selected || /\b(everyone|all)\b/.test(t) ? (selected ? [who] : awake) : [who]).forEach((c, i) => setTimeout(() => react(c, 'hop'), i * 120));
    return;
  }
  if (/\b(spin|twirl)\b/.test(t)) {
    react(who, 'spin');
    reply(who, 'wheee!', 200);
    return;
  }
  if (/\b(tea|snack|cookie|cookies|biscuit time)\b/.test(t)) {
    const room = world.room;
    const seats = room.stations.filter((s) => s.activity === 'tea' && !s.reservedBy);
    awake.slice(0, seats.length).forEach((c, i) => c.brain.doStation(seats[i], { duration: rand(18, 28) }));
    reply(who, pick(['tea party!!', 'i’ll get the cookies', 'yay tea']), 300);
    return;
  }
  if (/\b(work|build|code|make something|get busy)\b/.test(t)) {
    const room = world.room;
    const seats = room.stations.filter((s) => s.tags.includes('work') && !s.reservedBy);
    awake.slice(0, seats.length).forEach((c, i) => c.brain.doStation(seats[i]));
    reply(who, pick(['on it!', 'to work!', 'beep boop, working']), 300);
    return;
  }
  if (/\b(love|cute|adorable|good job|well done|thank|thanks|thx|best|sweet|aww+)\b/.test(t) || /<3|♥/.test(t)) {
    react(who, chance(0.5) ? 'shy' : 'blinkSlow');
    world.fx.spawn('heart', who.headPos(new THREE.Vector3()), { count: 3 });
    reply(who, line('love'), 500);
    world.hud.toast(`${who.name} is blushing`, 'love');
    return;
  }
  if (/\b(who are you|your name|what'?s your name|introduce)\b/.test(t)) {
    react(who, 'wave');
    reply(who, `i’m ${who.name}! ${who.bio || ''}`, 300);
    return;
  }
  if (/\b(sad|tired|stressed|anxious|lonely|bad day|ugh)\b/.test(t)) {
    // everyone comes for a group hug
    gather(world, awake.slice(0, 4));
    reply(who, pick(['aww, come here', 'we’re here for you', 'group hug!!', 'want some tea?']), 600);
    setTimeout(() => awake.slice(0, 4).forEach((c) => c.play('hug')), 3500);
    return;
  }
  if (/\?\s*$/.test(t)) {
    react(who, 'think');
    reply(who, pick(['hmm… good question!', 'i’ll ask the smart ones later', 'ooh, let me think…', 'maybe? :)', 'i think… yes!']), 2800);
    return;
  }
  // anything longer: treat it as a thought worth keeping
  if (text.length >= 14) {
    soc.addNote(text, { by: null });
    react(who, 'tilt');
    reply(who, line('noted'), 400);
    return;
  }
  react(who, pick(['tilt', 'giggle', 'hop', 'nod']));
  reply(who, line('confused'), 400);
}

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function bedtime(world, critters) {
  const room = world.room;
  const spots = room.stations.filter((s) => (s.activity === 'sleep' || s.activity === 'think' || s.activity === 'read' || s.activity === 'tea' || s.activity === 'sit') && s.seat && !s.reservedBy);
  spots.sort((a, b) => (a.activity === 'sleep' ? -1 : 0) - (b.activity === 'sleep' ? -1 : 0));
  critters.forEach((c, i) => {
    const s = spots[i];
    if (s) {
      c.brain.doStation({ ...s, activity: 'sleep', label: 'sleeping' }, { duration: rand(40, 90) });
      // keep the reservation on the real station
      c.brain.tasks[0].station = s;
    } else {
      c.brain.run([{ type: 'act', name: 'yawn' }, { type: 'act', name: 'sleep', t: rand(30, 60) }, { type: 'act', name: 'wake' }], 'dozing off');
    }
  });
}

export function gather(world, critters) {
  const cam = world.engine.camera.position;
  const room = world.room;
  const dir = new THREE.Vector2(cam.x, cam.z).normalize();
  const side = new THREE.Vector2(-dir.y, dir.x);
  const center = new THREE.Vector2(dir.x * 1.6, dir.y * 1.6);
  critters.forEach((c, i) => {
    const k = i - (critters.length - 1) / 2;
    const row = Math.floor(Math.abs(k) / 3);
    const p = center.clone().addScaledVector(side, k * 0.95).addScaledVector(dir, -row * 0.9 + Math.abs(k) * -0.12);
    const free = room.nav.nearestFree(p.x, p.y);
    if (c.mainAction?.name === 'sleep') c.play('wake');
    c.brain.run(
      [
        { type: 'wait', t: i * 0.15 },
        { type: 'walk', to: free, gait: c.traits.energy > 0.6 ? 'hop' : undefined },
        { type: 'face', yaw: Math.atan2(cam.x - free.x, cam.z - free.z), t: 0.3 },
        { type: 'act', name: pick(['wave', 'hop', 'wiggle']) },
        { type: 'wait', t: rand(4, 7), look: cam },
      ],
      'came to say hi'
    );
  });
}
