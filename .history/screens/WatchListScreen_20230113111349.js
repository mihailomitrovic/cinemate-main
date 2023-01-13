import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { auth, db } from '../firebase'
import { collection, query, where, onSnapshot,deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState} from 'react'


const WatchList = () => {
  
  const uid = auth.currentUser.uid;
  const docRef = doc(db, 'users', uid);
  const [user, setUser] = useState({});
  const [displayText, setDisplayText] = useState("To watch");
  const bookingsRef = collection(db, "booking"); // imamo ref ka bazi
  
  const [bookings, setBookings] = useState({});
  const [bookingsToWatch, setBookingsToWatch] = useState({});
  const [watchedBookings, setWatchedBookings] = useState({});
  
  useEffect(() => {
    getUser();
    getBookingsToWatch();
    getWatchedBookings();
    console.log("Prvi useEffect");
    return(()=>{
      console.log("gotovUseEffect");
    });
  },[])

  const getUser = async () => {
    const snap = await getDoc(docRef)
    setUser({user, ...snap.data()})
  }

  const getWatchedBookings = async () =>{
    const q = query(bookingsRef, where("users","array-contains",auth.currentUser.uid),where("watched","==",true) ); // basic kveri
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const a = [];
        querySnapshot.forEach((doc) => {            
        a.push(doc.data());
      });
      const array = Object.values(querySnapshot.docs);
      setWatchedBookings(array);
      setLoading(false);
    });
  }
  const getBookingsToWatch = async () =>{
    const q = query(bookingsRef, where("users","array-contains",auth.currentUser.uid),where("watched","==",false) ); // basic kveri
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const a = [];
        querySnapshot.forEach((doc) => {            
        a.push(doc.data());
      });
      const array = Object.values(querySnapshot.docs);
      setBookingsToWatch(array);
      setLoading(false);
    });
  }
  const updateBooking = async(item) => {
    try {
      await setDoc(doc(db, 'booking', item.id), {
        watched: !item.data().watched
      }, {merge: true});
      setLoading(false);
      
    }
    catch(e) {
      console.log(e)
    }
  }

  const deleteBooking = async(id) => {
    console.log("pozvano brisanje");
    try {
      await deleteDoc(doc(db, 'booking', id));
    }
    catch(e) {
      console.log(e)
    }
    console.log('deleted:' + id)
  }

  const changeDisplayText = () =>{
    if(displayText == "Watched"){
      setDisplayText("To watch")
    } else setDisplayText("Watched");
  }

  const [isLoading, setLoading] = useState(true);

  return (
    <View style = {styles.background}>
      <View style = {styles.pickContainer}>
        <TouchableOpacity  title = {displayText} onPress = {()=> {changeDisplayText(); }}>
          <Text style = {styles.pick} >{displayText}</Text>
        </TouchableOpacity>
      </View>

      {!isLoading ? (
      <FlatList
          data  = {displayText == "To watch" ? (bookingsToWatch):(watchedBookings)}
          contentContainerStyle = {styles.flat1}
          style = {{marginBottom: 85}}
          showsVerticalScrollIndicator = {false}
          
          
          renderItem = {({item}) =>(
            <View style = {styles.listItem}>
              <View style = {styles.itemData}>
                <Text style = {styles.basicBold}>{item.data().movie}</Text>
                <Text style = {styles.basic}>{item.data().day} - {item.data().showtime}</Text>
              </View>

              <View style = {styles.buttonsContainer}>
                {displayText == 'To watch' ? (
                  <TouchableOpacity onPress = {()=>{updateBooking(item)}} style = {styles.buttonContainer}>
                  <Image source={require('../assets/towatch.png')} style = {styles.buttonIcon}/>  
                </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress = {()=>{updateBooking(item)}} style = {styles.buttonContainer}>
                  <Image source={require('../assets/watched.png')} style = {styles.buttonIcon}/>  
                  </TouchableOpacity>
                )}

              <TouchableOpacity onPress = {()=>{deleteBooking(item.id);}} style = {styles.buttonContainer}>
                <Image source={require('../assets/remove.png')} style = {styles.buttonIcon}/>  
              </TouchableOpacity>
            </View>
            </View>
            
          )}
        />) : (<></>)}

      
      </View>
  )
}

export default WatchList

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#27272A',
    flex: 1,
    alignItems: 'center',
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
    paddingLeft: 8
  },
  basicBold: {
    color: '#efedef',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 2,
    paddingLeft: 8
  },
  buttonIcon: {
    resizeMode: 'contain', 
    width: 18,
    height: 18,
    tintColor: '#efedef'
  },
  buttonContainer: {
    backgroundColor: '#e43e54',
    padding: 8,
    margin: 8,
    borderRadius: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginRight: 5
  }
})
