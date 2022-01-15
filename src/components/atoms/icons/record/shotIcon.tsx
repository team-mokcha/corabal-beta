import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle, View } from "react-native";
import Text from "../../text/text";
import { SmallFont, MediumFont } from "./recordFont";
import styles from "./recordIcon.style";

type shotIconProps = {
  type:
    | "oneActivated"
    | "twoActivated"
    | "threeActivated"
    | "oneDeactivated"
    | "twoDeactivated"
    | "threeDeactivated";
  fontSize: "medium" | "small";
  imageStyle: StyleProp<ImageStyle>;
};

const SHOT_TEXT = {
  one: "1샷",
  two: "2샷",
  three: "3샷"
};

const ShotIcon = ({ type, imageStyle, fontSize }: shotIconProps): ReactElement => {
  switch (type) {
    case "oneActivated": {
      return (
        <View style={styles.columnContainer}>
          <Image style={imageStyle} source={require("@assets/record/1shot.png")} />
          {fontSize === "small" ? (
            <SmallFont text={SHOT_TEXT.one} />
          ) : (
            <MediumFont text={SHOT_TEXT.one} />
          )}
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
          {fontSize === "small" ? (
            <SmallFont text={SHOT_TEXT.two} />
          ) : (
            <MediumFont text={SHOT_TEXT.two} />
          )}
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
          {fontSize === "small" ? (
            <SmallFont text={SHOT_TEXT.three} />
          ) : (
            <MediumFont text={SHOT_TEXT.three} />
          )}
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
