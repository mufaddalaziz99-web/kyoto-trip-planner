import { buildMockPlan } from "@/lib/mock-plan";

// Fake planner API. Any message gets the same three-card plan back.
export async function POST(request: Request) {
  await request.json().catch(() => null);
  return Response.json(buildMockPlan());
}
