import * as React from "react";
import type { TouchableOpacityProps } from "react-native";
import styled from "@emotion/native";
import {
  space,
  layout,
  border,
  color,
  position,
  flexbox,
  compose,
} from "styled-system";
import type {
  LayoutProps,
  SpaceProps,
  PaddingProps,
  BorderProps,
  PositionProps,
  FlexProps,
  ColorProps,
} from "styled-system";
import { ShadowProps, shadowVariants } from "./shadows";

interface Clickable
  extends PaddingProps,
    SpaceProps,
    LayoutProps,
    PositionProps,
    ColorProps,
    FlexProps,
    BorderProps,
    TouchableOpacityProps,
    ShadowProps {}

const system = compose(
  space,
  color,
  layout,
  flexbox,
  position,
  border,
  shadowVariants
);

export const Clickable = styled.TouchableOpacity<Clickable>(system);
