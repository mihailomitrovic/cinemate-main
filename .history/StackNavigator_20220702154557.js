import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen';
import NavigationScreen from './screens/NavigationScreen';
import SetupScreen from './screens/SetupScreen';
import ModalScreen from './screens/ModalScreen';

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
                    backgroundColor: '#27272a',
                 },
                 headerShadowVisible: false,
                headerBackTitle: 'Back'}}/>
          <Stack.Screen name="Signup" component={SignupScreen}
            options = {{
                headerTintColor: '#ffffff',
                headerTitle: 'Create account',
                headerStyle: {
                    backgroundColor: '#27272A'
                 },
                headerShadowVisible: false,
              headerBackTitle: 'Back'}}
                />
          <Stack.Screen name="Setup" component={SetupScreen}
            options = {{
            headerTintColor: '#ffffff',
            headerTitle: 'Set up profile',
            headerStyle: {
                backgroundColor: '#27272a',
             },
             headerShadowVisible: false,
            headerBackTitle: 'Back'}}/>
          <Stack.Screen name="Navigation" component={NavigationScreen}/>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="Modal" component={ModalScreen} options = {{
            headerTintColor: '#27272A',
            headerTitle: 'Set up profile',
            headerStyle: {
                backgroundColor: '#efedef',
             },
             headerShadowVisible: false,
            headerBackTitle: 'Back'}}/>
          </Stack.Group>

      </Stack.Navigator>  )
}

export default StackNavigator