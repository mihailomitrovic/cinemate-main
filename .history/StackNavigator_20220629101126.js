import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignUpScreen'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  return (
      <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>  )
}

export default StackNavigator