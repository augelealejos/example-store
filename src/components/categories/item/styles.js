import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: "100%",
    height: 150,
    justifyContent: "flex-end",
  },
  categoryName: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
    padding: 20,
  },
});
