import { PropsWithChildren } from "react";
import { useIsPrinting } from "~/hooks/useIsPrinting";

export type PrintOnlyProps = PropsWithChildren<{
  hide?: boolean;
}>;

export function PrintOnly(props: PrintOnlyProps) {
  const { hide = false, children } = props;
  const isPrinting = useIsPrinting();

  // hyulian:
  // | isPrinting | hide | result |
  // | O          | O   | X   |
  // | O          | X   | O   |
  // | X          | O   | O   |
  // | X          | X   | X   |
  if (isPrinting === hide) {
    return null;
  }
  return children;
}
