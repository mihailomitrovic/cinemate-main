import { View, Text, Image, StatusBar, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'

const WelcomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

  return (
    <View style={styles.background}>
        <StatusBar barStyle="light-content" translucent={true} />

        <View style={styles.imageContainer}>
            <Image source={require('../assets/icon.png')} style={styles.image}/>
        </View>

        <View style={styles.text1Container}>
            <Text style={styles.text1a}>Cine</Text>
            <Text style={styles.text1b}>Mate</Text>
        </View>

        <View style = {styles.buttonsContainer}>
            <View style={styles.loginContainer}>
                <TouchableOpacity style = {styles.loginOpacity} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
        </View>

        <View style={styles.text2Container}>
            <Text style = {styles.text2a}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style = {styles.text2b}> Sign up</Text>
            </TouchableOpacity>
        </View>


        </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:'#27272A'
    },
    imageContainer: {
        alignItems: 'center',
        paddingTop: 200
    },
    image: {
        resizeMode:'contain',
        height: 140
    },
    text1Container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
        alignItems: 'center',
    },
    text1a: {
        color:'#efedef',
        fontSize: 33,
        fontWeight: 'bold',
    },
    text1b: {
        color:'#e43e54',
        fontSize: 33,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        paddingTop: 90
    },
    loginContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    loginOpacity: {
        fontWeight: 'bold', 
        backgroundColor: '#efedef', 
        height: 40, 
        width: '75%', 
        borderRadius: 25,
        justifyContent: 'center'
    },
    loginText: {
        color: '#27272A', 
        fontWeight: '600', 
        textAlign: 'center',
        fontSize: 15
    },
    text2Container: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row', 
        paddingTop: 20
    },
    text2a: {
        color:'#efedef', 
        fontWeight: '500', 
        fontSize: 15,
    },
    text2b: {
        color:'#fcd89f',
        fontWeight: '500', 
        fontSize: 15
    }
})