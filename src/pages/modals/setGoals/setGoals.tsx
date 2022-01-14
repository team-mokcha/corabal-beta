import React, { ReactElement, useState, Dispatch, SetStateAction } from "react";
import { db, firebaseApp } from "@services/firebaseApp";
import { useState as HSUseState } from "@hookstate/core";
import { globalGoalState, globalUserState } from "@stores/stores";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Modal, ButtonGradient } from "@Components";
// import CloseModal from "../../../components/atoms/icons/common/closeModal";
import styles from "./setGoals.style";

type GoalProps = {
  isShowingGoal: boolean;
  setIsShowingGoal: Dispatch<SetStateAction<boolean>>;
};

// props 로 넘겨주기
const SetGoalModal = ({ isShowingGoal, setIsShowingGoal }: GoalProps): ReactElement => {
  const globalEmail = HSUseState(globalUserState).userEmail.get();
  const userRef = db.collection("users").doc(globalEmail);
  const globalGoal = HSUseState(globalGoalState);
  const radioButtons = [0, 1, 2, 3, 4, 5];
  const [selectedBtn, setSelectedBtn] = useState(1);

  return (
    <Modal isVisible={isShowingGoal}>
      <Modal.Container edgeStyle="square">
        <View style={styles.headerContainer}>
          <View style={styles.headerFontContainer}>
            <Text weight="400" style={styles.settingGoalFont}>
              목표 설정
            </Text>
            <Text weight="400" style={styles.settingGoalDescriptionFont}>
              일일 목표를 설정해보세요.
            </Text>
          </View>
          {/* <CloseModal type="goal" /> */}
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 0,
              right: -5
            }}
            activeOpacity={0.5}
            onPress={() => setIsShowingGoal(false)}
          >
            <Image source={require("@assets/modal/btn_x.png")} />
          </TouchableOpacity>
        </View>
        <Modal.Body>
          <View style={styles.bodyContainer}>
            {radioButtons.map(radioBtn => {
              return (
                <TouchableOpacity
                  key={radioBtn}
                  style={styles.radioBtnContainer}
                  activeOpacity={0.5}
                  onPress={() => setSelectedBtn(radioBtn)}
                >
                  {radioBtn === selectedBtn ? (
                    <Image
                      style={styles.radioBtnIcon}
                      source={require("@assets/modal/radio-selected.png")}
                    />
                  ) : (
                    <Image
                      style={styles.radioBtnIcon}
                      source={require("@assets/modal/radio.png")}
                    />
                  )}
                  <Text weight="400" style={styles.radioBtnFont}>
                    {radioBtn}잔
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGradient
            title="결정"
            style={styles.confirmBtn}
            onPress={() => {
              userRef
                .set({ goal: selectedBtn }, { merge: true })
                .then(() => {
                  console.log("goal updated!");
                  globalGoal.goal.set(selectedBtn);
                })
                .catch(error => console.error(error));
              setIsShowingGoal(false);
            }}
          />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default SetGoalModal;
