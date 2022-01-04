import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginVertical: 40
  },
  cupWrapper: {
    alignItems: "center"
  },
  point: {
    width: 12,
    height: 12
  },
  emptyCup: {
    width: 72,
    height: 72
  }
});

export default styles;
