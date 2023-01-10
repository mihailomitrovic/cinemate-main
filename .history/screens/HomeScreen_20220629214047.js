import { View, Text, Button, StyleSheet, StatusBar, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import MainContainer from '../MainContainer'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Neki tekst</Text>
    </View>
  )
}

export default HomeScreen