import { styles } from "./styles";
import { OrderItem } from "../../components";
import { useGetOrdersQuery } from "../../store/orders/api";
import { FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Orders = () => {
  const { data, error, isLoading } = useGetOrdersQuery();

  const renderItem = ({ item }) => <OrderItem {...item} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
    </GestureHandlerRootView>
  );
};

export default Orders;