import React, { ReactElement } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "@Components";
import { ProfileIcon } from "../../atoms";
import styles from "./accountInfo.style";

const ACCOUNT_INFO_TEXT = {
  sir: "님"
};

type AccountInfoProps = {
  nickname: string;
  email: string;
};

export const AccountInfo = ({ nickname, email }: AccountInfoProps): ReactElement => {
  return (
    <View style={styles.profileContainer}>
      <ProfileIcon size="large" style={styles.profileIcon} />
      <TouchableOpacity activeOpacity={0.5} style={styles.nicknameContainer}>
        <Text weight="500" style={styles.nicknameFont}>
          {nickname}
          {ACCOUNT_INFO_TEXT.sir}
        </Text>
        <Image source={require("@assets/updating-user-name.png")} style={styles.nicknameEditIcon} />
      </TouchableOpacity>
      <Text weight="300" style={styles.emailFont}>
        {email}
      </Text>
    </View>
  );
};
