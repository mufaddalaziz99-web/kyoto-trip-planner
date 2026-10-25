"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpIcon } from "@/components/icons";

export function Composer({ onSend, busy }: { onSend: (text: string) => void; busy: boolean }) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const canSend = value.trim().length > 0 && !busy;

  // Focus on load for keyboard users on laptops; skip on touch so the
  // phone keyboard doesn't cover the welcome screen.
  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) inputRef.current?.focus();
  }, []);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!canSend) return;
    onSend(value.trim());
    setValue("");
  }

  return (
    <div className="pointer-events-none sticky bottom-0 bg-gradient-to-t from-white from-70% to-white/0 pt-6 pb-[max(12px,env(safe-area-inset-bottom))]">
      <form onSubmit={submit} className="pointer-events-auto mx-auto w-full max-w-[760px] px-4 sm:px-6">
        <div className="flex items-center gap-2 rounded-full border border-line bg-white py-2 pr-2 pl-5 shadow-search transition-shadow focus-within:border-ink/40 focus-within:shadow-elev-3">
          <label htmlFor="trip-request" className="sr-only">
            Ask for a Kyoto trip
          </label>
          <input
            ref={inputRef}
            id="trip-request"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask for a Kyoto trip"
            autoComplete="off"
            enterKeyHint="send"
            className="min-w-0 flex-1 bg-transparent py-1.5 text-[16px] leading-6 outline-none placeholder:text-muted focus-visible:outline-none"
          />
          <button
            type="submit"
            disabled={!canSend}
            aria-label="Send"
            className="grid size-11 shrink-0 place-items-center rounded-full text-white transition-[transform,background] duration-200 active:scale-95 disabled:cursor-not-allowed disabled:bg-line [&:not(:disabled)]:[background:var(--rausch-gradient)] [&:not(:disabled)]:hover:[background:var(--rausch-gradient-hover)]"
          >
            <ArrowUpIcon className="size-[18px]" />
          </button>
        </div>
        <p className="mt-2 text-center text-[11px] leading-4 text-muted">
          Prototype. Sample places and prices are illustrative, not real listings.
        </p>
      </form>
    </div>
  );
}
