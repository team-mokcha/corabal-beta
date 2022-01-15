import React, { ReactElement } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { globalPurchaseModalState } from "@stores/stores";
import { TouchableOpacity, Image, View } from "react-native";
import Point from "../../atoms/icons/common/point";
import styles from "./cupContainer.style";

type cupContainerProps = {
  type: "shop" | "storage" | "modal";
  thumbnail: any;
  thumbnailSize: "small" | "medium" | "large";
  price: number;
};

const CupContainer = ({
  type,
  thumbnail,
  thumbnailSize,
  price
}: cupContainerProps): ReactElement => {
  const openModal = HSUseState(globalPurchaseModalState).modalVisibility;
  const handleThumbnailSize = (fontSize: "small" | "medium" | "large") => {
    switch (fontSize) {
      case "small":
        return {
          width: 72,
          height: 72
        };
      case "medium":
        return {
          width: 72,
          height: 50
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
    case "storage":
      return (
        <TouchableOpacity
          onPress={() => {
            //
          }}
          activeOpacity={0.5}
          style={[styles.cupWrapper, styles.mediumThumbnail]}
        >
          <Image
            source={thumbnail}
            style={[styles.thumbnail, handleThumbnailSize(thumbnailSize)]}
          />
        </TouchableOpacity>
      );
  }
};

export default CupContainer;
