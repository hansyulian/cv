import { describe, test, expect } from "vitest";
import { simpleDurationSortCompareFn } from "~/utils/simpleDurationSortCompareFn";

describe("simpleDurationSortCompareFn", () => {
  test("should prioritize experiences without an end date over ones with an end date", () => {
    const experienceA: SimpleDuration = {
      start: { year: 2022, month: 1 },
    };

    const experienceB: SimpleDuration = {
      start: { year: 2021, month: 5 },
      end: { year: 2023, month: 1 },
    };

    const result = simpleDurationSortCompareFn(experienceA, experienceB);

    expect(result).toBe(-1);
  });

  test("should put experiences with an end date over ones without an end date", () => {
    const experienceA: SimpleDuration = {
      start: { year: 2021, month: 1 },
      end: { year: 2023, month: 5 },
    };

    const experienceB: SimpleDuration = {
      start: { year: 2020, month: 3 },
    };

    const result = simpleDurationSortCompareFn(experienceA, experienceB);

    expect(result).toBe(1);
  });

  test("should sort by end date if both experiences have end dates", () => {
    const experienceA: SimpleDuration = {
      start: { year: 2021, month: 2 },
      end: { year: 2023, month: 4 },
    };

    const experienceB: SimpleDuration = {
      start: { year: 2020, month: 5 },
      end: { year: 2022, month: 10 },
    };

    const result = simpleDurationSortCompareFn(experienceA, experienceB);

    expect(result).toBe(-1);
  });

  test("should sort by start date if end dates are the same", () => {
    const experienceA: SimpleDuration = {
      start: { year: 2021, month: 3 },
      end: { year: 2023, month: 5 },
    };

    const experienceB: SimpleDuration = {
      start: { year: 2020, month: 1 },
      end: { year: 2023, month: 5 },
    };

    const result = simpleDurationSortCompareFn(experienceA, experienceB);

    expect(result).toBe(-1);
  });

  test("should return 0 if both start and end dates are the same", () => {
    const experienceA: SimpleDuration = {
      start: { year: 2020, month: 1 },
      end: { year: 2023, month: 5 },
    };

    const experienceB: SimpleDuration = {
      start: { year: 2020, month: 1 },
      end: { year: 2023, month: 5 },
    };

    const result = simpleDurationSortCompareFn(experienceA, experienceB);

    expect(result).toBe(0);
  });

  test("should handle missing start dates for both experiences", () => {
    const experienceA: SimpleDuration = {
      end: { year: 2023, month: 5 },
    };

    const experienceB: SimpleDuration = {
      end: { year: 2023, month: 5 },
    };

    const result = simpleDurationSortCompareFn(experienceA, experienceB);

    expect(result).toBe(0);
  });

  test("should handle one experience with missing start date and the other with missing end date", () => {
    const experienceA: SimpleDuration = {
      start: { year: 2021, month: 1 },
    };

    const experienceB: SimpleDuration = {
      end: { year: 2023, month: 5 },
    };

    const result = simpleDurationSortCompareFn(experienceA, experienceB);

    expect(result).toBe(-1);
  });

  test("should sort by end date when both experiences have the same start date", () => {
    const experienceA: SimpleDuration = {
      start: { year: 2021, month: 2 },
      end: { year: 2023, month: 4 },
    };

    const experienceB: SimpleDuration = {
      start: { year: 2021, month: 2 },
      end: { year: 2022, month: 10 },
    };

    const result = simpleDurationSortCompareFn(experienceA, experienceB);

    expect(result).toBe(-1);
  });

  test("should sort by start date when both experiences have the same end date", () => {
    const experienceA: SimpleDuration = {
      start: { year: 2022, month: 3 },
      end: { year: 2023, month: 5 },
    };

    const experienceB: SimpleDuration = {
      start: { year: 2020, month: 1 },
      end: { year: 2023, month: 5 },
    };

    const result = simpleDurationSortCompareFn(experienceA, experienceB);

    expect(result).toBe(-1);
  });
});
