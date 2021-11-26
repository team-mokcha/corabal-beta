import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle } from "react-native";

type pressedBaseIconProps = {
  type: "waterPressed" | "milkPressed" | "unPressed";
  imageStyle: StyleProp<ImageStyle>;
};

const PressedBaseIcon = ({ type, imageStyle }: pressedBaseIconProps): ReactElement => {
  switch (type) {
    case "waterPressed": {
      return <Image style={imageStyle} source={require("@assets/water-selected.png")} />;
    }
    case "milkPressed": {
      return <Image style={imageStyle} source={require("@assets/milk-selected.png")} />;
    }
    case "unPressed": {
      return <Image style={imageStyle} source={require("@assets/empty-base.png")} />;
    }
  }
};

export default PressedBaseIcon;
