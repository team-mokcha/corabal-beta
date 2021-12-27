import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle, StyleSheet } from "react-native";
import Text from "../../text/text";

type OptionIconProps = {
  type: "syrupActivated" | "creamActivated" | "syrupDeactivated" | "creamDeactivated";
  imageStyle: StyleProp<ImageStyle>;
};

const OPTION_TEXT = {
  syrup: "시럽",
  cream: "크림"
};

const styles = StyleSheet.create({
  deactivatedText: {
    color: "#CECECE"
  }
});

const OptionIcon = ({ type, imageStyle }: OptionIconProps): ReactElement => {
  switch (type) {
    case "syrupActivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/water-selected.png")} />
          <Text weight="400">{OPTION_TEXT.syrup}</Text>
        </>
      );
    }
    case "syrupDeactivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/empty-base.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {OPTION_TEXT.syrup}
          </Text>
        </>
      );
    }
    case "creamActivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/milk-selected.png")} />
          <Text weight="400">{OPTION_TEXT.cream}</Text>
        </>
      );
    }
    case "creamDeactivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/empty-base.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {OPTION_TEXT.cream}
          </Text>
        </>
      );
    }
  }
};

export default OptionIcon;
