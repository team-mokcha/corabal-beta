import React, { ReactElement, SetStateAction } from "react";
import Template from "./template";

type ModalProps = {
  isVisible: boolean;
  handleModalVisibility: React.Dispatch<SetStateAction<boolean>>;
};

const PurchaseModal = ({ isVisible, handleModalVisibility }: ModalProps): ReactElement => {
  return <Template isVisible={isVisible} handleModalVisibility={handleModalVisibility} />;
};

export default PurchaseModal;
