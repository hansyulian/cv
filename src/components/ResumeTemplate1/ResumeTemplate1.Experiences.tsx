import { Stack } from "@mantine/core";
import { useMemo } from "react";
import { RT1Experience } from "~/components/ResumeTemplate1/ResumeTemplate1.Experience";
import { simpleDurationSortCompareFn } from "~/utils/simpleDurationSortCompareFn";

export type RT1ExperiencesProps = {
  data: ResumeExperience[];
};

export function RT1Experiences(props: RT1ExperiencesProps) {
  // hyulian: this is to prevent recalculation every render
  // generally any calculation that has complexity of higher than n log n should be memoized
  const experiences = useMemo(() => {
    return [...props.data].sort(simpleDurationSortCompareFn);
  }, [props.data]);
  return (
    <Stack gap="lg">
      {experiences.map((experience) => (
        <RT1Experience data={experience} />
      ))}
    </Stack>
  );
}
