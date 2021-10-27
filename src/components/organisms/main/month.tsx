import React from "react";
import { View } from "react-native";
import { Text } from "@Components";
import CircleProgress from "../../molecules/main/circleProgress";
import { MONTH_HEADING } from "./constants";
import styles from "./month.styles";

const Month = ({ month, totalCups }: any) => {
  return (
    <View style={styles.recordContainer}>
      <Text style={styles.thisMonthFont}>
        {month}
        {MONTH_HEADING.MONTH}
      </Text>
      <Text style={styles.totalCupsFont}>
        <Text style={styles.pointFont}>{totalCups}</Text>
        {MONTH_HEADING.CUPS}
      </Text>
      <CircleProgress />
    </View>
  );
};

export default Month;
