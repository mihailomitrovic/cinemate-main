import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../firebase'
import { doc, getDoc, deleteDoc, query, collection, where, firebase} from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { getAuth, deleteUser} from "firebase/auth";

const ProfileScreen = () => {

  const navigation = useNavigation();
  const auth = getAuth();
  const uid = auth.currentUser.uid;
  const docRef = doc(db, 'users', uid);

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.navigate('Welcome')
    })
        .catch(error => alert(error.message))
  }

  const deleteAccount = async() => {
    firebase.firestore.QuerySnapshot = await this.afs.collection('houses', ref => ref.where('email', '==', this.afAuth.auth.currentUser.email)).ref.get()
    .then(qry => {
      const batch = this.afs.firestore.batch();
      qry.forEach(doc => batch.delete(doc.ref));
      return batch.commit();
    })
    .then(() => {console.log('done'); navigation.navigate('Welcome');})
    .catch(err => console.log(`failed with ${err.message}`))
  }
  
  
  const handleDeleteProfile = () => {
    
    const korisnikID = getAuth().currentUser.uid;
    const user = getAuth().currentUser;

    auth.signOut()
    .then(() => {
      navigation.navigate('Welcome');
      deleteDoc(doc(db, "users", korisnikID))
      .then(() => {
        console.log('obrisan profil na auth');
        console.log(korisnikID);
        
        deleteUser(user);
      }).catch((error) => {
        console.log(error);
        console.log("No way");
      });
    });
      
  }
  
  const [user, setUser] = useState({});
  
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
      <Text style = {styles.name}>{user.name} ({user.age})</Text>
      <Text style = {styles.location}>{user.city}, {user.country}</Text>
      </View>
      </View>

      <View style = {styles.infoContainer}>
      <Text style = {styles.text1}>Username</Text>
        <View style = {styles.info}>
          <Text style = {styles.text2}>{user.username}</Text>
        </View>
        <Text style = {styles.text1}>Favorite movie:</Text>
        <View style = {styles.info}>
          <Text style = {styles.text2}>{user.movie}</Text>
        </View>
        <Text style = {styles.text1}>About me</Text>
        <View style = {styles.info}>
          <Text style = {styles.text2}>{user.bio}</Text>
        </View>
      </View>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity onPress = {handleSignOut}
        style = {styles.button}>
          <Text style = {styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity onPress = {deleteAccount}
        style = {styles.buttonDelete}>
          <Text style = {styles.buttonText}>Delete account</Text>
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
      fontSize: 30,
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
      paddingLeft: 40,
      width: '90%',
    },
    info: {
      width: '100%',
      backgroundColor: '#efedef',
      marginTop: 10,
      fontWeight: '400',
      fontSize: 13,
      justifyContent: 'center',
      borderRadius: 10,
      paddingVertical: 3
    },
    text1: {
      color: '#efedef',
      fontWeight: '600',
      paddingTop: 20,
      fontSize: 15
    },
    text2: {
      color: '#27272a',
      fontWeight: '600',
      fontSize: 15,
      padding: 10,
      textAlign: 'left',
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
    },
    buttonDelete: {
      backgroundColor: '#27272a',
      borderColor: '#e43e54',
      borderWidth: '3em',
      width: '100%',
      padding: 13,
      borderRadius: 13,
      alignItems: 'center'
    }
  })