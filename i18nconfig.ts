export type Locale = "en" | "tw";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "tw"];

export const localeNames: Record<Locale, string> = {
  "en": "EN",
  "tw": "TW",
};