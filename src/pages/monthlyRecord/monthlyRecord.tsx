import React, { ReactElement, useState } from "react";
import { firebaseApp } from "@services/firebaseApp";
import { getTodayCupLogs } from "@services/functions/handle-coffee-log";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState } from "@stores/stores";
import Template from "./template";

// Props로 넘겨줘야 하는 부분
// 전역에서 객체 생성하면 prop로 넘겨줄 필요는 없을 지도
// 1) Date 가져오기.
// > Date에 날짜와 요일이 함께 있어야 하네...?
// > 커피 잔 수 가져오기

export default function MonthlyRecord(): ReactElement {
  const currentUserState = HSUseState(globalUserState);
  const userEmail = currentUserState.userEmail.get();

  return <Template />;
}
