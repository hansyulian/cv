export const onlineLinkLabelMap: Record<OnlineLinks, string> = {
  github: "Github",
  linkedin: "LinkedIn",
  telegram: "Telegram",
  code: "Code",
};

export const proficiencyLabelMap: Record<LanguageProficiency, string> = {
  basic: "Basic",
  elementary: "Elementary",
  limited: "Limited",
  professional: "Professional",
  native: "Native",
};

export const proficiencySequence: LanguageProficiency[] = [
  "basic",
  "elementary",
  "limited",
  "professional",
  "native",
];

export const dataUrl = import.meta.env.VITE_DATA_URL || "local";
