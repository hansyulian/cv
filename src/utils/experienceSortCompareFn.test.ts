import { describe, test, expect } from "vitest";
import { experienceSortCompareFn } from "~/utils/experienceSortCompareFn";

const baseDetails = {
  title: "title",
  company: "company",
  location: "location",
};

describe("experienceSortCompareFn", () => {
  test("should prioritize experiences without an end date over ones with an end date", () => {
    const experienceA: ResumeExperience = {
      ...baseDetails,
      start: { year: 2022, month: 1 },
    };

    const experienceB: ResumeExperience = {
      ...baseDetails,
      start: { year: 2021, month: 5 },
      end: { year: 2023, month: 1 },
    };

    const result = experienceSortCompareFn(experienceA, experienceB);

    expect(result).toBe(-1);
  });

  test("should put experiences with an end date over ones without an end date", () => {
    const experienceA: ResumeExperience = {
      ...baseDetails,
      start: { year: 2021, month: 1 },
      end: { year: 2023, month: 5 },
    };

    const experienceB: ResumeExperience = {
      ...baseDetails,
      start: { year: 2020, month: 3 },
    };

    const result = experienceSortCompareFn(experienceA, experienceB);

    expect(result).toBe(1);
  });

  test("should sort by end date if both experiences have end dates", () => {
    const experienceA: ResumeExperience = {
      ...baseDetails,
      start: { year: 2021, month: 2 },
      end: { year: 2023, month: 4 },
    };

    const experienceB: ResumeExperience = {
      ...baseDetails,
      start: { year: 2020, month: 5 },
      end: { year: 2022, month: 10 },
    };

    const result = experienceSortCompareFn(experienceA, experienceB);

    expect(result).toBe(-1);
  });

  test("should sort by start date if end dates are the same", () => {
    const experienceA: ResumeExperience = {
      ...baseDetails,
      start: { year: 2021, month: 3 },
      end: { year: 2023, month: 5 },
    };

    const experienceB: ResumeExperience = {
      ...baseDetails,
      start: { year: 2020, month: 1 },
      end: { year: 2023, month: 5 },
    };

    const result = experienceSortCompareFn(experienceA, experienceB);

    expect(result).toBe(-1);
  });

  test("should return 0 if both start and end dates are the same", () => {
    const experienceA: ResumeExperience = {
      ...baseDetails,
      start: { year: 2020, month: 1 },
      end: { year: 2023, month: 5 },
    };

    const experienceB: ResumeExperience = {
      ...baseDetails,
      start: { year: 2020, month: 1 },
      end: { year: 2023, month: 5 },
    };

    const result = experienceSortCompareFn(experienceA, experienceB);

    expect(result).toBe(0);
  });
});
