import { StyleSheet, StatusBar, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import TabNavigator from '../TabNavigator'

const NavigationScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
})

  return (
    <><SafeAreaView style = {styles.background}>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView>
      </ScrollView>
      </SafeAreaView>
      <TabNavigator/>
      </>
  )
}

export default NavigationScreen

const styles = StyleSheet.create({
  background: {
      backgroundColor:'#27272A',
      alignItems: 'center'
    },
  text: {
    color: '#ffffff'
  }
})