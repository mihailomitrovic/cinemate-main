import {View, Text, StyleSheet, FlatList, Switch, TouchableOpacity, Image} from 'react-native'
import CheckBox from 'react-native-bouncy-checkbox'
import React from 'react'
import { auth, db } from '../firebase'
import { deleteDoc, doc, getDoc, setDoc} from '@firebase/firestore'
import { useEffect, useState, setState } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";


const WatchList = () => {
  
  const uid = auth.currentUser.uid;
  const docRef = doc(db, 'users', uid);
  const [user, setUser] = useState({});
  const [watched, setWatched] = useState(true);
  const [text, setText] = useState('To watch');
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  
  const bookingsRef = collection(db, "booking"); // imamo ref ka bazi
  
  const [bookings, setBookings] = useState({});
  useEffect(() => {
    getUser();
    getBookings();
  },[])

  const getUser = async () => {
    const snap = await getDoc(docRef)
    setUser({user, ...snap.data()})
  }

  const getBookings = async () =>{
    const q = query(bookingsRef, where("users","array-contains",auth.currentUser.uid)); // basic kveri
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const a = [];
        querySnapshot.forEach((doc) => {            
        a.push(doc.data());
      });
      setBookings(querySnapshot.docs);
    });
  }

  const toggleSwitch = () =>{
    if(!watched){
      setFilteredBookings(bookings.filter(function(item){
        return item.data().watched == true;
      }))
      setText('Watched');
    } else {
      setText('To watch');
      setFilteredBookings(bookings.filter(function(item){
        return item.data().watched == false;
      }))
    }
    setWatched(previousState => !previousState);
  }

  const updateBooking = async(id) => {
    try {
      await setDoc(doc(db, 'booking', id), {
        watched: true
      }, {merge: true})
    }
    catch(e) {
      console.log(e)
    }
    console.log('postaje watched:' + id)
  }

  const updateBooking1 = async(id) => {
    try {
      await setDoc(doc(db, 'booking', id), {
        watched: false
      }, {merge: true})
    }
    catch(e) {
      console.log(e)
    }
    console.log('postaje watched:' + id)
  }

  const deleteBooking = async(id) => {
    try {
      await deleteDoc(doc(db, 'booking', id));
    }
    catch(e) {
      console.log(e)
    }
    console.log('deleted:' + id)
  }

  const [rerenderToggle, setRerenderToggle] = useState(true);



  useEffect(() => {
    const resultOfFiltering = bookings
    setRerenderToggle(!rerenderToggle)
    setFilteredBookings(resultOfFiltering)
  }, [bookings])

  return (
    <View style = {styles.background}>
      <View style = {styles.pickContainer}>
        <Text style = {styles.pick}>{text}</Text>
        <Switch 
          trackColor={{true:'#c9a76d'}}
          onValueChange = {toggleSwitch}
          value = {watched}
        />
      </View>
      
      <FlatList
        data = {filteredBookings}
        contentContainerStyle = {styles.flat1}
        style = {{marginBottom: 85}}
        showsVerticalScrollIndicator = {false}
        numColumns = {1}
        extraData={rerenderToggle} 

        renderItem  = {({item}) => (
          <View style = {styles.listItem}>
          <View style = {styles.itemData}>
            <Text style = {styles.basicBold}>{item.data().movie}</Text>
            <Text style = {styles.basic}>{item.data().day} - {item.data().showtime}</Text>
          </View>
          <View style = {styles.deleteContainer}>
            {item.data().watched == true ? (
                <TouchableOpacity style = {styles.delete} onPress = {() => {updateBooking(item.id); setFilteredBookings();}}>
                <Image source={require('../assets/watched.png')} style = {styles.buttonIcon} />
                </TouchableOpacity>
            ) : (
            <TouchableOpacity style = {styles.delete} onPress = {() => {updateBooking1(item.id); setFilteredBookings();}}>
            <Image source={require('../assets/towatch.png')} style = {styles.buttonIcon} />
            </TouchableOpacity>)}

            <TouchableOpacity style = {styles.delete} onPress = {() => {deleteBooking(item.id); setFilteredBookings();}}>
              <Image source={require('../assets/remove.png')} style = {styles.buttonIcon} />
            </TouchableOpacity>
          </View>
          </View>
        )}
      />
          </View>
  )
}

export default WatchList

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#27272A',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickContainer: {
    backgroundColor: '#efedef',
    width: '88%',
    marginTop: 5,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pick: {
    color: '#27272a',
    fontWeight: '600',
    fontSize: 18,
    textAlignVertical: 'center',
    marginRight: 10
  },
  listItem: {
    backgroundColor: '#27272a',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#efedef',
    width: 375,
    height: 70,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemData: {
    flexDirection: 'column',
  },
  flat1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  basic:{
    color: '#efedef',
    fontSize: 15,
    padding: 2,
    paddingLeft: 6
  },
  basicBold: {
    color: '#efedef',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 2,
    paddingLeft: 6
  },
  delete: {
    backgroundColor: '#e43e54',
    padding: 10,
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  deleteContainer: {
    flexDirection: 'row',
    padding: 15
  },
  buttonIcon: {
    resizeMode: 'contain', 
    width: 20,
    tintColor: '#efedef'
  }
})