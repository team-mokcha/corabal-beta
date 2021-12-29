import React from "react";
import { View } from "react-native";
import { Text } from "@Components";
import CircleProgress from "../../molecules/main/circleProgress";
import styles from "./month.styles";

const MONTH_TEXT = {
  month: "월",
  cups: "잔"
};

const Month = ({ month, totalCups }: any) => {
  return (
    <View style={styles.recordContainer}>
      <Text style={styles.thisMonthFont} weight="400">
        {month}
        {MONTH_TEXT.month}
      </Text>
      <Text style={styles.totalCupsFont} weight="400">
        <Text style={styles.pointFont} weight="900">
          {totalCups}
        </Text>
        {MONTH_TEXT.cups}
      </Text>
      <CircleProgress />
    </View>
  );
};

export default Month;
