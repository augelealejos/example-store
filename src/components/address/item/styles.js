import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

export const styles = StyleSheet.create({    
    itemContainer: {
        flexDirection: "row",
        padding: 20,
        marginHorizontal: 20,
        marginTop: 15,
        backgroundColor: COLORS.white,
        
        borderRadius: 10,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    mapImageContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: 20
    },
    mapImage: {
        width: 80,
        height: 80,
    },
    itemDetailsContainer: {
        flex: 1,
        gap: 10,
    },
    itemAddress: {
        fontFamily: FONTS.bold,
        color: COLORS.secondary
    },
    itemCoords: {
        color: COLORS.secondary
    },
});