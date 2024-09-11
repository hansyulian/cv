import { describe, it, expect } from "vitest";
import { getSimpleDateDurationLabel } from "~/utils/getSimpleDateDurationLabel";
import { getSimpleDateLabel } from "~/utils/getSimpleDateLabel";

describe("getSimpleDateDurationLabel", () => {
  it("should return an empty string when both start and end are undefined", () => {
    const result = getSimpleDateDurationLabel();
    expect(result).toBe("");
  });

  it("should return the start label when start and end are the same", () => {
    const start: SimpleDate = { year: 2023, month: 5 };
    const end: SimpleDate = { year: 2023, month: 5 };

    const startLabel = getSimpleDateLabel(start);
    const result = getSimpleDateDurationLabel(start, end);

    expect(result).toBe(startLabel);
  });

  it("should return start label and end label when start and end are different", () => {
    const start: SimpleDate = { year: 2022, month: 1 };
    const end: SimpleDate = { year: 2023, month: 5 };

    const startLabel = getSimpleDateLabel(start);
    const endLabel = getSimpleDateLabel(end);
    const result = getSimpleDateDurationLabel(start, end);

    expect(result).toBe(`${startLabel} - ${endLabel}`);
  });

  it("should return start label and 'Present' when only start is provided", () => {
    const start: SimpleDate = { year: 2022, month: 1 };

    const startLabel = getSimpleDateLabel(start);
    const result = getSimpleDateDurationLabel(start);

    expect(result).toBe(`${startLabel} - Present`);
  });

  it("should return end label when only end is provided", () => {
    const end: SimpleDate = { year: 2023, month: 5 };

    const endLabel = getSimpleDateLabel(end);
    const result = getSimpleDateDurationLabel(undefined, end);

    expect(result).toBe(endLabel);
  });
});
