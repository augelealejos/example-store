import { View, Text } from "react-native";
import { styles } from "./styles";

const Empty = ({ message }) => {
  return (
    <View style={styles.notFound}>
      <Text style={styles.notFoundText}>{message}</Text>
    </View>
  );
};

export default Empty;