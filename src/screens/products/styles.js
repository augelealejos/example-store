import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  goBackText: {
    fontSize: 14,
    fontFamily: "Rubik-Light",
    color: COLORS.black,
  },
  products: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    alignItems: "center",
  },
  notFoundText: {},
  clearIcon: {
    position: "absolute",
    zIndex: 2,
    right: 5,
  },
  productsContent: {
    paddingVertical: 25,
    gap: 15,
  },
});
