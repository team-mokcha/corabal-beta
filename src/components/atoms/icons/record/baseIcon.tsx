import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle, View } from "react-native";
import Text from "../../text/text";
import { SmallFont, MediumFont } from "./recordFont";
import styles from "./recordIcon.style";

type baseIconProps = {
  type: "waterActivated" | "milkActivated" | "waterDeactivated" | "milkDeactivated";
  fontSize: "medium" | "small";
  imageStyle: StyleProp<ImageStyle>;
};

const BASE_TEXT = {
  water: "물",
  milk: "우유"
};

const BaseIcon = ({ type, fontSize, imageStyle }: baseIconProps): ReactElement => {
  switch (type) {
    case "waterActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/water-selected.png")} />
          {fontSize === "small" ? (
            <SmallFont text={BASE_TEXT.water} />
          ) : (
            <MediumFont text={BASE_TEXT.water} />
          )}
        </View>
      );
    }
    case "waterDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/empty-base.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {BASE_TEXT.water}
          </Text>
        </View>
      );
    }
    case "milkActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/milk-selected.png")} />
          {fontSize === "small" ? (
            <SmallFont text={BASE_TEXT.milk} />
          ) : (
            <MediumFont text={BASE_TEXT.milk} />
          )}
        </View>
      );
    }
    case "milkDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/empty-base.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {BASE_TEXT.milk}
          </Text>
        </View>
      );
    }
  }
};

export default BaseIcon;
