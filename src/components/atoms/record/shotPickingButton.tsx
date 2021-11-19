import React, { ReactElement } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Text } from "@Components";
import styles from "./pickingButton.style";

type ShotPickingButtonProps = {
  type: "oneShot" | "twoShot" | "threeShot";
  setOneShot: (oneShot: boolean) => void;
  setTwoShot: (twoShot: boolean) => void;
  setThreeShot: (threeShot: boolean) => void;
};

const ShotPickingButton = ({
  type,
  setOneShot,
  setTwoShot,
  setThreeShot
}: ShotPickingButtonProps): ReactElement => {
  return (
    <TouchableOpacity
      activeOpacity={1.0}
      onPress={() => {
        setOneShot(true);
        setTwoShot(false);
        setThreeShot(false);
      }}
    >
      {/* {oneShot ? (
        <Image source={require("@assets/1shot.png")} />
      ) : (
        <Image source={require("@assets/empty-shot.png")} />
      )} */}
      <Text>{}</Text>
    </TouchableOpacity>
  );
};

export default ShotPickingButton;
