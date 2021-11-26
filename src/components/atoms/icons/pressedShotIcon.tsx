import React, { ReactElement } from "react";
import { Image } from "react-native";

type pressedShotIcon = {
  type: "onePressed" | "twoPressed" | "threePressed" | "unPressed";
};

const PressedShotIcon = ({ type }: pressedShotIcon): ReactElement => {
  switch (type) {
    case "onePressed": {
      return <Image source={require("@assets/1shot.png")} />;
    }
    case "twoPressed": {
      return <Image source={require("@assets/2shot.png")} />;
    }
    case "threePressed": {
      return <Image source={require("@assets/3shot.png")} />;
    }
    case "unPressed": {
      return <Image source={require("@assets/empty-shot.png")} />;
    }
  }
};

export default PressedShotIcon;
