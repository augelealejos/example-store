
import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    goBack: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: Platform.OS === "android" ? 15 : 0,
    },
    goBackText: {
      fontSize: 14,
      color: COLORS.secondary,
    },
});