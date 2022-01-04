import React, { ReactElement } from "react";
import { View, SafeAreaView, Image, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./mainHeader.style";
import { DrawerActions } from "@react-navigation/routers";

const MainHeader = (): ReactElement => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate("Profile")}>
          <Image resizeMode="contain" source={require("@assets/main/header-profile.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calendarIcon}
          onPress={() => navigation.navigate("MonthlyRecord")}
        >
          <Image source={require("@assets/main/header-calendar.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Image source={require("@assets/main/header-hamburger.png")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainHeader;
