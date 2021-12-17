import React, { ReactElement } from "react";
import { ScrollView } from "react-native";
import { Status, Today, Month } from "../../../components/organisms";
import { FloatingButton, Banner } from "../../../components/molecules";
import { MainHeader } from "@Components";
// Divider -> atoms로 바꾸기, button gradient에 안 쓰면 라이브러리 삭제
import { Divider } from "react-native-elements";

export default function Template({
  navigation,
  cupRecordState,
  handleAddZeroCupBtn,
  isShowingGoal,
  setIsShowingGoal,
  globalPoint,
  globalEmail,
  globalGoal,
  month,
  totalCups,
  daysOfSuccess,
  daysOfRecords,
  daysOfMonth
}: any): ReactElement {
  return (
    <>
      <MainHeader />
      <FloatingButton navigation={navigation} />
      <ScrollView>
        <Status
          isShowingGoal={isShowingGoal}
          setIsShowingGoal={setIsShowingGoal}
          globalGoal={globalGoal}
          globalPoint={globalPoint}
          daysOfSuccess={daysOfSuccess}
          daysOfRecords={daysOfRecords}
          daysOfMonth={daysOfMonth}
        />
        <Divider orientation="horizontal" width={12} color="#EEEEEE" />
        <Today cupRecordState={cupRecordState} handleAddZeroCupBtn={handleAddZeroCupBtn} />
        <Divider orientation="horizontal" width={12} color="#EEEEEE" />
        <Month month={month} totalCups={totalCups} />
        <Banner />
      </ScrollView>
    </>
  );
}
