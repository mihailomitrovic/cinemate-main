import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
})

const [movieRef, setMovieRef] = useState([
  {genre:["Drama", "Romance"],
  name: "Downton Abbey: A New Era",
  pic: require('../assets/downton.jpeg'),
  plot: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
  runtime: "2h 5m",
  showings: ["Friday", "Saturday", "Sunday"],
  year: "2022"},

  {genre:["Drama", "Music", "History"],
  name: "Elvis",
  pic: require('../assets/elvis.jpeg'),
  plot: "The life story of Elvis Presley as seen through the complicated relationship with his enigmatic manager, Colonel Tom Parker.",
  runtime: "2h 40m",
  showings: ["Friday", "Saturday", "Sunday"],
  year: "2022"},

  {genre:["Action", "Adventure", "Science Fiction"],
  name: "Everything Everywhere All at Once",
  pic: require('../assets/eeaao.jpeg'),
  plot: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
  runtime: "2h 20m",
  showings: ["Friday", "Saturday", "Sunday"],
  year: "2022"},

  {genre:["Action", "Adventure", "Science Fiction"],
  name: "Jurassic World Dominion",
  pic: require('../assets/jurassic.jpeg'),
  plot: "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
  runtime: "2h 27m",
  showings: ["Friday", "Saturday", "Sunday"],
  year: "2022"},

  {genre:["Animation", "Science Fiction", "Adventure", "Action", "Family"],
  name: "Lightyear",
  pic: require('../assets/lightyear.jpeg'),
  plot: "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
  runtime: "1h 47m",
  showings: ["Friday", "Saturday", "Sunday"],
  year: "2022"},

  {genre:["Family", "Animation", "Action", "Adventure", "Comedy"],
  name: "Minions: The Rise of Gru",
  pic: require('../assets/minions.jpeg'),
  plot: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
  runtime: "1h 27m",
  showings: ["Friday", "Saturday", "Sunday"],
  year: "2022"},

  {genre:["Action", "Drama"],
  name: "Top Gun: Maverick",
  pic: require('../assets/topgun.jpeg'),
  plot: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
  runtime: "2h 11m",
  showings: ["Friday", "Saturday", "Sunday"],
  year: "2022"},

  {genre:["Action", "Adventure", "Fantasy"],
  name: "Thor: Love and Thunder",
  pic: require('../assets/thor.jpeg'),
  plot: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
  runtime: "1h 59m",
  showings: ["Friday", "Saturday", "Sunday"],
  year: "2022"},
])

  return (
    <View style = {styles.background}>
      <View style = {styles.pickContainer}>
      <Text style = {styles.pick}>Pick a movie</Text>
      </View>
      <FlatList
      data = {movieRef}
      contentContainerStyle = {styles.flat}
      showsHorizontalScrollIndicator = {true}
      numColumns = {2}
      renderItem = {({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Modal', item)}>
        <Image source={(item.pic)} style = {styles.image}/>
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
    justifyContent: 'center'
  },
  pickContainer: {
    backgroundColor: '#efedef',
    width: '90%',
    marginTop: 15,
    borderRadius: 7,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pick: {
    color: '#27272a',
    fontWeight: '700',
    fontSize: 20,
    textAlignVertical: 'center'
  },
  flat: {
    marginBottom: 150,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  touch: {
    backgroundColor: '#ffffff',
    height: 250,
    width: '80%',
    alignSelf: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: 220,
    width: 150,
    borderWidth: 4,
    borderRadius: 7,
    borderColor: '#efedef',
    margin: 20
  }
})