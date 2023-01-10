import { View, Text, Button, StyleSheet, StatusBar, ScrollView, SafeAreaView} from 'react-native'
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
    <SafeAreaView>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView>
        <Text>Neki tekst</Text>
      </ScrollView>
      </SafeAreaView>
       <View>
       <TabNavigator/>
       </View>
  )
}

export default HomeScreen