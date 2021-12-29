import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  statusContainer: {
    marginTop: 12,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 27
  },
  aimBtnContainer: {
    flexDirection: "row",
    marginRight: 170,
    alignItems: "center"
  },
  aim: {
    fontSize: 24
  },
  pointFont: {
    fontWeight: "bold",
    color: "#2B8CFF"
  },
  aimNextBtn: {
    marginLeft: 8,
    width: 8,
    height: 14
  },
  mainContainer: {
    flexDirection: "row"
  },
  mainCatImg: {
    width: 128,
    height: 128,
    marginRight: 28
  },
  statusTitleFont: {
    fontSize: 13
  },
  statusByMonthFont: {
    fontSize: 11,
    fontWeight: "400",
    color: "#757474"
  },
  myPointContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  myPointImg: {
    width: 12,
    height: 12,
    marginRight: 4
  },
  myPointFont: {
    fontSize: 11
  }
});

export default styles;
