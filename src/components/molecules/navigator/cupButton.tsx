import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "@Components";
import { ShopIcon, StorageIcon } from "../../atoms/index";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

type CupButtonParams = {
  type: "shop" | "storage";
} & DrawerContentComponentProps;

const BUTTON_TEXT = {
  shop: "컵 가게",
  storage: "컵 보관함"
};

const CupButton = ({ navigation, type }: CupButtonParams): ReactElement => {
  switch (type) {
    case "shop": {
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Shop")}>
          <ShopIcon />
          <Text>{BUTTON_TEXT.shop}</Text>
        </TouchableOpacity>
      );
    }
    case "storage": {
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Shop")}>
          <StorageIcon />
          <Text>{BUTTON_TEXT.storage}</Text>
        </TouchableOpacity>
      );
    }
  }
};

export default CupButton;
