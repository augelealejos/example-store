import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { LocationSelector } from "../../../components";
import { insertPlace } from "../../../db";
import { useLazyGetGeocodingQuery } from "../../../store/maps/api";
import { useUpdateAddressMutation } from "../../../store/settings/api";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";

const CreateAddress = ({ navigation, route }) => {  
  const { coordinates } = route.params;
  const localId = useSelector((state) => state.auth.user.localId);
  const mapImageUrl = useSelector((state) => state.address.mapImageUrl);
  const [location, setLocation] = useState(coordinates);
  const [updateAddress] = useUpdateAddressMutation();
  const [getGeolocation] = useLazyGetGeocodingQuery();
  
  const onLocation = ({ lat, lng }) => {
    setLocation({ lat, lng });
  };

  const onHandlerUpdateLocation = async () => {
    const { lat, lng } = location;
    const addressName = await getGeolocation({ lat, lng });
    const result = await insertPlace({
      address: addressName.data,
      coords: location,
      image: mapImageUrl,
    });
    updateAddress({ localId, address: addressName.data, location });
    navigation.goBack();
  };
  
  const onSelectMap = async () => {  
    if (location)  {
      requestAnimationFrame(() => {
        navigation.navigate("Maps", { location });
      });
    }
  };

  useEffect(() => {
    if (coordinates) {
      onLocation(coordinates);
    }
  }, [coordinates]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <LocationSelector onLocation={onLocation} onSelectMap={onSelectMap} location={location}/>
      {/* <View style={styles.buttonContainer}>
        <Button title="Confirm"  color={COLORS.primary} />
      </View> */}
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={onHandlerUpdateLocation} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default CreateAddress;