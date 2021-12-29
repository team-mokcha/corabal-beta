import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todayContainer: {
    margin: 24
  },
  todayFontWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  todayFont: {
    fontSize: 18
  },
  cupUpdatingBtn: {
    fontSize: 14,
    color: "#878787"
  },
  recordWrapper: {
    alignItems: "center"
  },
  noRecordImg: {
    resizeMode: "contain",
    width: 26,
    height: 24,
    marginBottom: 4
  },
  recordComment: {
    fontSize: 10,
    color: "#878787",
    textAlign: "center",
    marginBottom: 12
  },
  recordedCupContainer: {
    flexDirection: "row",
    marginBottom: 24,
    marginTop: 24
  },
  recordedCupImg: {
    width: 43,
    height: 28,
    marginRight: 13
  },
  recordingFinishBtn: {
    height: 50
  },
  zeroCupCompleteImg: {
    zIndex: -1,
    position: "absolute",
    top: -1
  },
  zeroCupCompleteFont: {
    color: "#76B5FF",
    fontSize: 18,
    marginTop: 12,
    marginBottom: 10
  },
  disableBtn: {
    width: 300
  }
});

export default styles;
