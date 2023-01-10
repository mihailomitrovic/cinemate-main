import { View, Text, Button, StyleSheet, StatusBar, ScrollView, SafeAreaView} from 'react-native'
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
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <StatusBar barStyle="light-content" translucent={true} />
        <Text>I am the home screen</Text>
        <Button title="Go to chat screen" onPress={() => navigation.navigate('/Users/mihailomitrovic/Desktop/University/Mobilno računarstvo/cinemate/MainContainer.js')} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor:'#27272A',
    alignItems: 'center',
    justifyContent: 'center'
},
  footer: {
    backgroundColor: '#e43e54',
    height: 60,
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 40,
    left: 25, 
    right: 25, 
    borderRadius: 15
  }
})