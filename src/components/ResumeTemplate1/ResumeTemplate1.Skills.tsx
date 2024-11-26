import {
  Rating,
  Stack,
  Table,
  TextInput,
  Text,
  Group,
  Tooltip,
  lighten,
} from "@mantine/core";
import { useMemo, useState } from "react";
import { DevIcon } from "~/components/DevIcon";
import { Icon } from "~/components/Icon";
import { PrintOnly } from "~/components/PrintOnly";
// import { getSimpleDateDurationLabel } from "~/utils/getSimpleDateDurationLabel";

const heatmapColor = "#2BDD66";
const minimumInterpolate = 0.2;

export type RT1SkillsProps = {
  data: ResumeSkill[];
};

export function RT1Skills(props: RT1SkillsProps) {
  const { data } = props;
  const [filter, setFilter] = useState("");

  const displaySkills = useMemo(() => {
    let result = [...data];
    if (filter) {
      const filterLowerCase = filter.toLowerCase();
      result = result.filter((record) =>
        record.name.toLowerCase().includes(filterLowerCase)
      );
    }
    result.sort((a, b) => (a.level > b.level ? -1 : 1));
    return result;
  }, [filter, data]);

  const earliestYear = useMemo(() => {
    let lowest = new Date().getFullYear();
    for (const skill of data) {
      if (skill.periods) {
        for (const period of skill.periods) {
          if (period.start) {
            lowest = Math.min(lowest, period.start.year);
          }
          if (period.end) {
            lowest = Math.min(lowest, period.end.year);
          }
        }
      }
    }
    return lowest;
  }, [data]);

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const result = [];
    for (let i = earliestYear; i <= currentYear; i += 1) {
      const lightenRatio =
        ((currentYear - i) / (currentYear - earliestYear)) *
        (1 - minimumInterpolate);

      result.push({
        value: i,
        label: i.toString().slice(-2),
        color: lighten(heatmapColor, lightenRatio),
      });
    }
    return result;
  }, [earliestYear]);

  return (
    <Stack>
      <PrintOnly hide>
        <TextInput
          placeholder="Search skill"
          leftSection={<Icon name="search" />}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </PrintOnly>
      <Table.ScrollContainer minWidth="100%">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th></Table.Th>
              <Table.Th></Table.Th>
              {years.map((year) => (
                <Table.Th key={year.value}>
                  <Text>{year.label}</Text>
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {displaySkills.map((skill) => (
              <Table.Tr key={skill.name}>
                <Table.Td w="20%">
                  <Group>
                    <DevIcon value={skill.name} />
                    <Text fw="bold">{skill.name}</Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Group>
                    <Tooltip label={`${skill.level}/10`}>
                      <Rating readOnly count={10} value={skill.level} />
                    </Tooltip>
                    {/* <Text>
                  {skill.periods
                    ?.map((period) =>
                      getSimpleDateDurationLabel(period.start, period.end)
                    )
                    .join(", ")}
                </Text> */}
                  </Group>
                </Table.Td>
                {years.map((year) => {
                  const isActive = isSkillActive(
                    year.value,
                    skill.periods || []
                  );
                  return (
                    <Table.Td
                      key={`${skill.name}-${year.label}`}
                      bg={isActive ? year.color : undefined}
                    ></Table.Td>
                  );
                })}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Stack>
  );
}

function isSkillActive(year: number, periods: SimpleDuration[]) {
  for (const period of periods) {
    if (period.start) {
      if (period.end) {
        return period.start.year <= year && period.end.year >= year;
      }
      return period.start.year <= year;
    }
  }
  return false;
}
