import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  storageContainer: {
    marginTop: 40
  },
  myCupFont: {
    marginLeft: 24,
    marginVertical: 24,
    fontSize: 18,
    lineHeight: 21.09
  },
  myCupImage: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 132,
    height: 92,
    marginTop: 49,
    marginBottom: 56
  },
  ownedCupContainer: {
    marginBottom: 40,
    marginLeft: 24
  },
  ownedCupsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  ownedCupFont: {
    marginBottom: 40,
    marginLeft: 0,
    marginRight: "auto",
    fontSize: 16,
    lineHeight: 18.75
  }
});

export default styles;
