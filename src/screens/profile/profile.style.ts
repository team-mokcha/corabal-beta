import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40
  },
  profileNameContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15
  },
  profileNameFont: {
    fontSize: 18,
    lineHeight: 21
  },
  profileEmailFont: {
    fontSize: 16,
    lineHeight: 18
  },
  EveryRecordContainer: {
    flexDirection: "row",
    marginLeft: 64,
    marginRight: 34,
    marginBottom: 53,
    justifyContent: "space-between"
  },
  alginCenter: {
    alignItems: "center"
  },
  eachRecordNameFont: {
    fontSize: 14,
    color: "#757474",
    lineHeight: 16.41
  },
  totalRecords: {
    fontSize: 24
  },
  totalPoints: {
    fontSize: 24,
    marginBottom: 13
  },
  logout: {
    marginBottom: 24
  },
  deletingAccountFont: {
    fontSize: 12,
    color: "#F15F5F"
  }
});

export default styles;
