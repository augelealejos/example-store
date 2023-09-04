import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerContainer: {
    backgroundColor: COLORS.primary,
    borderTopColor: COLORS.primary,
    borderTopWidth: 4,
    padding: 10,
  },
  addAddress: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  addAddressText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
});