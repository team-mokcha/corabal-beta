import React, { ReactElement } from "react";
import { View, Image, ViewProps } from "react-native";
import { Text } from "@Components";
import styles from "./point.style";

const POINT_TEXT = {
  point: "p"
};

type pointProps = {
  points: number;
  fontSize: "small" | "medium" | "large";
} & ViewProps;

const Point = ({ points, style, fontSize }: pointProps): ReactElement => {
  const handleFontSize = (fontSize: string) => {
    switch (fontSize) {
      case "large":
        return { fontSize: 13 };
      case "medium":
        return { fontSize: 12 };
      case "small":
        return { fontSize: 11 };
    }
  };

  return (
    <View style={[styles.pointWrapper, style]}>
      <Image style={styles.pointIcon} source={require("@assets/common/btn_point.png")} />
      <Text weight="500" style={handleFontSize(fontSize)}>
        {points}
        {POINT_TEXT.point}
      </Text>
    </View>
  );
};

export default Point;
