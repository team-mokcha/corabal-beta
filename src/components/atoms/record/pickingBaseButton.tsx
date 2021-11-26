import React, { ReactElement } from "react";
import { TouchableOpacity, Text } from "react-native";
import PressedBaseIcon from "../icons/pressedBaseIcon";
import { useState as HSUseState } from "@hookstate/core";
import { globalCoffeePickState } from "@stores/stores";
import styles from "./pickingButton.style";

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
            <PressedBaseIcon type="waterPressed" />
          ) : (
            <PressedBaseIcon type="unPressed" />
          )}
          <Text>물</Text>
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
            <PressedBaseIcon type="milkPressed" />
          ) : (
            <PressedBaseIcon type="unPressed" />
          )}
          <Text>우유</Text>
        </TouchableOpacity>
      );
    }
  }
};

export default PickingBaseButton;
