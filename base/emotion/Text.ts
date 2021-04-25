import styled from "@emotion/native";
import { system } from "@styled-system/core";
import {
  space,
  textStyle,
  layout,
  color,
  typography,
  compose,
} from "styled-system";
import type {
  LayoutProps,
  ColorProps,
  PaddingProps,
  TypographyProps,
  SpaceProps,
  styleFn,
  TextStyleProps,
  PositionProps,
} from "styled-system";

const fontWeight: styleFn = system({
  fontFamily: {
    property: "fontFamily",
    scale: "fonts",
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
  },
  fontWeight: {
    property: "fontWeight",
    scale: "fontWeights",
    transform: (value: string, scale: any) => String(scale[value] || value),
  },
  lineHeight: {
    property: "lineHeight",
    scale: "lineHeights",
  },
  letterSpacing: {
    property: "letterSpacing",
    scale: "letterSpacings",
  },
  textAlign: true,
  fontStyle: true,
});

interface Text
  extends PaddingProps,
    LayoutProps,
    ColorProps,
    SpaceProps,
    PositionProps,
    TextStyleProps,
    TypographyProps {}

const s = compose(space, color, textStyle, layout, typography, fontWeight);

export const Text = styled.Text<Text>(s);

Text.defaultProps = {
  fontSize: "base",
};
