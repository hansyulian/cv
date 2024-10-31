import { Text, Divider, Group, Stack, Anchor, ThemeIcon } from "@mantine/core";
import { ReactNode } from "react";
import { getLinkableValue } from "~/utils/getLinkableValue";

export type RT1ProfileInfoRowProps = {
  icon: ReactNode;
  withDivider?: boolean;
  value: string;
};

export function RT1ProfileInfoRow(props: RT1ProfileInfoRowProps) {
  const { icon, value: text, withDivider } = props;
  const linkUrl = getLinkableValue(text);

  return (
    <Stack gap="xs">
      <Group>
        <ThemeIcon>{icon}</ThemeIcon>
        {linkUrl ? (
          <Anchor target="_blank" href={linkUrl}>
            {text}
          </Anchor>
        ) : (
          <Text>{text}</Text>
        )}
      </Group>
      {withDivider && <Divider />}
    </Stack>
  );
}
