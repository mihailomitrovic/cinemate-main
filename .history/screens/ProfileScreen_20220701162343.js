import { View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../firebase'
import { doc, getDoc } from '@firebase/firestore'
import { user } from 'firebase-functions/v1/auth'

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
  const docRef = doc(db, 'users', user.uid);
  const docSnap = getDoc(docRef);
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [movie, setMovie] = useState('')

  useEffect(() => {
    const getUser = async () => {
      const snap = await getDoc(userDocRef)
      setUser({uid, ...snap.data()})
    }
    getUser()
  },[])

  return (
    <View style = {styles.container} behavior = 'padding'>
      <Text style = {{
        color: '#efedef', fontWeight: 'bold', fontSize: 20, paddingBottom: 20}}>
          Username: {user.username}</Text>
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
    }
  })