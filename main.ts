import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line roasting my phone: at most 200 characters, nothing else.
const LINE =
  "My phone says it's out of storage, which is rich coming from a device holding 4,000 photos of my own face that I will never delete and never look at again.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
