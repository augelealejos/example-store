import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";

function ProductItem({ item, categorySelected }) {
  return (
    <TouchableOpacity onPress={() => null} style={styles.productContainer}>
      <ImageBackground
        source={{ uri: item.image }}
        style={[styles.productImage, { backgroundColor: categorySelected.color }]}
        resizeMethod="resize"
        resizeMode="contain"
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
