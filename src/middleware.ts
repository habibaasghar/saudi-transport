import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip API, Next internals and any path with a file extension (robots.txt, sitemap.xml, llms.txt, images...)
  matcher: ["/((?!api|_next|_vercel|opengraph-image|twitter-image|.*\..*).*)"],
};
