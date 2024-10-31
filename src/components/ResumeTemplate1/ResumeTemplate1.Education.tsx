import {
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

export type RT1EducationProps = {
  data: ResumeEducation;
  index: number;
};

export function RT1Education(props: RT1EducationProps) {
  const { index } = props;
  const { degree, institution, location, verdict, description, end, start } =
    props.data;
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
          <Title order={5}>{institution}</Title>
          <Group gap="xs">
            <ThemeIcon>
              <Icon name="location" size={16} />
            </ThemeIcon>
            <Text flex={1} c="gray">
              {location}
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
              {degree}
            </Text>
            <List withPadding>
              <List.Item>
                <Text fw="bold">Score: {verdict}</Text>
              </List.Item>
              {description &&
                description.map((d) => (
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
