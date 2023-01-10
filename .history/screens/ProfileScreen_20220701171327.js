import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../firebase'
import { doc, getDoc } from '@firebase/firestore'
import { useEffect, useState } from 'react'

const ProfileScreen = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.navigate('Welcome')
    })
        .catch(error => alert(error.message))
    }

  const uid = auth.currentUser.uid;
  const docRef = doc(db, 'users', uid);
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      const snap = await getDoc(docRef)
      setUser({user, ...snap.data()})
    }
    getUser()
  },[])

  return (
    <View style = {styles.container}>
      <View style = {styles.imageContainer}>
      <Image source={require('../assets/profile.jpeg')} style = {styles.image} />
      </View>
      
      <Text style = {styles.text}> {user.name}</Text>
      <Text style = {styles.text}> {user.movie}, {user.country} </Text>
      <Text style = {styles.text}> Username: {user.username}</Text>
      <Text style = {styles.text}> Age: {user.age}</Text>
      <Text style = {styles.text}> Favorite movie: {user.movie}</Text>
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
      alignItems: 'center',
      backgroundColor: '#27272a'
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
    imageContainer: {
      paddingBottom: 30
    },
    image: {
      resizeMode: 'contain',
      width: 100,
      borderRadius: 20
    },
    button: {
      backgroundColor: '#efedef',
      width: '100%',
      padding: 13,
      borderRadius: 13,
      alignItems: 'center'
    },
    buttonText: {
      color: '#27272a',
      fontWeight: '700',
      fontSize: 16
    },
    text: {
      color: '#efedef',
      fontWeight: 'bold',
      fontSize: 20,
      paddingBottom: 20,
      textAlign: 'left'
    }
  })