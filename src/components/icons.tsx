// Small inline icon set, drawn on a 16/24 grid with Airbnb's 2px-ish strokes.
type IconProps = { className?: string };

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
    </svg>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export function WalkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="4" r="1.75" />
      <path d="m9 20 2.5-6.5L14 16v4M8 11l3-3.5 3 1 2 3 2.5 1M11.5 13.5l1-4.5" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2.5c.4 4.9 2.6 7.1 7.5 7.5-4.9.4-7.1 2.6-7.5 7.5-.4-4.9-2.6-7.1-7.5-7.5 4.9-.4 7.1-2.6 7.5-7.5Z" />
      <path d="M19 15.5c.2 2.2 1.2 3.2 3.5 3.5-2.3.3-3.3 1.3-3.5 3.5-.2-2.2-1.2-3.2-3.5-3.5 2.3-.3 3.3-1.3 3.5-3.5Z" opacity=".6" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function BedIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 19v-9M21 19v-5a3 3 0 0 0-3-3h-7v6M3 17h18M7 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  );
}

export function LanternIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v2M9 4h6M9 20h6M12 20v2M7 8c0-2 2-4 5-4s5 2 5 4v8c0 2-2 4-5 4s-5-2-5-4Z" />
      <path d="M7 12h10" />
    </svg>
  );
}

export function BowlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h18a9 9 0 0 1-18 0ZM9 20h6M14 8l6-5M11 8l5-6" />
    </svg>
  );
}
