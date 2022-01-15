import React, { ReactElement } from "react";
import Text from "../../text/text";
import styles from "./recordIcon.style";

export const SmallFont = ({ text }: { text: string }): ReactElement => {
  return (
    <Text weight="400" style={styles.smallFont}>
      {text}
    </Text>
  );
};

export const MediumFont = ({ text }: { text: string }): ReactElement => {
  return (
    <Text weight="700" style={styles.mediumFont}>
      {text}
    </Text>
  );
};
