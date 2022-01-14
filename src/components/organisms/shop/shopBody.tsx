import React, { ReactElement } from "react";
import { View } from "react-native";
import CupContainer from "../../molecules/cup/cupContainer";
import styles from "./shopBody.style";

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

const ShopBody = (): ReactElement => {
  return (
    <View style={styles.wrapper}>
      {cups.map(cup => {
        return (
          <CupContainer
            key={cup.id}
            type="shop"
            thumbnail={cup.thumbnail}
            thumbnailSize="small"
            price={cup.price}
          />
        );
      })}
    </View>
  );
};

export default ShopBody;
