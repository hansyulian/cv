import { Grid, Group, Avatar, Stack, Text, Title, Box } from "@mantine/core";
import { Icon } from "~/components/Icon";
import { RT1ProfileInfoRow } from "~/components/ResumeTemplate1/ResumeTemplate1.ProfileInfoRow";
import classes from "./ResumeTemplate1.Profile.module.scss";

export type RT1ProfileProps = {
  profile: ResumeProfile;
  photoUrl: string;
};

export function RT1Profile(props: RT1ProfileProps) {
  const { profile, photoUrl } = props;

  return (
    <Box className={classes.container}>
      <Grid gutter="xl">
        <Grid.Col span={{ sm: 8 }}>
          <Stack h="100%" justify="center">
            <Group>
              <Avatar src={photoUrl} size={100} />
              <Stack gap={0}>
                <Title tt="uppercase">{profile.name}</Title>
                {profile.title && <Text fz="lg">{profile.title}</Text>}
              </Stack>
            </Group>
            {profile.summary && <Text ta="justify">{profile.summary}</Text>}
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ sm: 4 }}>
          <Stack h="100%" justify="center">
            <RT1ProfileInfoRow
              icon={<Icon name="location" />}
              withDivider
              value={profile.address}
            />
            <RT1ProfileInfoRow
              icon={<Icon name="email" />}
              withDivider
              value={profile.email}
            />

            <RT1ProfileInfoRow
              icon={<Icon name="whatsapp" />}
              withDivider
              value={profile.phone}
            />
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
