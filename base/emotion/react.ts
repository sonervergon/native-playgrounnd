import { ThemeProvider, useTheme as useT } from "@emotion/react";
import type { Theme } from "./native-theme";

export { ThemeProvider };
// @ts-ignore
export const useTheme = (): Theme => useT();
