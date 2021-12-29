import React, { useState, ReactElement } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ButtonDisable, ButtonGradient, Text } from "@Components";
import Modal from "../../../pages/modal";
import styles from "./today.styles";

type TodayProps = {
  cupRecordState: Record<string, unknown>;
  normalCups: Record<string, unknown>[];
  handleAddZeroCupBtn: () => Promise<void>;
};

const Today = ({ cupRecordState, normalCups, handleAddZeroCupBtn }: TodayProps): ReactElement => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function closeModal() {
    setIsModalVisible(false);
  }

  const NoRecordView = () => {
    return (
      <>
        <View style={styles.emptyCupContainer}>
          <Image
            style={styles.emptyCupImg}
            source={require("@assets/main/today-icon-unrecorded.png")}
          />
          <Text style={styles.emptyCupSaying}>오늘 한 잔도 마시지 않았어요!</Text>
          <Text style={styles.emptyCupSaying}>마감을 누르면 포인트가 바로 적립됩니다.↓</Text>
        </View>
        <ButtonGradient
          onPress={() => handleAddZeroCupBtn()}
          style={styles.emptyCupRecordingBtn}
          title="오늘 0잔 기록"
        />
      </>
    );
  };

  const DuringRecordView = ({ normalCups }: any) => {
    console.log(normalCups);
    return (
      <>
        {/* 키가 없으면 에러가 뜸 */}
        <View style={styles.recordedCupContainer}>
          {normalCups.map((item: any) => (
            <Image
              key={item.id}
              style={styles.recordedCupImg}
              source={require("@assets/main/today-recorded-cup.png")}
            />
          ))}
        </View>
        <ButtonGradient style={styles.recordingFinishBtn} title="기록 완료" />
      </>
    );
  };

  const CompleteZeroCupView = () => {
    return (
      <>
        <Image
          // style={styles.emptyCupImg}
          source={require("@assets/main/today-bg-complete-zero.png")}
        />
        <View style={styles.recordedCupContainer}></View>
        <ButtonDisable style={styles.recordingFinishBtn} title="오늘 0잔 기록 완료" />
      </>
    );
  };

  return (
    <View style={styles.todayContainer}>
      <Modal type="todayRecord" isVisible={isModalVisible} handleModalVisibility={closeModal} />
      <View style={styles.todayFontWrapper}>
        <Text style={styles.todayFont}>Today</Text>
        {cupRecordState.isRecorded ? null : (
          <TouchableOpacity activeOpacity={0.5} onPress={() => setIsModalVisible(true)}>
            <Text style={styles.cupUpdatingBtn}>수정</Text>
          </TouchableOpacity>
        )}
      </View>
      {!cupRecordState.isRecorded && normalCups.length === 0 ? (
        <NoRecordView />
      ) : !cupRecordState.isRecorded && normalCups.length >= 1 ? (
        <DuringRecordView normalCups={normalCups} />
      ) : cupRecordState.isZeroCup ? (
        <CompleteZeroCupView />
      ) : null}
    </View>
  );
};

export default Today;
