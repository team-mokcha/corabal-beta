import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cupWrapper: {
    alignItems: "center",
    marginVertical: 40,
    marginHorizontal: 24
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 24
  },
  point: {
    width: 12,
    height: 12
  },
  emptyCup: {
    width: 72,
    height: 72
  },
  buyingCup: {
    width: 41,
    height: 76,
    marginTop: 56,
    marginBottom: 13
  },
  pointFont: {
    fontSize: 13
  },
  myPointFont: {
    fontSize: 12,
    marginTop: -9
  },
  modalButton: {
    width: 136,
    height: 48,
    margin: -10
  }
});

export default styles;
