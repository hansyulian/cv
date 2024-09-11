import { Text, Rating, Stack, Table, Title } from "@mantine/core";

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
            <Table.Td>
              <Title order={4}>{language.language}</Title>
            </Table.Td>
            <Table.Td>
              <Rating
                readOnly
                value={proficiencySequence.indexOf(language.proficiency) + 1}
              />
            </Table.Td>
            <Table.Td w="100%">
              <Text>{proficiencyLabelMap[language.proficiency]}</Text>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table>
    </Stack>
  );
}
