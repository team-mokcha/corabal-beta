import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, RightArrowIcon } from "@Components";
import styles from "./aim.styles";

const Aim = ({ setIsShowingGoal, globalGoal }: any) => {
  return (
    <TouchableOpacity
      style={styles.aimBtnContainer}
      activeOpacity={0.5}
      onPress={() => setIsShowingGoal(true)}
    >
      <Text style={styles.aim}>
        목표 <Text style={styles.pointFont}>1</Text>일{" "}
        <Text style={styles.pointFont}>{globalGoal.goal.get()}</Text>잔
      </Text>
      <RightArrowIcon style={styles.aimNextBtn} />
    </TouchableOpacity>
  );
};

export default Aim;
