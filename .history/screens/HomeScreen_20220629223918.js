import { View, Text, StyleSheet, StatusBar, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import TabNavigator from '../TabNavigator'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
})

  return (
    <><SafeAreaView style = {styles.background}>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView contentContainerStyle = {{justifyContent: 'center', alignItems: 'center'}}>
      </ScrollView>
      </SafeAreaView>
      <TabNavigator/>
      </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
      backgroundColor:'#27272A',
      justifyContent: 'center'
    },
  text: {
    color: '#ffffff'
  }
})