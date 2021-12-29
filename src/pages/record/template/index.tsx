import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { ButtonGradient, Header } from "@Components";
import { DateText } from "../../../components/atoms/index";
import { PickingContainer } from "../../../components/organisms/index";
import styles from "./record.style";

type templateProps = {
  handleAddNormalCupBtn: () => Promise<void>;
};

const Template = ({ handleAddNormalCupBtn }: templateProps): ReactElement => {
  return (
    <>
      <View style={styles.container}>
        <Header back={false} close={true} />
        <DateText type="present" />
        <Image style={styles.cupImage} source={require("@assets/cup-of-today.png")} />
        {/* total option container */}
        <View style={styles.totalPickingContainer}>
          <PickingContainer />
        </View>
        {/* 11월 셋째 주 스프린트 [11/5 - 11/21] #44 댓글 참고 - 21.11.18 수연 */}
        <ButtonGradient
          onPress={() => handleAddNormalCupBtn()}
          style={{ marginBottom: "auto", maxHeight: 48 }}
          title="완료"
        />
      </View>
    </>
  );
};

export default Template;
