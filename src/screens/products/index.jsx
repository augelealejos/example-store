import { Ionicons } from "@expo/vector-icons";import { useState } from "react";
import { View, Text, FlatList, ActivityIndicator, } from "react-native";
import { Input } from "../../components";
import { useGetProductsByCategoryQuery } from "../../store/products/api";
import ProductItem from "../../components/products/item/index";
import { styles } from "./styles";
import { COLORS } from "../../themes";
import { GestureHandlerRootView } from "react-native-gesture-handler";


function Product({ navigation, route }) {
  const { categoryId, color } = route.params;
  const { data, error, isLoading } = useGetProductsByCategoryQuery(categoryId);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const filteredProductsByCategory = data?.filter((product) => product.categoryId === categoryId);

  const onHandleBlur = () => {};
  const onHandleChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandleFocus = () => {};
  const filterBySearch = (query) => {
    let updatedProductList = [...filteredProductsByCategory];
    updatedProductList = updatedProductList.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredProducts(updatedProductList);
  };
  const clearSearch = () => {
    setSearch("");
    setFilteredProducts([]);
  };

  if (isLoading)
  return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder="Search"
          borderColor={borderColor}
        />
        {search.length > 0 && (
          <Ionicons
            style={styles.clearIcon}
            onPress={clearSearch}
            name="close"
            size={20}
            color={COLORS.primary}
          />
        )}
      </View>
      <FlatList
        style={styles.products}
        data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => (
          <ProductItem item={item} color={color} navigation={navigation} />
        )}
        contentContainerStyle={styles.productsContent}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>No products found :(</Text>
        </View>
      )}
    </GestureHandlerRootView>
  );
}

export default Product;
