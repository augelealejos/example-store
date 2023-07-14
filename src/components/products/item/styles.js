import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
  productsContent: {
    paddingVertical: 25,
    gap: 15,
  },
  productContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: "45%",
    marginHorizontal: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  productDetail: {
    padding: 10,
    gap: 5,
  },
  productName: {
    fontSize: 14,
    fontFamily: "Rubik-Light",
  },
  productPrice: {
    fontSize: 15,
    fontFamily: "Rubik-Light",
  },
}); 
