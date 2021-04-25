import React from "react";
import { StatusBar as SB, StatusBarProps } from "react-native";
import { useTheme } from "./react";

export const StatusBar = ({ backgroundColor, ...props }: StatusBarProps) => {
  const theme = useTheme();
  return <SB backgroundColor={backgroundColor} />;
};
