import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: 14
  },
  buttonWithIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
    paddingBottom: 6
  },
  buttonText: {
    paddingTop: 0,
    fontSize: 14,
    lineHeight: 20
  },
  buttonTextSmall: {
    fontSize: 11,
    lineHeight: 13
  },
  buttonWithIconFont: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 16.41
  },
  buttonWithIconImage: {
    resizeMode: "contain",
    width: 12,
    height: 12
  },
  buttonNormalBorder: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E5E5E5"
  },
  ButtonGradientRadius: {
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 100
  }
});

export default styles;
