import React, { ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import Body from "../../../components/organisms/auth/body";
import Footer from "../../../components/organisms/auth/footer";
import styles from "./logIn.style";

type TemplateProps = {
  validationSchema: any;
  handleLogIn: (...args: any) => void;
};

export default function Template({ validationSchema, handleLogIn }: TemplateProps): ReactElement {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Body type="logIn" validationSchema={validationSchema} handleAuth={handleLogIn} />
        <Footer type="logIn" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
