// Kyoto Weekend Content: one row per sheet (Stays, Experiences, Food).
// Each row becomes one item in the fake API response. Swap these rows for the
// workbook values when they land; the cards only read the keys typed below.
// Sample places and prices are illustrative, not real listings.
// Photos: Unsplash (free licence).

import type { ExperienceItem, FoodItem, StayItem } from "@/lib/types";

export const stayRow: StayItem = {
  type: "stay",
  label: "Stay",
  stayName: "Gion machiya house",
  area: "Higashiyama",
  checkIn: "2025-04-11",
  checkOut: "2025-04-13",
  nights: 2,
  guests: 2,
  pricePerNight: 38000,
  currency: "JPY",
  rating: 4.92,
  reviewCount: 118,
  photoUrl: "https://images.unsplash.com/photo-1712232907812-4bd219a99a49",
};

export const experienceRow: ExperienceItem = {
  type: "experience",
  label: "Experience",
  title: "Your Kyoto weekend",
  days: [
    {
      date: "2025-04-11",
      day: "Fri",
      startTime: "18:30",
      name: "Gion lantern walk",
      durationMins: 90,
      pricePerPerson: 3000,
    },
    {
      date: "2025-04-12",
      day: "Sat",
      startTime: "10:00",
      name: "Tea ceremony",
      durationMins: 120,
      pricePerPerson: 6500,
    },
    {
      date: "2025-04-13",
      day: "Sun",
      startTime: "09:00",
      name: "Bamboo grove walk",
      durationMins: 120,
      pricePerPerson: 4000,
    },
  ],
  currency: "JPY",
  photoUrls: [
    "https://images.unsplash.com/photo-1647235360559-b04cbee0c901",
    "https://images.unsplash.com/photo-1759933164283-ab161f34bd02",
    "https://images.unsplash.com/photo-1698618988744-737573cb6a7a",
  ],
};

export const foodRow: FoodItem = {
  type: "food",
  label: "Food",
  meal: "Dinner",
  date: "2025-04-12",
  time: "19:30",
  restaurantName: "Hana Kaiseki",
  cuisine: "Kaiseki",
  area: "Pontocho",
  priceLevel: "¥¥¥",
  walkMinutes: 8,
  photoUrl: "https://images.unsplash.com/photo-1766582931800-fd79665257fa",
};
