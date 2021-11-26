import React from "react";
import { Image } from "react-native";

const CoinIcon = ({ style }: any) => {
  return <Image style={style} source={require("@assets/btn_point.png")} />;
};

export default CoinIcon;
