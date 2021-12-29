import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import ShotIcon from "../icons/record/shotIcon";
import { useState as HSUseState } from "@hookstate/core";
import { globalCoffeePickState } from "@stores/stores";
import styles from "./pickingButton.style";

type pickingShotButtonProps = {
  type: "one" | "two" | "three";
};

const PickingShotButton = ({ type }: pickingShotButtonProps): ReactElement => {
  const globalShotState = HSUseState(globalCoffeePickState).shot;

  function setGlobalShotState(shot: 1 | 2 | 3) {
    globalShotState.set(shot);
  }

  switch (type) {
    case "one": {
      return (
        <TouchableOpacity style={styles.optionAlign} onPress={() => setGlobalShotState(1)}>
          {globalShotState.get() === 1 ? (
            <ShotIcon imageStyle={styles.optionImg} type="oneActivated" />
          ) : (
            <ShotIcon imageStyle={styles.optionImg} type="oneDeactivated" />
          )}
        </TouchableOpacity>
      );
    }
    case "two": {
      return (
        <TouchableOpacity style={styles.optionAlign} onPress={() => setGlobalShotState(2)}>
          {globalShotState.get() === 2 ? (
            <ShotIcon imageStyle={styles.optionImg} type="twoActivated" />
          ) : (
            <ShotIcon imageStyle={styles.optionImg} type="twoDeactivated" />
          )}
        </TouchableOpacity>
      );
    }
    case "three": {
      return (
        <TouchableOpacity style={styles.optionAlign} onPress={() => setGlobalShotState(3)}>
          {globalShotState.get() === 3 ? (
            <ShotIcon imageStyle={styles.optionImg} type="threeActivated" />
          ) : (
            <ShotIcon imageStyle={styles.optionImg} type="threeDeactivated" />
          )}
        </TouchableOpacity>
      );
    }
  }
};

export default PickingShotButton;
