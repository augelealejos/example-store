import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../../themes";

const CartItem = ({ id, categoryId, name, price, image, currency, quantity, stock, ...props }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {}} style={styles.deleteButton}>
            <Ionicons name="close-outline" size={20} color={COLORS.primary} />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{`${currency.code} ${price}`}</Text>
        <Text style={styles.qty}>{`qty: ${quantity} stock: ${stock}`}</Text>
        </View>
        <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.increaseButton} onPress={() => {}}>
            <Text style={styles.increaseButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.decreaseButton} onPress={() => {}}>
            <Text style={styles.decreaseButtonText}>-</Text>
        </TouchableOpacity>
        </View>     
    </View>
  );
};

export default CartItem;