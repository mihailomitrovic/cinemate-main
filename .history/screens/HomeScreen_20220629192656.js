import { View, Text, Button, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
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
      <ScrollView>
      <StatusBar barStyle="light-content" translucent={true} />
        <Text>I am the home screen</Text>
        <Button title = "Go to chat screen" onPress={() => navigation.navigate('Chat')}/>
        </ScrollView>

        <View styles = {styles.footer}>
          <TouchableOpacity>
            <Image source={require('../assets/user.png')} style = {styles.image} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../assets/chat.png')} style = {styles.image} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../assets/user.png')} style = {styles.image} />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor:'#27272A',
    alignItems: 'center'
},
  footer: {
    backgroundColor: '#e43e54',
    flexDirection: 'column',
    width: 100,
    height: 100'
  },
  image: {
    resizeMode: 'contain',
    height: 50,
    tintColor: '#ffffff'
  }
})