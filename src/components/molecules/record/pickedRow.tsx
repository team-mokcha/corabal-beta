import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { ShotIcon, BaseIcon, OptionIcon } from "../../atoms/index";
import styles from "./pickedRow.style";

type PickedRowProps = {
  type: "todayRecords" | "previousRecords";
  shot: "oneActivated" | "twoActivated" | "threeActivated";
  base: "waterActivated" | "milkActivated";
  option: "syrupActivated" | "creamActivated" | "none";
};

const PickedRow = ({ type, shot, base, option }: PickedRowProps): ReactElement => {
  const marginStyle = {
    cupIcon: { marginLeft: 0 },
    coffeeTypeContainer: { marginRight: 0 },
    coffeeTypeItem: { marginRight: 0 }
  };

  switch (type) {
    case "todayRecords":
      marginStyle.cupIcon = { marginLeft: 12 };
      marginStyle.coffeeTypeContainer = { marginRight: 59 };
      marginStyle.coffeeTypeItem = { marginRight: 16 };
      break;
    case "previousRecords":
      marginStyle.cupIcon = { marginLeft: 30 };
      marginStyle.coffeeTypeContainer = { marginRight: 20 };
      marginStyle.coffeeTypeItem = { marginRight: 20 };
  }

  return (
    <>
      <View style={styles.rowContainer}>
        <Image
          source={require("@assets/record/icon_cup_basic_empty.png")}
          style={[styles.cupIcon, marginStyle.cupIcon]}
        />
        <View style={[styles.coffeeTypeContainer, marginStyle.coffeeTypeContainer]}>
          <View style={[styles.coffeeTypeItem, marginStyle.coffeeTypeItem]}>
            <ShotIcon imageStyle={styles.coffeeTypeIcon} type={shot} fontSize="small" />
          </View>
          <View style={[styles.coffeeTypeItem, marginStyle.coffeeTypeItem]}>
            <BaseIcon imageStyle={styles.coffeeTypeIcon} type={base} fontSize="small" />
          </View>
          <View style={[styles.coffeeTypeItem, marginStyle.coffeeTypeItem]}>
            <OptionIcon imageStyle={styles.coffeeTypeIcon} type={option} fontSize="small" />
          </View>
        </View>
        {type === "todayRecords" ? (
          <Image
            style={styles.deleteIcon}
            source={require("@assets/record/icon_delete_lightgrey.png")}
          />
        ) : null}
      </View>
    </>
  );
};

export default PickedRow;
