import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  listCategory: {
    paddingBottom: 20,
    gap: 15,
    fontFamily: FONTS.bold,
  },
  categoryItemLandscape: {
    height: 100,
  },
});
