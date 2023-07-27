import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./tabs/tabs";

function RootNavigator() {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
