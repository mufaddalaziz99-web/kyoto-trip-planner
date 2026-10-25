import { Photo } from "@/components/cards/Photo";
import { ChevronRightIcon } from "@/components/icons";

export const SUGGESTIONS = [
  "A weekend in Kyoto for two, we love food",
  "Something slow and quiet, near temples",
  "First time in Kyoto, show us the classics",
];

const HERO = {
  main: "https://images.unsplash.com/photo-1645027577788-bad2f623ba71",
  top: "https://images.unsplash.com/photo-1698618988744-737573cb6a7a",
  bottom: "https://images.unsplash.com/photo-1759933164283-ab161f34bd02",
};

// Guests dropped off at the filter panel before seeing a listing, so the
// empty state asks for nothing: one tap on a suggestion gets a full plan.
export function Welcome({ onPick }: { onPick: (text: string) => void }) {
  return (
    <section className="animate-fade-in mx-auto flex max-w-[560px] flex-col pt-2 sm:pt-8">
      <div className="grid h-[168px] grid-cols-[2fr_1fr] gap-1.5 overflow-hidden rounded-2xl sm:h-[220px]">
        <Photo src={HERO.main} alt="A street of wooden houses in Higashiyama" size="hero" className="h-full" priority />
        <div className="grid grid-rows-2 gap-1.5">
          <Photo src={HERO.top} alt="Arashiyama bamboo grove" size="thumb" className="h-full" priority />
          <Photo src={HERO.bottom} alt="Matcha being whisked" size="thumb" className="h-full" priority />
        </div>
      </div>

      <h1 className="mt-6 text-[26px] leading-8 font-bold tracking-[-0.02em] sm:text-[32px] sm:leading-10">
        Plan your Kyoto weekend
      </h1>
      <p className="mt-2 text-[16px] leading-6 text-muted">
        Tell me who’s coming and what you love. I’ll put together where you’ll stay, what you’ll do and where
        you’ll eat.
      </p>
      <p className="mt-4 flex flex-wrap items-center gap-x-2 text-[14px] leading-5">
        <span className="font-semibold">Fri 11 – Sun 13 Apr 2025</span>
        <span className="text-subtle">·</span>
        <span className="text-muted">2 nights, dates are set</span>
      </p>

      <h2 className="mt-8 text-[13px] leading-4 font-semibold text-muted">Try asking</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {SUGGESTIONS.map((s) => (
          <li key={s}>
            <button
              type="button"
              onClick={() => onPick(s)}
              className="group flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border border-line bg-white px-4 py-3 text-left text-[15px] leading-5 transition-[border-color,box-shadow,transform] duration-200 hover:border-ink hover:shadow-elev-2 active:scale-[0.99]"
            >
              {s}
              <ChevronRightIcon className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
