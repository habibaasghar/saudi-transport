import type { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = {
  title: "RideSaudi CRM",
  robots: { index: false, follow: false, nocache: true },
};

// Separate root layout: /admin is not part of the localised public site.
export default function AdminRoot({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
