import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState({});
  useLayoutEffect(() => {    
    navigation.setOptions({
        headerShown: false
    })
  })

  useEffect(() => {
    getMovies1();
  },[])

  useEffect(() => {
    getMovies2();
  },[])

  useEffect(() => {
    getMovies3();
  },[])

  const getMovies1 = async () =>{
    const querySnapshot = await getDocs(query(collection(db, "movies"), orderBy('runtime')));
    setMovies(querySnapshot.docs);
  }

  const getMovies2 = async () =>{
    const querySnapshot = await getDocs(query(collection(db, "movies"), orderBy('name')));
    setMovies(querySnapshot.docs);
  }

  return (
    <View style = {styles.background}>
      <View style = {styles.pickContainer}>
      <Text style = {styles.pick}>Now Playing</Text>
      </View>

      <View style = {styles.filterContainer}>
      <Text style = {styles.filterText}>Filter:</Text>
      <View style = {styles.pickContainerA}>
        <TouchableOpacity style = {styles.pickA} onPress = {() => getMovies1}>
        <Text style = {styles.pickTextA}>Runtime</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.pickA} onPress = {() => getMovies2}>
        <Text style = {styles.pickTextA}>Title</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.pickA} onPress = {() => getMovies3}>
        <Text style = {styles.pickTextA}>Year</Text>
        </TouchableOpacity>
      </View>
      </View>

      <FlatList
      data = {movies}
      contentContainerStyle = {styles.flat1}
      style = {{marginBottom: 85}}
      showsVerticalScrollIndicator = {false}
      numColumns = {2}
      renderItem = {({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Modal', item.data())} style = {styles.touch}>
        <Image source={{uri: item.data().pic}} style = {styles.image}/>
        </TouchableOpacity>
        )
      }
      />
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#27272A',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickContainer: {
    backgroundColor: '#efedef',
    width: '88%',
    marginTop: 5,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pick: {
    color: '#27272a',
    fontWeight: '600',
    fontSize: 18,
    textAlignVertical: 'center'
  },
  flat1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  touch: {
    padding: 20
  },
  image: {
    resizeMode: 'contain',
    height: 220,
    width: 150,
    borderWidth: 4,
    borderRadius: 7,
    borderColor: '#efedef',
  },
  filterContainer: {
    marginTop: '4%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  filterText: {
    color: '#efedef',
  },
  pickA: {
    backgroundColor: '#27272A',
     borderRadius: 25,
     borderColor: '#efedef',
     borderWidth: 2,
     marginHorizontal: 5
   },
   pickTextA: {
     padding: 10,
     color: '#efedef'
   },
   pickContainerA: {
    width: '100%',
    backgroundColor: '#27272A',
    marginTop: 10,
    alignSelf: 'flex-end',
    borderRadius: 10,
    alignItems: 'center'
  },
})