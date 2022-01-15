import React, { ReactElement, useCallback, useState } from "react";
import { View, Image } from "react-native";
import { Text } from "@Components";
import { styles } from "./circleProgress.style";
interface circleProgressProps {
  name: string;
  source: any;
  height: string;
  part: number;
  total?: number;
}

const example = [
  {
    name: "샷",
    source: require("@assets/main/circle-shot.png"),
    height: "100%",
    part: 30
  },
  {
    name: "우유",
    source: require("@assets/main/circle-milk.png"),
    height: "66%", // 우유: 20(마심)/30(전체 커피) * 100 = 66.66667...
    part: 20,
    total: 30
  },
  {
    name: "시럽",
    source: require("@assets/main/circle-syrup.png"),
    height: "36%",
    part: 11,
    total: 30
  },
  {
    name: "크림",
    source: require("@assets/main/circle-cream.png"),
    height: "6%",
    part: 2,
    total: 30
  }
];

const CircleProgress = (): JSX.Element => {
  const [records, setRecords] = useState<circleProgressProps[]>(example);
  return (
    <View style={styles.container}>
      {records.map(record => {
        const source = record.source;
        return (
          <View key={record.source} style={styles.eachRecordContainer}>
            <View style={styles.circle}>
              <View style={[styles.circleFill, { height: record.height }]} />
              <View style={styles.centerContainer}>
                <Image source={source} />
              </View>
            </View>
            <Text weight="400" style={styles.recordName}>
              {record.name}
            </Text>
            <Text weight="400" style={styles.recordPart}>
              {record.part}
              {record.total && <Text style={styles.recordTotal}>/{record.total}</Text>}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default CircleProgress;
