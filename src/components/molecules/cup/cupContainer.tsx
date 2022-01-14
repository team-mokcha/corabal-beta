import React, { ReactElement } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { globalPurchaseModalState } from "@stores/stores";
import { TouchableOpacity, Image, View } from "react-native";
import Point from "../../atoms/icons/common/point";
import styles from "./cupContainer.style";

type cupContainerProps = {
  type: "shop" | "modal";
  thumbnail: any;
  thumbnailSize: "small" | "large";
  price: number;
};

const CupContainer = ({
  type,
  thumbnail,
  thumbnailSize,
  price
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

  const openModal = HSUseState(globalPurchaseModalState).modalVisibility;

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
      return (
        <TouchableOpacity
          onPress={() => openModal.set(true)}
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
  }
};

export default CupContainer;
