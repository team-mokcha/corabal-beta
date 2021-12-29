import React, { ReactElement } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./floatingButton.styles";

const FloatingButton = ({ navigation }: any): ReactElement => {
  return (
    <View style={styles.floatingBtnContainer}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Record")}>
        <Image source={require("@assets/main/btn_record.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;
