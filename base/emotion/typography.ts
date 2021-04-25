export const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: undefined,
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
};

export const nativeFontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 42,
  "6xl": 48,
};

export const nativeLetterSpacings = {
  tighter: -4,
  tight: -2,
  normal: 0,
  wide: 2,
  wider: 4,
  widest: 6,
};

export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

export type FontSizes = typeof fontSizes;
export type LetterSizes = typeof letterSpacings;
