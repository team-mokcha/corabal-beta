import React, { ReactElement } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Text } from "@Components";
import styles from "./shopBody.style";

const ShopBody = (): ReactElement => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        // onPress={() => setWantToBuy(!wantToBuy)}
        activeOpacity={0.5}
        style={styles.cupWrapper}
      >
        <Image style={styles.emptyCup} source={require("@assets/empty-cup.png")} />
        <Text>
          <Image style={styles.point} source={require("@assets/btn_point.png")} />
          <Text>{} 30p</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => setWantToBuy(!wantToBuy)}
        activeOpacity={0.5}
        style={styles.cupWrapper}
      >
        <Image style={styles.emptyCup} source={require("@assets/empty-cup.png")} />
        <Text>
          <Image style={styles.point} source={require("@assets/btn_point.png")} />
          <Text>{} 100p</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => setWantToBuy(!wantToBuy)}
        activeOpacity={0.5}
        style={styles.cupWrapper}
      >
        <Image style={styles.emptyCup} source={require("@assets/empty-cup.png")} />
        <Text>
          <Image style={styles.point} source={require("@assets/btn_point.png")} />
          <Text>{} 100p</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShopBody;
