import React, { ReactElement } from "react";
import Text from "../../text/text";
import styles from "./dateText.style";

type DateTextProps = {
  type: "present" | "previous";
  previousDate?: string;
};

const DateText = ({ type, previousDate }: DateTextProps): ReactElement => {
  switch (type) {
    case "present": {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formattedMonth = month.toString().length === 1 ? `0${month}` : month;
      const today = `${year}.${formattedMonth}.${day}`;

      return <Text style={styles.dateFont}>{today}</Text>;
    }
    case "previous": {
      return <Text style={styles.dateFont}>{previousDate}</Text>;
    }
    default:
      throw new Error("type is not defined");
  }
};

export default DateText;
