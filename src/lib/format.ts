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

const CURRENCY_SYMBOLS: Record<string, string> = { USD: "$", JPY: "¥" };

/** (168, "USD") -> "$168", (38000, "JPY") -> "¥38,000" */
export function formatMoney(value: number | null, currency: string) {
  if (value === null) return "";
  const symbol = CURRENCY_SYMBOLS[currency] ?? `${currency} `;
  return `${symbol}${value.toLocaleString("en-US")}`;
}

/** 2.5 -> "2.5 hrs", 1 -> "1 hr", 0.75 -> "45 min" */
export function formatHours(hours: number | null) {
  if (hours === null) return "";
  if (hours < 1) return `${Math.round(hours * 60)} min`;
  return `${hours} ${hours === 1 ? "hr" : "hrs"}`;
}
