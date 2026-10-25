import { experienceRow, foodRow, stayRow } from "@/data/kyoto-weekend";
import type { PlanResponse } from "./types";

// Exactly three items, always in the order stay, experience, food.
export function buildMockPlan(): PlanResponse {
  return {
    requestId: crypto.randomUUID(),
    items: [stayRow, experienceRow, foodRow],
  };
}
