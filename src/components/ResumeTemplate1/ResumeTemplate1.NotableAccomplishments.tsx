import { List } from "@mantine/core";
import { AutoLinkText } from "~/components/AutoLinkText";

export type RT1NotableAccomplishmentsProps = {
  notableAccomplishments: string[];
};

export function RT1NotableAccomplishments(
  props: RT1NotableAccomplishmentsProps
) {
  const { notableAccomplishments } = props;

  return (
    <List>
      {notableAccomplishments.map((extra) => (
        <List.Item>
          <AutoLinkText>{extra}</AutoLinkText>
        </List.Item>
      ))}
    </List>
  );
}
