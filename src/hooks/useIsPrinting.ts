import { useEffect, useState } from "react";

export function useIsPrinting() {
  const [isPrinting, setIsPrinting] = useState(false);
  useEffect(() => {
    const handleBeforePrint = () => {
      setIsPrinting(true);
    };
    const handleAfterPrint = () => {
      setIsPrinting(false);
    };
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  useEffect(() => {
    console.log("isPrinting", isPrinting);
  }, [isPrinting]);
  return isPrinting;
}
