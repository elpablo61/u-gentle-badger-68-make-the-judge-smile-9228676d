// Make the Judge Smile — one line about a small good thing today.
// Writes a single line (max 200 characters) to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "This morning my neighbour left a warm loaf on my doorstep with a note that said 'for the early riser' — and suddenly the whole street felt like family.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
console.log(`entry: ${LINE}`);
