import React, { ReactElement } from "react";
import { View } from "react-native";
import { Calendar, RecordList } from "@Components";
import Header from "../../../components/organisms/header/header";
import { styles } from "./monthlyRecord.styles";

export default function Template(): ReactElement {
  return (
    <View style={styles.container}>
      <Header back={true} close={false} />
      <Calendar />
      <View style={styles.recordBackground}>
        <View style={styles.recordContainer}>
          <RecordList />
        </View>
      </View>
    </View>
  );
}
