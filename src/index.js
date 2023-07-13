import { SafeAreaView, View } from "react-native";
import { styles } from "./styles"
import { Header } from "./components";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Categories" />
      </View>
    </SafeAreaView>
  );
}
