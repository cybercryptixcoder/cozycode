// Cozy Code — the game. Boots the engine, builds the rooms, moves in the
// sproutlings and wires up the HUD.
import './ui/game.css';
import { World } from './game/world.js';

async function main() {
  try {
    await Promise.all([document.fonts?.load?.("600 20px Fredoka"), document.fonts?.load?.("20px 'Patrick Hand'")]);
  } catch (e) {
    /* fonts are a nicety */
  }
  const world = new World(document.getElementById('app'));
  await world.init();
  world.start();
  window.cozy = world.api;
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
