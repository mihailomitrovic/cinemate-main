import { View, Text, StyleSheet, ScrollView, Image, ImageBackground} from 'react-native'
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
        <Image source={require('../assets/eeaao.jpeg')} style = {styles.image}/>
      </ScrollView>
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#27272A',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scroll: {
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    alignSelf: 'center'
  }
})