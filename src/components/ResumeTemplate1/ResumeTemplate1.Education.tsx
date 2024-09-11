import { Anchor, Grid, Group, List, Stack, Text, Title } from "@mantine/core";
import { Icon } from "~/components/Icon";
import { getSimpleDateDurationLabel } from "~/utils/getSimpleDateDurationLabel";

export type RT1EducationProps = {
  education: ResumeEducation;
};

export function RT1Education(props: RT1EducationProps) {
  const { education } = props;
  return (
    <Grid>
      <Grid.Col span={{ sm: 3 }}>
        <Stack gap={0}>
          <Title order={5}>{education.institution}</Title>
          <Group gap="xs">
            <Icon name="location" size={16} />
            <Text flex={1} c="gray">
              {education.location}
            </Text>
          </Group>
          <Text c="gray">
            {getSimpleDateDurationLabel(education.start, education.end)}
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ sm: 1 }}>
        <Stack justify="center" h="100%" align="center"></Stack>
      </Grid.Col>
      <Grid.Col span={{ sm: 8 }}>
        <Stack>
          <Stack gap={0}>
            <Text fz="h4" fw="bold">
              {education.degree}
            </Text>
            <List withPadding>
              <List.Item>
                <Text>Score: {education.verdict}</Text>
              </List.Item>
              {education.description &&
                education.description.map((d) => (
                  <List.Item>
                    <Text>{d}</Text>
                  </List.Item>
                ))}
            </List>
          </Stack>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
