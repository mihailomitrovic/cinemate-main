import { View, Text , FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc} from '@firebase/firestore'

const MatchScreen = ({route}) => {

  const id = route.params.id;

  SampleFunction=(item)=>{
 
    Alert.alert(item);
 
  }

  const getMatches = async() => {
    const docRef = doc(db, "booking", id);
    const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
   const users = docSnap.data().users;
   console.log(users);

   return (
    <View style={styles.MainContainer}>

  { docSnap.data().users.map((item, key)=>(
         <Text key={key} style={styles.TextStyle} onPress={SampleFunction.bind(this, item) }> { item } </Text>)
         )}
    </View>
  );
  } else {
  console.log("No such document!");
}
}

  return (
    <View style = {{justifyContent: 'center', alignItems: 'center'}} onLayout = {getMatches}>
    {/* <FlatList
      data = {bookedUsers}
      style = {{marginBottom: 85, backgroundColor: '#000000'}}
      showsVerticalScrollIndicator = {false}
      numColumns = {1}
      renderItem = {({item}) => (
        <TouchableOpacity onPress={() => {}} >
        <Text>{item}</Text>
        </TouchableOpacity>
      )}
      /> */}
      <Text>{id}</Text>
  </View>
  )
      }

export default MatchScreen

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    margin: 10
    
  },
  
  TextStyle:{
    fontSize : 25,
     textAlign: 'center'
  }})