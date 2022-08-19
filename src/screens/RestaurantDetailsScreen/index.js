import { View, FlatList, ActivityIndicator, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import MenuItems from "../../components/MenuItems";
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

import { DataStore } from "aws-amplify";
import { Restaurant, Dish } from "../../models";

const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const route = useRoute();
  const id = route.params.id;

  useEffect(() => {if(id)
   { DataStore.query(Restaurant, id).then(setRestaurant);

    DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(
      setDishes
    );}
  }, [id]);

  const navigation = useNavigation();

  if (!restaurant) {
    return (
      <ActivityIndicator
        size={"large"}
        padding={50}
        marginTop={(Dimensions.get("screen").height * 2) / 5}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes}
        renderItem={({ item }) => <MenuItems dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
