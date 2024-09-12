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
import { useIsPrinting } from "~/hooks/useIsPrinting";

export type RT1SectionProps = PropsWithChildren<{
  title: string;
  expanded?: boolean;
}>;

export function RT1Section(props: RT1SectionProps) {
  const { title, children, expanded = true } = props;
  const [open, { toggle }] = useDisclosure(expanded);
  const isPrinting = useIsPrinting();
  return (
    <Stack w="100%">
      <UnstyledButton onClick={toggle}>
        <Group justify="space-between">
          <Title order={2} tt="uppercase" flex={1}>
            {title}
          </Title>
          {!isPrinting && <Icon name={open ? "minus" : "plus"} />}
        </Group>
      </UnstyledButton>
      <Divider size="lg" />
      <Collapse in={open || isPrinting}>{children}</Collapse>
    </Stack>
  );
}
