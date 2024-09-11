import { Text, Rating, Stack, Table, Title, Group } from "@mantine/core";

export type RT1LanguagesProps = {
  languages: ResumeLanguage[];
};
const proficiencyLabelMap: Record<LanguageProficiency, string> = {
  basic: "Basic",
  elementary: "Elementary",
  limited: "Limited",
  professional: "Professional",
  native: "Native",
};

const proficiencySequence: LanguageProficiency[] = [
  "basic",
  "elementary",
  "limited",
  "professional",
  "native",
];

export function RT1Languages(props: RT1LanguagesProps) {
  const { languages } = props;

  return (
    <Stack>
      <Table>
        {languages.map((language) => (
          <Table.Tr>
            <Table.Td w="20%">
              <Title order={4}>{language.language}</Title>
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
