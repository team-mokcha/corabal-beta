import React from "react";
import { Image } from "react-native";

const DeleteIcon = ({ style }: any) => {
  return <Image style={style} source={require("@assets/icon_delete_lightgrey.png")} />;
};

export default DeleteIcon;
