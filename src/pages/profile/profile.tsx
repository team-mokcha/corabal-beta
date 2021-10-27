import React, { ReactElement, useState, useEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ButtonGradient, Text, Header } from "@Components";
import styles from "./profile.style";
import {
  logOutWithFirebase,
  sendPasswordRestEmail,
  deleteAccountOnFirebase
} from "@services/auth-service";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState, globalPointState } from "@stores/stores";
import CallingCat from "../calling-cat/calling-cat";
import { initRewardAds } from "@services/watching-ads-service";
import { db } from "@services/firebaseApp";

export default function Profile(): ReactElement {
  const [isCallingCat, setIsCallingCat] = useState(false);
  const [isDeletedAccount, setIsDeletedAccount] = useState(false);
  const currentUserState = HSUseState(globalUserState);
  const email = currentUserState.userEmail.get();
  // const nickname = currentUserState.nickname.get();
  // console.log("nickname:", nickname); // 빈 이름만 나오는 거 이유 확인하기
  const globalPoint = HSUseState(globalPointState);
  const [totalCups, setTotalCups] = useState(0);

  const handlePasswordReset = async () => {
    try {
      await sendPasswordRestEmail(email);
      console.log("비밀번호 재설정 링크 보내기 성공");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAccount = async () => {
    // (firestore DB에서도 어떻게 지울지 생각해야 함. 차후 추가하기)
    try {
      await deleteAccountOnFirebase();
      setIsDeletedAccount(!isDeletedAccount);
      currentUserState.userIn.set(false);
      currentUserState.loggedIn.set(false);
      currentUserState.nickname.set("");
      currentUserState.nicknameIn.set(false);
      currentUserState.userEmail.set("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(email)
      .onSnapshot(snapshot => {
        // console.log(snapshot.data()?.total_cups);
        setTotalCups(snapshot.data()?.total_cups);
      });
    return unsubscribe;
  }, []);

  return (
    <>
      <Header back={true} close={false} />
      <View>
        <View style={styles.profileContainer}>
          <Image source={require("@assets/profile.png")} />
          <TouchableOpacity activeOpacity={0.5} style={styles.profileNameContainer}>
            <Text style={styles.profileNameFont}>커라밸님</Text>
            <Image source={require("@assets/updating-user-name.png")} />
          </TouchableOpacity>
          <Text style={styles.profileEmailFont}>{email}</Text>
        </View>
        <View style={styles.EveryRecordContainer}>
          <View style={styles.alginCenter}>
            <Text style={styles.eachRecordNameFont}>기록</Text>
            <Text style={styles.totalRecords}>{totalCups}</Text>
          </View>
          <View style={styles.alginCenter}>
            <Text style={styles.eachRecordNameFont}>포인트</Text>
            <Text style={styles.totalPoints}>{globalPoint.current.get()}p</Text>
            <ButtonGradient
              onPress={() => initRewardAds(email)}
              title="광고 보기 5p"
              style={{ width: 86, height: 28 }}
            />
          </View>
          <View style={styles.alginCenter}>
            <Text style={styles.eachRecordNameFont}>내 컵</Text>
            <Image
              style={{ width: 82, height: 82 }}
              source={require("@assets/cat-in-the-cup.png")}
            />
            <ButtonGradient
              onPress={() => setIsCallingCat(true)}
              title="고양이 부르기"
              style={{ width: 86, height: 28 }}
            />
            <CallingCat isCallingCat={isCallingCat} setIsCallingCat={setIsCallingCat} />
          </View>
        </View>
        <View style={styles.alginCenter}>
          <TouchableOpacity onPress={() => handlePasswordReset()}>
            <Text>비밀번호 재설정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logout}
            onPress={() => {
              logOutWithFirebase();
              currentUserState.loggedIn.set(false);
            }}
          >
            <Text>로그아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.deletingAccountFont}>계정 삭제</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
