import { mockPlanItems } from "@/data/kyoto-weekend";
import type { PlanResponse } from "./types";

// Exactly three items, always in the order stay, experience, food.
export function buildMockPlan(): PlanResponse {
  const [stay, experience, food] = mockPlanItems;
  return {
    requestId: crypto.randomUUID(),
    items: [stay, experience, food],
  };
}
