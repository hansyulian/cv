import { Stack } from "@mantine/core";
import { useMemo } from "react";
import { RT1Education } from "~/components/ResumeTemplate1/ResumeTemplate1.Education";
import { simpleDurationSortCompareFn } from "~/utils/simpleDurationSortCompareFn";

export type RT1EducationsProps = {
  educations: ResumeEducation[];
};

export function RT1Educations(props: RT1EducationsProps) {
  // hyulian: this is to prevent recalculation every render
  // generally any calculation that has complexity of higher than n log n should be memoized
  const educations = useMemo(() => {
    return [...props.educations].sort(simpleDurationSortCompareFn);
  }, [props.educations]);
  return (
    <Stack gap="lg">
      {educations.map((education) => (
        <RT1Education education={education} />
      ))}
    </Stack>
  );
}
