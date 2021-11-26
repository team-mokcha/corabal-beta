import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../text/text";
import PressedShotIcon from "../icons/pressedShotIcon";
import { useState as HSUseState } from "@hookstate/core";
import { globalCoffeePickState } from "@stores/stores";
import styles from "./pickingButton.style";

const PICKING_SHOT_TEXT = {
  one: "1샷",
  two: "2샷",
  three: "3샷"
};

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
            <>
              <PressedShotIcon imageStyle={styles.optionImg} type="onePressed" />
              <Text weight="400">{PICKING_SHOT_TEXT.one}</Text>
            </>
          ) : (
            <>
              <PressedShotIcon imageStyle={styles.optionImg} type="unPressed" />
              <Text weight="400" style={styles.unPickedOption}>
                {PICKING_SHOT_TEXT.one}
              </Text>
            </>
          )}
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
            <>
              <PressedShotIcon imageStyle={styles.optionImg} type="twoPressed" />
              <Text weight="400">{PICKING_SHOT_TEXT.two}</Text>
            </>
          ) : (
            <>
              <PressedShotIcon imageStyle={styles.optionImg} type="unPressed" />
              <Text weight="400" style={styles.unPickedOption}>
                {PICKING_SHOT_TEXT.two}
              </Text>
            </>
          )}
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
            <>
              <PressedShotIcon imageStyle={styles.optionImg} type="threePressed" />
              <Text weight="400">{PICKING_SHOT_TEXT.three}</Text>
            </>
          ) : (
            <>
              <PressedShotIcon imageStyle={styles.optionImg} type="unPressed" />
              <Text weight="400" style={styles.unPickedOption}>
                {PICKING_SHOT_TEXT.three}
              </Text>
            </>
          )}
        </TouchableOpacity>
      );
    }
  }
};

export default PickingShotButton;
