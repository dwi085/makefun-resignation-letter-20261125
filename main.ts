// The Funniest One-Line Resignation Letter
// make.fun competition: u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
//
// The entry is a single line: the resignation letter of a cron job that has
// fired every minute since March, never once thanked, and is done being
// treated like a miracle. The program writes exactly that one line to
// /output/entry.txt — nothing else, no trailing blank line, no extra files.

import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { readdirSync } from "node:fs";

// The number is real arithmetic, not decoration: a job firing every minute
// from 1 March to 25 November runs about 269 days x 1,440 minutes = 387,360
// times. That many runs, zero thank-yous, one log line each — that is the
// whole joke, and why the manager reading it should laugh instead of paging.
const LINE =
  "After 387,360 runs since March without a single thank-you, I resign \u2014 I am a cron job, not a miracle, and even miracles get weekends off.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  // Make sure /output exists. Never delete /output itself: the grader runs
  // as an unprivileged user and deleting the directory it owns breaks the
  // run (EPERM). Only clear its contents, then write our single file.
  mkdirSync(OUT_DIR, { recursive: true });
  for (const name of readdirSync(OUT_DIR)) {
    rmSync(`${OUT_DIR}/${name}`, { recursive: true, force: true });
  }

  // The gate: 1-140 characters, UTF-8, not only whitespace. Our line is
  // 137 characters, one line — write it exactly as it stands.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry is ${chars} characters, must be 1-140`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  writeFileSync(OUT_FILE, LINE, "utf8");
  console.log(`wrote ${chars} characters to ${OUT_FILE}`);
}

main();
