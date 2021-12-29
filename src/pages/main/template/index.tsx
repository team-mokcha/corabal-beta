import React, { ReactElement } from "react";
import { ScrollView } from "react-native";
import { Status, Today, Month } from "../../../components/organisms";
import { FloatingButton, Banner } from "../../../components/molecules";
import { MainHeader } from "@Components";
import { Divider } from "react-native-elements";
import styles from "./main.style";

export default function Template({
  navigation,
  cupRecordState,
  normalCups,
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
        <Today
          cupRecordState={cupRecordState}
          normalCups={normalCups}
          handleAddZeroCupBtn={handleAddZeroCupBtn}
        />
        <Divider orientation="horizontal" width={12} color="#EEEEEE" />
        <Month month={month} totalCups={totalCups} />
        <Banner style={styles.bannerContainer} />
      </ScrollView>
    </>
  );
}
