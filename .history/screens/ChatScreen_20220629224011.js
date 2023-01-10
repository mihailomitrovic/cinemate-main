import { View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native'
import React from 'react'

const ChatScreen = () => {
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