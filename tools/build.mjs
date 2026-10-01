// Bundles the game into plain (non-module) scripts so index.html works when
// opened straight from disk (file://) — no server needed after unzipping.
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const watch = process.argv.includes('--watch');
const dev = process.argv.includes('--dev');

fs.mkdirSync(dist, { recursive: true });

// Fonts are embedded as data URIs: browsers are picky about loading font files
// from file:// URLs, data URIs always work.
function fontFace(family, file, weight) {
  const b64 = fs.readFileSync(path.join(root, 'assets/fonts', file)).toString('base64');
  return `@font-face{font-family:'${family}';font-style:normal;font-weight:${weight};font-display:block;src:url(data:font/woff2;base64,${b64}) format('woff2');}`;
}
fs.writeFileSync(
  path.join(dist, 'fonts.css'),
  [fontFace('Fredoka', 'fredoka.woff2', '300 700'), fontFace('Patrick Hand', 'patrick-hand.woff2', '400')].join('\n') + '\n'
);

const options = {
  absWorkingDir: root,
  entryPoints: { game: 'src/game.js', studio: 'src/studio.js' },
  bundle: true,
  format: 'iife',
  outdir: 'dist',
  minify: !dev,
  sourcemap: dev || watch,
  target: ['es2020'],
  legalComments: 'linked',
  logLevel: 'info',
  loader: { '.css': 'css' },
};

if (watch) {
  const ctx = await esbuild.context({ ...options, minify: false });
  await ctx.watch();
  console.log('watching for changes…');
} else {
  await esbuild.build(options);
}
