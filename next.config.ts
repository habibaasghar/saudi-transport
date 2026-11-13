import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  images: { formats: ["image/avif", "image/webp"] },
  // Removed pages keep their link equity: permanent redirect to the chauffeur hub (SEO-RULES.md section 2).
  async redirects() {
    return ["hourly-driver", "full-day-driver", "personal-driver"].map((slug) => ({
      source: `/:locale(en|ar)/services/chauffeur-services/${slug}`,
      destination: "/:locale/services/chauffeur-services/",
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
