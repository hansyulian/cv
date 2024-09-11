import {
  Rating,
  Stack,
  Table,
  Title,
  TextInput,
  Text,
  Group,
} from "@mantine/core";
import { useMemo, useState } from "react";
import { Icon } from "~/components/Icon";
import { PrintOnly } from "~/components/PrintOnly";
import { getSimpleDateDurationLabel } from "~/utils/getSimpleDateDurationLabel";

export type RT1SkillsProps = {
  skills: ResumeSkill[];
};

export function RT1Skills(props: RT1SkillsProps) {
  const { skills } = props;
  const [filter, setFilter] = useState("");

  const displaySkills = useMemo(() => {
    let result = [...skills];
    if (filter) {
      const filterLowerCase = filter.toLowerCase();
      result = result.filter((record) =>
        record.name.toLowerCase().includes(filterLowerCase)
      );
    }
    result.sort((a, b) => (a.level > b.level ? -1 : 1));
    return result;
  }, [filter, skills]);

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
      <Table>
        {displaySkills.map((skill) => (
          <Table.Tr>
            <Table.Td w="20%">
              <Title order={4}>{skill.name}</Title>
            </Table.Td>
            <Table.Td>
              <Group>
                <Rating readOnly count={10} value={skill.level} />
                <Text>
                  {skill.periods
                    ?.map((period) =>
                      getSimpleDateDurationLabel(period.start, period.end)
                    )
                    .join(", ")}
                </Text>
              </Group>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table>
    </Stack>
  );
}
