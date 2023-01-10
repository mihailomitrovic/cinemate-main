import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style = {styles.buttonContainer}>
        <TouchableOpacity onPress = {() => {}}
        style = {styles.button}>
          <Text style = {styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'm
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
    button: {
      backgroundColor: '#27272A',
      width: '100%',
      padding: 13,
      borderRadius: 13,
      alignItems: 'center'
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16
    }
  })