import { Manrope, IBM_Plex_Sans_Arabic } from "next/font/google";

export const display = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", weight: ["400", "500", "600", "700", "800"] });
export const sans = display;
export const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});
