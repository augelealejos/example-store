import { View } from "react-native";
import { styles } from "./styles";
import { Maps } from "../../components";
import React, { useState } from "react";

const MapsScreen = ({ navigation, route }) => {
  const { location } = route.params;

  const onPickedLocation = (coordinate) => {
    const coordinates = {
      lat: coordinate.latitude,
      lng: coordinate.longitude
    };
    navigation.navigate("CreateAddress", { coordinates });
  };

  return (
    <View style={styles.container}>
      <Maps location={location} onPickedLocation={onPickedLocation} />
    </View>
  );
};

export default MapsScreen;
