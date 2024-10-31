import { Anchor, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { Icon } from "~/components/Icon";
import { onlineLinkLabelMap } from "~/config/constants";

export type RT1OnlineLinkProps = {
  data: ResumeOnlineLinks;
};

export function RT1OnlineLink(props: RT1OnlineLinkProps) {
  const { type, url, title } = props.data;
  return (
    <Paper shadow="sm" p="md" h="100%">
      <Stack justify="center" h="100%">
        <Group>
          <ThemeIcon>
            <Icon name={type} size={40} />
          </ThemeIcon>
          <Stack flex={1} gap={0}>
            <Text fz="h4" fw="bold">
              {title || onlineLinkLabelMap[type]}
            </Text>

            <Anchor target="_blank" href={url}>
              <Text>{url}</Text>
            </Anchor>
          </Stack>
        </Group>
      </Stack>
    </Paper>
  );
}
