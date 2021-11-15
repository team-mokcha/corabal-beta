import React, { ReactElement } from "react";
import { TouchableOpacity, View, Linking } from "react-native";
import { Text } from "@Components";
import styles from "./linkControl.style";

const LinkControl = (): ReactElement => {
  return (
    <View>
      <TouchableOpacity
        style={styles.fonts}
        activeOpacity={0.5}
        onPress={() => Linking.openURL("https://www.google.com")}
      >
        <Text>공지사항</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fonts}
        activeOpacity={0.5}
        onPress={() => Linking.openURL("https://www.google.com")}
      >
        <Text>이용약관</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fonts}
        activeOpacity={0.5}
        onPress={() => Linking.openURL("https://www.google.com")}
      >
        <Text>개인정보 정책</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fonts}
        activeOpacity={0.5}
        onPress={() => Linking.openURL("https://www.google.com")}
      >
        <Text>개발자 소개</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkControl;
