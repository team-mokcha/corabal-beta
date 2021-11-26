import React, { ReactElement } from "react";
import { Image } from "react-native";

const StorageIcon = (): ReactElement => {
  return <Image source={require("@assets/cups.png")} />;
};

export default StorageIcon;
