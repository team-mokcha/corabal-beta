import React, { ReactElement, SetStateAction } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import Point from "../../atoms/icons/common/point";
import styles from "./cupContainer.style";

type cupContainerProps = {
  type: "shop" | "modal";
  thumbnail: any;
  thumbnailSize: "small" | "large";
  price: number;
  callPurchaseCupModal?: React.Dispatch<SetStateAction<boolean>>;
};

const CupContainer = ({
  type,
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

  switch (type) {
    case "modal":
      return (
        <View style={styles.cupWrapper}>
          <Image
            source={thumbnail}
            style={[styles.thumbnail, handleThumbnailSize(thumbnailSize)]}
          />
          <Point points={price} fontSize="medium" style={styles.point} />
        </View>
      );
    case "shop":
      if (callPurchaseCupModal) {
        return (
          <TouchableOpacity
            onPress={() => callPurchaseCupModal(true)}
            activeOpacity={0.5}
            style={styles.cupWrapper}
          >
            <Image
              source={thumbnail}
              style={[styles.thumbnail, handleThumbnailSize(thumbnailSize)]}
            />
            <Point points={price} fontSize="medium" style={styles.point} />
          </TouchableOpacity>
        );
      } else {
        throw new Error("When type is 'shop, there should be a function 'callPurchaseModal'.");
      }
  }
};

export default CupContainer;
