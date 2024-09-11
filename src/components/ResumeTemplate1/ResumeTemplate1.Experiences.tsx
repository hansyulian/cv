import { Stack } from "@mantine/core";
import { useMemo } from "react";
import { RT1Experience } from "~/components/ResumeTemplate1/ResumeTemplate1.Experience";
import { experienceSortCompareFn } from "~/utils/experienceSortCompareFn";

export type RT1ExperiencesProps = {
  experiences: ResumeExperience[];
};

export function RT1Experiences(props: RT1ExperiencesProps) {
  // hyulian: this is to prevent recalculation every render
  // generally any calculation that has complexity of higher than n log n should be memoized
  const experiences = useMemo(() => {
    return [...props.experiences].sort(experienceSortCompareFn);
  }, [props.experiences]);
  return (
    <Stack gap="lg">
      {experiences.map((experience) => (
        <RT1Experience experience={experience} />
      ))}
    </Stack>
  );
}
