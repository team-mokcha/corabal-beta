import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import OptionIcon from "../icons/record/optionIcon";
import { useState as HSUseState } from "@hookstate/core";
import { globalCoffeePickState } from "@stores/stores";
import styles from "./pickingButton.style";

type pickingOptionButtonProps = {
  type: "syrup" | "cream";
};

const PickingOptionButton = ({ type }: pickingOptionButtonProps): ReactElement => {
  const globalOptionState = HSUseState(globalCoffeePickState).option;
  const globalSyrupState = globalOptionState.get().syrup;
  const globalCreamState = globalOptionState.get().cream;

  switch (type) {
    case "syrup": {
      return (
        <TouchableOpacity
          style={styles.optionAlign}
          onPress={() => {
            globalOptionState.syrup.set(!globalSyrupState);
          }}
        >
          {globalSyrupState ? (
            <OptionIcon imageStyle={styles.optionImg} type="syrupActivated" fontSize="medium" />
          ) : (
            <OptionIcon imageStyle={styles.optionImg} type="syrupDeactivated" fontSize="medium" />
          )}
        </TouchableOpacity>
      );
    }
    case "cream": {
      return (
        <TouchableOpacity
          style={styles.optionAlign}
          onPress={() => {
            globalOptionState.cream.set(!globalCreamState);
          }}
        >
          {globalCreamState ? (
            <OptionIcon imageStyle={styles.optionImg} type="creamActivated" fontSize="medium" />
          ) : (
            <OptionIcon imageStyle={styles.optionImg} type="creamDeactivated" fontSize="medium" />
          )}
        </TouchableOpacity>
      );
    }
  }
};

export default PickingOptionButton;
