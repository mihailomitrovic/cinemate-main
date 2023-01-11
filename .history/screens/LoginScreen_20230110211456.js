import { View, Text, StyleSheet, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const incompleteForm = !email || !password

  const navigation = useNavigation();

  const handleLogIn = () => {
  
    auth.signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      navigation.replace('Navigation')
    })
    .catch((error) => {
      if (error.code == "auth/invalid-email") {
        return Alert('The email address is not valid')
      }
      else if (error.code == "wrong-password") {
        console.log("The password is incorrect");
      }
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <KeyboardAvoidingView style = {styles.container} behavior = 'padding'>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/pop1.png')} style={styles.image}/>
      </View>
      
      <View style = {styles.inputContainer}>
        <TextInput 
          placeholder = 'Email'
          placeholderTextColor={'#A9A9AC'}
          value = {email}
          onChangeText = {text => setEmail(text)}
          style = {styles.input}
          autoCapitalize = 'none'
          autoCorrect = {false}
        />
        <TextInput 
          placeholder = 'Password'
          placeholderTextColor={'#A9A9AC'}
          value = {password}
          onChangeText = {text => setPassword(text)}
          style = {styles.input}
          secureTextEntry
          keyboardAppearance = 'dark'
          autoCapitalize = 'none'
          autoCorrect = {false}
        />
      </View>

      <View style = {[styles.buttonContainer, {opacity: incompleteForm ? 0.7 : 1.0}]}>
        <TouchableOpacity onPress = {handleLogIn}
        style = {styles.button} disabled = {incompleteForm}>
          <Text style = {styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#27272A',
    paddingTop: 110
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    resizeMode:'contain',
    height: 130
  },
  inputContainer: {
    width: '80%',
    paddingTop: 60
  },
  input: {
    backgroundColor: '#efedef',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    fontWeight: '400',
    fontSize: 13
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  button: {
    backgroundColor: '#e43e54',
    width: '40%',
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#efedef',
    fontWeight: '600',
    fontSize: 15
  }
})