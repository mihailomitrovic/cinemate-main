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
                backgroundColor: '#e43e54',
                bottom: 30,
                left: 20,
                right: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 0
                }}}>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;
