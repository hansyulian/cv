import { Anchor, List, Paper, Stack, Text, Title } from "@mantine/core";

export type RT1PortfolioProps = {
  data: ResumePortfolio;
};

export function RT1Portfolio(props: RT1PortfolioProps) {
  const { title, urls, description } = props.data;
  return (
    <Paper shadow="sm" p="md" h="100%">
      <Stack flex={1} gap={0}>
        <Title order={4}>{title}</Title>
        <Text c="gray">{description}</Text>
      </Stack>
      <List>
        {urls.map((url) => (
          <List.Item>
            <Anchor href={url}>
              <Text>{url}</Text>
            </Anchor>
          </List.Item>
        ))}
      </List>
    </Paper>
  );
}
