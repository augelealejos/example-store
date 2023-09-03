import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    
  },
  imageBackground: {
    width: "100%",
    height: 150,
    justifyContent: "flex-end",    
  },
  imageBackgroundTablet: {
    width: "100%",
    height: 250,
    justifyContent: "flex-end",  
  },
  categoryName: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    padding: 20,
  },
  categoryNameTablet: {
    fontSize: 35,
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    padding: 20,
  },
});
