import { View, Text, StyleSheet, ScrollView, Image} from 'react-native'
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
          <View style = {styles.imageContainer}>
            <Image source={require('../assets/downton.jpeg')}/>
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
  imageContainer: {
      alignItems: 'center'
  }, 
  image: {
    resizeMode: 'contain',
    width: 20
  }
})