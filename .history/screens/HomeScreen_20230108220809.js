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
      <View>
        <Text>Sort by:</Text>
        <View style = {styles.pick1Container}>
        <FlatList
        data = {filter}
        contentContainerStyle = {{justifyContent: 'center', alignItems: 'center'}}
        showsHorizontalScrollIndicator = {false}
        horizontal = {true}
        renderItem = {({item}) => (
        <TouchableOpacity style = {styles.pick1}>
        <Text style = {styles.pickText}>{item}</Text>
        </TouchableOpacity>
        )
      }
      />
        </View>
      </View>
      </View>

      <FlatList
      data = {movies}
      contentContainerStyle = {styles.flat}
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
  },
  pick: {
    color: '#27272a',
    fontWeight: '600',
    fontSize: 18,
    textAlignVertical: 'center'
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
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#27272A',
    fontWeight: '600',
    fontSize: 16
  },
  button: {
    backgroundColor: '#efedef',
    borderColor: '#27272A',
    borderWidth: '3em',
    width: '100%',
    padding: 13,
    borderRadius: 13,
    alignItems: 'center'
  },
  pick1Container: {
    width: '94%',
    backgroundColor: '#27272a',
    marginTop: 15,
    alignSelf: 'flex-end',
    borderRadius: 7
  },
  pick1: {
    backgroundColor: '#27272a',
    borderRadius: 25,
    borderColor: '#efedef',
    borderWidth: 2,
    marginHorizontal: 5
  },
  pickPressed: {
    backgroundColor: '#efedef',
    borderRadius: 25,
    borderColor: '#c9a76d',
    borderWidth: 2,
    marginHorizontal: 5
   },
  pickTextPressed: {
    padding: 10,
    color: '#27272a'
  },
  pickText: {
    padding: 10,
    color: '#efedef'
  },pickContainer: {
    width: '94%',
    backgroundColor: '#efedef',
    marginTop: 15,
    alignSelf: 'flex-end',
    borderRadius: 7
  },
  pick: {
   backgroundColor: '#c9a76d',
    borderRadius: 25,
    borderColor: '#c9a76d',
    borderWidth: 2,
    marginHorizontal: 5
  },
  pickPressed: {
    backgroundColor: '#efedef',
     borderRadius: 25,
     borderColor: '#c9a76d',
     borderWidth: 2,
     marginHorizontal: 5
   },
  pickTextPressed: {
    padding: 10,
    color: '#27272a'
  },
  pickText: {
    padding: 10,
    color: '#efedef'
  },
})