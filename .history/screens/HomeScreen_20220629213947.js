import { View, Text, Button, StyleSheet, StatusBar, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import MainContainer from '../MainContainer'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  })

  return (
    <View style={styles.background}>
      <Text>Neki tekst</Text>
    </View>
  )
}

export default HomeScreen