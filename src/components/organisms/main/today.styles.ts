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
    fontSize: 18,
    fontWeight: "500"
  },
  cupUpdatingBtn: {
    fontSize: 14,
    fontWeight: "400",
    color: "#878787"
  },
  emptyCupContainer: {
    alignItems: "center"
  },
  emptyCupImg: {
    width: 24,
    height: 24
  },
  emptyCupSaying: {
    fontSize: 10,
    color: "#878787",
    marginBottom: -15
  },
  emptyCupRecordingBtn: {
    marginTop: 20,
    height: 50
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
  }
});

export default styles;
