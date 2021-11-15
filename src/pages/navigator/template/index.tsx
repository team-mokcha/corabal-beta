import React, { useState, ReactElement } from "react";
import { DrawerContentScrollView, DrawerContentComponentProps } from "@react-navigation/drawer";
import { Text } from "@Components";
import styles from "./navigator.style";
import { GoalControl, CupControl, LinkControl } from "../../../components/organisms/index";

function Template(props: DrawerContentComponentProps): ReactElement {
  const [isShowingGoal, setIsShowingGoal] = useState(false);

  // DrawerContentScrollView -> 스크롤 불가능한 뷰로 바꾸기
  // DrawerContentScrollView 말고 뷰가 없다! 테스트 해봤으나 다 스크롤러블임
  return (
    <DrawerContentScrollView {...props}>
      <GoalControl isShowingGoal={isShowingGoal} setIsShowingGoal={setIsShowingGoal} />
      <CupControl {...props} />
      <LinkControl />
      <Text style={styles.version}>v1.0.0</Text>
    </DrawerContentScrollView>
  );
}

export default Template;
