import React, { ReactElement } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Text } from "@Components";
import styles from "./pickingRow.style";

type shotType = {
  type: "shot";
  oneShot: boolean;
  twoShot: boolean;
  threeShot: boolean;
  setOneShot: (oneShot: boolean) => void;
  setTwoShot: (twoShot: boolean) => void;
  setThreeShot: (threeShot: boolean) => void;
};

type baseType = {
  type: "base";
  milk: boolean;
  water: boolean;
  setMilk: (milk: boolean) => void;
  setWater: (water: boolean) => void;
};

type optionType = {
  type: "option";
  syrup: boolean;
  cream: boolean;
  setSyrup: (syrup: boolean) => void;
  setCream: (cream: boolean) => void;
};

type PickingRowProps = shotType | baseType | optionType;

const pickingRow = ({ ...props }: PickingRowProps): ReactElement => {
  switch (props.type) {
    case "shot": {
      const { oneShot, twoShot, threeShot, setOneShot, setTwoShot, setThreeShot } = props;
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
                setOneShot(true);
                setTwoShot(false);
                setThreeShot(false);
              }}
            >
              {oneShot ? (
                <Image style={styles.optionImg} source={require("@assets/1shot.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-shot.png")} />
              )}
              <Text>1샷</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setOneShot(false);
                setTwoShot(true);
                setThreeShot(false);
              }}
            >
              {twoShot ? (
                <Image style={styles.optionImg} source={require("@assets/2shot.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-shot.png")} />
              )}
              <Text>2샷</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setOneShot(false);
                setTwoShot(false);
                setThreeShot(true);
              }}
            >
              {threeShot ? (
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
      const { milk, water, setMilk, setWater } = props;
      return (
        <View style={styles.eachOptionContainer}>
          <Text style={styles.baseTitle}>베이스</Text>
          <View style={styles.flexDirRow}>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setWater(true);
                setMilk(false);
              }}
            >
              {water && !milk ? (
                <Image style={styles.optionImg} source={require("@assets/water-selected.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-base.png")} />
              )}
              <Text>물</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setWater(false);
                setMilk(true);
              }}
            >
              {milk && !water ? (
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
      const { syrup, cream, setSyrup, setCream } = props;
      return (
        <View style={styles.eachOptionContainer}>
          <Text style={styles.elseTitle}>추가</Text>
          <View style={styles.flexDirRow}>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setSyrup(!syrup);
              }}
            >
              {syrup ? (
                <Image style={styles.optionImg} source={require("@assets/syrup-selected.png")} />
              ) : (
                <Image style={styles.optionImg} source={require("@assets/empty-base.png")} />
              )}
              <Text>시럽</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionAlign}
              onPress={() => {
                setCream(!cream);
              }}
            >
              {cream ? (
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
