import type { Locale } from "@/i18n/routing";
import { images, type PageImage } from "@/content/images";
import { SITE_URL } from "@/lib/site";

/**
 * Social-share image for a page: the 1200x630 JPEG built from the page's own photo by scripts/og-images.mjs,
 * or the Riyadh skyline (the home page photo) for pages without one, so every URL has a large preview card.
 */
export function ogImage(img: PageImage | undefined, locale: Locale) {
  const pic = img ?? images.riyadh;
  return {
    url: `${SITE_URL}${pic.src.replace(/^\/images\//, "/images/og/").replace(/\.webp$/, ".jpg")}`,
    width: 1200,
    height: 630,
    alt: pic.alt[locale],
    type: "image/jpeg",
  };
}
