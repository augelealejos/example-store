import { FlatList } from "react-native";
import { MenuItem } from "../../components";
import { MENUS } from "../../constants/data/menu";
import { styles } from "./styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Settings = ({ navigation }) => {
  const onSelect = ({ route }) => {
    navigation.navigate(route);
  };
  const renderItem = ({ item }) => <MenuItem {...item} onSelect={onSelect} />;
  const keyExtractor = (item) => item.id;
  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={MENUS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.settingList}
      />
    </GestureHandlerRootView>
  );
};

export default Settings;