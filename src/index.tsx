import React, { ReactElement } from "react";
import { AppBootstrap } from "@Components";
import Navigator from "./pages/navigator/index";
import { LogBox } from "react-native";
import Toast from "react-native-toast-message";

// LogBox.ignoreLogs(["Setting a timer"]);

export default function App(): ReactElement {
  return (
    <>
      <AppBootstrap>
        <Navigator />
      </AppBootstrap>
      <Toast />
    </>
  );
}
