import { Anchor, List, Paper, Stack, Text } from "@mantine/core";

export type RT1PortfolioProps = {
  data: ResumePortfolio;
};

export function RT1Portfolio(props: RT1PortfolioProps) {
  const { title, urls, description } = props.data;
  return (
    <Paper shadow="sm" p="md" h="100%">
      <Stack flex={1} gap={0}>
        <Text fz="h4" fw="bold">
          {title}
        </Text>
        <Text c="gray">{description}</Text>
      </Stack>
      <List>
        {urls.map((url) => (
          <List.Item key={url}>
            <Anchor target="_blank" href={url}>
              {url}
            </Anchor>
          </List.Item>
        ))}
      </List>
    </Paper>
  );
}
