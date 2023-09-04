import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../../themes";

const CartItem = ({
  id,
  categoryId,
  name,
  price,
  image,
  currency,
  quantity,
  stock,
  onIncreaseCartItem,
  onDecreaseCartItem,
  onRemoveCartItem,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onRemoveCartItem(id)} style={styles.deleteButton}>
        <Ionicons name="close-outline" size={20} color={COLORS.primary} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <ImageBackground source={{ uri: image }} style={styles.image} 
        imageStyle={{ borderRadius: 20}}/>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{`${currency.code} ${price}`}</Text>
        <Text style={styles.qty}>{`qty: ${quantity} stock: ${stock}`}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.increaseButton} onPress={() => onIncreaseCartItem(id)}>
          <Text style={styles.increaseButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.decreaseButton} onPress={() => onDecreaseCartItem(id)}>
          <Text style={styles.decreaseButtonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;