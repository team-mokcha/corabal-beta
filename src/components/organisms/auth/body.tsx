import React, { ReactElement } from "react";
import { View } from "react-native";
import ErrorModal from "../../../pages/error-modal/error-modal";
import { Field } from "formik";
import { Form, InputField, SubmitButton, CheckTermsButton } from "../../molecules";
import styles from "./body.style";

type BodyProps = {
  type: "signUp" | "logIn";
  validationSchema: any;
  handleAuth: any;
};

const Body = ({ type, validationSchema, handleAuth }: BodyProps): ReactElement => {
  const SIGN_UP_TEXT = {
    placeholder: "corabal@gamil.com",
    btn: "가입하기"
  };
  const LOGIN_TEXT = {
    placeholder: "가입한 이메일을 입력해주세요",
    btn: "로그인"
  };

  return (
    <Form type={type} validationSchema={validationSchema} handleAuth={handleAuth}>
      <ErrorModal />
      <View style={styles.emailContainer}>
        <Field
          name="email"
          component={InputField}
          autoFocus={true}
          placeholder={type === "signUp" ? SIGN_UP_TEXT.placeholder : LOGIN_TEXT.placeholder}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
      </View>
      <Field //
        name="password"
        component={InputField}
        secureTextEntry
        textContentType="password"
      />
      {type === "signUp" && (
        <Field //
          type="checkbox"
          name="acceptTerms"
          component={CheckTermsButton}
        />
      )}
      <SubmitButton title={type === "signUp" ? SIGN_UP_TEXT.btn : LOGIN_TEXT.btn} />
    </Form>
  );
};

export default Body;
