import React, { ReactElement } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Text } from "@Components";
import styles from "./optionContainer.style";

type OptionContainerProps = {
  oneShot: boolean;
  twoShot: boolean;
  threeShot: boolean;
  setOneShot: (oneShot: boolean) => void;
  setTwoShot: (twoShot: boolean) => void;
  setThreeShot: (threeShot: boolean) => void;
  milk: boolean;
  water: boolean;
  setMilk: (milk: boolean) => void;
  setWater: (water: boolean) => void;
  syrup: boolean;
  cream: boolean;
  setSyrup: (syrup: boolean) => void;
  setCream: (cream: boolean) => void;
};

const OptionContainer = ({
  oneShot,
  twoShot,
  threeShot,
  setOneShot,
  setTwoShot,
  setThreeShot,
  water,
  milk,
  setWater,
  setMilk,
  syrup,
  cream,
  setSyrup,
  setCream
}: OptionContainerProps): ReactElement => {
  return (
    <>
      {/* shot option container */}
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
      {/* base option container */}
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
      {/* else option container */}
      <View style={styles.eachOptionContainer}>
        <Text style={styles.elseTitle}>추가</Text>
        <View style={styles.flexDirRow}>
          <TouchableOpacity style={styles.optionAlign} onPress={() => setSyrup(!syrup)}>
            {syrup ? (
              <Image style={styles.optionImg} source={require("@assets/syrup-selected.png")} />
            ) : (
              <Image style={styles.optionImg} source={require("@assets/empty-base.png")} />
            )}
            <Text>시럽</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionAlign} onPress={() => setCream(!cream)}>
            {cream ? (
              <Image style={styles.optionImg} source={require("@assets/cream-selected.png")} />
            ) : (
              <Image style={styles.optionImg} source={require("@assets/empty-cream.png")} />
            )}
            <Text>크림</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OptionContainer;
