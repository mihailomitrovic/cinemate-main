import React from "react";
import {Text, View} from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ChatScreen from "./screens/ChatScreen";

const homeName = 'Home';
const profileName = 'Profile';
const chatName = 'Chat';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer independent = {true}>
            <Tab.Navigator
            initialRouteName = {homeName}
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    
                }
            })}>

            </Tab.Navigator>
        </NavigationContainer>
    );
}