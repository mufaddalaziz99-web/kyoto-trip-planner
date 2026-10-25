import type { PlanItem } from "@/lib/types";
import { ExperienceCard } from "./ExperienceCard";
import { FoodCard } from "./FoodCard";
import { StayCard } from "./StayCard";

// `type` picks the component: one component per card type.
export function PlanCard({ item }: { item: PlanItem }) {
  switch (item.type) {
    case "stay":
      return <StayCard item={item} />;
    case "experience":
      return <ExperienceCard item={item} />;
    case "food":
      return <FoodCard item={item} />;
  }
}
