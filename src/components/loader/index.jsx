import { View, ActivityIndicator, } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../themes";

function Loader() {
 
  return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );

}

export default Loader;
