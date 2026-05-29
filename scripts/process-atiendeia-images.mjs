// One-off prep for AtiendeIA landing screenshots.
// Reads raw captures from /imagenes (gitignored — contain PII), outputs
// optimized webp into /public. Re-run when source captures change.
//
//   node scripts/process-atiendeia-images.mjs
//
// Uses sharp (already present as a Next dependency); nothing added to package.json.

import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "imagenes");
const OUT = path.join(root, "public", "images", "products", "atiendeia");

fs.mkdirSync(OUT, { recursive: true });

const DESKTOP_WIDTH = 1400;
const MOBILE_WIDTH = 720;
const QUALITY = 82;

async function convert(input, output, width) {
  await sharp(path.join(SRC, input))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(path.join(OUT, output));
  console.log(`✓ ${output}`);
}

// Straight conversions
await convert(
  "Conversaciones (Escritorio).png",
  "conversaciones-escritorio.webp",
  DESKTOP_WIDTH,
);
await convert(
  "Conversaciones (Movil).jpeg",
  "conversaciones-movil.webp",
  MOBILE_WIDTH,
);
await convert(
  "baseDeConocimiento (Escritorio).png",
  "base-conocimiento-escritorio.webp",
  DESKTOP_WIDTH,
);

// Prospectos: blur the CONTACTO column (real phone numbers) before export.
// Coordinates are on the native 1918x862 capture; masking happens at full
// resolution, then we downscale.
{
  const input = path.join(SRC, "Prospectos (Escritorio).png");
  const mask = { left: 525, top: 330, width: 230, height: 250 };

  const blurredBand = await sharp(input)
    .extract(mask)
    .blur(16)
    .toBuffer();

  const masked = await sharp(input)
    .composite([{ input: blurredBand, left: mask.left, top: mask.top }])
    .toBuffer();

  await sharp(masked)
    .resize({ width: DESKTOP_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(path.join(OUT, "prospectos-escritorio.webp"));
  console.log("✓ prospectos-escritorio.webp (CONTACTO column masked)");
}

console.log("\nDone →", OUT);
