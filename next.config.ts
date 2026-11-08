import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  images: { formats: ["image/avif", "image/webp"] },
  // Old /{locale}/?service=x URLs (already indexed) -> real service pages.
  async redirects() {
    const map: Record<string, string> = {
      airport: "services/airport-transfers",
      chauffeur: "services/chauffeur-services",
      intercity: "services/intercity-transfers",
      hourly: "services/chauffeur-services/hourly-driver",
      corporate: "services/chauffeur-services/business-chauffeur",
      vip: "luxury-transportation",
    };
    return Object.entries(map).map(([k, path]) => ({
      source: "/:locale(en|ar)",
      has: [{ type: "query" as const, key: "service", value: k }],
      destination: `/:locale/${path}/`,
      permanent: true,
    }));
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
