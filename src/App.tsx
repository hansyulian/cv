import "@mantine/core/styles.css";
import { theme } from "./config/theme.tsx";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "~/config/router";
import { DetectPrintingProvider } from "~/contexts/DetectPrintingContext.tsx";

function App() {
  return (
    <DetectPrintingProvider>
      <MantineProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </MantineProvider>
    </DetectPrintingProvider>
  );
}

export default App;
