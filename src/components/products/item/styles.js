import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
  productsContent: {
    paddingVertical: 25,
    gap: 15,
  },
  productContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    width: "45%",
    marginHorizontal: 10,
  },
  productImage: {
    width: "100%",
    height: 150,
  },
  productDetail: {
    padding: 10,
    gap: 5,
  },
  productName: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
