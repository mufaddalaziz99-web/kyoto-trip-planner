// Mock response shape from the Kyoto chat card spec (v0.3).
// Cards read these keys and nothing else. Empty text is "", empty numbers are null.

export type StayItem = {
  type: "stay";
  label: string;
  stayName: string;
  area: string;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  nights: number;
  guests: number | null;
  pricePerNight: number | null; // whole yen
  currency: "JPY";
  rating: number | null;
  reviewCount: number | null;
  photoUrl: string;
};

export type ExperienceDay = {
  date: string; // YYYY-MM-DD
  day: string; // "Fri"
  startTime: string; // HH:MM, 24-hour
  name: string;
  durationMins: number | null;
  pricePerPerson: number | null; // whole yen
};

export type ExperienceItem = {
  type: "experience";
  label: string;
  title: string;
  days: ExperienceDay[];
  currency: "JPY";
  photoUrls: string[];
};

export type FoodItem = {
  type: "food";
  label: string;
  meal: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM, 24-hour
  restaurantName: string;
  cuisine: string;
  area: string;
  priceLevel: string; // "¥" to "¥¥¥¥"
  walkMinutes: number | null;
  photoUrl: string;
};

export type PlanItem = StayItem | ExperienceItem | FoodItem;

export type PlanResponse = {
  requestId: string;
  items: [StayItem, ExperienceItem, FoodItem];
};
