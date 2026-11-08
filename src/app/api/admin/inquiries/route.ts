import { NextResponse } from "next/server";
import { adminOrNull } from "@/server/auth/session";
import { listInquiries } from "@/server/services/inquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NO_STORE = { "cache-control": "no-store" };

export async function GET(request: Request) {
  const me = await adminOrNull();
  if (!me) return NextResponse.json({ error: "unauthorized" }, { status: 401, headers: NO_STORE });
  const u = new URL(request.url);
  const data = await listInquiries({
    q: u.searchParams.get("q")?.slice(0, 80) || undefined,
    status: u.searchParams.get("status") || undefined,
    limit: Number(u.searchParams.get("limit")) || 25,
    offset: Number(u.searchParams.get("offset")) || 0,
  });
  return NextResponse.json(data, { headers: NO_STORE });
}
