import { Anchor, Grid, Group, List, Stack, Text, Title } from "@mantine/core";
import { Icon } from "~/components/Icon";
import { getSimpleDateDurationLabel } from "~/utils/getSimpleDateDurationLabel";

export type RT1ExperienceProps = {
  experience: ResumeExperience;
};

export function RT1Experience(props: RT1ExperienceProps) {
  const { experience } = props;
  return (
    <Grid>
      <Grid.Col span={{ sm: 3 }}>
        <Stack gap={0}>
          <Title order={5}>{experience.company}</Title>
          <Group gap="xs">
            <Icon name="location" size={16} />
            <Text c="gray" flex={1}>
              {experience.location} {experience.remote ? "(Remote)" : ""}
            </Text>
          </Group>
          <Text c="gray">
            {getSimpleDateDurationLabel(experience.start, experience.end)}
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
              {experience.title}
            </Text>
            {experience.description && experience.description.length > 0 && (
              <List withPadding>
                {experience.description.map((d) => (
                  <List.Item>
                    <Text>{d}</Text>
                  </List.Item>
                ))}
              </List>
            )}
          </Stack>
          {experience.projects && experience.projects.length > 0 && (
            <Stack gap={0}>
              <Group gap="xs">
                <Icon name="project" />
                <Text>Projects:</Text>
              </Group>
              <List withPadding>
                {experience.projects.map((d) => {
                  const hasSingleUrl = d.urls?.length === 1;
                  const hasMultiUrl = (d.urls?.length || 0) > 1;
                  return (
                    <List.Item>
                      <Stack gap={0}>
                        <Text>
                          {d.name}
                          {hasSingleUrl ? (
                            <>
                              {" "}
                              <Anchor href={d.urls?.[0]}>
                                ({d.urls?.[0]})
                              </Anchor>
                            </>
                          ) : (
                            ""
                          )}
                        </Text>
                        {d.description && <Text c="gray">{d.description}</Text>}
                        {hasMultiUrl ? (
                          <List>
                            {d.urls?.map((url) => (
                              <List.Item>
                                <Anchor href={url}>{url}</Anchor>
                              </List.Item>
                            ))}
                          </List>
                        ) : null}
                      </Stack>
                    </List.Item>
                  );
                })}
              </List>
            </Stack>
          )}
          {experience.technologies && experience.technologies.length > 0 && (
            <Group gap="xs">
              <Icon name="code" />
              <Text flex={1}>
                Technologies: {experience.technologies.join(", ")}
              </Text>
            </Group>
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
