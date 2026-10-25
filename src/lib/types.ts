// Mock response shape. Each item is one row from the Kyoto Weekend Prototype
// Content Pack (Stays, Experiences, Food sheets) plus its card `type`.
// Empty text is "", empty numbers are null. Prices are whole USD for 2 guests.

export type StayItem = {
  type: "stay";
  label: string;
  optionId: string;
  title: string;
  propertyType: string;
  neighbourhood: string;
  nights: number | null;
  pricePerNight: number | null;
  totalPrice: number | null; // for all nights
  currency: string;
  rating: number | null;
  reviewCount: number | null;
  hostName: string;
  highlight: string;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  photoUrl: string;
};

export type ExperienceItem = {
  type: "experience";
  label: string;
  optionId: string;
  title: string;
  category: string;
  hostName: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:MM, 24-hour
  durationHours: number | null;
  pricePerGuest: number | null;
  totalForTwo: number | null;
  currency: string;
  rating: number | null;
  meetingPoint: string;
  availability: string;
  photoUrl: string;
};

export type FoodItem = {
  type: "food";
  label: string;
  optionId: string;
  placeName: string;
  cuisine: string;
  neighbourhood: string;
  meal: string;
  priceLevel: string; // "$" to "$$$$"
  costForTwo: number | null;
  currency: string;
  walkMinutes: number | null;
  bookingNote: string;
  photoUrl: string;
};

export type PlanItem = StayItem | ExperienceItem | FoodItem;

export type PlanResponse = {
  requestId: string;
  items: [StayItem, ExperienceItem, FoodItem];
};
