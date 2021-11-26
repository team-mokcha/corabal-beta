import React, { ReactElement } from "react";
import { TouchableOpacity, Text } from "react-native";
import PressedShotIcon from "../icons/pressedShotIcon";
import { useState as HSUseState } from "@hookstate/core";
import { globalCoffeePickState } from "@stores/stores";
import styles from "./pickingButton.style";

type pickingShotButtonProps = {
  type: "one" | "two" | "three";
};

const PickingShotButton = ({ type }: pickingShotButtonProps): ReactElement => {
  const globalShotState = HSUseState(globalCoffeePickState).shot;

  switch (type) {
    case "one": {
      return (
        <TouchableOpacity
          style={styles.optionAlign}
          onPress={() => {
            globalShotState.set(1);
          }}
        >
          {globalShotState.get() === 1 ? (
            <PressedShotIcon type="onePressed" />
          ) : (
            <PressedShotIcon type="unPressed" />
          )}
          <Text>1샷</Text>
        </TouchableOpacity>
      );
    }
    case "two": {
      return (
        <TouchableOpacity
          style={styles.optionAlign}
          onPress={() => {
            globalShotState.set(2);
          }}
        >
          {globalShotState.get() === 2 ? (
            <PressedShotIcon type="twoPressed" />
          ) : (
            <PressedShotIcon type="unPressed" />
          )}
          <Text>2샷</Text>
        </TouchableOpacity>
      );
    }
    case "three": {
      return (
        <TouchableOpacity
          style={styles.optionAlign}
          onPress={() => {
            globalShotState.set(3);
          }}
        >
          {globalShotState.get() === 3 ? (
            <PressedShotIcon type="threePressed" />
          ) : (
            <PressedShotIcon type="unPressed" />
          )}
          <Text>3샷</Text>
        </TouchableOpacity>
      );
    }
  }
};

export default PickingShotButton;
