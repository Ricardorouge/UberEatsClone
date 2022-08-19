import { View,StyleSheet,Text } from "react-native"

const CartItems =({cartDishes})=>{

    return (
        <View style={styles.row}>
        <View style={styles.quantityContainer}>
          <Text>1</Text>
        </View>
        
        <Text style ={styles.menuItem}>{cartDishes.name}</Text>
        <Text style ={styles.total}>${(cartDishes.price).toFixed(2)}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical:15,
      },
      quantityContainer:{
        backgroundColor:'lightgray',
        paddingHorizontal:5,
        marginRight:10,
        paddingVertical:2,
        borderRadius:3,
        
      },
      total:{
        marginLeft:'auto',
      },
     
      menuItem:{
        fontWeight:'600',
      },
})
export default CartItems