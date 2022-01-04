import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { Text } from "@Components";
import styles from "./aim.styles";

const AIM_TEXT = {
  goal: "목표",
  day: "일",
  dayCriteria: 1,
  cup: "잔"
};

const Aim = ({ setIsShowingGoal, globalGoal }: any) => {
  return (
    <TouchableOpacity
      style={styles.aimBtnContainer}
      activeOpacity={0.5}
      onPress={() => setIsShowingGoal(true)}
    >
      <Text style={styles.aim} weight="500">
        {AIM_TEXT.goal}
        {` `}
        <Text style={styles.pointFont} weight="700">
          {AIM_TEXT.dayCriteria}
        </Text>
        {AIM_TEXT.day}
        <Text style={styles.pointFont} weight="700">
          {` `}
          {globalGoal.goal.get()}
        </Text>
        {AIM_TEXT.cup}
      </Text>
      <Image style={styles.aimNextBtn} source={require("@assets/main/btn_next.png")} />
    </TouchableOpacity>
  );
};

export default Aim;
