// Famous Last Words at 1 Percent — one-line entry.
// The phone's own last words as its battery hits 1 percent,
// written as a single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  'Tell the group chat I read everything. Tell my owner I died doing what I loved: one last scroll at 1 percent, screen still warm, thumb still scrolling.';

if (LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-199 characters, got ${LINE.length}`);
}
if (LINE.includes('\n') || LINE.includes('\r')) {
  throw new Error('entry must be a single line');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', LINE, 'utf8');
