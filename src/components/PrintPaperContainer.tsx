import { Container, Paper } from "@mantine/core";
import { PropsWithChildren } from "react";
import { useIsPrinting } from "~/hooks/useIsPrinting";

export function PrintPaperContainer(props: PropsWithChildren) {
  const isPrinting = useIsPrinting();
  if (isPrinting) {
    return <Container size="xl">{props.children}</Container>;
  }
  return (
    <Container size="xl">
      <Paper p="xl" shadow="xl">
        {props.children}
      </Paper>
    </Container>
  );
}
