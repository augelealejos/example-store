import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  floatingButtonTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButtonText: {
    fontSize: 25,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 20,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3, 
    borderRadius: 10,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mapImageContainer: {
    backgroundColor: COLORS.primary,
  },
  mapImage: {
    width: 80,
    height: 80,
  },
  itemDetailsContainer: {
    flex: 1,
    gap: 10,
  },
  itemAddress: {},
  itemCoords: {},
});