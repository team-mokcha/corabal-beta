import React, { ReactElement } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "@Components";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import styles from "./cupButton.style";

type CupButtonParams = {
  type: "shop" | "storage";
} & DrawerContentComponentProps;

const BUTTON_TEXT = {
  shop: "컵 가게",
  storage: "컵 보관함"
};

const SwitchRoute = (type: string): string => {
  switch (type) {
    case "shop":
      return "Shop";
    case "storage":
      return "Storage";
    default:
      throw new Error("invalid type.");
  }
};

const CupButton = ({ navigation, type }: CupButtonParams): ReactElement => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(SwitchRoute(type))}>
      {type === "shop" ? (
        <View style={styles.cupButtonContainer}>
          <Image source={require("@assets/nav/shop.png")} resizeMode="contain" />
          <Text weight="500">{BUTTON_TEXT.shop}</Text>
        </View>
      ) : (
        <View style={styles.cupButtonContainer}>
          <Image source={require("@assets/nav/cups.png")} resizeMode="contain" />
          <Text weight="500">{BUTTON_TEXT.storage}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CupButton;
