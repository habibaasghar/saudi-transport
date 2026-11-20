import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
  // Never redirect based on Accept-Language/IP; both versions stay crawlable.
  localeDetection: false,
  // No hreflang HTTP Link header: it pointed x-default at unprefixed URLs that redirect, contradicting the
  // <link rel="alternate"> tags in the HTML. Hreflang is declared once, in the HTML and the sitemap.
  alternateLinks: false,
});

export type Locale = (typeof routing.locales)[number];
export const rtlLocales: Locale[] = ["ar"];
