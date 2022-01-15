import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import BaseIcon from "../icons/record/baseIcon";
import { useState as HSUseState } from "@hookstate/core";
import { globalCoffeePickState } from "@stores/stores";
import styles from "./pickingButton.style";

type pickingBaseButtonProps = {
  type: "water" | "milk";
};

const PickingBaseButton = ({ type }: pickingBaseButtonProps): ReactElement => {
  const globalBaseState = HSUseState(globalCoffeePickState).base;

  function setGlobalBase(base: "water" | "milk") {
    globalBaseState.set(base);
  }

  switch (type) {
    case "water": {
      return (
        <TouchableOpacity style={styles.optionAlign} onPress={() => setGlobalBase("water")}>
          {globalBaseState.get() === "water" ? (
            <BaseIcon imageStyle={styles.optionImg} type="waterActivated" fontSize="medium" />
          ) : (
            <BaseIcon imageStyle={styles.optionImg} type="waterDeactivated" fontSize="medium" />
          )}
        </TouchableOpacity>
      );
    }
    case "milk": {
      return (
        <TouchableOpacity style={styles.optionAlign} onPress={() => setGlobalBase("milk")}>
          {globalBaseState.get() === "milk" ? (
            <BaseIcon imageStyle={styles.optionImg} type="milkActivated" fontSize="medium" />
          ) : (
            <BaseIcon imageStyle={styles.optionImg} type="milkDeactivated" fontSize="medium" />
          )}
        </TouchableOpacity>
      );
    }
  }
};

export default PickingBaseButton;
