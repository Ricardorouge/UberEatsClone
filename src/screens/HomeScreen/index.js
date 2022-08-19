import { StyleSheet, FlatList, View } from "react-native";
import { useState, useEffect } from "react";

import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

import RestaurantItem from "../../components/RestaurantItem";

export default function HomeScreen() {

  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async ()=>{
    const results = await DataStore.query(Restaurant)
    setRestaurants(results)
  }

  useEffect(()=>{
    fetchRestaurants()
  },[])

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
