import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 10,
    backgroundColor: COLORS.primary,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "bold",
  },
});
