import { getSimpleDateLabel } from "~/utils/getSimpleDateLabel";

export function getSimpleDateDurationLabel(
  start: SimpleDate,
  end?: SimpleDate
) {
  const startLabel = getSimpleDateLabel(start);
  if (start.month === end?.month && start.year === end?.year) {
    return startLabel;
  }
  const endLabel = end ? getSimpleDateLabel(end) : "Present";
  return `${startLabel} - ${endLabel}`;
}
