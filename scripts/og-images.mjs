// Builds 1200x630 JPEG social-share images (Open Graph / Twitter) from every photo in public/images.
// Output mirrors the source path under public/images/og/ (locations/riyadh.webp -> og/locations/riyadh.jpg).
// JPEG because some social crawlers still ignore WebP; smart crop keeps portrait photos (Makkah, Madinah) usable.
// Run after adding or replacing a photo: node scripts/og-images.mjs
import sharp from "sharp";
import { mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";

const root = "public/images";
const outRoot = join(root, "og");
const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    if (p === outRoot) return [];
    return statSync(p).isDirectory() ? walk(p) : /\.webp$/.test(f) ? [p] : [];
  });

for (const src of walk(root)) {
  const out = join(outRoot, relative(root, src)).replace(/\.webp$/, ".jpg");
  mkdirSync(dirname(out), { recursive: true });
  await sharp(src)
    .resize(1200, 630, { fit: "cover", position: sharp.strategy.attention })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(out); // sharp drops EXIF/GPS metadata by default
  console.log(out);
}
