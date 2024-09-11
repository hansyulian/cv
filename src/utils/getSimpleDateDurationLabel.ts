import { getSimpleDateLabel } from "~/utils/getSimpleDateLabel";

export function getSimpleDateDurationLabel(
  start?: SimpleDate,
  end?: SimpleDate
) {
  // when have both no start and end
  if (!start && !end) {
    return "";
  }
  // hyulian: when have start and maybe have end
  if (start) {
    const startLabel = getSimpleDateLabel(start);
    if (start.month === end?.month && start.year === end?.year) {
      return startLabel;
    }
    const endLabel = end ? getSimpleDateLabel(end) : "Present";
    return `${startLabel} - ${endLabel}`;
  }
  // hyulian: when only have end
  if (end) {
    return getSimpleDateLabel(end);
  }
  return "";
}
