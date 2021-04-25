import { colors } from "./colors";
import { nativeLetterSpacings, nativeFontSizes } from "./typography";

export const space = [0, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512, 1024, 2048];
export const radii = {
  none: 0,
  sm: 2,
  default: 4,
  md: 6,
  lg: 8,
  xl: 12,
  "2xl": 16,
  "3xl": 24,
  full: 100000,
};

export const theme = {
  colors,
  space,
  heights: [32, 40, 48, 56, 64],
  widths: [32, 40, 48, 56, 64],
  fontSizes: nativeFontSizes,
  fonts: {
    body: `'system-ui', sans-serif`,
    heading: `'system-ui' sans-serif`,
  },
  lineHeights: {
    none: 1,
    body: 1.4,
    heading: 30,
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  opacity: {
    light: 0.2,
    disabled: 0.4,
    faded: 0.6,
    hidden: 0,
    showing: 1,
  },
  borders: [0, 2],
  letterSpacings: nativeLetterSpacings,
  zIndex: {
    notification: 9999,
    modal: 9998,
    drawer: 9997,
    sticky: 9996,
    auto: "auto",
  },
  radii,
  durations: [0.1, 0.3, 0.75],
};

export type Theme = typeof theme;
