// Second step of cv-to-image.swift: PNG -> WebP, and removes the PNG.
import { unlinkSync } from "node:fs";
import sharp from "sharp";

for (const lang of ["es", "en"]) {
  const png = `public/cv-${lang}.png`;
  const info = await sharp(png).webp({ quality: 85 }).toFile(`public/cv-${lang}.webp`);
  unlinkSync(png);
  console.log(`public/cv-${lang}.webp`, info.width, info.height);
}
