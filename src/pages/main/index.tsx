import React, { ReactElement, useEffect, useState } from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationParams } from "../navigator/index";
import { useState as HSUseState } from "@hookstate/core";
import { globalGoalState, globalPointState, globalUserState } from "@stores/stores";
import { db } from "@services/firebaseApp";
import { addZeroCupRecord } from "@services/functions/handle-coffee-log";
import Toast from "react-native-toast-message";
import Template from "./template";

type NavigationProps = {
  navigation: DrawerNavigationProp<DrawerNavigationParams, "Main">;
};
export default function Main({ navigation }: NavigationProps): ReactElement {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isShowingGoal, setIsShowingGoal] = useState(false);
  const globalPoint = HSUseState(globalPointState);
  const globalEmail = HSUseState(globalUserState).userEmail.get();
  const globalGoal = HSUseState(globalGoalState);
  const [month, setMonth] = useState(10);
  const [totalCups, setTotalCups] = useState(100);
  const [daysOfSuccess, setDaysOfSuccess] = useState(16);
  const [daysOfRecords, setDaysOfRecords] = useState(20);
  const [daysOfMonth, setDaysOfMonth] = useState(31);

  useEffect(() => {
    const unsubscribe = db
      .collection("points")
      .doc(globalEmail)
      .onSnapshot(snapshot => {
        globalPoint.set({ current: snapshot.data()?.current });
      });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(globalEmail)
      .onSnapshot(snapshot => {
        globalGoal.set({ goal: snapshot.data()?.goal });
      });
    return unsubscribe;
  }, []);

  // 1. isEmpty 결정 - 커피 기록 여부가 DB에서 불러와진 후 동적으로 결정되어야 함
  const handleAddZeroCupBtn = async () => {
    const timestamp = new Date();
    const [result, contents] = await addZeroCupRecord(globalEmail, timestamp);
    try {
      if (result === "succeed") {
        Toast.show({
          type: "info",
          text1: "커피 기록 저장 완료!"
        });
      } else if (result === "failed") {
        Toast.show({
          type: "error",
          text1: "서버와의 통신 실패",
          text2: `${contents}로 인해 서버와의 통신이 실패했습니다. 다시 시도해주세요.`
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "알 수 없는 오류",
        text2: `${error}로 인해 오류가 발생했습니다. 다시 시도해주세요.`
      });
    }
  };

  return (
    <>
      <Template
        navigation={navigation}
        isEmpty={!isEmpty} // 동적으로 결정되어야 함
        handleAddZeroCupBtn={handleAddZeroCupBtn}
        isShowingGoal={isShowingGoal}
        setIsShowingGoal={setIsShowingGoal}
        globalPoint={globalPoint} // 전역 말고 지역으로 쓸 수 있는지 확인
        globalEmail={globalEmail}
        globalGoal={globalGoal} // 전역 말고 지역으로 쓸 수 있는지 확인
        month={month}
        totalCups={totalCups}
        daysOfSuccess={daysOfSuccess}
        daysOfRecords={daysOfRecords}
        daysOfMonth={daysOfMonth}
      />
    </>
  );
}
