import { StyleSheet } from "react-native";

import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});