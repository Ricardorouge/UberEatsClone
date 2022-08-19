import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import Cart from "../screens/CartScreen";
import OrderScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetails";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DishDetails" component={DishDetailsScreen} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
