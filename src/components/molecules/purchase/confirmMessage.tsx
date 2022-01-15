import React, { ReactElement } from "react";
import { Text } from "../../atoms/index";
import styles from "./confirmMessage.style";

type ConfirmMessageProps = { text: string };

const ConfirmMessage = ({ text }: ConfirmMessageProps): ReactElement => {
  return (
    <Text weight="400" style={styles.confirmMessageFont}>
      {text}
    </Text>
  );
};

export default ConfirmMessage;
