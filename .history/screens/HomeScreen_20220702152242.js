import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
})

  return (
    <View style = {styles.background}>
      <ScrollView styles = {styles.scroll}>
        <TouchableOpacity onPress={() => {}} style = {styles.touch}>
        <Image source={require('../assets/downton.jpeg')} style = {styles.image}/>
        </TouchableOpacity>
        <Image source={require('../assets/eeaao.jpeg')} style = {styles.image}/>
        <Image source={require('../assets/elvis.jpeg')} style = {styles.image}/>
        <Image source={require('../assets/jurassic.jpeg')} style = {styles.image}/>
        <Image source={require('../assets/lightyear.jpeg')} style = {styles.image}/>
        <Image source={require('../assets/minions.jpeg')} style = {styles.image}/>
        <Image source={require('../assets/thor.jpeg')} style = {styles.image}/>
        <Image source={require('../assets/topgun.jpeg')} style = {styles.image}/>
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