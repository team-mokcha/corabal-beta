import React, { ReactElement } from "react";
import Template from "./template";

type ModalProps = {
  type: "previous" | "today";
  isVisible: boolean;
  handleModalVisibility: () => void;
};

const Modal = ({ type, isVisible, handleModalVisibility }: ModalProps): ReactElement => {
  //   const callErrorState = () => {
  //     console.log("Authentication 페이지 내 에러 핸들링 함수입니다.");
  //   };

  switch (type) {
    case "previous":
      return (
        <Template
          type="previous"
          isVisible={isVisible}
          handleModalVisibility={handleModalVisibility}
        />
      );
    case "today":
      return (
        <Template
          type="today"
          isVisible={isVisible}
          handleModalVisibility={handleModalVisibility}
        />
      );
  }
};

export default Modal;
