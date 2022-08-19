import { View, Text, Image } from "react-native";
import styles from "./styles";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

const RestaurantHeader = (props) => {
    const {restaurant} = props
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: restaurant.image.startsWith('http')? restaurant.image : DEFAULT_IMAGE }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          {(restaurant.deliveryFee).toFixed(1)} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
        <Text style ={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
