import React, { ReactElement } from "react";
import { View, ScrollView, Image } from "react-native";
import { ButtonGradient, ButtonNormal } from "@Components";
import styles from "./intro.styles";

export default function Template({ navigation }: any): ReactElement {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.logo} source={require("@assets/logo.png")} />
        <ButtonNormal
          style={styles.buttonNormal}
          title="로그인"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <ButtonGradient
          style={styles.buttonGradient}
          title="가입하기"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        />
      </ScrollView>
    </View>
  );
}
