import { View, Text , FlatList, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc, collection} from '@firebase/firestore'
import { firestore } from 'react-native-firebase'

/* const MatchScreen = ({route}) => {

  const id = route.params.id;
  const [booking, setBooking] = useState(null);
 
  function getBooking(bookingId) {
    getDoc(doc(db, "booking", bookingId)).then((snapshot) => {
      if (snapshots.exists) {
        booking = snapshots.data();

        setBooking(booking);
      }
    });
  }

  useEffect(() => {
    getBooking();
  }, []);

  console.log(" Booking :", booking);

  /*const [info, setInfo] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      const snap = await getDoc(booking)
      setInfo({info, ...snap.data()})
    }
    getInfo()
  },[]) */
  
  return (
    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
    {/* <FlatList
      data = {bookedUsers}
      style = {{marginBottom: 85, backgroundColor: '#000000'}}
      showsVerticalScrollIndicator = {false}
      numColumns = {1}
      renderItem = {({item}) => (
        <TouchableOpacity onPress={() => {}} >
        <Text>{item}</Text>
        </TouchableOpacity>
      )}
      /> */}
      <Text>{id}</Text>
  </View>
  )
      }

export default MatchScreen