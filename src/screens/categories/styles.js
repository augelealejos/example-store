import { StyleSheet } from "react-native";
import { FONTS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  containerLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
