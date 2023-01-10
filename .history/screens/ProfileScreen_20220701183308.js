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
      <Text style = {styles.name}>{user.name}</Text>
      <Text style = {styles.location}>{user.city}, {user.country}</Text>
      </View>
      </View>

      <View style = {styles.infoContainer}>
        <View style = {styles.info}>
          <Text style = {styles.text}> Username: {user.username}</Text>
        </View>
        <View style = {styles.info}>
          <Text style = {styles.text}> Age: {user.age}</Text>
        </View>
        <View style = {styles.info}>
          <Text style = {styles.text}> Favorite movie: {user.movie}</Text>
        </View>
      </View>
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
      alignItems: 'center'
    },
    profileInfo: {
      paddingLeft: 25
    },
    name: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: '30',
    },
    location: {
      color:'#ffffff',
      fontWeight: '500',
      opacity: 0.7,
      paddingTop: 10,
      fontSize: 15
    },
    image: {
      resizeMode: 'contain',
      height: 100,
      width: 100,
      borderColor: '#ffffff',
      borderWidth: 4,
      borderRadius: 50,
    },
    infoContainer: {
      paddingTop: 10,
      paddingBottom: 40,
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 40
    },
    info: {
      backgroundColor: '#efedef',
      paddingHorizontal: 10,
      borderRadius: 7,
      marginTop: 10,
      fontWeight: '400',
      fontSize: 13,
      justifyContent: 'center'
    },
    text: {
      color: '#27272a',
      fontWeight: '600',
      fontSize: 20,
      paddingBottom: 20,
      textAlign: 'left',
      backgroundColor: '#efedef',
      textAlignVertical: 'center'
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
    button: {
      backgroundColor: '#e43e54',
      width: '100%',
      padding: 13,
      borderRadius: 13,
      alignItems: 'center'
    },
    buttonText: {
      color: '#efedef',
      fontWeight: '700',
      fontSize: 16
    }
  })