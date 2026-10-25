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
            <Bar className="h-5 w-24 rounded-full" />
            <Bar className="h-5 w-2/3" />
            {[0, 1, 2].map((i) => (
              <div key={i} className="mt-2 flex gap-4">
                <Bar className="h-11 w-9" />
                <div className="flex flex-1 flex-col gap-2">
                  <Bar className="h-5 w-16" />
                  <Bar className="h-3.5 w-3/4" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-0.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="skeleton block aspect-[4/3]" />
            ))}
          </div>
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
