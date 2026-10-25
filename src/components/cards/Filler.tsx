import type { ReactNode } from "react";

// Stands in for any empty field ("" or null) so a card never shows a blank,
// "undefined" or "null". `short` is for narrow slots like times and dates.
export function Filler({ short = false }: { short?: boolean }) {
  return <span className="font-normal text-muted italic">{short ? "TBC" : "Not listed yet"}</span>;
}

/** The text if it has any, otherwise the filler line. */
export function orFiller(text: string | null | undefined, short = false): ReactNode {
  return text ? text : <Filler short={short} />;
}
