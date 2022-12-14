import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../../models";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const {dbUser} = useAuthContext()
console.log(dbUser)
  const [name, setName] = useState(dbUser?.name || '');
  const [address, setAddress] = useState(dbUser?.address || '');
  const [lat, setLat] = useState(dbUser?.lat || '');
  const [lng, setLng] = useState(dbUser?.lng || '');
// console.log(dbUser.lat)
  const {sub, setDbUser} = useAuthContext()
  
  const navigation = useNavigation()
  
  const onSave = async () => {

    if(dbUser){
      await updateUser()
    }else{
      await createUser()
    }
    navigation.goBack()
  };
  const updateUser= async ()=>{
    try{

      const user = await DataStore.save(
        User.copyOf(dbUser,(updated)=>{
          updated.name = name
          updated.address = address
          updated.lat = parseFloat(lat)
          updated.lng = parseFloat(lng)
        })
        )
        console.log(user)
        // setDbUser(user)
      }catch(err){
        Alert.alert('Error',error.message)    
      }
    }

  const createUser =async ()=>{
    try{
      const user = DataStore.save(new User({name,address,lat:parseFloat(lat),lng:parseFloat(lng),sub}))
      setDbUser(user)

    }catch(error){
      Alert.alert('Error',error.message)
    }
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <Button onPress={onSave} title="Save" />
      <Text onPress={()=>Auth.signOut()} style = {styles.signOut}>Sign Out</Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  signOut:{
    textAlign:'center',
    color:'white',
    marginTop:5,
    padding:10,
    backgroundColor:'red',
    
  },
});

export default Profile;
