import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const RANT =
  "My supermarket trolley has one wobbly wheel, and it has opinions. It doesn't just squeak — it drags me, hard left, straight into the chocolate aisle every single time, like it has a loyalty card of its own. I came in for milk. I leave with regret, a squeaking wheel, and a trolley that clearly thinks it runs this trip, not me.";

if (RANT.length < 1 || RANT.length > 400 || RANT.trim().length === 0) {
  console.error(
    `Invalid rant: length ${RANT.length} chars (must be 1-400, non-whitespace).`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== RANT) {
  console.error("Read-back verification failed: written file differs from validated rant.");
  process.exit(1);
}
