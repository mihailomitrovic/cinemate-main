import { View, Text, StyleSheet, ScrollView, Image, ImageBackground} from 'react-native'
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
    <View style = {styles.background}>
      <ScrollView styles = {styles.scroll}>
        <View styles = {styles.row}>
        <Image source={require('../assets/downton.jpeg')} style = {styles.image}/>
        <Image source={require('../assets/eeaao.jpeg')} style = {styles.image}/>
        </View>
      </ScrollView>
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#27272A',
    flex: 1
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    width: 130,
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 7,
    borderColor: '#efedef'
  }
})