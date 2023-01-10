import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const ChatScreen = () => {
  return (
    <View style = {styles.background}>
      <Text style = {{color: '#efedef', fontWeight: 'bold', fontSize: 30}}>Matched with </Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  background: {
      flex: 1,
      backgroundColor:'#27272A',
      justifyContent: 'center',
      alignItems: 'center'
  },
})