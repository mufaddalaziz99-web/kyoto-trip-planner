import type { FoodItem } from "@/lib/types";
import { formatMoney } from "@/lib/format";
import { BowlIcon, InfoIcon, WalkIcon } from "@/components/icons";
import { CardShell, TypeTag } from "./CardShell";
import { Filler, orFiller } from "./Filler";
import { Photo } from "./Photo";

// Where you'll eat: a ticket. Meal slot leads with the image box on the right,
// then a tear line, then the stub with the place.
export function FoodCard({ item }: { item: FoodItem }) {
  // Show the full $$$$ scale with the unused part dimmed, so "$" reads as 1 of 4.
  const level = item.priceLevel.length;
  const symbol = item.priceLevel.charAt(0) || "$";
  const remaining = symbol.repeat(Math.max(0, 4 - level));
  const cost = formatMoney(item.costForTwo, item.currency);

  return (
    <CardShell label={`${item.label || "Food"}: ${item.placeName || "not listed yet"}`} clip={false}>
      <div className="flex gap-3 p-4">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <TypeTag tone="food" icon={<BowlIcon className="size-3.5" />}>
            {orFiller(item.label, true)}
          </TypeTag>
          <div>
            <p className="text-[24px] leading-7 font-semibold tracking-[-0.02em] text-food">{orFiller(item.meal, true)}</p>
            <p className="mt-1 text-[13px] leading-[18px]">
              {level > 0 ? (
                <span aria-label={`Price level ${level} of 4`}>
                  <span className="font-semibold">{item.priceLevel}</span>
                  <span className="text-subtle">{remaining}</span>
                </span>
              ) : (
                <Filler short />
              )}
              <span className="text-muted"> · {cost ? `${cost} for 2` : <Filler />}</span>
            </p>
          </div>
        </div>
        <Photo
          src={item.photoUrl}
          alt={item.placeName}
          size="thumb"
          className="aspect-square w-[112px] shrink-0 self-start rounded-lg"
        />
      </div>

      {/* tear line: dashed rule with notches cut into both card edges */}
      <div className="relative h-0" aria-hidden="true">
        <span className="absolute inset-x-4 top-0 border-t border-dashed border-line" />
        <span className="absolute -top-2 -left-px h-4 w-[9px] rounded-r-full border border-l-0 border-card-line bg-white" />
        <span className="absolute -top-2 -right-px h-4 w-[9px] rounded-l-full border border-r-0 border-card-line bg-white" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="truncate text-[17px] leading-6 font-semibold">{orFiller(item.placeName)}</h3>
        <p className="mt-0.5 text-[13px] leading-[18px] text-muted">
          {orFiller(item.cuisine)} · {orFiller(item.neighbourhood)}
        </p>
        <p className="mt-3 flex items-center gap-2 self-start rounded-full bg-food-tint py-1 pr-3 pl-2 text-[13px] leading-[18px] text-ink">
          <WalkIcon className="size-4 text-food" />
          {item.walkMinutes === null ? <Filler /> : `${item.walkMinutes} min walk from your stay`}
        </p>
        <p className="mt-3 flex items-start gap-1.5 text-[13px] leading-[18px] text-muted">
          <InfoIcon className="mt-px size-4 shrink-0" />
          <span>{orFiller(item.bookingNote)}</span>
        </p>

        <div className="mt-auto pt-4">
          <button
            type="button"
            className="min-h-11 w-full rounded-lg border border-ink px-4 text-[14px] font-semibold transition-colors hover:bg-faint active:scale-[0.98]"
          >
            See menu
          </button>
        </div>
      </div>
    </CardShell>
  );
}
