import { createServerClient } from "@supabase/ssr";
import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

/**
 * /admin is outside next-intl (no locale prefix, never indexed). Here we only refresh the Supabase
 * session cookie and bounce anonymous visitors; real authorization is enforced in the pages/APIs.
 */
async function admin(request: NextRequest) {
  const response = NextResponse.next({ request });
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return response;
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (list) => list.forEach(({ name, value, options }) => {
        request.cookies.set(name, value);
        response.cookies.set(name, value, options);
      }),
    },
  });
  const { data } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;
  const isLogin = path.replace(/\/$/, "") === "/admin/login";
  if (!data.user && !isLogin) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.search = "";
    return NextResponse.redirect(url);
  }
  return response;
}

export default function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path === "/admin" || path.startsWith("/admin/")) return admin(request);
  return intl(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\..*).*)"],
};
