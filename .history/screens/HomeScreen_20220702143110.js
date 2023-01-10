import { View, Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native'
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
        <View style = {styles.images}>
          <View style = {styles.imageContainer}>
            <Image source={require('../assets/eeaao.jpeg')} style = {styles.image}/>
          </View>
        </View>
      </ScrollView>
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#27272A',
  },
  background: {
    backgroundColor:'#27272A',
    flex: 1
  },
  images: {
     paddingTop: 20,
     backgroundColor: '#ff2f4f',
     width: '50%',
     justifyContent: 'center',
     alignItems: 'center',

  },

  image: {
    resizeMode:'contain',
    height: 300
  },
})