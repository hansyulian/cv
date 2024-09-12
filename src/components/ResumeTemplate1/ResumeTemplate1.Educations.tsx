import { Stack } from "@mantine/core";
import { useMemo } from "react";
import { RT1Education } from "~/components/ResumeTemplate1/ResumeTemplate1.Education";
import { simpleDurationSortCompareFn } from "~/utils/simpleDurationSortCompareFn";

export type RT1EducationsProps = {
  data: ResumeEducation[];
};

export function RT1Educations(props: RT1EducationsProps) {
  // hyulian: this is to prevent recalculation every render
  // generally any calculation that has complexity of higher than n log n should be memoized
  const educations = useMemo(() => {
    return [...props.data].sort(simpleDurationSortCompareFn);
  }, [props.data]);
  return (
    <Stack gap="lg">
      {educations.map((education) => (
        <RT1Education data={education} />
      ))}
    </Stack>
  );
}
