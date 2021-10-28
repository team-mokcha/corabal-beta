import React, { ReactElement } from "react";
import { ScrollView } from "react-native";
import { MainHeader, Status, Today, Month, FloatingButton, Banner } from "@Components";
// Divider -> atoms로 바꾸기, button gradient에 안 쓰면 라이브러리 삭제
import { Divider } from "react-native-elements";

export default function Template({
  navigation,
  isEmpty,
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
        <Today isEmpty={isEmpty} />
        <Divider orientation="horizontal" width={12} color="#EEEEEE" />
        <Month month={month} totalCups={totalCups} />
        <Banner />
      </ScrollView>
    </>
  );
}
