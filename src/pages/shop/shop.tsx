import React, { ReactElement, useState } from "react";
import { initRewardAds } from "@services/functions/handle-ads";
import { globalPointState, globalUserState } from "@stores/stores";
import { useState as HSUseState } from "@hookstate/core";
import Template from "./template";

const Shop = (): ReactElement => {
  const [wantToBuy, setWantToBuy] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const globalPoint = HSUseState(globalPointState);
  const globalUser = HSUseState(globalUserState);
  const globalEmail = globalUser.userEmail.get();

  return <Template />;
};

export default Shop;
