import { getMonthLabel } from "~/utils/getMonthLabel";
import { describe, it, expect } from "vitest";

describe("getMonthLabel", () => {
  it("should return the correct month abbreviation for valid month numbers", () => {
    expect(getMonthLabel(1)).toBe("Jan");
    expect(getMonthLabel(2)).toBe("Feb");
    expect(getMonthLabel(3)).toBe("Mar");
    expect(getMonthLabel(4)).toBe("Apr");
    expect(getMonthLabel(5)).toBe("May");
    expect(getMonthLabel(6)).toBe("Jun");
    expect(getMonthLabel(7)).toBe("Jul");
    expect(getMonthLabel(8)).toBe("Aug");
    expect(getMonthLabel(9)).toBe("Sep");
    expect(getMonthLabel(10)).toBe("Oct");
    expect(getMonthLabel(11)).toBe("Nov");
    expect(getMonthLabel(12)).toBe("Dec");
  });
});
