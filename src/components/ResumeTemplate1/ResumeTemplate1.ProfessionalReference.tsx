import { Anchor, Avatar, Group, Paper, Stack, Text } from "@mantine/core";
import { Icon } from "~/components/Icon";
import { getLinkableValue } from "~/utils/getLinkableValue";

export type RT1ProfessionalReferenceProps = {
  data: ResumeProfessionalReference;
};

export function RT1ProfessionalReference(props: RT1ProfessionalReferenceProps) {
  const { designation, name, avatarUrl, email, phone } = props.data;
  return (
    <Paper shadow="sm" p="md" h="100%">
      <Stack justify="center" h="100%">
        <Group>
          <Avatar name={name} src={avatarUrl} size={40} />
          <Stack flex={1} gap={0}>
            <Text fz="h4" fw="bold">
              {name}
            </Text>
            <Text c="gray">{designation}</Text>
          </Stack>
        </Group>
        <Group>
          {phone && (
            <Anchor target="_blank" href={getLinkableValue(phone)}>
              <Group gap="xs">
                <Icon name="whatsapp" />
                <Text>{phone}</Text>
              </Group>
            </Anchor>
          )}
          {email && (
            <Anchor target="_blank" href={getLinkableValue(email)}>
              <Group gap="xs">
                <Icon name="email" />
                <Text>{email}</Text>
              </Group>
            </Anchor>
          )}
        </Group>
      </Stack>
    </Paper>
  );
}
