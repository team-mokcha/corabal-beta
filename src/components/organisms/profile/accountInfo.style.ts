import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40
  },
  profileIcon: {
    marginBottom: 14
  },
  nicknameContainer: {
    flexDirection: "row",
    marginTop: 10,
    height: 28
  },
  nicknameFont: {
    fontSize: 18,
    lineHeight: 21
  },
  nicknameEditIcon: {
    position: "absolute",
    top: -2,
    right: -11
  },
  emailFont: {
    marginTop: 15,
    fontSize: 16,
    lineHeight: 18
  }
});

export default styles;
