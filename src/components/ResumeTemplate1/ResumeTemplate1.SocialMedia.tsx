import { Anchor, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { Icon } from "~/components/Icon";
import { socialMediaLabelMap } from "~/config/constants";

export type RT1SocialMediaProps = {
  socialMedia: ResumeSocialMedia;
};

export function RT1SocialMedia(props: RT1SocialMediaProps) {
  const { socialMedia } = props;
  return (
    <Paper shadow="sm" p="md" h="100%">
      <Stack justify="center" h="100%">
        <Group>
          <Icon name={socialMedia.type} size={40} />
          <Stack flex={1} gap={0}>
            <Title order={4}>{socialMediaLabelMap[socialMedia.type]}</Title>

            <Anchor href={socialMedia.url}>
              <Text>{socialMedia.url}</Text>
            </Anchor>
          </Stack>
        </Group>
      </Stack>
    </Paper>
  );
}
