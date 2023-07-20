import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  imageBackground: {
    width: "100%",
    height: 150,
    justifyContent: "flex-end",
  },
  imageBackgroundTablet: {
    width: "100%",
    height: 250,
    justifyContent: "flex-end",
  },
  categoryName: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    padding: 20,
  },
  categoryNameTablet: {
    fontSize: 35,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    padding: 20,
  },
});
