import { View, Text, Image, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const incompleteForm = !email || !password

  const navigation = useNavigation();

  const handleSignUp = async() => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(userCredentials => { 
      const user = userCredentials.user;
      navigation.navigate('Setup');
    })
    .catch((error) => {
      if (error.code == "auth/email-already-in-use") {
        setTimeout(() => {
          Alert.alert(
            'Error',
            'The email address is already in use',
            [{text: 'OK', onPress: () => navigation.navigate('Signup')}],
            {cancelable: false},
          );
        }, 100);
      }
      else if (error.code == "auth/invalid-email") {
        setTimeout(() => {
          Alert.alert(
            'Error',
            'The email address is not valid',
            [{text: 'OK', onPress: () => navigation.navigate('Signup')}],
            {cancelable: false},
          );
        }, 100);
      } else if (error.code == "auth/weak-password") {
          setTimeout(() => {
            Alert.alert(
              'Error',
              'The password must be 6 characters long or more address is not valid',
              [{text: 'OK', onPress: () => navigation.navigate('Signup')}],
              {cancelable: false},
            );
          }, 100);
      }
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <KeyboardAvoidingView style = {styles.container} behavior = 'padding'>
      <StatusBar barStyle="light-content" translucent={true} />

      <View style={styles.imageContainer}>
        <Image source={require('../assets/pop.png')} style={styles.image}/>
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
          autoCapitalize = 'none'
          autoCorrect = {false}
        />
      </View>

      <View style = {[styles.buttonContainer, {opacity: incompleteForm ? 0.8 : 1.0}]}>
        <TouchableOpacity onPress = {handleSignUp}
        style = {styles.button} disabled = {incompleteForm}>
          <Text style = {styles.buttonText}>Sign Up</Text>
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
    paddingTop: 160
  },
  imageContainer: {
    alignItems: 'center'
  },
image: {
    resizeMode:'contain',
    height: 70
},
  inputContainer: {
    width: '80%',
    paddingTop: 60,
  },
  input: {
    backgroundColor: '#efedef',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    marginTop: 10,
    fontWeight: '400',
    fontSize: 13
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  button: {
    width: '40%',
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c9a76d'
  },
  buttonText: {
    color: '#efedef',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center'
  }
})