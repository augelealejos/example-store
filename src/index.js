import { useFonts } from "expo-font";
import { SafeAreaView, View, ActivityIndicator } from "react-native";
import RootNavigator from "./navigations";
import { styles } from "./styles";
import { FONTS, COLORS } from "./themes";

export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require("../assets/fonts/Rubik-Regular.ttf"),
    [FONTS.bold]: require("../assets/fonts/Rubik-Bold.ttf"),
    [FONTS.medium]: require("../assets/fonts/Rubik-Italic.ttf"),
    [FONTS.light]: require("../assets/fonts/Rubik-Light.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
  );
}
