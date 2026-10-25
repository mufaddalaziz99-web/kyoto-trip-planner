import { Children, type CSSProperties, type ReactNode } from "react";

// Laptop: three equal columns in one row.
// Tablet: one swipeable row that snaps card by card, with the next card peeking in.
// Phone: stacked full width, so the guest sees all three cards without having to find the swipe.
export function CardRow({ children, staggerMs = 0 }: { children: ReactNode; staggerMs?: number }) {
  return (
    <div className="no-scrollbar grid grid-cols-1 gap-4 sm:-mx-6 sm:flex sm:snap-x sm:snap-mandatory sm:scroll-px-6 sm:overflow-x-auto sm:px-6 sm:py-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:py-0">
      {Children.map(children, (child, i) => (
        <div
          className={`flex sm:w-[320px] sm:shrink-0 sm:snap-start lg:w-auto ${staggerMs ? "animate-rise-in" : ""}`}
          style={staggerMs ? ({ animationDelay: `${i * staggerMs}ms` } as CSSProperties) : undefined}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
