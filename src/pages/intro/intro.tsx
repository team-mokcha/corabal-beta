import React, { ReactElement } from "react";
import Template from "./template/index";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Intro">;
};

export default function Intro({ navigation }: NavigationProps): ReactElement {
  return <Template navigation={navigation} />;
}
