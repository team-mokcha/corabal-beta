import React, { ReactElement } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { globalPurchaseModalState } from "@stores/stores";
import { TouchableOpacity, Image } from "react-native";
import styles from "./closeModal.style";

type CloseModalProps = {
  type: "callCat" | "goal";
};

const CloseModal = ({ type }: CloseModalProps): ReactElement => {
  const currentPurchaseModalState = HSUseState(globalPurchaseModalState).modalVisibility;

  function handleModalState() {
    switch (type) {
      case "callCat":
        currentPurchaseModalState.set(false);
        break;
      case "goal":
        console.log("set goal");
        break;
    }
  }

  return (
    <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.5} onPress={handleModalState}>
      <Image source={require("@assets/modal/btn_x.png")} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default CloseModal;
