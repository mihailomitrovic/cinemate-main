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
            <Tab.Screen name="Profile2" component={ProfileScreen}/>
            <Tab.Screen name="Home2" component={HomeScreen}/>
            <Tab.Screen name="Chat2" component={ChatScreen}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;
