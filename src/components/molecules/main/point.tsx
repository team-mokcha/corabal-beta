import React from "react";
import { View } from "react-native";
import { CoinIcon, Text } from "@Components";
import styles from "./point.style";

const Point = ({ globalPoint }: any) => {
  return (
    <View style={styles.myPointContainer}>
      <CoinIcon style={styles.myPointImg} />
      <Text style={styles.myPointFont}>{globalPoint.current.get()}p</Text>
    </View>
  );
};

export default Point;
