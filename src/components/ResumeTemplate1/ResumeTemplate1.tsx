import { Stack } from "@mantine/core";
import { RT1Educations } from "~/components/ResumeTemplate1/ResumeTemplate1.Educations";
import { RT1Experiences } from "~/components/ResumeTemplate1/ResumeTemplate1.Experiences";
import { RT1Languages } from "~/components/ResumeTemplate1/ResumeTemplate1.Languages";
import { RT1NotableAccomplishments } from "~/components/ResumeTemplate1/ResumeTemplate1.NotableAccomplishments";
import { RT1OnlineLinks } from "~/components/ResumeTemplate1/ResumeTemplate1.OnlineLinks";
import { RT1Profile } from "~/components/ResumeTemplate1/ResumeTemplate1.Profile";
import { RT1Section } from "~/components/ResumeTemplate1/ResumeTemplate1.Section";
import { RT1Skills } from "~/components/ResumeTemplate1/ResumeTemplate1.Skills";

export type ResumeTemplate1Props = {
  data: Resume;
  photoUrl: string;
};

export function ResumeTemplate1(props: ResumeTemplate1Props) {
  const { data, photoUrl } = props;

  return (
    <Stack gap="xl">
      <RT1Profile profile={data.profile} photoUrl={photoUrl} />

      {data.experiences && data.experiences.length > 0 && (
        <RT1Section title="Work Experiences">
          <RT1Experiences experiences={data.experiences} />
        </RT1Section>
      )}
      {data.educations && data.educations.length > 0 && (
        <RT1Section title="Educations">
          <RT1Educations educations={data.educations} />
        </RT1Section>
      )}
      {data.languages && data.languages.length > 0 && (
        <RT1Section title="Languages">
          <RT1Languages languages={data.languages} />
        </RT1Section>
      )}
      {data.skills && data.skills.length > 0 && (
        <RT1Section title="Skills">
          <RT1Skills skills={data.skills} />
        </RT1Section>
      )}
      {data.onlineLinks && data.onlineLinks.length > 0 && (
        <RT1Section title="Online Links">
          <RT1OnlineLinks onlineLinks={data.onlineLinks} />
        </RT1Section>
      )}
      {data.notableAccomplishments &&
        data.notableAccomplishments.length > 0 && (
          <RT1Section title="Notable Accomplishments">
            <RT1NotableAccomplishments
              notableAccomplishments={data.notableAccomplishments}
            />
          </RT1Section>
        )}
    </Stack>
  );
}
