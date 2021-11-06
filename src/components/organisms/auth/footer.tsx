import React, { ReactElement } from "react";
import { View } from "react-native";
import { ToTermsButton, ToSignUpButton } from "../../atoms";
import { PRIVACY_POLICY, TERMS_OF_USE } from "@config/constantsURL";
import styles from "./footer.style";

type FooterProps = {
  type: "signUp" | "logIn";
};

const Footer = ({ type }: FooterProps): ReactElement => {
  const ToTerms = (
    <>
      <ToTermsButton URL={PRIVACY_POLICY}>{"개인 정보 처리 방침"}</ToTermsButton>
      <ToTermsButton URL={TERMS_OF_USE}>{"이용 약관"}</ToTermsButton>
    </>
  );
  const ToSignUp = <ToSignUpButton />;

  return (
    <View style={[styles.linkContainer, { marginTop: 158 }]}>
      {type === "signUp" ? ToTerms : ToSignUp}
    </View>
  );
};

export default Footer;
