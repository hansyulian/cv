import { Stack } from "@mantine/core";
import { RT1Educations } from "~/components/ResumeTemplate1/ResumeTemplate1.Educations";
import { RT1Experiences } from "~/components/ResumeTemplate1/ResumeTemplate1.Experiences";
import { RT1Profile } from "~/components/ResumeTemplate1/ResumeTemplate1.Profile";
import { RT1Section } from "~/components/ResumeTemplate1/ResumeTemplate1.Section";

export type ResumeTemplate1Props = {
  data: Resume;
  photoUrl: string;
};

export function ResumeTemplate1(props: ResumeTemplate1Props) {
  const { data, photoUrl } = props;

  return (
    <Stack gap="xl">
      <RT1Profile profile={data.profile} photoUrl={photoUrl} />

      {data.experiences && (
        <RT1Section title="Work Experiences">
          <RT1Experiences experiences={data.experiences} />
        </RT1Section>
      )}
      {data.educations && (
        <RT1Section title="Educations">
          <RT1Educations educations={data.educations} />
        </RT1Section>
      )}
    </Stack>
  );
}
