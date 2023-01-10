import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from './screens/ProfileScreen'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if (rn === 'Home') {
                    iconName = focused ? 'Home' : 'Home-outline'
                }
                else if (rn === 'Profile') {
                    iconName = focused ? 'Profile' : 'Profile-outline'
                }
                else if (rn === 'Chat') {
                    iconName = focused ? 'Chat' : 'Chat-outline'
                }
            }
        })
        
        }>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
        </Tab.Navigator>
    );
}

export default Tabs;
