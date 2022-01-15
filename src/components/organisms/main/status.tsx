import React from "react";
import { View, Image } from "react-native";
import { Aim, Point, RecordsOfMonth } from "../../molecules/index";
import SetGoalModal from "../../../pages/modals/setGoals/setGoals";
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
    <View style={styles.statusContainer}>
      <Aim setIsShowingGoal={setIsShowingGoal} globalGoal={globalGoal} />
      <SetGoalModal isShowingGoal={isShowingGoal} setIsShowingGoal={setIsShowingGoal} />
      <View style={styles.rowContainer}>
        <Image style={styles.catImg} source={require("@assets/main/illust-cat.png")} />
        <View style={styles.monthRecordContainer}>
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
          <Point points={11} style={styles.pointWrapper} fontSize="small" />
        </View>
      </View>
    </View>
  );
};

export default Status;
