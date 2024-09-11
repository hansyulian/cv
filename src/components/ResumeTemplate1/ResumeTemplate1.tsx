import { Group, Avatar, Title, Stack, Grid, Text } from "@mantine/core";
import { Icon } from "~/components/Icon";
import { ResumeTemplate1ProfileInfo } from "~/components/ResumeTemplate1/ResumeTemplate1.ProfileInfo";

export type ResumeTemplate1Props = {
  data: Resume;
  photoUrl: string;
};

export function ResumeTemplate1(props: ResumeTemplate1Props) {
  const { data, photoUrl } = props;
  const { profile } = data;

  return (
    <Grid>
      <Grid.Col span={{ sm: 8 }}>
        <Group>
          <Avatar src={photoUrl} size={100} />
          <Stack gap={0}>
            <Title tt="uppercase">{profile.name}</Title>
            {profile.title && <Text fz="lg">{profile.title}</Text>}
          </Stack>
        </Group>
      </Grid.Col>
      <Grid.Col span={{ sm: 4 }}>
        <Stack>
          <ResumeTemplate1ProfileInfo
            icon={<Icon name="location" />}
            withDivider
            value={profile.address}
          />
          <ResumeTemplate1ProfileInfo
            icon={<Icon name="email" />}
            withDivider
            value={profile.email}
          />

          <ResumeTemplate1ProfileInfo
            icon={<Icon name="phone" />}
            withDivider
            value={profile.phone}
          />
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
