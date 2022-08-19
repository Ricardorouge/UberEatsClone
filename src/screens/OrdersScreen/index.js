import { View, Text,StyleSheet, FlatList } from "react-native";
import OrderList from "../../components/OrderList";
import React from "react";
import orders from '../../../assets/data/orders.json'

const OrderScreen = () =>{
    return (
        <View style = {styles.container}>
           <FlatList
           data={orders}
           renderItem={({item})=> <OrderList  order ={item}/>}
           />
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    width:'100%',
},
})

export default OrderScreen