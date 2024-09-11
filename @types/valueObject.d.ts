type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ScaleOfTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type SimpleDateYearOnly = {
  year: number;
};

type SimpleDateYearMonth = {
  year: number;
  month: MonthNumber;
};

type SimpleDate = SimpleDateYearOnly | SimpleDateYearMonth;
