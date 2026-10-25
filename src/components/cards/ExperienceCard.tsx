import type { ExperienceItem } from "@/lib/types";
import { dayAndMonth, dotJoin, formatDuration, formatYen } from "@/lib/format";
import { LanternIcon } from "@/components/icons";
import { CardShell, TypeTag } from "./CardShell";
import { Photo } from "./Photo";

// Your weekend, day by day: stacked day blocks, image strip at the bottom.
export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <CardShell label={`${item.label}: ${item.title}`}>
      <div className="flex flex-1 flex-col gap-2 p-4 pb-3">
        <TypeTag tone="experience" icon={<LanternIcon className="size-3.5" />}>
          {item.label}
        </TypeTag>
        <h3 className="text-[18px] leading-6 font-semibold tracking-[-0.01em]">{item.title}</h3>

        <ol className="mt-1">
          {item.days.map((d, i) => {
            const { day, month } = dayAndMonth(d.date);
            const last = i === item.days.length - 1;
            const price = d.pricePerPerson === null ? "" : `${formatYen(d.pricePerPerson)} per person`;
            return (
              <li key={d.date} className="grid grid-cols-[44px_20px_1fr] gap-x-2">
                <div className="pt-1 text-center">
                  <p className="text-[11px] leading-3 font-semibold tracking-[0.04em] text-muted uppercase">{d.day}</p>
                  <p className="mt-0.5 text-[17px] leading-5 font-semibold">{day}</p>
                  <p className="text-[11px] leading-3 text-muted">{month}</p>
                </div>

                {/* timeline rail */}
                <div className="relative flex justify-center" aria-hidden="true">
                  <span className="relative z-10 mt-[9px] size-2.5 rounded-full border-2 border-white bg-experience ring-2 ring-experience-tint" />
                  {!last && <span className="absolute top-5 bottom-0 w-px bg-experience/25" />}
                </div>

                <div className={last ? "pb-1" : "pb-4"}>
                  <p className="text-[22px] leading-7 font-semibold tracking-[-0.02em] tabular-nums">{d.startTime}</p>
                  <p className="text-[15px] leading-5 font-medium">{d.name}</p>
                  <p className="mt-0.5 text-[13px] leading-[18px] text-muted">
                    {dotJoin(formatDuration(d.durationMins), price)}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="grid grid-cols-3 gap-0.5">
        {item.photoUrls.slice(0, 3).map((url, i) => (
          <Photo key={i} src={url} alt={item.days[i]?.name ?? ""} size="thumb" className="aspect-[4/3]" />
        ))}
      </div>
    </CardShell>
  );
}
