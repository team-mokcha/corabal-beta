import React, { ReactElement, useEffect } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState } from "@stores/stores";
import { firebaseApp } from "@services/firebaseApp";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Intro,
  Login,
  SignUp,
  Nickname,
  Main,
  Profile,
  Shop,
  Cups,
  MonthlyRecord,
  Record
} from "@pages";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Template from "./template";

const initialTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "white"
  }
};

export type StackNavigatorParams = {
  Intro: undefined;
  Login: undefined;
  SignUp: undefined;
  Nickname: undefined;
  Index: undefined;
  Profile: undefined;
  Shop: undefined;
  Cups: undefined;
  MonthlyRecord: undefined;
  Record: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
  const currentUserState = HSUseState(globalUserState);
  const userIn = currentUserState.userIn.get();
  const loggedIn = currentUserState.loggedIn.get();
  const nickNameIn = currentUserState.nicknameIn.get();
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user && user.email !== null) {
        currentUserState.userIn.set(true);
        currentUserState.userEmail.set(user.email);
      } else {
        currentUserState.userIn.set(false);
      }
    });
  }, [userIn, loggedIn, nickNameIn]);

  return (
    <NavigationContainer theme={initialTheme}>
      {(userIn && nickNameIn) || loggedIn ? (
        <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Index" component={DrawerNavigator} />
          <Stack.Screen name="Record" component={Record} />
          <Stack.Screen name="MonthlyRecord" component={MonthlyRecord} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Nickname" component={Nickname} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

// Drawer
export type DrawerNavigationParams = {
  Main: undefined;
  Profile: undefined;
  Shop: undefined;
  Cups: undefined;
  Record: undefined;
};

const Drawer = createDrawerNavigator();

export const DrawerNavigator = (): ReactElement => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <Template {...props} />}
      screenOptions={{
        drawerType: "front",
        headerTintColor: "white",
        drawerPosition: "right",
        swipeEnabled: false,
        headerShown: false
      }}
    >
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Shop" component={Shop} />
      <Drawer.Screen name="Cups" component={Cups} />
      <Drawer.Screen name="Record" component={Record} />
    </Drawer.Navigator>
  );
};
