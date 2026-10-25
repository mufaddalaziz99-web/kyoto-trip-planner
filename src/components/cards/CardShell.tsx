import type { ReactNode } from "react";

// Shared base every card inherits: white, 1px #DADDD8 border, 12px radius,
// up to 360px wide, and stretched to the tallest card in its row. Padding lives
// in each card because the image position (top, bottom strip, right) is part of
// the card's identity.
export function CardShell({
  children,
  label,
  className = "",
  clip = true,
}: {
  children: ReactNode;
  label: string;
  className?: string;
  /** Turn off when a card needs to draw over its own border (the food ticket notches). */
  clip?: boolean;
}) {
  return (
    <article
      aria-label={label}
      className={`group flex w-full max-w-[360px] flex-col rounded-xl border border-card-line bg-white shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-[transform,box-shadow] duration-300 ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-elev-3 ${clip ? "overflow-hidden" : ""} ${className}`}
    >
      {children}
    </article>
  );
}

/** Small accent tag that names the card type with an icon, so colour is never the only cue. */
export function TypeTag({
  icon,
  children,
  tone,
}: {
  icon: ReactNode;
  children: ReactNode;
  tone: "stay" | "experience" | "food";
}) {
  const tones = {
    stay: "bg-stay-tint text-stay",
    experience: "bg-experience-tint text-experience",
    food: "bg-food-tint text-food",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 self-start rounded-full py-1 pr-2.5 pl-2 text-[12px] leading-4 font-semibold ${tones[tone]}`}
    >
      {icon}
      {children}
    </span>
  );
}
