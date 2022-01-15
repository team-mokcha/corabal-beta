import React, { ReactElement } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { globalPurchaseModalState } from "@stores/stores";
import { View } from "react-native";
import { ButtonNormal, ButtonGradient } from "../../atoms/index";
import styles from "./buttonArea.style";

type ButtonAreaProps = {
  //   handleButtonNormal: (() => void) | void;
  handleButtonGradient: () => void;
  buttonNormalText: string;
  buttonGradientText: string;
};

const ButtonArea = ({
  //   handleButtonNormal,
  handleButtonGradient,
  buttonNormalText,
  buttonGradientText
}: ButtonAreaProps): ReactElement => {
  const modalState = HSUseState(globalPurchaseModalState);
  function closeModal() {
    modalState.modalVisibility.set(false);
  }
  return (
    <View style={styles.buttonWrapper}>
      <ButtonNormal
        onPress={closeModal}
        style={[styles.button, { marginRight: 8 }]}
        title={buttonNormalText}
      />
      <ButtonGradient
        onPress={() => {
          handleButtonGradient;
        }}
        style={styles.button}
        title={buttonGradientText}
      />
    </View>
  );
};

export default ButtonArea;
