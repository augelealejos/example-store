import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";
import RootNavigator from "./navigations";
import { Provider } from "react-redux";
import { init } from "./db";
import { store } from "./store";
import { styles } from "./styles";
import { FONTS, COLORS } from "./themes";

init().then(() => {
  console.log("Initialized database");
}).catch((err) => {
  console.log("Initializing db failed");
  console.log(err);
});

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
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </Provider>
  );
}
