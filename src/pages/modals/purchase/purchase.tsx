import React, { ReactElement } from "react";
import Template from "./template";

type PurchaseModalProps = {
  type: "callCat" | "purchaseCup";
};

const PurchaseModal = ({ type }: PurchaseModalProps): ReactElement => {
  const CALL_CAT_TEXT = {
    confirmCallingCatMessage: "고양이를 부르시겠습니까?",
    payCoin: "결제하기",
    watchAD: "광고보기"
  };

  const BUY_CUP_TEXT = {
    confirmPurchaseMessage: "정말 구매하시겠습니까?",
    myPoint: "내 포인트",
    cancel: "취소",
    purchase: "구매"
  };

  const BOUGHT_CUP_TEXT = {
    completePurchaseMessage: "구매가 완료되었습니다!",
    myPoint: "내 포인트",
    close: "닫기",
    useNow: "바로 사용"
  };

  return (
    <Template
      type={type}
      callCatText={CALL_CAT_TEXT}
      buyCupText={BUY_CUP_TEXT}
      boughtCupText={BOUGHT_CUP_TEXT}
    />
  );
};

export default PurchaseModal;
