import React, { ReactElement } from "react";
import Template from "./template";

type ModalProps = {
  type: "auth" | "profile" | "goal" | "shop" | "calendar";
};

const Modal = ({ type }: ModalProps): ReactElement => {
  //   const callErrorState = () => {
  //     console.log("Authentication 페이지 내 에러 핸들링 함수입니다.");
  //   };

  switch (type) {
    case "auth":
      // return <Template type="auth" modalFunction={callErrorState} />;
      return <Template type="auth" />;
    case "profile":
      return <Template type="profile" />;
    case "goal":
      return <Template type="goal" />;
    case "shop":
      return <Template type="shop" />;
    case "calendar":
      return <Template type="calendar" />;
  }
};

export default Modal;
