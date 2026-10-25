import type { FoodItem } from "@/lib/types";
import { dotJoin, formatDate } from "@/lib/format";
import { BowlIcon, WalkIcon } from "@/components/icons";
import { CardShell, TypeTag } from "./CardShell";
import { Photo } from "./Photo";

// Where you'll eat: a ticket. Meal slot leads, image box on the right.
export function FoodCard({ item }: { item: FoodItem }) {
  // Show the full ¥¥¥¥ scale with the unused part dimmed, so "¥¥¥" reads as 3 of 4.
  const level = item.priceLevel.length;
  const remaining = level > 0 ? "¥".repeat(Math.max(0, 4 - level)) : "";

  return (
    <CardShell label={`${item.label}: ${item.restaurantName}`} className="relative flex" clip={false}>
      <div className="flex min-w-0 flex-1 flex-col gap-2 p-4">
        <TypeTag tone="food" icon={<BowlIcon className="size-3.5" />}>
          {item.label}
        </TypeTag>

        <div>
          <p className="text-[20px] leading-6 font-semibold tracking-[-0.01em]">
            {item.meal} <span className="tabular-nums text-food">{item.time}</span>
          </p>
          <p className="mt-0.5 text-[13px] leading-[18px] text-muted">{formatDate(item.date)}</p>
        </div>

        <div className="mt-1 border-t border-dashed border-line pt-3">
          <p className="flex items-baseline gap-2 text-[15px] leading-5 font-semibold">
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
            <p className="mt-1.5 flex items-center gap-1 text-[13px] leading-[18px] text-ink">
              <WalkIcon className="size-4 text-food" />
              {item.walkMinutes} min walk from your stay
            </p>
          )}
        </div>

        <button
          type="button"
          className="-ml-1 mt-0.5 min-h-11 self-start rounded-md px-1 text-[14px] font-semibold underline underline-offset-2 transition-colors hover:bg-faint"
        >
          See menu
        </button>
      </div>

      {/* perforation: dashed rule with notches cut into the card edge */}
      <div className="relative w-px shrink-0 border-l border-dashed border-line" aria-hidden="true">
        <span className="absolute -top-px -left-[8.5px] h-[9px] w-4 rounded-b-full border border-t-0 border-card-line bg-white" />
        <span className="absolute -bottom-px -left-[8.5px] h-[9px] w-4 rounded-t-full border border-b-0 border-card-line bg-white" />
      </div>

      <div className="flex w-[120px] shrink-0 items-center p-3">
        <Photo src={item.photoUrl} alt={item.restaurantName} size="thumb" className="aspect-square w-full rounded-lg" />
      </div>
    </CardShell>
  );
}
