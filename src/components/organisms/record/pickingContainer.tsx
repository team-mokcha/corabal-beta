import React, { ReactElement } from "react";
import { PickingRow } from "../../molecules/index";

type PickingContainerProps = {
  oneShot: boolean;
  twoShot: boolean;
  threeShot: boolean;
  setOneShot: (oneShot: boolean) => void;
  setTwoShot: (twoShot: boolean) => void;
  setThreeShot: (threeShot: boolean) => void;
  milk: boolean;
  water: boolean;
  setMilk: (milk: boolean) => void;
  setWater: (water: boolean) => void;
  syrup: boolean;
  cream: boolean;
  setSyrup: (syrup: boolean) => void;
  setCream: (cream: boolean) => void;
};

const PickingContainer = ({
  oneShot,
  twoShot,
  threeShot,
  setOneShot,
  setTwoShot,
  setThreeShot,
  water,
  milk,
  setWater,
  setMilk,
  syrup,
  cream,
  setSyrup,
  setCream
}: PickingContainerProps): ReactElement => {
  return (
    <>
      <PickingRow
        type="shot"
        oneShot={oneShot}
        twoShot={twoShot}
        threeShot={threeShot}
        setOneShot={setOneShot}
        setTwoShot={setTwoShot}
        setThreeShot={setThreeShot}
      />
      <PickingRow type="base" water={water} milk={milk} setWater={setWater} setMilk={setMilk} />
      <PickingRow
        type="option"
        cream={cream}
        syrup={syrup}
        setCream={setCream}
        setSyrup={setSyrup}
      />
    </>
  );
};

export default PickingContainer;
