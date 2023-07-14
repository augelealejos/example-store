import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaView, View, ActivityIndicator } from "react-native";
import { Header } from "./components";
import { Categories, Products } from "./screens";
import { styles } from "./styles";
import { FONTS, COLORS } from "./themes";

const categoryDefault = {
  categoryId: null,
  color: COLORS.primary,
};

export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require("../assets/fonts/Rubik-Regular.ttf"),
    [FONTS.bold]: require("../assets/fonts/Rubik-Bold.ttf"),
    [FONTS.medium]: require("../assets/fonts/Rubik-Italic.ttf"),
    [FONTS.light]: require("../assets/fonts/Rubik-Light.ttf"),
  });
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryDefault);
  const headerTitle = isCategorySelected ? "Products" : "Categories";

  const onHandleSelectCategory = ({ categoryId, color }) => {
    setSelectedCategory({ categoryId, color });
    setIsCategorySelected(!isCategorySelected);
  };

  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(categoryDefault);
  };

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={headerTitle} style={{ backgroundColor: selectedCategory.color }} />
        {isCategorySelected ? (
          <Products onHandleGoBack={onHandleNavigate} categorySelected={selectedCategory} />
        ) : (
          <Categories onSelectCategory={onHandleSelectCategory} />
        )}
      </View>
    </SafeAreaView>
  );
}
