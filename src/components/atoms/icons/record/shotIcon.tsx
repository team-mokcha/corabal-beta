import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle, StyleSheet } from "react-native";
import Text from "../../text/text";

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

const styles = StyleSheet.create({
  deactivatedText: {
    color: "#CECECE"
  }
});

const ShotIcon = ({ type, imageStyle }: shotIconProps): ReactElement => {
  switch (type) {
    case "oneActivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/1shot.png")} />
          <Text weight="400">{SHOT_TEXT.one}</Text>
        </>
      );
    }
    case "oneDeactivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/empty-shot.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {SHOT_TEXT.one}
          </Text>
        </>
      );
    }
    case "twoActivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/2shot.png")} />
          <Text weight="400">{SHOT_TEXT.two}</Text>
        </>
      );
    }
    case "twoDeactivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/empty-shot.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {SHOT_TEXT.two}
          </Text>
        </>
      );
    }
    case "threeActivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/3shot.png")} />
          <Text weight="400">{SHOT_TEXT.three}</Text>
        </>
      );
    }
    case "threeDeactivated": {
      return (
        <>
          <Image style={imageStyle} source={require("@assets/empty-shot.png")} />
          <Text weight="400" style={styles.deactivatedText}>
            {SHOT_TEXT.three}
          </Text>
        </>
      );
    }
  }
};

export default ShotIcon;
