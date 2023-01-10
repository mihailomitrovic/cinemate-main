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
          <Stack.Screen name="Login" component={LoginScreen} 
            options = {{
                headerTintColor: '#ffffff',
                headerTitle: 'Log In',
                headerStyle: {
                    backgroundColor: '#c9a76d'
                 }}}/>
          <Stack.Screen name="Signup" component={SignupScreen}
            options = {{
                headerTintColor: '#ffffff',
                headerTitle: 'Sign Up',
                headerStyle: {
                    backgroundColor: '#e43e54'
                 }}}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>  )
}

export default StackNavigator