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
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === profileName) {
                        iconName = focused ? 'profile': 'profile-outline'
                    } else if (rn === chatName) {
                        iconName = focused ? 'chat' : 'chat-outline'

                        return iconName
                    }
                }
            })}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Chat" component={ChatScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}