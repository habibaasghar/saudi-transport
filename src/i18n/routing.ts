import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
  // No IP / Accept-Language based redirects: each URL serves one language.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
