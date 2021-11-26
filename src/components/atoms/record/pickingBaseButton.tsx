import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../text/text";
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
            <>
              <PressedBaseIcon imageStyle={styles.optionImg} type="waterPressed" />
              <Text weight="400">{PICKING_BASE_TEXT.water}</Text>
            </>
          ) : (
            <>
              <PressedBaseIcon imageStyle={styles.optionImg} type="unPressed" />
              <Text weight="400" style={styles.unPickedOption}>
                {PICKING_BASE_TEXT.water}
              </Text>
            </>
          )}
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
            <>
              <PressedBaseIcon imageStyle={styles.optionImg} type="milkPressed" />
              <Text weight="400">{PICKING_BASE_TEXT.milk}</Text>
            </>
          ) : (
            <>
              <PressedBaseIcon imageStyle={styles.optionImg} type="unPressed" />
              <Text weight="400" style={styles.unPickedOption}>
                {PICKING_BASE_TEXT.milk}
              </Text>
            </>
          )}
        </TouchableOpacity>
      );
    }
  }
};

export default PickingBaseButton;
