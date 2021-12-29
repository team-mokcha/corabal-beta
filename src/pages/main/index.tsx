import React, { ReactElement, useEffect, useState } from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationParams } from "../navigator/index";
import { useState as HSUseState } from "@hookstate/core";
import { globalGoalState, globalPointState, globalUserState } from "@stores/stores";
import { db } from "@services/firebaseApp";
import {
  getTodayCupLogs,
  addTodayNormalCupLog,
  updateTodayNormalCupLog,
  endTodayNormalCupRecord,
  endTodayZeroCupRecord
} from "@services/functions/handle-coffee-log";
import Toast from "react-native-toast-message";
import Template from "./template";

type NavigationProps = {
  navigation: DrawerNavigationProp<DrawerNavigationParams, "Main">;
};

export default function Main({ navigation }: NavigationProps): ReactElement {
  const [cupRecordState, setCupRecordState] = useState({
    isRecorded: false,
    isNormalCup: false,
    isZeroCup: false
  });
  const [normalCups, setNormalCups] = useState([{}]);

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

  useEffect(() => {
    // coffee가 포함된 상태를 globalState에 넣어두거나, DB에서 불러올 때 onSnapshot을 써야 할 것
    const setCupRecordStatus = async () => {
      const timestamp = new Date();
      const [result, contents] = await getTodayCupLogs(globalEmail, timestamp);
      try {
        switch (result) {
          case "fail": {
            Toast.show({
              type: "error",
              text1: "서버와의 통신 실패",
              text2: `${contents}로 인해 서버와의 통신이 실패했습니다. 다시 시도해주세요.`
            });
            break;
          }
          case "succeed": {
            if (contents === "No record Today.") {
              setCupRecordState({ isRecorded: false, isNormalCup: false, isZeroCup: false });
            } else {
              const isRecorded = await contents.is_recorded;
              const isNormalCup = await isRecorded.is_normal_cup;
              const isZeroCup = await isRecorded.is_zero_cup;
              const normalCupRecord = await contents.normal_cup_record;
              if (isRecorded && isNormalCup) {
                setCupRecordState({ isRecorded: true, isNormalCup: true, isZeroCup: false });
              } else if (isRecorded && isZeroCup) {
                setCupRecordState({ isRecorded: true, isNormalCup: false, isZeroCup: true });
              } else if (normalCupRecord.length > 0) {
                setNormalCups(normalCupRecord);
              }
            }
            break;
          }
        }
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "알 수 없는 오류",
          text2: `${error}로 인해 오류가 발생했습니다. 다시 시도해주세요.`
        });
      }
    };
    setCupRecordStatus();
  }, []);

  const handleAddZeroCupBtn = async () => {
    const timestamp = new Date();
    const [result, contents] = await endTodayZeroCupRecord(globalEmail, timestamp);
    try {
      switch (result) {
        case "succeed": {
          Toast.show({
            type: "info",
            text1: "오늘 0잔 기록 완료!"
          });
          break;
        }
        case "failed": {
          Toast.show({
            type: "error",
            text1: "서버와의 통신 실패",
            text2: `${contents}로 인해 서버와의 통신이 실패했습니다. 다시 시도해주세요.`
          });
          break;
        }
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
        cupRecordState={cupRecordState}
        normalCups={normalCups}
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
