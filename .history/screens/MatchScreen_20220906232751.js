import { View, Text , FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc} from '@firebase/firestore'
import { render } from 'react-dom'

const MatchScreen = ({route}) => {

  const id = route.params.id;

  const getMatches = async() => {
    const docRef = doc(db, "booking", id);
    const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const users = docSnap.data().users;

    return (
  <View>
      <FlatList
      data = {users}
      style = {{marginBottom: 85}}
      showsVerticalScrollIndicator = {false}
      numColumns = {1}
      renderItem = {({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Home', item)}>
        <Text>{{item}}</Text>
        </TouchableOpacity>
        )
      }
      />
      </View>);
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
    textAlign: 'center',
    color: '#ffffff',
  }})