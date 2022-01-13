import React, { Dispatch, SetStateAction, ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "@Components";
import styles from "./goalSetting.style";
import Goal from "../../../pages/modals/setGoalModal/setGoalModal";

type GoalControlParams = {
  isShowingGoal: boolean;
  setIsShowingGoal: Dispatch<SetStateAction<boolean>>;
};

const GOAL_TEXT = {
  setting: "목표 설정 >"
};

const GoalSetting = ({ isShowingGoal, setIsShowingGoal }: GoalControlParams): ReactElement => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.5} onPress={() => setIsShowingGoal(true)}>
        <Text weight="400" style={styles.aimSetting}>
          {GOAL_TEXT.setting}
        </Text>
      </TouchableOpacity>
      <Goal isShowingGoal={isShowingGoal} setIsShowingGoal={setIsShowingGoal} />
    </>
  );
};

export default GoalSetting;
