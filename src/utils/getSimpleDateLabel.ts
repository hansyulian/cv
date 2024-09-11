import { getMonthLabel } from "~/utils/getMonthLabel";

export function getSimpleDateLabel(simpleDate: SimpleDate) {
  if (simpleDate.month) {
    return `${getMonthLabel(simpleDate.month)} ${simpleDate.year}`;
  }
  return `${simpleDate.year}`;
}
