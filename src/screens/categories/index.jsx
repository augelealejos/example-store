import {FlatList, View } from "react-native";
import { CategoryItem, Loader } from "../../components";
import { styles } from "./styles";
import { ORIENTATION } from "../../constants/orientation";
import useOrientation from "../../hooks/useOrientation";
import { useGetCategoriesQuery } from "../../store/categories/api";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function Categories({ navigation }) {
  const { data, error, isLoading } = useGetCategoriesQuery();
  const orientation = useOrientation();

  const onSelectCategory = ({ categoryId, color, name }) => {
    navigation.navigate("Products", { categoryId, color, name });
  };

  if (isLoading)

  return (
    <Loader />
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={data}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          renderItem={({ item }) => (
            <CategoryItem
              {...item}
              onSelectCategory={() =>
                onSelectCategory({
                  categoryId: item.id,
                  color: item.backgroundColor,
                  name: item.name,
                })
              }
              style={orientation === ORIENTATION.LANDSCAPE ? styles.categoryItemLandscape : {}}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </GestureHandlerRootView>
  );
}

export default Categories;
