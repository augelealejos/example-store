import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 5,
  },
  preview: {
    width: 350,
    height: 220,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginVertical: 10,
  },
  text: {
    color: COLORS.secondary,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  buttonContainer: {
    flex: 1,
    width: 350,
    gap: 15,
  },
});