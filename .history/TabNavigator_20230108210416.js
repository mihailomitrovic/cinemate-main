import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image } from "react-native";

import ProfileScreen from './screens/ProfileScreen'
import HomeScreen from './screens/HomeScreen'
import WatchListScreen from './screens/WatchListScreen'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#efedef',
                height: 85,
                borderRadius: 0,
                paddingVertical: 10,
                padding: 0,
                position: 'absolute',
                borderTopWidth: 0
                }}}
                initialRouteName = "HomeScreen">
            <Tab.Screen name="Profile" component={ProfileScreen}
            options = {{tabBarIcon: ({focused}) => {
                return (
                    <Image source={require('./assets/user.png')} name = 'Profile' style = {{resizeMode: 'contain',
                    width: 27,
                    tintColor: focused ? '#e43e54' : '#27272a',
                opacity: 1}}/>
                    )}}}/>
            <Tab.Screen name="HomeScreen" component={HomeScreen}
            options = {{tabBarIcon: ({focused}) => {
                return (
                    <Image source={require('./assets/film.png')} name = 'Home' style = {{resizeMode: 'contain',
                    width: 27,
                    tintColor: focused ? '#e43e54' : '#27272a'}}/>
                    )}}}/>
            <Tab.Screen name="WatchList" component={WatchListScreen}
            options = {{tabBarIcon: ({focused}) => {
                return (
                    <Image source={require('./assets/list.png')} name = 'WatchList' style = {{resizeMode: 'contain',
                    width: 32,
                    tintColor: focused ? '#e43e54' : '#27272a'}}/>
                    )}}}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;


const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
  })
