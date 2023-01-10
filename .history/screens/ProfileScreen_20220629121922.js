import { View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'

const ProfileScreen = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.replace('LogIn')
    })
        .catch(error => alert(error.message))
    }

  return (
    <View style = {styles.container} behavior = 'padding'>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity onPress = {handleSignOut}
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
      alignItems: 'center'
    },
    buttonContainer: {
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