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
    <SafeAreaView style = {styles.background}>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView>
        <Text>Neki tekst</Text>
      </ScrollView>
      <View>
       <TabNavigator/>
       </View>
      </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
      flex: 1,
      backgroundColor:'#27272A'
  }
})