import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import styles from "./banner.styles";

const Banner = (style: any): ReactElement => {
  return (
    <View style={style}>
      <Image style={styles.banner} source={require("@assets/main/banner-poster.png")} />
    </View>
  );
};

export default Banner;
