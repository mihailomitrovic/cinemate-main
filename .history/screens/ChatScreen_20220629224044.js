import { View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native'
import React from 'react'
import TabNavigator from '../TabNavigator';

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <><SafeAreaView style = {styles.background}>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView contentContainerStyle = {{justifyContent: 'center', alignItems: 'center'}}>
      </ScrollView>
      </SafeAreaView>
      <TabNavigator/>
      </>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  background: {
      backgroundColor:'#27272A',
      justifyContent: 'center'
    },
  text: {
    color: '#ffffff'
  }
})