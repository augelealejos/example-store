import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: COLORS.white,
    borderRadius: 20,
    height: 100,
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
  },
  orderItemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    borderRadius: 5,
  },
  orderHeaderContainer: {
    flex: 1,
  },
  orderItemDate: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.secondary,
  },
  orderBody: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  orderItemTotal: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.secondary,
  },
  orderItemId: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.secondary,
  },
});