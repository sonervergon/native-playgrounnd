import * as React from "react";
import { ViewProps } from "react-native";
import type {
  LayoutProps,
  SpaceProps,
  PaddingProps,
  BorderProps,
  PositionProps,
  FlexDirectionProps,
  FlexProps,
  ColorProps,
} from "styled-system";
import styled from "@emotion/native";
import {
  space,
  layout,
  border,
  color,
  position,
  flexDirection,
  flexbox,
  compose,
} from "styled-system";
import { ShadowProps, shadowVariants } from "./shadows";

interface Box
  extends PaddingProps,
    SpaceProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    ColorProps,
    FlexDirectionProps,
    FlexProps,
    BorderProps,
    ViewProps,
    ShadowProps {}

const system = compose(
  space,
  color,
  layout,
  flexbox,
  flexDirection,
  position,
  border,
  shadowVariants
);

export const Box = styled.View<Box>(system);
