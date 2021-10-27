import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ButtonGradient, Text } from "@Components";
import styles from "./today.styles";

const Today = ({ isEmpty }: any) => {
  return (
    <View style={styles.todayContainer}>
      <View style={styles.todayFontWrapper}>
        <Text style={styles.todayFont}>Today</Text>
        {isEmpty ? null : (
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.cupUpdatingBtn}>수정</Text>
          </TouchableOpacity>
        )}
      </View>
      {isEmpty ? (
        <>
          <View style={styles.emptyCupContainer}>
            <Image style={styles.emptyCupImg} source={require("@assets/recorded-empty-cup.png")} />
            <Text style={styles.emptyCupSaying}>오늘 한 잔도 마시지 않았어요!</Text>
            <Text style={styles.emptyCupSaying}>마감을 누르면 포인트가 바로 적립됩니다.↓</Text>
          </View>
          <ButtonGradient style={styles.emptyCupRecordingBtn} title="오늘 0잔 기록" />
        </>
      ) : (
        <View>
          <View style={styles.recordedCupContainer}>
            <Image style={styles.recordedCupImg} source={require("@assets/recorded-cup.png")} />
            <Image style={styles.recordedCupImg} source={require("@assets/recorded-cup.png")} />
            <Image style={styles.recordedCupImg} source={require("@assets/recorded-cup.png")} />
          </View>
          <ButtonGradient style={styles.recordingFinishBtn} title="기록 완료" />
        </View>
      )}
    </View>
  );
};

export default Today;
