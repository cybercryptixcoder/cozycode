// Cozy Code — the island. (bootstrap)
import './ui2/island.css';
import { Game } from './play/game.js';
import { Store } from './play/state.js';
import { clock } from './play/clock.js';

async function main() {
  const params = new URLSearchParams(location.search);
  const store = new Store();
  if (params.has('fresh')) {
    store.reset();
    store.frozen = false;
    store.data = store.load();
  }
  if (params.has('nosave')) store.frozen = true;
  const unlocks = {};
  for (const u of (params.get('unlock') || '').split(',').filter(Boolean)) unlocks[u] = Date.now();
  if (params.get('unlock') === 'all') for (const u of ['board', 'workshop', 'gate', 'study', 'kitchen', 'upstairs', 'garden', 'shed']) unlocks[u] = Date.now();
  const game = new Game(document.getElementById('app'), { store, unlocks });
  const t = params.get('time');
  if (t) game.world.daylight.setPreset(t);
  game.start();
  window.__game = game;
  window.__clockOff = () => clock.offset;
  window.__world = game.world;
  window.__step = (n = 1) => {
    game.world.engine.stop();
    game.world.engine.step(1 / 60, n);
  };
  document.body.classList.add('ready');
}

main().catch((err) => {
  console.error(err);
  const pre = document.createElement('pre');
  pre.className = 'fatal';
  pre.textContent = 'Something went wrong while starting the game:\n\n' + (err && err.stack ? err.stack : String(err));
  document.body.appendChild(pre);
});
