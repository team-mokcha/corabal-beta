import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle } from "react-native";

type pressedOptionProps = {
  type: "syrupPressed" | "creamPressed" | "syrupUnPressed" | "creamUnPressed";
  imageStyle: StyleProp<ImageStyle>;
};

const PressedOptionIcon = ({ type, imageStyle }: pressedOptionProps): ReactElement => {
  switch (type) {
    case "syrupPressed": {
      return <Image style={imageStyle} source={require("@assets/syrup-selected.png")} />;
    }
    case "syrupUnPressed": {
      return <Image style={imageStyle} source={require("@assets/empty-base.png")} />;
    }
    case "creamPressed": {
      return <Image style={imageStyle} source={require("@assets/cream-selected.png")} />;
    }
    case "creamUnPressed": {
      return <Image style={imageStyle} source={require("@assets/empty-cream.png")} />;
    }
  }
};

export default PressedOptionIcon;
