import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
})

const [movieRef, setMovieRef] = useState([
  {genre:["Action", "Adventure", "Fantasy"],
  name: "Thor: Love and Thunder",
  pic: require('../assets/thor.jpeg'),
  plot: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
  runtime: "1h 59m",
  showings: ["Friday", "Saturday", "Sunday"],
  year: "2022"},

  {genre:["Drama", "Romance"],
  name: "Downton Abbey: A New Era",
  pic: require('../assets/downton.jpeg'),
  plot: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
  runtime: "2h 5m",
  showings: ["Friday", "Saturday", "Sunday"],
  year: "2022"},
])

  return (
    <View style = {styles.background}>
      <Text style = {styles.pick}>Pick a movie</Text>
      <FlatList
      data = {movieRef}
      numColumns = {2}
      renderItem = {({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Modal', item)}>
        <Image source={(item.pic)} style = {styles.image}/>
        </TouchableOpacity>)
      }
      />
      </View>
           /*
        <TouchableOpacity onPress={() => {setMovieRef('1'); navigation.navigate('Modal', movieRef);}} style = {styles.touch}>
        <Image source={{uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4zLfBbGnuUBLbMVtagTZvzFwS8l.jpg'}} style = {styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modal')} style = {styles.touch}>
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
        <Image source={require('../assets/topgun.jpeg')} style = {styles.image}/>
  </TouchableOpacity> */
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#27272A',
    flex: 1,

  },
  pick: {
    paddingTop: 20,
    color: '#efedef',
    textAlign: 'center'
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