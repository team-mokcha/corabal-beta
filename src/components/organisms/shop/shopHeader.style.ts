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

  watchingAdBtn: {
    width: 100,
    height: 40
  }
});

export default styles;
