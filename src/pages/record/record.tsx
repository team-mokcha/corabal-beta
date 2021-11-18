import React, { useEffect, ReactElement, useState } from "react";
import styles from "./record.style";
import { View, Image } from "react-native";
import { ButtonGradient, Header } from "@Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../navigator/index";
import { DateText } from "../../components/atoms/index";
import { PickingContainer } from "../../components/organisms/index";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Record">;
};

const Record = ({ navigation }: NavigationProps): ReactElement => {
  const [oneShot, setOneShot] = useState(false);
  const [twoShot, setTwoShot] = useState(true);
  const [threeShot, setThreeShot] = useState(false);
  const [water, setWater] = useState(true);
  const [milk, setMilk] = useState(false);
  const [syrup, setSyrup] = useState(false);
  const [cream, setCream] = useState(false);

  // 화면 나갔다가 들어올 때마다 초기화
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setOneShot(false);
      setTwoShot(true);
      setThreeShot(false);
      setWater(true);
      setMilk(false);
      setSyrup(false);
      setCream(false);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Header back={false} close={true} />
      <View style={styles.container}>
        <DateText type="present" />
        <Image style={styles.cupImage} source={require("@assets/cup-of-today.png")} />
        {/* total option container */}
        <View style={styles.totalPickingContainer}>
          <PickingContainer
            oneShot={oneShot}
            twoShot={twoShot}
            threeShot={threeShot}
            setOneShot={setOneShot}
            setTwoShot={setTwoShot}
            setThreeShot={setThreeShot}
            milk={milk}
            water={water}
            setMilk={setMilk}
            setWater={setWater}
            cream={cream}
            syrup={syrup}
            setCream={setCream}
            setSyrup={setSyrup}
          />
        </View>
        {/* 11월 셋째 주 스프린트 [11/5 - 11/21] #44 댓글 참고 - 21.11.18 수연 */}
        <ButtonGradient style={{ marginBottom: "auto", maxHeight: 48 }} title="완료" />
      </View>
    </>
  );
};

export default Record;
