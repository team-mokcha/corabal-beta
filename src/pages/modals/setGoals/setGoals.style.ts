import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 26,
    marginRight: 24,
    marginBottom: 23
  },
  headerFontContainer: {
    marginRight: 94
  },
  settingGoalFont: {
    fontSize: 20,
    lineHeight: 28.96,
    marginBottom: 8
  },
  settingGoalDescriptionFont: {
    fontSize: 16,
    lineHeight: 23.17
  },
  bodyContainer: {
    marginLeft: 26,
    marginRight: "auto"
  },
  radioBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginLeft: 0
  },
  radioBtnIcon: {
    marginTop: 3,
    resizeMode: "contain"
  },
  radioBtnFont: {
    marginLeft: 9,
    color: "#757474",
    fontSize: 18,
    lineHeight: 26.06
  },
  confirmBtn: {
    width: 294,
    height: 48
  }
});

export default styles;
