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
            <Image source={require('../assets/downton.jpeg')}/>
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
  image: {
      resizeMode: 'contain',
      height: 20,
      width: 20,
      borderColor: '#ffffff',
      borderWidth: 4,
      borderRadius: 20,
  }
})