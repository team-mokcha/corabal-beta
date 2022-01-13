import React, { ReactElement, SetStateAction } from "react";
import { View } from "react-native";
import { ButtonNormal, ButtonGradient, Text } from "../../../../components/atoms/index";
import Points from "../../../../components/atoms/icons/common/point";
import { Modal } from "../../../../components/organisms";
import CupContainer from "../../../../components/molecules/cup/cupContainer";
import styles from "./purchase.style";

type TemplateProps = {
  isVisible: boolean;
  handleModalVisibility: React.Dispatch<SetStateAction<boolean>>;
};

const PURCHASE_MODAL_TEXT = {
  confirmPurchaseMessage: "정말 구매하시겠습니까?",
  myPoint: "내 포인트",
  cancel: "취소",
  purchase: "구매"
};

const Template = ({ isVisible, handleModalVisibility }: TemplateProps): ReactElement => {
  return (
    <Modal isVisible={isVisible}>
      <Modal.Container edgeStyle="square">
        <Modal.Body>
          <View style={styles.bodyWrapper}>
            <CupContainer
              type="modal"
              thumbnail={require("@assets/cups/cup1.png")}
              thumbnailSize="small"
              price={30}
            />
            <Text weight="400" style={styles.confirmMessageFont}>
              {PURCHASE_MODAL_TEXT.confirmPurchaseMessage}
            </Text>
            <View style={styles.pointsWrapper}>
              <Text weight="300" style={styles.myPointsFont}>
                {PURCHASE_MODAL_TEXT.myPoint}
              </Text>
              <Points points={551} fontSize="medium" />
            </View>
          </View>
        </Modal.Body>
        <Modal.Footer>
          <View style={styles.buttonWrapper}>
            <ButtonNormal
              onPress={() => handleModalVisibility(false)}
              style={[styles.button, { marginRight: 8 }]}
              title={PURCHASE_MODAL_TEXT.cancel}
            />
            <ButtonGradient
              onPress={() => {
                // function buyCup() { // }
              }}
              style={styles.button}
              title={PURCHASE_MODAL_TEXT.purchase}
            />
          </View>
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default Template;
