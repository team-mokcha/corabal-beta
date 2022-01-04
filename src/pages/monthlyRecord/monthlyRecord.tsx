import React, { ReactElement, useState } from "react";
import { View, Button } from "react-native";
import { firebaseApp } from "@services/firebaseApp";
import { getTodayCupLogs } from "@services/functions/handle-coffee-log";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState } from "@stores/stores";
import { Calendar, RecordList } from "@Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../navigator/index";
import { styles } from "./monthlyRecord.styles";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "MonthlyRecord">;
};

// Props로 넘겨줘야 하는 부분
// 전역에서 객체 생성하면 prop로 넘겨줄 필요는 없을 지도
// 1) Date 가져오기.
// > Date에 날짜와 요일이 함께 있어야 하네...?
// > 커피 잔 수 가져오기

export default function MonthlyRecord({ navigation }: NavigationProps): ReactElement {
  const currentUserState = HSUseState(globalUserState);
  const userEmail = currentUserState.userEmail.get();

  return (
    <View style={styles.container}>
      <Calendar />
      <View style={styles.recordBackground}>
        <View style={styles.recordContainer}>
          <RecordList />
        </View>
      </View>
    </View>
  );
}
