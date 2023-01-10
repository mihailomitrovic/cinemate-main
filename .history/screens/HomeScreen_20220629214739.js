import { View, Text, Button, StyleSheet, StatusBar, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import MainContainer from '../MainContainer'
import Tabs from '../TabNavigator'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
})

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView>
        <Text>Neki tekst</Text>
      </ScrollView>
      <View>
      <Tabs/>
      </View>
      </SafeAreaView>
  )
}

export default HomeScreen