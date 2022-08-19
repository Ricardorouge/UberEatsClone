import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const OrderList = (props) => {
  const { order } = props;
  return (
    <View>

    <View style={styles.container}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.order}>3 items &#8226; $38.45</Text>
        <Text style={styles.date}>{order.createdAt} &#8226; {order.status}</Text>
      </View>

    </View>
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    marginRight: 5,
  },
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  order: {
    marginVertical: 5,
    color: "gray",
  },
  date: {
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 5,
  },
});

export default OrderList;
