import React, { ReactElement } from "react";
import { View } from "react-native";
import { CupIcon, DeleteIcon, ShotIcon, BaseIcon, OptionIcon } from "../../atoms/index";
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
        <CupIcon imageStyle={styles.cupIcon} />
        <View style={styles.coffeeTypeContainer}>
          <View style={styles.coffeeTypeItem}>
            <ShotIcon imageStyle={styles.coffeeTypeIcon} type={shot} />
          </View>
          <View style={styles.coffeeTypeItem}>
            <BaseIcon imageStyle={styles.coffeeTypeIcon} type={base} />
          </View>
          <View style={styles.coffeeTypeItem}>
            <OptionIcon imageStyle={styles.coffeeTypeIcon} type={option} />
          </View>
        </View>
        <DeleteIcon />
      </View>
    </>
  );
};

export default PickedRow;
