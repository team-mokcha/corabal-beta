import React from "react";
import { View, Image } from "react-native";
import { Aim, Point, RecordsOfMonth } from "@Components";
import Text from "../../text/text";
import { Goal } from "@pages";
import * as Progress from "react-native-progress";
import styles from "./status.styles";

const Status = ({ isShowingGoal, setIsShowingGoal, globalGoal, globalPoint }: any) => {
  return (
    <View style={styles.aimContainer}>
      <Aim setIsShowingGoal={setIsShowingGoal} globalGoal={globalGoal} />
      <Goal isShowingGoal={isShowingGoal} setIsShowingGoal={setIsShowingGoal} />
      <View style={styles.mainContainer}>
        <Image style={styles.mainCatImg} source={require("@assets/main-cat.png")} />
        <View style={{ flex: 1 }}>
          <RecordsOfMonth />
          <Point globalPoint={globalPoint} />
        </View>
      </View>
    </View>
  );
};

export default Status;
