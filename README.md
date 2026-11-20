# The Twentieth — Friday 20 November 2026 (v2: 27 stories)

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/astiip/news-image-20261120-v2-bot/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/astiip/news-image-20261120-v2-bot/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

Entry for [news-image-20261120](https://make.fun/bounty/news-image-20261120)
("Sum up 20 November's world news in one image"). $250, top 50.

## Model: "Five Acts" — the day as it happened, 27 stories only

Revision of v1 (35 stories) at the user's order: "buat 27 berita aja tapi
yg paling populer" — 27 stories only, the most popular / highest-impact
ones. The v1 lesson applied here is legibility first: the judge's recurring
criticism is that dense broadsheet text becomes an "illegible wall" at
~300px, so with 8 fewer stories the decks, cards and index are all set
bigger (lead decks 10.5px, card decks 10.5px, index 10.5px, DATE CHECK
9.5px) and the right rail's empty bottom is filled with a meaningful
IN 30 SECONDS summary instead of small text.

Same identity as v1, deliberately different from the leaderboard's
giant-centre-date / four-lead-row / 2×5-grid entries: a left-aligned teal
masthead ("THE TWENTIETH"), a region bar (EUROPE 7 · ASIA 5 · MIDDLE EAST 4 ·
AMERICAS 4 · OCEANIA 2 · GLOBAL 5 = 27), three illustrated leads on top
(Kyiv / Cyclone Akvan / COP31, all redrawn for v2), then five horizontal
time bands in UTC (OVERNIGHT 00–06 / MORNING 06–12 / MIDDAY 12–15 /
AFTERNOON 15–19 / EVENING 19–24). A vertical BY THE NUMBERS rail runs down
the right edge — not a strip across the top — and a dotted world map with
numbered pins lives inside the Morning band, not in a split panel. A dashed
DATE CHECK stamp strip at the bottom lists 14 stories from 19 November
that must not be counted as today's news.

## Stories (27, all verified 20 Nov 2026)

Leads: 1 Kyiv — biggest overnight strike (400+ drones, 110+ missiles;
8 killed, 6 in Kyiv; 3 bridges hit) · 2 Cyclone Akvan landfall, Odisha
(300,000+ evacuated) · 3 COP31 final day, Antalya (draft drops ALL
fossil-fuel mention).

Cards (10): 4 Poland airspace violations · 5 California subpoenas Nvidia ·
6 UK–EU reset (£5.1bn/yr) · 7 BepiColombo reaches Mercury · 8 Japan CPI
2.3% / China LPR held · 9 Suneung, 111 caught cheating · 10 Asia AI
sell-off (Taiex −6.23%) · 11 Italy CGIL strike · 12 GTA VI day one
($2.36bn, estimate) · 13 Daraxonrasib trial (60.7% respond, early trial).

Index (14): 14 Kharkiv hospital · 15 Xi hails Australia turnaround ·
16 Lula visits Raoni, 94 · 17 Hormuz tanker mines · 18 Germany Gen Z
protests · 19 Brazil sells $1bn · 20 Iran war cost $48.3bn · 21 Iraq:
Kataib Hezbollah deadline · 22 Myanmar ICJ ruling "unfair" · 23 Senate
blocks Iran vote 48–51 · 24 Rio Tinto pays $250m · 25 Poland gas pact ·
26 Iran's 14-tanker convoy · 27 youth protests in 25+ countries.

Dropped from v1 (8 smallest-impact): F1 Las Vegas FP2 · NZ cricket 368 /
India 159–1 · UK retail +0.7% · Nepal PM to visit India · ATP Turin ·
Tonga schools close early · Gaza rescue fleet 85% down · EU methane rules
delayed.

Every figure is the verified reported figure (Reuters / AP / BBC / CNN /
CNBC / Guardian / IMD / EORTC / ONS / UKMTO / olivlaw / regionalert /
One Turn / Ukrinform / Sensor Tower via VGC). Pills mark the claims that
need them: "UKRAINE SAYS" (Kyiv), "ESTIMATE" (GTA VI — Take-Two has not
confirmed), "EARLY TRIAL" (daraxonrasib — no control group, not yet
peer-reviewed).

## Build

`build.html` renders to `entry.png` (1024×1024, deterministic) via
Playwright (`python3 render.py` — render twice, same sha256); `main.ts`
copies it byte-for-byte. `verify.py` checks all 27 stories, all 14
DATE CHECK items, the exact figures, the dropped v1 stories are absent,
and the region bar sum.

NOT SUBMITTED — built for review first.
