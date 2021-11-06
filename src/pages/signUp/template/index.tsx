import React, { ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import Body from "../../../components/organisms/auth/body";
import Footer from "../../../components/organisms/auth/footer";
import styles from "./signUp.style";

type TemplateProps = {
  validationSchema: any;
  handleSignUp: (...args: any) => void;
};

export default function Template({ validationSchema, handleSignUp }: TemplateProps): ReactElement {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Body type="signUp" validationSchema={validationSchema} handleAuth={handleSignUp} />
        <Footer type="signUp" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
