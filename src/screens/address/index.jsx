import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { selectPlaces } from "../../db/index";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AddressItem } from "../../components";

const Address = ({ navigation }) => {
  const [places, setPlaces] = useState([]);

  const handlePress = () => {
    navigation.navigate("CreateAddress", { location: null });
  };

  useFocusEffect(
    useCallback(() => {
      const getPlaces = async () => {
        const places = await selectPlaces();
        setPlaces(places);
      };
      getPlaces();

      return () => {
        setPlaces([]);
      };
    }, [])
  );
  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={places}
        renderItem={({ item }) => <AddressItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.addAddress}>
          <Text style={styles.addAddressText}>Add Address</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default Address;