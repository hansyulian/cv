import { Text, Divider, Group, Stack, Anchor } from "@mantine/core";
import { ReactNode } from "react";
import { getLinkableValue } from "~/utils/getLinkableValue";

export type ResumeTemplate1ProfileInfoProps = {
  icon: ReactNode;
  withDivider?: boolean;
  value: string;
};

export function ResumeTemplate1ProfileInfo(
  props: ResumeTemplate1ProfileInfoProps
) {
  const { icon, value: text, withDivider } = props;
  const linkUrl = getLinkableValue(text);

  return (
    <Stack gap="xs">
      <Group>
        {icon}
        {linkUrl ? <Anchor href={linkUrl}>{text}</Anchor> : <Text>{text}</Text>}
      </Group>
      {withDivider && <Divider />}
    </Stack>
  );
}
