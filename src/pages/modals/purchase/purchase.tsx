import React, { ReactElement, useState } from "react";
import Template from "./template";

type PurchaseModalProps = {
  type: "callCat" | "purchaseCup";
};

const CALL_CAT_TEXT = {
  confirmCallingCatMessage: "고양이를 부르시겠습니까?",
  payCoin: "결제하기",
  watchAD: "광고보기"
};

const BUY_CUP_TEXT = {
  confirmPurchaseMessage: "정말 구매하시겠습니까?",
  cancel: "취소",
  purchase: "구매"
};

const BOUGHT_CUP_TEXT = {
  completePurchaseMessage: "구매가 완료되었습니다!",
  close: "닫기",
  useNow: "바로 사용"
};

const PurchaseModal = ({ type }: PurchaseModalProps): ReactElement => {
  const [isPurchased, setIsPurchased] = useState(false);
  const texts = {
    confirmMessage: "",
    normalBtn: "",
    gradientBtn: ""
  };

  if (type === "callCat") {
    texts.confirmMessage = CALL_CAT_TEXT.confirmCallingCatMessage;
    texts.normalBtn = CALL_CAT_TEXT.payCoin;
    texts.gradientBtn = CALL_CAT_TEXT.watchAD;
  } else if (type === "purchaseCup" && !isPurchased) {
    texts.confirmMessage = BUY_CUP_TEXT.confirmPurchaseMessage;
    texts.normalBtn = BUY_CUP_TEXT.cancel;
    texts.gradientBtn = BUY_CUP_TEXT.purchase;
  } else if (type === "purchaseCup" && isPurchased) {
    texts.confirmMessage = BOUGHT_CUP_TEXT.completePurchaseMessage;
    texts.normalBtn = BOUGHT_CUP_TEXT.close;
    texts.gradientBtn = BOUGHT_CUP_TEXT.useNow;
  }

  return <Template type={type} texts={texts} />;
};

export default PurchaseModal;
