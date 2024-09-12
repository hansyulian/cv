import { Box, Container, Paper, Space } from "@mantine/core";
import { PropsWithChildren } from "react";
import { useIsPrinting } from "~/hooks/useIsPrinting";
import classes from "./PrintPaperContainer.module.scss";
import { useIsBreakpointAndHigher } from "~/hooks/isBreakpointAndHigher";

export function PrintPaperContainer(props: PropsWithChildren) {
  const isPrinting = useIsPrinting();
  const isMdAndHigher = useIsBreakpointAndHigher("md");
  if (isPrinting || !isMdAndHigher) {
    return (
      <Container size="xl">
        {props.children}
        <Space h="xl" />
      </Container>
    );
  }
  return (
    <Box className={classes.outerContainer}>
      <Container size="xl">
        <Space h="xl" />
        <Paper p="xl" shadow="xl">
          {props.children}
        </Paper>
        <Space h="xl" />
      </Container>
    </Box>
  );
}
