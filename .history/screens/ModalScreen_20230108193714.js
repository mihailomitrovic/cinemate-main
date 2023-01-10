import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native'
import React, { useState }from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../firebase'
import { doc, setDoc, arrayUnion} from '@firebase/firestore'

const ModalScreen = ({route}) => {
  const fixedDays = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday","Sunday"];
  const fixedHours = ["20:00","21:00","22:00"];


  const [day, setDay] = useState('')
  const [showtime, setShowtime] = useState('')
  const user = auth.currentUser
  const incompleteForm = !day || !showtime
  const navigation = useNavigation();
  const bookMovie = async() => {
    var bookingid = route.params.name + day + showtime;
    console.log(bookingid);

  try {
    await setDoc(doc(db, 'booking', bookingid), {
      movie: route.params.name,
      day: day,
      showtime: showtime,
      watched: false, 
      users: arrayUnion(user.uid)
    }, {merge: true}).then (() => {
     navigation.navigate('WatchList', {id: bookingid});
    }
    )
  }
  catch(e) {
    console.log(e)
  }
}

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>{route.params.name}</Text>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style = {styles.info}>
        <Image source={{uri: route.params.pic}} style = {styles.image}/>
        <View style = {styles.infoCol}>
          <Text style = {styles.text}>{route.params.year} • {route.params.runtime}</Text>
          <Text style = {styles.text}>{(route.params.genre).join(", ")}</Text>
          <Text style = {[styles.text,{fontStyle: 'italic', fontWeight: '400'}]}>{route.params.tagline}</Text>
        </View>
      </View>

      <Text style = {styles.text2}>Overview</Text>
      <View style = {styles.plotContainer}>
        <Text style = {styles.plot}>{route.params.plot}</Text>
      </View>
      <Text style = {styles.text2}>Pick a day</Text>
      <View style = {styles.pickContainer}>
      <FlatList
        data = {fixedDays}
        contentContainerStyle = {styles.flat}
        showsHorizontalScrollIndicator = {false}
        style = {styles.flat}
        horizontal = {true}
        renderItem = {({item}) => (
        <TouchableOpacity onPress = {() => {setDay(item)}} style = {item === day ? styles.pick : styles.pickPressed}>
        <Text style = {item === day ? styles.pickText : styles.pickTextPressed}>{item}</Text>
        </TouchableOpacity>
        )
      }
      />
      </View>

      <Text style = {[styles.text2, {paddingTop: 30}]}>Pick a showtime</Text>
      <View style = {styles.pickContainer}>
      <FlatList
        data = {fixedHours}
        contentContainerStyle = {styles.flat}
        showsHorizontalScrollIndicator = {false}
        style = {styles.flat}
        horizontal = {true}
        renderItem = {({item}) => (
        <TouchableOpacity onPress={() => {setShowtime(item)}} style = {item === showtime ? styles.pick : styles.pickPressed}>
        <Text style = {item === showtime ? styles.pickText : styles.pickTextPressed}>{item}</Text>
        </TouchableOpacity>
        )
      }
      />
      </View>

      <View style={[styles.buttonContainer, {opacity: incompleteForm ? 0.5 : 1.0}]}>
        <TouchableOpacity onPress = {bookMovie} style = {styles.button}>
          <Text style = {styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  )
}

export default ModalScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#efedef'
    },
    title: {
      marginTop: 30,
      color: '#27272a',
      fontWeight: '600',
      fontSize: 20,
      paddingBottom: 30,
    },
    info: {
      width: '90%',
      flexDirection: 'row',
      backgroundColor: '#efedef',
      alignItems: 'center'
    },
    infoCol: {
      flexDirection: 'column'
    },
    image: {
      resizeMode: 'contain',
      height: 220,
      width: 150,
      borderRadius: 7,
      borderColor: '#c9a76d',
      borderWidth: 5,
      alignSelf: 'flex-start',
      marginLeft: 12
    },
    text: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: 180,
      color: '#27272a',
      fontWeight: '600',
      fontSize: 15,
      padding: 10,
      marginLeft: 10
    },
    text2: {
      alignSelf: 'flex-start',
      marginLeft: 32,
      paddingTop: 40,
      fontWeight: '600',
      fontSize: 15
    },
    plotContainer: {
      width: '85%',
      backgroundColor: '#c9a76d',
      marginTop: 10,
      padding: 10,
      borderRadius: 7
    },
    plot: {
      color: '#efedef',
      fontWeight: '500'
    },
    pickContainer: {
      width: '94%',
      backgroundColor: '#efedef',
      marginTop: 15,
      alignSelf: 'flex-end',
      borderRadius: 7
    },
    pick: {
     backgroundColor: '#c9a76d',
      borderRadius: 25,
      borderColor: '#c9a76d',
      borderWidth: 2,
      marginHorizontal: 5
    },
    pickPressed: {
      backgroundColor: '#efedef',
       borderRadius: 25,
       borderColor: '#c9a76d',
       borderWidth: 2,
       marginHorizontal: 5
     },
    pickTextPressed: {
      padding: 10,
      color: '#27272a'
    },
    pickText: {
      padding: 10,
      color: '#efedef'
    },
    buttonContainer: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 35,
    },
    button: {
      width: '50%',
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#c9a76d'
    },
    buttonText: {
      color: '#efedef',
      fontWeight: '600',
      fontSize: 15,
      textAlign: 'center'
    }
})