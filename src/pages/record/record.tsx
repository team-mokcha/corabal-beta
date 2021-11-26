import React, { useEffect, ReactElement } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../navigator/index";
import Template from "./template/index";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Record">;
};

const Record = ({ navigation }: NavigationProps): ReactElement => {
  // 화면 나갔다가 들어올 때마다 초기화 > 전역을 초기화? 밑의 상태는 바뀌어야 함
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     setOneShot(false);
  //     setTwoShot(true);
  //     setThreeShot(false);
  //     setWater(true);
  //     setMilk(false);
  //     setSyrup(false);
  //     setCream(false);
  //   });

  //   return unsubscribe;
  // }, []);

  return <Template />;
};

export default Record;
