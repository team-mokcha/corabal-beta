import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { Text } from "@Components";
import PickingShotButton from "../../atoms/record/pickingShotButton";
import PickingBaseButton from "../../atoms/record/pickingBaseButton";
import PickingOptionButton from "../../atoms/record/pickingOptionButton";
import styles from "./pickingRow.style";

type PickingRowProps = { type: "shot" | "base" | "option" };

const pickingRow = ({ type }: PickingRowProps): ReactElement => {
  switch (type) {
    case "shot": {
      return (
        <View style={styles.eachOptionContainer}>
          <View style={styles.shotFontContainer}>
            <Text>샷</Text>
            <Image style={styles.shotIcon} source={require("@assets/shot-of-today.png")} />
          </View>
          <View style={styles.flexDirRow}>
            <PickingShotButton type="one" />
            <PickingShotButton type="two" />
            <PickingShotButton type="three" />
          </View>
        </View>
      );
    }
    case "base": {
      return (
        <View style={styles.eachOptionContainer}>
          <Text style={styles.baseTitle}>베이스</Text>
          <View style={styles.flexDirRow}>
            <PickingBaseButton type="water" />
            <PickingBaseButton type="milk" />
          </View>
        </View>
      );
    }
    case "option": {
      return (
        <View style={styles.eachOptionContainer}>
          <Text style={styles.elseTitle}>추가</Text>
          <View style={styles.flexDirRow}>
            <PickingOptionButton type="syrup" />
            <PickingOptionButton type="cream" />
          </View>
        </View>
      );
    }
  }
};

export default pickingRow;
