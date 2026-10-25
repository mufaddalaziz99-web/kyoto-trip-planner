const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Parse YYYY-MM-DD as a calendar date, ignoring the viewer's time zone.
function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const weekday = WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return { y, month: MONTHS[m - 1], d, weekday };
}

/** "2025-04-11" -> "Fri 11 Apr 2025" */
export function formatDate(iso: string) {
  if (!iso) return "";
  const { y, month, d, weekday } = parts(iso);
  return `${weekday} ${d} ${month} ${y}`;
}

/** "2025-04-11" -> { day: "11", month: "Apr" } */
export function dayAndMonth(iso: string) {
  if (!iso) return { day: "", month: "" };
  const { d, month } = parts(iso);
  return { day: String(d), month };
}

/** 38000 -> "¥38,000" */
export function formatYen(value: number | null) {
  if (value === null) return "";
  return `¥${value.toLocaleString("en-US")}`;
}

/** 90 -> "1.5 hrs", 60 -> "1 hr", 45 -> "45 min" */
export function formatDuration(mins: number | null) {
  if (mins === null) return "";
  if (mins < 60) return `${mins} min`;
  const hours = mins / 60;
  const label = Number.isInteger(hours) ? String(hours) : hours.toFixed(1);
  return `${label} ${hours === 1 ? "hr" : "hrs"}`;
}

/** Joins the non-empty parts with a middle dot, Airbnb style. */
export function dotJoin(...items: (string | null | undefined | false)[]) {
  return items.filter(Boolean).join(" · ");
}
