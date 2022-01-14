import React, { ReactElement } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { globalPurchaseModalState } from "@stores/stores";
import { View, Image } from "react-native";
import { Modal } from "../../../../components/organisms";
import CupContainer from "../../../../components/molecules/cup/cupContainer";
import ConfirmMessage from "../../../../components/molecules/purchase/confirmMessage";
import MyPoints from "../../../../components/molecules/purchase/myPoints";
import ButtonArea from "../../../../components/molecules/purchase/buttonArea";
import CloseModal from "../../../../components/atoms/icons/common/closeModal";
import styles from "./purchase.style";

type PurchaseModalProps = {
  type: "callCat" | "purchaseCup";
  texts: {
    confirmMessage: string;
    normalBtn: string;
    gradientBtn: string;
  };
};

const Template = ({ type, texts }: PurchaseModalProps): ReactElement => {
  const currentModalState = HSUseState(globalPurchaseModalState).modalVisibility.get();
  return (
    <Modal isVisible={currentModalState}>
      <Modal.Container edgeStyle="square">
        <Modal.Body>
          <View style={styles.bodyWrapper}>
            {type === "callCat" ? (
              <>
                <CloseModal type="callCat" />
                <Image
                  style={styles.callCatImage}
                  source={require("@assets/common/cat-in-the-cup.png")}
                />
              </>
            ) : (
              <CupContainer
                type="modal"
                thumbnail={require("@assets/cups/cup1.png")}
                thumbnailSize="small"
                price={30}
              />
            )}
            <ConfirmMessage text={texts.confirmMessage} />
            <MyPoints text={"내 포인트"} points={551} />
          </View>
        </Modal.Body>
        <Modal.Footer>
          <ButtonArea
            // handleButtonNormal={closeModal}
            handleButtonGradient={() => console.log("button normal")}
            buttonNormalText={texts.normalBtn}
            buttonGradientText={texts.gradientBtn}
          />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default Template;
