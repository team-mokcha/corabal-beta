import React, { ReactElement } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { globalPurchaseModalState } from "@stores/stores";
import { View } from "react-native";
import { Modal } from "../../../../components/organisms";
import CupContainer from "../../../../components/molecules/cup/cupContainer";
import ConfirmMessage from "../../../../components/molecules/purchase/confirmMessage";
import MyPoints from "../../../../components/molecules/purchase/myPoints";
import ButtonArea from "../../../../components/molecules/purchase/buttonArea";
import styles from "./purchase.style";

const PURCHASE_MODAL_TEXT = {
  confirmPurchaseMessage: "정말 구매하시겠습니까?",
  completePurchaseMessage: "구매가 완료되었습니다!",
  myPoint: "내 포인트",
  cancel: "취소",
  close: "닫기",
  purchase: "구매",
  useNow: "바로 사용"
};

// 1. 상태에 따라서 다른 텍스트, 함수를 랜더링하도록 변경
// - 1) Template = bodyWrapper : 위의 마진은 상위에서 받을 수 있도록 설정. type이 "callCat" | "buyCup"

const Template = (): ReactElement => {
  const currentModalState = HSUseState(globalPurchaseModalState).modalVisibility.get();
  return (
    <Modal isVisible={currentModalState}>
      <Modal.Container edgeStyle="square">
        <Modal.Body>
          <View style={styles.bodyWrapper}>
            <CupContainer
              type="modal"
              thumbnail={require("@assets/cups/cup1.png")}
              thumbnailSize="small"
              price={30}
            />
            <ConfirmMessage text={PURCHASE_MODAL_TEXT.confirmPurchaseMessage} />
            <MyPoints text={PURCHASE_MODAL_TEXT.myPoint} points={551} />
          </View>
        </Modal.Body>
        <Modal.Footer>
          <ButtonArea
            // handleButtonNormal={closeModal}
            handleButtonGradient={() => console.log("button normal")}
            buttonNormalText={PURCHASE_MODAL_TEXT.cancel}
            buttonGradientText={PURCHASE_MODAL_TEXT.purchase}
          />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default Template;
