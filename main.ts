// Scrollapse — a make.fun "Invent a Word We Need" entry.
//
// The program writes one line of plain text to entry.txt: a freshly coined
// English word with its one-line definition. It is fully deterministic and
// uses only the Node standard library.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. "scrollapse" (scroll + collapse): the universal moment of
// opening an app to check one thing and surfacing forty minutes later,
// empty-handed. One line, well under the 140-character cap.
const ENTRY =
  "scrollapse (n.) — opening an app to check one thing, then closing it forty minutes later, empty-handed.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
