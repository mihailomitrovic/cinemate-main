import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, Pressable} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import firebase from 'react-native-firebase'
import { QuerySnapshot } from '@firebase/firestore'


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
})

  const [movies, setMovies] = useState([])
  const movieRef = firebase.firestore().collection('movies')

  useEffect(async () => {
    movieRef.onSnapshot(
      QuerySnapshot => {
        const movies = []
        QuerySnapshot.forEach((doc) => {
          const { pic, name } = doc.data()
          movies.push({
            id: doc.id,
            pic,
            name
          })
        })
        setMovies(movies)
      }
    )
  }, [])

  return (
    <View style = {styles.background}>
      <ScrollView styles = {styles.scroll}>

      <FlatList data = {movies}
      numColumns = {1}
      renderItem = {({item}) => {(
       <Text>{item.name}</Text>
      )
      }}
      />



        {/*<TouchableOpacity onPress={() => navigation.navigate('Modal')} style = {styles.touch}>
        <Image source={require('../assets/downton.jpeg')} style = {styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modal')} style = {styles.touch}>
        <Image source={require('../assets/eeaao.jpeg')} style = {styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modal')} style = {styles.touch}>
        <Image source={require('../assets/elvis.jpeg')} style = {styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modal')} style = {styles.touch}>
        <Image source={require('../assets/jurassic.jpeg')} style = {styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modal')} style = {styles.touch}>
        <Image source={require('../assets/lightyear.jpeg')} style = {styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modal')} style = {styles.touch}>
        <Image source={require('../assets/minions.jpeg')} style = {styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modal')} style = {styles.touch}>
        <Image source={{uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4zLfBbGnuUBLbMVtagTZvzFwS8l.jpg'}} style = {styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modal')} style = {styles.touch}>
  <Image source={require('../assets/topgun.jpeg')} style = {styles.image}/>
        </TouchableOpacity>*/}
      </ScrollView>
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#27272A',
    flex: 1
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    backgroundColor: '#ffffff',
    height: 250,
    width: 170,
    alignSelf: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: 250,
    width: 170,
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 7,
    borderColor: '#efedef'
  }
})