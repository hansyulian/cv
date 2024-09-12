import {
  Anchor,
  Avatar,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Icon } from "~/components/Icon";
import { getLinkableValue } from "~/utils/getLinkableValue";

export type RT1ProfessionalReferenceProps = {
  professionalReference: ResumeProfessionalReference;
};

export function RT1ProfessionalReference(props: RT1ProfessionalReferenceProps) {
  const { designation, name, avatarUrl, email, phone } =
    props.professionalReference;
  return (
    <Paper shadow="sm" p="md" h="100%">
      <Stack justify="center" h="100%">
        <Group>
          <Avatar name={name} src={avatarUrl} size={40} />
          <Stack flex={1} gap={0}>
            <Title order={4}>{name}</Title>
            <Text c="gray">{designation}</Text>
          </Stack>
        </Group>
        <Group>
          {phone && (
            <Anchor href={getLinkableValue(phone)}>
              <Group gap="xs">
                <Icon name="whatsapp" />
                <Text>{phone}</Text>
              </Group>
            </Anchor>
          )}
          {email && (
            <Anchor href={getLinkableValue(email)}>
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
