import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes";

export const styles = StyleSheet.create({
  containerKeyboardAvoidingView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    minHeight: 350,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    
    borderRadius: 5,
  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    textAlign: "center",
    color: COLORS.black,
    paddingVertical: 10,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  link: {},
  linkText: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    textAlign: "center",
    color: COLORS.primary,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: 200,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: COLORS.gray,
    width: 200,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    textAlign: "center",
    color: COLORS.white,
  },
});