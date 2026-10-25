import type { ExperienceItem } from "@/lib/types";
import { formatDate, formatHours, formatMoney } from "@/lib/format";
import { LanternIcon, PinIcon, StarIcon } from "@/components/icons";
import { CardShell, TypeTag } from "./CardShell";
import { Filler, orFiller } from "./Filler";
import { Photo } from "./Photo";

// What you'll do: the start time leads, details stacked, image strip along the bottom.
export function ExperienceCard({ item }: { item: ExperienceItem }) {
  const perGuest = formatMoney(item.pricePerGuest, item.currency);
  const forTwo = formatMoney(item.totalForTwo, item.currency);
  const soldOut = item.availability.toLowerCase().includes("sold out");

  return (
    <CardShell label={`${item.label || "Experience"}: ${item.title || "not listed yet"}`}>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <TypeTag tone="experience" icon={<LanternIcon className="size-3.5" />}>
            {orFiller(item.label, true)}
          </TypeTag>
          <span
            className={`rounded-full px-2.5 py-1 text-[12px] leading-4 font-semibold ${
              soldOut ? "bg-[#fff5f3] text-[#c13515]" : "bg-[#e6f6e9] text-[#008a05]"
            }`}
          >
            {orFiller(item.availability, true)}
          </span>
        </div>

        <div className="mt-1 flex items-baseline gap-2">
          <p className="text-[28px] leading-8 font-semibold tracking-[-0.02em] tabular-nums">
            {orFiller(item.startTime, true)}
          </p>
          <p className="text-[13px] leading-[18px] text-muted">
            {orFiller(formatDate(item.date))} · {orFiller(formatHours(item.durationHours))}
          </p>
        </div>

        <div>
          <h3 className="text-[16px] leading-[22px] font-semibold">{orFiller(item.title)}</h3>
          <p className="mt-1 flex flex-wrap items-center gap-x-1 text-[13px] leading-[18px] text-muted">
            {orFiller(item.category)}
            <span className="text-subtle">·</span>
            Hosted by {orFiller(item.hostName)}
            <span className="text-subtle">·</span>
            <StarIcon className="size-3 text-ink" />
            {item.rating === null ? <Filler /> : <span className="font-semibold text-ink">{item.rating.toFixed(2)}</span>}
          </p>
        </div>

        <p className="flex items-start gap-1.5 text-[13px] leading-[18px]">
          <PinIcon className="mt-px size-4 shrink-0 text-experience" />
          <span>{orFiller(item.meetingPoint)}</span>
        </p>

        <p className="mt-auto pt-2 text-[15px] leading-5">
          {perGuest ? (
            <>
              <span className="font-semibold">{perGuest}</span>
              <span className="text-muted"> per guest</span>
            </>
          ) : (
            <Filler />
          )}
          <span className="text-muted"> · {forTwo ? `${forTwo} for 2` : <Filler />}</span>
        </p>
      </div>

      <Photo src={item.photoUrl} alt={item.title} size="hero" className="aspect-[3/1]" />
    </CardShell>
  );
}
