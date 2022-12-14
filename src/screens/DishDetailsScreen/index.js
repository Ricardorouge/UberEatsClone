import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Dish } from "../../models";

const DishDetailsScreen = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [dish, setDish] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;

  const addItem = () => {
    setQuantity(quantity + 1);
  };
  const removeItem = () => {
    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
  };

  const price = () => {
    return (dish.price * quantity).toFixed(2);
  };

  useEffect(() => {
    if (id) {
      DataStore.query(Dish, id).then(setDish);
    }
  }, [id]);

  if (!dish) {
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
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator}></View>
      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={60}
          color={"black"}
          onPress={() => removeItem()}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={60}
          color={"black"}
          onPress={() => addItem()}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Cart")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Add {quantity} to cart (${price()})
        </Text>
      </Pressable>
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
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "#696969",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
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
});

export default DishDetailsScreen;
