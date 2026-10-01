// The game's notion of "now". Normally the real clock; tests and the debug
// panel can shift it forward to see what a few hours away looks like.
export const clock = {
  offset: 0,
  now() {
    return Date.now() + this.offset;
  },
  date() {
    return new Date(this.now());
  },
};
