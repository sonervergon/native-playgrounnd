import React from "react";
import {
  View as V,
  Text as T,
  TouchableOpacity as TO,
  SafeAreaView as SA,
  Button as B,
  Image as I,
  TouchableHighlight as TH,
  TouchableNativeFeedback as TNH,
  ScrollView as SV,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import type {
  TextProps,
  ViewProps,
  ScrollViewProps,
  ImageProps,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  TouchableHighlightProps,
  ButtonProps,
} from "react-native";
import { css } from "./style";

interface StyleProps {
  className?: string;
  children?: any;
}

type Element<T> = T & StyleProps;

function styled<T>(C: React.ElementType): React.ElementType<Element<T>> {
  return ({ className, style, ...props }: StyleProps & ViewProps) => {
    // @ts-ignore
    return <C style={{ ...css(className || ""), ...style }} {...props} />;
  };
}

export const View = styled<ViewProps>(V);
export type ViewT = Element<ViewProps>;

export const ScrollView = styled<ScrollViewProps>(SV);
export const Text = styled<TextProps>(T);
export const Button = styled<ButtonProps>(B);
export const TouchableOpacity = styled<TouchableOpacityProps>(TO);
export const TouchableHighlight = styled<TouchableHighlightProps>(TH);
export const TouchableNativeFeedback = styled<TouchableNativeFeedbackProps>(
  TNH
);
export const Image = styled<ImageProps>(I);

const SafeAreaStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export const SafeArea = styled<ViewProps>(SA);
SafeArea.defaultProps = { style: SafeAreaStyles.AndroidSafeArea };
