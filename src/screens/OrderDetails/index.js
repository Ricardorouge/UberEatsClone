import { View, Text, StyleSheet, FlatList} from "react-native";
import React from "react";

import restaurants from '../../../assets/data/restaurants.json'

import OrderDetailsHeader from "./Header";
import CartItems from "../../components/CartItems";

const OrderDetails =()=>{

    return(
        <FlatList
        ListHeaderComponent={<OrderDetailsHeader/>}
        data ={restaurants[0].dishes}
        renderItem={({item})=><CartItems cartDishes={item}/>}
        />
    )
}

export default OrderDetails