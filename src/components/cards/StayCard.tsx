import type { StayItem } from "@/lib/types";
import { dotJoin, formatDate, formatYen } from "@/lib/format";
import { BedIcon, StarIcon } from "@/components/icons";
import { CardShell, TypeTag } from "./CardShell";
import { Photo } from "./Photo";

// Where you'll sleep: image box on top, details stacked below.
export function StayCard({ item }: { item: StayItem }) {
  const guests = item.guests === null ? "" : `${item.guests} ${item.guests === 1 ? "guest" : "guests"}`;
  const nights = `${item.nights} ${item.nights === 1 ? "night" : "nights"}`;

  return (
    <CardShell label={`${item.label}: ${item.stayName}`}>
      <div className="relative">
        <Photo src={item.photoUrl} alt={item.stayName} size="hero" className="aspect-video" priority />
        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[12px] leading-4 font-semibold shadow-elev-1">
          {nights}
        </span>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <TypeTag tone="stay" icon={<BedIcon className="size-3.5" />}>
          {item.label}
        </TypeTag>

        <div>
          <h3 className="text-[20px] leading-6 font-semibold tracking-[-0.01em]">{item.stayName}</h3>
          <p className="mt-0.5 text-[13px] leading-[18px] text-muted">{dotJoin(item.area, guests)}</p>
        </div>

        {item.rating !== null && (
          <p className="flex items-center gap-1 text-[13px] leading-[18px]">
            <StarIcon className="size-3" />
            <span className="font-semibold">{item.rating.toFixed(2)}</span>
            {item.reviewCount !== null && <span className="text-muted">({item.reviewCount} reviews)</span>}
          </p>
        )}

        <dl className="mt-1 grid grid-cols-2 rounded-lg border border-subtle text-left">
          <div className="px-3 py-2.5">
            <dt className="text-[10px] leading-3 font-bold tracking-[0.04em] uppercase">Check-in</dt>
            <dd className="mt-1 text-[14px] leading-[18px]">{formatDate(item.checkIn)}</dd>
          </div>
          <div className="border-l border-subtle px-3 py-2.5">
            <dt className="text-[10px] leading-3 font-bold tracking-[0.04em] uppercase">Check-out</dt>
            <dd className="mt-1 text-[14px] leading-[18px]">{formatDate(item.checkOut)}</dd>
          </div>
        </dl>

        <div className="mt-1 flex items-center justify-between gap-3">
          <p className="text-[15px] leading-5">
            <span className="font-semibold">{formatYen(item.pricePerNight)}</span>
            <span className="text-muted"> a night</span>
          </p>
          <button
            type="button"
            className="min-h-11 rounded-lg border border-ink px-4 text-[14px] font-semibold transition-colors hover:bg-faint active:scale-[0.98]"
          >
            View stay
          </button>
        </div>
      </div>
    </CardShell>
  );
}
