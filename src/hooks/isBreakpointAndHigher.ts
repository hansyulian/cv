import { useMediaQuery } from "@mantine/hooks";

const breakpoints: Record<Breakpoint, string> = {
  xs: "36em",
  sm: "48em",
  md: "62em",
  lg: "75em",
  xl: "88em",
};

export function useIsBreakpointAndHigher(breakpoint: Breakpoint) {
  // hyulian: match it with _mantine.scss values
  return useMediaQuery(`(min-width: ${breakpoints[breakpoint]})`);
}
