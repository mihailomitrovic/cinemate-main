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

  const getMovies = async () =>{
    const querySnapshot = await getDocs(query(collection(db, "movies"), orderBy('name')));
    setMovies(querySnapshot.docs);
  }

  const filter = ["Runtime","Title","Year"];

  return (
    <View style = {styles.background}>
      <View style = {styles.pickContainer}>
      <Text style = {styles.pick}>Now Playing</Text>
      </View>

      <View style = {styles.filterContainer}>
      <Text style = {styles.filterText}>Filter:</Text>
      <View style = {styles.pickContainer12}>
      <FlatList
        data = {filter}
        contentContainerStyle = {{justifyContent: 'center', alignItems: 'center'}}
        showsHorizontalScrollIndicator = {false}
        style = {styles.flat}
        horizontal = {true}
        renderItem = {({item}) => (
        <TouchableOpacity style = {styles.pick12}>
        <Text style = {styles.pickText12}>{item}</Text>
        </TouchableOpacity>
        )
      }
      />
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
  flat: {
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
    alignContent: 'flex-start',
    textAlign: 'center',
  },
  filterText: {
    color: '#efedef',
    alignSelf: 'flex-start',
    justifyContent: 'center'
  },
  pick12: {
    backgroundColor: '#c9a76d',
     borderRadius: 25,
     borderColor: '#c9a76d',
     borderWidth: 2,
     marginHorizontal: 5
   },
   pickText12: {
     padding: 10,
     color: '#efedef'
   },
   pickContainer12: {
    width: '94%',
    backgroundColor: '#efedef',
    marginTop: 15,
    alignSelf: 'flex-end',
    borderRadius: 7
  },
})