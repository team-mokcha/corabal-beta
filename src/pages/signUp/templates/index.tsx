import React, { ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { Form, FormField, FormSubmitButton, FormCheckButton, LinkToTerms } from "@Components";
import ErrorModal from "src/pages/error-modal/error-modal";
import { Field } from "formik";
import styles from "./signUp.style";

type ValueProps = {
  email: string;
  password: string;
  acceptTerms: boolean;
};

// type SingUpTemlate = {
//   validationSchema: object;
//   handleSingUp: Function;
//   privacyPolicy: string;
//   termsOfUse: string;
// };

export default function Template({
  validationSchema,
  handleSignUp,
  privacyPolicy,
  termsOfUse
}: any): ReactElement {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{ email: "", password: "", acceptTerms: false }}
          validationSchema={validationSchema}
          validateOnMount={false}
          isInitialValid={false}
          onSubmit={(values: ValueProps) => {
            handleSignUp(values.email, values.password, values.acceptTerms);
          }}
        >
          <ErrorModal />
          <View style={styles.emailContainer}>
            <Field
              name="email"
              component={FormField}
              autoFocus={true}
              placeholder="corabal@gamil.com"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>
          <Field //
            name="password"
            component={FormField}
            secureTextEntry
            textContentType="password"
          />
          <Field //
            type="checkbox"
            name="acceptTerms"
            component={FormCheckButton}
          />
          <FormSubmitButton title="가입하기" />
        </Form>
        <View style={[styles.linkContainer, { marginTop: 158 }]}>
          <LinkToTerms URL={privacyPolicy}>{"개인 정보 처리 방침"}</LinkToTerms>
          <LinkToTerms URL={termsOfUse}>{"이용 약관"}</LinkToTerms>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
