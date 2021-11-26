import React from "react";
import { Image } from "react-native";

const RightArrowIcon = ({ style }: any) => {
  return <Image style={style} source={require("@assets/btn_next.png")} />;
};

export default RightArrowIcon;
