import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle, View } from "react-native";
import Text from "../../text/text";
import styles from "./recordIcon.style";

type OptionIconProps = {
  type: "syrupActivated" | "creamActivated" | "syrupDeactivated" | "creamDeactivated" | "none";
  imageStyle: StyleProp<ImageStyle>;
};

const OPTION_TEXT = {
  syrup: "시럽",
  cream: "크림"
};

const OptionIcon = ({ type, imageStyle }: OptionIconProps): ReactElement => {
  switch (type) {
    case "syrupActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/water-selected.png")} />
          <Text weight="400">{OPTION_TEXT.syrup}</Text>
        </View>
      );
    }
    case "syrupDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/empty-base.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {OPTION_TEXT.syrup}
          </Text>
        </View>
      );
    }
    case "creamActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/cream-selected.png")} />
          <Text weight="400">{OPTION_TEXT.cream}</Text>
        </View>
      );
    }
    case "creamDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/empty-cream.png")} />
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
