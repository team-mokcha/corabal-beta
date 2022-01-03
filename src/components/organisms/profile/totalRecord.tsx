import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { Text, ButtonGradient } from "@Components";
import styles from "./totalRecord.style";

type totalRecordProps = {
  records: number;
  points: number;
  catStatus: "normal" | "bad" | "happy";
};

const TOTAL_RECORD_TEXT = {
  record: "기록",
  point: "포인트",
  capitalP: "p",
  myCup: "내 컵",
  watchADBtn: "광고 보기 5p",
  callCatBtn: "고양이 부르기"
};

export const TotalRecord = ({ records, points, catStatus }: totalRecordProps): ReactElement => {
  return (
    <View style={styles.recordContainer}>
      <View style={styles.recordWrapper}>
        <Text weight="300" style={styles.recordTitle}>
          {TOTAL_RECORD_TEXT.record}
        </Text>
        <Text weight="300" style={styles.recordText}>
          {records}
        </Text>
      </View>
      <View style={styles.recordWrapper}>
        <Text weight="300" style={styles.recordTitle}>
          {TOTAL_RECORD_TEXT.point}
        </Text>
        <Text weight="300" style={styles.recordText}>
          {points}p
        </Text>
        <ButtonGradient
          // onPress={() => initRewardAds(email)}
          title={TOTAL_RECORD_TEXT.watchADBtn}
          smallType={true}
          style={styles.btn}
        />
      </View>
      <View style={styles.recordWrapper}>
        <Text weight="300" style={styles.recordTitle}>
          {TOTAL_RECORD_TEXT.myCup}
        </Text>
        <Image style={styles.myCupIcon} source={require("@assets/cat-in-the-cup.png")} />
        <ButtonGradient
          // onPress={() => setIsCallingCat(true)}
          title={TOTAL_RECORD_TEXT.callCatBtn}
          smallType={true}
          style={styles.btn}
        />
        {/* <CallingCat isCallingCat={isCallingCat} setIsCallingCat={setIsCallingCat} /> */}
      </View>
    </View>
  );
};
