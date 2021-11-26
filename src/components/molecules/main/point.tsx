import React from "react";
import { View } from "react-native";
import { Text } from "@Components";
import { CoinIcon } from "../../atoms/index";
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
