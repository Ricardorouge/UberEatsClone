import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

const RestaurantItem = (props) => {
  const { restaurant } = props;
  
  const navigation =useNavigation()

  const onPress =(e)=>{
    navigation.navigate('Restaurant',{id:restaurant.id})
  }

  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image.startsWith('http')? restaurant.image : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />
      <View style = {styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            {(restaurant.deliveryFee).toFixed(1)} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style ={styles.rating}>
            <Text>{(restaurant.rating).toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "gray",
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
  },
  rating: {
    marginLeft:'auto',
    backgroundColor:'lightgray',
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
  }
});

export default RestaurantItem;
