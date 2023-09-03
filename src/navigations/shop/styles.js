import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  goBack: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginRight: Platform.OS === "android" ? 15 : 0,
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.black,
  },
  icon: {
    marginRight: Platform.OS === "android" ? 15 : 0,
  }
});
