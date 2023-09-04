import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

export const styles = StyleSheet.create({
  productsContent: {
    paddingVertical: 25,
    gap: 15,
  },
  productContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: "45%",
    marginHorizontal: 10,
    
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
    fontFamily: FONTS.bold,
    color: COLORS.secondary
  },
  productPrice: {
    fontSize: 15,
    fontFamily: FONTS.light,
  },
}); 
