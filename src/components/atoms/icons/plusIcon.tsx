import React from "react";
import { Image } from "react-native";

const PlusIcon = ({ style }: any) => {
  return <Image style={style} source={require("@assets/btn_+.png")} />;
};

export default PlusIcon;
