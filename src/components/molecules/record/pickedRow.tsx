import React, { ReactElement } from "react";
import { View } from "react-native";
import {
  Text,
  CupIcon,
  DeleteIcon,
  PressedShotIcon,
  PressedBaseIcon,
  PressedOptionIcon
} from "../../atoms/index";
import styles from "./pickedRow.style";

const ROW_TEXT = {
  shot: "샷",
  water: "물",
  milk: "우유",
  syrup: "시럽",
  cream: "크림"
};

type PickingRowProps = {
  shot: 1 | 2 | 3;
  base: "water" | "milk";
  option: "syrup" | "cream" | "none";
};

const PickedRow = ({ shot, base, option }: PickingRowProps): ReactElement => {
  const ShotIcon = () => {
    switch (shot) {
      case 1:
        return <PressedShotIcon type="onePressed" imageStyle={styles.pickedIcon} />;
      case 2:
        return <PressedShotIcon type="twoPressed" imageStyle={styles.pickedIcon} />;
      case 3:
        return <PressedShotIcon type="threePressed" imageStyle={styles.pickedIcon} />;
    }
  };

  const BaseIcon = () => {
    switch (base) {
      case "water":
        return (
          <>
            <PressedBaseIcon type="milkPressed" imageStyle={styles.pickedIcon} />
            <Text>{ROW_TEXT.water}</Text>
          </>
        );
      case "milk":
        return (
          <>
            <PressedBaseIcon type="waterPressed" imageStyle={styles.pickedIcon} />
            <Text>{ROW_TEXT.milk}</Text>
          </>
        );
    }
  };

  const OptionIcon = () => {
    switch (option) {
      case "syrup":
        return (
          <>
            <PressedOptionIcon type="syrupPressed" imageStyle={styles.pickedIcon} />
            <Text>{ROW_TEXT.syrup}</Text>
          </>
        );
      case "cream":
        return (
          <>
            <PressedOptionIcon type="creamPressed" imageStyle={styles.pickedIcon} />
            <Text>{ROW_TEXT.cream}</Text>
          </>
        );
      case "none":
        return null;
    }
  };

  return (
    <View>
      <CupIcon imageStyle={styles.cupIcon} />
      <ShotIcon />
      <Text>
        {shot} {ROW_TEXT.shot}
      </Text>
      <BaseIcon />
      <OptionIcon />
      <DeleteIcon />
    </View>
  );
};

export default PickedRow;
