import { describe, it, expect } from "vitest";
import { formatDate } from "../formatDate/index.ts";

describe("formatDate", () => {
  const dateStr = "2024-04-09T11:54:00";

  it("should format short date correctly", () => {
    const result = formatDate(dateStr, "short");
    expect(result).toMatch(/9\s+апр/i);
  });

  it("should format full date correctly", () => {
    const result = formatDate(dateStr, "full");
    expect(result).toMatch(/09\.04\.2024\s+в\s+11:54/);
  });
});
