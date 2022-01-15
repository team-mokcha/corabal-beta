import React, { ReactElement } from "react";
import { Image, StyleProp, ImageStyle } from "react-native";

type ProfileIconProps = {
  size: "large" | "medium" | "small";
  style: StyleProp<ImageStyle>;
};

const ProfileIcon = ({ size, style }: ProfileIconProps): ReactElement => {
  const handleProfileIconCss = (size: string) => {
    switch (size) {
      case "large":
        return {
          marginLeft: 142,
          marginRight: 146
        };
      case "medium": // 나중에 shop 스크린 할 때 margin 값 고치기
        return {
          marginTop: 24,
          marginLeft: 24,
          marginRight: 8
        };
      case "small": // 나중에 네비게이션 바 수정할 때 margin 같이 수정
        return {
          marginTop: 13,
          marginLeft: 16,
          marginRight: 220
        };
    }
  };

  return (
    <Image
      style={[handleProfileIconCss(size), style]}
      source={require("@assets/common/profile.png")}
    />
  );
};

export default ProfileIcon;
