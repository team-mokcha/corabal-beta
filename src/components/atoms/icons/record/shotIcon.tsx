import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle, View } from "react-native";
import Text from "../../text/text";
import styles from "./recordIcon.style";

type shotIconProps = {
  type:
    | "oneActivated"
    | "twoActivated"
    | "threeActivated"
    | "oneDeactivated"
    | "twoDeactivated"
    | "threeDeactivated";
  imageStyle: StyleProp<ImageStyle>;
};

const SHOT_TEXT = {
  one: "1샷",
  two: "2샷",
  three: "3샷"
};

const ShotIcon = ({ type, imageStyle }: shotIconProps): ReactElement => {
  switch (type) {
    case "oneActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/1shot.png")} />
          <Text weight="400">{SHOT_TEXT.one}</Text>
        </View>
      );
    }
    case "oneDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/empty-shot.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {SHOT_TEXT.one}
          </Text>
        </View>
      );
    }
    case "twoActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/2shot.png")} />
          <Text weight="400">{SHOT_TEXT.two}</Text>
        </View>
      );
    }
    case "twoDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/empty-shot.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {SHOT_TEXT.two}
          </Text>
        </View>
      );
    }
    case "threeActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/3shot.png")} />
          <Text weight="400">{SHOT_TEXT.three}</Text>
        </View>
      );
    }
    case "threeDeactivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/empty-shot.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {SHOT_TEXT.three}
          </Text>
        </View>
      );
    }
  }
};

export default ShotIcon;
