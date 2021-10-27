import React from "react";
import { View, Image } from "react-native";
import { Text } from "@Components";
import styles from "./point.style";

const Point = ({ globalPoint }: any) => {
  return (
    <View style={styles.myPointContainer}>
      <Image style={styles.myPointImg} source={require("@assets/btn_point.png")} />
      <Text style={styles.myPointFont}>{globalPoint.current.get()}p</Text>
    </View>
  );
};

export default Point;
