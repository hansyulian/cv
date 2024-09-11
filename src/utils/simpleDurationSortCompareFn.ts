import { convertSimpleDate } from "~/utils/convertSimpleDate";

// hyulian: making the sorting to make the newest experience always appear earlier
export function simpleDurationSortCompareFn(
  a: SimpleDuration,
  b: SimpleDuration
) {
  if (!a.end && !!b.end) {
    return -1;
  }
  if (!!a.end && !b.end) {
    return 1;
  }
  if (a.end && b.end) {
    const aEnd = convertSimpleDate(a.end);
    const bEnd = convertSimpleDate(b.end);
    if (aEnd.getTime() === bEnd.getTime()) {
      if (!a.start && !b.start) {
        return 0;
      }
      if (!a.start) {
        return -1;
      }
      if (!b.start) {
        return 1;
      }
      const aStart = convertSimpleDate(a.start);
      const bStart = convertSimpleDate(b.start);
      if (aStart.getTime() === bStart.getTime()) {
        return 0;
      }
      return aStart > bStart ? -1 : 1;
    }
    return aEnd > bEnd ? -1 : 1;
  }
  return 0;
}
