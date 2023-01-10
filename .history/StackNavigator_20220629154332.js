import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen'
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  return (
      <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen}
            options = {{
                headerTintColor: '#27272A',
                headerTitle: 'Sign Up',
                headerStyle: {
                    backgroundColor: '#27272A'
                 }}}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>  )
}

export default StackNavigator