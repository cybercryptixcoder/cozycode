# Cozy Code — the island

A cozy idle game about a little crew living on a floating island, doing work
for you. You check in for a minute or five, a few times a day. The crew shows
you what they've been up to (one idea, one finished thing, one question at a
time), you keep or toss, greenlight, answer, send. The island grows from what
actually happens.

This repo is the **game layer**. The work currently comes from a **simulated
work source** that emits the same events the agent layer will
(see [Plugging in the agent layer](#plugging-in-the-agent-layer)).

> The earlier two-room prototype (the Nook + the Post Room) is preserved on the
> branch `prototype-v1-rooms`.

| Page | What it is |
| --- | --- |
| `index.html` | **The game.** The floating island. |
| `critter.html` | **Critter Studio** (internal tool): one crew member on a stage with every animation, face and mood on buttons. |

## Running it

**No install needed.** Download / unzip and double-click `index.html`.
Everything is pre-built into `dist/` and loads straight from disk (textures are
painted in code, fonts are embedded).

If your browser is fussy about local files:

```bash
npm run serve            # http://localhost:5173  (needs Node, no npm install)
python3 -m http.server   # or this, then open http://localhost:8000
```

Phone portrait is the main target; desktop works too. Add `?quality=low` on
slow machines.

### Rebuilding after changing the code

```bash
npm install
npm run build      # writes dist/
npm run watch      # rebuilds on save
```

### Handy URL switches (for testing)

| Switch | Effect |
| --- | --- |
| `?fresh` | start a brand-new island (wipes the save) |
| `?nosave` | don't write the save |
| `?unlock=all` or `?unlock=workshop,gate` | pre-unlock places |
| `?time=morning\|noon\|golden\|dusk\|night` | force the time of day |
| `?docked` | start in the small docked window |

In the console, `__game.warp(3)` pretends you closed the app for 3 hours and
came back (runs the catch-up and the homecoming).

## How to play

There's almost no interface: a **room-name label**, a **one-line ticker**, a
**snapshot** button and **settings**. Everything else happens on the island.

| Gesture | What it does |
| --- | --- |
| swipe left / right | rotate the island (snaps to four corners; each corner looks straight into one room) |
| drag up / down | tilt, from high overhead all the way to below the island |
| pinch / wheel | zoom |
| tap a room | focus it (partitions in the way fade); tap the sky to step back |
| tap a crew member | one plain line about what they're doing, or, if they're holding something up, open it |
| double-tap a crew member | follow them around |
| long-press a crew member | whisper to them (text or voice), recolour, rename |
| press and drag a crew member | pick them up (feet dangle); drop them on a bed for a nap |
| rub back and forth over one | pet them |
| long-press furniture or a finished object | move it |

### Cards

When someone has something to show you, they stand on the **pitch rug**
(it holds three) holding a card toward you. If the rug is full they wait at
their station with a **lightbulb** over their head. That lightbulb is the only
"waiting" indicator in the game.

- **Pitch:** one line, one picture. Swipe **right** to keep (pinned to the idea
  board), **left** to toss (cheerfully, into the bin), **up** for the next
  feature card (each with its own keep/toss). Nudge chips: *simpler, weirder,
  smaller, bigger*. **build it**, or drag the card onto a room, greenlights it.
- **Two ideas about the same thing:** both crew step forward; tap the one you prefer.
- **Decision:** a question with 2-3 options.
- **Finished:** the object, one line. Tap to flip it over for its receipts
  (prototype, draft, sources). Verified builds go onto a **pedestal with a
  label** (the biggest celebration in the game); the rest go on the shelf.
- **Failure:** honest and gentle: one line, then *try again* or *let it go*.
- **Letters:** the only way anything leaves the island. The postmaster carries
  the letter to the gate; flip the envelope to read what's being sent and to
  whom, drag it into the mailbox, press and hold the stamp until it thunks.

### Capacity, not cost

There's no currency, XP, levels or shop. Limits are physical: rug 3, idea
board 6, bench 1 → 3 (grows after every few finished builds), desk 2,
chalkboard 7. When the board is full, the oldest note goes up to the attic
(retrievable any time); when the bench is full, a build can be shelved.

### The island grows from real events

| Trigger | What opens |
| --- | --- |
| the first kept idea | the idea board wakes up (the first pitch arrives within a minute) |
| the first greenlit build | the boarded door opens; the crew unpacks the workshop |
| the first thing that must leave the island | the gate and mailbox; the mail bird starts its rounds |
| the first research task | the study |
| the first to-do | the kitchen |
| about a week in | the stairs clear: upstairs (bunk room, your room) and the attic |
| later | the island widens: a garden plot, then a shed for long projects |

Each unlock is a 10-20 second staged moment. If it happened while you were
away, it waits for you.

### Coming back

If you've been away more than 20 minutes and something is new, the
**homecoming** plays on the commons: the crew lead greets you, finished things
are presented one at a time and go where they live, anyone with a decision
steps onto the rug, then mail (flag up, bird on its perch) and visitors (by the
gate). Under 30 seconds; one tap skips it. If nothing is new: a wave and
"all quiet, we've got it".

Nothing decays, withers or expires. No streaks. Notifications (off by default)
are only for real things, batched, at most 3 a day and never at night.

### The crew

Each crew member is one parallel work slot. When work keeps waiting for hands,
someone new arrives by little hot-air balloon at the gate and you name them
(up to about 8). Roles show as gear: a glowing sprout (ideas), goggles + wrench
(builder), glasses + book (researcher), satchel (postmaster), apron (chores),
neckerchief (generalist). The **specialist** (taller, older, a scarf) comes by
the big balloon for heavy lifting; the big balloon moored at the gate means
there's a visit left in today's budget (set in settings).

They keep their own lives: naps, reading, tea, chats, tag, bumping into each
other, tripping, visiting each other's work. Energy follows the real clock: at
night most go up to the bunks; one night owl keeps working with a lamp.

### The underside

Tilt below the island: the ground floor opens up from underneath, and the
hanging machine room holds the **ledger**, a big paper book with every thread,
its status and log. That's the only place logs exist; the main surface never
shows task lists, progress bars, percentages or status labels.

## Plugging in the agent layer

All work flows through `src/play/source.js`. The game asks the source for
events that came due (`next(now)`) and tells it what the player decided
(`startWork`, `nudge`, `sent`, `whisper`, ...). Events:

| Event | Payload |
| --- | --- |
| `pitch` | `thread: {kind: 'build'\|'research', line, motif, hue, features[], area, quality, heavy}` |
| `work` | `thread, state` |
| `finished` | `thread, verified, receipts: {prototype?, draft?, sources?}` |
| `decision` | `thread, question, options[2-3]` |
| `rareFind` | `thread` (a glowing pitch card) |
| `failure` | `thread, reason` |
| `outgoing` | `thread?, draft: {to, subject, body}` |
| `incoming` | `replyTo, from, body, timeSensitive` |
| `todo` | `text` |
| `capability` | `cap: {id, name, line}` (shows up as a new tool) |

Replace `SimulatedSource` with something that implements `next(now)`,
`startWork(thread, at)`, `stopWork(thread)`, `maybeOutgoing`, `sent`, `nudge`
and `whisper`, and the island will run on real work. Everything is timestamped,
so the world is computed from times and rendered richly only while you look.

The **taste log** (`state.taste`) records keep, toss, nudge, pairwise picks,
greenlights, shelves, sends, card dwell time, drill-ins, ignored cards and
rooms viewed. Settings → *numbers for tuning* shows opens per day, opens
without a notification, homecoming skips and finished ÷ started.

All numbers in `TUNING` (`src/play/source.js`) and `CAP`
(`src/play/director.js`) are starting values to tune.

## Code map

```
src/
  game.js              bootstrap
  play/                the game: state, director, work source, crew, cards...
    source.js          simulated work source (agent-layer contract)
    director.js        applies events, slots, presenting, unlocks, growth
    crew.js, brain.js  the crew and their minds (multi-floor, body language)
    scenery.js         state -> objects on the island (no numbers, ever)
    homecoming.js      the return sequence
    unlocks.js         staged unlock moments
    arrivals.js        mail bird, balloons, visitors
    extras.js          notifications, seasons/weather, docked mode
  island/              the world: terrain, house, camera, input, nav, furniture
  ui2/                 cards, mail ritual, shell (label, ticker, settings)
  critters/            the character: rig, faces, actions, role gear
  core/ gfx/ world/    engine, audio, textures, shared props
```

Built with three.js and esbuild.
