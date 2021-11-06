import React, { ReactElement } from "react";
import ButtonNormal from "../../button/button-normal";
import ButtonGradient from "../../button/button-gradient";
import { useFormikContext } from "formik";
import style from "./submitButton.style";

type SubmitButtonProps = {
  title: string;
};

export default function SubmitButton({ title }: SubmitButtonProps): ReactElement {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <>
      {isValid ? (
        <ButtonGradient title={title} onPress={() => handleSubmit()} style={style.button} />
      ) : (
        <ButtonNormal title={title} style={style.button} />
      )}
    </>
  );
}
