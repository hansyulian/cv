import { PropsWithChildren } from "react";
import { useIsPrinting } from "~/hooks/useIsPrinting";

export type PrintOnlyProps = PropsWithChildren<{
  hide?: boolean;
}>;

export function PrintOnly(props: PrintOnlyProps) {
  const { hide = false, children } = props;
  const isPrinting = useIsPrinting();

  // hyulian if in printing mode and should be hiding, then return null
  if (isPrinting && hide) {
    return null;
  }
  // hyulian: if not printing mode and should be showing only in printing, then return null
  if (!isPrinting && !hide) {
    return null;
  }
  // hyulian: otherwise return the children
  return children;
}
