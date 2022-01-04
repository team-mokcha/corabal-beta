import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { ButtonGradient, Text } from "@Components";
import Point from "../../atoms/icons/common/point";
import styles from "./shopHeader.style";

type ShopHeaderProps = {
  nickname: string;
  points: number;
  //   callWatchADsModal: () => void;
};

const SHOP_HEADER_TEXT = {
  sir: "님",
  watchAD: "광고 보기 5p",
  pointCriteria: "p"
};

const ShopHeader = ({ nickname, points }: ShopHeaderProps): ReactElement => {
  return (
    <View style={styles.shopHeaderContainer}>
      <View style={styles.profileWrapper}>
        <Image style={styles.profileIcon} source={require("@assets/profile.png")} />
        <View style={styles.userWrapper}>
          <Text weight="500">
            <Text weight="700">{nickname}</Text>
            {SHOP_HEADER_TEXT.sir}
          </Text>
          <Point points={points} fontSize="small" />
        </View>
      </View>
      <ButtonGradient
        // onPress={() => initRewardAds(globalEmail)}
        style={styles.watchingAdBtn}
        title={SHOP_HEADER_TEXT.watchAD}
        smallType={true}
      />
    </View>
  );
};

export default ShopHeader;
