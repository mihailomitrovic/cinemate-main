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
                bottom: 50,
                right: 20
            }}}>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Home2" component={HomeScreen}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;
