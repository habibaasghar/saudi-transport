import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | RideSaudi",
};

/**
 * Unmatched URLs outside /en and /ar (for example /wp-login.php). Without this the [locale] layout
 * called notFound() with no root layout above it and answered 500, which Google records as a server error.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="notfound">
          <p className="eyebrow">404</p>
          <h1>RideSaudi</h1>
          <p><Link className="btn btn--primary" href="/en/">Home</Link> <Link className="btn btn--primary" href="/ar/" lang="ar" dir="rtl">الرئيسية</Link></p>
        </main>
      </body>
    </html>
  );
}
