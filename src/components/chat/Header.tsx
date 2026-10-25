import { PlusIcon, SparkIcon } from "@/components/icons";

export function Header({ onNewChat, canReset }: { onNewChat: () => void; canReset: boolean }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line-soft bg-white">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-[10px] text-white [background:var(--rausch-gradient)]">
            <SparkIcon className="size-[18px]" />
          </span>
          <span className="text-[17px] font-bold tracking-[-0.02em] text-rausch-deep">kyoto weekend</span>
        </div>

        {/* Trip context, not a filter: dates are fixed for this test. */}
        <p className="hidden items-center gap-2 text-[14px] text-muted md:flex">
          <span className="font-semibold text-ink">Kyoto</span>
          <span className="h-4 w-px bg-line" />
          <span>Fri 11 – Sun 13 Apr</span>
          <span className="h-4 w-px bg-line" />
          <span>2 nights</span>
        </p>

        <button
          type="button"
          onClick={onNewChat}
          disabled={!canReset}
          className="flex h-10 items-center gap-1.5 rounded-full px-3 text-[14px] font-semibold transition-colors hover:bg-faint disabled:invisible"
        >
          <PlusIcon className="size-4" />
          New chat
        </button>
      </div>
    </header>
  );
}
