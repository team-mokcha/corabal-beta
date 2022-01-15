import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Text from "../text/text";
import styles from "./button.styles";

type ButtonProps = {
  title: string;
  points: number;
} & TouchableOpacityProps;

export default function ButtonWithIcon({
  title,
  points,
  style,
  ...props
}: ButtonProps): ReactElement {
  return (
    <TouchableOpacity {...props} style={[styles.ButtonGradientRadius, style]}>
      <LinearGradient
        colors={["hsla(199, 79%, 71%, 1)", "hsla(220, 100%, 73%, 1)"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonWithIconContainer}
      >
        <Text weight="700" style={styles.buttonWithIconFont}>
          {title}{" "}
          <Image
            resizeMode="contain"
            style={styles.buttonWithIconImage}
            source={require("@assets/common/btn_point.png")}
          />{" "}
          {points}p
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
