/** Inline link markup used in section paragraphs and list items: `[anchor text](services/some/path)`. */
export const INLINE_LINK = /\[([^\]]+)\]\(([a-z0-9/-]+)\)/g;

/** The same text with link markup removed (for plain-text uses such as llms.txt or similarity checks). */
export const stripLinks = (s: string) => s.replace(INLINE_LINK, "$1");

/** Every inline link target in a string. */
export const linkTargets = (s: string) => [...s.matchAll(INLINE_LINK)].map((m) => m[2]);
