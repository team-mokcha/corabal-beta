import React, { ReactElement } from "react";
import { PlusIcon, ButtonDisable, ButtonGradient, DateText } from "src/components/atoms";
import { PickedRow } from "src/components/molecules";
import { Modal } from "src/components/organisms";
import styles from "./modal.style";

type TemplateProps = {
  type: "auth" | "profile" | "goal" | "shop" | "previousRecord" | "todayRecord";
};

const Template = ({ type }: TemplateProps): ReactElement => {
  switch (type) {
    case "auth":
      return <></>;
    case "profile":
      return <></>;
    case "goal":
      return <></>;
    case "shop":
      return <></>;
    case "todayRecord":
      return (
        <Modal isVisible={false}>
          <Modal.Container>
            <DateText type="present" />
            <PlusIcon />
            <Modal.Body>
              <PickedRow shot={1} base="water" option="none" />
              <PickedRow shot={1} base="water" option="none" />
              <PickedRow shot={1} base="water" option="none" />
            </Modal.Body>
            <Modal.Footer>
              <ButtonGradient title="확인" />
            </Modal.Footer>
          </Modal.Container>
        </Modal>
      );
    case "previousRecord":
      return <></>;
  }
};

export default Template;
