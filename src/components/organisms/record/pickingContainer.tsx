import React, { ReactElement } from "react";
import { PickingRow } from "../../molecules/index";

const PickingContainer = (): ReactElement => {
  return (
    <>
      <PickingRow type="shot" />
      <PickingRow type="base" />
      <PickingRow type="option" />
    </>
  );
};

export default PickingContainer;
