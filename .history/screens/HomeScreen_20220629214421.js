import { View, Text, Button, StyleSheet, StatusBar, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import MainContainer from '../MainContainer'
import Tabs from '../TabNavigator'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Neki tekst</Text>
      <Tabs/>
    </View>
  )
}

export default HomeScreen