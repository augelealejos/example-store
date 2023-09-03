import { StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../../themes";

export const styles = StyleSheet.create({
  orderItemContainer: {
    flex: 1,
    height: 100,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
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
    color: COLORS.black,
  },
  orderBody: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  orderItemTotal: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.black,
  },
  orderItemId: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.black,
  },
});