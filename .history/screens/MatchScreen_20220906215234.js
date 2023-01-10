import { View, Text , FlatList, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc} from '@firebase/firestore'
import { firestore } from 'react-native-firebase'
import firebase from 'firebase/compat'

const MatchScreen = ({route}) => {

  const id = route.params.id;

  const getData = async() => {
    const docRef = doc(db, "booking", id);
    const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  } else {
  // doc.data() will be undefined in this case
  console.log("No such document!");

}
}

  return (
    <View style = {{justifyContent: 'center', alignItems: 'center'}} onLayout = {getData}>
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
        <TouchableOpacity onPress = {getData}>
          <Text>Find a mate</Text>
        </TouchableOpacity>
  </View>
  )
      }

export default MatchScreen