import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from './screens/ProfileScreen'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
            }}}>
            <Tab.Screen name="Profile" component={ProfileScreen2}/>
            <Tab.Screen name="Home" component={HomeScreen2}/>
            <Tab.Screen name="Chat" component={ChatScreen2}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;
