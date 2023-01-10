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
            <View style = {styles.image}>
            </View>
        </View>
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
  images: {
    marginTop: 20,
     backgroundColor: '#ffffff',
     width: '88%',
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center'
  },
  image: {
    resizeMode:'contain',
    height: 300,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#ffffff'
  },
})