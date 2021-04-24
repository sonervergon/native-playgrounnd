import React from "react";
import { DropShadow } from "./style";
import { View, ViewT } from "./components";

export const Card = ({ children, ...props }: ViewT) => (
  <View style={DropShadow.xs} {...props}>
    {children}
  </View>
);
