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
      <ScrollView styles = {styles.scroll}>
        <View style = {styles.images}>
          <View style = {styles.imageContainer}>
            <Image source={require('../assets/eeaao.jpeg')} style = {styles.image}/>
          </View>
          <View style = {styles.imageContainer}>
          <Image source={require('../assets/downton.jpeg')} style = {styles.image}/>
          </View>
        </View>
      </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#27272A',
  },
  images: {
     paddingTop: 20,
     backgroundColor: '#ffffff',
     width: '90%',
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center'
  },
  imageContainer: {
    backgroundColor: '#000000',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    resizeMode:'contain',
    height: 200
  },
})