import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

const AddressItem = ({ item }) => {
  const { lat, lng } = JSON.parse(item.coords);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.mapImageContainer}>
        <ImageBackground source={{ uri: item.image }} style={styles.mapImage} 
        imageStyle={{ borderRadius: 20}}/>
      </View>
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.itemAddress}>{item.address}</Text>
        <Text style={styles.itemCoords}>{`Lat: ${lat} Lng: ${lng}`}</Text>
      </View>
    </View>
  );
};

export default AddressItem;