import React, { useEffect, ReactElement } from "react";
import styles from "./record.style";
import { View, Image } from "react-native";
import { ButtonGradient, Header } from "@Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../navigator/index";
import { DateText } from "../../components/atoms/index";
import { PickingContainer } from "../../components/organisms/index";

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

  return (
    <>
      <View style={styles.container}>
        <Header back={false} close={true} />
        <DateText type="present" />
        <Image style={styles.cupImage} source={require("@assets/cup-of-today.png")} />
        {/* total option container */}
        <View style={styles.totalPickingContainer}>
          <PickingContainer />
        </View>
        {/* 11월 셋째 주 스프린트 [11/5 - 11/21] #44 댓글 참고 - 21.11.18 수연 */}
        <ButtonGradient style={{ marginBottom: "auto", maxHeight: 48 }} title="완료" />
      </View>
    </>
  );
};

export default Record;
