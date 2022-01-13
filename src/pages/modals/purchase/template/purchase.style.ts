import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyWrapper: {
    textAlign: "center",
    alignItems: "center",
    marginTop: 52
  },
  confirmMessageFont: {
    marginTop: -40,
    marginBottom: 24,
    color: "#000000",
    fontSize: 14,
    lineHeight: 20.27
  },
  pointsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  myPointsFont: {
    marginTop: 2,
    marginRight: 8,
    color: "#000000",
    fontSize: 12,
    lineHeight: 14.06
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    minWidth: 136,
    height: 48
  }
});

export default styles;
