import React, { ReactElement } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Point from "../../atoms/icons/common/point";
import styles from "./shopBody.style";

// 컵 가게의 컵은 고정되어 있음. 이미지만 달라짐. 통신해서 불러오는 것도 아님.
// 단, 보유 중  여부가 문제.
// 일단....

const ShopBody = (): ReactElement => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        // onPress={() => setWantToBuy(!wantToBuy)}
        activeOpacity={0.5}
        style={styles.cupWrapper}
      >
        <Image style={styles.emptyCup} source={require("@assets/cups/cup1.png")} />
        <Point points={30} fontSize="large" style={{ marginTop: 10 }} />
      </TouchableOpacity>
    </View>
  );
};

export default ShopBody;
