import { View, Text , FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc} from '@firebase/firestore'
import { render } from 'react-dom'

const MatchScreen = ({route}) => {

  const id = route.params.id;
  const [korisnici, setKorisnici] = useState([])

  const getMatches = async() => {
    const docRef = doc(db, "booking", id);
    const docSnap = await getDoc(docRef);
    const users = docSnap.data().users;
    users => setKorisnici([users])

  if (docSnap.exists()) {
   console.log(users);
  }

  
}

  return (
    <View style = {{justifyContent: 'center', alignItems: 'center'}} onLayout = {getMatches}>
    <FlatList
      data = {korisnici}
      style = {{marginBottom: 85, backgroundColor: '#000000'}}
      showsVerticalScrollIndicator = {false}
      numColumns = {1}
      renderItem = {({item}) => (
        <TouchableOpacity onPress={() => {}} >
        <Text style = {color: '#ffffff'}>{item}</Text>
        </TouchableOpacity>
      )}
      />
      <Text>{id}</Text>
  </View>
  )
      }

export default MatchScreen