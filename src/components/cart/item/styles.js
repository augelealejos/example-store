import { StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 150,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    
    padding: 10,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageContainer: {
    maxWidth: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  detailContainer: {
    justifyContent: "space-between",
    maxWidth: 190,
    gap: 5,
  },
  name: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily: FONTS.regular,
  },
  price: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily: FONTS.bold,
  },
  qty: {
    fontSize: 12,
    color: COLORS.black,
    fontFamily: FONTS.regular,
  },
  stock: {
    fontSize: 12,
    color: COLORS.black,
    fontFamily: FONTS.regular,
  },
  actionContainer: {
    gap: 10,
    flexDirection: "row",
  },
  increaseButton: {
    width:30,
    height:30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  increaseButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
  decreaseButton: {
    width:30,
    height:30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  decreaseButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
  deleteButton: {
    width:30,
    height:30,
    position: "absolute",
    right:10,
    top:10,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteContainer: {},
});