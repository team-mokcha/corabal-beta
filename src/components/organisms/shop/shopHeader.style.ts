import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shopHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginHorizontal: 24
  },
  profileWrapper: {
    flexDirection: "row",
    fontSize: 18,
    lineHeight: 21,
    color: "#000000"
  },
  userWrapper: {
    flexDirection: "column",
    justifyContent: "center"
  },
  profileIcon: {
    width: 40,
    height: 40,
    marginRight: 8
  },
  pointWrapper: {
    flexDirection: "row"
  },
  pointFont: {
    fontSize: 11
  },
  pointIcon: {
    resizeMode: "contain",
    width: 12,
    height: 12,
    marginTop: 4,
    marginRight: 3
  },
  watchingAdBtn: {
    width: 100,
    height: 40
  }
});

export default styles;
