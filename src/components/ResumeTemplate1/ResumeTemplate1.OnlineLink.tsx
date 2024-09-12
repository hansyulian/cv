import { Anchor, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { Icon } from "~/components/Icon";
import { onlineLinkLabelMap } from "~/config/constants";

export type RT1OnlineLinkProps = {
  data: ResumeOnlineLinks;
};

export function RT1OnlineLink(props: RT1OnlineLinkProps) {
  const { type, url } = props.data;
  return (
    <Paper shadow="sm" p="md" h="100%">
      <Stack justify="center" h="100%">
        <Group>
          <Icon name={type} size={40} />
          <Stack flex={1} gap={0}>
            <Title order={4}>{onlineLinkLabelMap[type]}</Title>

            <Anchor href={url}>
              <Text>{url}</Text>
            </Anchor>
          </Stack>
        </Group>
      </Stack>
    </Paper>
  );
}
