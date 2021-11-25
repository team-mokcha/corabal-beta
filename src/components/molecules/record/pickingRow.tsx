import React, { ReactElement, useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Text } from "@Components";
import styles from "./pickingRow.style";

type PickingRowProps = { type: "shot" | "base" | "option" };

const pickingRow = ({ type }: PickingRowProps): ReactElement => {
  // const [selectedCoffeeType, setSelectedCoffeeType] = useState([]); => 필요 없을 듯
  const [shot, setShot] = useState(1);
  const [base, setBase] = useState("water");
  const [option, setOption] = useState("");

  switch (type) {
    case "shot": {
      return (
        <View style={styles.eachOptionContainer}>
          <View style={styles.shotFontContainer}>
            <Text>샷</Text>
            <Image style={styles.shotIcon} source={require("@assets/shot-of-today.png")} />
          </View>
          <View style={styles.flexDirRow}>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setShot(1);
              }}
            >
              {shot === 1 ? (
                <Image style={styles.optionImg} source={require("@assets/1shot.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-shot.png")} />
              )}
              <Text>1샷</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setShot(2);
              }}
            >
              {shot === 2 ? (
                <Image style={styles.optionImg} source={require("@assets/2shot.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-shot.png")} />
              )}
              <Text>2샷</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setShot(3);
              }}
            >
              {shot === 3 ? (
                <Image style={styles.optionImg} source={require("@assets/3shot.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-shot.png")} />
              )}
              <Text>3샷</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    case "base": {
      return (
        <View style={styles.eachOptionContainer}>
          <Text style={styles.baseTitle}>베이스</Text>
          <View style={styles.flexDirRow}>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setBase("water");
              }}
            >
              {base === "water" ? (
                <Image style={styles.optionImg} source={require("@assets/water-selected.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-base.png")} />
              )}
              <Text>물</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setBase("milk");
              }}
            >
              {base === "milk" ? (
                <Image style={styles.optionImg} source={require("@assets/milk-selected.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-base.png")} />
              )}
              <Text>우유</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    case "option": {
      return (
        <View style={styles.eachOptionContainer}>
          <Text style={styles.elseTitle}>추가</Text>
          <View style={styles.flexDirRow}>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setOption("syrup");
              }}
            >
              {option === "syrup" ? (
                <Image style={styles.optionImg} source={require("@assets/syrup-selected.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-base.png")} />
              )}
              <Text>시럽</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setOption("cream");
              }}
            >
              {option === "cream" ? (
                <Image style={styles.optionImg} source={require("@assets/cream-selected.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-cream.png")} />
              )}
              <Text>크림</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
};

export default pickingRow;
