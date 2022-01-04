import React, { ReactElement } from "react";
import { TouchableOpacity, Image } from "react-native";
import Point from "../../atoms/icons/common/point";
import styles from "./cupContainer.style";

type cupContainerProps = {
  thumbnail: any;
  thumbnailSize: "small" | "large";
  price: number;
  callPurchaseCupModal?: () => void;
};

const CupContainer = ({
  thumbnail,
  thumbnailSize,
  price,
  callPurchaseCupModal
}: cupContainerProps): ReactElement => {
  const handleThumbnailSize = (size: "small" | "large") => {
    switch (size) {
      case "small":
        return {
          width: 72,
          height: 72
        };
      case "large":
        return {
          width: 130,
          height: 130
        };
    }
  };

  return (
    <TouchableOpacity
      // onPress={() =>  callPurchaseCupModal()}
      activeOpacity={0.5}
      style={styles.cupWrapper}
    >
      <Image source={thumbnail} style={[styles.thumbnail, handleThumbnailSize(thumbnailSize)]} />
      <Point points={price} fontSize="medium" style={styles.point} />
    </TouchableOpacity>
  );
};

export default CupContainer;
