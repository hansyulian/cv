import { List } from "@mantine/core";
import { AutoLinkText } from "~/components/AutoLinkText";

export type RT1NotableAccomplishmentsProps = {
  data: string[];
};

export function RT1NotableAccomplishments(
  props: RT1NotableAccomplishmentsProps
) {
  const { data } = props;

  return (
    <List>
      {data.map((extra) => (
        <List.Item key={extra}>
          <AutoLinkText>{extra}</AutoLinkText>
        </List.Item>
      ))}
    </List>
  );
}
