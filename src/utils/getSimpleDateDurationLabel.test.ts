import { describe, it, expect } from "vitest";
import { getSimpleDateDurationLabel } from "~/utils/getSimpleDateDurationLabel";

describe("getSimpleDateDurationLabel", () => {
  it("should return duration label with both start and end dates", () => {
    const start: SimpleDate = { year: 2020, month: 1 };
    const end: SimpleDate = { year: 2023, month: 5 };

    const result = getSimpleDateDurationLabel(start, end);

    expect(result).toBe("Jan 2020 - May 2023");
  });

  it('should return duration label with "Present" as end date when end date is missing', () => {
    const start: SimpleDate = { year: 2020, month: 1 };

    const result = getSimpleDateDurationLabel(start);

    expect(result).toBe("Jan 2020 - Present");
  });

  it("should handle the case where both start and end have the same date", () => {
    const start: SimpleDate = { year: 2023, month: 5 };
    const end: SimpleDate = { year: 2023, month: 5 };

    const result = getSimpleDateDurationLabel(start, end);

    expect(result).toBe("May 2023");
  });
});
