import React, { ReactElement } from "react";
import { TouchableOpacity, Text } from "react-native";
import PressedOptionIcon from "../icons/pressedOptionIcon";
import { useState as HSUseState } from "@hookstate/core";
import { globalCoffeePickState } from "@stores/stores";
import styles from "./pickingButton.style";

const PICKING_OPTION_TEXT = {
  syrup: "시럽",
  cream: "크림"
};

type pickingOptionButtonProps = {
  type: "syrup" | "cream";
};

const PickingOptionButton = ({ type }: pickingOptionButtonProps): ReactElement => {
  const globalOptionState = HSUseState(globalCoffeePickState).option;

  switch (type) {
    case "syrup": {
      return (
        <TouchableOpacity
          style={styles.optionAlign}
          onPress={() => {
            globalOptionState.set("syrup");
          }}
        >
          {globalOptionState.get() === "syrup" ? (
            <PressedOptionIcon type="syrupPressed" />
          ) : (
            <PressedOptionIcon type="syrupUnPressed" />
          )}
          <Text>{PICKING_OPTION_TEXT.syrup}</Text>
        </TouchableOpacity>
      );
    }
    case "cream": {
      return (
        <TouchableOpacity
          style={styles.optionAlign}
          onPress={() => {
            globalOptionState.set("cream");
          }}
        >
          {globalOptionState.get() === "cream" ? (
            <PressedOptionIcon type="creamPressed" />
          ) : (
            <PressedOptionIcon type="creamUnPressed" />
          )}
          <Text>{PICKING_OPTION_TEXT.cream}</Text>
        </TouchableOpacity>
      );
    }
  }
};

export default PickingOptionButton;
