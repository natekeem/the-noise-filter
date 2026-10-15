/**
 * Estimate reading time in whole minutes from raw Markdown.
 * Strips code fences, HTML tags, Markdown link targets, and symbols
 * before counting words at an average adult reading speed.
 */
export function getReadingTime(body: string | undefined, wpm = 230): number {
  if (!body) return 1;
  const text = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/[#>*_`|[\]-]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wpm));
}
