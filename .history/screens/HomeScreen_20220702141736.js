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
      <ScrollView>
        <View style = {styles.images}>
          <View style = {styles.imageContainer}>
            <Image source={require('../assets/eeaao.jpeg')} style = {styles.image}/>
          </View>
          <View style = {styles.imageContainer}>
          <Image source={require('../assets/downton.jpeg')} style = {styles.image}/>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
      flex: 1,
      backgroundColor:'#27272A',
      justifyContent: 'center',
      alignItems: 'center'
  },
  images: {
     paddingTop: 20,
     backgroundColor: '#ffffff',
     width: '40%',
     justifyContent: 'center',
     alignContent: 'center',
     alignSelf: 'center'
  },
  imageContainer: {
  },
  image: {
    resizeMode:'contain',
    height: 200
  },
})