import React, { ReactElement, useState } from "react";
import { ScrollView } from "react-native";
import { Header } from "@Components";
import ShopHeader from "../../../components/organisms/shop/shopHeader";
import ShopBody from "../../../components/organisms/shop/shopBody";
import PurchaseModal from "../../../pages/modals/purchase/purchase";
import styles from "./shop.style";

// 보유중인지 아닌지 다르게 구분해 상태관리하기 필요

const Template = (): ReactElement => {
  return (
    <ScrollView style={styles.container}>
      <Header back={true} close={false} />
      <ShopHeader nickname="부부냥냥이이" points={30} />
      <ShopBody />
      <PurchaseModal type="purchaseCup" />
    </ScrollView>
  );
};

export default Template;
