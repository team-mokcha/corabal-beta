import React, { ReactElement } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { globalErrorStateDuringAuth, globalUserState } from "@stores/stores";
import { logInWithFirebase } from "@services/functions/handle-auth";
import * as Yup from "yup";
import Template from "./template";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("* 정확한 이메일 주소를 입력해주세요.")
    .max(32, "* 너무 깁니다.")
    .required("* 이메일을 입력해주세요.")
    .label("email"),
  password: Yup.string()
    .matches(/\d/, "* 비밀번호에 숫자를 포함해주세요.")
    .matches(/\w*[a-zA-Z]\w*/, "* 비밀번호에 영어를 포함해주세요.")
    .matches(/(?=.*[!@#$%^&*])/, "* 비밀번호에 특수문자를 포함해주세요.")
    .min(8, "* 8글자 이상으로 입력해주세요.")
    .max(32, "* 너무 깁니다.")
    .required("* 비밀번호를 입력해주세요.")
    .label("password")
});

export default function LogIn(): ReactElement {
  const errorStateDuringAuth = HSUseState(globalErrorStateDuringAuth);
  const currentUserState = HSUseState(globalUserState);

  const handleLogIn = async (email: string, password: string) => {
    const [response, error] = await logInWithFirebase(email, password);
    if (error) {
      const errorCode = error.code;
      errorStateDuringAuth.modalVisibility.set(true);
      errorStateDuringAuth.logInError.set(true);
      if (errorCode === "auth/invalid-email") {
        errorStateDuringAuth.logInErrorMessage.set("유효하지 않은 이메일입니다.");
      } else if (errorCode === "auth/user-disabled") {
        errorStateDuringAuth.logInErrorMessage.set("정지된 계정입니다.");
      } else if (errorCode === "auth/user-not-found") {
        errorStateDuringAuth.logInErrorMessage.set("가입되지 않은 이메일입니다.");
      } else if (errorCode === "auth/wrong-password") {
        errorStateDuringAuth.logInErrorMessage.set("비밀번호가 틀렸습니다!");
      }
    } else {
      console.log(response.user.email);
      errorStateDuringAuth.logInError.set(false);
      errorStateDuringAuth.logInErrorMessage.set("");
      currentUserState.loggedIn.set(true);
    }
  };

  return (
    <>
      <Template handleLogIn={handleLogIn} validationSchema={validationSchema} />
    </>
  );
}
