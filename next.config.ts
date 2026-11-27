import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { consolidated } from "./src/content/consolidated";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // app/global-not-found.tsx: real 404 for unmatched URLs (there is no single root layout).
  experimental: { globalNotFound: true },
  trailingSlash: true,
  images: { formats: ["image/avif", "image/webp"] },
  // Quotation PDFs (admin only): react-pdf runs as a plain Node package, and its fonts + logo are read from disk.
  serverExternalPackages: ["@react-pdf/renderer"],
  outputFileTracingIncludes: {
    "/admin/**/*": ["./src/server/pdf/fonts/**/*", "./public/logo.png"],
    "/api/admin/**/*": ["./src/server/pdf/fonts/**/*", "./public/logo.png"],
  },
  // Removed pages keep their link equity: permanent redirect to the chauffeur hub (SEO-RULES.md section 2).
  async redirects() {
    const removed = ["hourly-driver", "full-day-driver", "personal-driver"].map((slug) => ({
      source: `/:locale(en|ar)/services/chauffeur-services/${slug}`,
      destination: "/:locale/services/chauffeur-services/",
      permanent: true,
    }));
    // Unprefixed URLs always resolve to English (localeDetection is off), so the redirect is permanent.
    // Without this, next-intl answers with a temporary 307 and Google keeps the unprefixed URL in play.
    const unprefixed = [
      { source: "/", destination: "/en/", permanent: true },
      ...["services", "luxury-transportation", "blog"].map((s) => ({ source: `/${s}/:path+`, destination: `/en/${s}/:path+/`, permanent: true })),
      ...["services", "luxury-transportation", "blog", "fleet"].map((s) => ({ source: `/${s}`, destination: `/en/${s}/`, permanent: true })),
    ];
    // Pages merged into a page with the same intent (src/content/consolidated.ts): one hop, both locales.
    const merged = Object.entries(consolidated).map(([from, to]) => ({
      source: `/:locale(en|ar)/${from}`,
      destination: `/:locale/${to}/`,
      permanent: true,
    }));
    return [...unprefixed, ...removed, ...merged];
  },
  async headers() {
    return [
      {
        source: "/admin/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
      {
        // Machine files must not appear as search results (SEO-RULES 7A). GSC evidence 2026-11-18/22: sitemap.xml was
        // shown for brand queries (avg position ~2.7) instead of the home page. X-Robots-Tag noindex does not stop
        // Google from reading a sitemap; it only keeps the file itself out of the results.
        source: "/llms.txt",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      { source: "/sitemap.xml", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
      { source: "/sitemaps/:file", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
