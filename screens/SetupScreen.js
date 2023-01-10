import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../firebase'
import { doc, setDoc } from '@firebase/firestore'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SetupScreen = () => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [movie, setMovie] = useState('')
    const [bio, setBio] = useState('')
    const user = auth.currentUser
  
    const navigation = useNavigation();

    const incompleteForm = !name || !age || !city || !country || !movie
  
    const handleSetUp = async() => {
          await setDoc(doc(db, 'users', user.uid), {
            id: user.uid,
            username: username,
            name: name,
            age: age,
            city: city,
            country: country,
            movie: movie,
            bio: bio
          }).then (() => {
            navigation.navigate('Navigation');}
          );
      }
  
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style = {{justifyContent: 'center', alignItems: 'center'}}>
      <KeyboardAwareScrollView style = {styles.container}>  
        <View style = {styles.inputContainer}>
          <TextInput 
            placeholder = 'Username'
            placeholderTextColor={'#A9A9AC'}
            value = {username}
            onChangeText = {text => setUsername(text)}
            style = {styles.input}
            autoCapitalize = 'none'
            autoCorrect = {false}
            maxLength={20}
          />
          <View style = {styles.nameAge}>
          <View style = {styles.nacontainer}>
          <TextInput 
            placeholder = 'Name'
            placeholderTextColor={'#A9A9AC'}
            value = {name}
            onChangeText = {text => setName(text)}
            style = {styles.name}
            autoCorrect = {false}
            maxLength={15}
          />
          </View>
          <View style = {styles.nacontainer}>
           <TextInput 
            placeholder = 'Age'
            placeholderTextColor={'#A9A9AC'}
            value = {age}
            onChangeText = {text => setAge(text)}
            style = {styles.age}
            autoCorrect = {false}
            keyboardType = 'numeric'
            maxLength={2}
          />
          </View>
          </View>
          <View style = {styles.cityCountry}>
            <View style = {styles.cccontainer}>
              <TextInput 
            placeholder = 'City'
            placeholderTextColor={'#A9A9AC'}
            value = {city}
            onChangeText = {text => setCity(text)}
            style = {styles.city}
            autoCorrect = {false}
            maxLength={15}
            autoCapitalize = 'words'
          />
            </View>
            <View style = {styles.cccontainer}>
            <TextInput 
            placeholder = 'Country'
            placeholderTextColor={'#A9A9AC'}
            value = {country}
            onChangeText = {text => setCountry(text)}
            style = {styles.country}
            autoCorrect = {false}
            maxLength = {15}
            autoCapitalize = 'words'
          />
            </View>
          </View>
          <TextInput 
            placeholder = 'Favorite movie'
            placeholderTextColor={'#A9A9AC'}
            value = {movie}
            onChangeText = {text => setMovie(text)}
            style = {styles.input}
            autoCapitalize = 'words'
            maxLength={20}
            autoCorrect = {false}
          />
          <TextInput 
            placeholder = 'Bio'
            placeholderTextColor={'#A9A9AC'}
            value = {bio}
            onChangeText = {text => setBio(text)}
            style = {styles.bio}
            autoCorrect = {false}
            maxLength={200}
            multiline = {true}
          />

        <View style = {[styles.buttonContainer, {opacity: incompleteForm ? 0.7 : 1.0}]}>
          <TouchableOpacity onPress = {handleSetUp}
          style = {styles.button} disabled = {incompleteForm}>
            <Text style = {styles.buttonText}>Create profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    )
}

export default SetupScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#27272A',
      paddingTop: 160
    },
    inputContainer: {
      width: '80%',
      paddingTop: 60,
      alignSelf: 'center'
    },
    input: {
      backgroundColor: '#efedef',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 7,
      marginTop: 10,
      fontWeight: '400',
      fontSize: 13,
    },
    nameAge: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    nacontainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    name: {
      backgroundColor: '#efedef',
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: '98%',
      borderRadius: 7,
      marginTop: 10,
      fontWeight: '400',
      fontSize: 13,
      marginRight: 3
    },
    age: {
      backgroundColor: '#efedef',
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: '98%',
      borderRadius: 7,
      marginTop: 10,
      fontWeight: '400',
      fontSize: 13,
      marginLeft: 5
    },
    cityCountry: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    cccontainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    city: {
      backgroundColor: '#efedef',
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: '98%',
      borderRadius: 7,
      marginTop: 10,
      fontWeight: '400',
      fontSize: 13,
      marginRight: 3
    },
    country: {
      backgroundColor: '#efedef',
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: '98%',
      borderRadius: 7,
      marginTop: 10,
      fontWeight: '400',
      fontSize: 13,
      marginLeft: 5
    },
    bio: {
      backgroundColor: '#efedef',
      height: 90, 
      borderRadius: 7,
      marginTop: 10,
      fontWeight: '400',
      fontSize: 13,
      paddingHorizontal: 15,
      paddingTop: 10
    },
    buttonContainer: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      alignSelf: 'center'
    },
    button: {
      backgroundColor: '#c9a76d',
      width: '60%',
      height: 40,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#efedef',
      fontWeight: '600',
      fontSize: 15,
      textAlign: 'center'
}});