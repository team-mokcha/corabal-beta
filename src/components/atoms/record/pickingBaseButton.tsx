import React, { ReactElement } from "react";
import { TouchableOpacity, Text } from "react-native";
import PressedBaseIcon from "../icons/pressedBaseIcon";
import { useState as HSUseState } from "@hookstate/core";
import { globalCoffeePickState } from "@stores/stores";
import styles from "./pickingButton.style";

const PICKING_BASE_TEXT = {
  water: "물",
  milk: "우유"
};

type pickingBaseButtonProps = {
  type: "water" | "milk";
};

const PickingBaseButton = ({ type }: pickingBaseButtonProps): ReactElement => {
  const globalBaseState = HSUseState(globalCoffeePickState).base;

  switch (type) {
    case "water": {
      return (
        <TouchableOpacity
          style={styles.optionAlign}
          onPress={() => {
            globalBaseState.set("water");
          }}
        >
          {globalBaseState.get() === "water" ? (
            <PressedBaseIcon imageStyle={styles.optionImg} type="waterPressed" />
          ) : (
            <PressedBaseIcon imageStyle={styles.optionImg} type="unPressed" />
          )}
          <Text>{PICKING_BASE_TEXT.water}</Text>
        </TouchableOpacity>
      );
    }
    case "milk": {
      return (
        <TouchableOpacity
          style={styles.optionAlign}
          onPress={() => {
            globalBaseState.set("milk");
          }}
        >
          {globalBaseState.get() === "milk" ? (
            <PressedBaseIcon imageStyle={styles.optionImg} type="milkPressed" />
          ) : (
            <PressedBaseIcon imageStyle={styles.optionImg} type="unPressed" />
          )}
          <Text>{PICKING_BASE_TEXT.milk}</Text>
        </TouchableOpacity>
      );
    }
  }
};

export default PickingBaseButton;
