import React, { ReactElement } from "react";
import { Text } from "@Components";
import { useState as HSUseState } from "@hookstate/core";
import { globalGoalState } from "@stores/stores";
import styles from "./goalADay.style";

const GOAL_TEXT = {
  goal: "목표",
  day: "일",
  cup: "잔"
};

const GoalADay = (): ReactElement => {
  const globalGoal = HSUseState(globalGoalState);

  return (
    <Text style={styles.aim}>
      {GOAL_TEXT.goal} <Text style={styles.aimStrong}>1</Text>
      {GOAL_TEXT.day} <Text style={styles.aimStrong}>{globalGoal.goal.get()}</Text>
      {GOAL_TEXT.cup}
    </Text>
  );
};

export default GoalADay;
