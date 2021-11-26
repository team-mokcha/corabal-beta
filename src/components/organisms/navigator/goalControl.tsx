import React, { ReactElement, Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import { GoalADay, GoalSetting } from "../../molecules/index";
import styles from "./goalControl.style";

type GoalControlParams = {
  isShowingGoal: boolean;
  setIsShowingGoal: Dispatch<SetStateAction<boolean>>;
};

const GoalControl = ({ isShowingGoal, setIsShowingGoal }: GoalControlParams): ReactElement => {
  return (
    <View style={styles.aimContainer}>
      <GoalADay />
      <GoalSetting isShowingGoal={isShowingGoal} setIsShowingGoal={setIsShowingGoal} />
    </View>
  );
};

export default GoalControl;
