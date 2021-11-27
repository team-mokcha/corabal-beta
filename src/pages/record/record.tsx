import React, { ReactElement, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../navigator/index";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState, globalCoffeePickState } from "@stores/stores";
import { addNormalCupLog } from "@services/functions/handle-coffee-log";
import Toast from "react-native-toast-message";
import Template from "./template/index";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Record">;
};

const Record = ({ navigation }: NavigationProps): ReactElement => {
  // 2021.11.26 - 아래 unsubscribe는 수연이 리팩 시 살펴보고 바꾸기로
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     //
  //   });
  //   return unsubscribe;
  // }, []);

  const userEmail = HSUseState(globalUserState).userEmail.get();
  const pickedShot = HSUseState(globalCoffeePickState).shot.get();
  const pickedBase = HSUseState(globalCoffeePickState).base.get();
  const currentOptionState = HSUseState(globalCoffeePickState).option.get();
  let pickedOption = [""];
  if (currentOptionState.syrup && currentOptionState.cream) {
    pickedOption = ["syrup", "cream"];
  } else if (currentOptionState.syrup) {
    pickedOption = ["syrup"];
  } else if (currentOptionState.cream) {
    pickedOption = ["cream"];
  } else {
    pickedOption = [];
  }

  const handleAddNormalCupBtn = async () => {
    const timestamp = new Date();
    const [result, contents] = await addNormalCupLog(
      userEmail,
      pickedShot,
      pickedBase,
      pickedOption,
      timestamp
    );

    try {
      if (result === "succeed") {
        Toast.show({
          type: "info",
          text1: "커피 기록 저장 완료!"
        });
        navigation.navigate("Index"); // 네비게이션 미작동 원인 알아보기
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

  return <Template handleAddNormalCupBtn={handleAddNormalCupBtn} />;
};

export default Record;
