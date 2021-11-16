import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import Text from "../../text/text";
import styles from "./toExternalButton.styles";

type ToExternalButtonParams = {
  children: React.ReactNode;
  URL: string;
  type: "footer" | "navigator";
};

export default function ToExternalButton({
  children,
  URL,
  type
}: ToExternalButtonParams): ReactElement {
  return (
    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(URL)}>
      {type === "footer" ? (
        <Text style={styles.termsOfUseLinkText} weight="400">
          {children}
        </Text>
      ) : (
        <Text style={styles.fonts}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
