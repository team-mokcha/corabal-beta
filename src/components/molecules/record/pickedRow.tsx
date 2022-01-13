import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { ShotIcon, BaseIcon, OptionIcon } from "../../atoms/index";
import styles from "./pickedRow.style";

type PickedRowProps = {
  shot: "oneActivated" | "twoActivated" | "threeActivated";
  base: "waterActivated" | "milkActivated";
  option: "syrupActivated" | "creamActivated" | "none";
};

const PickedRow = ({ shot, base, option }: PickedRowProps): ReactElement => {
  return (
    <>
      <View style={styles.rowContainer}>
        <Image source={require("@assets/record/icon_cup_basic_empty.png")} style={styles.cupIcon} />
        <View style={styles.coffeeTypeContainer}>
          <View style={styles.coffeeTypeItem}>
            <ShotIcon imageStyle={styles.coffeeTypeIcon} type={shot} fontSize="small" />
          </View>
          <View style={styles.coffeeTypeItem}>
            <BaseIcon imageStyle={styles.coffeeTypeIcon} type={base} fontSize="small" />
          </View>
          <View style={styles.coffeeTypeItem}>
            <OptionIcon imageStyle={styles.coffeeTypeIcon} type={option} fontSize="small" />
          </View>
        </View>
        <Image source={require("@assets/record/icon_delete_lightgrey.png")} />
      </View>
    </>
  );
};

export default PickedRow;
