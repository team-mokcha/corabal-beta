import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  eachRecordContainer: {
    alignItems: "center"
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    overflow: "hidden",
    backgroundColor: "#DDDDDD"
  },
  circleFill: {
    backgroundColor: "#76B5FF",
    width: "100%",
    bottom: 0,
    position: "absolute"
  },
  centerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  recordName: {
    fontSize: 16,
    lineHeight: 23.17
  },
  recordPart: {
    fontSize: 15,
    lineHeight: 21.72
  },
  recordTotal: {
    color: "#C4C4C4"
  }
});
