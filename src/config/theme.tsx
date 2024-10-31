import { createTheme, ThemeIcon } from "@mantine/core";

export const theme = createTheme({
  components: {
    ThemeIcon: ThemeIcon.extend({
      defaultProps: {
        color: "indigo",
        variant: "transparent",
      },
    }),
  },
});
