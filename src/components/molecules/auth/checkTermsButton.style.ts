import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  checkTermsContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    marginTop: 21,
    marginLeft: 23,
    width: 325
  },
  checkTermsButton: {
    marginTop: 4,
    marginBottom: 2,
    marginRight: 4,
    alignContent: "center",
    justifyContent: "center",
    width: 12,
    height: 12,
    borderWidth: 1,
    borderRadius: 100
  },
  checkTermsButtonTrue: {
    backgroundColor: "#76B5FF",
    borderColor: "white"
  },
  checkTermsButtonFalse: {
    borderColor: "#9D9D9D"
  },
  checkTermsText: {
    color: "#565656",
    fontSize: 12,
    lineHeight: 17
  }
});

export default styles;
