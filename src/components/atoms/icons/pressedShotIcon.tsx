import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle } from "react-native";

type pressedShotIcon = {
  type: "onePressed" | "twoPressed" | "threePressed" | "unPressed";
  imageStyle: StyleProp<ImageStyle>;
};

const PressedShotIcon = ({ type, imageStyle }: pressedShotIcon): ReactElement => {
  switch (type) {
    case "onePressed": {
      return <Image style={imageStyle} source={require("@assets/1shot.png")} />;
    }
    case "twoPressed": {
      return <Image style={imageStyle} source={require("@assets/2shot.png")} />;
    }
    case "threePressed": {
      return <Image style={imageStyle} source={require("@assets/3shot.png")} />;
    }
    case "unPressed": {
      return <Image style={imageStyle} source={require("@assets/empty-shot.png")} />;
    }
  }
};

export default PressedShotIcon;
