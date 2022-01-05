import React, { ReactElement } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import Text from "../../atoms/text/text";
import styles from "./recordList.styles";

export default function RecordList(): ReactElement {
  return (
    <FlatList
      data={[
        {
          date: [28, "월요일"],
          normalCupRecords: [
            { shot: 1, base: "water", option: "none", timestamp: "210901-16:50:33" }
          ]
        },
        {
          date: [26, "토요일"],
          normalCupRecords: [
            { shot: 1, base: "water", option: "none", timestamp: "210901-16:50:33" },
            { shot: 1, base: "water", option: "none", timestamp: "210901-16:50:33" }
          ]
        }
      ]}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container}>
          <View style={styles.dateContainer}>
            <Text weight="700" style={styles.dateTextNumber}>
              {item.date[0]}
            </Text>
            <Text weight="400" style={styles.dateTextWord}>
              {item.date[1]}
            </Text>
          </View>
          <View style={styles.separatingLine} />
          <View style={styles.cupsContainer}>
            <Image
              style={styles.cupImage}
              source={require("@assets/record/icon_cup_basic_empty.png")}
            />
          </View>
          <View style={styles.buttonMore}>
            <Image source={require("@assets/record/btn_more.png")} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
