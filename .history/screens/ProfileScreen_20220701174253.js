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
      <View style = {styles.profileContainer}>
      <Image source={require('../assets/profile.jpeg')} style = {styles.image} />
      <View style = {styles.profileInfo}>
      <Text style = {styles.nameAge}> {user.name} ({user.age})</Text>
      <Text style = {styles.username}> {user.username}</Text>
      </View>
      </View>

      <Text style = {styles.text}> {user.city}, {user.country} </Text>
      <Text style = {styles.text}> Username: {user.username}</Text>
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
      alignItems: 'center',
      backgroundColor: '#27272a'
    },
    profileContainer: {
      paddingTop: 40,
      paddingBottom: 40,
      alignSelf: 'flex-start',
      paddingLeft: 40,
      flexDirection: 'row',
    },
    profileInfo: {
      paddingLeft: 20
    },
    nameAge: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: '30',
    },
    username: {
      color:'#fcd89f',
      fontWeight: '500',
      fontStyle: 'italic',
      paddingTop: 10
    },
    image: {
      resizeMode: 'contain',
      height: 100,
      width: 100,
      borderColor: '#ffffff',
      borderWidth: 4,
      borderRadius: 50,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
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