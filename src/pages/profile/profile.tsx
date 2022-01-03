import React, { ReactElement, useState, useEffect } from "react";
import {
  logOutWithFirebase,
  sendPasswordRestEmail,
  deleteAccountOnFirebase
} from "@services/functions/handle-auth";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState, globalPointState } from "@stores/stores";
import CallingCat from "../changeCatStatusModal/changeCatStatusModal";
// import { initRewardAds } from "@services/watching-ads-service";
import { db } from "@services/firebaseApp";
import Template from "./template";

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
        setTotalCups(snapshot.data()?.total_cups);
      });
    return unsubscribe;
  }, []);

  // return <Template props={} />;
  return <Template />;
}
