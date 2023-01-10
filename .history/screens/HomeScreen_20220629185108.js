import { View, Text, Button } from 'react-native'
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
    <View>
      <Text>I am the home screen</Text>
      <Button title = "Go to chat screen" onPress={() => navigation.navigate('Chat')}/>
    </View>
  )
}

export default HomeScreen