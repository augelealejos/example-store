import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./styles";
import { addToCart } from "../../store/cart/cart.slice";
import { useGetProductByIdQuery } from "../../store/products/api";
import { Loader } from "../../components";

function ProductDetail({ navigation, route }) {
  const dispatch = useDispatch();
  const { color, productId } = route.params;
  const { data, isLoading, error } = useGetProductByIdQuery(productId);
  const product = data?.find((product) => product.id === productId);
  
  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (isLoading)
  return (
    <Loader />
  );

  return (
    <View style={styles.container}>
      <View style={[styles.containerImage, { backgroundColor: color }]}>
        <ImageBackground source={{ uri: product.image }} style={styles.image} 
        imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, }} resizeMode="cover" />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>USD {product.price}</Text>
        <Text style={styles.tagTitle}>Tags</Text>
        <View style={styles.containerTags}>
          {product.tags.map((tag) => (
            <TouchableOpacity key={tag} style={[styles.containerTag, { backgroundColor: color }]}>
              <Text style={styles.tag}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>      
      <View style={styles.footerContainer}>
          <TouchableOpacity onPress={onAddToCart} style={styles.addToCart}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductDetail;
