import React, { ReactElement } from "react";
import Template from "./template";

type ModalProps = {
  type: "auth" | "profile" | "goal" | "shop" | "previousRecord" | "todayRecord";
  isVisible: boolean;
  handleModalVisibility: () => void;
};

const Modal = ({ type, isVisible, handleModalVisibility }: ModalProps): ReactElement => {
  //   const callErrorState = () => {
  //     console.log("Authentication 페이지 내 에러 핸들링 함수입니다.");
  //   };

  switch (type) {
    case "auth":
      // return <Template type="auth" modalFunction={callErrorState} />;
      return (
        <Template type="auth" isVisible={isVisible} handleModalVisibility={handleModalVisibility} />
      );
    case "profile":
      return (
        <Template
          type="profile"
          isVisible={isVisible}
          handleModalVisibility={handleModalVisibility}
        />
      );
    case "goal":
      return (
        <Template type="goal" isVisible={isVisible} handleModalVisibility={handleModalVisibility} />
      );
    case "shop":
      return (
        <Template type="shop" isVisible={isVisible} handleModalVisibility={handleModalVisibility} />
      );
    case "previousRecord":
      return (
        <Template
          type="previousRecord"
          isVisible={isVisible}
          handleModalVisibility={handleModalVisibility}
        />
      );
    case "todayRecord":
      return (
        <Template
          type="todayRecord"
          isVisible={isVisible}
          handleModalVisibility={handleModalVisibility}
        />
      );
  }
};

export default Modal;
