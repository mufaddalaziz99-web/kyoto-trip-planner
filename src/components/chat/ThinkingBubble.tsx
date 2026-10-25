"use client";

import { useEffect, useState } from "react";

const STEPS = ["Planning your weekend", "Finding a place to stay", "Lining up things to do", "Picking a dinner spot"];
const STEP_MS = 650;

// Shows the moment the guest sends and holds until the cards are ready.
// The phrase walks through what's coming, then rests on the last step.
export function ThinkingBubble() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => Math.min(s + 1, STEPS.length - 1)), STEP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div role="status" aria-label="Planning your weekend" className="animate-fade-in inline-flex items-center self-start gap-3 rounded-2xl rounded-tl-md bg-faint px-4 py-3">
      <span className="flex items-center gap-1" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className="thinking-dot size-1.5 rounded-full bg-ink" style={{ animationDelay: `${i * 150}ms` }} />
        ))}
      </span>
      <span key={step} className="animate-fade-in shimmer-text text-[14px] leading-5 font-medium" aria-hidden="true">
        {STEPS[step]}…
      </span>
    </div>
  );
}
