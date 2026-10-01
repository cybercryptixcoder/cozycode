// Everything the island remembers. The world is computed from timestamps,
// so the store holds facts and times, not a running simulation.
const KEY = 'cozycode.island.v1';

export function defaultState(now = Date.now()) {
  return {
    version: 1,
    createdAt: now,
    lastSeen: now, // last time the app was visible
    lastSim: now, // the work source has resolved everything up to here
    seed: Math.floor(Math.random() * 1e9),
    unlocks: {}, // name -> timestamp
    crew: [], // { id, name, role, color, accessory, seed, traits, joinedAt, roomId? }
    threads: [], // every piece of work, see sim/threads.js
    board: [], // kept idea thread ids (max 6)
    attic: [], // shelved thread ids
    benchSlots: 1,
    finishedBuilds: 0,
    rug: [], // thread ids waiting to be presented (max 3)
    mail: { flag: false, birdHome: true, lastRound: now, inbox: [], wall: [] },
    visitors: [], // { id, type, arrivedAt, leavesAt, memento, seen }
    keepsakes: [], // memento ids
    metVisitors: [],
    facts: [], // { id, text, object, kind: 'stated' | 'inferred', state: 'solid' | 'ghost' }
    capabilities: [], // { id, name, object, at }
    placements: {}, // objectId -> { x, z, rot }
    seen: {}, // object ids seen since they appeared (for the "new" glow)
    specialist: { day: '', used: 0, away: false, until: 0 },
    taste: [],
    metrics: { opens: [], homecomings: 0, homecomingSkips: 0, started: 0, finished: 0, notifications: [] },
    settings: { sound: true, music: false, haptics: true, specialistBudget: 2, notifications: false, quality: 'auto', timeSensitive: true },
    sim: {},
    ticker: { last: [] },
    story: { pitchesSeen: 0 },
  };
}

export class Store {
  constructor() {
    this.data = this.load();
  }
  load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const d = JSON.parse(raw);
        const base = defaultState();
        return { ...base, ...d, settings: { ...base.settings, ...(d.settings || {}) }, metrics: { ...base.metrics, ...(d.metrics || {}) }, mail: { ...base.mail, ...(d.mail || {}) } };
      }
    } catch (e) {
      /* fresh start */
    }
    this.fresh = true;
    return defaultState();
  }
  save() {
    if (this.frozen) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(this.data));
    } catch (e) {
      /* storage unavailable */
    }
  }
  reset() {
    this.frozen = true;
    try {
      localStorage.removeItem(KEY);
    } catch (e) {
      /* ignore */
    }
  }
}

export const unlocked = (state, name) => !!state.unlocks[name];
