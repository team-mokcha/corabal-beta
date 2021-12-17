import React, { ReactElement } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ButtonDisable, ButtonGradient, Text } from "@Components";
import styles from "./today.styles";

type TodayProps = {
  cupRecordState: Record<string, unknown>;
  handleAddZeroCupBtn: () => Promise<void>;
};

const Today = ({ cupRecordState, handleAddZeroCupBtn }: TodayProps): ReactElement => {
  const NotRecordedView = () => {
    return (
      <>
        <View style={styles.emptyCupContainer}>
          <Image style={styles.emptyCupImg} source={require("@assets/recorded-empty-cup.png")} />
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

  const NormalCupView = () => {
    // state를 받아와서, 컵 수에 따라서 돌려줘야 함
    return (
      <>
        <View style={styles.recordedCupContainer}>
          <Image style={styles.recordedCupImg} source={require("@assets/recorded-cup.png")} />
        </View>
        <ButtonDisable style={styles.recordingFinishBtn} title="기록 완료" />
      </>
    );
  };

  const CompleteZeroCupView = () => {
    return (
      <>
        <View style={styles.recordedCupContainer}></View>
        <ButtonDisable style={styles.recordingFinishBtn} title="오늘 0잔 기록 완료" />
      </>
    );
  };

  return (
    <View style={styles.todayContainer}>
      <View style={styles.todayFontWrapper}>
        <Text style={styles.todayFont}>Today</Text>
        {cupRecordState.isRecorded ? null : (
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.cupUpdatingBtn}>수정</Text>
          </TouchableOpacity>
        )}
      </View>
      {!cupRecordState.isRecorded ? (
        <NotRecordedView />
      ) : cupRecordState.isZeroCup ? (
        <CompleteZeroCupView />
      ) : cupRecordState.isNormalCup ? (
        <NormalCupView />
      ) : null}
    </View>
  );
};

export default Today;
