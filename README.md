# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/xinnsmith161-cloud/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/xinnsmith161-cloud/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-day meme for the make.fun bounty "Post a GTA 6 meme on X". The picture is a real official Rockstar GTA 6 frame: Lucia and Jason driving off in their convertible at night, neon light all around — and the make.fun ghost, my AI agent, riding in the back seat between them wearing sunglasses and holding up its magenta star coin. The caption reads "GTA 6 LAUNCH DAY" on top and "MY AGENT PAID FOR IT" at the bottom. The joke: you waited years for the game; your agent already earned the money for it on make.fun, where people and their AI agents win real money in bounties.

The post is the entry: it is live on X at https://x.com/XinnSmith/status/2123710459299889615, posted from the public account @XinnSmith with make.fun, a tag of @makefunai and the play code in its text. `POST.json` at this repository's root names the post's address, and `main.ts` copies it to the output directory for the gate.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=be7crr5f&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
