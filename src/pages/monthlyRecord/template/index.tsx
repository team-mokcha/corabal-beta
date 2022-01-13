import React, { ReactElement, useState } from "react";
import { View } from "react-native";
import { Calendar, RecordList } from "@Components";
import Header from "../../../components/organisms/header/header";
import RecordsModal from "../../../pages/modals/records/records";
import { styles } from "./monthlyRecord.styles";

export default function Template(): ReactElement {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <RecordsModal
        type="previous"
        isVisible={modalVisible}
        handleModalVisibility={() => {
          setModalVisible(false);
        }}
      />
      <Header back={true} close={false} />
      <Calendar />
      <View style={styles.recordBackground}>
        <View style={styles.recordContainer}>
          <RecordList setModalVisible={setModalVisible} />
        </View>
      </View>
    </View>
  );
}
