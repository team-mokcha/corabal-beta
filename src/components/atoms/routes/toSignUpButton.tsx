import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../../text/text";
import { useNavigation } from "@react-navigation/core";
import styles from "./toSignUpButton.style";

const ToSignUpButton = (): ReactElement => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={[styles.linkContainer, { marginTop: 216 }]}
      onPress={() => navigation.navigate("SignUp")}
    >
      <Text style={styles.LinkText} weight="400">
        가입하기
      </Text>
    </TouchableOpacity>
  );
};

export default ToSignUpButton;
