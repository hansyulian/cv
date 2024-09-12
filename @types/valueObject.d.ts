type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ScaleOfTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type LanguageProficiency =
  | "native"
  | "professional"
  | "limited"
  | "elementary"
  | "basic";

type SimpleDate = {
  year: number;
  month?: MonthNumber;
};

type SimpleDuration = {
  start?: SimpleDate;
  end?: SimpleDate;
};
type OnlineLinks = "linkedin" | "github" | "telegram";
