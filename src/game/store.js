// Tiny persistence layer (localStorage, wrapped so the game still runs when
// storage is blocked, e.g. private windows or file:// quirks).
const KEY = 'cozycode.v1';

export class Store {
  constructor() {
    this.data = this._load();
  }

  _defaults() {
    return {
      version: 1,
      critters: null,
      notes: [],
      todos: [],
      letters: [],
      settings: { sfx: true, music: true, time: 'auto', room: 'nook', corner: 0 },
      firstSeen: Date.now(),
      lastSeen: Date.now(),
    };
  }

  _load() {
    const d = this._defaults();
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return d;
      const parsed = JSON.parse(raw);
      return { ...d, ...parsed, settings: { ...d.settings, ...(parsed.settings || {}) } };
    } catch (e) {
      return d;
    }
  }

  save() {
    this.data.lastSeen = Date.now();
    try {
      localStorage.setItem(KEY, JSON.stringify(this.data));
    } catch (e) {
      /* storage unavailable: fine, the world just won't remember */
    }
  }

  reset() {
    this.data = this._defaults();
    try {
      localStorage.removeItem(KEY);
    } catch (e) {
      /* ignore */
    }
  }
}
