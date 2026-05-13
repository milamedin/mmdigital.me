// One-time skripta za skidanje Google Fonts fajlova i pravljenje lokalnog fonts.css.
// Pokreni jednom: `node scripts/fetch-fonts.mjs`. Rezultat ide u src/public/assets/fonts/.
// Crnogorski koristi latin + latin-ext (ć, č, š, đ, ž su u latin-ext).
// Šta uzimamo: Inter 400/500/600/700, Playfair Display 400/700, italic 400/700.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'src', 'public', 'assets', 'fonts');

const CSS_URL =
  'https://fonts.googleapis.com/css2?' +
  'family=Inter:wght@400;500;600;700' +
  '&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700' +
  '&display=swap';

// Pravim se da sam Chrome na MacBook-u da Google vrati woff2 (umjesto starijih formata).
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// Subset-ovi koje držimo. Skipujemo cyrillic, greek, vietnamese.
const KEEP_SUBSETS = new Set(['latin', 'latin-ext']);

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  console.log('▶ Skidam Google Fonts CSS...');
  const cssRes = await fetch(CSS_URL, { headers: { 'User-Agent': UA } });
  const cssRaw = await cssRes.text();

  // Parsiraj @font-face blokove
  const blocks = [];
  const re = /\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{([^}]+)\}/g;
  let m;
  while ((m = re.exec(cssRaw))) {
    const subset = m[1];
    const body = m[2];
    if (!KEEP_SUBSETS.has(subset)) continue;
    blocks.push({ subset, body });
  }
  console.log(`▶ Pronašao ${blocks.length} font-face blokova za subsete: ${[...KEEP_SUBSETS].join(', ')}`);

  // Za svaki, izvuci atribute + URL, skini woff2 lokalno
  const localBlocks = [];
  for (const { subset, body } of blocks) {
    const family = (body.match(/font-family:\s*['"]?([^'";\n]+)/) || [])[1].trim();
    const style = (body.match(/font-style:\s*([\w-]+)/) || [])[1];
    const weight = (body.match(/font-weight:\s*(\d+)/) || [])[1];
    const urlMatch = body.match(/url\((https:\/\/[^)]+)\)/);
    const ucRange = (body.match(/unicode-range:\s*([^;]+);/) || [])[1].trim();
    if (!urlMatch) continue;
    const url = urlMatch[1];

    const slugFamily = family.toLowerCase().replace(/\s+/g, '-');
    const filename = `${slugFamily}-${weight}-${style}-${subset}.woff2`;
    const localPath = path.join(OUT_DIR, filename);

    console.log(`  ↓ ${filename}`);
    const fontRes = await fetch(url, { headers: { 'User-Agent': UA } });
    const buf = Buffer.from(await fontRes.arrayBuffer());
    await fs.writeFile(localPath, buf);

    localBlocks.push({
      family, style, weight, subset, ucRange,
      localUrl: `/assets/fonts/${filename}`,
      size: buf.length,
    });
  }

  // Sortiraj: prvo latin, pa latin-ext (browser će ranije matchovati ASCII)
  localBlocks.sort((a, b) => {
    const sa = a.subset === 'latin' ? 0 : 1;
    const sb = b.subset === 'latin' ? 0 : 1;
    if (sa !== sb) return sa - sb;
    if (a.family !== b.family) return a.family.localeCompare(b.family);
    if (a.weight !== b.weight) return Number(a.weight) - Number(b.weight);
    return a.style.localeCompare(b.style);
  });

  // Napiši fonts.css
  const css = localBlocks.map(b =>
    `/* ${b.family} ${b.weight} ${b.style} (${b.subset}) — ${(b.size / 1024).toFixed(1)} KB */
@font-face {
  font-family: '${b.family}';
  font-style: ${b.style};
  font-weight: ${b.weight};
  font-display: swap;
  src: url('${b.localUrl}') format('woff2');
  unicode-range: ${b.ucRange};
}`).join('\n\n');

  const fontsCssPath = path.join(OUT_DIR, 'fonts.css');
  await fs.writeFile(fontsCssPath, css + '\n', 'utf8');

  const totalKB = localBlocks.reduce((s, b) => s + b.size, 0) / 1024;
  console.log(`▶ Sve sređeno. Ukupno ${localBlocks.length} fajl(a), ~${totalKB.toFixed(1)} KB.`);
  console.log(`▶ Lokalni CSS: ${fontsCssPath}`);
}

main().catch(e => { console.error(e); process.exit(1); });
