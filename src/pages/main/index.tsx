import React, { ReactElement, useEffect, useState } from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationParams } from "@config/navigator";
import { useState as HSUseState } from "@hookstate/core";
import { globalGoalState, globalPointState, globalUserState } from "@stores/stores";
import { db } from "@services/firebaseApp";
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

  return (
    <>
      <Template
        navigation={navigation}
        isEmpty={isEmpty}
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
