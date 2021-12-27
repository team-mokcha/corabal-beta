import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle, StyleSheet } from "react-native";
import Text from "../../text/text";

type baseIconProps = {
  type: "waterActivated" | "milkActivated" | "waterDeactivated" | "milkDeactivated";
  imageStyle: StyleProp<ImageStyle>;
};

const BASE_TEXT = {
  water: "물",
  milk: "우유"
};

const styles = StyleSheet.create({
  deactivatedText: {
    color: "#CECECE"
  }
});

const BaseIcon = ({ type, imageStyle }: baseIconProps): ReactElement => {
  switch (type) {
    case "waterActivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/water-selected.png")} />
          <Text weight="400">{BASE_TEXT.water}</Text>
        </>
      );
    }
    case "waterDeactivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/empty-base.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {BASE_TEXT.water}
          </Text>
        </>
      );
    }
    case "milkActivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/milk-selected.png")} />
          <Text weight="400">{BASE_TEXT.milk}</Text>
        </>
      );
    }
    case "milkDeactivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/empty-base.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {BASE_TEXT.milk}
          </Text>
        </>
      );
    }
  }
};

export default BaseIcon;
