import { describe, it, expect } from "vitest";
import { getSimpleDateLabel } from "~/utils/getSimpleDateLabel";

describe("getSimpleDateLabel", () => {
  it("should return the year when month is undefined", () => {
    const simpleDate: SimpleDate = { year: 2024 };
    const result = getSimpleDateLabel(simpleDate);
    expect(result).toBe("2024");
  });

  it("should return the correct month label and year when month is provided", () => {
    const simpleDate: SimpleDate = { year: 2024, month: 5 };
    const result = getSimpleDateLabel(simpleDate);
    expect(result).toBe(`May 2024`);
  });

  it("should return the correct month label and year for December", () => {
    const simpleDate: SimpleDate = { year: 2024, month: 12 };

    const result = getSimpleDateLabel(simpleDate);
    expect(result).toBe(`Dec 2024`);
  });

  it("should handle a single-digit month correctly", () => {
    const simpleDate: SimpleDate = { year: 2024, month: 1 };
    const result = getSimpleDateLabel(simpleDate);
    expect(result).toBe(`Jan 2024`);
  });
});
