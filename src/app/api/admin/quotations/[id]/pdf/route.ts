import { NextResponse } from "next/server";
import { adminOrNull } from "@/server/auth/session";
import { getQuotation } from "@/server/services/crm";
import { quotationFilename, renderQuotationPdf } from "@/server/pdf/quotation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PRIVATE = { "cache-control": "private, no-store", "x-robots-tag": "noindex, nofollow" };

/** Quotation PDF for signed-in CRM staff only. ?download=1 saves it, otherwise it opens in the browser. */
export async function GET(request: Request, ctx: { params: Promise<{ id: string }> }) {
  const me = await adminOrNull();
  if (!me) return NextResponse.json({ error: "unauthorized" }, { status: 401, headers: PRIVATE });
  const { id } = await ctx.params;
  const b = await getQuotation(id);
  if (!b) return NextResponse.json({ error: "not_found" }, { status: 404, headers: PRIVATE });
  const pdf = await renderQuotationPdf(b);
  const download = new URL(request.url).searchParams.get("download") === "1";
  return new NextResponse(new Uint8Array(pdf), {
    headers: {
      ...PRIVATE,
      "content-type": "application/pdf",
      "content-disposition": `${download ? "attachment" : "inline"}; filename="${quotationFilename(b.quote.reference)}"`,
    },
  });
}
