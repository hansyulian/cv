import { Grid } from "@mantine/core";
import { RT1SocialMedia } from "~/components/ResumeTemplate1/ResumeTemplate1.SocialMedia";

export type RT1SocialMediasProps = {
  socialMedias: ResumeSocialMedia[];
};

const spanConfig = {
  sm: 4,
};

export function RT1SocialMedias(props: RT1SocialMediasProps) {
  const { socialMedias } = props;

  return (
    <Grid>
      {socialMedias.map((record) => (
        <Grid.Col span={spanConfig}>
          <RT1SocialMedia socialMedia={record} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
