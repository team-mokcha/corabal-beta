import React, { ReactElement } from "react";
import { View } from "react-native";
import { ToExternalButton } from "../../atoms";
import { NOTICE, DEVELOPERS, PRIVACY_POLICY, TERMS_OF_USE } from "@config/constantsURL";

const LinkControl = (): ReactElement => {
  return (
    <View>
      <ToExternalButton type="navigator" URL={NOTICE}>
        {"공지사항"}
      </ToExternalButton>
      <ToExternalButton type="navigator" URL={TERMS_OF_USE}>
        {"이용약관"}
      </ToExternalButton>
      <ToExternalButton type="navigator" URL={PRIVACY_POLICY}>
        {"개인정보 정책"}
      </ToExternalButton>
      <ToExternalButton type="navigator" URL={DEVELOPERS}>
        {"개발자 소개"}
      </ToExternalButton>
    </View>
  );
};

export default LinkControl;
