// Tiny event emitter used as the game's message bus.

export class Emitter {
  constructor() {
    this._handlers = new Map();
  }
  on(type, fn) {
    if (!this._handlers.has(type)) this._handlers.set(type, new Set());
    this._handlers.get(type).add(fn);
    return () => this.off(type, fn);
  }
  once(type, fn) {
    const off = this.on(type, (...args) => {
      off();
      fn(...args);
    });
    return off;
  }
  off(type, fn) {
    this._handlers.get(type)?.delete(fn);
  }
  emit(type, ...args) {
    const set = this._handlers.get(type);
    if (!set) return;
    for (const fn of [...set]) {
      try {
        fn(...args);
      } catch (err) {
        console.error(`[events] handler for "${type}" failed`, err);
      }
    }
  }
}

/** Global bus. Game systems talk through this; the future agent layer can too. */
export const bus = new Emitter();
