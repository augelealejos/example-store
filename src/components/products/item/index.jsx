import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";

function ProductItem({ navigation, item, color }) {
  const onSelectProduct = ({ productId, name }) => {
    navigation.navigate("ProductDetail", { productId, color, name });
  };

  return (
    <TouchableOpacity
      onPress={() => onSelectProduct({ productId: item.id, name: item.name })}
      style={styles.productContainer}
    >
      <ImageBackground
        source={{ uri: item.image }}
        style={[styles.productImage, { backgroundColor: color }]}
        resizeMethod="resize"
        resizeMode="cover"
      />
      <View style={styles.productDetail}>
        <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
        <Text style={styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ProductItem;
