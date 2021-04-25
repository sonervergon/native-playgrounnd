import { ImageProps } from "react-native";
import type {
  SpaceProps,
  PaddingProps,
  PositionProps,
  MarginProps,
} from "styled-system";
import styled from "@emotion/native";
import { space, position, compose } from "styled-system";

interface Image
  extends PaddingProps,
    MarginProps,
    SpaceProps,
    PositionProps,
    ImageProps {}

const system = compose(space, position);

export const Image = styled.Image<Image>(system);
