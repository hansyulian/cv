export function convertSimpleDate(simpleDate: SimpleDate): Date {
  return new Date(simpleDate.year, (simpleDate?.month || 1) - 1);
}
