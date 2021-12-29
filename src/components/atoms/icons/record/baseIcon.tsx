import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle, View } from "react-native";
import Text from "../../text/text";
import styles from "./recordIcon.style";

type baseIconProps = {
  type: "waterActivated" | "milkActivated" | "waterDeactivated" | "milkDeactivated";
  imageStyle: StyleProp<ImageStyle>;
};

const BASE_TEXT = {
  water: "물",
  milk: "우유"
};

const BaseIcon = ({ type, imageStyle }: baseIconProps): ReactElement => {
  switch (type) {
    case "waterActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/water-selected.png")} />
          <Text weight="400">{BASE_TEXT.water}</Text>
        </View>
      );
    }
    case "waterDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/empty-base.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {BASE_TEXT.water}
          </Text>
        </View>
      );
    }
    case "milkActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/milk-selected.png")} />
          <Text weight="400">{BASE_TEXT.milk}</Text>
        </View>
      );
    }
    case "milkDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/empty-base.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {BASE_TEXT.milk}
          </Text>
        </View>
      );
    }
  }
};

export default BaseIcon;
