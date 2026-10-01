// The seam between the game and the (future) agent layer.
//
// Everything the agents will need to drive the world goes through here, so
// the game stays a game and the agents stay agents. Available in the browser
// console as `cozy` — try `cozy.say('Mochi', 'hello from the console!')`.
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { ACTIONS } from '../critters/actions.js';
import { bedtime, gather, handleMessage } from './chat.js';
import { TIME_PRESETS } from '../world/daylight.js';

export function createAPI(world) {
  const soc = world.society;
  const need = (name) => {
    const c = soc.find(name);
    if (!c) throw new Error(`no sproutling called "${name}"`);
    return c;
  };
  const describe = (c) => ({
    id: c.id,
    name: c.name,
    color: c.color,
    accessory: c.accessory,
    room: c.roomId,
    doing: c.brain.doing,
    mood: c.mood,
    needs: { ...c.brain.needs },
    traits: { ...c.traits },
    position: { x: +c.position.x.toFixed(2), z: +c.position.z.toFixed(2) },
  });

  return {
    version: 1,

    /** Subscribe to world events. Returns an unsubscribe function.
     *  Events: user:message, critter:say, critter:spawned, critter:removed,
     *  critter:moved, note:queued, note:pinned, todo:added, todo:done,
     *  letter:sent, door:click, board:open, todo:open, letters:open */
    on: (event, fn) => bus.on(event, fn),
    off: (event, fn) => bus.off(event, fn),

    // ---- reading the world
    critters: () => soc.critters.map(describe),
    get: (name) => describe(need(name)),
    rooms: () => Object.values(world.rooms).map((r) => ({ id: r.id, name: r.name, corners: r.spec.corners })),
    stations: (roomId = world.roomId) =>
      world.rooms[roomId].stations.map((s) => ({ id: s.id, label: s.label, activity: s.activity, corner: s.corner, tags: s.tags, busy: !!s.reservedBy })),
    actions: () => Object.keys(ACTIONS),
    notes: () => [...world.store.data.notes],
    todos: () => [...world.store.data.todos],
    letters: () => [...world.store.data.letters],
    get currentRoom() {
      return world.roomId;
    },

    // ---- making critters do things
    say: (name, text) => need(name).say(String(text)),
    act: (name, action, opts = {}) => {
      if (!ACTIONS[action]) throw new Error(`unknown action "${action}"`);
      const c = need(name);
      if (ACTIONS[action].lockMove) c.brain.cancel();
      return !!c.play(action, opts);
    },
    stop: (name, action) => need(name).stop(action),
    goTo: (name, stationId, opts = {}) => {
      const c = need(name);
      const room = world.rooms[c.roomId];
      const s = room.stations.find((x) => x.id === stationId);
      if (!s) throw new Error(`no station "${stationId}" in ${room.name} (try cozy.stations())`);
      c.brain.doStation(s, opts);
      return true;
    },
    walkTo: (name, x, z) => {
      const c = need(name);
      c.brain.run([{ type: 'walk', to: { x, z } }], 'walking somewhere');
    },
    sendTo: (name, roomId) => {
      const c = need(name);
      if (c.roomId === roomId) return;
      const st = world.rooms[c.roomId].stations.find((s) => s.activity === 'door' && s.door.to === roomId);
      if (st) c.brain.travel(st);
    },
    setMood: (name, mood, seconds = 10) => need(name).setMood(mood, seconds),
    callOver: (name) => gather(world, [need(name)]),
    nap: (name) => bedtime(world, [need(name)]),
    gatherAll: () => gather(world, soc.inRoom(world.roomId)),
    bedtime: () => bedtime(world, soc.inRoom(world.roomId)),

    // ---- the household
    spawn: (opts = {}) => describe(soc.spawn({ roomId: world.roomId, ...opts }, { viaDoor: opts.viaDoor ?? true })),
    remove: (name) => soc.remove(need(name)),
    pinNote: (text, meta = {}) => soc.addNote(text, meta),
    unpinNote: (id) => soc.removeNote(id),
    addTodo: (text, meta = {}) => soc.addTodo(text, meta),
    toggleTodo: (id) => soc.toggleTodo(id),
    removeTodo: (id) => soc.removeTodo(id),
    sendLetter: (text, meta = {}) => soc.sendLetter(text, meta),

    // ---- the view
    goToRoom: (id) => world.travel(id),
    rotate: (dir = 1) => world.rotate(dir),
    follow: (name) => world.rig.follow(need(name)),
    unfollow: () => world.rig.unfollow(),
    select: (name) => world.hud.select(name ? need(name) : null),
    toast: (text, kind) => world.hud.toast(text, kind),
    setTime: (presetOrHour) => {
      if (typeof presetOrHour === 'number') world.daylight.setHour(presetOrHour);
      else world.daylight.setPreset(presetOrHour);
      world.hud.refreshToggles();
    },
    timePresets: () => TIME_PRESETS.map((p) => p.id),
    setMusic: (on) => {
      sound.unlock();
      if (!!on !== sound.musicOn) bus.emit('music:toggle');
    },

    /** Simulate the user typing into the chat box. */
    message: (text) => handleMessage(world, text, world.hud.selected),

    /** Advance the simulation instantly (for testing). */
    fastForward: (seconds = 10) => {
      const steps = Math.round(seconds * 30);
      for (let i = 0; i < steps; i++) world.update(1 / 30, world.engine.time + i / 30);
    },
  };
}
