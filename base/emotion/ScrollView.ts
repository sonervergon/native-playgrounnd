import * as React from "react";
import { ScrollViewProps } from "react-native";
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
    ScrollViewProps,
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

export const ScrollView = styled.ScrollView<Box>(system);
