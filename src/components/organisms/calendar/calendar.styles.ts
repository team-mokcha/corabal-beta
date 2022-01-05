import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    marginBottom: 20
  },
  monthArrowRight: { position: "absolute", bottom: 18, right: 115 },
  monthArrowLeft: { position: "absolute", bottom: 18, left: 115 },
  customHeader: {
    fontSize: 24,
    lineHeight: 34.75,
    marginHorizontal: 0,
    marginBottom: 36,
    padding: 0
  },
  indexContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    paddingLeft: 27
  },
  indexIcon: {
    marginLeft: 10,
    marginRight: 5,
    width: 9,
    height: 4,
    borderRadius: 100
  },
  indexIconZero: {
    backgroundColor: "#76B5FF"
  },
  indexIconMoreThanOne: {
    backgroundColor: "#8E6655"
  },
  indexIconText: {
    fontSize: 12,
    lineHeight: 16,
    color: "#757574"
  }
});

export default styles;
