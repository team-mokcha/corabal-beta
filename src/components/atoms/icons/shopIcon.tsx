import React, { ReactElement } from "react";
import { Image } from "react-native";

const ShopIcon = (): ReactElement => {
  return <Image source={require("@assets/shop.png")} />;
};

export default ShopIcon;
