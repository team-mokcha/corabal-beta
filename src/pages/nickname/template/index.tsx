import React, { ReactElement, Dispatch, SetStateAction } from "react";
import { View, TextInput, KeyboardAvoidingView } from "react-native";
import { Text, ButtonGradient, ButtonNormal } from "@Components";
import styles from "./nickname.style";
import { ProfileIcon } from "../../../components/atoms/index";

type TemplateProps = {
  nicknameValue: string;
  setNicknameValue: Dispatch<SetStateAction<string>>;
  handleSettingNickname: () => void;
};

const NICKNAME_TEXT = {
  placeholder: "닉네임을 입력해주세요",
  validation: "* 최대 8글자 이내로 입력해주세요."
};

export default function Template({
  nicknameValue,
  setNicknameValue,
  handleSettingNickname
}: TemplateProps): ReactElement {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
        <ProfileIcon size="large" style={styles.profile} />
        <TextInput
          style={styles.inputContainer}
          textAlign={"center"}
          underlineColorAndroid={"#ffffff"}
          placeholder={NICKNAME_TEXT.placeholder}
          maxLength={8}
          value={nicknameValue}
          onChangeText={value => setNicknameValue(value)}
        />
        <Text style={styles.validationText} weight="400">
          {NICKNAME_TEXT.validation}
        </Text>
        {nicknameValue.length > 0 && nicknameValue.length <= 8 ? (
          <ButtonGradient title="완료" style={styles.button} onPress={handleSettingNickname} />
        ) : (
          <ButtonNormal title="완료" style={styles.button} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
