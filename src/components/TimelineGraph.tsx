import { Divider, Flex } from "@mantine/core";
import { Icon } from "~/components/Icon";
import classes from "./TimelineGraph.module.scss";

export type TimelineGraphProps = {
  horizontal?: boolean;
};

export function TimelineGraph(props: TimelineGraphProps) {
  const { horizontal = false } = props;
  return (
    <Flex
      direction={horizontal ? "row" : "column"}
      h={horizontal ? undefined : "100%"}
      w={horizontal ? "100%" : undefined}
      gap="sm"
      align="center"
    >
      <Icon name="circle" />
      <Divider
        orientation={horizontal ? "horizontal" : "vertical"}
        flex={1}
        className={classes.divider}
      />
    </Flex>
  );
}
