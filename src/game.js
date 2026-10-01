// Cozy Code — the island. (bootstrap)
import './ui2/island.css';
import { IslandWorld } from './island/world.js';

async function main() {
  const params = new URLSearchParams(location.search);
  const world = new IslandWorld(document.getElementById('app'));
  const unlocks = {};
  for (const u of (params.get('unlock') || '').split(',').filter(Boolean)) unlocks[u] = Date.now();
  if (params.get('unlock') === 'all') for (const u of ['board', 'workshop', 'gate', 'study', 'kitchen', 'upstairs', 'garden', 'shed']) unlocks[u] = Date.now();
  world.applyStructure(unlocks);
  const t = params.get('time');
  if (t) world.daylight.setPreset(t);
  world.engine.add((dt, time) => world.update(dt, time));
  world.engine.start();
  window.__world = world;
  window.__step = (n = 1) => {
    world.engine.stop();
    world.engine.step(1 / 60, n);
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
