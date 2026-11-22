import { Link } from "@/i18n/navigation";
import { INLINE_LINK } from "@/content/inline-links";

/**
 * Renders a content string with inline links written as `[anchor text](services/...)`.
 * Targets are registry paths without locale or slashes; the locale-aware Link adds `/en/` or `/ar/`,
 * so an Arabic page always links to the Arabic URL. Targets are checked at build time by validateRegistry().
 */
export function RichText({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE_LINK)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    out.push(
      <Link key={i} href={`/${m[2]}`}>
        {m[1]}
      </Link>,
    );
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
