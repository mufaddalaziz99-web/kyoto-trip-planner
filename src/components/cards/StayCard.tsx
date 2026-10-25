import type { StayItem } from "@/lib/types";
import { formatDate, formatMoney } from "@/lib/format";
import { BedIcon, SparkIcon, StarIcon } from "@/components/icons";
import { CardShell, TypeTag } from "./CardShell";
import { Filler, orFiller } from "./Filler";
import { Photo } from "./Photo";

// Where you'll sleep: image box on top, details stacked below. Biggest text: the listing title.
export function StayCard({ item }: { item: StayItem }) {
  const nights = item.nights === null ? "" : `${item.nights} ${item.nights === 1 ? "night" : "nights"}`;
  const perNight = formatMoney(item.pricePerNight, item.currency);
  const total = formatMoney(item.totalPrice, item.currency);

  return (
    <CardShell label={`${item.label || "Stay"}: ${item.title || "not listed yet"}`}>
      <div className="relative">
        <Photo src={item.photoUrl} alt={item.title} size="hero" className="aspect-video" priority />
        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[12px] leading-4 font-semibold shadow-elev-1">
          {orFiller(nights, true)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <TypeTag tone="stay" icon={<BedIcon className="size-3.5" />}>
          {orFiller(item.label, true)}
        </TypeTag>

        <div>
          <h3 className="text-[20px] leading-6 font-semibold tracking-[-0.01em]">{orFiller(item.title)}</h3>
          <p className="mt-1 text-[13px] leading-[18px] text-muted">
            {orFiller(item.propertyType)} · {orFiller(item.neighbourhood)}
          </p>
        </div>

        <p className="flex flex-wrap items-center gap-x-1 text-[13px] leading-[18px]">
          <StarIcon className="size-3" />
          {item.rating === null ? <Filler /> : <span className="font-semibold">{item.rating.toFixed(2)}</span>}
          <span className="text-muted">
            ({item.reviewCount === null ? <Filler /> : `${item.reviewCount} reviews`})
          </span>
          <span className="text-subtle">·</span>
          <span className="text-muted">Hosted by {orFiller(item.hostName)}</span>
        </p>

        <p className="flex items-start gap-1.5 text-[13px] leading-[18px]">
          <SparkIcon className="mt-px size-3.5 shrink-0 text-stay" />
          <span>{orFiller(item.highlight)}</span>
        </p>

        <dl className="mt-1 grid grid-cols-2 rounded-lg border border-subtle text-left">
          <div className="px-3 py-2.5">
            <dt className="text-[10px] leading-3 font-bold tracking-[0.04em] uppercase">Check-in</dt>
            <dd className="mt-1 text-[13px] leading-[18px] whitespace-nowrap">{orFiller(formatDate(item.checkIn))}</dd>
          </div>
          <div className="border-l border-subtle px-3 py-2.5">
            <dt className="text-[10px] leading-3 font-bold tracking-[0.04em] uppercase">Check-out</dt>
            <dd className="mt-1 text-[13px] leading-[18px] whitespace-nowrap">{orFiller(formatDate(item.checkOut))}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <div>
            <p className="text-[15px] leading-5">
              {perNight ? (
                <>
                  <span className="font-semibold">{perNight}</span>
                  <span className="text-muted"> a night</span>
                </>
              ) : (
                <Filler />
              )}
            </p>
            <p className="text-[12px] leading-4 text-muted">
              {total ? `${total} total` : <Filler />}
              {nights && ` for ${nights}`}
            </p>
          </div>
          <button
            type="button"
            className="min-h-11 shrink-0 rounded-lg border border-ink px-4 text-[14px] font-semibold transition-colors hover:bg-faint active:scale-[0.98]"
          >
            View stay
          </button>
        </div>
      </div>
    </CardShell>
  );
}
