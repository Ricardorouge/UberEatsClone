import { View, Text, Image } from "react-native";
import React from "react";
import orders from "../../../assets/data/orders.json";
import styles from "./styles";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={{ uri: order.Restaurant.image }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>
            {order.status} &#8226; {order.createdAt}
          </Text>
          <Text style={styles.menuTitle}>Your order</Text>
        </View>
      </View>
    </View>
  );
};



export default OrderDetailsHeader;
