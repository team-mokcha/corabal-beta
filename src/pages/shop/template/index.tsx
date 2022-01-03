import React, { ReactElement } from "react";
import { ScrollView } from "react-native";
import { Header } from "@Components";
import ShopHeader from "../../../components/organisms/shop/shopHeader";
import ShopBody from "../../../components/organisms/shop/shopBody";
import styles from "./shop.style";

// 보유중인지 아닌지 다르게 구분해 상태관리하기 필요

const Template = (): ReactElement => {
  return (
    <ScrollView style={styles.container}>
      <Header back={true} close={false} />
      <ShopHeader nickname="부부냥냥이이" points={30} />
      <ShopBody />
      {/* Modal pop up when Press purchase button */}
      {/* <Modal isVisible={wantToBuy}>
          <Modal.Container>
            <Modal.Body>
              <Image style={styles.buyingCup} source={require("@assets/empty-cup.png")} />
              <Text style={styles.pointFont}>
                <Image style={styles.point} source={require("@assets/btn_point.png")} />
                {} 100p
              </Text>
              {isBuying ? <Text>구매가 완료되었습니다!</Text> : <Text>정말 구매하시겠습니까?</Text>}
              <Text style={styles.myPointFont}>
                내 포인트 <Image style={styles.point} source={require("@assets/btn_point.png")} />
                {} {globalPoint.current.get()}p
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <ButtonNormal
                onPress={() => setWantToBuy(!wantToBuy)}
                style={styles.modalButton}
                title="취소"
              />
              <ButtonGradient
                onPress={() => {
                  setIsBuying(true);
                  setTimeout(() => setWantToBuy(!wantToBuy), 2000);
                }}
                style={styles.modalButton}
                title="구매"
              />
            </Modal.Footer>
          </Modal.Container>
        </Modal> */}
    </ScrollView>
  );
};

export default Template;
