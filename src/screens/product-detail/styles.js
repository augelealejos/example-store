import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,    
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  name: {
    color: COLORS.secondary,
    fontFamily: FONTS.bold,
    fontSize: 18,
  },
  description: {
    color: COLORS.secondary,
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
  tagTitle: {
    color: COLORS.secondary,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  price: {
    color: COLORS.secondary,
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  containerTags: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
  },
  containerTag: {
    padding: 10,
    borderRadius: 10,
    
  },
  tag: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  containerButton: {
    marginVertical: 10,
  },
  addToCartButton: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    
  },
  addToCartText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.white,
  },
  containerLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },  
  footerContainer: {
    width: "100%",
    backgroundColor: COLORS.primary,
    borderTopColor: COLORS.primary,
    borderTopWidth: 4,
    padding: 10,
  },
  addToCart: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  addToCartText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
});
