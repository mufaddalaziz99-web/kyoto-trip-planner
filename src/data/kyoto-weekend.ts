// Three mock items, one row copied from each sheet of the
// "Kyoto Weekend Prototype Content Pack" workbook (compiled 2025-03-07).
//   Stays S1 + Experiences E1 + Food F1 = $366 + $116 + $34 = $516 for 2 guests,
//   inside the workbook's $600 reference budget.
// The workbook has no photo URLs (image rights not cleared), so photoUrl is "".

import type { ExperienceItem, FoodItem, StayItem } from "@/lib/types";

// Stays sheet, row S1
export const stayRow: StayItem = {
  type: "stay",
  label: "Stay",
  optionId: "S1",
  title: "Restored machiya townhouse near Gion",
  propertyType: "Entire townhouse",
  neighbourhood: "Gion",
  nights: 2,
  pricePerNight: 168,
  totalPrice: 366,
  currency: "USD",
  rating: 4.92,
  reviewCount: 214,
  hostName: "Kenji",
  highlight: "Private garden and cedar soaking tub",
  checkIn: "2025-04-11",
  checkOut: "2025-04-13",
  photoUrl: "",
};

// Experiences sheet, row E1
export const experienceRow: ExperienceItem = {
  type: "experience",
  label: "Experience",
  optionId: "E1",
  title: "Tea ceremony in a 100-year-old machiya",
  category: "Culture",
  hostName: "Mei",
  date: "2025-04-12",
  startTime: "10:30",
  durationHours: 2,
  pricePerGuest: 58,
  totalForTwo: 116,
  currency: "USD",
  rating: 4.96,
  meetingPoint: "Outside Gion-Shijo Station, exit 6",
  availability: "Spots open",
  photoUrl: "",
};

// Food sheet, row F1
export const foodRow: FoodItem = {
  type: "food",
  label: "Food",
  optionId: "F1",
  placeName: "Menya Inoichi",
  cuisine: "Ramen",
  neighbourhood: "Gion",
  meal: "Dinner",
  priceLevel: "$",
  costForTwo: 34,
  currency: "USD",
  walkMinutes: 8,
  bookingNote: "No reservations - arrive before 18:00",
  photoUrl: "",
};

export const mockPlanItems = [stayRow, experienceRow, foodRow] as const;
