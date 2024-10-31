import {
  Anchor,
  Grid,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Icon } from "~/components/Icon";
import { TimelineGraph } from "~/components/TimelineGraph";
import { useIsBreakpointAndHigher } from "~/hooks/isBreakpointAndHigher";
import { getSimpleDateDurationLabel } from "~/utils/getSimpleDateDurationLabel";

export type RT1ExperienceProps = {
  data: ResumeExperience;
  index: number;
};

export function RT1Experience(props: RT1ExperienceProps) {
  const { index } = props;
  const {
    company,
    location,
    start,
    title,
    description,
    end,
    projects,
    remote,
    technologies,
  } = props.data;
  const isSmOrHigher = useIsBreakpointAndHigher("sm");
  return (
    <Grid>
      {!isSmOrHigher && index > 0 && (
        <Grid.Col>
          <TimelineGraph horizontal />
        </Grid.Col>
      )}
      <Grid.Col span={{ sm: 3 }}>
        <Stack gap={0}>
          <Title order={5}>{company}</Title>
          <Group gap="xs">
            <ThemeIcon>
              <Icon name="location" size={16} />
            </ThemeIcon>
            <Text c="gray" flex={1}>
              {location} {remote ? "(Remote)" : ""}
            </Text>
          </Group>
          <Group gap="xs">
            <ThemeIcon>
              <Icon name="calendar" size={16} />
            </ThemeIcon>
            <Text c="gray">{getSimpleDateDurationLabel(start, end)}</Text>
          </Group>
        </Stack>
      </Grid.Col>
      {isSmOrHigher && (
        <Grid.Col span={{ sm: 1 }}>
          <TimelineGraph />
        </Grid.Col>
      )}
      <Grid.Col span={{ sm: 8 }}>
        <Stack>
          <Stack gap={0}>
            <Text fz="h4" fw="bold">
              {title}
            </Text>
            {description && description.length > 0 && (
              <List withPadding>
                {description.map((d) => (
                  <List.Item>
                    <Text>{d}</Text>
                  </List.Item>
                ))}
              </List>
            )}
          </Stack>
          {projects && projects.length > 0 && (
            <Stack gap={0}>
              <Group gap="xs">
                <ThemeIcon>
                  <Icon name="project" />
                </ThemeIcon>
                <Text>Projects:</Text>
              </Group>
              <List withPadding>
                {projects.map((d) => {
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
                              <Anchor target="_blank" href={d.urls?.[0]}>
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
                                <Anchor target="_blank" href={url}>
                                  {url}
                                </Anchor>
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
          {technologies && technologies.length > 0 && (
            <Group gap="xs">
              <ThemeIcon>
                <Icon name="code" />
              </ThemeIcon>
              <Text flex={1}>Technologies: {technologies.join(", ")}</Text>
            </Group>
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
