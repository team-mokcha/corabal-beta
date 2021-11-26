import React, { ReactElement } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import styles from "./form.style";

type SignUpValueProps = {
  email: string;
  password: string;
  acceptTerms: boolean;
};

type LogInValueProps = {
  email: string;
  password: string;
};

type FormProps = {
  type: "signUp" | "logIn";
  validationSchema: any;
  handleAuth: any;
  children: any;
};

export default function Form({
  type,
  validationSchema,
  handleAuth,
  children
}: FormProps): ReactElement {
  const defineInitialValues = (type: string): SignUpValueProps | LogInValueProps | Error => {
    if (type === "signUp") return { email: "", password: "", acceptTerms: false };
    else if (type === "logIn") return { email: "", password: "" };
    else throw new Error("invalid type");
  };
  const defineHandleAuth = (type: string): any => {
    if (type === "signUp")
      return (values: SignUpValueProps) => {
        handleAuth(values.email, values.password, values.acceptTerms);
      };
    else if (type === "logIn")
      return (values: LogInValueProps) => {
        handleAuth(values.email, values.password);
      };
    else throw new Error("invalid type");
  };

  return (
    <Formik
      initialValues={defineInitialValues(type)}
      validationSchema={validationSchema}
      onSubmit={defineHandleAuth(type)}
      validateOnMount={false}
    >
      {() => <View style={styles.inputContainer}>{children}</View>}
    </Formik>
  );
}
