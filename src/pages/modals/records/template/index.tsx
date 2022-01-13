import React, { ReactElement } from "react";
import { ScrollView, View, Image } from "react-native";
import { ButtonNormal, ButtonGradient, DateText } from "../../../../components/atoms/index";
import { PickedRow } from "../../../../components/molecules";
import { Modal } from "../../../../components/organisms";
import styles from "./records.style";

type TemplateProps = {
  type: "previous" | "today";
  todayRecordProps?: { totalCups: number };
  isVisible: boolean;
  handleModalVisibility: () => void;
};

const Template = ({ type, isVisible, handleModalVisibility }: TemplateProps): ReactElement => {
  switch (type) {
    // 3) 바꾼 로그가 있을 경우에만(삭제) 버튼 활성화
    case "today":
      return (
        <Modal isVisible={isVisible}>
          <Modal.Container edgeStyle="round">
            <View style={styles.headerContainer}>
              <DateText type="present" />
              <Image source={require("@assets/modal/btn_plus.png")} style={styles.plusBtn} />
            </View>
            <Modal.Body>
              <View style={styles.pickedRowContainer}>
                <PickedRow
                  type="todayRecords"
                  shot="oneActivated"
                  base="waterActivated"
                  option="creamActivated"
                />
              </View>
              <View style={styles.pickedRowContainer}>
                <PickedRow
                  type="todayRecords"
                  shot="oneActivated"
                  base="waterActivated"
                  option="creamActivated"
                />
              </View>
              <PickedRow
                type="todayRecords"
                shot="oneActivated"
                base="milkActivated"
                option="creamActivated"
              />
            </Modal.Body>
            <Modal.Footer>
              <ButtonNormal
                title="확인"
                style={styles.completeBtn}
                onPress={handleModalVisibility}
              />
              {/* <ButtonGradient
                title="수정 완료"
                style={styles.completeBtn}
                // onPress={() => console.log("추가")}
              /> */}
            </Modal.Footer>
          </Modal.Container>
        </Modal>
      );
    case "previous":
      return (
        <Modal isVisible={isVisible}>
          <Modal.Container edgeStyle="round">
            <View style={styles.headerContainer}>
              <DateText type="previous" previousDate="2001-01-05" />
            </View>
            <Modal.Body>
              <View style={styles.pickedRowContainer}>
                <PickedRow
                  type="previousRecords"
                  shot="oneActivated"
                  base="waterActivated"
                  option="creamActivated"
                />
              </View>
              <View style={styles.pickedRowContainer}>
                <PickedRow
                  type="previousRecords"
                  shot="oneActivated"
                  base="waterActivated"
                  option="creamActivated"
                />
              </View>
              <PickedRow
                type="previousRecords"
                shot="oneActivated"
                base="milkActivated"
                option="creamActivated"
              />
            </Modal.Body>
            <Modal.Footer>
              <ButtonNormal
                title="확인"
                style={styles.completeBtn}
                onPress={handleModalVisibility}
              />
            </Modal.Footer>
          </Modal.Container>
        </Modal>
      );
  }
};

export default Template;
