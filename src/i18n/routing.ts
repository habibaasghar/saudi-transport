import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
  // Never redirect based on Accept-Language/IP; both versions stay crawlable.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
export const rtlLocales: Locale[] = ["ar"];
