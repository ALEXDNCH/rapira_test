export function formatDate(dateStr: string, format: "short" | "full" = "short"): string {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString("ru-RU", { month: "short" });
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  if (format === "short") {
    return `${day} ${month}`;
  }

  return `${String(day).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${year} в ${hours}:${minutes}`;
}
