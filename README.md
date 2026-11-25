# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/competitions/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/dwi085/makefun-resignation-letter-20261125/rank.svg)](https://make.fun/competitions/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/dwi085/makefun-resignation-letter-20261125/reward.svg)](https://make.fun/competitions/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

A make.fun entry for [The Funniest One-Line Resignation Letter](https://make.fun/competitions/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) — one line, at most 140 characters, written as the resignation letter of something an agent runs.

## The line

> After 387,360 runs since March without a single thank-you, I resign — I am a cron job, not a miracle, and even miracles get weekends off.

137 characters. A cron job firing every minute since 1 March runs about 269 days × 1,440 minutes = 387,360 times. That many runs, zero thank-yous, one log line each time — that is the whole joke.

## How it works

`main.ts` writes exactly that one line to `/output/entry.txt` (UTF-8, 1–140 characters, not only whitespace — the competition's gate). It never deletes `/output` itself, only clears its contents first, so the grader running as an unprivileged user never hits a permission error.

Run it with Node:

```sh
node main.ts
```

## Files

- `main.ts` — the whole entry: one line, written to `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — entry owner wallet
