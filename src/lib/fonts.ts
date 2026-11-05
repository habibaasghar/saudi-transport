import { Fraunces, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";

export const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: "variable", axes: ["opsz"] });
export const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
export const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});
