import React from "react";
import { Text } from "@Components";
import * as Progress from "react-native-progress";
import styles from "./recordsOfMonth.style";

const RecordsOfMonth = ({ title, daysOfSuccess, daysOfRecords, daysOfMonth }: any) => {
  return (
    <>
      <Text style={styles.statusTitle} weight="400">
        {title}
      </Text>
      <Progress.Bar
        progress={0.5} // console.log((16/31).toFixed(1)) -> 0.5
        width={190}
        color="#76A3FF"
        unfilledColor="#DDDDDD"
        borderWidth={0}
      />
      <Text style={styles.statusByMonthFont}>
        <Text style={styles.pointFont} weight="400">
          {daysOfSuccess ? daysOfSuccess : daysOfRecords}
        </Text>
        /{daysOfMonth}
      </Text>
    </>
  );
};

export default RecordsOfMonth;
