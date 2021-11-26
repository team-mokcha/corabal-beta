import React, { ReactElement } from "react";
import { Image } from "react-native";

type pressedBaseIconProps = {
  type: "waterPressed" | "milkPressed" | "unPressed";
};

const PressedBaseIcon = ({ type }: pressedBaseIconProps): ReactElement => {
  switch (type) {
    case "waterPressed": {
      return <Image source={require("@assets/water-selected.png")} />;
    }
    case "milkPressed": {
      return <Image source={require("@assets/milk-selected.png")} />;
    }
    case "unPressed": {
      return <Image source={require("@assets/empty-base.png")} />;
    }
  }
};

export default PressedBaseIcon;
