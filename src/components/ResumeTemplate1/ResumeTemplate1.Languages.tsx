import { Text, Rating, Stack, Table, Group } from "@mantine/core";
import { proficiencySequence, proficiencyLabelMap } from "~/config/constants";

export type RT1LanguagesProps = {
  data: ResumeLanguage[];
};
export function RT1Languages(props: RT1LanguagesProps) {
  const { data } = props;

  return (
    <Stack>
      <Table>
        {data.map((language) => (
          <Table.Tr>
            <Table.Td w="20%">
              <Text fw="bold">{language.language}</Text>
            </Table.Td>
            <Table.Td>
              <Group>
                <Rating
                  readOnly
                  value={proficiencySequence.indexOf(language.proficiency) + 1}
                />
                <Text>{proficiencyLabelMap[language.proficiency]}</Text>
              </Group>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table>
    </Stack>
  );
}
