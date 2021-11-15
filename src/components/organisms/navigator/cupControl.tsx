import React, { ReactElement } from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { View } from "react-native";
import { CupButton } from "../../molecules/index";
import styles from "./cupControl.style";

const CupControl = (props: DrawerContentComponentProps): ReactElement => {
  return (
    <View style={styles.shopAndCups}>
      <CupButton type="shop" {...props} />
      <CupButton type="storage" {...props} />
    </View>
  );
};

export default CupControl;
