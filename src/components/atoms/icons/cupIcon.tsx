import React from "react";
import { Image } from "react-native";

const CupIcon = ({ style }: any) => {
  return <Image style={style} source={require("@assets/icon_cup_basic_empty.png")} />;
};

export default CupIcon;
