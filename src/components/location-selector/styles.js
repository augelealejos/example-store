import { StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
  preview: {
    width: 350,
    height: 220,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginVertical: 15,
  },
  text: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  buttonContainer: {
    flex: 1,
    width: 350
  },
});