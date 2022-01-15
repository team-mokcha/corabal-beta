import React, { ReactElement } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@Components";
import styles from "./accountControl.style";

const ACCOUNT_CONTROL_TEXT = {
  resetPassword: "비밀번호 재설정",
  logout: "로그아웃",
  deleteAccount: "계정 삭제"
};

export const AccountControl = (): ReactElement => {
  return (
    <View style={styles.accountControlContainer}>
      <TouchableOpacity
      // onPress={() => handlePasswordReset()}
      >
        <Text weight="400">{ACCOUNT_CONTROL_TEXT.resetPassword}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutFont}
        onPress={() => {
          // logOutWithFirebase();
          // currentUserState.loggedIn.set(false);
        }}
      >
        <Text weight="400">{ACCOUNT_CONTROL_TEXT.logout}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text weight="400" style={styles.deletingAccountFont}>
          {ACCOUNT_CONTROL_TEXT.deleteAccount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
