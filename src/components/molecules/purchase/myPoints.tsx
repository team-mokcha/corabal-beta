import React, { ReactElement } from "react";
import { View } from "react-native";
import { Text } from "../../atoms/index";
import Points from "../../atoms/icons/common/point";
import styles from "./myPoints.style";

type MyPointsProps = { text: string; points: number };

const MyPoints = ({ text, points }: MyPointsProps): ReactElement => {
  return (
    <View style={styles.pointsWrapper}>
      <Text weight="300" style={styles.myPointsFont}>
        {text}
      </Text>
      <Points points={points} fontSize="medium" />
    </View>
  );
};

export default MyPoints;
