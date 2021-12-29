import React, { ReactElement } from "react";
import { Image } from "react-native";

const CupIcon = ({ style }: any): ReactElement => {
  return <Image style={style} source={require("@assets/icon_cup_basic_empty.png")} />;
};

export default CupIcon;
