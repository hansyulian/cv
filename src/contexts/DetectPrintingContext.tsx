import { createContext, useState, useEffect, PropsWithChildren } from "react";

export const DetectPrintingContext = createContext({
  isPrinting: false,
});

export const DetectPrintingProvider = ({ children }: PropsWithChildren) => {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const handleBeforePrint = () => setIsPrinting(true);
    const handleAfterPrint = () => setIsPrinting(false);

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <DetectPrintingContext.Provider value={{ isPrinting }}>
      {children}
    </DetectPrintingContext.Provider>
  );
};
