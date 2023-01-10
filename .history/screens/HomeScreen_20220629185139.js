import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  })

  return (
    <SafeAreaView>
      <Text>I am the home screen</Text>
      <Button title = "Go to chat screen" onPress={() => navigation.navigate('Chat')}/>
    </SafeAreaView>
  )
}

export default HomeScreen