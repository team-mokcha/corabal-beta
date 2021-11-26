import React, { ReactElement } from "react";
import { Image } from "react-native";

type pressedOptionProps = {
  type: "syrupPressed" | "creamPressed" | "syrupUnPressed" | "creamUnPressed";
};

const PressedOptionIcon = ({ type }: pressedOptionProps): ReactElement => {
  switch (type) {
    case "syrupPressed": {
      return <Image source={require("@assets/syrup-selected.png")} />;
    }
    case "syrupUnPressed": {
      return <Image source={require("@assets/empty-base.png")} />;
    }
    case "creamPressed": {
      return <Image source={require("@assets/cream-selected.png")} />;
    }
    case "creamUnPressed": {
      return <Image source={require("@assets/empty-cream.png")} />;
    }
  }
};

export default PressedOptionIcon;
