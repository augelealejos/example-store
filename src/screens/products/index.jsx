import { Ionicons } from "@expo/vector-icons";import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import { Input } from "../../components";
import ProductItem from "../../components/products/item/index";
import { styles } from "./styles";
import { COLORS } from "../../themes";
import PRODUCTS from "../../constants/data/products.json";

function Product({ onHandleGoBack, categorySelected }) {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const filteredProductsByCategory = PRODUCTS.filter(
    (product) => product.categoryId === categorySelected.categoryId
  );

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

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
        <Ionicons name="arrow-back" size={30} color={COLORS.primary} />
        <Text style={styles.goBackText}>Go back</Text>
      </TouchableOpacity>
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
          <ProductItem item={item} categorySelected={categorySelected} />
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
    </View>
  );
}

export default Product;
