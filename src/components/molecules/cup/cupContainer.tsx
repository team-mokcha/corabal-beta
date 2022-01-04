import React, { ReactElement } from "react";
import { TouchableOpacity, Image } from "react-native";
import Point from "../../atoms/icons/common/point";
import styles from "./cupContainer.style";

type cupContainerProps = {
  thumbnail: any;
  price: number;
  callPurchaseCupModal: () => void;
};

const CupContainer = ({
  thumbnail,
  price,
  callPurchaseCupModal
}: cupContainerProps): ReactElement => {
  return (
    <TouchableOpacity
      // onPress={() =>  callPurchaseCupModal()}
      activeOpacity={0.5}
      style={styles.cupWrapper}
    >
      <Image source={thumbnail} style={styles.thumbnail} />
      <Point points={price} fontSize="medium" style={styles.point} />
    </TouchableOpacity>
  );
};

export default CupContainer;
