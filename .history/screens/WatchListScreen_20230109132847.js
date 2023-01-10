import {View, Text, StyleSheet, FlatList, Switch} from 'react-native'
import CheckBox from 'react-native-bouncy-checkbox'
import React from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc} from '@firebase/firestore'
import { useEffect, useState, setState } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";


const WatchList = () => {
  
  const uid = auth.currentUser.uid;
  const docRef = doc(db, 'users', uid);
  const [user, setUser] = useState({});
  const [watched, setWatched] = useState(true);
  const [text, setText] = useState('Watched movies');
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const toggleSwitch = () =>{
    if(watched){
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
  itemSeparator = () =>{
    return <View style = {styles.separator}></View>
  }
  function updateBooking(item){
    console.log('e');
  }
  return (
    <View style = {styles.background}>
      <View style = {styles.pickContainer}>
        <Text style = {styles.pick}>{text}</Text>
        <Switch 
          trackColor={{false: 'red', true:'#c9a76d'}}
          onValueChange = {toggleSwitch}
          value = {watched}
        />
      </View>
      
      <FlatList
        contentContainerStyle = {styles.flat}
        
        data = {filteredBookings}

        renderItem  = {({item}) => (
          <View style = {styles.listItem}>
            <Text style = {styles.basic}>{item.data().movie}, {item.data().day}, {item.data().showtime}</Text>     
            <CheckBox
              size={20}
              fillColor="green"
              onPress={updateBooking(item)}
              isChecked = {!watched}
            ></CheckBox>
          </View>
          
          
        )}
        ItemSeparatorComponent = {itemSeparator}
      />
      
    </View>
  )
}

export default WatchList

const styles = StyleSheet.create({
  background: {
      flex: 1,
      backgroundColor:'#27272A',
      justifyContent: 'center',
      alignItems: 'center'
  },
  listItem: {
    backgroundColor:'#27272A',
    
  },
  basic:{
    color:'white',
    height:50
    
  },
  pickContainer: {
    backgroundColor: '#efedef',
    width: '88%',
    marginTop: 5,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  pick: {
    color: '#27272a',
    fontWeight: '600',
    fontSize: 18,
    textAlignVertical: 'center',
    marginRight: 10
  }, 
  separator :{
    height: 1,
    width: '100%',
    backgroundColor: '#efedef'
  },  
  flat: {
    backgroundColor: '#27272a',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 85, 
    marginTop: 20,
    border: 1 
  },
  
  touch: {
    padding: 20
  },
})