// gta6-meme-x: the entry is the X post itself, so this program only hands its address to the gate.
// Written for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01), Node 22, standard library only.
// It copies POST.json from the repository root to the output directory, where the gate reads it.
// Defaults are the grader's paths (/bot and /output); the two env vars let you run it anywhere else.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
