import { View, Text , FlatList, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc, collection} from '@firebase/firestore'
import { firestore } from 'react-native-firebase'
import firebase from 'firebase/compat'

const MatchScreen = ({route}) => {

  const id = route.params.id;
  const [day, setDay] = useState([]);
  const [time, setTime] = useState([]);

 
  firebase.firestore()
  .collection('booking')
  .doc(firebase.auth().currentUser.uid)
  .get()
  .then((snapshot) => { 
    if (snapshot.exists) 
      { setTime(snapshot.data()); 
      } else {  } 
    })

  return (
    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
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