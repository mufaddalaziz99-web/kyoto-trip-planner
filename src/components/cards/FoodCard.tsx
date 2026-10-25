import type { FoodItem } from "@/lib/types";
import { dotJoin, formatDate } from "@/lib/format";
import { BowlIcon, WalkIcon } from "@/components/icons";
import { CardShell, TypeTag } from "./CardShell";
import { Photo } from "./Photo";

// Where you'll eat: a ticket. Meal slot leads with the image box on the right,
// then a tear line, then the stub with the restaurant.
export function FoodCard({ item }: { item: FoodItem }) {
  // Show the full ¥¥¥¥ scale with the unused part dimmed, so "¥¥¥" reads as 3 of 4.
  const level = item.priceLevel.length;
  const remaining = level > 0 ? "¥".repeat(Math.max(0, 4 - level)) : "";

  return (
    <CardShell label={`${item.label}: ${item.restaurantName}`} clip={false}>
      <div className="flex gap-3 p-4">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <TypeTag tone="food" icon={<BowlIcon className="size-3.5" />}>
            {item.label}
          </TypeTag>
          <div>
            <p className="text-[20px] leading-6 font-semibold tracking-[-0.01em]">
              {item.meal} <span className="tabular-nums text-food">{item.time}</span>
            </p>
            <p className="mt-0.5 text-[13px] leading-[18px] text-muted">{formatDate(item.date)}</p>
          </div>
        </div>
        <Photo
          src={item.photoUrl}
          alt={item.restaurantName}
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
        <p className="flex items-baseline gap-2 text-[17px] leading-6 font-semibold">
          <span className="truncate">{item.restaurantName}</span>
          {level > 0 && (
            <span className="shrink-0 text-[13px] font-medium" aria-label={`Price level ${level} of 4`}>
              {item.priceLevel}
              <span className="text-subtle">{remaining}</span>
            </span>
          )}
        </p>
        <p className="mt-0.5 text-[13px] leading-[18px] text-muted">{dotJoin(item.cuisine, item.area)}</p>
        {item.walkMinutes !== null && (
          <p className="mt-3 flex items-center gap-2 self-start rounded-full bg-food-tint py-1 pr-3 pl-2 text-[13px] leading-[18px] text-ink">
            <WalkIcon className="size-4 text-food" />
            {item.walkMinutes} min walk from your stay
          </p>
        )}

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
