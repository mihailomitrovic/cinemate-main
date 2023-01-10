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
    getMovies();
  },[])

  useEffect(() => {
    getMoviesFiltered(filter);
  },[filter])

  const [filter, setFilter] = useState('');

  const getMoviesFiltered = async (filter) =>{
    const querySnapshot = await getDocs(query(collection(db, "movies"), orderBy(filter)));
    setMovies(querySnapshot.docs);
  }

  const getMovies = async () =>{
    const querySnapshot = await getDocs(query(collection(db, "movies"), orderBy('name')));
    setMovies(querySnapshot.docs);
  }
  

  return (
    <View style = {styles.background}>
      <View style = {styles.pickContainer}>
      <Text style = {styles.pick}>Now Playing</Text>
      </View>

      <View style = {styles.filterContainer}>
      <View style = {styles.pickContainerA}>
        <TouchableOpacity style = {filter === 'name' ? styles.pickA : styles.pickB} onPress = {() => {setFilter('name'); getMoviesFiltered(filter)}}>
        <Text style = {filter === 'name' ? styles.pickTextA : styles.pickTextB}>Title</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {filter === 'runtime' ? styles.pickA : styles.pickB} onPress = {() => {setFilter('runtime'); getMoviesFiltered(filter)}}>
        <Text style = {filter === 'runtime' ? styles.pickTextA : styles.pickTextB}>Runtime</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {filter === 'year' ? styles.pickA : styles.pickB} onPress = {() => {setFilter('year'); getMoviesFiltered(filter)}}>
        <Text style = {filter === 'year' ? styles.pickTextA : styles.pickTextB}>Year</Text>
        </TouchableOpacity>
      </View>
      </View>

      <FlatList
      data = {movies}
      contentContainerStyle = {styles.flat1}
      style = {{marginBottom: 85}}
      showsVerticalScrollIndicator = {false}
      numColumns = {2}
      keyboardShouldPersistTaps= 'always'
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
    justifyContent: 'center',
    alignSelf: 'center'
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  filterText: {
    color: '#efedef',
    paddingRight: 4
  },
  pickA: {
    backgroundColor: '#efedef',
     borderRadius: 10,
     borderColor: '#27272a',
     borderWidth: 2,
     marginHorizontal: 5,
   },
   pickB: {
    backgroundColor: '#27272a',
     borderRadius: 10,
     borderColor: '#efedef',
     borderWidth: 2,
     marginHorizontal: 5,
   },
   pickTextA: {
     padding: 10,
     color: '#27272a'
   },
   pickTextB: {
    padding: 10,
    color: '#efedef'
  },
   pickContainerA: {
    width: '88%',
    backgroundColor: '#efedef',
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 6,
    borderColor: '#efedef',
    borderWidth: 2,
    alignSelf: 'center'
  }
})