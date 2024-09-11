import { Stack, Divider } from "@mantine/core";
import { Icon } from "~/components/Icon";
import classes from "./TimelineGraph.module.scss";

export function TimelineGraph() {
  return (
    <Stack h="100%" align="center">
      <Icon name="circle" />
      <Divider orientation="vertical" flex={1} className={classes.divider} />
    </Stack>
  );
}
