import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'
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
    <SafeAreaView style = {styles.background}>
      <StatusBar barStyle="light-content" translucent={true} />
        <Text>I am the home screen</Text>
        <Button title = "Go to chat screen" onPress={() => navigation.navigate('Chat')}/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor:'#27272A',
    alignContent: 'center'
}
})