import { View, Text , FlatList, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc} from '@firebase/firestore'
import { firestore } from 'react-native-firebase'
import firebase from 'firebase/compat'

const MatchScreen = ({route}) => {

  const id = route.params.id;

  const getMatches = async() => {
    const docRef = doc(db, "booking", id);
    const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
   const users = docSnap.data().users;
   
   const array = [{name: 'Marko', broj: 1}, {name: 'Mihailo', broj: 2}]

   function renderArray = () => {
    return users.map((item)=>{
      return (
      <View style={{flexDirection:'row'}}>
      <Text>{item}</Text>
      </View>
      )
      })
   }


    console.log(users);
  } else {
  // doc.data() will be undefined in this case
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
      <renderArray/>
  </View>
  )
      }

export default MatchScreen