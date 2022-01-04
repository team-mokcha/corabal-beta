import React, { ReactElement, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { Text, Header } from "@Components";
import styles from "./storage.style";
import firebase from "firebase";

const Cups = (): ReactElement => {
  const [test, setTest] = useState();

  return (
    <>
      <Header back={true} close={false} />
      <ScrollView>
        <Text style={styles.myCupFont}>내 텀블러</Text>
        <View style={styles.presentCupContainer}>
          <Text style={styles.presentCupFont}>현재 텀블러</Text>
          {/* <Image source={require("@assets/empty-cup.png")} /> */}
        </View>
        <Text style={styles.cupsIHave}>보유 텀블러</Text>
        {/* 이거 정렬 어떻게 할지 생각해봐야 한다. */}

        <Image source={{ uri: test }} />
      </ScrollView>
    </>
  );
};

export default Cups;
