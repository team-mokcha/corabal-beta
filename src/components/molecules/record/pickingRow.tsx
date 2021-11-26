import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { Text } from "@Components";
import PickingShotButton from "../../atoms/record/pickingShotButton";
import PickingBaseButton from "../../atoms/record/pickingBaseButton";
import PickingOptionButton from "../../atoms/record/pickingOptionButton";
import styles from "./pickingRow.style";

const ROW_TEXT = {
  shot: "샷",
  base: "베이스",
  option: "추가"
};

type PickingRowProps = { type: "shot" | "base" | "option" };

const pickingRow = ({ type }: PickingRowProps): ReactElement => {
  switch (type) {
    case "shot": {
      return (
        <View style={styles.eachOptionContainer}>
          <View style={styles.shotFontContainer}>
            <Text>{ROW_TEXT.shot}</Text>
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
          <Text style={styles.baseTitle}>{ROW_TEXT.base}</Text>
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
          <Text style={styles.elseTitle}>{ROW_TEXT.option}</Text>
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
