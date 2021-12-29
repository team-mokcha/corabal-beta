import React, { ReactElement } from "react";
import { View } from "react-native";
import { Text } from "@Components";
import { CoinIcon } from "../../atoms/index";
import styles from "./point.style";

const POINT_TEXT = {
  point: "p"
};

const Point = ({ globalPoint }: any): ReactElement => {
  return (
    <View style={styles.myPointContainer}>
      <CoinIcon style={styles.myPointImg} />
      <Text style={styles.myPointFont} weight="500">
        {globalPoint.current.get()}
        {POINT_TEXT.point}
      </Text>
    </View>
  );
};

export default Point;
