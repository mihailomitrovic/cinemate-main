import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style = {styles.inputContainer}>
    <View style = {styles.buttonContainer}>
        <TouchableOpacity onPress = {() => {}}
        style = {styles.button}>
          <Text style = {styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%',
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