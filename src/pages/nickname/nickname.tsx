import React, { ReactElement, useState } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState, globalErrorStateDuringAuth } from "@stores/stores";
import { setNickname } from "@services/functions/handle-auth";
import Template from "./template";

export default function Nickname(): ReactElement {
  const [nicknameValue, setNicknameValue] = useState("");
  const currentUserState = HSUseState(globalUserState);
  const errorStateDuringAuth = HSUseState(globalErrorStateDuringAuth);

  const handleSettingNickname = async () => {
    const [response, error] = await setNickname(currentUserState.userEmail.get(), nicknameValue);
    if (error) {
      errorStateDuringAuth.modalVisibility.set(true);
      errorStateDuringAuth.nicknameError.set(true);
      errorStateDuringAuth.nicknameErrorMessage.set("알 수 없는 오류가 발생했어요!");
    } else {
      console.log(`${response} 닉네임 DB 연동 성공!`);
      currentUserState.nicknameIn.set(true);
      currentUserState.nickname.set(nicknameValue);
    }
  };

  return (
    <>
      <Template
        nicknameValue={nicknameValue}
        setNicknameValue={setNicknameValue}
        handleSettingNickname={handleSettingNickname}
      />
    </>
  );
}
