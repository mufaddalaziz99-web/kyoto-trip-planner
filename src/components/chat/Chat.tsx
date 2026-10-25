"use client";

import { useEffect, useRef, useState } from "react";
import type { PlanItem, PlanResponse } from "@/lib/types";
import { CardRow } from "@/components/cards/CardRow";
import { PlanCard } from "@/components/cards/PlanCard";
import { SkeletonCard } from "@/components/cards/SkeletonCard";
import { preloadPhotos, type PhotoSize } from "@/components/cards/Photo";
import { SparkIcon } from "@/components/icons";
import { Composer } from "./Composer";
import { Header } from "./Header";
import { ThinkingBubble } from "./ThinkingBubble";
import { Welcome } from "./Welcome";

// Keep thinking on screen long enough to read, even when the mock answers instantly. †
const MIN_THINKING_MS = 1500;
// Cards replace thinking in a fixed order, about this far apart. †
const CARD_STAGGER_MS = 150;
// Longest we'll hold thinking for photos on a slow connection before showing cards anyway.
const MAX_PHOTO_WAIT_MS = 3000;

type Turn = {
  id: string;
  prompt: string;
  items: PlanItem[] | null; // null while thinking
};

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchPlanWithPhotos(message: string): Promise<PlanResponse> {
  const res = await fetch("/api/plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  const plan: PlanResponse = await res.json();
  const [stay, experience, food] = plan.items;
  await Promise.race([
    preloadPhotos([
      [stay.photoUrl, "hero"],
      ...experience.photoUrls.map((url) => [url, "thumb"] as [string, PhotoSize]),
      [food.photoUrl, "thumb"],
    ]),
    wait(MAX_PHOTO_WAIT_MS),
  ]);
  return plan;
}

// Thinking stays up until the plan and its photos are ready, so cards land complete.
async function requestPlan(message: string): Promise<PlanResponse> {
  const [plan] = await Promise.all([fetchPlanWithPhotos(message), wait(MIN_THINKING_MS)]);
  return plan;
}

export function Chat() {
  const [turns, setTurns] = useState<Turn[]>([]);
  const endRef = useRef<HTMLDivElement>(null);
  const turnRefs = useRef(new Map<string, HTMLDivElement>());
  const lastSettled = useRef<string | null>(null);
  const busy = turns.some((t) => t.items === null);

  async function send(prompt: string) {
    // Not crypto.randomUUID: it's missing on plain-http LAN links used for phone testing.
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    // Thinking renders in the same commit as the guest's message: no blank gap.
    setTurns((prev) => [...prev, { id, prompt, items: null }]);
    const plan = await requestPlan(prompt);
    setTurns((prev) => prev.map((t) => (t.id === id ? { ...t, items: plan.items } : t)));
  }

  // While thinking, keep the newest message in view. When cards land, bring the
  // guest's message to the top so the Stay card is seen first, not the last card.
  useEffect(() => {
    const latest = turns.at(-1);
    if (!latest) return;
    if (latest.items === null) {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    } else if (lastSettled.current !== latest.id) {
      lastSettled.current = latest.id;
      turnRefs.current.get(latest.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [turns]);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header onNewChat={() => setTurns([])} canReset={turns.length > 0 && !busy} />

      <main className="flex-1">
        <div
          role="log"
          aria-live="polite"
          aria-label="Conversation"
          className="mx-auto w-full max-w-[1120px] px-4 pt-6 pb-4 sm:px-6"
        >
          {turns.length === 0 ? (
            <Welcome onPick={send} />
          ) : (
            <div className="flex flex-col gap-8">
              {turns.map((turn) => (
                <div
                  key={turn.id}
                  ref={(el) => {
                    if (el) turnRefs.current.set(turn.id, el);
                    else turnRefs.current.delete(turn.id);
                  }}
                  className="flex scroll-mt-24 flex-col gap-5"
                >
                  <UserBubble text={turn.prompt} />
                  <AssistantAnswer items={turn.items} />
                </div>
              ))}
            </div>
          )}
          <div ref={endRef} className="scroll-mb-32" />
        </div>
      </main>

      <Composer onSend={send} busy={busy} />
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="animate-rise-in flex justify-end">
      <p className="max-w-[85%] rounded-[22px] rounded-br-md bg-ink px-4 py-2.5 text-[15px] leading-[22px] text-white sm:max-w-[480px]">
        {text}
      </p>
    </div>
  );
}

function AssistantAnswer({ items }: { items: PlanItem[] | null }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="grid size-7 place-items-center rounded-full text-white [background:var(--rausch-gradient)]" aria-hidden="true">
          <SparkIcon className="size-3.5" />
        </span>
        <span className="text-[14px] font-semibold">Trip planner</span>
      </div>

      <div className="sm:pl-9">
        {items === null ? (
          // Skeletons hold the row's shape, so the cards drop into place without a jump.
          <div className="flex flex-col gap-4">
            <ThinkingBubble />
            <CardRow>
              <SkeletonCard variant="stay" />
              <SkeletonCard variant="experience" className="hidden sm:flex" />
              <SkeletonCard variant="food" className="hidden sm:flex" />
            </CardRow>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="animate-fade-in">
              <h2 className="text-[22px] leading-7 font-semibold tracking-[-0.02em]">Here’s your weekend</h2>
              <p className="mt-1 text-[15px] leading-[22px] text-muted">
                Where you’ll sleep, what you’ll do each day and where you’ll eat.
              </p>
            </div>
            <CardRow staggerMs={CARD_STAGGER_MS}>
              {items.map((item) => (
                <PlanCard key={item.type} item={item} />
              ))}
            </CardRow>
          </div>
        )}
      </div>
    </div>
  );
}
