import React, { ReactElement } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../navigator/index";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState, globalCoffeePickState } from "@stores/stores";
import { addNormalCupLog } from "@services/functions/handle-coffee-log";
import Template from "./template/index";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Record">;
};

const Record = ({ navigation }: NavigationProps): ReactElement => {
  // 2021.11.26 - 아래 unsubscribe는 수연이 리팩 시 살펴보고 바꾸기로.
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
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

  // 데이터 추가하는 함수 작성 후, props로 넘겨주기
  // 1) email, shot, base, option(처리 필요), timestamp 생성
  // 2) addNomalCupRecord 불러온 후 에러 처리 > 알럿 띄워주기
  const handleAddNormalCupBtn = async () => {
    const timestamp = new Date();
    const [result, contents] = await addNormalCupLog(
      userEmail,
      pickedShot,
      pickedBase,
      pickedOption,
      timestamp
    );

    switch (result) {
      case "succeed":
        {
          console.log("Data was added successfully", contents);
        }
        break;
      case "failed":
        {
          console.log("An error occurred", contents);
        }
        break;
    }
  };

  return <Template handleAddNormalCupBtn={handleAddNormalCupBtn} />;
};

export default Record;
