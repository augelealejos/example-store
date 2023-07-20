import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 10,
    backgroundColor: COLORS.primary,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tabletContainer: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 10,
    backgroundColor: COLORS.primary,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  tabletTitle: {
    fontSize: 35,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
});
