import React, { ReactElement } from "react";
import { ScrollView, View, Image } from "react-native";
import { ButtonDisable, ButtonGradient, DateText } from "../../../components/atoms/index";
import { PickedRow } from "../../../components/molecules";
import { Modal } from "../../../components/organisms";
import styles from "./modal.style";

type TemplateProps = {
  type: "auth" | "profile" | "goal" | "shop" | "previousRecord" | "todayRecord";
  isVisible: boolean;
  handleModalVisibility: () => void;
};

const Template = ({ type, isVisible, handleModalVisibility }: TemplateProps): ReactElement => {
  switch (type) {
    case "auth":
      return <></>;
    case "profile":
      return <></>;
    case "goal":
      return <></>;
    case "shop":
      return <></>;
    // 참고 - Today와 PreviousRecord는 거의 비슷한 템플릿이지만, 이전 기록의 경우 삭제 및 추가 버튼이 존재하지 않음
    // 1) 모달 마크업
    // 2) 데이터 불러오기 - 일단 불러와지는지만 확인. 삭제 등은 이 브랜치에서 하면 좋지 않을 듯.
    // 3) 바꾼 로그가 있을 경우에만(삭제) 버튼 활성화
    case "todayRecord":
      return (
        <Modal isVisible={isVisible}>
          <Modal.Container>
            <View style={styles.headerContainer}>
              <DateText type="present" />
              <Image source={require("@assets/btn_plus.png")} style={styles.plusBtn} />
            </View>
            <Modal.Body scroll-space>
              <PickedRow shot="oneActivated" base="waterActivated" option="creamActivated" />
            </Modal.Body>
            <Modal.Footer>
              <ButtonDisable
                title="확인"
                style={styles.completeBtn}
                onPress={handleModalVisibility}
              />
            </Modal.Footer>
          </Modal.Container>
        </Modal>
      );
    case "previousRecord":
      return <></>;
  }
};

export default Template;
