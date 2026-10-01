// What the simulated crew comes up with. This stands in for the agent
// layer: the same shapes of things (a one-line pitch with a picture and a
// few feature cards, a finished artifact with receipts, a letter...) with
// realistically uneven quality.
import { mulberry32 } from '../core/util.js';

export const MOTIFS = ['plant', 'robot', 'map', 'star', 'cloud', 'book', 'envelope', 'gear', 'lamp', 'note', 'cup', 'clock', 'leaf', 'house', 'kite', 'shell', 'key', 'radio'];

// ------------------------------------------------------------------ build ideas
// [line, motif, area, heavy?] — area groups pitches about the same thing (for pairwise picks)
const BUILDS = [
  ['a little app that reminds you to water each plant by name', 'plant', 'plants'],
  ['a plant diary that guesses who’s thirsty from the weather', 'plant', 'plants'],
  ['a tiny robot that rolls to the window when it’s sunny', 'robot', 'robots'],
  ['a desk robot that taps you when you’ve been sitting too long', 'robot', 'robots'],
  ['a map of every quiet café within a short walk', 'map', 'maps'],
  ['a walking map that only uses streets with trees', 'map', 'maps'],
  ['a night-sky widget that names one star per evening', 'star', 'sky'],
  ['a cloud-spotting log with a little field guide', 'cloud', 'sky'],
  ['a reading tracker that shelves finished books like a real shelf', 'book', 'books'],
  ['a book-swap list for the neighbours', 'book', 'books'],
  ['a postcard maker that turns photos into watercolours', 'envelope', 'letters'],
  ['a birthday reminder that drafts a warm note for you', 'envelope', 'letters'],
  ['a budget jar that fills up like a real jar', 'cup', 'money'],
  ['a weekly grocery list that remembers what ran out', 'cup', 'home'],
  ['a focus timer shaped like a slow-burning candle', 'lamp', 'focus'],
  ['a soft lamp schedule that follows the sunset', 'lamp', 'home'],
  ['a song sketchpad that hums back your melody', 'note', 'music'],
  ['a playlist that changes with the rain', 'note', 'music'],
  ['a gentle alarm clock that brightens like dawn', 'clock', 'sleep'],
  ['a sleep log that only asks one question a day', 'clock', 'sleep'],
  ['a recipe box that scales recipes for one', 'cup', 'food'],
  ['a seed calendar for the windowsill garden', 'leaf', 'plants'],
  ['a chore wheel that spins fairly', 'house', 'home'],
  ['a kite-weather checker for the weekend', 'kite', 'sky'],
  ['a shell-sorting game for small hands', 'shell', 'play'],
  ['a spare-key log so nobody gets locked out', 'key', 'home'],
  ['a pocket radio of local news, read slowly', 'radio', 'news'],
  ['a gear-ratio calculator for bike tinkering', 'gear', 'bikes', true],
  ['a whole little website for the book club', 'house', 'books', true],
  ['a home dashboard with the weather, bins and birthdays', 'house', 'home', true],
  ['a sticker-making tool from doodles', 'star', 'play'],
  ['a tiny game about delivering mail by bird', 'envelope', 'play', true],
  ['a step counter that grows a pixel forest', 'leaf', 'walks'],
  ['a tea timer that knows each tea', 'cup', 'food'],
];

const WEAK_TWISTS = ['…but it only works on tuesdays', '…maybe? it’s a bit fuzzy', '…mostly for us, honestly', '…it might already exist', '…we’d need a lot of glue'];
const DELIGHT_TWISTS = ['and it says goodnight', 'and it sparkles a tiny bit when you’re done', 'and you can share it with one person', 'and it remembers your favourite'];

const FEATURES = {
  plants: ['each plant gets a face', 'a weekly thirst forecast', 'photo log of new leaves', 'a gentle nudge, never a nag'],
  robots: ['it waves when you come back', 'it sleeps when the lights go off', 'a tiny screen with moods', 'you can teach it one trick'],
  maps: ['hand-drawn style', 'only places open now', 'save favourites as stickers', 'walk time, not distance'],
  sky: ['one fact per night', 'cloud-type quiz', 'moon phase in the corner', 'a little log you can flip through'],
  books: ['shelves you can rearrange', 'a quote jar', 'a gentle reading streak (no guilt)', 'lend-to list'],
  letters: ['handwritten-style font', 'a stamp collection', 'reminds you a week before', 'a little wax seal'],
  money: ['coins drop in when you save', 'one goal at a time', 'no red numbers ever', 'monthly tiny celebration'],
  home: ['works offline', 'one tap to tick', 'shares with housemates', 'quiet hours'],
  focus: ['the candle melts as you go', 'a soft chime at the end', 'break reminders', 'no stats, just the candle'],
  music: ['hum, it writes the notes', 'loops you can layer', 'rain sounds underneath', 'exports a tiny file'],
  sleep: ['one question each morning', 'a soft week view', 'sunrise colours', 'no numbers on screen'],
  food: ['scales to one person', 'pantry check', 'a cozy timer', 'photos of what you made'],
  play: ['made for small hands', 'two-player mode', 'no scores, just sorting', 'a secret level'],
  walks: ['grows a tree per walk', 'rainy walk badge', 'share your forest', 'night walks glow'],
  news: ['read slowly', 'one story per day', 'only local', 'a weather line at the end'],
  bikes: ['gear chart', 'saves your bikes', 'cadence helper', 'printable card'],
};

