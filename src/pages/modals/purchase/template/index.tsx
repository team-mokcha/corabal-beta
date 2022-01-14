import React, { ReactElement } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { globalPurchaseModalState } from "@stores/stores";
import { View, Image } from "react-native";
import { Modal } from "../../../../components/organisms";
import CupContainer from "../../../../components/molecules/cup/cupContainer";
import ConfirmMessage from "../../../../components/molecules/purchase/confirmMessage";
import MyPoints from "../../../../components/molecules/purchase/myPoints";
import ButtonArea from "../../../../components/molecules/purchase/buttonArea";
import styles from "./purchase.style";

type PurchaseModalProps = {
  type: "callCat" | "purchaseCup";
  callCatText?: Record<string, string>;
  buyCupText?: Record<string, string>;
  boughtCupText?: Record<string, string>;
};

const Template = ({
  type,
  callCatText,
  buyCupText,
  boughtCupText
}: PurchaseModalProps): ReactElement => {
  const currentModalState = HSUseState(globalPurchaseModalState).modalVisibility.get();
  return (
    <Modal isVisible={currentModalState}>
      <Modal.Container edgeStyle="square">
        <Modal.Body>
          <View style={styles.bodyWrapper}>
            {type === "callCat" ? (
              <Image source={require("@assets/common/cat-in-the-cup.png")} />
            ) : (
              <CupContainer
                type="modal"
                thumbnail={require("@assets/cups/cup1.png")}
                thumbnailSize="small"
                price={30}
              />
            )}
            {buyCupText && (
              <>
                <ConfirmMessage text={buyCupText && buyCupText.confirmPurchaseMessage} />
                <MyPoints text={buyCupText && buyCupText.myPoint} points={551} />
              </>
            )}
          </View>
        </Modal.Body>
        <Modal.Footer>
          {buyCupText && (
            <ButtonArea
              // handleButtonNormal={closeModal}
              handleButtonGradient={() => console.log("button normal")}
              buttonNormalText={buyCupText.cancel}
              buttonGradientText={buyCupText.purchase}
            />
          )}
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default Template;
