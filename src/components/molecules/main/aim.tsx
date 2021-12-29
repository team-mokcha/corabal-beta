import React from "react";
import { TouchableOpacity } from "react-native";
import { RightArrowIcon } from "../../atoms/index";
import { Text } from "@Components";
import styles from "./aim.styles";

const AIM_TEXT = {
  goal: "목표",
  day: "일",
  cup: "잔"
};

const Aim = ({ setIsShowingGoal, globalGoal }: any) => {
  return (
    <TouchableOpacity
      style={styles.aimBtnContainer}
      activeOpacity={0.5}
      onPress={() => setIsShowingGoal(true)}
    >
      <Text style={styles.aim}>
        {AIM_TEXT.goal} <Text style={styles.pointFont}>1</Text>
        {AIM_TEXT.day}
        <Text style={styles.pointFont}>{globalGoal.goal.get()}</Text>
        {AIM_TEXT.cup}
      </Text>
      <RightArrowIcon style={styles.aimNextBtn} />
    </TouchableOpacity>
  );
};

export default Aim;