const RESEARCH = [
  ['which houseplants actually like a north window', 'plant', 'plants'],
  ['how slow-living folks plan a week', 'clock', 'focus'],
  ['the best simple ways to back up family photos', 'house', 'home'],
  ['what makes a letter feel warm', 'envelope', 'letters'],
  ['how to keep basil alive past june', 'leaf', 'plants'],
  ['tiny habits that stuck for other people', 'star', 'focus'],
  ['quiet places to visit nearby in spring', 'map', 'maps'],
  ['how bike gears really work', 'gear', 'bikes'],
  ['good starter sourdough schedules', 'cup', 'food'],
  ['what old radios can still pick up', 'radio', 'news'],
  ['how birds find their way home', 'kite', 'sky'],
  ['simple ways to make a room feel warmer', 'lamp', 'home'],
];

const TODOS = [
  'restock the stamp drawer',
  'oil the creaky step',
  'wipe the idea board',
  'sort the screws by size',
  'water the windowsill herbs',
  'mend the couch cushion',
  'sweep the porch',
  'label the attic boxes',
  'refill the ink pot',
  'dust the bookshelf',
  'empty the toss bin',
  'tighten the bench vice',
  'fold the blankets',
  'polish the mailbox',
];

const RECIPIENTS = ['your friend june', 'the book club', 'grandma', 'the plant shop', 'your neighbour sam', 'the bike co-op', 'the tea shop', 'an old classmate'];

const RARE = [
  ['a tiny map of a path nobody’s walked', 'map'],
  ['a pressed four-leaf clover', 'leaf'],
  ['a seed that hums', 'plant'],
  ['a key to a door we haven’t built yet', 'key'],
  ['a star that fell into the gutter', 'star'],
  ['a letter from the future (short)', 'envelope'],
  ['a feather from the mail bird’s cousin', 'kite'],
];

export const VISITORS = [
  { type: 'fox', name: 'a sleepy fox', memento: { id: 'acorn', name: 'a polished acorn', motif: 'leaf', color: '#c98a4b' } },
  { type: 'owl', name: 'an old owl', memento: { id: 'feather', name: 'a striped feather', motif: 'kite', color: '#a58b6b' } },
  { type: 'snail', name: 'a travelling snail', memento: { id: 'shell', name: 'a swirly shell', motif: 'shell', color: '#e3b48f' } },
  { type: 'moth', name: 'a moon moth', memento: { id: 'moonstone', name: 'a moonstone', motif: 'star', color: '#b9c7ff' } },
  { type: 'frog', name: 'a tea frog', memento: { id: 'teacup', name: 'a tiny teacup', motif: 'cup', color: '#8fc9a8' } },
  { type: 'bee', name: 'a lost bee', memento: { id: 'honey', name: 'a jar of honey', motif: 'cup', color: '#f2c14e' } },
  { type: 'crab', name: 'a sky crab', memento: { id: 'pebble', name: 'a cloud pebble', motif: 'cloud', color: '#d8dde8' } },
];

export const CAPABILITIES = [
  { id: 'saw', name: 'a new little saw', where: 'pegboard', line: 'we can cut things to size now' },
  { id: 'telescope', name: 'a telescope', where: 'study', line: 'we can look things up further away now' },
  { id: 'radio', name: 'a radio', where: 'kitchen', line: 'we can hear the outside news now' },
  { id: 'drill', name: 'a hand drill', where: 'pegboard', line: 'we can make holes. carefully.' },
  { id: 'calipers', name: 'calipers', where: 'pegboard', line: 'we can measure tiny things now' },
];

const QUALITY_LINES = {
  weak: ['it’s a bit rough', 'not sure about this one', 'a small thought'],
  ordinary: ['could be nice', 'a simple one', 'i think it’d help'],
  good: ['i really like this one', 'this could be lovely', 'ooh, this one'],
  delight: ['i can’t stop thinking about it', 'this one made me giggle', 'oh, oh, this one!'],
};

/** Realistically uneven: mostly ordinary, a fair share weak, ~1 in 10 good, an occasional delight. */
export function rollQuality(r) {
  if (r < 0.3) return 'weak';
  if (r < 0.87) return 'ordinary';
  if (r < 0.97) return 'good';
  return 'delight';
}

export class Content {
  constructor(seed) {
    this.rng = mulberry32(seed >>> 0);
  }
  r() {
    return this.rng();
  }
  pick(a) {
    return a[Math.floor(this.r() * a.length)];
  }

