import React, { ReactElement, Dispatch, SetStateAction } from "react";
import { Image } from "react-native";
import { Text, Modal, ButtonNormal } from "@Components";

type CallingCatProps = {
  isCallingCat: boolean;
  setIsCallingCat: Dispatch<SetStateAction<boolean>>;
};

const ChangeCatStatusModal = ({ isCallingCat, setIsCallingCat }: CallingCatProps): ReactElement => {
  return (
    <Modal isVisible={isCallingCat}>
      <Modal.Container>
        <Modal.Body>
          <Image source={require("@assets/cat-in-the-cup.png")} />
          <Text>준비 중인 서비스입니다.</Text>
        </Modal.Body>
        <Modal.Footer>
          <ButtonNormal
            onPress={() => setIsCallingCat(false)}
            title="확인"
            style={{ width: 136, height: 48 }}
          />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default ChangeCatStatusModal;
