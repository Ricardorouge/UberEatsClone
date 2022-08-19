import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import { useState } from "react";
import CartItems from "../../components/CartItems";

const restaurant = restaurants[0];

const Cart = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>Your Items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <CartItems cartDishes={item} />}
      />

      <View style={styles.separator}></View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },

  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },

  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  subtitle:{
    fontWeight:'bold',
    marginTop:20,
    fontSize:19
  },
});

export default Cart;
