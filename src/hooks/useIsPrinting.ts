import { useContext } from "react";
import { DetectPrintingContext } from "~/contexts/DetectPrintingContext";

export function useIsPrinting() {
  const context = useContext(DetectPrintingContext);
  return context.isPrinting;
}
