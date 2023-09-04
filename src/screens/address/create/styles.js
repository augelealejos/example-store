import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 15,
  },
  footerContainer: {
    width: "100%",
    backgroundColor: COLORS.primary,
    borderTopColor: COLORS.primary,
    borderTopWidth: 4,
    padding: 10,
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  confirmButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
});