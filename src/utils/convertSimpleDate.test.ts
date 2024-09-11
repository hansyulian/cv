import { describe, it, expect } from "vitest";
import { convertSimpleDate } from "~/utils/convertSimpleDate";

describe("convertSimpleDate", () => {
  it("should convert SimpleDate with both year and month to Date", () => {
    const simpleDate: SimpleDate = { year: 2023, month: 9 };
    const expectedDate = new Date(2023, 8);

    const result = convertSimpleDate(simpleDate);

    expect(result).toEqual(expectedDate);
  });

  it("should use default month when month is not provided", () => {
    const simpleDate: SimpleDate = { year: 2023 };
    const expectedDate = new Date(2023, 0);

    const result = convertSimpleDate(simpleDate);

    expect(result).toEqual(expectedDate);
  });
});
