import {
  Collapse,
  Divider,
  Group,
  Stack,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import { Icon } from "~/components/Icon";

export type RT1SectionProps = PropsWithChildren<{
  title: string;
  expanded?: boolean;
}>;

export function RT1Section(props: RT1SectionProps) {
  const { title, children, expanded = true } = props;
  const [open, { toggle }] = useDisclosure(expanded);
  return (
    <Stack w="100%">
      <UnstyledButton onClick={toggle}>
        <Group justify="space-between">
          <Title order={4} tt="uppercase">
            {title}
          </Title>
          <Icon name={open ? "minus" : "plus"} />
        </Group>
      </UnstyledButton>
      <Divider size="lg" />
      <Collapse in={open}>{children}</Collapse>
    </Stack>
  );
}
