# Cozy Code

A cozy idle world of little creatures — **sproutlings** — living in a tiny
diorama house. This repo is the **game layer** only: the room, the critters and
how they live. The agent layer (the thing that will actually do work for you)
is meant to be built separately and plugged in through a small API (see
[Plugging in the agents](#plugging-in-the-agents)).

There are two pages:

| Page | What it is |
| --- | --- |
| `index.html` | **The game.** The Nook (main room) and the Post Room, with six sproutlings living their lives. |
| `critter.html` | **Critter Studio.** One sproutling on a little stage, with every animation, eye shape, mouth and mood on buttons, so the character can be looked at on its own. Invite friends onto the stage, recolor them, swap the sprout for a leaf / antenna / flower. |

## Running it

**No install needed.** Download / unzip the repo and double-click `index.html`
(or `critter.html`). Everything is pre-built into `dist/` and loads from disk;
there are no image or font files to fetch (textures are painted in code, fonts
are embedded).

If your browser is fussy about local files, run any static server instead:

```bash
npm run serve            # http://localhost:5173  (needs Node, no npm install)
# or
python3 -m http.server   # then open http://localhost:8000
```

Works best in a recent Chrome, Edge, Firefox or Safari with WebGL2. Add
`?quality=low` to the URL on slower machines (turns off ambient occlusion and
MSAA; there is also `medium`).

### Rebuilding after changing the code

```bash
npm install
npm run build      # writes dist/
npm run watch      # rebuilds on save
```

Useful URL parameters: `?time=morning|noon|golden|dusk|night`, `?room=post`,
`?quality=low|medium|high`, `?noao`, `?nobloom`.

## How to play

It's an idle game: mostly you watch, poke, and say things.

- **Turn the room** with the round arrow buttons, the ← → keys (or A/D, Q/E),
  or by dragging the background. The camera always looks into one corner of the
  cuboid room; the two walls in front of you sink down (dollhouse cutaway) and
  rise again when you turn. Each corner has its own name and job.
- **Scroll / pinch** to zoom in toward a spot. The four little dots next to the
  room name are a mini-map: click one to turn to that corner.
- **Double-click** a sproutling to follow it around.
- **Click a sproutling** to boop it and open its card (mood, what it's up to,
  its needs). Boop it a few times and see what happens.
- **Rub** your cursor back and forth over one to **pet** it.
- **Drag** one to pick it up — its feet dangle and kick — and drop it anywhere.
- With one selected, **click the floor** to send it there.
- **Click things**: the gramophone (music + dance party), lamps, plants, the
  idea board, today's chalkboard, the letter wall, the bed, the door…
- **Talk** in the little text box at the bottom (press Enter or / to jump to
  it). Try:
  `hi everyone!`, `idea: a tiny greenhouse`, `todo: water the plants`,
  `letter: thank you!`, `dance party`, `good night`, `wake up`, `come here`,
  `tea time`, `new friend named Waffle`, a sproutling's name, or anything else.
- **Time of day follows your clock** (morning sun through the windows, golden
  afternoons, lamps and fairy lights at night). Click the time chip to peek at
  other times.

The world remembers your sproutlings, notes, to-dos and letters in
`localStorage`. "How to play" (the `?` button) has a reset button.

## What's in the world

### The sproutling

A soft gumdrop with stubby arms, tiny feet and a sprout on top. It is
deliberately simple to look at — the cuteness is in how it moves:

- squash & stretch on every hop and landing, with springy jelly lean when it
  starts, stops and turns
- a sprout (or leaf / antenna / flower) driven by spring physics, so it
  wobbles, droops when sleepy and perks up when excited
- eyes that lead the body: they glance around, track your cursor, look at
  whoever they're talking to, and blink (sometimes twice, and always when they
  turn their head)
- a painted face with ~14 eye shapes (^^ happy, > < squint, spirals, hearts,
  sparkles, sleepy lids, sad lids…), ~12 mouths and blush
- 60+ procedural actions: hops, waves, head tilts, sneezes (ah… ah… choo!),
  hiccups, yawns, trips and face-plants, dancing in sync with the music,
  napping with Zzz, reading, typing, tinkering, painting, stamping mail,
  getting dizzy after too many boops, going grumpy, being shy, hugging…
- six personality traits (energy, curiosity, sociability, sleepiness,
  clumsiness, chattiness) that change how each one walks, bounces, blinks and
  what it likes to do
- Animal-Crossing-style babble voices, each at its own pitch

### The rooms

Each room is a cuboid diorama; you always look into one corner.

**The Nook** (main room)

| Corner | What's there |
| --- | --- |
| Cozy Corner | the big bed, bookshelf, reading chair, arched window, Monty the monstera |
| Idea Corner | the **Idea Board** (your `idea:` notes get pinned here), bean bags, easel, lightbulb lamp |
| Workshop | workbench with a half-built robot, computer, pegboard, the shelf of builds |
| Front Door | the door to the Post Room, **today's chalkboard** (`todo:` items), coat hooks, shoe bench |

Plus the tea table in the middle and a gramophone.

**The Post Room**

| Corner | What's there |
| --- | --- |
| Letter Wall | every `letter:` you send gets pinned here |
| Outbox | the big mailbox (its flag goes up), parcels |
| Sorting Desk | trays, stamps, a pneumatic tube that whooshes now and then |
| Cubbies | a wall of pigeonholes |

### How they live

Each sproutling has a few needs (energy, fun, friends, purpose, calm) that
drift over time, and likes that come from its personality. When it has nothing
to do it scores every activity spot ("station") in its room and picks one —
nap in the bed, read in the chair, tinker at the bench, think on a bean bag,
water the plant, have tea, dance (only when the music is on), stamp letters…
— or wanders, starts a chat with a friend, plays tag, or walks through the door
to the other room. Nights make them sleepy. They greet each other when they
pass, occasionally bonk into each other, and the clumsy ones sometimes trip.

## Code map

```
src/
  game.js              entry for index.html
  studio.js            entry for critter.html
  core/                engine (renderer + post-processing), audio synth, events, utils
  critters/            the character: geometry, painted face, material, rig, actions
  gfx/                 procedural textures, particles/emotes, icons, materials
  world/               room engine (walls, cutaway, nav grid), camera rig,
                       day/night, interaction, props, room definitions
  game/                the society: brains, chat handling, persistence, API
  ui/                  HUD + styles
tools/build.mjs        esbuild bundle -> dist/ (IIFE, so file:// works)
```

To add a room: write a builder like `src/world/rooms/post.js` (openings,
props, `room.station(...)` spots) and add it in `src/game/world.js` along with
a door that points to it.

## Plugging in the agents

The game exposes everything through `window.cozy` (also handy in the browser
console). The idea: the agent system listens to the player and the world, and
expresses its work *through* the critters — never as task lists.

```js
// The player typed something. Claim it to stop the critters' built-in reaction.
cozy.on('user:message', (evt) => {
  // evt.text, evt.target (selected critter's name or null), evt.room
  evt.preventDefault();
  cozy.act('Mochi', 'think');
  myAgent.handle(evt.text).then((pitch) => {
    cozy.say('Mochi', 'ooh, i have a pitch!');
    cozy.pinNote(pitch.oneLiner, { by: 'Mochi' });
  });
});

cozy.critters();                 // who's here, their mood, needs, what they're doing
cozy.stations('nook');           // activity spots, e.g. 'board', 'computer', 'bench'
cozy.goTo('Pip', 'computer');    // walk over and work there (screen shows typing)
cozy.act('Pip', 'cheer');        // any action from cozy.actions()
cozy.say('Pip', 'it works!!');
cozy.pinNote('a tiny greenhouse', { by: 'Pip' });
cozy.addTodo('email the professor');
cozy.sendLetter('Dear Prof. …');  // carried to the mailbox, pinned on the Letter Wall
cozy.spawn({ name: 'Scout' });   // a new sproutling walks in through the door
cozy.toast('Pip finished the prototype!');
cozy.on('note:pinned', (note) => …);   // also: todo:added, todo:done, letter:sent, ...
```

A natural mapping for the next step: cheap always-on models are the regulars
pottering around; a smarter model is a specialist who walks in when needed;
finished, verified work becomes objects in the room (notes on the board,
letters on the wall, gadgets on the builds shelf).

## Credits

- 3D: [three.js](https://threejs.org) (MIT)
- Fonts: [Fredoka](https://fonts.google.com/specimen/Fredoka) and
  [Patrick Hand](https://fonts.google.com/specimen/Patrick+Hand), both SIL Open
  Font License 1.1 (see `assets/fonts/OFL.txt`)
- Everything else (models, textures, sounds, music) is generated in code.
