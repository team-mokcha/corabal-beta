import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 13,
    marginLeft: 24
  },
  plusBtn: {
    marginLeft: "auto",
    marginRight: 24
  },
  bodyContainer: {
    display: "flex",
    flexDirection: "column"
    // width: "0px",
    // height: "0px"
  },
  completeBtn: {
    width: 264,
    height: 48,
    marginLeft: 48,
    marginRight: 48
  }
});

export default styles;
