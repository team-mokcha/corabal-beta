import React, { ReactElement } from "react";
import { View } from "react-native";
import { ToExternalButton, ToSignUpButton } from "../../atoms";
import { PRIVACY_POLICY, TERMS_OF_USE } from "@config/constantsURL";
import styles from "./footer.style";

type FooterProps = {
  type: "signUp" | "logIn";
};

const Footer = ({ type }: FooterProps): ReactElement => {
  const ToTerms = (
    <>
      <ToExternalButton type="footer" URL={PRIVACY_POLICY}>
        {"개인 정보 처리 방침"}
      </ToExternalButton>
      <ToExternalButton type="footer" URL={TERMS_OF_USE}>
        {"이용 약관"}
      </ToExternalButton>
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
