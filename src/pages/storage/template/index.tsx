import React, { ReactElement } from "react";
import { View, ScrollView, Image } from "react-native";
import { Text, Header } from "@Components";
import CupContainer from "../../../components/molecules/cup/cupContainer";
import styles from "./storage.style";

const CUP_STORAGE_TEXT = {
  myCup: "내 머그컵",
  ownedCup: "보유 컵"
};

const cups = [
  { id: 1, thumbnail: require("@assets/cups/cup1.png"), price: 30 },
  { id: 2, thumbnail: require("@assets/cups/cup2.png"), price: 50 },
  { id: 3, thumbnail: require("@assets/cups/cup3.png"), price: 100 },
  { id: 4, thumbnail: require("@assets/cups/cup4.png"), price: 100 },
  { id: 5, thumbnail: require("@assets/cups/cup5.png"), price: 100 },
  { id: 6, thumbnail: require("@assets/cups/cup6.png"), price: 200 },
  { id: 7, thumbnail: require("@assets/cups/cup7.png"), price: 200 },
  { id: 8, thumbnail: require("@assets/cups/cup8.png"), price: 300 },
  { id: 9, thumbnail: require("@assets/cups/cup9.png"), price: 500 }
];

const Template = (): ReactElement => {
  return (
    <View style={styles.storageContainer}>
      <Header back={true} close={false} />
      <ScrollView>
        <Text weight="500" style={styles.myCupFont}>
          {CUP_STORAGE_TEXT.myCup}
        </Text>
        <Image source={cups[0].thumbnail} style={styles.myCupImage} />
        <View style={styles.ownedCupContainer}>
          <Text weight="300" style={styles.ownedCupFont}>
            {CUP_STORAGE_TEXT.ownedCup}
          </Text>
          <View style={styles.ownedCupsWrapper}>
            {cups.map(cup => (
              <CupContainer
                key={cup.id}
                type="storage"
                thumbnail={cup.thumbnail}
                thumbnailSize="medium"
                price={cup.price}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Template;
