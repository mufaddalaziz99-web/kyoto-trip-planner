// Placeholder shown while thinking. Each variant sketches its card's layout,
// so the guest already sees where the photo, timeline and ticket will sit.
type Variant = "stay" | "experience" | "food";

function Bar({ className }: { className: string }) {
  return <span className={`skeleton block rounded-md ${className}`} />;
}

export function SkeletonCard({ variant, className = "" }: { variant: Variant; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex w-full max-w-[360px] flex-col overflow-hidden rounded-xl border border-line-soft bg-white ${className}`}
    >
      {variant === "stay" && (
        <>
          <span className="skeleton block aspect-video" />
          <div className="flex flex-col gap-3 p-4">
            <Bar className="h-5 w-16 rounded-full" />
            <Bar className="h-5 w-3/4" />
            <Bar className="h-3.5 w-1/2" />
            <Bar className="mt-2 h-14 w-full rounded-lg" />
            <div className="mt-2 flex items-center justify-between">
              <Bar className="h-4 w-24" />
              <Bar className="h-11 w-24 rounded-lg" />
            </div>
          </div>
        </>
      )}

      {variant === "experience" && (
        <>
          <div className="flex flex-1 flex-col gap-3 p-4">
            <div className="flex justify-between">
              <Bar className="h-5 w-24 rounded-full" />
              <Bar className="h-5 w-20 rounded-full" />
            </div>
            <Bar className="mt-1 h-7 w-24" />
            <Bar className="h-4 w-4/5" />
            <Bar className="h-3.5 w-3/5" />
            <Bar className="h-3.5 w-2/3" />
            <Bar className="mt-2 h-4 w-1/2" />
          </div>
          <span className="skeleton block aspect-[3/1]" />
        </>
      )}

      {variant === "food" && (
        <div className="flex flex-col gap-3 p-4">
          <div className="flex gap-3">
            <div className="flex flex-1 flex-col gap-3">
              <Bar className="h-5 w-14 rounded-full" />
              <Bar className="h-5 w-3/4" />
              <Bar className="h-3.5 w-1/2" />
            </div>
            <Bar className="size-[112px] rounded-lg" />
          </div>
          <span className="my-1 border-t border-dashed border-line" />
          <Bar className="h-4 w-2/3" />
          <Bar className="h-3.5 w-1/2" />
          <Bar className="h-3.5 w-3/5" />
        </div>
      )}
    </div>
  );
}
