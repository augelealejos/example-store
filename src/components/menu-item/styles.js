import { StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    width: 350,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    
  },
  content: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.black,
  },
});