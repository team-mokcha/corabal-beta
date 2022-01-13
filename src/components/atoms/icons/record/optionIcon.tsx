import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle, View } from "react-native";
import Text from "../../text/text";
import { SmallFont, MediumFont } from "./recordFont";
import styles from "./recordIcon.style";

type OptionIconProps = {
  type: "syrupActivated" | "creamActivated" | "syrupDeactivated" | "creamDeactivated" | "none";
  fontSize: "medium" | "small";
  imageStyle: StyleProp<ImageStyle>;
};

const OPTION_TEXT = {
  syrup: "시럽",
  cream: "크림"
};

const OptionIcon = ({ type, fontSize, imageStyle }: OptionIconProps): ReactElement => {
  switch (type) {
    case "syrupActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/syrup-selected.png")} />
          {fontSize === "small" ? (
            <SmallFont text={OPTION_TEXT.syrup} />
          ) : (
            <MediumFont text={OPTION_TEXT.syrup} />
          )}
        </View>
      );
    }
    case "syrupDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/empty-base.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {OPTION_TEXT.syrup}
          </Text>
        </View>
      );
    }
    case "creamActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/cream-selected.png")} />
          {fontSize === "small" ? (
            <SmallFont text={OPTION_TEXT.cream} />
          ) : (
            <MediumFont text={OPTION_TEXT.cream} />
          )}
        </View>
      );
    }
    case "creamDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/empty-cream.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {OPTION_TEXT.cream}
          </Text>
        </View>
      );
    }
    case "none": {
      return <></>;
    }
  }
};

export default OptionIcon;
