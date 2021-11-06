import React, { ReactElement } from "react";
import { TouchableOpacity, View } from "react-native";
import { FormikContextType, useFormikContext } from "formik";
import Text from "../../text/text";
import style from "./checkTermsButton.style";

type Values = {
  email: string;
  password: string;
  acceptTerms: boolean;
};

export default function CheckTermsButton(): ReactElement {
  const { setFieldValue, values }: FormikContextType<Values> = useFormikContext();

  return (
    <View style={style.checkTermsContainer}>
      {values.acceptTerms === false ? (
        <TouchableOpacity
          style={[style.checkTermsButton, style.checkTermsButtonFalse]}
          onPress={() => setFieldValue("acceptTerms", true)}
        />
      ) : (
        <TouchableOpacity
          style={[style.checkTermsButton, style.checkTermsButtonTrue]}
          onPress={() => setFieldValue("acceptTerms", false)}
        />
      )}
      <Text weight="400" style={style.checkTermsText}>
        개인정보 처리 방침과 이용약관에 동의합니다.
      </Text>
    </View>
  );
}
