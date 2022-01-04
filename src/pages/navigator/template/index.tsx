import React, { useState, ReactElement } from "react";
import { DrawerContentScrollView, DrawerContentComponentProps } from "@react-navigation/drawer";
import { Text } from "@Components";
import styles from "./navigator.style";
import { GoalControl, CupControl, LinkControl } from "../../../components/organisms/index";

const VERSION_TEXT = {
  zero: "v1.0.0"
};

function Template(props: DrawerContentComponentProps): ReactElement {
  const [isShowingGoal, setIsShowingGoal] = useState(false);
  return (
    <DrawerContentScrollView {...props}>
      <GoalControl isShowingGoal={isShowingGoal} setIsShowingGoal={setIsShowingGoal} />
      <CupControl {...props} />
      <LinkControl />
      <Text weight="400" style={styles.version}>
        {VERSION_TEXT.zero}
      </Text>
    </DrawerContentScrollView>
  );
}

export default Template;