  buildPitch(used = new Set()) {
    let pool = BUILDS.filter((b) => !used.has(b[0]));
    if (!pool.length) pool = BUILDS;
    const [base, motif, area, heavy] = this.pick(pool);
    const quality = rollQuality(this.r());
    let text = base;
    if (quality === 'weak' && this.r() < 0.7) text = `${base} ${this.pick(WEAK_TWISTS)}`;
    if (quality === 'delight') text = `${base}, ${this.pick(DELIGHT_TWISTS)}`;
    const fs = FEATURES[area] || FEATURES.home;
    const n = quality === 'weak' ? 1 : quality === 'ordinary' ? 2 : 3;
    const features = shuffle(fs.slice(), this.rng)
      .slice(0, n)
      .map((line, i) => ({ id: `f${i}`, line, state: 'new' }));
    return { kind: 'build', key: base, line: text, motif, area, heavy: !!heavy, quality, features, aside: this.pick(QUALITY_LINES[quality]), hue: Math.floor(this.r() * 360) };
  }

  researchPitch(used = new Set()) {
    let pool = RESEARCH.filter((b) => !used.has(b[0]));
    if (!pool.length) pool = RESEARCH;
    const [base, motif, area] = this.pick(pool);
    const quality = rollQuality(this.r());
    return { kind: 'research', key: base, line: `i could look into ${base}`, motif, area, quality, features: [], aside: this.pick(QUALITY_LINES[quality]), hue: Math.floor(this.r() * 360) };
  }

  todo(used = new Set()) {
    const pool = TODOS.filter((t) => !used.has(t));
    return this.pick(pool.length ? pool : TODOS);
  }

  recipient() {
    return this.pick(RECIPIENTS);
  }

  letterFor(thread) {
    const to = this.recipient();
    const what = thread ? thread.title : 'a little hello';
    const body = thread
      ? `hi! we made ${what}. we thought of you. it's small and a bit wobbly but it works. tell us what you think? — the crew`
      : 'hi! just saying hello from the island. the mist is lovely today. — the crew';
    return { to, subject: thread ? `we made ${what}` : 'hello from the island', body };
  }

  reply(letter) {
    const lines = [
      'oh this is lovely. thank you for thinking of me!',
      'i tried it this morning. it made me smile.',
      'got it! can it also do one more tiny thing?',
      'thank you!! i showed my cat.',
      'what a nice surprise in the post.',
    ];
    return { from: letter.to, body: this.pick(lines) };
  }

  rareFind() {
    const [line, motif] = this.pick(RARE);
    return { line, motif, hue: Math.floor(this.r() * 360) };
  }

  decision(thread) {
    const area = thread.area || 'home';
    const sets = [
      { q: 'which look should it have?', o: ['soft and round', 'neat and square', 'hand-drawn'] },
      { q: 'should it be just for you, or shareable?', o: ['just for me', 'shareable'] },
      { q: 'bigger screen or pocket-sized?', o: ['pocket-sized', 'bigger'] },
      { q: 'morning or evening person?', o: ['morning', 'evening'] },
      { q: 'quiet or a little chime?', o: ['quiet', 'little chime'] },
    ];
    const s = this.pick(sets);
    void area;
    return { question: s.q, options: s.o };
  }

  failureReason(kind) {
    const b = ['the gears kept slipping. we tried three ways.', 'it worked once, then never again.', 'the parts we needed don’t exist yet.', 'it got too big for the bench.', 'it was fine until we added the last bit.'];
    const r = ['we couldn’t find anything solid on it.', 'the sources disagreed with each other.', 'the library was closed (in our heads).'];
    return this.pick(kind === 'research' ? r : b);
  }

  titleFor(p) {
    // a short name for the finished thing ("the plant diary")
    const words = p.line
      .replace(/^i could look into /, '')
      .replace(/^(a|an|the) /, '')
      .split(/[ ,…]/)
      .filter(Boolean);
    const stop = new Set(['that', 'which', 'with', 'for', 'of', 'by', 'when', 'from', 'to', 'like', 'only', 'so', 'and', 'but', 'it', 'who', 'you']);
    const out = [];
    for (const w of words) {
      if (stop.has(w) && out.length >= 2) break;
      out.push(w);
      if (out.length >= 3) break;
    }
    return `the ${out.join(' ')}`;
  }

  receipts(thread) {
    if (thread.kind === 'research')
      return {
        draft: `notes on ${thread.key}: ${this.pick(['three things that matter', 'what most people get wrong', 'the short version'])}.`,
        sources: shuffle(['an old almanac', 'a gardening forum thread', 'a library book (ch. 4)', 'a friendly expert', 'two blog posts that agreed', 'a 1987 magazine'], this.rng).slice(0, 3),
      };
    return {
      prototype: `${this.pick(['a working sketch', 'a small first version', 'a clickable little thing'])} of ${thread.title}`,
      draft: `how it works: ${thread.features?.filter((f) => f.state !== 'tossed').map((f) => f.line).join('; ') || 'the simple version'}.`,
      sources: shuffle(['the pitch card', 'your keep/toss choices', 'a borrowed idea from the book club', 'the bench notes'], this.rng).slice(0, 2),
    };
  }
}

function shuffle(a, rng = Math.random) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export { BUILDS, RESEARCH, TODOS };
