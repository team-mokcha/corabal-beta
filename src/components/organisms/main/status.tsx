import React from "react";
import { View, Image } from "react-native";
import { Aim, Point, RecordsOfMonth } from "@Components";
import { Goal } from "@pages";
import styles from "./status.styles";

const Status = ({
  isShowingGoal,
  setIsShowingGoal,
  globalGoal,
  globalPoint,
  daysOfSuccess,
  daysOfRecords,
  daysOfMonth
}: any) => {
  return (
    <View style={styles.aimContainer}>
      <Aim setIsShowingGoal={setIsShowingGoal} globalGoal={globalGoal} />
      <Goal isShowingGoal={isShowingGoal} setIsShowingGoal={setIsShowingGoal} />
      <View style={styles.mainContainer}>
        <Image style={styles.mainCatImg} source={require("@assets/main-cat.png")} />
        <View style={{ flex: 1 }}>
          <RecordsOfMonth
            title="이번달 목표 성공일"
            daysOfSuccess={daysOfSuccess}
            daysOfMonth={daysOfMonth}
          />
          <RecordsOfMonth
            title="이번달 기록"
            daysOfRecords={daysOfRecords}
            daysOfMonth={daysOfMonth}
          />
          <Point globalPoint={globalPoint} />
        </View>
      </View>
    </View>
  );
};

export default Status;
