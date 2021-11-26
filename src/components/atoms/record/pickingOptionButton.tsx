import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../../text/text";
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
            <>
              <PressedOptionIcon imageStyle={styles.optionImg} type="syrupPressed" />
              <Text weight="400">{PICKING_OPTION_TEXT.syrup}</Text>
            </>
          ) : (
            <>
              <PressedOptionIcon imageStyle={styles.optionImg} type="syrupUnPressed" />
              <Text weight="400" style={styles.unPickedOption}>
                {PICKING_OPTION_TEXT.syrup}
              </Text>
            </>
          )}
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
            <>
              <PressedOptionIcon imageStyle={styles.optionImg} type="creamPressed" />
              <Text weight="400">{PICKING_OPTION_TEXT.cream}</Text>
            </>
          ) : (
            <>
              <PressedOptionIcon imageStyle={styles.optionImg} type="creamUnPressed" />
              <Text weight="400" style={styles.unPickedOption}>
                {PICKING_OPTION_TEXT.cream}
              </Text>
            </>
          )}
        </TouchableOpacity>
      );
    }
  }
};

export default PickingOptionButton;
