import React from "react";
import { View } from "react-native";
import { Text } from "@Components";
import * as Progress from "react-native-progress";
import styles from "./recordsOfMonth.style";

const RecordsOfMonth = () => {
  return (
    <View>
      <Text style={styles.statusTitleFont}>이번달 목표 성공일</Text>
      <Progress.Bar
        progress={0.5} // console.log((16/31).toFixed(1)) -> 0.5
        width={210}
        color="#76A3FF"
        unfilledColor="#DDDDDD"
        borderWidth={0}
      />
      <Text style={styles.statusByMonthFont}>
        <Text style={styles.pointFont}>16</Text>/31
      </Text>
      <Text style={styles.statusTitleFont}>이번달 기록</Text>
      <Progress.Bar
        progress={0.5}
        width={210}
        color="#76A3FF"
        unfilledColor="#DDDDDD"
        borderWidth={0}
      />
      <Text style={styles.statusByMonthFont}>
        <Text style={styles.pointFont}>16</Text>/31
      </Text>
    </View>
  );
};

export default RecordsOfMonth;
