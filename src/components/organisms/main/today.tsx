import React, { useState, ReactElement } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ButtonDisable, ButtonGradient, Text } from "@Components";
import RecordsModal from "../../../pages/modals/records/records";
import styles from "./today.styles";

type TodayProps = {
  cupRecordState: Record<string, unknown>;
  normalCups: Record<string, unknown>[];
  handleAddZeroCupBtn: () => Promise<void>;
};

const TODAY_TEXT = {
  today: "Today",
  edit: "수정",
  noRecordComment: `오늘 한 잔도 마시지 않았어요!
  마감을 누르면 포인트가 바로 적립됩니다.↓`,
  zeroRecorded: "0 잔",
  zeroRecordedComment: `오늘 한 잔도 마시지 않았어요!
  대단해요!`,
  recordBtn: "기록 완료",
  zeroRecordBtn: "오늘 0잔 기록"
};

const Today = ({ cupRecordState, normalCups, handleAddZeroCupBtn }: TodayProps): ReactElement => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function closeModal() {
    setIsModalVisible(false);
  }

  const NoRecordView = () => {
    return (
      <>
        <View style={styles.recordWrapper}>
          <Image
            style={styles.noRecordImg}
            source={require("@assets/main/today-icon-unrecorded.png")}
          />
          <Text style={styles.recordComment} weight="400">
            {TODAY_TEXT.noRecordComment}
          </Text>
        </View>
        <ButtonGradient onPress={() => handleAddZeroCupBtn()} title={TODAY_TEXT.zeroRecordBtn} />
      </>
    );
  };

  const DuringRecordView = ({ normalCups }: any) => {
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
        <ButtonGradient style={styles.recordingFinishBtn} title={TODAY_TEXT.recordBtn} />
      </>
    );
  };

  const CompleteZeroCupView = () => {
    return (
      <View style={styles.recordWrapper}>
        <Image
          style={styles.zeroCupCompleteImg}
          source={require("@assets/main/today-bg-complete-zero.png")}
        />
        <Text weight="700" style={styles.zeroCupCompleteFont}>
          {TODAY_TEXT.zeroRecorded}
        </Text>
        <Text style={styles.recordComment}>{TODAY_TEXT.zeroRecordedComment}</Text>
        <ButtonDisable title={TODAY_TEXT.recordBtn} style={styles.disableBtn} />
      </View>
    );
  };

  return (
    <View style={styles.todayContainer}>
      <RecordsModal type="today" isVisible={isModalVisible} handleModalVisibility={closeModal} />
      <View style={styles.todayFontWrapper}>
        <Text style={styles.todayFont} weight="500">
          {TODAY_TEXT.today}
        </Text>
        {cupRecordState.isRecorded ? null : (
          <TouchableOpacity activeOpacity={0.5} onPress={() => setIsModalVisible(true)}>
            <Text style={styles.cupUpdatingBtn} weight="400">
              {TODAY_TEXT.edit}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* <NoRecordView /> */}
      {/* <DuringRecordView normalCups={normalCups} /> */}
      <CompleteZeroCupView />

      {/* {!cupRecordState.isRecorded && normalCups.length === 0 ? (
        <NoRecordView />
      ) : !cupRecordState.isRecorded && normalCups.length >= 1 ? (
        <DuringRecordView normalCups={normalCups} />
      ) : cupRecordState.isZeroCup ? (
        <CompleteZeroCupView />
      ) : null} */}
    </View>
  );
};

export default Today;
