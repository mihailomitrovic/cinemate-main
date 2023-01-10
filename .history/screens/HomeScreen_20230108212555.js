import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState({});
  useLayoutEffect(() => {    
    navigation.setOptions({
        headerShown: false
    })
  })

  useEffect(() => {
    getMovies();
  },[])

  const getMovies = async () =>{
    const querySnapshot = await getDocs(query(collection(db, "movies"), orderBy('name')));
    setMovies(querySnapshot.docs);
  }

  return (
    <View style = {styles.background}>
      <View style = {styles.pickContainer}>
      <Text style = {styles.pick}>Now Playing</Text>

      <Modal transparent = {true} visible = {true}>
        <View style = {styles.modalBackground}>
          <View style = {styles.modalContainer}>
          <Text style = {styles.pick}>Sort by:</Text>

          <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {styles.button}>
              <Text style = {styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {styles.button}>
              <Text style = {styles.buttonText}>Delete account</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>

      </View>
      <FlatList
      
      data = {movies}
      contentContainerStyle = {styles.flat}
      style = {{marginBottom: 85}}
      showsVerticalScrollIndicator = {false}
      numColumns = {2}
      renderItem = {({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Modal', item.data())} style = {styles.touch}>
        <Image source={{uri: item.data().pic}} style = {styles.image}/>
        </TouchableOpacity>
        )
      }
      />
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#27272A',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modalContainer: {
    backgroundColor: '#efedef',
    borderRadius: 10,
    margin: 50,
    height: 200,
    width: '88%',
    marginTop:'30%',
    padding: 30,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  pickContainer: {
    backgroundColor: '#efedef',
    width: '88%',
    marginTop: 5,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pick: {
    color: '#27272a',
    fontWeight: '600',
    fontSize: 18,
    textAlignVertical: 'center'
  },
  flat: {
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  touch: {
    padding: 20
  },
  image: {
    resizeMode: 'contain',
    height: 220,
    width: 150,
    borderWidth: 4,
    borderRadius: 7,
    borderColor: '#efedef',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#27272A',
    fontWeight: '700',
    fontSize: 18
  },
  button: {
    backgroundColor: '#efedef',
    borderColor: '#27272A',
    borderWidth: '3em',
    width: '100%',
    padding: 13,
    borderRadius: 13,
    alignItems: 'center'
  }
})