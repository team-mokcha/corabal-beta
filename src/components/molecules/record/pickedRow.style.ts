import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    minWidth: 263,
    height: 71
  },
  cupIcon: {
    resizeMode: "contain",
    width: 43,
    marginTop: 21,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: "auto"
  },
  coffeeTypeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 13,
    marginLeft: 20,
    marginRight: 59
  },
  coffeeTypeItem: {
    marginRight: 16,
    height: 46,
    width: 28
  },
  coffeeTypeIcon: {
    resizeMode: "contain",
    width: 28,
    height: 46
  },
  deleteIcon: {
    marginTop: 21,
    marginBottom: 15,
    resizeMode: "contain",
    width: 24
  }
});

export default styles;
