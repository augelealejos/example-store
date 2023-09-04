import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({    
    notFound: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    notFoundText: {
        fontFamily: FONTS.bold,
        color: COLORS.secondary
    },
});