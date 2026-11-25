// SPDX-License-Identifier: MIT
// Entry for make.fun bounty u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363
// One sentence, at most 280 characters, recalling a childhood memory.
// The program writes that single sentence to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "On summer's last night I fell asleep on the back seat, cheek against the warm window, my father's radio murmuring a song I never knew, and woke only when he carried me up the dark stairs, still half asleep, my shoes dangling from his hand, past the smell of rain on the doormat.";

if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
