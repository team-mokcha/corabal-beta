import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  columnContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  smallFont: {
    color: "#000000",
    textAlign: "center",
    fontSize: 12,
    lineHeight: 13
  },
  mediumFont: {
    color: "#000000",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20.27
  },
  deactivatedText: {
    color: "#C4C4C4",
    fontSize: 14,
    lineHeight: 20.27
  }
});

export default styles;
