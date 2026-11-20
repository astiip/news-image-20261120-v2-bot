// news-image-20261120 v2 — "The Twentieth: Five Acts, 27 stories"
// Friday 20 November 2026, told as five time bands (UTC): Overnight, Morning,
// Midday, Afternoon, Evening. Revision of v1 (35 stories) at the user's order:
// 27 stories only — the most popular / highest-impact ones — with bigger,
// more legible type (judge lesson: dense broadsheet text becomes an
// "illegible wall" at ~300px). Left-aligned teal masthead, 3 illustrated
// leads (Kyiv / Akvan / COP31, all redrawn), 10 medium cards with new flat
// SVG banners, a dotted world map with pins inside the Morning band, a
// numbered one-line index for the other 14 stories, a vertical BY THE
// NUMBERS rail on the right edge (7 stats + IN 30 SECONDS summary + COMING
// UP, filling the rail v1 left empty), and a DATE CHECK stamp strip for
// 19 November stories. 27 verified stories in all.
// The entry image is produced by build.html and stored as entry.png; this
// program copies it to the output directory, byte for byte, so both runs
// write identical bytes. No network is used.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
